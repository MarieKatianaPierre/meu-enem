
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Switch,
  ScrollView,
  Alert,
} from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  KeyRound,
  LogIn,
  UserPlus,
  BookOpen,
} from 'lucide-react-native';

import { colors } from '../theme/colors';

interface Conta {
  nome: string;
  email: string;
  senha: string;
  iniciais: string;
}

export default function LoginScreen() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [ocultarSenha, setOcultarSenha] = useState(true);
  const [lembrarMe, setLembrarMe] = useState(false);

  // Valida os dados antes de permitir a entrada.
  const handleEntrar = async () => {
    if (!email.trim() || !senha) {
      Alert.alert(
        'Campos obrigatórios',
        'Digite seu e-mail e sua senha.'
      );
      return;
    }

    try {
      const emailNormalizado = email.trim().toLowerCase();

      // Busca as contas criadas na tela de cadastro.
      const contasSalvas = await AsyncStorage.getItem(
        '@meu_enem_contas'
      );

      const contas: Conta[] = contasSalvas
        ? JSON.parse(contasSalvas)
        : [];

      // Procura uma conta com e-mail e senha correspondentes.
      const contaEncontrada = contas.find(
        (conta) =>
          conta.email.trim().toLowerCase() === emailNormalizado &&
          conta.senha === senha
      );

      // Impede a entrada de quem não possui uma conta válida.
      if (!contaEncontrada) {
        Alert.alert(
          'Não foi possível entrar',
          'E-mail ou senha incorretos. Se você ainda não tem uma conta, faça seu cadastro.'
        );
        return;
      }

      // Salva apenas os dados públicos do usuário conectado.
      const dadosUsuario = {
        nome: contaEncontrada.nome,
        email: contaEncontrada.email,
        iniciais: contaEncontrada.iniciais,
      };

      await AsyncStorage.setItem(
        '@meu_enem_usuario',
        JSON.stringify(dadosUsuario)
      );

      // Abre a página inicial após a validação.
      router.replace('/home');
    } catch (error) {
      console.error('Erro ao fazer login:', error);

      Alert.alert(
        'Erro',
        'Não foi possível realizar o login. Tente novamente.'
      );
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.glowEffect} />

        {/* Cabeçalho */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <BookOpenIcon />
            <Text style={styles.logoText}>Meu ENEM</Text>
          </View>

          <Text style={styles.title}>Boas-vindas!</Text>
          <Text style={styles.subtitle}>
            Entre para continuar sua jornada rumo à nota 1000.
          </Text>
        </View>

        {/* Formulário */}
        <View style={styles.form}>
          {/* E-mail */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>E-mail</Text>

            <View style={styles.inputContainer}>
              <Mail
                size={20}
                color={colors.textMuted}
                strokeWidth={1.8}
              />

              <TextInput
                style={styles.input}
                placeholder="exemplo@email.com"
                placeholderTextColor={colors.textMuted}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                accessibilityLabel="E-mail"
              />
            </View>
          </View>

          {/* Senha */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Senha</Text>

            <View style={styles.inputContainer}>
              <LockKeyhole
                size={20}
                color={colors.textMuted}
                strokeWidth={1.8}
              />

              <TextInput
                style={styles.input}
                placeholder="Digite sua senha"
                placeholderTextColor={colors.textMuted}
                value={senha}
                onChangeText={setSenha}
                secureTextEntry={ocultarSenha}
                autoCapitalize="none"
                autoCorrect={false}
                accessibilityLabel="Senha"
                onSubmitEditing={handleEntrar}
                returnKeyType="go"
              />

              <TouchableOpacity
                style={styles.eyeButton}
                onPress={() => setOcultarSenha(!ocultarSenha)}
                activeOpacity={0.7}
                accessibilityRole="button"
                accessibilityLabel={
                  ocultarSenha ? 'Mostrar senha' : 'Ocultar senha'
                }
              >
                {ocultarSenha ? (
                  <Eye
                    size={21}
                    color={colors.textMuted}
                  />
                ) : (
                  <EyeOff
                    size={21}
                    color={colors.primary}
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>

          {/* Opções */}
          <View style={styles.row}>
            <View style={styles.checkboxContainer}>
              <Switch
                value={lembrarMe}
                onValueChange={setLembrarMe}
                trackColor={{
                  false: '#2E2559',
                  true: colors.primary,
                }}
                thumbColor={
                  lembrarMe ? colors.success : '#94A3B8'
                }
              />

              <Text style={styles.checkboxLabel}>
                Lembrar de mim
              </Text>
            </View>

            <TouchableOpacity
              style={styles.forgotButton}
              onPress={() => router.push('/recuperar')}
              activeOpacity={0.7}
            >
              <KeyRound
                size={15}
                color={colors.primary}
              />
              <Text style={styles.linkText}>
                Esqueci minha senha
              </Text>
            </TouchableOpacity>
          </View>

          {/* Botão Entrar */}
          <TouchableOpacity
            style={styles.button}
            onPress={handleEntrar}
            activeOpacity={0.8}
          >
            <LogIn
              size={20}
              color="#FFFFFF"
              strokeWidth={2}
            />
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>

        {/* Link para cadastro */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Não tem uma conta?
          </Text>

          <TouchableOpacity
            style={styles.createAccount}
            onPress={() => router.push('/cadastro')}
            activeOpacity={0.7}
          >
            <UserPlus
              size={17}
              color={colors.primary}
            />
            <Text style={styles.linkText}>
              Criar uma conta
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Créditos do grupo */}
      <View style={styles.creditsFooter}>
        <Text style={styles.creditsFooterText}>
          Criado e desenvolvido pelo grupo{' '}
          <Text style={styles.groupHighlight}>TEAM 404</Text>
        </Text>
      </View>
    </View>
  );
}

// Ícone da marca
function BookOpenIcon() {
  return (
    <View style={styles.logoIcon}>
      <MailBookIcon />
    </View>
  );
}

function MailBookIcon() {
  return (
    <BookOpen
      size={25}
      color="#FFFFFF"
      strokeWidth={1.8}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  scrollContent: {
    flexGrow: 1,
    padding: 24,
    paddingBottom: 80,
    justifyContent: 'center',
  },
  glowEffect: {
    position: 'absolute',
    top: -100,
    right: -50,
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: colors.primary,
    opacity: 0.1,
  },
  header: {
    marginBottom: 36,
    marginTop: 40,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 32,
  },
  logoIcon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 19,
    fontWeight: '800',
    color: colors.textMain,
    letterSpacing: 0.2,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: colors.textMain,
    letterSpacing: -1,
  },
  subtitle: {
    fontSize: 15,
    color: colors.textMuted,
    marginTop: 8,
    lineHeight: 22,
  },
  form: {
    width: '100%',
  },
  inputGroup: {
    marginBottom: 20,
    width: '100%',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textMain,
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: colors.radius,
    paddingHorizontal: 15,
    minHeight: 56,
  },
  input: {
    flex: 1,
    paddingVertical: 14,
    fontSize: 15,
    color: colors.textMain,
  },
  eyeButton: {
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 28,
    marginTop: 4,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  checkboxLabel: {
    fontSize: 13,
    color: colors.textMuted,
  },
  forgotButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  linkText: {
    fontSize: 13,
    color: colors.primary,
    fontWeight: '600',
  },
  button: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: colors.radius,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
    minHeight: 54,
    boxShadow: '0px 4px 14px rgba(99, 102, 241, 0.3)',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    alignItems: 'center',
    marginTop: 32,
    gap: 12,
  },
  footerText: {
    fontSize: 14,
    color: colors.textMuted,
  },
  createAccount: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    padding: 5,
  },
  creditsFooter: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    minHeight: 50,
    backgroundColor: colors.bg,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderTopWidth: 1,
    borderTopColor: 'rgba(46, 37, 89, 0.3)',
  },
  creditsFooterText: {
    color: colors.textMuted,
    fontSize: 11,
    fontWeight: '500',
    letterSpacing: 0.3,
    textAlign: 'center',
  },
  groupHighlight: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
