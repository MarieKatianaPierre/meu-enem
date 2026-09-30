// src/app/login.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Switch, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { colors } from '../theme/colors';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [ocultarSenha, setOcultarSenha] = useState(true);
  const [lembrarMe, setLembrarMe] = useState(false);

      const handleEntrar = () => {
    if (!email || !senha) return;

    // 💾 SAUVEGARDE SÉCURISÉE DES DONNÉES DE CONNEXION (404 TEAM)
    try {
      // On vérifie de manière sûre si le stockage Web est disponible
      if (typeof window !== 'undefined' && window.localStorage) {
        // Extraction d'un nom fictif pour la démonstration MVP
        const nomeSimulado = email.split('@')[0];
        const nomeFormatado = nomeSimulado.charAt(0).toUpperCase() + nomeSimulado.slice(1);
        
        const dadosUsuario = {
          nome: nomeFormatado,
          email: email,
          iniciais: nomeFormatado.substring(0, 2).toUpperCase()
        };
        
        localStorage.setItem('@meu_enem_usuario', JSON.stringify(dadosUsuario));
      }
    } catch (error) {
      console.error("Erro ao salvar dados do login:", error);
    }

    // Navigue vers la Home sans encombre
    router.replace('/home');
  };



  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* 🔮 Efeito de iluminação no topo */}
        <View style={styles.glowEffect} />

        <View style={styles.header}>
          <Text style={styles.title}>Boas-vindas</Text>
          <Text style={styles.subtitle}>Entre para continuar sua jornada rumo à nota 1000</Text>
        </View>

        {/* Formulário Premium */}
        <View style={styles.form}>
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

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Senha</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder="••••••••"
                placeholderTextColor={colors.textMuted}
                value={senha}
                onChangeText={setSenha}
                secureTextEntry={ocultarSenha}
                autoCapitalize="none"
              />
              <TouchableOpacity 
                style={styles.eyeButton} 
                onPress={() => setOcultarSenha(!ocultarSenha)}
                activeOpacity={0.7}
              >
                <Text style={styles.eyeText}>{ocultarSenha ? '👁️' : '🔒'}</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Linha de Opções: Lembrar e Esqueci */}
          <View style={styles.row}>
            <View style={styles.checkboxContainer}>
              <Switch
                value={lembrarMe}
                onValueChange={setLembrarMe}
                trackColor={{ false: '#2E2559', true: colors.primary }}
                thumbColor={lembrarMe ? colors.success : '#94A3B8'}
              />
              <Text style={styles.checkboxLabel}>Lembrar de mim</Text>
            </View>
            
            <TouchableOpacity onPress={() => router.push('/recuperar')} activeOpacity={0.7}>
              <Text style={styles.linkText}>Esqueci minha senha</Text>
            </TouchableOpacity>
          </View>

          {/* Botão de Entrada */}
          <TouchableOpacity style={styles.button} onPress={handleEntrar} activeOpacity={0.8}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>

        {/* Navegação para o Cadastro */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Não tem uma conta? </Text>
          <TouchableOpacity onPress={() => router.push('/cadastro')} activeOpacity={0.7}>
            <Text style={[styles.linkText, { fontWeight: 'bold' }]}>Criar uma conta</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* 🦶 Rodapé Fixo de Créditos do Grupo na Base */}
      <View style={styles.creditsFooter}>
        <Text style={styles.creditsFooterText}>
          Criado e desenvolvido pelo grupo <Text style={styles.groupHighlight}>404 TEAM</Text>
        </Text>
      </View>
    </View>
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
    paddingBottom: 70, // Espaço confortável para o conteúdo rolável não bater no rodapé fixo
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
    marginBottom: 40,
    marginTop: 40, // 🔋 Afasta confortavelmente os ícones de bateria e notificações do Android
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
  /* 📐 Altura travada em 56px para alinhar perfeitamente com o campo de E-mail */
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: colors.radius,
    width: '100%',
    height: 56, 
  },
  passwordInput: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 15,
    color: colors.textMain,
  },
  eyeButton: {
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  eyeText: {
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 32,
    marginTop: 4,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  checkboxLabel: {
    fontSize: 14,
    color: colors.textMuted,
  },
  linkText: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: '600',
  },
  button: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: colors.radius,
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0px 4px 14px rgba(99, 102, 241, 0.3)',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40,
  },
  footerText: {
    fontSize: 14,
    color: colors.textMuted,
  },
  /* 🦶 Estilos da Barra Fixa com Assinatura da Equipe */
  creditsFooter: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: colors.bg,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgba(46, 37, 89, 0.3)', // Borda sutil combinando com o tema escuro
  },
  creditsFooterText: {
    color: colors.textMuted,
    fontSize: 11,
    fontWeight: '500',
    letterSpacing: 0.3,
  },
  groupHighlight: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
