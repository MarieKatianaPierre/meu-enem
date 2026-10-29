
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import {
  ChevronLeft,
  MessageCircle,
  Send,
  UserRound,
  CalendarDays,
} from 'lucide-react-native';

// Cores da tela de comentários
const CORES = {
  fundo: '#0F172A',
  cartao: '#1E293B',
  azul: '#38BDF8',
  branco: '#F8FAFC',
  cinza: '#94A3B8',
  borda: '#334155',
  verde: '#34D399',
};

type Comentario = {
  id: string;
  nome: string;
  mensagem: string;
  data: string;
};

export default function ComentariosScreen() {
  const router = useRouter();

  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  // Comentários de exemplo.
  // Depois, eles serão carregados do backend.
  const [comentarios, setComentarios] = useState<Comentario[]>([
    {
      id: '1',
      nome: 'Estudante',
      mensagem: 'Gostei da ideia do aplicativo! Vai me ajudar a organizar os estudos.',
      data: 'Exemplo',
    },
    {
      id: '2',
      nome: 'Visitante',
      mensagem: 'Seria interessante ter mais simulados para praticar.',
      data: 'Exemplo',
    },
  ]);

  function enviarComentario() {
    if (!mensagem.trim()) {
      if (Platform.OS === 'web') {
        window.alert('Escreva um comentário antes de enviar.');
      } else {
        Alert.alert('Atenção', 'Escreva um comentário antes de enviar.');
      }
      return;
    }

    const novoComentario: Comentario = {
      id: `${Date.now()}`,
      nome: nome.trim() || 'Visitante',
      mensagem: mensagem.trim(),
      data: new Date().toLocaleDateString('pt-BR'),
    };

    // Adiciona o comentário somente nesta tela.
    // A publicação pública será feita pelo backend futuramente.
    setComentarios((lista) => [novoComentario, ...lista]);

    setNome('');
    setMensagem('');

    if (Platform.OS === 'web') {
      window.alert(
        'Comentário adicionado à demonstração! A publicação pública dependerá da integração com o backend.'
      );
    } else {
      Alert.alert(
        'Demonstração',
        'Comentário adicionado à tela. Para publicá-lo para todos, será necessário conectar o backend.'
      );
    }
  }

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.voltar}
          onPress={() => router.back()}
          accessibilityLabel="Voltar"
        >
          <ChevronLeft color={CORES.azul} size={25} />
        </TouchableOpacity>

        <View style={styles.tituloContainer}>
          <View style={styles.iconeTitulo}>
            <MessageCircle color={CORES.azul} size={25} />
          </View>

          <Text style={styles.titulo}>Comentários</Text>
          <Text style={styles.subtitulo}>
            Sua opinião ajuda o Meu ENEM a melhorar.
          </Text>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.conteudo}
      >
        {/* Formulário */}
        <View style={styles.card}>
          <Text style={styles.tituloCard}>Deixe sua opinião</Text>
          <Text style={styles.descricao}>
            Compartilhe sugestões, ideias ou sua experiência com o aplicativo.
          </Text>

          <Text style={styles.label}>Nome ou apelido (opcional)</Text>
          <TextInput
            style={styles.input}
            placeholder="Como podemos chamar você?"
            placeholderTextColor={CORES.cinza}
            value={nome}
            onChangeText={setNome}
            maxLength={60}
          />

          <Text style={styles.label}>Seu comentário</Text>
          <TextInput
            style={[styles.input, styles.caixaTexto]}
            placeholder="Escreva seu comentário aqui..."
            placeholderTextColor={CORES.cinza}
            value={mensagem}
            onChangeText={setMensagem}
            multiline
            textAlignVertical="top"
            maxLength={1000}
          />

          <Text style={styles.contador}>
            {mensagem.length}/1000 caracteres
          </Text>

          <TouchableOpacity
            style={styles.botaoEnviar}
            onPress={enviarComentario}
            activeOpacity={0.8}
          >
            <Send color={CORES.fundo} size={18} />
            <Text style={styles.textoBotao}>Enviar comentário</Text>
          </TouchableOpacity>
        </View>

        {/* Lista de comentários */}
        <View style={styles.listaCabecalho}>
          <Text style={styles.tituloLista}>Opiniões da comunidade</Text>
          <View style={styles.quantidade}>
            <Text style={styles.textoQuantidade}>
              {comentarios.length}
            </Text>
          </View>
        </View>

        {comentarios.map((item) => (
          <View style={styles.comentarioCard} key={item.id}>
            <View style={styles.autorLinha}>
              <View style={styles.iconeUsuario}>
                <UserRound color={CORES.azul} size={21} />
              </View>

              <View style={styles.autorInfo}>
                <Text style={styles.nomeAutor}>{item.nome}</Text>
                <View style={styles.dataLinha}>
                  <CalendarDays color={CORES.cinza} size={13} />
                  <Text style={styles.data}>{item.data}</Text>
                </View>
              </View>
            </View>

            <Text style={styles.textoComentario}>
              {item.mensagem}
            </Text>
          </View>
        ))}

        <View style={styles.aviso}>
          <Text style={styles.textoAviso}>
            Esta é uma versão de demonstração. Os comentários ainda não são
            compartilhados entre dispositivos.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CORES.fundo,
  },
  header: {
    paddingTop: 45,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  voltar: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: CORES.cartao,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  tituloContainer: {
    alignItems: 'center',
  },
  iconeTitulo: {
    width: 54,
    height: 54,
    borderRadius: 18,
    backgroundColor: CORES.cartao,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  titulo: {
    fontSize: 27,
    fontWeight: 'bold',
    color: CORES.branco,
  },
  subtitulo: {
    fontSize: 14,
    color: CORES.cinza,
    textAlign: 'center',
    marginTop: 8,
  },
  conteudo: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  card: {
    backgroundColor: CORES.cartao,
    padding: 18,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: CORES.borda,
    marginBottom: 28,
  },
  tituloCard: {
    fontSize: 19,
    fontWeight: 'bold',
    color: CORES.branco,
    marginBottom: 8,
  },
  descricao: {
    fontSize: 14,
    lineHeight: 21,
    color: CORES.cinza,
    marginBottom: 22,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: CORES.branco,
    marginBottom: 9,
    marginTop: 6,
  },
  input: {
    backgroundColor: CORES.fundo,
    borderColor: CORES.borda,
    borderWidth: 1,
    borderRadius: 12,
    color: CORES.branco,
    paddingHorizontal: 14,
    paddingVertical: 13,
    fontSize: 15,
    marginBottom: 14,
  },
  caixaTexto: {
    minHeight: 125,
  },
  contador: {
    color: CORES.cinza,
    textAlign: 'right',
    fontSize: 12,
    marginTop: -7,
    marginBottom: 16,
  },
  botaoEnviar: {
    backgroundColor: CORES.azul,
    borderRadius: 12,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  textoBotao: {
    color: CORES.fundo,
    fontSize: 15,
    fontWeight: 'bold',
  },
  listaCabecalho: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    gap: 10,
  },
  tituloLista: {
    color: CORES.branco,
    fontSize: 19,
    fontWeight: 'bold',
    flex: 1,
  },
  quantidade: {
    minWidth: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: CORES.cartao,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  textoQuantidade: {
    color: CORES.azul,
    fontWeight: 'bold',
  },
  comentarioCard: {
    backgroundColor: CORES.cartao,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: CORES.borda,
    padding: 16,
    marginBottom: 12,
  },
  autorLinha: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  iconeUsuario: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: CORES.fundo,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  autorInfo: {
    flex: 1,
  },
  nomeAutor: {
    color: CORES.branco,
    fontSize: 15,
    fontWeight: 'bold',
  },
  dataLinha: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginTop: 5,
  },
  data: {
    color: CORES.cinza,
    fontSize: 12,
  },
  textoComentario: {
    color: CORES.branco,
    fontSize: 14,
    lineHeight: 22,
  },
  aviso: {
    borderRadius: 12,
    backgroundColor: '#172554',
    padding: 14,
    marginTop: 8,
  },
  textoAviso: {
    color: '#BFDBFE',
    fontSize: 13,
    lineHeight: 20,
  },
});
