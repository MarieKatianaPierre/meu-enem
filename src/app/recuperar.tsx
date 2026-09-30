// src/app/recuperar.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { colors } from '../theme/colors';

export default function RecoveryScreen() {
  const router = useRouter();
  
  // Estados para gerenciar o formulário e as etapas
  const [email, setEmail] = useState('');
  const [codigo, setCodigo] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [codigoEnviado, setCodigoEnviado] = useState(false);

  // Avança para a segunda etapa simulando o envio
  const handleEnviarCodigo = () => {
    if (email.trim() === '') return;
    setCodigoEnviado(true);
  };

  // Finaliza a troca de senha e retorna o aluno para o login
  const handleSalvarNovaSenha = () => {
    if (!novaSenha || !confirmarSenha || novaSenha !== confirmarSenha) return;
    router.replace('/login');
  };

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      
      {/* Cabeçalho dinâmico baseado na etapa do fluxo */}
      <View style={styles.header}>
        <Text style={styles.title}>Recuperar Senha</Text>
        <Text style={styles.subtitle}>
          {!codigoEnviado 
            ? "Insira seu e-mail cadastrado para receber o código de verificação." 
            : "Insira o código recebido no seu e-mail e escolha sua nova senha de acesso."}
        </Text>
      </View>

      <View style={styles.form}>
        {/* 📧 ETAPA 1: Campo do E-mail */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>E-mail</Text>
          <TextInput
            style={[styles.input, codigoEnviado && styles.inputDisabled]}
            placeholder="exemplo@email.com"
            placeholderTextColor={colors.textMuted}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            editable={!codigoEnviado} // Bloqueia o e-mail após avançar de etapa
          />
        </View>

        {/* Renderização Condicional das Etapas */}
        {!codigoEnviado ? (
          <TouchableOpacity style={styles.button} onPress={handleEnviarCodigo} activeOpacity={0.8}>
            <Text style={styles.buttonText}>Enviar Código</Text>
          </TouchableOpacity>
        ) : (
          /* 🔑 ETAPA 2: Campos de Código e Nova Senha */
          <View style={styles.stepTwoContainer}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Código de Verificação</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite o código de 6 dígitos"
                placeholderTextColor={colors.textMuted}
                value={codigo}
                onChangeText={setCodigo}
                keyboardType="number-pad"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Nova Senha</Text>
              <TextInput
                style={styles.input}
                placeholder="Mínimo 8 caracteres"
                placeholderTextColor={colors.textMuted}
                value={novaSenha}
                onChangeText={setNovaSenha}
                secureTextEntry
                autoCapitalize="none"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Confirmar Nova Senha</Text>
              <TextInput
                style={styles.input}
                placeholder="Repita a nova senha"
                placeholderTextColor={colors.textMuted}
                value={confirmarSenha}
                onChangeText={setConfirmarSenha}
                secureTextEntry
                autoCapitalize="none"
              />
              {/* Alerta inteligente de frontend caso as senhas estejam diferentes */}
              {novaSenha !== confirmarSenha && confirmarSenha.length > 0 && (
                <Text style={styles.errorText}>As senhas não coincidem</Text>
              )}
            </View>

            <TouchableOpacity 
              style={[styles.button, (novaSenha !== confirmarSenha || !novaSenha) && styles.buttonDisabled]} 
              onPress={handleSalvarNovaSenha}
              disabled={novaSenha !== confirmarSenha || !novaSenha}
              activeOpacity={0.8}
            >
              <Text style={styles.buttonText}>Redefinir Senha</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* Rodapé: Link para retornar ao Login manualmente */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => router.back()} activeOpacity={0.7}>
          <Text style={styles.linkText}>← Voltar para o Login</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

// 🎨 Estilos Alinhados e Separados Linha por Linha
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.bg,
    padding: 24,
    justifyContent: 'center',
  },
  header: {
    marginBottom: 36,
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
    width: '100%',
    marginBottom: 16,
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
  inputDisabled: {
    opacity: 0.4,
    borderColor: 'transparent',
  },
  stepTwoContainer: {
    width: '100%',
    marginTop: 8,
  },
  errorText: {
    color: colors.danger,
    fontSize: 13,
    marginTop: 6,
    fontWeight: '500',
  },
  button: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: colors.radius,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    boxShadow: '0px 4px 14px rgba(99, 102, 241, 0.3)',
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
    alignItems: 'center',
    marginTop: 40,
  },
  linkText: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: '600',
  },
});
