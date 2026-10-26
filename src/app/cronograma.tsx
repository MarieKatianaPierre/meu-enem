
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import { useRouter } from 'expo-router';
import {
  BookOpen,
  CalendarDays,
  Check,
  ChevronLeft,
  Clock3,
  FlaskConical,
  House,
  Landmark,
  Languages,
  Plus,
  UserRound,
  X,
  Calculator,
} from 'lucide-react-native';

import { colors } from '../theme/colors';

interface Task {
  id: number;
  dia: string;
  materia: string;
  atividade: string;
  concluida: boolean;
}

const diasSemana = [
  'Segunda',
  'Terça',
  'Quarta',
  'Quinta',
  'Sexta',
  'Sábado',
  'Domingo',
];

function IconeMateria({ materia }: { materia: string }) {
  const nome = materia.toLowerCase();

  if (nome.includes('matemática')) {
    return <Calculator size={20} color={colors.primary} />;
  }

  if (nome.includes('português') || nome.includes('linguagens')) {
    return <Languages size={20} color={colors.primary} />;
  }

  if (nome.includes('biologia') || nome.includes('ciência')) {
    return <FlaskConical size={20} color={colors.primary} />;
  }

  if (nome.includes('história') || nome.includes('geografia')) {
    return <Landmark size={20} color={colors.primary} />;
  }

  return <BookOpen size={20} color={colors.primary} />;
}

