
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import {
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Clock3,
  House,
  RotateCcw,
  GraduationCap,
  Calculator,
  FlaskConical,
  Landmark,
  Lightbulb,
} from 'lucide-react-native';

import { colors } from '../theme/colors';

const revisoesAgendadas = [
  {
    id: 1,
    titulo: 'Porcentagem e Proporção',
    materia: 'Matemática',
    prazo: 'Revisar amanhã',
    status: 'urgente',
  },
  {
    id: 2,
    titulo: 'Cadeias Alimentares e Ecologia',
    materia: 'Biologia',
    prazo: 'Em 7 dias',
    status: 'agendado',
  },
  {
    id: 3,
    titulo: 'Era Vargas e Estado Novo',
    materia: 'História',
    prazo: 'Em 30 dias',
    status: 'agendado',
  },
];

function IconeMateria({ materia }: { materia: string }) {
  switch (materia) {
    case 'Matemática':
      return <Calculator size={20} color={colors.primary} />;
    case 'Biologia':
      return <FlaskConical size={20} color={colors.primary} />;
    case 'História':
      return <Landmark size={20} color={colors.primary} />;
    default:
      return <BookOpen size={20} color={colors.primary} />;
  }
}

export default function RevisionScreen() {
  const router = useRouter();
  const [concluidas, setConcluidas] = useState<number[]>([]);

  const alternarConclusao = (id: number) => {
    setConcluidas((anteriores) =>
      anteriores.includes(id)
        ? anteriores.filter((itemId) => itemId !== id)
        : [...anteriores, id]
    );
  };

  const progresso = Math.round(
    (concluidas.length / revisoesAgendadas.length) * 100
  );

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View style={styles.headerIcon}>
            <RotateCcw size={25} color={colors.primary} />
          </View>

          <Text style={styles.title}>Revisões</Text>

          <Text style={styles.subtitle}>
            Relembre os assuntos estudados e acompanhe sua preparação para o ENEM.
          </Text>
        </View>

        <View style={styles.progressCard}>
          <View style={styles.progressHeader}>
            <View>
              <Text style={styles.progressTitle}>Seu progresso</Text>
              <Text style={styles.progressSubtitle}>
                {concluidas.length} de {revisoesAgendadas.length} revisões concluídas
              </Text>
            </View>

            <Text style={styles.progressPercent}>{progresso}%</Text>
          </View>

          <View style={styles.progressTrack}>
            <View
              style={[styles.progressFill, { width: `${progresso}%` }]}
            />
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <View style={styles.sectionIcon}>
            <CalendarDays size={20} color={colors.primary} />
          </View>

          <View style={styles.sectionHeading}>
            <Text style={styles.sectionTitle}>Lista de revisões</Text>
            <Text style={styles.sectionSubtitle}>
              Assuntos para reforçar sua memória
            </Text>
          </View>
        </View>

        <View style={styles.listContainer}>
          {revisoesAgendadas.map((item) => {
            const concluida = concluidas.includes(item.id);

            return (
              <View key={item.id} style={styles.revisionCard}>
                <View style={styles.revisionMain}>
                  <View style={styles.subjectIcon}>
                    <IconeMateria materia={item.materia} />
                  </View>

                  <View style={styles.revisionContent}>
                    <Text style={styles.materiaLabel}>
                      {item.materia}
                    </Text>

                    <Text
                      style={[
                        styles.cardTitle,
                        concluida && styles.cardTitleConcluido,
                      ]}
                    >
                      {item.titulo}
                    </Text>

                    <View
                      style={[
                        styles.badge,
                        concluida
                          ? styles.badgeConcluido
                          : item.status === 'urgente'
                            ? styles.badgeUrgente
                            : styles.badgeAgendado,
                      ]}
                    >
                      {concluida ? (
                        <CheckCircle2 size={14} color="#16804A" />
                      ) : (
                        <Clock3
                          size={14}
                          color={
                            item.status === 'urgente'
                              ? colors.danger
                              : colors.primary
                          }
                        />
                      )}

                      <Text
                        style={[
                          styles.badgeText,
                          concluida
                            ? styles.textConcluido
                            : item.status === 'urgente'
                              ? styles.textUrgente
                              : styles.textAgendado,
                        ]}
                      >
                        {concluida ? 'Concluída' : item.prazo}
                      </Text>
                    </View>
                  </View>
                </View>

                <TouchableOpacity
                  style={[
                    styles.completeButton,
                    concluida && styles.completeButtonActive,
                  ]}
                  onPress={() => alternarConclusao(item.id)}
                  activeOpacity={0.8}
                  accessibilityRole="button"
                  accessibilityLabel={
                    concluida
                      ? `Desmarcar revisão de ${item.titulo}`
                      : `Marcar revisão de ${item.titulo} como concluída`
                  }
                >
                  <CheckCircle2
                    size={18}
                    color={concluida ? '#FFFFFF' : colors.primary}
                  />
                  <Text
                    style={[
                      styles.completeButtonText,
                      concluida && styles.completeButtonTextActive,
                    ]}
                  >
                    {concluida ? 'Concluída' : 'Marcar'}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>

        <View style={styles.infoBox}>
          <View style={styles.infoIcon}>
            <Lightbulb size={21} color={colors.primary} />
          </View>

          <View style={styles.infoContent}>
            <Text style={styles.infoTitle}>Dica de estudo</Text>
            <Text style={styles.infoText}>
              Experimente revisar um assunto após 1 dia, depois de 7 dias
              e novamente após 30 dias. Resolver questões também ajuda a
              identificar o que precisa de mais atenção.
            </Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.tabBarFixed}>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => router.push('/home')}
        >
          <House size={21} color={colors.textMuted} />
          <Text style={styles.footerTabText}>Início</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => router.push('/materias')}
        >
          <BookOpen size={21} color={colors.textMuted} />
          <Text style={styles.footerTabText}>Estudos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => router.push('/simulado')}
        >
          <GraduationCap size={21} color={colors.textMuted} />
          <Text style={styles.footerTabText}>Simulado</Text>
        </TouchableOpacity>

        <View style={styles.tabItemActive}>
          <RotateCcw size={21} color={colors.primary} />
          <Text style={styles.footerTabTextActive}>Revisões</Text>
        </View>
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
    padding: 22,
    paddingBottom: 115,
  },
  header: {
    marginTop: 18,
    marginBottom: 24,
  },
  headerIcon: {
    width: 48,
    height: 48,
    borderRadius: 15,
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: colors.textMain,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textMuted,
    marginTop: 6,
    lineHeight: 21,
  },
  progressCard: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    padding: 16,
    marginBottom: 25,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 13,
  },
  progressTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: colors.textMain,
  },
  progressSubtitle: {
    fontSize: 12,
    color: colors.textMuted,
    marginTop: 5,
  },
  progressPercent: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.primary,
  },
  progressTrack: {
    height: 8,
    borderRadius: 8,
    backgroundColor: colors.border,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 8,
    backgroundColor: colors.primary,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 11,
    marginBottom: 16,
  },
  sectionIcon: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionHeading: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: colors.textMain,
  },
  sectionSubtitle: {
    fontSize: 12,
    color: colors.textMuted,
    marginTop: 3,
  },
  listContainer: {
    gap: 12,
  },
  revisionCard: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    padding: 14,
    gap: 14,
  },
  revisionMain: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  subjectIcon: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  revisionContent: {
    flex: 1,
    minWidth: 0,
  },
  materiaLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.textMuted,
    marginBottom: 4,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.textMain,
    lineHeight: 20,
  },
  cardTitleConcluido: {
    textDecorationLine: 'line-through',
    opacity: 0.7,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: 5,
    marginTop: 9,
    paddingVertical: 6,
    paddingHorizontal: 9,
    borderRadius: 9,
  },
  badgeUrgente: {
    backgroundColor: 'rgba(244, 63, 94, 0.12)',
  },
  badgeAgendado: {
    backgroundColor: colors.primaryLight,
  },
  badgeConcluido: {
    backgroundColor: '#DDF5E5',
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '700',
  },
  textUrgente: {
    color: colors.danger,
  },
  textAgendado: {
    color: colors.primary,
  },
  textConcluido: {
    color: '#16804A',
  },
  completeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 7,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  completeButtonActive: {
    backgroundColor: '#16804A',
    borderColor: '#16804A',
  },
  completeButtonText: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: '700',
  },
  completeButtonTextActive: {
    color: '#FFFFFF',
  },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 16,
    borderRadius: 14,
    marginTop: 20,
  },
  infoIcon: {
    width: 38,
    height: 38,
    borderRadius: 11,
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContent: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: colors.textMain,
    marginBottom: 6,
  },
  infoText: {
    fontSize: 13,
    color: colors.textMuted,
    lineHeight: 20,
  },
  tabBarFixed: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    minHeight: 72,
    backgroundColor: colors.surface,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 9,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  tabItemActive: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  footerTabText: {
    fontSize: 10,
    color: colors.textMuted,
    fontWeight: '600',
  },
  footerTabTextActive: {
    fontSize: 10,
    color: colors.primary,
    fontWeight: '800',
  },
});