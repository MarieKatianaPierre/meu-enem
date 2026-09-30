// src/app/materias.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { colors } from '../theme/colors';

type MateriaKey = 'port' | 'mat' | 'bio' | 'hist';

export default function ContentScreen() {
  const router = useRouter();
  const [materiaAtiva, setMateriaAtiva] = useState<MateriaKey>('port');

  // Base de données locale pour la version MVP du groupe 404 TEAM
  const bancoDados: Record<MateriaKey, string[]> = {
    port: ["Interpretação de texto", "Gramática", "Gêneros textuais", "Funções da linguagem"],
    mat: ["Porcentagem", "Regra de três", "Funções", "Geometria", "Estatística", "Probabilidade"],
    bio: ["Citologia", "Genética", "Ecologia", "Evolução", "Fisiologia"],
    hist: ["Brasil Colônia", "Brasil Império", "República", "Era Vargas", "Ditadura Militar", "História Geral"]
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        <View style={styles.header}>
          <Text style={styles.title}>Conteúdos Base</Text>
          <Text style={styles.subtitle}>Escolha uma disciplina para listar os tópicos focados</Text>
        </View>

        {/* Menu horizontal de sélection de matières */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabsContainer}>
          <TouchableOpacity 
            style={[styles.tabButton, materiaAtiva === 'port' && styles.tabButtonActive]}
            onPress={() => setMateriaAtiva('port')}
          >
            <Text style={[styles.tabText, materiaAtiva === 'port' && styles.tabTextActive]}>📝 Português</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.tabButton, materiaAtiva === 'mat' && styles.tabButtonActive]}
            onPress={() => setMateriaAtiva('mat')}
          >
            <Text style={[styles.tabText, materiaAtiva === 'mat' && styles.tabTextActive]}>📐 Matemática</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.tabButton, materiaAtiva === 'bio' && styles.tabButtonActive]}
            onPress={() => setMateriaAtiva('bio')}
          >
            <Text style={[styles.tabText, materiaAtiva === 'bio' && styles.tabTextActive]}>🔬 Biologia</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.tabButton, materiaAtiva === 'hist' && styles.tabButtonActive]}
            onPress={() => setMateriaAtiva('hist')}
          >
            <Text style={[styles.tabText, materiaAtiva === 'hist' && styles.tabTextActive]}>🌎 História</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Liste dynamique des sujets injectés */}
        <Text style={styles.sectionTitle}>Assuntos mais recorrentes</Text>
        <View style={styles.listContainer}>
          {bancoDados[materiaAtiva].map((assunto, index) => (
            <TouchableOpacity key={index} style={styles.topicCard} activeOpacity={0.7}>
              <View style={styles.topicLeft}>
                <View style={styles.bulletPoint} />
                <Text style={styles.topicName}>{assunto}</Text>
              </View>
              <Text style={styles.arrowIcon}>➔</Text>
            </TouchableOpacity>
          ))}
        </View>

      </ScrollView>

      {/* Barre de navigation du bas fixe */}
      <View style={styles.tabBarFixed}>
        <TouchableOpacity style={styles.tabItem} onPress={() => router.push('/home')}>
          <Text style={{ fontSize: 20 }}>🏠</Text>
          <Text style={styles.footerTabText}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.tabItemActive}>
          <Text style={{ fontSize: 20 }}>📚</Text>
          <Text style={styles.footerTabTextActive}>Estudos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => router.push('/simulado')}>
          <Text style={{ fontSize: 20 }}>📝</Text>
          <Text style={styles.footerTabText}>Simulado</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => router.push('/perfil')}>
          <Text style={{ fontSize: 20 }}>👤</Text>
          <Text style={styles.footerTabText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Estrutura principal da tela
  container: { 
    flex: 1, 
    backgroundColor: colors.bg 
  },
  
  // Área rolável do conteúdo
  scrollContent: { 
    padding: 24, 
    paddingBottom: 100 
  },
  
  // Cabeçalho da tela
  header: { 
    marginTop: 20, 
    marginBottom: 24 
  },
  title: { 
    fontSize: 26, 
    fontWeight: '800', 
    color: colors.textMain, 
    letterSpacing: -0.5 
  },
  subtitle: { 
    fontSize: 14, 
    color: colors.textMuted, 
    marginTop: 4, 
    lineHeight: 20 
  },
  
  // Menu horizontal de matérias (Abas)
  tabsContainer: { 
    flexDirection: 'row', 
    marginBottom: 20, 
    paddingBottom: 4 
  },
  tabButton: { 
    paddingVertical: 10, 
    paddingHorizontal: 16, 
    backgroundColor: colors.surface, 
    borderRadius: 20, 
    marginRight: 8, 
    borderWidth: 1, 
    borderColor: colors.border 
  },
  tabButtonActive: { 
    backgroundColor: colors.primary, 
    borderColor: colors.primary 
  },
  tabText: { 
    color: colors.textMuted, 
    fontWeight: '600', 
    fontSize: 14 
  },
  tabTextActive: { 
    color: '#FFFFFF', 
    fontWeight: 'bold' 
  },
  
  // Lista de tópicos e assuntos
  sectionTitle: { 
    fontSize: 16, 
    fontWeight: '700', 
    color: colors.textMain, 
    marginBottom: 12 
  },
  listContainer: { 
    gap: 8 
  },
  
  // 💻 CARD CORRIGIDO E LIMPO (Sem justifycontent duplicado)
  topicCard: { 
    backgroundColor: colors.surface, 
    borderWidth: 1, 
    borderColor: colors.border, 
    borderRadius: colors.radius, 
    padding: 18, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between' 
  },
  topicLeft: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: 12 
  },
  bulletPoint: { 
    width: 6, 
    height: 6, 
    borderRadius: 3, 
    backgroundColor: colors.primary 
  },
  topicName: { 
    fontSize: 15, 
    fontWeight: '600', 
    color: colors.textMain 
  },
  arrowIcon: { 
    fontSize: 14, 
    color: colors.primary, 
    fontWeight: 'bold' 
  },
  
  // 🦶 Rodapé de Navegação Fixo Inferior
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
    alignItems: 'center' 
  },
  tabItem: { 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  tabItemActive: { 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  footerTabText: { 
    fontSize: 11, 
    color: colors.textMuted, 
    fontWeight: '600', 
    marginTop: 4 
  },
  footerTabTextActive: { 
    fontSize: 11, 
    color: colors.primary, 
    fontWeight: 'bold', 
    marginTop: 4 
  },
});
