// src/app/cadastro.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { colors } from '../theme/colors';

export default function RegisterScreen() {
  const router = useRouter();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [aceitouTermos, setAceitouTermos] = useState(false);

     const handleCriarConta = () => {
    if (!nome || !email || !senha || !confirmarSenha) return;
    if (senha !== confirmarSenha) return;
    if (!aceitouTermos) return;

    // 💾 SALVAMENTO SEGURO DO CADASTRO (PROTEGIDO CONTRA CRASH NO CELULAR)
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        // Gera as iniciais do nome de forma limpa
        const partesNome = nome.trim().split(' ');
        const primeiraLetra = partesNome[0] ? partesNome[0].charAt(0) : '';
        const segundaLetra = partesNome[1] ? partesNome[1].charAt(0) : '';
        const iniciaisGeradas = (primeiraLetra + segundaLetra).toUpperCase() || 'EX';

        const dadosUsuario = {
          nome: nome,
          email: email,
          iniciais: iniciaisGeradas
        };
        
        localStorage.setItem('@meu_enem_usuario', JSON.stringify(dadosUsuario));
      }
    } catch (error) {
      console.error("Erro ao salvar dados do cadastro:", error);
    }

    // Avança para a Home sem travar
    router.replace('/home');
  };


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Criar Conta</Text>
        <Text style={styles.subtitle}>Comece sua preparação inteligente para o ENEM</Text>
      </View>

      <View style={styles.form}>
        {/* Campo Nome */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Nome Completo</Text>
          <TextInput
            style={styles.input}
            placeholder="Seu nome"
            placeholderTextColor={colors.textMuted}
            value={nome}
            onChangeText={setNome}
          />
        </View>

        {/* Campo E-mail */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>E-mail</Text>
          <TextInput
            style={styles.input}
            placeholder="exemplo@email.com"
            placeholderTextColor={colors.textMuted}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Campo Senha */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="••••••••"
            placeholderTextColor={colors.textMuted}
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
            autoCapitalize="none"
          />
        </View>

        {/* Campo Confirmar Senha */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Confirmar Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="••••••••"
            placeholderTextColor={colors.textMuted}
            value={confirmarSenha}
            onChangeText={setConfirmarSenha}
            secureTextEntry
            autoCapitalize="none"
          />
          {senha !== confirmarSenha && confirmarSenha.length > 0 && (
            <Text style={styles.errorText}>As senhas não coincidem</Text>
          )}
        </View>

        {/* ☑️ Caixa de Aceite dos Termos */}
        <TouchableOpacity 
          style={styles.termsRow} 
          onPress={() => setAceitouTermos(!aceitouTermos)}
          activeOpacity={0.8}
        >
          <View style={[styles.checkbox, aceitouTermos && styles.checkboxChecked]}>
            {aceitouTermos && <Text style={styles.checkboxCheckmark}>✓</Text>}
          </View>
          <Text style={styles.termsLabel}>
            Li e concordo com os <Text style={styles.linkTextInline}>Termos de Uso</Text>
          </Text>
        </TouchableOpacity>

        {/* Botão Concluir Cadastro */}
        <TouchableOpacity 
          style={[styles.button, (!aceitouTermos || senha !== confirmarSenha) && styles.buttonDisabled]} 
          onPress={handleCriarConta}
          disabled={!aceitouTermos || senha !== confirmarSenha}
        >
          <Text style={styles.buttonText}>Criar minha conta</Text>
        </TouchableOpacity>
      </View>

      {/* Rodapé: Voltar ao Login */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Já tem uma conta? </Text>
        <TouchableOpacity onPress={() => router.push('/login')}>
          <Text style={styles.linkText}>Fazer Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.bg,
    padding: 24,
    justifyContent: 'center',
  },
  header: {
    marginBottom: 32,
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
    marginBottom: 16,
    width: '100%',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textMain,
    marginBottom: 8,
  },
  input: {
    width: '100%',
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: colors.radius,
    padding: 16,
    fontSize: 15,
    color: colors.textMain,
  },
  errorText: {
    color: colors.danger,
    fontSize: 13,
    marginTop: 6,
    fontWeight: '500',
  },
  termsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 12,
    marginBottom: 28,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.surface,
  },
  checkboxChecked: {
    backgroundColor: colors.success,
    borderColor: colors.success,
  },
  checkboxCheckmark: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  termsLabel: {
    fontSize: 14,
    color: colors.textMuted,
  },
  linkTextInline: {
    color: colors.primary,
    fontWeight: '600',
  },
  button: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: colors.radius,
    alignItems: 'center',
    justifyContent: 'center',
    // Correção de estilo seguindo o aviso do terminal (padrão React Native moderno)
    boxShadow: '0px 4px 12px rgba(99, 102, 241, 0.3)', 
  },
  buttonDisabled: {
    opacity: 0.5,
    boxShadow: 'none',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 32,
  },
  footerText: {
    fontSize: 14,
    color: colors.textMuted,
  },
  linkText: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: '600',
  },
});
