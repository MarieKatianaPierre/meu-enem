

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  ActivityIndicator,
  Platform,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ChevronLeft, BookOpen, CheckCircle2 } from 'lucide-react-native';

import { colors } from '../theme/colors';
import { licoes } from '../data/licoes';

const CHAVE_REVISOES = '@meu_enem_revisoes';

type RevisaoSalva = {
  id: string;
  materia: string;
  assunto: string;
  concluida: boolean;
  dataConclusao: string;
};

export default function EstudoScreen() {
  const router = useRouter();
  const [salvando, setSalvando] = useState(false);

  const params = useLocalSearchParams<{
    materia?: string | string[];
    assunto?: string | string[];
  }>();

  const materia = Array.isArray(params.materia)
    ? params.materia[0]
    : params.materia || 'Matéria não informada';

  const assunto = Array.isArray(params.assunto)
    ? params.assunto[0]
    : params.assunto || 'Estudo';

  const licao = licoes[`${materia}|${assunto}`];

  // Salva o assunto estudado para aparecer na página Revisões.
  const concluirEstudo = async () => {
    if (salvando) return;

    setSalvando(true);

    try {
      const dadosSalvos = await AsyncStorage.getItem(CHAVE_REVISOES);

      const revisoes: RevisaoSalva[] = dadosSalvos
        ? JSON.parse(dadosSalvos)
        : [];

      // Evita cadastrar o mesmo assunto mais de uma vez.
      const jaExiste = revisoes.some(
        (item) =>
          item.materia === materia &&
          item.assunto === assunto
      );

      if (!jaExiste) {
        revisoes.push({
          id: `${materia}|${assunto}`,
          materia,
          assunto,
          concluida: false,
          dataConclusao: new Date().toISOString(),
        });

        await AsyncStorage.setItem(
          CHAVE_REVISOES,
          JSON.stringify(revisoes)
        );
      }

      const mensagem = jaExiste
        ? 'Este assunto já está na sua lista de revisões.'
        : 'O assunto foi salvo na sua lista de revisões.';

      if (Platform.OS === 'web') {
        window.alert(`Estudo concluído!\n\n${mensagem}`);
        router.replace('/revisoes');
      } else {
        Alert.alert('Estudo concluído!', mensagem, [
          {
            text: 'Ver revisões',
            onPress: () => router.replace('/revisoes'),
          },
        ]);
      }
    } catch (erro) {
      if (Platform.OS === 'web') {
        window.alert(
          'Não foi possível salvar o estudo. Tente novamente.'
        );
      } else {
        Alert.alert(
          'Erro',
          'Não foi possível salvar o estudo. Tente novamente.'
        );
      }
    } finally {
      setSalvando(false);
    }
  };

  return (
    <View style={styles.container}>
      {/* Botão voltar com área de toque maior */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.back()}
        activeOpacity={0.7}
        accessibilityRole="button"
        accessibilityLabel="Voltar para a página anterior"
      >
        <ChevronLeft color={colors.primary} size={25} />
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.iconContainer}>
          <BookOpen color={colors.primary} size={34} />
        </View>

        <Text style={styles.title}>{assunto}</Text>

        <Text style={styles.subtitle}>
          Matéria: {materia}
        </Text>

        {licao ? (
          <>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>
                Vamos aprender!
              </Text>

              <Text style={styles.description}>
                {licao.introducao}
              </Text>
            </View>

            {licao.secoes.map((secao, index) => (
              <View
                key={`${secao.titulo}-${index}`}
                style={styles.card}
              >
                <Text style={styles.sectionTitle}>
                  {secao.titulo}
                </Text>

                <Text style={styles.description}>
                  {secao.conteudo}
                </Text>
              </View>
            ))}
          </>
        ) : (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>
              Lição em preparação
            </Text>

            <Text style={styles.description}>
              Estamos preparando a lição deste assunto.
              Em breve, você encontrará explicações,
              exemplos e um resumo para estudar.
            </Text>
          </View>
        )}

        {/* Botão para salvar o assunto na lista de revisões */}
        <TouchableOpacity
          style={[
            styles.concluirButton,
            salvando && styles.concluirButtonDesabilitado,
          ]}
          onPress={concluirEstudo}
          disabled={salvando}
          activeOpacity={0.8}
          accessibilityRole="button"
          accessibilityLabel="Concluir estudo e adicionar às revisões"
        >
          {salvando ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <>
              <CheckCircle2 size={21} color="#FFFFFF" />
              <Text style={styles.concluirButtonText}>
                Concluir estudo
              </Text>
            </>
          )}
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    paddingHorizontal: 24,
    paddingTop: 40,
  },

  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginTop: 15,
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 8,
    minHeight: 48,
    minWidth: 100,
    borderRadius: 10,
  },

  backText: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: '600',
  },

  scrollContent: {
    paddingBottom: 35,
  },

  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 18,
    backgroundColor: '#06B6D418',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },

  title: {
    color: colors.textMain,
    fontSize: 26,
    fontWeight: '800',
  },

  subtitle: {
    color: colors.textMuted,
    fontSize: 15,
    marginTop: 8,
    marginBottom: 8,
  },

  card: {
    marginTop: 18,
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 16,
    padding: 20,
  },

  cardTitle: {
    color: colors.textMain,
    fontSize: 19,
    fontWeight: '700',
    marginBottom: 12,
  },

  sectionTitle: {
    color: colors.primary,
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 12,
  },

  description: {
    color: colors.textMuted,
    fontSize: 15,
    lineHeight: 24,
  },

  concluirButton: {
    marginTop: 24,
    marginBottom: 20,
    backgroundColor: colors.primary,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
    minHeight: 52,
  },

  concluirButtonDesabilitado: {
    opacity: 0.7,
  },

  concluirButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '800',
  },
});
