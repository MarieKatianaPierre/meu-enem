
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import { useRouter } from 'expo-router';
import {
  BookOpen,
  Calculator,
  Languages,
  Palette,
  Dumbbell,
  Monitor,
  FlaskConical,
  Atom,
  Beaker,
  Landmark,
  Globe,
  Brain,
  Users,
  ChevronRight,
  House,
  ClipboardList,
  UserRound,
  RotateCcw,
  PenTool,
} from 'lucide-react-native';

import { colors } from '../theme/colors';

// As 15 disciplinas e seus principais assuntos
const materias = [
  {
    id: 'port',
    nome: 'Português',
    Icone: BookOpen,
    assuntos: [
      'Interpretação de texto',
      'Gramática',
      'Gêneros textuais',
      'Funções da linguagem',
      'Variação linguística',
      'Argumentação',
    ],
  },
  {
    id: 'mat',
    nome: 'Matemática',
    Icone: Calculator,
    assuntos: [
      'Porcentagem',
      'Regra de três',
      'Funções',
      'Geometria',
      'Estatística',
      'Probabilidade',
    ],
  },
  {
    id: 'lit',
    nome: 'Literatura',
    Icone: BookOpen,
    assuntos: [
      'Escolas literárias',
      'Modernismo',
      'Romantismo',
      'Realismo',
      'Interpretação literária',
    ],
  },
  {
    id: 'lingua',
    nome: 'Língua Estrangeira',
    Icone: Languages,
    assuntos: [
      'Interpretação de textos',
      'Vocabulário',
      'Gramática contextual',
      'Inglês ou Espanhol',
    ],
  },
  {
    id: 'artes',
    nome: 'Artes',
    Icone: Palette,
    assuntos: [
      'Arte brasileira',
      'Arte contemporânea',
      'Movimentos artísticos',
      'Música e teatro',
    ],
  },
  {
    id: 'edfis',
    nome: 'Educação Física',
    Icone: Dumbbell,
    assuntos: [
      'Esporte e sociedade',
      'Corpo e saúde',
      'Práticas corporais',
      'Cultura corporal',
    ],
  },
  {
    id: 'tic',
    nome: 'Tecnologia e Comunicação',
    Icone: Monitor,
    assuntos: [
      'Linguagem digital',
      'Mídias e sociedade',
      'Tecnologias da informação',
      'Comunicação digital',
    ],
  },
  {
    id: 'bio',
    nome: 'Biologia',
    Icone: FlaskConical,
    assuntos: [
      'Citologia',
      'Genética',
      'Ecologia',
      'Evolução',
      'Fisiologia',
    ],
  },
  {
    id: 'fis',
    nome: 'Física',
    Icone: Atom,
    assuntos: [
      'Mecânica',
      'Eletricidade',
      'Ondulatória',
      'Termologia',
      'Óptica',
    ],
  },
  {
    id: 'qui',
    nome: 'Química',
    Icone: Beaker,
    assuntos: [
      'Química orgânica',
      'Estequiometria',
      'Soluções',
      'Ligações químicas',
      'Eletroquímica',
    ],
  },
  {
    id: 'hist',
    nome: 'História',
    Icone: Landmark,
    assuntos: [
      'Brasil Colônia',
      'Brasil Império',
      'República',
      'Era Vargas',
      'Ditadura Militar',
      'História Geral',
    ],
  },
  {
    id: 'geo',
    nome: 'Geografia',
    Icone: Globe,
    assuntos: [
      'Geografia do Brasil',
      'Globalização',
      'Clima e vegetação',
      'Urbanização',
      'Cartografia',
    ],
  },
  {
    id: 'fil',
    nome: 'Filosofia',
    Icone: Brain,
    assuntos: [
      'Ética',
      'Política',
      'Filosofia antiga',
      'Conhecimento',
      'Filosofia moderna',
    ],
  },
  {
    id: 'soc',
    nome: 'Sociologia',
    Icone: Users,
    assuntos: [
      'Cultura e sociedade',
      'Desigualdade social',
      'Cidadania',
      'Trabalho',
      'Movimentos sociais',
    ],
  },
    {
    id: 'red',
    nome: 'Redação',
    Icone: PenTool, // Ou Edit3, FileText, dependendo dos ícones que você importou do lucide-react
    assuntos: [
      'Texto dissertativo-argumentativo',
    ],
  },

];

