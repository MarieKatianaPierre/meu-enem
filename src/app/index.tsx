// src/app/index.tsx
import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { colors } from '../theme/colors';

export default function Index() {
  const router = useRouter();

  // 🛑 TEMPO DE TRANSIÇÃO REMOVEDO: Agora a navegação depende apenas do clique manual do aluno
  const handleNavigate = () => {
    router.replace('/login');
  };

  return (
    <View style={styles.container}>
      
      {/* 🔮 Bloco Central Premium */}
      <View style={styles.centerContent}>
        
        {/* 1. 🔺 Título "Meu ENEM" em CIMA */}
        <Text style={styles.title}>Meu ENEM</Text>
        
        <View style={styles.badge}>
          <Text style={styles.badgeText}>INTELICAMPUS</Text>
        </View>
        
        {/* 2. 🟢 O Logo no CÍRCULO perfeito (Fundo branco quadrado cortado) */}
        <View style={styles.logoWrapper}>
          <Image 
            source={require('../../assets/images/logo.png')} 
            style={styles.logoImage}
            resizeMode="cover"
          />
        </View>

        {/* 3. 🔻 A frase em BAIXO do círculo */}
        <Text style={styles.subtitle}>
          Seu caminho para o ENEM começa aqui.
        </Text>
        
        {/* 🔘 BOTÃO PARA ENTRAR DIRETO NO LOGIN */}
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

// 🎨 Estilos Alinhados e Separados Linha por Linha
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
  },
  title: {
    fontSize: 48,
    fontWeight: '800',
    color: colors.textMain,
    letterSpacing: -1.5,
    textAlign: 'center',
  },
  badge: {
    backgroundColor: colors.primaryLight,
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 30,
    marginTop: 14,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 24, 
  },
  badgeText: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 11,
    letterSpacing: 1,
  },
  /* Contêiner circular do Logotipo */
  logoWrapper: {
    width: 130,
    height: 130,
    borderRadius: 65, 
    backgroundColor: '#FFFFFF', 
    borderWidth: 3,
    borderColor: colors.primary, 
    overflow: 'hidden', 
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 0px 15px rgba(99, 102, 241, 0.4)', 
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
  subtitle: {
    marginTop: 20, 
    color: colors.textMuted,
    fontSize: 15,
    textAlign: 'center',
    maxWidth: 280,
    lineHeight: 22,
    marginBottom: 24, // Dá um espaço confortável antes do botão de jornada
  },
  actionButton: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: colors.radius,
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    boxShadow: '0px 4px 14px rgba(99, 102, 241, 0.3)',
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
