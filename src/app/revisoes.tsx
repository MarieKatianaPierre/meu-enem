// src/app/revisoes.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { colors } from '../theme/colors';

type TabKey = 'resumos' | 'materias' | 'sistema';

export default function RevisionScreen() {
  const router = useRouter();
  const [abaAtiva, setAbaAtiva] = useState<TabKey>('sistema');

  // Simulação de dados de revisões agendadas por data (Método Espaçado)
  const revisoesAgendadas = [
    { id: 1, titulo: 'Porcentagem e Proporção', materia: '📐 Matemática', diasRestantes: 'Revisar amanhã', status: 'urgente' },
    { id: 2, titulo: 'Cadeias Alimentares e Ecologia', materia: '🔬 Biologia', diasRestantes: 'Em 7 dias', status: 'agendado' },
    { id: 3, titulo: 'Era Vargas e Estado Novo', materia: '🌎 História', diasRestantes: 'Em 30 dias', status: 'agendado' },
  ];

  // PDFs e apostilas para download do MVP da 404 TEAM
  const materiaisDownload = [
    { titulo: 'Guia de Conectivos para Redação Nota 1000', tamanho: 'PDF • 2.4 MB', favorito: true },
    { titulo: 'Formulário Completo de Geometria Espacial', tamanho: 'PDF • 1.8 MB', favorito: false },
    { titulo: 'Ficha Resumo: Funções da Linguagem', tamanho: 'PDF • 950 KB', favorito: true },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Cabeçalho */}
        <View style={styles.header}>
          <Text style={styles.title}>Revisões e Materiais</Text>
          <Text style={styles.subtitle}>Gerencie seus resumos e acompanhe seus ciclos de memorização</Text>
        </View>

        {/* Menu de Abas do Módulo */}
        <View style={styles.tabsContainer}>
          <TouchableOpacity 
            style={[styles.tabButton, abaAtiva === 'sistema' && styles.tabButtonActive]}
            onPress={() => setAbaAtiva('sistema')}
          >
            <Text style={[styles.tabText, abaAtiva === 'sistema' && styles.tabTextActive]}>🔄 Ciclos 1-7-30</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.tabButton, abaAtiva === 'resumos' && styles.tabButtonActive]}
            onPress={() => setAbaAtiva('resumos')}
          >
            <Text style={[styles.tabText, abaAtiva === 'resumos' && styles.tabTextActive]}>📖 Resumos & PDFs</Text>
          </TouchableOpacity>
        </View>

        {/* CONTEÚDO DINÂMICO 1: Sistema de Revisão Espaçada */}
        {abaAtiva === 'sistema' && (
          <View>
            <Text style={styles.sectionTitle}>Próximas revisões automáticas</Text>
            <View style={styles.listContainer}>
              {revisoesAgendadas.map((item) => (
                <View key={item.id} style={styles.revisionCard}>
                  <View>
                    <Text style={styles.materiaLabel}>{item.materia}</Text>
                    <Text style={styles.cardTitle}>{item.titulo}</Text>
                  </View>
                  <View style={[styles.badge, item.status === 'urgente' ? styles.badgeUrgente : styles.badgeAgendado]}>
                    <Text style={[styles.badgeText, item.status === 'urgente' ? styles.textUrgente : styles.textAgendado]}>
                      {item.diasRestantes}
                    </Text>
                  </View>
                </View>
              ))}
            </View>

            {/* Informação metodológica educacional do MVP */}
            <View style={styles.infoBox}>
              <Text style={styles.infoText}>
                💡 <Text style={{ fontWeight: 'bold', color: colors.textMain }}>Como funciona?</Text> O Meu ENEM calcula automaticamente o esquecimento do cérebro. Revisamos o conteúdo estudado amanhã, depois em 7 dias e por fim em 30 dias para fixar na memória de longo prazo.
              </Text>
            </View>
          </View>
        )}

        {/* CONTEÚDO DINÂMICO 2: Lista de Downloads e Favoritos */}
        {abaAtiva === 'resumos' && (
          <View>
            <Text style={styles.sectionTitle}>Materiais de Apoio Disponíveis</Text>
            <View style={styles.listContainer}>
              {materiaisDownload.map((material, idx) => (
                <TouchableOpacity key={idx} style={styles.materialCard} activeOpacity={0.7}>
                  <View style={styles.materialLeft}>
                    <Text style={{ fontSize: 24 }}>📑</Text>
                    <View style={{ flex: 1 }}>
                      <Text style={styles.materialTitle} numberOfLines={1}>{material.titulo}</Text>
                      <Text style={styles.materialSize}>{material.tamanho}</Text>
                    </View>
                  </View>
                  <Text style={styles.starIcon}>{material.favorito ? '⭐' : '☆'}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}

      </ScrollView>

      {/* Rodapé de Navegação Fixo */}
      <View style={styles.tabBarFixed}>
        <TouchableOpacity style={styles.tabItem} onPress={() => router.push('/home')}>
          <Text style={{ fontSize: 20 }}>🏠</Text>
          <Text style={styles.footerTabText}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.tabItem} onPress={() => router.push('/materias')}>
          <Text style={{ fontSize: 20 }}>📚</Text>
          <Text style={styles.footerTabText}>Estudos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => router.push('/simulado')}>
          <Text style={{ fontSize: 20 }}>📝</Text>
          <Text style={styles.footerTabText}>Simulado</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItemActive}>
          <Text style={{ fontSize: 20 }}>👤</Text>
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
    paddingBottom: 100,
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
  tabsContainer: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    padding: 6,
    borderRadius: 24,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: colors.border,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 18,
  },
  tabButtonActive: {
    backgroundColor: colors.primary,
  },
  tabText: {
    color: colors.textMuted,
    fontWeight: '600',
    fontSize: 14,
  },
  tabTextActive: {
    color: '#FFFFFF',
    fontWeight: 'bold',
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
  revisionCard: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: colors.radius,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  materiaLabel: {
    fontSize: 11,
    fontWeight: 'bold',
    color: colors.textMuted,
    marginBottom: 4,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.textMain,
  },
  badge: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  badgeUrgente: {
    backgroundColor: 'rgba(244, 63, 94, 0.15)',
  },
  badgeAgendado: {
    backgroundColor: colors.primaryLight,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  textUrgente: {
    color: colors.danger,
  },
  textAgendado: {
    color: colors.primary,
  },
  infoBox: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 16,
    borderRadius: colors.radius,
    marginTop: 20,
  },
  infoText: {
    fontSize: 13,
    color: colors.textMuted,
    lineHeight: 20,
  },
  materialCard: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: colors.radius,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  materialLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    flex: 1,
  },
  materialTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.textMain,
  },
  materialSize: {
    fontSize: 12,
    color: colors.textMuted,
    marginTop: 2,
  },
  starIcon: {
    fontSize: 18,
    color: colors.accent,
    paddingLeft: 10,
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
