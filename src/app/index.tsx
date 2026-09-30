// src/app/index.tsx
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../theme/colors';

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    // ⏱️ Transição automática após 4 segundos como segurança
    const timer = setTimeout(() => {
      handleNavigate();
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  // Função centralizada para navegar com segurança limpando o histórico
  const handleNavigate = () => {
    router.replace('/login');
  };

  return (
    <View style={styles.container}>
      
      {/* 🔮 Bloco Central Premium */}
      <View style={styles.centerContent}>
        <View style={styles.glowEffect} />
        
        <Text style={styles.title}>Meu ENEM</Text>
        
        <View style={styles.badge}>
          <Text style={styles.badgeText}>INTELICAMPUS</Text>
        </View>
        
        <Text style={styles.subtitle}>
          Seu caminho para o ENEM começa aqui.
        </Text>
        
        <ActivityIndicator size="small" color={colors.primary} style={{ marginTop: 24, marginBottom: 24 }} />

        {/* 🔘 BOTÃO ADICIONADO PARA ENTRAR DIRETO NO LOGIN */}
        <TouchableOpacity style={styles.actionButton} onPress={handleNavigate} activeOpacity={0.8}>
          <Text style={styles.actionButtonText}>Começar Jornada ➔</Text>
        </TouchableOpacity>
      </View>

      {/* 🦶 Rodapé Futurista do Grupo */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Criado e desenvolvido pelo grupo 
        </Text>
        <View style={styles.groupBadge}>
          <Text style={styles.groupHighlight}>404 TEAM</Text>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    position: 'relative',
  },
  glowEffect: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: colors.primary,
    opacity: 0.15,
  },
  title: {
    fontSize: 48,
    fontWeight: '800',
    color: colors.textMain,
    letterSpacing: -1.5,
  },
  badge: {
    backgroundColor: colors.primaryLight,
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 30,
    marginTop: 14,
    borderWidth: 1,
    borderColor: colors.border,
  },
  badgeText: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 11,
    letterSpacing: 1,
  },
  subtitle: {
    marginTop: 100,
    color: colors.textMuted,
    fontSize: 15,
    textAlign: 'center',
    maxWidth: 280,
    lineHeight: 22,
  },
  /* Estilização do novo botão de entrada rápida */
  actionButton: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: colors.radius,
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  footer: {
    paddingBottom: 24,
    width: '100%',
    alignItems: 'center',
  },
  footerText: {
    color: colors.textMuted,
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 6,
  },
  groupBadge: {
    backgroundColor: colors.surface,
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
  },
  groupHighlight: {
    color: colors.textMain, 
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});
