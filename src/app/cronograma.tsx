import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { colors } from '../theme/colors';

interface Task {
  id: number;
  dia: string;
  materia: string;
  atividade: string;
  concluida: boolean;
}

export default function ScheduleScreen() {
  const router = useRouter();
  
  // Lista inicial baseada na tabela solicitada na especificação do projeto
  const [tarefas, setTarefas] = useState<Task[]>([
    { id: 1, dia: 'Segunda', materia: '📐 Matemática', atividade: 'Porcentagem', concluida: false },
    { id: 2, dia: 'Terça', materia: '📝 Português', atividade: 'Interpretação de texto', concluida: true },
    { id: 3, dia: 'Quarta', materia: '🔬 Biologia', atividade: 'Genética', concluida: false },
    { id: 4, dia: 'Quinta', materia: '🌎 História', atividade: 'República', concluida: false },
    { id: 5, dia: 'Sexta', materia: '📐 Matemática', atividade: 'Exercícios de Fixação', concluida: false },
  ]);

  // Estados para simular a adição de uma nova atividade
  const [mostrarModal, setMostrarModal] = useState(false);
  const [novaMateria, setNovaMateria] = useState('');
  const [novaAtividade, setNovaAtividade] = useState('');
  const [novoDia, setNovoDia] = useState('Segunda');

  // Lógica para alternar o status de concluído (Check/Uncheck)
  const toggleConcluida = (id: number) => {
    setTarefas(tarefas.map(t => t.id === id ? { ...t, concluida: !t.concluida } : t));
  };

  // Lógica para simular a adição de tarefa no frontend do MVP
  const handleAdicionarTarefa = () => {
    if (!novaMateria || !novaAtividade) return;
    
    const novaTask: Task = {
      id: Date.now(),
      dia: novoDia,
      materia: novaMateria,
      atividade: novaAtividade,
      concluida: false
    };

    setTarefas([...tarefas, novaTask]);
    setNovaMateria('');
    setNovaAtividade('');
    setMostrarModal(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Cabeçalho */}
        <View style={styles.header}>
          <Text style={styles.title}>Cronograma</Text>
          <Text style={styles.subtitle}>Organize sua rotina semanal de estudos e acompanhe suas metas</Text>
        </View>

        {/* Botão de Adicionar Nova Atividade */}
        <TouchableOpacity style={styles.addButton} onPress={() => setMostrarModal(!mostrarModal)} activeOpacity={0.8}>
          <Text style={styles.addButtonText}>{mostrarModal ? '✕ Fechar Painel' : '➕ Adicionar Atividade'}</Text>
        </TouchableOpacity>

        {/* Formulário Dinâmico de Inserção (Aparece ao clicar em Adicionar) */}
        {mostrarModal && (
          <View style={styles.formCard}>
            <Text style={styles.formTitle}>Nova Meta de Estudo</Text>
            
            <Text style={styles.label}>Matéria (Ex: Biologia)</Text>
            <TextInput 
              style={styles.input} 
              placeholder="Digite a disciplina..." 
              placeholderTextColor={colors.textMuted}
              value={novaMateria}
              onChangeText={setNovaMateria}
            />

            <Text style={styles.label}>Conteúdo (Ex: Citologia)</Text>
            <TextInput 
              style={styles.input} 
              placeholder="O que vai estudar?" 
              placeholderTextColor={colors.textMuted}
              value={novaAtividade}
              onChangeText={setNovaAtividade}
            />

            <TouchableOpacity style={styles.saveButton} onPress={handleAdicionarTarefa}>
              <Text style={styles.saveButtonText}>Salvar no Cronograma</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Listagem das Atividades da Semana */}
        <Text style={styles.sectionTitle}>Sua Agenda de Estudos</Text>
        <View style={styles.listContainer}>
          {tarefas.map((item) => (
            <View key={item.id} style={[styles.taskCard, item.concluida && styles.taskCardCompleted]}>
              <View style={styles.taskLeft}>
                {/* Checkbox customizado nativo */}
                <TouchableOpacity 
                  style={[styles.checkbox, item.concluida && styles.checkboxChecked]} 
                  onPress={() => toggleConcluida(item.id)}
                >
                  {item.concluida && <Text style={styles.checkMark}>✓</Text>}
                </TouchableOpacity>

                <View>
                  <Text style={styles.dayText}>{item.dia}</Text>
                  <Text style={[styles.materiaText, item.concluida && styles.textLineThrough]}>{item.materia}</Text>
                  <Text style={[styles.atividadeText, item.concluida && styles.textLineThrough]}>{item.atividade}</Text>
                </View>
              </View>

              {/* Botão simples de feedback visual para Editar/Excluir solicitado no escopo */}
              <Text style={styles.optionsIcon}>•••</Text>
            </View>
          ))}
        </View>

      </ScrollView>

      {/* 🦶 Rodapé de Navegação Fixo Unificado */}
      <View style={styles.tabBarFixed}>
        <TouchableOpacity style={styles.tabItem} onPress={() => router.push('/home')}>
          <Text style={{ fontSize: 20 }}>🏠</Text>
          <Text style={styles.footerTabText}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.tabItem} onPress={() => router.push('/materias')}>
          <Text style={{ fontSize: 20 }}>📚</Text>
          <Text style={styles.footerTabText}>Estudos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItemActive}>
          <Text style={{ fontSize: 20 }}>📝</Text>
          <Text style={styles.footerTabTextActive}>Simulado</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => router.push('/perfil')}>
          <Text style={{ fontSize: 20 }}>👤</Text>
          <Text style={styles.footerTabText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// 🎨 Estilos Completamente Separados e Organizados Linha por Linha
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  scrollContent: {
    padding: 24,
    paddingBottom: 110,
  },
  header: {
    marginTop: 20,
    marginBottom: 24,
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
    marginTop: 4,
    lineHeight: 20,
  },
  addButton: {
    backgroundColor: colors.primaryLight,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 14,
    borderRadius: colors.radius,
    alignItems: 'center',
    marginBottom: 16,
  },
  addButtonText: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 14,
  },
  formCard: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: colors.radius,
    padding: 16,
    marginBottom: 24,
  },
  formTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.textMain,
    marginBottom: 14,
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.textMuted,
    marginBottom: 6,
  },
  input: {
    backgroundColor: colors.bg,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    padding: 12,
    color: colors.textMain,
    fontSize: 14,
    marginBottom: 14,
  },
  saveButton: {
    backgroundColor: colors.primary,
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.textMain,
    marginBottom: 14,
  },
  listContainer: {
    gap: 10,
  },
  taskCard: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: colors.radius,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  taskCardCompleted: {
    opacity: 0.6,
    borderColor: 'transparent',
  },
  taskLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: colors.border,
    backgroundColor: colors.bg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxChecked: {
    backgroundColor: colors.success,
    borderColor: colors.success,
  },
  checkMark: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  dayText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: colors.primary,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  materiaText: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.textMain,
    marginTop: 2,
  },
  atividadeText: {
    fontSize: 13,
    color: colors.textMuted,
    marginTop: 1,
  },
  textLineThrough: {
    textDecorationLine: 'line-through',
    color: colors.textMuted,
  },
  optionsIcon: {
    color: colors.textMuted,
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 8,
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