export default function ScheduleScreen() {
  const router = useRouter();

  const [tarefas, setTarefas] = useState<Task[]>([
    {
      id: 1,
      dia: 'Segunda',
      materia: 'Matemática',
      atividade: 'Porcentagem',
      concluida: false,
    },
    {
      id: 2,
      dia: 'Terça',
      materia: 'Português',
      atividade: 'Interpretação de texto',
      concluida: true,
    },
    {
      id: 3,
      dia: 'Quarta',
      materia: 'Biologia',
      atividade: 'Genética',
      concluida: false,
    },
    {
      id: 4,
      dia: 'Quinta',
      materia: 'História',
      atividade: 'República',
      concluida: false,
    },
    {
      id: 5,
      dia: 'Sexta',
      materia: 'Matemática',
      atividade: 'Exercícios de fixação',
      concluida: false,
    },
  ]);

  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [novaMateria, setNovaMateria] = useState('');
  const [novaAtividade, setNovaAtividade] = useState('');
  const [novoDia, setNovoDia] = useState('Segunda');

  const tarefasConcluidas = tarefas.filter(
    (tarefa) => tarefa.concluida
  ).length;

  const toggleConcluida = (id: number) => {
    setTarefas((anteriores) =>
      anteriores.map((tarefa) =>
        tarefa.id === id
          ? { ...tarefa, concluida: !tarefa.concluida }
          : tarefa
      )
    );
  };

  const handleAdicionarTarefa = () => {
    if (!novaMateria.trim() || !novaAtividade.trim()) {
      return;
    }

    const novaTarefa: Task = {
      id: Date.now(),
      dia: novoDia,
      materia: novaMateria.trim(),
      atividade: novaAtividade.trim(),
      concluida: false,
    };

    setTarefas((anteriores) => [...anteriores, novaTarefa]);
    setNovaMateria('');
    setNovaAtividade('');
    setNovoDia('Segunda');
    setMostrarFormulario(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View style={styles.headerIcon}>
            <CalendarDays size={25} color={colors.primary} />
          </View>

          <Text style={styles.title}>Cronograma</Text>

          <Text style={styles.subtitle}>
            Organize sua rotina semanal e acompanhe seu progresso rumo ao ENEM.
          </Text>
        </View>

        <View style={styles.progressCard}>
          <View style={styles.progressIcon}>
            <Check size={23} color={colors.primary} />
          </View>

          <View style={styles.progressInfo}>
            <Text style={styles.progressTitle}>Seu progresso semanal</Text>
            <Text style={styles.progressDescription}>
              {tarefasConcluidas} de {tarefas.length} atividades concluídas
            </Text>

            <View style={styles.progressTrack}>
              <View
                style={[
                  styles.progressFill,
                  {
                    width: `${
                      tarefas.length
                        ? (tarefasConcluidas / tarefas.length) * 100
                        : 0
                    }%`,
                  },
                ]}
              />
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setMostrarFormulario(!mostrarFormulario)}
          activeOpacity={0.8}
        >
          {mostrarFormulario ? (
            <X size={20} color="#FFFFFF" />
          ) : (
            <Plus size={20} color="#FFFFFF" />
          )}

          <Text style={styles.addButtonText}>
            {mostrarFormulario ? 'Fechar formulário' : 'Adicionar atividade'}
          </Text>
        </TouchableOpacity>

        {mostrarFormulario && (
          <View style={styles.formCard}>
            <Text style={styles.formTitle}>Nova atividade</Text>

            <Text style={styles.label}>Matéria</Text>
            <View style={styles.inputContainer}>
              <BookOpen size={19} color={colors.textMuted} />
              <TextInput
                style={styles.input}
                placeholder="Ex.: Matemática"
                placeholderTextColor={colors.textMuted}
                value={novaMateria}
                onChangeText={setNovaMateria}
              />
            </View>

            <Text style={styles.label}>Conteúdo para estudar</Text>
            <View style={styles.inputContainer}>
              <Clock3 size={19} color={colors.textMuted} />
              <TextInput
                style={styles.input}
                placeholder="Ex.: Porcentagem"
                placeholderTextColor={colors.textMuted}
                value={novaAtividade}
                onChangeText={setNovaAtividade}
              />
            </View>

            <Text style={styles.label}>Dia da semana</Text>
            <View style={styles.daysContainer}>
              {diasSemana.map((dia) => (
                <TouchableOpacity
                  key={dia}
                  style={[
                    styles.dayOption,
                    novoDia === dia && styles.dayOptionSelected,
                  ]}
                  onPress={() => setNovoDia(dia)}
                  activeOpacity={0.75}
                >
                  <Text
                    style={[
                      styles.dayOptionText,
                      novoDia === dia && styles.dayOptionTextSelected,
                    ]}
                  >
                    {dia}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <TouchableOpacity
              style={styles.saveButton}
              onPress={handleAdicionarTarefa}
              activeOpacity={0.8}
            >
              <Check size={19} color="#FFFFFF" />
              <Text style={styles.saveButtonText}>
                Salvar no cronograma
              </Text>
            </TouchableOpacity>
          </View>
        )}

        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionTitle}>Agenda de estudos</Text>
            <Text style={styles.sectionSubtitle}>
              Marque cada atividade quando terminar.
            </Text>
          </View>

          <View style={styles.countBadge}>
            <Text style={styles.countText}>{tarefas.length}</Text>
          </View>
        </View>

        {tarefas.length === 0 ? (
          <View style={styles.emptyCard}>
            <CalendarDays size={35} color={colors.textMuted} />
            <Text style={styles.emptyTitle}>Sua agenda está vazia</Text>
            <Text style={styles.emptyDescription}>
              Adicione sua primeira atividade para começar.
            </Text>
          </View>
        ) : (
          <View style={styles.listContainer}>
            {tarefas.map((item) => (
              <View
                key={item.id}
                style={[
                  styles.taskCard,
                  item.concluida && styles.taskCardCompleted,
                ]}
              >
                <TouchableOpacity
                  style={[
                    styles.checkbox,
                    item.concluida && styles.checkboxChecked,
                  ]}
                  onPress={() => toggleConcluida(item.id)}
                  activeOpacity={0.75}
                  accessibilityRole="checkbox"
                  accessibilityState={{ checked: item.concluida }}
                  accessibilityLabel={`Marcar ${item.atividade} como ${
                    item.concluida ? 'não concluída' : 'concluída'
                  }`}
                >
                  {item.concluida && (
                    <Check size={15} color="#FFFFFF" strokeWidth={3} />
                  )}
                </TouchableOpacity>

                <View style={styles.taskContent}>
                  <Text style={styles.dayText}>{item.dia}</Text>

                  <View style={styles.subjectRow}>
                    <View style={styles.subjectIcon}>
                      <IconeMateria materia={item.materia} />
                    </View>

                    <Text
                      style={[
                        styles.materiaText,
                        item.concluida && styles.textLineThrough,
                      ]}
                    >
                      {item.materia}
                    </Text>
                  </View>

                  <Text
                    style={[
                      styles.atividadeText,
                      item.concluida && styles.textLineThrough,
                    ]}
                  >
                    {item.atividade}
                  </Text>

                  {item.concluida && (
                    <View style={styles.completedLabel}>
                      <Check size={13} color={colors.success} />
                      <Text style={styles.completedText}>Concluída</Text>
                    </View>
                  )}
                </View>
              </View>
            ))}
          </View>
        )}
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

        <View style={styles.tabItemActive}>
          <CalendarDays size={21} color={colors.primary} />
          <Text style={styles.footerTabTextActive}>Cronograma</Text>
        </View>

        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => router.push('/perfil')}
        >
          <UserRound size={21} color={colors.textMuted} />
          <Text style={styles.footerTabText}>Perfil</Text>
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
    padding: 22,
    paddingBottom: 115,
  },
  header: {
    marginTop: 18,
    marginBottom: 22,
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
    fontSize: 28,
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
    flexDirection: 'row',
    alignItems: 'center',
    gap: 13,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    padding: 16,
    marginBottom: 18,
  },
  progressIcon: {
    width: 44,
    height: 44,
    borderRadius: 13,
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressInfo: {
    flex: 1,
  },
  progressTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.textMain,
  },
  progressDescription: {
    fontSize: 12,
    color: colors.textMuted,
    marginTop: 4,
  },
  progressTrack: {
    height: 6,
    backgroundColor: colors.border,
    borderRadius: 5,
    overflow: 'hidden',
    marginTop: 10,
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.success,
    borderRadius: 5,
  },
  addButton: {
    flexDirection: 'row',
    gap: 9,
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 14,
  },
  formCard: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
  },
  formTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: colors.textMain,
    marginBottom: 18,
  },
  label: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.textMuted,
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: colors.bg,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    minWidth: 0,
    paddingVertical: 12,
    color: colors.textMain,
    fontSize: 14,
  },
  daysContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 18,
  },
  dayOption: {
    paddingVertical: 9,
    paddingHorizontal: 11,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.bg,
  },
  dayOptionSelected: {
    backgroundColor: colors.primaryLight,
    borderColor: colors.primary,
  },
  dayOptionText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.textMuted,
  },
  dayOptionTextSelected: {
    color: colors.primary,
    fontWeight: '800',
  },
  saveButton: {
    flexDirection: 'row',
    gap: 9,
    backgroundColor: colors.primary,
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 14,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.textMain,
  },
  sectionSubtitle: {
    fontSize: 12,
    color: colors.textMuted,
    marginTop: 4,
  },
  countBadge: {
    minWidth: 32,
    height: 32,
    borderRadius: 10,
    paddingHorizontal: 8,
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  countText: {
    color: colors.primary,
    fontWeight: '800',
  },
  listContainer: {
    gap: 12,
  },
  taskCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 13,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    padding: 15,
  },
  taskCardCompleted: {
    borderColor: colors.success,
  },
  checkbox: {
    width: 23,
    height: 23,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: colors.border,
    backgroundColor: colors.bg,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 3,
  },
  checkboxChecked: {
    backgroundColor: colors.success,
    borderColor: colors.success,
  },
  taskContent: {
    flex: 1,
    minWidth: 0,
  },
  dayText: {
    fontSize: 11,
    fontWeight: '800',
    color: colors.primary,
    textTransform: 'uppercase',
    letterSpacing: 0.6,
    marginBottom: 7,
  },
  subjectRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  subjectIcon: {
    width: 34,
    height: 34,
    borderRadius: 10,
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  materiaText: {
    flex: 1,
    flexShrink: 1,
    fontSize: 15,
    fontWeight: '700',
    color: colors.textMain,
  },
  atividadeText: {
    fontSize: 13,
    color: colors.textMuted,
    marginTop: 7,
    lineHeight: 19,
  },
  textLineThrough: {
    textDecorationLine: 'line-through',
    color: colors.textMuted,
  },
  completedLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 8,
  },
  completedText: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.success,
  },
  emptyCard: {
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    padding: 28,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: colors.textMain,
    marginTop: 12,
  },
  emptyDescription: {
    fontSize: 13,
    color: colors.textMuted,
    textAlign: 'center',
    marginTop: 6,
    lineHeight: 19,
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