export default function MateriasScreen() {
  const router = useRouter();

  // Guarda a disciplina selecionada.
  // Quando for null, mostra todas as matérias.
  const [materiaAtiva, setMateriaAtiva] = useState<string | null>(null);

  const materiaSelecionada = materias.find(
    (materia) => materia.id === materiaAtiva
  );

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.brand}>Meu ENEM</Text>

        <View style={styles.header}>
          <Text style={styles.title}>
            {materiaSelecionada
              ? materiaSelecionada.nome
              : 'Matérias'}
          </Text>

          <Text style={styles.subtitle}>
            {materiaSelecionada
              ? 'Escolha um assunto para estudar.'
              : 'Escolha uma disciplina para começar seus estudos.'}
          </Text>
        </View>

        {materiaSelecionada ? (
          <View>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => setMateriaAtiva(null)}
              activeOpacity={0.8}
            >
              <Text style={styles.backButtonText}>
                ‹  Todas as matérias
              </Text>
            </TouchableOpacity>

            {materiaSelecionada.assuntos.map((assunto) => (
              <TouchableOpacity
                key={assunto}
                style={styles.topicCard}
                activeOpacity={0.75}
                onPress={() =>
                  router.push({
                    pathname: '/estudo',
                    params: {
                      materia: materiaSelecionada.nome,
                      assunto,
                    },
                  })
                }
              >
                <Text style={styles.topicName}>{assunto}</Text>
                <ChevronRight color={colors.primary} size={20} />
              </TouchableOpacity>
            ))}
          </View>
        ) : (
          <FlatList
            data={materias}
            keyExtractor={(item) => item.id}
            numColumns={2}
            scrollEnabled={false}
            columnWrapperStyle={styles.gridRow}
            renderItem={({ item }) => {
              const Icone = item.Icone;

              return (
                <TouchableOpacity
                  style={styles.subjectCard}
                  activeOpacity={0.75}
                  onPress={() => setMateriaAtiva(item.id)}
                >
                  <View style={styles.iconContainer}>
                    <Icone
                      color={colors.primary}
                      size={27}
                      strokeWidth={1.8}
                    />
                  </View>

                  <Text style={styles.subjectName}>
                    {item.nome}
                  </Text>

                  <View style={styles.cardFooter}>
                    <Text style={styles.cardLink}>Ver assuntos</Text>
                    <ChevronRight
                      color={colors.primary}
                      size={16}
                    />
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        )}
      </ScrollView>

      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push('/home')}
        >
          <House color={colors.textMuted} size={22} />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => setMateriaAtiva(null)}
        >
          <BookOpen color={colors.primary} size={22} />
          <Text style={styles.navTextActive}>Estudos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push('/simulado')}
        >
          <ClipboardList color={colors.textMuted} size={22} />
          <Text style={styles.navText}>Simulados</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push('/perfil')}
        >          
        <UserRound 
        color={colors.textMuted} 
        size={22} />

          <Text style={styles.navText}>
            Perfil
            </Text>
        </TouchableOpacity>
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
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 105,
  },
  brand: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 0.5,
    marginBottom: 22,
  },
  header: {
    marginBottom: 22,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.textMain,
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 21,
    color: colors.textMuted,
    marginTop: 6,
  },
  gridRow: {
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  subjectCard: {
    width: '48.3%',
    minHeight: 150,
    padding: 13,
    borderRadius: 16,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: 'space-between',
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#06B6D418',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  subjectName: {
    color: colors.textMain,
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 19,
    minHeight: 38,
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  cardLink: {
    color: colors.textMuted,
    fontSize: 11,
  },
  backButton: {
    marginBottom: 16,
    paddingVertical: 10,
  },
  backButtonText: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: '700',
  },
  topicCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    padding: 17,
    marginBottom: 10,
  },
  topicName: {
    color: colors.textMain,
    fontSize: 14,
    fontWeight: '600',
    flex: 1,
    marginRight: 12,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    minHeight: 72,
    paddingBottom: 8,
    backgroundColor: colors.surface,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    paddingTop: 10,
  },
  navText: {
    color: colors.textMuted,
    fontSize: 10,
    fontWeight: '600',
  },
  navTextActive: {
    color: colors.primary,
    fontSize: 10,
    fontWeight: '800',
  },
});
