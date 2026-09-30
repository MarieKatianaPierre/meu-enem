// src/app/perfil.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Switch } from 'react-native';
import { useRouter } from 'expo-router';
import { colors } from '../theme/colors';

export default function ProfileScreen() {
  const router = useRouter();

  // Estados para simular as configurações ativas do aplicativo
  const [notificacoes, setNotificacoes] = useState(true);
  const [temaEscuro, setTemaEscuro] = useState(true);

  // Estados dinâmicos para receber os dados reais do aluno vindo do cadastro/login
  const [nome, setNome] = useState('Estudante');
  const [email, setEmail] = useState('carregando...');
  const [iniciais, setIniciais] = useState('EE');

    // Carrega os dados reais do aluno de forma segura no Celular e na Web
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const usuarioSalvo = localStorage.getItem('@meu_enem_usuario');
        
        if (usuarioSalvo) {
          const dados = JSON.parse(usuarioSalvo);
          setNome(dados.nome);
          setEmail(dados.email);
          setIniciais(dados.iniciais);
          return; // Para a execução aqui se achou os dados
        }
      }
      
      // 📱 DADOS PADRÃO DE SEGURANÇA (Se rodar direto no celular sem passar pelo cadastro Web)
      setNome('Arthur Mendonça');
      setEmail('arthur.enem2026@email.com');
      setIniciais('AM');

    } catch (error) {
      console.error("Erro ao carregar dados do usuário no perfil:", error);
    }
  }, []);


    const handleSairDaConta = () => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.removeItem('@meu_enem_usuario');
      }
    } catch (e) {
      console.error(e);
    }
    router.replace('/login');
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* 👤 Cabeçalho com as Informações Reais do Aluno */}
        <View style={styles.profileHeader}>
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarText}>{iniciais}</Text>
          </View>
          <Text style={styles.profileName}>{nome}</Text>
          <Text style={styles.profileEmail}>{email}</Text>
          <View style={styles.badgeSerie}>
            <Text style={styles.badgeSerieText}>Candidato ENEM • 3º Ano Médio</Text>
          </View>
        </View>

        {/* 📊 Resumo de Métricas de Engajamento */}
        <Text style={styles.sectionTitle}>Seu Progresso no MVP</Text>
        <View style={styles.metricsContainer}>
          <View style={styles.metricRow}>
            <Text style={styles.metricLabel}>📅 Metas do Cronograma</Text>
            <Text style={[styles.metricValue, { color: colors.success }]}>65% Feito</Text>
          </View>
          <View style={styles.metricRow}>
            <Text style={styles.metricLabel}>📝 Média nos Simulados</Text>
            <Text style={[styles.metricValue, { color: colors.primary }]}>680 pts</Text>
          </View>
        </View>

        {/* ⚙️ Seção de Configurações */}
        <Text style={styles.sectionTitle}>Ajustes do Aplicativo</Text>
        <View style={styles.settingsBox}>
          
          {/* Alternar Notificações */}
          <View style={styles.settingItem}>
            <View>
              <Text style={styles.settingItemTitle}>🔔 Notificações Push</Text>
              <Text style={styles.settingItemDesc}>Lembretes de estudo diários</Text>
            </View>
            <Switch
              value={notificacoes}
              onValueChange={setNotificacoes}
              trackColor={{ false: '#2E2559', true: colors.primary }}
              thumbColor={notificacoes ? colors.success : '#94A3B8'}
            />
          </View>

          {/* Alternar Tema Escuro */}
          <View style={styles.settingItem}>
            <View>
              <Text style={styles.settingItemTitle}>🌗 Dark Mode Premium</Text>
              <Text style={styles.settingItemDesc}>Economia de bateria ativa</Text>
            </View>
            <Switch
              value={temaEscuro}
              onValueChange={setTemaEscuro}
              trackColor={{ false: '#2E2559', true: colors.primary }}
              thumbColor={temaEscuro ? colors.success : '#94A3B8'}
            />
          </View>

          {/* Opção: Alterar Senha */}
          <TouchableOpacity style={styles.linkRow} activeOpacity={0.7}>
            <Text style={styles.linkRowText}>🔑 Alterar senha de acesso</Text>
            <Text style={styles.arrowIcon}>➔</Text>
          </TouchableOpacity>

          {/* Opção: Termos de Uso */}
          <TouchableOpacity style={styles.linkRow} activeOpacity={0.7}>
            <Text style={styles.linkRowText}>📄 Termos de privacidade & Uso</Text>
            <Text style={styles.arrowIcon}>➔</Text>
          </TouchableOpacity>
        </View>

        {/* 🚪 Botão Sair da Conta */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleSairDaConta} activeOpacity={0.8}>
          <Text style={styles.logoutButtonText}>Sair da Minha Conta 🚪</Text>
        </TouchableOpacity>

      </ScrollView>

      {/* 🦶 Rodapé de Navegação Fixo Unificado */}
      <View style={styles.tabBarFixed}>
        <TouchableOpacity style={styles.tabItem} onPress={() => router.push('/home')}>
          <Text style={{ fontSize: 20 }}>🏠</Text>
          <Text style={styles.footerTabText}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.tabItem} onPress={() => router.push('/materias')}>
          <Text style={{ fontSize: 20 }}>📚</Text>
          <Text style={styles.footerTabText}>Estudos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => router.push('/simulado')}>
          <Text style={{ fontSize: 20 }}>📝</Text>
          <Text style={styles.footerTabText}>Simulado</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItemActive}>
          <Text style={{ fontSize: 20 }}>👤</Text>
          <Text style={styles.footerTabTextActive}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// 🎨 Bloco de Estilos Totalmente Separado e Alinhado Linha por Linha
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  scrollContent: {
    padding: 24,
    paddingBottom: 110,
  },
  
  // Bloco do cabeçalho do perfil
  profileHeader: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 28,
  },
  avatarCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: colors.border,
  },
  avatarText: {
    fontSize: 28,
    fontWeight: '800',
    color: '#FFFFFF',
  },
  profileName: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.textMain,
    marginTop: 14,
  },
  profileEmail: {
    fontSize: 14,
    color: colors.textMuted,
    marginTop: 4,
  },
  badgeSerie: {
    backgroundColor: colors.primaryLight,
    borderWidth: 1,
    borderColor: colors.border,
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    marginTop: 12,
  },
  badgeSerieText: {
    fontSize: 11,
    color: colors.primary,
    fontWeight: 'bold',
  },
  
  // Títulos de blocos
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.textMain,
    marginBottom: 12,
    marginTop: 16,
  },
  
  // Caixa contêiner das métricas
  metricsContainer: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: colors.radius,
    padding: 16,
    gap: 12,
    marginBottom: 16,
  },
  metricRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  metricLabel: {
    fontSize: 14,
    color: colors.textMain,
    fontWeight: '500',
  },
  metricValue: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  
  // Caixa contêiner das configurações de ajustes
  settingsBox: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: colors.radius,
    paddingHorizontal: 16,
    paddingVertical: 4,
    marginBottom: 28,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  settingItemTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textMain,
  },
  settingItemDesc: {
    fontSize: 11,
    color: colors.textMuted,
    marginTop: 2,
  },
  linkRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  linkRowText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.textMain,
  },
  arrowIcon: {
    fontSize: 12,
    color: colors.textMuted,
    fontWeight: 'bold',
  },
  
  // Botão vermelho de Logout
  logoutButton: {
    backgroundColor: 'rgba(244, 63, 94, 0.1)',
    borderWidth: 1,
    borderColor: colors.danger,
    padding: 16,
    borderRadius: colors.radius,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  logoutButtonText: {
    color: colors.danger,
    fontSize: 15,
    fontWeight: '700',
  },
  
  // Rodapé fixo de navegação
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
