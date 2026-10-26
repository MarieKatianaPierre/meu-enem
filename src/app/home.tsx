// src/app/home.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { BookOpen,
  CalendarDays,
  RotateCcw,
  UserRound,
  ClipboardList,
  House,
  ChevronRight,
  Target,
  ChartNoAxesColumnIncreasing,
  Home, } from 'lucide-react-native';

import { colors } from '../theme/colors';

export default function HomeScreen() {
  const router = useRouter();

  // Estados dinâmicos para renderizar os números que vêm da memória
  const [respondidas, setRespondidas] = useState(0);
  const [acertos, setAcertos] = useState(0);
  const [aproveitamento, setAproveitamento] = useState('0%');

  // Carrega os dados salvos com verificação de segurança contra quebras no celular
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const historicoSalvo = localStorage.getItem('@meu_enem_historico');
        
        if (historicoSalvo) {
          const dados = JSON.parse(historicoSalvo);
          setRespondidas(dados.respondidas);
          setAcertos(dados.acertos);

          // Calcula a porcentagem de acertos em tempo real
          if (dados.respondidas > 0) {
            const calculo = (dados.acertos / dados.respondidas) * 100;
            setAproveitamento(calculo.toFixed(1) + '%'); 
          }
        }
      }
    } catch (error) {
      console.error("Erro ao ler histórico da memória:", error);
    }
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        <View style={styles.welcomeHeader}>
          <Text style={styles.welcomeText}>Olá, estudante! 👋</Text>
          <Text style={styles.subtitleText}>Seu progresso é gravado automaticamente a cada treino.</Text>
        </View>

        {/* 📊 Bloco de Desempenho REAL e DINÂMICO */}
        <View style={styles.performanceCard}>
          <Text style={styles.cardTitle}>SEU DESEMPENHO REAL</Text>
          
          <View style={styles.statsGrid}>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>{respondidas}</Text>
              <Text style={styles.statLabel}>Questões</Text>
            </View>
            
            <View style={styles.statBox}>
              <Text style={[styles.statNumber, { color: colors.success }]}>{acertos}</Text>
              <Text style={styles.statLabel}>Acertos</Text>
            </View>

            <View style={styles.statBox}>
              <Text style={[styles.statNumber, { color: colors.primary }]}>{aproveitamento}</Text>
              <Text style={styles.statLabel}>Aproveitamento</Text>
            </View>
          </View>

          <View style={styles.alertRow}>
            <Text style={styles.alertText}>🎯 Foco atual: <Text style={{ color: '#FFF', fontWeight: '600' }}>Simulados com IA</Text></Text>
            {respondidas > 0 && (
              <TouchableOpacity 
                onPress={() => { 
                  if (typeof window !== 'undefined' && window.localStorage) {
                    localStorage.removeItem('@meu_enem_historico'); 
                    window.location.reload();
                  }
                }}
                style={{ paddingHorizontal: 4 }}
              >
                <Text style={{ color: colors.danger, fontSize: 11, fontWeight: 'bold' }}>🔄 Zerar Banco</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>

        {/* Menu de Recursos */}
        <Text style={styles.sectionTitle}>Funcionalidades principais</Text>
        <View style={styles.menuGrid}>
          <TouchableOpacity style={styles.menuCard} onPress={() => router.push('/materias')}>
            <BookOpen size={26} color={colors.primary} />
            <Text style={styles.menuName}>Conteúdos</Text>
            <Text style={styles.menuDesc}>Assuntos e tópicos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuCard} onPress={() => router.push('/cronograma')}>
            <CalendarDays size={26} color={colors.primary} />
            <Text style={styles.menuName}>Cronograma</Text>
            <Text style={styles.menuDesc}>Suas metas e datas</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuCard} onPress={() => router.push('/revisoes')}>
            <RotateCcw size={26} color={colors.primary} />
            <Text style={styles.menuName}>Revisões</Text>
            <Text style={styles.menuDesc}>Materiais e resumos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuCard} onPress={() => router.push('/perfil')}>
            <UserRound size={26} color={colors.primary} />
            <Text style={styles.menuName}>Meu Perfil</Text>
            <Text style={styles.menuDesc}>Estatísticas e conta</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.simuladoButton} onPress={() => router.push('/simulado')}>
            <View style={styles.simuladoLeft}>
              <ClipboardList size={28} color={colors.primary} />
              <View>
                <Text style={styles.simuladoTitle}>Simulados e Questões</Text>
                <Text style={styles.simuladoSubtitle}>Responda e veja este painel atualizar na hora!</Text>
              </View>
            </View>
            <Text style={styles.simuladoArrow}>➔</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>

      {/* Rodapé Fixo */}
      <View style={styles.tabBarFixed}>
        <TouchableOpacity style={styles.tabItemActive}>
          <Home size={26} color={colors.primary} />
          <Text style={styles.tabTextActive}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.tabItem} onPress={() => router.push('/materias')}>
          <BookOpen size={26} color={colors.primary} />
          <Text style={styles.tabText}>Estudos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => router.push('/simulado')}>
          <ClipboardList size={28} color={colors.primary} />
          <Text style={styles.tabText}>Simulado</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => router.push('/perfil')}>
          <UserRound size={26} color={colors.primary} />
          <Text style={styles.tabText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// 🎨 Estilos Completamente Alinhados e Fechados Linha por Linha
const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: colors.bg 
  },
  scrollContent: { 
    padding: 24, 
    paddingBottom: 100 
  },
  welcomeHeader: { 
    marginTop: 20, 
    marginBottom: 24 
  },
  welcomeText: { 
    fontSize: 26, 
    fontWeight: '800', 
    color: colors.textMain, 
    letterSpacing: -0.5 
  },
  subtitleText: { 
    fontSize: 14, 
    color: colors.textMuted, 
    marginTop: 4 
  },
  performanceCard: { 
    backgroundColor: colors.surface, 
    borderRadius: colors.radius, 
    borderWidth: 1, 
    borderColor: colors.border, 
    padding: 20 
  },
  cardTitle: { 
    fontSize: 12, 
    fontWeight: 'bold', 
    color: colors.textMuted, 
    letterSpacing: 1, 
    marginBottom: 14 
  },
  statsGrid: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    gap: 8 
  },
  statBox: { 
    flex: 1, 
    backgroundColor: colors.primaryLight, 
    padding: 12, 
    borderRadius: 10, 
    alignItems: 'center' 
  },
  statNumber: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    color: colors.textMain 
  },
  statLabel: { 
    fontSize: 11, 
    color: colors.textMuted, 
    fontWeight: '600', 
    marginTop: 2 
  },
  alertRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    borderTopWidth: 1, 
    borderTopColor: colors.border, 
    marginTop: 16, 
    paddingTop: 12 
  },
  alertText: { 
    fontSize: 12, 
    color: colors.textMuted 
  },
  sectionTitle: { 
    fontSize: 16, 
    fontWeight: '700', 
    color: colors.textMain, 
    marginTop: 28, 
    marginBottom: 14 
  },
  menuGrid: { 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    gap: 12 
  },
  menuCard: { 
    width: '48%', 
    backgroundColor: colors.surface, 
    borderWidth: 1, 
    borderColor: colors.border, 
    borderRadius: colors.radius, 
    padding: 16, 
    gap: 4 
  },
  menuIcon: { 
    fontSize: 24, 
    marginBottom: 4 
  },
  menuName: { 
    fontSize: 15, 
    fontWeight: 'bold', 
    color: colors.textMain 
  },
  menuDesc: { 
    fontSize: 11, 
    color: colors.textMuted 
  },
  simuladoButton: { 
    width: '100%', 
    backgroundColor: colors.surface, 
    borderWidth: 1, 
    borderColor: colors.border, 
    borderRadius: colors.radius, 
    padding: 18, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    marginTop: 4 
  },
  simuladoLeft: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: 14 
  },
  simuladoTitle: { 
    fontSize: 15, 
    fontWeight: 'bold', 
    color: colors.textMain 
  },
  simuladoSubtitle: { 
    fontSize: 12, 
    color: colors.textMuted, 
    marginTop: 2 
  },
  simuladoArrow: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: colors.primary 
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
  tabText: { 
    fontSize: 11, 
    color: colors.textMuted, 
    fontWeight: '600', 
    marginTop: 4 
  },
  tabTextActive: { 
    fontSize: 11, 
    color: colors.primary, 
    fontWeight: 'bold', 
    marginTop: 4 
  }
});
