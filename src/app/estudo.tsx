import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ChevronLeft, BookOpen } from 'lucide-react-native';
import { colors } from '../theme/colors';

export default function EstudoScreen() {
  const router = useRouter();

  const { materia, assunto } = useLocalSearchParams<{
    materia?: string;
    assunto?: string;
  }>();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <ChevronLeft color={colors.primary} size={24} />
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>

      <View style={styles.iconContainer}>
        <BookOpen color={colors.primary} size={34} />
      </View>

      <Text style={styles.title}>{assunto || 'Estudo'}</Text>

      <Text style={styles.subtitle}>
        Matéria: {materia || 'Não informada'}
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Vamos aprender!</Text>
        <Text style={styles.description}>
          Aqui ficará o conteúdo de estudo, com explicações,
          exemplos, resumos e exercícios sobre este assunto.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    padding: 24,
    paddingTop: 30,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginBottom: 35,
  },
  backText: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: '600',
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
  },
  card: {
    marginTop: 28,
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 16,
    padding: 20,
  },
  cardTitle: {
    color: colors.textMain,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
  },
  description: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 22,
  },
});
