
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Switch,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

import { colors } from '../theme/colors';
import { Home,
  BookOpen,
  ClipboardList,
  UserRound, } from 'lucide-react-native';

const CHAVE_USUARIO = '@meu_enem_usuario';
const CHAVE_NOTIFICACOES = '@meu_enem_notificacoes';
const CHAVE_TEMA = '@meu_enem_tema_escuro';

type DadosUsuario = {
  nome?: string;
  email?: string;
  iniciais?: string;
};

export default function ProfileScreen() {
  const router = useRouter();

  const [notificacoes, setNotificacoes] = useState(true);
  const [temaEscuro, setTemaEscuro] = useState(true);
  const [nome, setNome] = useState('Estudante');
  const [email, setEmail] = useState('');
  const [iniciais, setIniciais] = useState('EE');
  const [carregando, setCarregando] = useState(true);

  // Carrega os dados salvos no celular ou na versão web.
  useEffect(() => {
    async function carregarDados() {
      try {
        const [usuarioSalvo, notificacoesSalvas, temaSalvo] =
          await Promise.all([
            AsyncStorage.getItem(CHAVE_USUARIO),
            AsyncStorage.getItem(CHAVE_NOTIFICACOES),
            AsyncStorage.getItem(CHAVE_TEMA),
          ]);

        if (usuarioSalvo) {
          const dados = JSON.parse(usuarioSalvo) as DadosUsuario;

          setNome(dados.nome || 'Estudante');
          setEmail(dados.email || '');

          const iniciaisCalculadas = (dados.nome || 'EE')
            .trim()
            .split(/\s+/)
            .slice(0, 2)
            .map((parte) => parte.charAt(0))
            .join('')
            .toUpperCase();

          setIniciais(
            dados.iniciais || iniciaisCalculadas || 'EE'
          );
        } else {
          setNome('Estudante');
          setEmail('');
          setIniciais('EE');
        }

        if (notificacoesSalvas !== null) {
          setNotificacoes(notificacoesSalvas === 'true');
        }

        if (temaSalvo !== null) {
          setTemaEscuro(temaSalvo === 'true');
        }
      } catch (error) {
        console.error('Erro ao carregar perfil:', error);
        Alert.alert(
          'Atenção',
          'Não foi possível carregar todos os dados do perfil.'
        );
      } finally {
        setCarregando(false);
      }
    }

    carregarDados();
  }, []);

  // Salva a preferência de notificações.
  const alternarNotificacoes = async (valor: boolean) => {
    setNotificacoes(valor);

    try {
      await AsyncStorage.setItem(
        CHAVE_NOTIFICACOES,
        String(valor)
      );
    } catch (error) {
      console.error('Erro ao salvar notificações:', error);
      Alert.alert(
        'Erro',
        'Não foi possível salvar essa preferência.'
      );
    }
  };

  // Salva a preferência de tema.
  const alternarTema = async (valor: boolean) => {
    setTemaEscuro(valor);

    try {
      await AsyncStorage.setItem(CHAVE_TEMA, String(valor));
    } catch (error) {
      console.error('Erro ao salvar tema:', error);
      Alert.alert(
        'Erro',
        'Não foi possível salvar essa preferência.'
      );
    }
  };

  // Abre a tela de recuperação de senha existente no projeto.
  const handleAlterarSenha = () => {
    router.push('/recuperar');
  };

  // Exibe os termos enquanto a tela específica não existe.
  const handleTermos = () => {
    Alert.alert(
      'Privacidade e uso',
      'O Meu ENEM é um aplicativo de apoio aos estudos. ' +
        'Os dados do perfil são armazenados localmente neste dispositivo. ' +
        'Esta versão demonstrativa ainda não possui um sistema completo ' +
        'de autenticação ou uma política de privacidade publicada.'
    );
  };

  // Remove os dados do perfil e retorna ao login.
     
const handleSairDaConta = async () => {
  try {
    await AsyncStorage.removeItem('@meu_enem_usuario');
    router.replace('/login');
  } catch (error) {
    console.error('Erro ao sair da conta:', error);

    Alert.alert(
      'Erro',
      'Não foi possível sair da conta. Tente novamente.'
    );
  }
};


  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Informações do aluno */}
        <View style={styles.profileHeader}>
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarText}>{iniciais}</Text>
          </View>

          <Text style={styles.profileName}>
            {carregando ? 'Carregando perfil...' : nome}
          </Text>

          <Text style={styles.profileEmail}>
            {email || 'E-mail não informado'}
          </Text>

          <View style={styles.badgeSerie}>
            <Text style={styles.badgeSerieText}>
              Candidato ENEM
            </Text>
          </View>
        </View>

        {/* Progresso do aluno */}
        <Text style={styles.sectionTitle}>
          Seu Progresso no MVP
        </Text>

        <View style={styles.metricsContainer}>
          <View style={styles.metricRow}>
            <Text style={styles.metricLabel}>
              📅 Metas do Cronograma
            </Text>
            <Text
              style={[
                styles.metricValue,
                { color: colors.success },
              ]}
            >
              65% Feito
            </Text>
          </View>

          <View style={styles.metricRow}>
            <Text style={styles.metricLabel}>
              📝 Média nos Simulados
            </Text>
            <Text
              style={[
                styles.metricValue,
                { color: colors.primary },
              ]}
            >
              680 pts
            </Text>
          </View>
        </View>

        {/* Configurações */}
        <Text style={styles.sectionTitle}>
          Ajustes do Aplicativo
        </Text>

        <View style={styles.settingsBox}>
          <View style={styles.settingItem}>
            <View style={styles.settingDescription}>
              <Text style={styles.settingItemTitle}>
                🔔 Notificações Push
              </Text>
              <Text style={styles.settingItemDesc}>
                Preferência para lembretes de estudo
              </Text>
            </View>

            <Switch
              value={notificacoes}
              onValueChange={alternarNotificacoes}
              trackColor={{
                false: '#2E2559',
                true: colors.primary,
              }}
              thumbColor={
                notificacoes ? colors.success : '#94A3B8'
              }
            />
          </View>

          <View style={styles.settingItem}>
            <View style={styles.settingDescription}>
              <Text style={styles.settingItemTitle}>
                🌗 Dark Mode Premium
              </Text>
              <Text style={styles.settingItemDesc}>
                Preferência de tema do aplicativo
              </Text>
            </View>

            <Switch
              value={temaEscuro}
              onValueChange={alternarTema}
              trackColor={{
                false: '#2E2559',
                true: colors.primary,
              }}
              thumbColor={
                temaEscuro ? colors.success : '#94A3B8'
              }
            />
          </View>

          <TouchableOpacity
            style={styles.linkRow}
            activeOpacity={0.7}
            onPress={handleAlterarSenha}
          >
            <Text style={styles.linkRowText}>
              🔑 Alterar senha de acesso
            </Text>
            <Text style={styles.arrowIcon}>➔</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.linkRow}
            activeOpacity={0.7}
            onPress={handleTermos}
          >
            <Text style={styles.linkRowText}>
              📄 Termos de privacidade & Uso
            </Text>
            <Text style={styles.arrowIcon}>➔</Text>
          </TouchableOpacity>
        </View>

        {/* Sair */}
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={handleSairDaConta}
          activeOpacity={0.8}
        >
          <Text style={styles.logoutButtonText}>
            Sair da Minha Conta 🚪
          </Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Navegação inferior preservada */}
      <View style={styles.tabBarFixed}>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => router.push('/home')}
        >
          <Home color={colors.textMuted} size={22} />
          <Text style={styles.footerTabText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => router.push('/materias')}
        >
          <BookOpen color={colors.primary} size={22} />
          <Text style={styles.footerTabText}>Estudos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => router.push('/simulado')}
        >
          <ClipboardList color={colors.textMuted} size={22} />
          <Text style={styles.footerTabText}>Simulado</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItemActive}>
           <UserRound color={colors.primary} size={22} />
          <Text style={styles.footerTabTextActive}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  scrollContent: {
    padding: 24,
    paddingBottom: 110,
  },
  profileHeader: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 28,
  },
  avatarCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: colors.border,
  },
  avatarText: {
    fontSize: 28,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  profileName: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.textMain,
    marginTop: 14,
    textAlign: 'center',
  },
  profileEmail: {
    fontSize: 14,
    color: colors.textMuted,
    marginTop: 4,
    textAlign: 'center',
  },
  badgeSerie: {
    backgroundColor: colors.primaryLight,
    borderWidth: 1,
    borderColor: colors.border,
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    marginTop: 12,
  },
  badgeSerieText: {
    fontSize: 11,
    color: colors.primary,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.textMain,
    marginBottom: 12,
    marginTop: 16,
  },
  metricsContainer: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: colors.radius,
    padding: 16,
    gap: 12,
    marginBottom: 16,
  },
  metricRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
  },
  metricLabel: {
    fontSize: 14,
    color: colors.textMain,
    fontWeight: '500',
    flexShrink: 1,
  },
  metricValue: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  settingsBox: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: colors.radius,
    paddingHorizontal: 16,
    paddingVertical: 4,
    marginBottom: 28,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    gap: 12,
  },
  settingDescription: {
    flex: 1,
  },
  settingItemTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textMain,
  },
  settingItemDesc: {
    fontSize: 11,
    color: colors.textMuted,
    marginTop: 2,
  },
  linkRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  linkRowText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.textMain,
    flexShrink: 1,
  },
  arrowIcon: {
    fontSize: 12,
    color: colors.textMuted,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  logoutButton: {
    backgroundColor: 'rgba(244, 63, 94, 0.1)',
    borderWidth: 1,
    borderColor: colors.danger,
    padding: 16,
    borderRadius: colors.radius,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  logoutButtonText: {
    color: colors.danger,
    fontSize: 15,
    fontWeight: '700',
  },
  tabBarFixed: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 72,
    backgroundColor: colors.surface,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabItemActive: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabIcon: {
    fontSize: 20,
  },
  footerTabText: {
    fontSize: 11,
    color: colors.textMuted,
    fontWeight: '600',
    marginTop: 4,
  },
  footerTabTextActive: {
    fontSize: 11,
    color: colors.primary,
    fontWeight: 'bold',
    marginTop: 4,
  },
});
