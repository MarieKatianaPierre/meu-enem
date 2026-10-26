
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  UserRound,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  Check,
  UserPlus,
  LogIn,
  BookOpen,
} from 'lucide-react-native';

import { colors } from '../theme/colors';

interface Conta {
  nome: string;
  email: string;
  senha: string;
  iniciais: string;
}

export default function RegisterScreen() {
  const router = useRouter();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [aceitouTermos, setAceitouTermos] = useState(false);
  const [ocultarSenha, setOcultarSenha] = useState(true);
  const [ocultarConfirmacao, setOcultarConfirmacao] = useState(true);
  const [carregando, setCarregando] = useState(false);

  const handleCriarConta = async () => {
    if (carregando) return;

    if (
      !nome.trim() ||
      !email.trim() ||
      !senha ||
      !confirmarSenha
    ) {
      Alert.alert('Atenção', 'Preencha todos os campos.');
      return;
    }

    const emailNormalizado = email.trim().toLowerCase();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailNormalizado)) {
      Alert.alert(
        'E-mail inválido',
        'Digite um endereço de e-mail válido.'
      );
      return;
    }

    if (senha.length < 6) {
      Alert.alert(
        'Senha muito curta',
        'Sua senha deve ter pelo menos 6 caracteres.'
      );
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert('Atenção', 'As senhas não coincidem.');
      return;
    }

    if (!aceitouTermos) {
      Alert.alert(
        'Atenção',
        'Você precisa aceitar os Termos de Uso para continuar.'
      );
      return;
    }

    setCarregando(true);

    try {
      const chaveContas = '@meu_enem_contas';
      const contasSalvas = await AsyncStorage.getItem(chaveContas);

      const contas: Conta[] = contasSalvas
        ? JSON.parse(contasSalvas)
        : [];

      const contaExistente = contas.some(
        (conta) =>
          conta.email.toLowerCase() === emailNormalizado
      );

      if (contaExistente) {
        Alert.alert(
          'Conta já cadastrada',
          'Este e-mail já possui uma conta. Faça login.'
        );
        return;
      }

      const partesNome = nome.trim().split(/\s+/);

      const iniciais =
        (
          (partesNome[0]?.charAt(0) || '') +
          (partesNome[1]?.charAt(0) || '')
        ).toUpperCase() || 'EX';

      const novaConta: Conta = {
        nome: nome.trim(),
        email: emailNormalizado,
        senha,
        iniciais,
      };

      contas.push(novaConta);

      // Salva a conta para a validação do login.
      await AsyncStorage.setItem(
        chaveContas,
        JSON.stringify(contas)
      );

      // Salva somente os dados de perfil do usuário atual.
      await AsyncStorage.setItem(
        '@meu_enem_usuario',
        JSON.stringify({
          nome: novaConta.nome,
          email: novaConta.email,
          iniciais: novaConta.iniciais,
        })
      );

      Alert.alert(
        'Cadastro realizado!',
        'Sua conta foi criada com sucesso.',
        [
          {
            text: 'Continuar',
            onPress: () => router.replace('/home'),
          },
        ]
      );
    } catch (error) {
      console.error('Erro ao cadastrar:', error);

      Alert.alert(
        'Erro',
        'Não foi possível criar sua conta. Tente novamente.'
      );
    } finally {
      setCarregando(false);
    }
  };

  const senhasCoincidem =
    confirmarSenha.length === 0 || senha === confirmarSenha;

  return (
    <View style={styles.screen}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Cabeçalho */}
        <View style={styles.header}>
          <View style={styles.brand}>
            <View style={styles.brandIcon}>
              <BookOpen size={23} color="#FFFFFF" />
            </View>

            <Text style={styles.brandText}>Meu ENEM</Text>
          </View>

          <Text style={styles.title}>Criar conta</Text>

          <Text style={styles.subtitle}>
            Prepare-se para o ENEM com organização e confiança.
          </Text>
        </View>

        {/* Formulário */}
        <View style={styles.form}>
          {/* Nome */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Nome completo</Text>

            <View style={styles.inputContainer}>
              <UserRound
                size={19}
                color={colors.textMuted}
              />

              <TextInput
                style={styles.input}
                placeholder="Digite seu nome"
                placeholderTextColor={colors.textMuted}
                value={nome}
                onChangeText={setNome}
                autoCapitalize="words"
                autoCorrect={false}
                accessibilityLabel="Nome completo"
              />
            </View>
          </View>

          {/* E-mail */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>E-mail</Text>

            <View style={styles.inputContainer}>
              <Mail
                size={19}
                color={colors.textMuted}
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
                size={19}
                color={colors.textMuted}
              />

              <TextInput
                style={styles.input}
                placeholder="Crie uma senha"
                placeholderTextColor={colors.textMuted}
                value={senha}
                onChangeText={setSenha}
                secureTextEntry={ocultarSenha}
                autoCapitalize="none"
                autoCorrect={false}
                accessibilityLabel="Senha"
              />

              <TouchableOpacity
                style={styles.eyeButton}
                onPress={() => setOcultarSenha(!ocultarSenha)}
                accessibilityRole="button"
                accessibilityLabel={
                  ocultarSenha ? 'Mostrar senha' : 'Ocultar senha'
                }
              >
                {ocultarSenha ? (
                  <Eye
                    size={20}
                    color={colors.textMuted}
                  />
                ) : (
                  <EyeOff
                    size={20}
                    color={colors.primary}
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>

          {/* Confirmar senha */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Confirmar senha</Text>

            <View
              style={[
                styles.inputContainer,
                !senhasCoincidem && styles.inputError,
              ]}
            >
              <LockKeyhole
                size={19}
                color={colors.textMuted}
              />

              <TextInput
                style={styles.input}
                placeholder="Digite a senha novamente"
                placeholderTextColor={colors.textMuted}
                value={confirmarSenha}
                onChangeText={setConfirmarSenha}
                secureTextEntry={ocultarConfirmacao}
                autoCapitalize="none"
                autoCorrect={false}
                accessibilityLabel="Confirmar senha"
              />

              <TouchableOpacity
                style={styles.eyeButton}
                onPress={() =>
                  setOcultarConfirmacao(!ocultarConfirmacao)
                }
                accessibilityRole="button"
                accessibilityLabel={
                  ocultarConfirmacao
                    ? 'Mostrar confirmação da senha'
                    : 'Ocultar confirmação da senha'
                }
              >
                {ocultarConfirmacao ? (
                  <Eye
                    size={20}
                    color={colors.textMuted}
                  />
                ) : (
                  <EyeOff
                    size={20}
                    color={colors.primary}
                  />
                )}
              </TouchableOpacity>
            </View>

            {!senhasCoincidem && (
              <Text style={styles.errorText}>
                As senhas não coincidem.
              </Text>
            )}
          </View>

          {/* Termos de uso */}
          <TouchableOpacity
            style={styles.termsRow}
            onPress={() => setAceitouTermos(!aceitouTermos)}
            activeOpacity={0.8}
            accessibilityRole="checkbox"
            accessibilityState={{ checked: aceitouTermos }}
          >
            <View
              style={[
                styles.checkbox,
                aceitouTermos && styles.checkboxChecked,
              ]}
            >
              {aceitouTermos && (
                <Check
                  size={14}
                  color="#FFFFFF"
                  strokeWidth={3}
                />
              )}
            </View>

            <Text style={styles.termsLabel}>
              Li e concordo com os{' '}
              <Text style={styles.linkTextInline}>
                Termos de Uso
              </Text>
            </Text>
          </TouchableOpacity>

          {/* Criar conta */}
          <TouchableOpacity
            style={[
              styles.button,
              (
                !aceitouTermos ||
                !nome.trim() ||
                !email.trim() ||
                !senha ||
                !confirmarSenha ||
                !senhasCoincidem ||
                carregando
              ) && styles.buttonDisabled,
            ]}
            onPress={handleCriarConta}
            disabled={
              !aceitouTermos ||
              !nome.trim() ||
              !email.trim() ||
              !senha ||
              !confirmarSenha ||
              !senhasCoincidem ||
              carregando
            }
            activeOpacity={0.8}
          >
            <UserPlus size={19} color="#FFFFFF" />

            <Text style={styles.buttonText}>
              {carregando
                ? 'Criando conta...'
                : 'Criar minha conta'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Voltar ao login */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Já tem uma conta?
          </Text>

          <TouchableOpacity
            style={styles.loginLink}
            onPress={() => router.push('/login')}
            activeOpacity={0.7}
          >
            <LogIn
              size={17}
              color={colors.primary}
            />

            <Text style={styles.linkText}>
              Fazer login
            </Text>
          </TouchableOpacity>
        </View>

        {/* Créditos */}
        <Text style={styles.credits}>
          Desenvolvido pelo grupo{' '}
          <Text style={styles.groupHighlight}>
            404 TEAM
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 28,
    paddingBottom: 24,
    justifyContent: 'center',
  },
  header: {
    marginBottom: 28,
  },
  brand: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 28,
  },
  brandIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandText: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.textMain,
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    color: colors.textMain,
    letterSpacing: -0.8,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textMuted,
    marginTop: 8,
    lineHeight: 21,
  },
  form: {
    width: '100%',
  },
  inputGroup: {
    marginBottom: 17,
    width: '100%',
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.textMain,
    marginBottom: 8,
  },
  inputContainer: {
    minHeight: 54,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 11,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: colors.radius,
    paddingHorizontal: 14,
  },
  input: {
    flex: 1,
    minWidth: 0,
    paddingVertical: 13,
    fontSize: 14,
    color: colors.textMain,
  },
  eyeButton: {
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputError: {
    borderColor: colors.danger,
  },
  errorText: {
    color: colors.danger,
    fontSize: 12,
    marginTop: 6,
  },
  termsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 4,
    marginBottom: 24,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.surface,
  },
  checkboxChecked: {
    backgroundColor: colors.success,
    borderColor: colors.success,
  },
  termsLabel: {
    flex: 1,
    fontSize: 13,
    color: colors.textMuted,
    lineHeight: 20,
  },
  linkTextInline: {
    color: colors.primary,
    fontWeight: '700',
  },
  button: {
    minHeight: 52,
    backgroundColor: colors.primary,
    paddingHorizontal: 16,
    borderRadius: colors.radius,
    flexDirection: 'row',
    gap: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonDisabled: {
    opacity: 0.45,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
  footer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginTop: 28,
  },
  footerText: {
    fontSize: 13,
    color: colors.textMuted,
  },
  loginLink: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  linkText: {
    fontSize: 13,
    color: colors.primary,
    fontWeight: '700',
  },
  credits: {
    marginTop: 28,
    textAlign: 'center',
    color: colors.textMuted,
    fontSize: 11,
  },
  groupHighlight: {
    color: colors.textMain,
    fontWeight: '700',
  },
});
