// src/app/simulado.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { colors } from '../theme/colors';

interface Alternativa {
  letra: string;
  texto: string;
  correta: boolean;
}

export default function SimulatedScreen() {
  const router = useRouter();

  const [respondido, setRespondido] = useState(false);
  const [acertou, setAcertou] = useState(false);
  const [mostrarIA, setMostrarIA] = useState(false);
  const [alternativaSelecionada, setAlternativaSelecionada] = useState<string | null>(null);

  const alternativas: Alternativa[] = [
    { letra: 'A', texto: '1.5 metros', correta: false },
    { letra: 'B', texto: '3.0 metros', correta: false },
    { letra: 'C', texto: '6.0 metros', correta: true },
    { letra: 'D', texto: '60 metros', correta: false },
  ];

  // 💾 FUNÇÃO DE VALIDAÇÃO TOTALMENTE BLINDADA CONTRA CRASH NO CELULAR
  const handleValidarResposta = (item: Alternativa) => {
    if (respondido) return;
    
    setAlternativaSelecionada(item.letra);
    setRespondido(true);
    setAcertou(item.correta);

    try {
      // Proteção para rodar o salvamento apenas se estiver no ambiente Web
      if (typeof window !== 'undefined' && window.localStorage) {
        const historicoSalvo = localStorage.getItem('@meu_enem_historico');
        let dados = historicoSalvo ? JSON.parse(historicoSalvo) : { respondidas: 0, acertos: 0 };

        dados.respondidas += 1;

        if (item.correta) {
          dados.acertos += 1;
        }

        localStorage.setItem('@meu_enem_historico', JSON.stringify(dados));
      }
    } catch (error) {
      console.error("Erro ao salvar histórico no dispositivo:", error);
    }
  };

  const handleReiniciarSimulado = () => {
    setRespondido(false);
    setAcertou(false);
    setMostrarIA(false);
    setAlternativaSelecionada(null);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Cabeçalho */}
        <View style={styles.header}>
          <Text style={styles.title}>Simulado Rápido</Text>
          <Text style={styles.subtitle}>Pratique com questões reais e conte com suporte de IA</Text>
        </View>

        {/* Bloco do Enunciado */}
        <View style={styles.questionCard}>
          <Text style={styles.materiaTag}>📐 MATEMÁTICA E SUAS TECNOLOGIAS</Text>
          <Text style={styles.questionText}>
            Em uma maquete de condomínio construída na escala de 1:200, uma guarita possui 3 cm de altura. Qual a altura real dessa estrutura?
          </Text>
        </View>

        {/* Listagem de Alternativas */}
        <Text style={styles.sectionTitle}>Selecione a alternativa correta:</Text>
        <View style={styles.optionsContainer}>
          {alternativas.map((item) => {
            const isSelected = alternativaSelecionada === item.letra;
            
            let buttonStyle: any = styles.optionButton;
            let textStyle: any = styles.optionText;

            if (respondido && isSelected) {
              buttonStyle = item.correta ? styles.optionCorrect : styles.optionIncorrect;
              textStyle = styles.optionTextActive;
            }

            return (
              <TouchableOpacity 
                key={item.letra} 
                style={buttonStyle} 
                onPress={() => handleValidarResposta(item)}
                disabled={respondido}
                activeOpacity={0.7}
              >
                <Text style={textStyle}>
                  <Text style={{ fontWeight: 'bold' }}>{item.letra})</Text> {item.texto}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Bloco de Feedback */}
        {respondido && (
          <View style={[styles.feedbackPanel, acertou ? styles.panelSuccess : styles.panelError]}>
            <Text style={[styles.feedbackText, { color: acertou ? colors.success : colors.danger }]}>
              {acertou ? '✓ Muito bem! Você acertou a questão.' : '✕ Resposta incorreta. Revise o conceito.'}
            </Text>
            
            {!acertou && !mostrarIA && (
              <TouchableOpacity style={styles.aiTriggerButton} onPress={() => setMostrarIA(true)} activeOpacity={0.8}>
                <Text style={styles.aiTriggerText}>🤖 Não entendi. Quero ajuda da IA</Text>
              </TouchableOpacity>
            )}

            {respondido && (
              <TouchableOpacity style={styles.resetButton} onPress={handleReiniciarSimulado}>
                <Text style={styles.resetButtonText}>Tentar Novamente</Text>
              </TouchableOpacity>
            )}
          </View>
        )}

        {/* Bloco de Conversa com a IA */}
        {mostrarIA && (
          <View style={styles.aiChatContainer}>
            <Text style={styles.aiTitle}>🤖 Explicação do Tutor Inteligente:</Text>
            <Text style={styles.aiResponseText}>
              Você errou porque não multiplicou diretamente pela escala linear.{"\n"}{"\n"}
              1. A escala 1:200 significa que cada 1 cm na maquete equivale a 200 cm na realidade.{"\n"}
              2. Se a guarita mede 3 cm na maquete, multiplicamos: 3 × 200 = 600 cm reais.{"\n"}
              3. Agora, basta converter centímetros para metros: 600 cm ÷ 100 = 6.0 metros.{"\n"}{"\n"}
              A alternativa correta é a C. O conteúdo recomendado para você focar no cronograma é Razão e Proporção (Escalas).
            </Text>
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

// 🎨 Estilos Alinhados e Separados Linha por Linha Completos
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
  questionCard: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: colors.radius,
    padding: 18,
    marginBottom: 24,
  },
  materiaTag: {
    fontSize: 11,
    fontWeight: 'bold',
    color: colors.primary,
    letterSpacing: 0.5,
    marginBottom: 8,
  },
  questionText: {
    fontSize: 15,
    color: colors.textMain,
    lineHeight: 22,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.textMain,
    marginBottom: 12,
  },
  optionsContainer: {
    gap: 10,
  },
  optionButton: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: colors.radius,
    padding: 16,
  },
  optionCorrect: {
    backgroundColor: colors.success,
    borderColor: colors.success,
  },
  optionIncorrect: {
    backgroundColor: colors.danger,
    borderColor: colors.danger,
  },
  optionText: {
    fontSize: 15,
    color: colors.textMain,
  },
  optionTextActive: {
    fontSize: 15,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  feedbackPanel: {
    padding: 16,
    borderRadius: colors.radius,
    marginTop: 24,
    alignItems: 'center',
    gap: 12,
  },
  panelSuccess: {
    backgroundColor: 'rgba(16, 185, 129, 0.15)',
    borderWidth: 1,
    borderColor: colors.success,
  },
  panelError: {
    backgroundColor: 'rgba(244, 63, 94, 0.15)',
    borderWidth: 1,
    borderColor: colors.danger,
  },
  feedbackText: {
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
  aiTriggerButton: {
    backgroundColor: '#1E293B',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#334155',
  },
  aiTriggerText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  resetButton: {
    paddingVertical: 6,
  },
  resetButtonText: {
    color: colors.textMuted,
    fontSize: 13,
    textDecorationLine: 'underline',
  },
  aiChatContainer: {
    backgroundColor: '#F0FDF4',
    borderWidth: 1,
    borderColor: '#BBF7D0',
    padding: 18,
    borderRadius: colors.radius,
    marginTop: 14,
  },
  aiTitle: {
    color: '#166534',
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 8,
  },
  aiResponseText: {
    fontSize: 14,
    color: '#14532D',
    lineHeight: 22,
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
