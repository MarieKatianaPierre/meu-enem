
import { useRouter } from 'expo-router';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import { ArrowRight } from 'lucide-react-native';

import { colors } from '../theme/colors';

export default function Index() {
  const router = useRouter();

  const handleNavigate = () => {
    router.replace('/login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.centerContent}>
        <Text style={styles.title}>Meu ENEM</Text>

        <Text style={styles.badge}>INTELICAMPUS</Text>

        <View style={styles.logoWrapper}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.logoImage}
            resizeMode="cover"
          />
        </View>

        <Text style={styles.subtitle}>
          Seu caminho para o ENEM começa aqui
        </Text>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={handleNavigate}
          activeOpacity={0.8}
        >
          <Text style={styles.actionButtonText}>
            Começar jornada
          </Text>
          <ArrowRight size={19} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Desenvolvido pelo grupo
        </Text>
        <Text style={styles.groupHighlight}>404 TEAM</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    paddingHorizontal: 24,
    paddingVertical: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  centerContent: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 38,
    fontWeight: '800',
    color: colors.textMain,
    letterSpacing: -1,
    textAlign: 'center',
  },
  badge: {
    color: colors.primary,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 2,
    marginTop: 8,
    marginBottom: 28,
  },
  logoWrapper: {
    width: 124,
    height: 124,
    borderRadius: 62,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: colors.primary,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
  subtitle: {
    marginTop: 24,
    marginBottom: 28,
    color: colors.textMuted,
    fontSize: 15,
    lineHeight: 23,
    textAlign: 'center',
    maxWidth: 280,
  },
  actionButton: {
    width: '100%',
    maxWidth: 300,
    minHeight: 52,
    backgroundColor: colors.primary,
    borderRadius: colors.radius,
    paddingHorizontal: 22,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
  footer: {
    alignItems: 'center',
    paddingBottom: 8,
    gap: 4,
  },
  footerText: {
    color: colors.textMuted,
    fontSize: 11,
  },
  groupHighlight: {
    color: colors.textMain,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.5,
  },
});
