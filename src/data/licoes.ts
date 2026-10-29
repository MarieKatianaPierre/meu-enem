
export type SecaoLicao = {
  titulo: string;
  conteudo: string;
};

export type Licao = {
  materia: string;
  assunto: string;
  introducao: string;
  secoes: SecaoLicao[];
};

export const licoes: Record<string, Licao> = {
 'Matemática|Porcentagem': {
  materia: 'Matemática',
  assunto: 'Porcentagem',
  introducao:
    'A porcentagem representa uma razão cujo denominador é 100. Ela é uma das ferramentas mais importantes da matemática financeira e aparece constantemente no Enem em gráficos, descontos, aumentos e juros do cotidiano.',
  secoes: [
    {
      titulo: '1. As 3 Formas de Representação',
      conteudo:
        'Para mandar bem no Enem, você precisa saber que uma porcentagem pode ser escrita de três maneiras diferentes:\n\n1) Forma Percentual: Usa o símbolo % (Ex: 25%)\n2) Forma Fracionária: Uma fração com denominador 100 (Ex: 25/100)\n3) Forma Decimal: O resultado da divisão por 100 (Ex: 0,25)\n\nDica: Na hora de fazer contas no papel, transformar a porcentagem em fração ou decimal facilita muito o cálculo!',
    },
    {
      titulo: '2. Como Calcular (Fórmula e Passo a Passo)',
      conteudo:
        'Para calcular a porcentagem de qualquer valor, basta multiplicar o valor total pela taxa percentual e depois dividir o resultado por 100.\n\nFórmula:\nResultado = (Valor × Taxa) ÷ 100\n\nExemplo Prático: Quanto é 20% de R$ 150?\nPasso 1: Multiplique o valor pela taxa:\n150 × 20 = 3.000\nPasso 2: Divida o total por 100:\n3.000 ÷ 100 = 30\n\nResposta: 20% de R$ 150 é igual a R$ 30.',
    },
    {
      titulo: '3. Desconto Percentual',
      conteudo:
        'O desconto é a subtração de um valor com base em uma porcentagem. É o famoso "preço na promoção".\n\nExemplo Prático: Um casaco custa R$ 200 e está com 10% de desconto. Qual o preço final?\n\n1º) Calcule o valor do desconto:\n(200 × 10) ÷ 100 = 20 (O desconto é de R$ 20)\n\n2º) Subtraia o desconto do valor original:\n200 − 20 = 180\n\nResposta: O preço final com desconto é R$ 180.',
    },
    {
      titulo: '4. Aumento Percentual',
      conteudo:
        'O aumento ocorre quando somamos um valor extra baseado na porcentagem. Muito comum em reajustes de preço ou inflação.\n\nExemplo Prático: O aluguel de R$ 1.200 vai sofrer um aumento de 5%. Qual será o novo valor?\n\n1º) Calcule o valor do aumento:\n(1.200 × 5) ÷ 100 = 60 (O aumento é de R$ 60)\n\n2º) Some o aumento ao valor original:\n1.200 + 60 = 1.260\n\nResposta: O novo valor do aluguel será R$ 1.260.',
    },
    {
      titulo: '💡 Macetes de Cálculo Mental para o Enem',
      conteudo:
        'Ganhe tempo na prova usando estas regras rápidas:\n\n- Para achar 10%: Basta andar com a vírgula uma casa para a esquerda. (Ex: 10% de 450 é 45).\n- Para achar 1%: Basta andar com a vírgula duas casas para a esquerda. (Ex: 1% de 450 é 4,5).\n- Para achar 50%: Divida o valor por 2 (metade).\n- Para achar 25%: Divida o valor por 4 (metade da metade).',
    },
    {
      titulo: 'Resumo Prático',
      conteudo:
        'Porcentagem é divisão por 100. Lembre-se:\n- Desconto = Valor Original − Porcentagem\n- Aumento = Valor Original + Porcentagem',
    },
  ],
},

 'Matemática|Regra de três': {
  materia: 'Matemática',
  assunto: 'Regra de três',
  introducao:
    'A regra de três é uma ferramenta matemática fundamental para resolver problemas do cotidiano e do Enem. Ela ajuda a descobrir um valor desconhecido a partir de uma relação de proporção entre grandezas conhecidas.',
  secoes: [
    {
      titulo: '1. O que são Grandezas?',
      conteudo:
        'Grandeza é tudo aquilo que pode ser medido ou contado, como tempo, velocidade, preço, quantidade de objetos ou número de pessoas. O segredo da regra de três é entender como essas grandezas se relacionam.',
    },
    {
      titulo: '2. Grandezas Diretamente Proporcionais (GDP)',
      conteudo:
        'Ocorre quando as duas grandezas se movem na mesma direção: se uma aumenta, a outra também aumenta; se uma diminui, a outra também diminui.\n\nExemplo Prático: Se 2 cadernos custam R$ 10, quanto custam 6 cadernos? (Se eu compro mais cadernos, vou gastar mais dinheiro).\n\nMontando a tabela:\nCadernos  →  Preço\n   2      →   10\n   6      →   x\n\nMultiplicamos cruzado (em X):\n2 · x = 6 · 10\n2x = 60\nx = 60 / 2\nx = 30\n\nResposta: Os 6 cadernos custam R$ 30.',
    },
    {
      titulo: '3. Grandezas Inversamente Proporcionais (GIP)',
      conteudo:
        'Ocorre quando as grandezas se movem em direções opostas: se uma aumenta, a outra diminui na mesma proporção.\n\nExemplo Prático: Se 2 operários constroem um muro em 12 horas, quanto tempo 4 operários levariam? (Se temos mais pessoas trabalhando, o tempo para terminar deve ser menor).\n\nMontando a tabela:\nOperários  →  Tempo (h)\n   2       →    12\n   4       →     x\n\nATENÇÃO: Como é inversa, nós NÃO multiplicamos cruzado direto. Nós invertemos a segunda coluna (ou multiplicamos em linha reta):\n4 · x = 2 · 12\n4x = 24\nx = 24 / 4\nx = 6\n\nResposta: Os 4 operários levariam 6 horas.',
    },
    {
      titulo: '💡 Dica de Ouro para o Enem',
      conteudo:
        'Antes de fazer qualquer cálculo, faça a pergunta das setas:\n- Se eu aumentar a grandeza A, o que acontece com a grandeza B?\nSe a resposta for "aumenta", é Direta (multiplica cruzado).\nSe a resposta for "diminui", é Inversa (multiplica em linha reta).',
    },
    {
      titulo: 'Resumo Prático',
      conteudo:
        '1º) Monte a tabela separando as grandezas em colunas.\n2º) Descubra se a relação é direta ou inversa.\n3º) Calcule isolando a incógnita (x).',
    },
  ],
},

  'Matemática|Funções': {
  materia: 'Matemática',
  assunto: 'Funções',
  introducao:
    'Uma função é uma regra matemática que relaciona cada elemento de um conjunto de entrada (X) a um único elemento de um conjunto de saída (Y). No Enem, as funções servem para modelar situações reais, como o valor de uma corrida de táxi ou a trajetória de um projétil.',
  secoes: [
    {
      titulo: '1. O que são Domínio e Imagem?',
      conteudo:
        'Pense na função como uma máquina:\n- Domínio (x): São os valores que você coloca dentro da máquina (entradas).\n- Imagem (f(x) ou y): São os resultados que a máquina entrega (saídas).\n\nCada valor de x possui apenas um único resultado y correspondente.',
    },
    {
      titulo: '2. Função do 1º Grau (Afonso ou Linear)',
      conteudo:
        'Sua fórmula geral é f(x) = ax + b (com a diferente de zero).\n\nNo Enem, os coeficientes têm nomes e significados práticos muito importantes:\n- "a" é o Coeficiente Angular: É o valor que varia junto com o x (taxa de variação).\n- "b" é o Coeficiente Linear: É o valor fixo (inicial).\n\nExemplo Real: Um motorista de aplicativo cobra R$ 5,00 de taxa fixa mais R$ 2,00 por quilômetro rodado. A função será: f(x) = 2x + 5.\nSe você rodar 4 km (x = 4):\nf(4) = 2 · 4 + 5 = 8 + 5 = 13.\nVocê pagará R$ 13,00.',
    },
    {
      titulo: '3. Gráficos da Função do 1º Grau',
      conteudo:
        'O gráfico da função do 1º grau é sempre uma LINHA RETA.\n\n- Se o "a" for positivo (a > 0): A função é Crescente (a reta sobe).\n- Se o "a" for negativo (a < 0): A função é Decrescente (a reta desce).\n- O ponto onde a reta corta o eixo Y (vertical) é exatamente o valor de "b".',
    },
    {
      titulo: '4. Função do 2º Grau (Quadrática)',
      conteudo:
        'Sua fórmula geral é f(x) = ax² + bx + c (com a diferente de zero).\n\nO gráfico da função do 2º grau é uma PARÁBOLA (uma curva em formato de U).\n- Se o "a" for positivo (a > 0): A parábola tem concavidade para cima (sorriso positivo ☺).\n- Se o "a" for negativo (a < 0): A parábola tem concavidade para baixo (carinha triste ☹).\n\nDica de Ouro: O Enem adora cobrar o "Vértice da Parábola" para descobrir valores máximos ou mínimos (como o lucro máximo de uma empresa ou a altura máxima de um salto).',
    },
    {
      titulo: '💡 Resumo Prático para a Prova',
      conteudo:
        '1º grau → f(x) = ax + b → Gráfico é uma RETA.\n2º grau → f(x) = ax² + bx + c → Gráfico é uma PARÁBOLA.\n\nNas questões do Enem, identifique sempre o que é o valor fixo (b ou c) e o que varia dependendo do tempo ou quantidade (a).',
    },
  ],
},


  'Matemática|Geometria': {
  materia: 'Matemática',
  assunto: 'Geometria',
  introducao:
    'A geometria estuda o espaço, as formas planares (2D) e os sólidos espaciais (3D). No Enem, as questões cobram muito o cálculo de gasto de material (Área), cercamento de terrenos (Perímetro) e capacidade de armazenamento (Volume).',
  secoes: [
    {
      titulo: '1. Diferença entre Perímetro e Área (2D)',
      conteudo:
        '- Perímetro: É o contorno da figura (a soma de todos os lados). Imagine que você está colocando uma cerca ao redor de um terreno.\n- Área: É a superfície interna da figura. Imagine que você está cobrindo o chão de um quarto com piso ou grama.',
    },
    {
      titulo: '2. Fórmulas de Área que Mais Caem',
      conteudo:
        'Memorize estas quatro figuras essenciais para a prova:\n\n- Quadrado: Área = Lado × Lado (L²)\n- Retângulo: Área = Base × Altura (b × h)\n- Triângulo: Área = (Base × Altura) ÷ 2\n- Círculo: Área = π × Raio² (Adote π = 3 ou 3,14 se o Enem pedir).',
    },
    {
      titulo: '3. O Salvador da Pátria: Teorema de Pitágoras',
      conteudo:
        'Sempre que a questão trouxer um triângulo retângulo (que tem um ângulo de 90°), use a fórmula:\n\na² = b² + c²\n\nOnde "a" é a Hipotenusa (o lado maior, oposto ao ângulo de 90°) e "b" e "c" são os catetos. Muito útil para descobrir alturas escondidas de figuras!',
    },
    {
      titulo: '4. Geometria Espacial: Fórmulas de Volume (3D)',
      conteudo:
        'Volume mede a capacidade de armazenamento de um sólido (quantos litros de água cabem dentro dele, por exemplo).\n\n- Bloco Retangular / Cubo (Caixas): Volume = Comprimento × Largura × Altura\n- Cilindro (Latas, Copos, Tanques): Volume = Área da base × Altura\nFórmula: V = π × Raio² × Altura',
    },
    {
      titulo: '💡 Pegadinhas Clássicas do Enem',
      conteudo:
        '1) Unidades de Medida: O Enem adora dar a base em metros e a altura em centímetros. Converta tudo para a mesma unidade antes de calcular!\n2) Conversão de Volume: Fique atento às transformações:\n- 1 m³ equivale a 1.000 litros.\n- 1 cm³ (ou 1 mL) equivale a 0,001 litro.',
    },
    {
      titulo: 'Resumo Prático',
      conteudo:
        '- Contorno/Cerca = Perímetro (soma).\n- Piso/Azulejo/Tinta = Área (multiplicação).\n- Capacidade/Água/Combustível = Volume (três dimensões).',
    },
  ],
},


  'Matemática|Estatística': {
  materia: 'Matemática',
  assunto: 'Estatística',
  introducao:
    'A estatística é o ramo da matemática que coleta, organiza e analisa dados numéricos. No Enem, ela é o tema mais cobrado de todos, aparecendo em formato de gráficos, tabelas e infográficos focados nas chamadas Medidas de Tendência Central.',
  secoes: [
    {
      titulo: '1. Média Aritmética (Simples vs. Ponderada)',
      conteudo:
        'A média representa um valor de equilíbrio de um conjunto de dados.\n\n- Média Simples: Some todos os valores e divida o resultado pela quantidade total de elementos.\nExemplo: Notas 6, 8 e 10.\nMédia = (6 + 8 + 10) ÷ 3 = 24 ÷ 3 = 8.\n\n- Média Ponderada: Ocorre quando os elementos possuem pesos diferentes (importâncias diferentes). Multiplique cada valor pelo seu peso, some os resultados e divida pela SOMA DOS PESOS.\nExemplo: Nota 6 (peso 2) e Nota 9 (peso 3):\nMédia = (6·2 + 9·3) ÷ (2 + 3)\nMédia = (12 + 27) ÷ 5 = 39 ÷ 5 = 7,8.',
    },
    {
      titulo: '2. Mediana (O Centro Oculto)',
      conteudo:
        'A mediana é exatamente o valor que fica no meio do conjunto. Mas atenção: para achá-la, você PRECISA primeiro colocar os dados em ordem crescente ou decrescente (fazer o Rol).\n\n- Se a quantidade de números for ÍMPAR:\nA mediana é o termo central exato.\nExemplo: [3, 5, 8, 12, 20] (Já ordenados). Mediana = 8.\n\n- Se a quantidade de números for PAR:\nNão existe um termo central único. Você deve pegar os DOIS termos do meio e fazer a média simples entre eles.\nExemplo: [1, 2, 4, 7, 9, 10] (Já ordenados). Os centrais são 4 e 7.\nMediana = (4 + 7) ÷ 2 = 11 ÷ 2 = 5,5.',
    },
    {
      titulo: '3. Moda (O que está em alta)',
      conteudo:
        'Moda é o valor que mais se repete dentro do conjunto de dados (o mais frequente).\n\nExemplo: Em uma sala, as idades dos alunos são [16, 17, 17, 17, 18, 18, 19].\nA idade que mais aparece é 17. Portanto, a Moda = 17.\n\nFique atento:\n- Se nenhum valor se repetir, o conjunto é Amodal.\n- Se houver dois valores empatados no topo, ele é Bimodal.',
    },
    {
      titulo: '💡 Pegadinha Fatal do Enem',
      conteudo:
        'O erro mais clássico do Enem é calcular a Mediana direto com os números bagunçados que o enunciado dá na tabela. Se você esquecer de colocar os valores em ordem crescente antes de pegar o termo do meio, você vai errar a questão e cair no distrator!',
    },
    {
      titulo: 'Resumo Prático',
      conteudo:
        '- Média = Somar tudo e dividir pelo total.\n- Mediana = Ordenar em ordem crescente e pegar o valor do meio.\n- Moda = Descobrir o número que mais se repete.',
    },
  ],
},


  'Matemática|Probabilidade': {
  materia: 'Matemática',
  assunto: 'Probabilidade',
  introducao:
    'A probabilidade é o ramo da matemática que estuda as chances de um determinado evento acontecer. No Enem, ela aparece associada a jogos de azar (dados, cartas, moedas), sorteios de vagas, exames médicos e genética.',
  secoes: [
    {
      titulo: '1. O que são "Quero" e "Tenho"? (Conceito Básico)',
      conteudo:
        'Para facilitar a fórmula na sua mente, pense na probabilidade como uma fração simples:\n\nProbabilidade = O que eu QUERO ÷ O que eu TENHO\n\n- Espaço Amostral (O que eu tenho): É o total de resultados possíveis.\n- Evento (O que eu quero): É o resultado específico que você está analisando.',
    },
    {
      titulo: '2. A Fórmula e Exemplo com Dado',
      conteudo:
        'Fórmula Geral:\nP = Casos Favoráveis (Quero) ÷ Casos Possíveis (Tenho)\n\nExemplo Prático: Ao lançar um dado comum de 6 faces, qual a probabilidade de sair um número par?\n\n- Casos Possíveis (Tenho): 6 opções (1, 2, 3, 4, 5, 6).\n- Casos Favoráveis (Quero): 3 opções pares (2, 4, 6).\n\nCálculo:\nP = 3 ÷ 6 = 1/2 (simplificando a fração) = 0,5.\nPara transformar em porcentagem, multiplique por 100:\n0,5 × 100 = 50%.\n\nResposta: A chance é de 50%.',
    },
    {
      titulo: '3. Eventos Sucessivos (A Regra do "E")',
      conteudo:
        'Quando a questão do Enem pede a probabilidade de uma coisa acontecer E outra coisa acontecer logo em seguida, você deve MULTIPLICAR as probabilidades de cada evento.\n\nExemplo Real: Qual a chance de jogar uma moeda duas vezes e sair Cara no primeiro lançamento E Cara no segundo?\n\n- Chance de sair Cara no 1º lançamento: 1/2\n- Chance de sair Cara no 2º lançamento: 1/2\n\nMultiplicando as duas: (1/2) × (1/2) = 1/4.\nTransformando em porcentagem: 1 ÷ 4 = 0,25 → 25%.',
    },
    {
      titulo: '4. O Evento Complementar (Olhar pelo avesso)',
      conteudo:
        'Às vezes, calcular a chance de algo NÃO acontecer é muito mais fácil. A soma de todas as probabilidades de um espaço amostral é sempre 100% (ou 1).\n\nFórmula:\nChance de acontecer = 100% − Chance de NÃO acontecer\n\nSe a probabilidade de chover amanhã é de 30%, a probabilidade de NÃO chover é de 70% (100% − 30%).',
    },
    {
      titulo: '💡 Dica para a Prova do Enem',
      conteudo:
        'Muita atenção ao ler o enunciado! O Enem adora mudar o "total de casos possíveis" no meio do texto (Probabilidade Condicionada). Se ele disser: "Sabendo que o número sorteado é maior que 3...", o seu espaço amostral diminui de 6 opções para apenas 3 opções (4, 5 e 6). Ajuste sempre o denominador antes de dividir!',
    },
    {
      titulo: 'Resumo Prático',
      conteudo:
        '- Probabilidade é sempre um número entre 0 (impossível) e 1 (certeza absoluta).\n- Resposta na prova pode aparecer como fração (1/2), decimal (0,5) ou porcentagem (50%).\n- Eventos seguidos com a palavra "E" = Multiplique as frações.',
    },
  ],
},

   
'Português|Interpretação de texto': {
  materia: 'Português',
  assunto: 'Interpretação de texto',
  introducao:
    'Interpretar um texto no Enem vai além de apenas ler: é compreender o objetivo do autor, identificar a ideia central e decifrar as entrelinhas. Mais de 60% da prova de Linguagens depende exclusivamente desta habilidade.',
  secoes: [
    {
      titulo: '1. Tema vs. Ideia Principal',
      conteudo:
        '- Tema: É o assunto geral tratado no texto (Ex: Tecnologia na infância).\n- Ideia Principal: É o posicionamento específico ou a tese que o autor defende sobre aquele tema (Ex: O uso excessivo de telas prejudica o desenvolvimento cognitivo infantil).\n\nDica: Geralmente, a ideia principal está no primeiro ou no último parágrafo do texto.',
    },
    {
      titulo: '2. Informações Explícitas e Implícitas',
      conteudo:
        '- Explícitas (Compreensão): Estão escritas claramente na superfície do texto. Basta ler com atenção para localizar.\n- Implícitas (Interpretação): Não estão escritas diretamente, mas o autor deixa pistas (pressupostos e subentendidos). Exemplo: "Finalmente o governo tomou uma atitude". A palavra "finalmente" deixa implícito que o governo demorou para agir.',
    },
    {
      titulo: '3. Linguagem Não Verbal e Mista',
      conteudo:
        'O Enem adora colocar tirinhas, charges, infográficos e propagandas publicitárias. Nesses textos, os elementos visuais (expressões faciais, cores, gestos) têm o mesmo peso ou até mais importância que o texto escrito. Nunca ignore a imagem!',
    },
    {
      titulo: '💡 Estratégia de Resolução para o Enem',
      conteudo:
        'Siga sempre esta ordem para ganhar tempo:\n1º) Leia o ENUNCIADO da questão antes de ler o texto. Assim, você já vai para a leitura sabendo exatamente o que precisa procurar.\n2º) Olhe a FONTE do texto (rodapé). Saber se o texto veio de um jornal, de um site de humor ou de um artigo científico ajuda a prever a intenção do autor.\n3º) Cuidado com a Extrapolação: Não escolha alternativas que trazem ideias que fazem sentido na vida real, mas que NÃO foram ditas no texto.',
    },
    {
      titulo: 'Resumo Prático',
      conteudo:
        '- Foque no comando do enunciado.\n- Diferencie o fato narrado da opinião do autor.\n- Elimine alternativas que fogem do texto.',
    },
  ],
},

'Português|Gramática': {
  materia: 'Português',
  assunto: 'Gramática',
  introducao:
    'Diferente de vestibulares tradicionais, o Enem não cobra regras gramaticais decoradas (como classificar uma oração subordinada). A gramática no Enem é cobrada de forma reflexiva: como o uso de um pronome, uma conjunção ou uma vírgula altera o sentido do texto.',
  secoes: [
    {
      titulo: '1. Conectivos (Conjunções e Preposições)',
      conteudo:
        'Este é o ponto gramatical mais importante para a sua prova e para a Redação! Os conectivos estabelecem o sentido entre as frases:\n- Mas, Porém, Contudo: Indicam oposição/contraste.\n- Portanto, Logo, Por isso: Indicam conclusão.\n- Porque, Visto que: Indicam explicação ou causa.\n- Embora, Mesmo que: Indicam concessão (ideia de quebra de expectativa).',
    },
    {
      titulo: '2. Classes de Palavras com Valor Discursivo',
      conteudo:
        'Foque em como as palavras mudam de papel conforme o contexto:\n- Adjetivos: Não servem só para caracterizar, eles revelam a opinião (subjetividade) do autor sobre um assunto.\n- Verbos no Imperativo: ("Faça", "Ajude", "Vote") São a marca registrada de textos publicitários e campanhas comunitárias que tentam convencer o leitor.',
    },
    {
      titulo: '3. Pontuação e os Efeitos de Sentido',
      conteudo:
        'A vírgula e as aspas alteram o foco do texto:\n- Aspas: Podem indicar a fala de uma autoridade (citação), destacar um neologismo/gíria ou sinalizar uma ironia.\n- Reticências (...): Podem indicar hesitação, continuidade ou deixar um sentido flutuando para o leitor interpretar.',
    },
    {
      titulo: '💡 Como a Gramática Cai no Enem',
      conteudo:
        'As questões costumam perguntar coisas como: "O termo destacado cumpre a função de..." ou "A substituição da conjunção X pela Y altera o sentido do texto porque...". Domine o sentido dos conectivos para garantir esses pontos!',
    },
    {
      titulo: 'Resumo Prático',
      conteudo:
        '- Conectivos dão coesão e mudam o sentido do texto.\n- Imperativo = Convencer.\n- Aspas = Ironia ou Fala de terceiros.',
    },
  ],
},

'Português|Gêneros textuais': {
  materia: 'Português',
  assunto: 'Gêneros textuais',
  introducao:
    'Gêneros textuais são as formas reais e sociais de textos que usamos no dia a dia. O Enem cobra muito a identificação do gênero pela sua função social: para que esse texto serve no mundo?',
  secoes: [
    {
      titulo: '1. Gêneros Jornalísticos',
      conteudo:
        '- Notícia: Relato direto, neutro e objetivo de um fato recente (Usa linguagem formal e terceira pessoa).\n- Artigo de Opinião: Texto assinado onde o autor expõe e defende claramente seu ponto de vista sobre um tema polêmico (Altamente argumentativo).',
    },
    {
      titulo: '2. Gêneros Publicitários e Propagandas',
      conteudo:
        'São textos que misturam linguagem verbal e visual. Seu grande objetivo é engajar o leitor.\n- Anúncio Comercial: Quer vender um produto ou serviço.\n- Campanha Institucional/Social: Quer mudar um comportamento do público (Ex: Campanhas de vacinação, conscientização no trânsito ou combate ao preconceito).',
    },
    {
      titulo: '3. Gêneros Digitais e Literários',
      conteudo:
        '- Digitais: Posts de redes sociais, e-mails, blogs. Caracterizam-se pela rapidez e mistura de linguagens (emojis, links).\n- Literários: Poemas, contos e crônicas. Focam na estética, na emoção e usam muita linguagem figurada (metáforas).',
    },
    {
      titulo: '💡 Segredo do Enem para Gêneros',
      conteudo:
        'A pergunta do Enem quase sempre relaciona a ESTRUTURA do texto com o seu OBJETIVO. Exemplo: Uma questão com uma receita médica ou manual de instruções vai exigir que você reconheça que a função dali é instruir ou guiar o comportamento do usuário.',
    },
    {
      titulo: 'Resumo Prático',
      conteudo:
        '- Campanha Social = Conscientizar o público.\n- Artigo de Opinião = Defender uma tese.\n- Poema = Despertar emoções e focar na estética.',
    },
  ],
},

'Português|Funções da linguagem': {
  materia: 'Português',
  assunto: 'Funções da linguagem',
  introducao:
    'As funções da linguagem indicam a intenção principal do emissor ao construir uma mensagem. Cada função foca em um dos elementos da comunicação (emissor, receptor, canal, código, mensagem ou contexto).',
  secoes: [
    {
      titulo: '1. Função Referencial (ou Denotativa) e Emotiva',
      conteudo:
        '- Referencial (Foco no Contexto): Busca informar de forma clara, direta e objetiva. Não há espaço para opiniões pessoais. Presente em notícias, livros didáticos e artigos científicos.\n- Emotiva ou Expressiva (Foco no Emissor): Focada nos sentimentos, emoções e opiniões do próprio autor. Usa verbos e pronomes em 1º pessoa ("eu") e pontos de exclamação.',
    },
    {
      titulo: '2. Função Conativa (ou Apelativa) e Fática',
      conteudo:
        '- Conativa (Foco no Receptor): O objetivo é influenciar, convencer ou ordenar o leitor. Abusa de verbos no imperativo e vocativos ("Você", "Ei"). Comum em propagandas e discursos políticos.\n- Fática (Foco no Canal): Serve para testar, iniciar, prolongar ou interromper o canal de comunicação. Exemplos: "Alô?", "Tudo bem?", "Entendeu?", "Né?".',
    },
    {
      titulo: '3. Função Metalinguística e Poética',
      conteudo:
        '- Metalinguística (Foco no Código): É a linguagem explicando a própria linguagem. Exemplos: Um poema que fala sobre o ato de escrever, um filme que mostra os bastidores do cinema ou um verbete de dicionário.\n- Poética (Foco na Mensagem): Preocupa-se com a estética do texto, o ritmo, a sonoridade e a escolha das palavras. Comum em poesias, letras de música e slogans.',
    },
    {
      titulo: '💡 Como Identificar na Prova',
      conteudo:
        'Embora um texto possa ter várias funções misturadas, o Enem vai te perguntar qual delas é a PREDOMINANTE. Olhe para onde o texto aponta mais: se aponta para a informação pura (Referencial), se quer te convencer a algo (Conativa) ou se está brincando com o formato das palavras (Poética).',
    },
    {
      titulo: 'Resumo Prático',
      conteudo:
        '- Referencial = Informação objetiva.\n- Conativa = Convencer o leitor.\n- Metalinguística = Código explica o código.\n- Emotiva = Sentimento do autor.',
    },
  ],
},

'Português|Variação linguística': {
  materia: 'Português',
  assunto: 'Variação linguística',
  introducao:
    'Nenhum falante usa a língua da mesma forma o tempo todo. A variação linguística prova que a língua é viva e se adapta ao contexto. O Enem ama esse tema e adota uma postura totalmente contra o preconceito linguístico.',
  secoes: [
    {
      titulo: '1. Os 4 Tipos Principais de Variação',
      conteudo:
        '1) Diatópica (Regional): Diferenças de vocabulário ou sotaque dependendo da região geográfica (Ex: Mandioca, Aipim e Macaxeira).\n2) Diastrática (Social): Diferenças entre grupos sociais, idades ou profissões (As gírias dos jovens vs. o internetês vs. o "juridiquês" dos advogados).\n3) Diacrônica (Histórica): Mudanças na língua através do tempo (Como a palavra "Vossa Mercê" evoluiu para "Vosmecê", "Você" e hoje "Cê").\n4) Diafásica (Situacional): A capacidade do falante de ajustar sua linguagem ao ambiente (Linguagem Formal na entrevista de emprego vs. Informal no bar com amigos).',
    },
    {
      titulo: '2. Norma Padrão vs. Variedades Linguísticas',
      conteudo:
        'A norma-padrão (gramática culta) é apenas uma das muitas variedades da língua. Ela tem sua importância social e deve ser usada em contextos formais (como na Redação do Enem), mas ela não é intrinsecamente superior às variedades informais. O importante é saber alternar entre elas conforme a necessidade.',
    },
    {
      titulo: '3. Combate ao Preconceito Linguístico',
      conteudo:
        'O preconceito linguístico é a discriminação baseada na forma de falar de alguém, geralmente ligada a marcas regionais ou classes sociais mais baixas. O Enem cobra a visão científica da Linguística: não existe linguagem "certa" ou "errada", existe linguagem ADEQUADA ou INADEQUADA à situação de comunicação.',
    },
    {
      titulo: '💡 Fique Esperto na Prova',
      conteudo:
        'Toda questão do Enem sobre variação linguística tem como objetivo valorizar a identidade cultural de um povo ou grupo. As alternativas corretas nunca vão validar preconceitos ou dizer que o dialeto caipira ou periférico é um "erro crasso". Busque opções que falem sobre "riqueza cultural", "patrimônio linguístico" ou "adequação ao contexto".',
    },
    {
      titulo: 'Resumo Prático',
      conteudo:
        '- Regional = Localização.\n- Histórica = Tempo.\n- Social = Grupo/Idade.\n- Não existe erro, existe inadequação ao contexto.',
    },
  ],
},

  'Literatura|Escolas literárias': {
  materia: 'Literatura',
  assunto: 'Escolas literárias',
  introducao:
    'As escolas literárias são movimentos artísticos que agrupam escritores de uma mesma época que compartilham visões de mundo, temas e estilos semelhantes. No Enem, elas são cobradas associadas ao contexto histórico: a literatura reflete as tensões e os pensamentos de seu tempo.',
  secoes: [
    {
      titulo: '1. O que o Enem Realmente Cobra?',
      conteudo:
        'A prova do Enem raramente vai te pedir para decorar uma data ou um ano específico de uma escola literária. O exame quer saber se você entende COMO o momento social influenciou o escritor. Por exemplo: por que os poetas do Arcadismo fugiam para a natureza enquanto o Brasil colônia vivia a agitação da Inconfidência Mineira?',
    },
    {
      titulo: '2. Linha do Tempo e Palavras-Chave',
      conteudo:
        'Memorize as características principais que aparecem nos distratores da prova:\n\n- Barroco: Dualidade, conflito entre corpo e alma, pecado e perdão, uso de antíteses e paradoxos.\n- Arcadismo: Bucolismo (vida no campo), fuga da cidade, simplicidade, exaltação da natureza (Locus amoenus).\n- Romantismo: Sentimentalismo exagerado, idealização da mulher e da pátria, egocentrismo, nacionalismo e indianismo.\n- Realismo/Naturalismo: Crítica social direta, análise psicológica, ironia, o ser humano movido pelos instintos (Zoomorfização).',
    },
    {
      titulo: '3. Parnasianismo e Simbolismo',
      conteudo:
        '- Parnasianismo: Arte pela arte. Buscava a perfeição das rimas, vocabulário difícil e descrições de objetos (como vasos). Totalmente oposto ao Romantismo.\n- Simbolismo: Focado no mistério, no inconsciente, na espiritualidade e na música das palavras (uso de aliterações).',
    },
    {
      titulo: '💡 Dica de Ouro para Análise de Poemas',
      conteudo:
        'Ao ler um poema na prova de Linguagens, identifique o "eu lírico" (a voz que fala no poema). Se ele for focado em si mesmo e no sofrimento amoroso, pense em Romantismo. Se ele usar ironia para criticar a hipocrisia do casamento ou da burguesia, pense em Realismo.',
    },
    {
      titulo: 'Resumo Prático',
      conteudo:
        '- Barroco = Dúvida e contraste.\n- Arcadismo = Natureza e campo.\n- Romantismo = Emoção e pátria.\n- Realismo = Razão e crítica social.',
    },
  ],
},
'Literatura|Romantismo': {
  materia: 'Literatura',
  assunto: 'Romantismo',
  introducao:
    'O Romantismo foi um movimento artístico burguês que dominou a primeira metade do século XIX. Embalado pela chegada da Família Real (1808) e pela Independência do Brasil (1822), o movimento tinha a missão de criar uma identidade cultural puramente brasileira, longe dos moldes de Portugal.',
  secoes: [
    {
      titulo: '1. O Sentimento acima da Razão',
      conteudo:
        'A principal marca do Romantismo é o egocentrismo e o subjetivismo: o mundo é filtrado pelas emoções do autor. Se o autor está triste, a natureza ao seu redor chove e escurece. Tudo é idealizado: o amor é perfeito, a pátria não tem defeitos e a mulher amada é vista como um anjo intocável.',
    },
    {
      titulo: '2. As 3 Gerações da Poesia no Brasil',
      conteudo:
        'A poesia romântica brasileira mudou drasticamente ao longo dos anos e é dividida em três fases essenciais para o Enem:\n\n1ª Geração (Nacionalista / Indianista): Foco na criação dos símbolos nacionais. O Índio é escolhido como o cavaleiro herói brasileiro. (Principal autor: Gonçalves Dias com a "Canção do Exílio").\n\n2ª Geração (Ultrarromântica / Mal do Século): Foco no pessimismo, na depressão, no sofrimento amoroso e na obsessão pela morte. Influenciada pelo poeta inglês Lord Byron. (Principal autor: Álvares de Azevedo).\n\n3ª Geração (Condoreira / Social): Fase de transição. Foco na liberdade e na luta social, atacando diretamente a escravidão no Brasil. (Principal autor: Castro Alves, o "Poeta dos Escravos").',
    },
    {
      titulo: '3. A Prosa Romântica',
      conteudo:
        'Os romances funcionavam como as "novelas de época" da burguesia fluminense. José de Alencar foi o maior nome, escrevendo romances urbanos (focados nos costumes do Rio de Janeiro, como "Senhora"), regionalistas (focados no interior do país, como "O Gaúcho") e indianistas (como "O Guarani").',
    },
    {
      titulo: '💡 Como o Romantismo cai no Enem',
      conteudo:
        'O Enem costuma cobrar a 1ª geração associando-a à construção do nacionalismo, ou a 3ª geração conectada ao contexto abolicionista. Fique muito atento aos textos da 2ª geração: se o poema exalar melancolia, saudade da infância e desejo de fuga da realidade através da morte, a resposta estará ligada ao Ultrarromantismo.',
    },
    {
      titulo: 'Resumo Prático',
      conteudo:
        '- 1ª Fase = Índio herói e exaltação da pátria.\n- 2ª Fase = Sofrimento, amor impossível e morte.\n- 3ª Fase = Abolicionismo e crítica social.\n- Prosa = Idealização dos personagens e finais felizes.',
    },
  ],
},

'Literatura|Realismo': {
  materia: 'Literatura',
  assunto: 'Realismo',
  introducao:
    'O Realismo surge na segunda metade do século XIX como uma resposta direta ao Romantismo. Influenciado pelas teorias científicas da época (como o Positivismo e o Darwinismo) e pela Revolução Industrial, o movimento joga fora a idealização e busca retratar a sociedade exatamente como ela é: falha, cruel e interesseira.',
  secoes: [
    {
      titulo: '1. O Casamento por Interesse e a Hipocrisia',
      conteudo:
        'Se no Romantismo o amor superava tudo, no Realismo o amor é movido por status social e dinheiro. Os escritores realistas usam lentes cirúrgicas para analisar a mente humana (Análise Psicológica) e expor as podridões da burguesia e da Igreja. O adultério, as aparências e o egoísmo são os temas centrais.',
    },
    {
      titulo: '2. Machado de Assis: O Mestre Supremo',
      conteudo:
        'Machado de Assis inaugurou o Realismo no Brasil em 1881 com "Memórias Póstumas de Brás Cubas". Suas principais características que despencam no Enem são:\n- Ironia Fina: Rir do comportamento hipócrita dos personagens.\n- Conversa com o Leitor: O narrador para a história para dar broncas ou conselhos a quem está lendo.\n- Pessimismo: A crença de que o ser humano é movido por interesses próprios.',
    },
    {
      titulo: '3. Realismo vs. Naturalismo',
      conteudo:
        'Eles aconteceram ao mesmo tempo, mas têm focos diferentes:\n- Realismo: Foca na mente, na psicologia e na burguesia da cidade. (Ex: Machado de Assis).\n- Naturalismo: Foca no corpo, nos instintos animais e nas classes marginalizadas. O ser humano é visto como um bicho moldado pelo ambiente (Determinismo). O grande cenário é o cortiço. (Principal obra: "O Cortiço", de Aluísio Azevedo).',
    },
    {
      titulo: '💡 Dica de Ouro para a Prova',
      conteudo:
        'Quando o Enem colocar um texto de Machado de Assis, a resposta correta quase sempre vai girar em torno de termos como: "desmistificação do amor romântico", "ironia como ferramenta de crítica social", "análise psicológica dos personagens" ou "crítica às convenções burguesas". Guarde essas expressões!',
    },
    {
      titulo: 'Resumo Prático',
      conteudo:
        '- Retrato fiel da realidade, sem filtros ou idealizações.\n- Machado de Assis = Ironia e profundidade psicológica.\n- Naturalismo = Instinto humano, determinismo científico e "O Cortiço".',
    },
  ],
},

'Literatura|Modernismo': {
  materia: 'Literatura',
  assunto: 'Modernismo',
  introducao:
    'O Modernismo é, de longe, a escola literária mais cobrada no Enem. Ele foi um movimento de ruptura que revolucionou a arte brasileira, dando liberdade aos escritores para abandonar as regras europeias antigas e criar uma literatura verdadeiramente com a cara do Brasil.',
  secoes: [
    {
      titulo: '1. A Semana de Arte Moderna (1922)',
      conteudo:
        'Realizada no Teatro Municipal de São Paulo, a Semana de 22 foi o marco inicial do movimento. Artistas como Mario de Andrade, Oswald de Andrade e Anita Malfatti chocaram o público tradicional. Eles propunham o fim do soneto rígido, o uso de versos livres (sem rima e sem tamanho fixo) e a valorização da fala do povo brasileiro.',
    },
    {
      titulo: '2. 1º Fase (Geração de 22): A Fase Heroica',
      conteudo:
        'Fase de destruição e deboche. O objetivo era quebrar as regras do Parnasianismo.\n- Características: Nacionalismo crítico (mostrar as qualidades e defeitos do Brasil), linguagem coloquial (gírias, fala do dia a dia), poemas-piada e ironia.\n- Conceito Importante: Antropofagia (degelar a cultura estrangeira, engoli-la e recriá-la de forma puramente brasileira).\n- Principais nomes: Manuel Bandeira, Oswald de Andrade e Mário de Andrade.',
    },
    {
      titulo: '3. 2º Fase (Geração de 30): A Fase Consolidada',
      conteudo:
        'Fase de construção e reflexão social. O Brasil passava pela Era Vargas e pela crise econômica mundial.\n- Na Poesia: Foco em crises existenciais, religião, política e cotidiano. (Principais: Carlos Drummond de Andrade, Vinicius de Moraes, Cecília Meireles).\n- No Romance (Romance de 30): Literatura regionalista que denunciava a miséria, a seca e o coronelismo no Nordeste. (Principais: Graciliano Ramos com "Vidas Secas", Jorge Amado e Rachel de Queiroz).',
    },
    {
      titulo: '4. 3º Fase (Geração de 45): A Fase Universal',
      conteudo:
        'Fase de maior rigor formal e experimentação da linguagem.\n- Características: Retorno a uma preocupação com a forma da escrita, misturada a uma profunda sondagem psicológica dos personagens e cenários universais.\n- Principais nomes: Clarice Lispector (foco no fluxo de consciência e epifanias) e João Guimarães Rosa (recriação do sertão de Minas Gerais através de neologismos).',
    },
    {
      titulo: '💡 Como o Modernismo Cai na Prova',
      conteudo:
        'O Enem costuma colocar textos da primeira fase e perguntar qual elemento de ruptura está presente (a resposta costuma ser "valorização do falar cotidiano" ou "liberdade formal"). Quando coloca textos da segunda fase (como Graciliano Ramos), a resposta gira em torno da "denúncia social" ou "da desumanização do homem pela seca".',
    },
    {
      titulo: 'Resumo Prático',
      conteudo:
        '- 1ª Fase (1922) = Ruptura, deboche, versos livres e antropofagia.\n- 2ª Fase (1930) = Crítica social, regionalismo do NE e Drummond.\n- 3ª Fase (1945) = Psicologia humana, Clarice Lispector e Guimarães Rosa.',
    },
  ],
},
 'Literatura|Interpretação literária': {
  materia: 'Literatura',
  assunto: 'Interpretação literária',
  introducao:
    'Interpretar um texto literário no Enem exige perceber que a literatura não usa a linguagem de forma comum, mas sim artística (conotativa). Para entender o sentido de um poema ou conto, você precisa decifrar as figuras de linguagem, o ponto de vista do narrador e a bagagem histórica da obra.',
  secoes: [
    {
      titulo: '1. Figuras de Linguagem Artísticas (As Campeãs do Enem)',
      conteudo:
        'Os poetas brincam com o significado das palavras. Memorize as quatro que mais caem:\n\n- Metáfora: Uma comparação implícita, sem usar a palavra "como" (Ex: "Amor é fogo que arde sem se ver").\n- Personificação (ou Prosopopeia): Atribuir sentimentos ou ações humanas a seres inanimados (Ex: "A lua chorava no céu").\n- Antítese: Uso de ideias opostas na mesma frase (Ex: "O dia e a noite se misturam na minha mente").\n- Metonímia: Substituir uma palavra por outra que tenha relação direta, como o autor pela obra (Ex: "Li Machado de Assis ontem" ou "Comi dois pratos de sopa").',
    },
    {
      titulo: '2. Quem Conta a História? (Foco Narrativo)',
      conteudo:
        'A perspectiva de quem narra muda totalmente a interpretação dos fatos. No Enem, os dois tipos principais são:\n\n- Narrador Personagem (1ª Pessoa): Participa da história. Sua visão é parcial, emocional e pode não ser 100% confiável, pois ele conta apenas o seu lado dos fatos (Ex: Bentinho em Dom Casmurro).\n- Narrador Observador / Onisciente (3ª Pessoa): Não participa da história. O observador apenas relata o que vê; já o onisciente conhece os pensamentos mais profundos e os sentimentos de todos os personagens.',
    },
    {
      titulo: '3. Denotação vs. Conotação',
      conteudo:
        'A literatura vive do sentido CONOTATIVO (figurado, poético, criativo), onde as palavras ganham novos significados dependendo do contexto emocional do texto. Já os jornais e manuais usam o sentido DENOTATIVO (literal, real, o dicionário "D" de denotação), focado na informação pura. O Enem adora cobrar se você sabe diferenciar essa intenção estética do autor.',
    },
    {
      titulo: '💡 Como a Interpretação Literária Cai no Enem',
      conteudo:
        'As questões costumam colocar um poema moderno ou uma crônica e perguntar: "O recurso expressivo utilizado pelo autor confere ao texto um caráter...". As alternativas corretas geralmente trazem termos como: "subjetividade marcante", "exploração da sonoridade das palavras", "ressignificação de termos cotidianos" ou "metáfora para expressar a angústia social".',
    },
    {
      titulo: 'Resumo Prático',
      conteudo:
        '- Texto Literário = Sentido conotativo (figurado) e foco na emoção/estética.\n- Narrador de 1ª pessoa = Visão subjetiva e parcial dos acontecimentos.\n- Fique atento às metáforas e personificações para entender a mensagem oculta do autor.',
    },
  ],
},

  
  'Língua Estrangeira|Interpretação de textos': {
  materia: 'Língua Estrangeira',
  assunto: 'Interpretação de textos',
  introducao:
    'A prova de Língua Estrangeira (Inglês ou Espanhol) no Enem possui 5 questões que avaliam exclusivamente a sua capacidade de leitura e interpretação de texto. Os enunciados e as alternativas estão sempre em português, e você não precisa traduzir a página inteira para acertar a resposta.',
  secoes: [
    {
      titulo: '1. Técnicas de Leitura Dinâmica (Skimming e Scanning)',
      conteudo:
        'Para ganhar tempo precioso na prova, use estas duas técnicas consagradas de leitura:\n\n- Skimming (Olhar Panorâmico): Consiste em passar os olhos rapidamente pelo texto para captar a ideia geral. Foque no título, subtítulo, imagens, primeira e última linha de cada parágrafo.\n- Scanning (Busca Alvo): É ler procurando uma informação específica (um número, um nome, uma data ou uma palavra-chave dita no enunciado). É como buscar um nome numa lista telefônica.',
    },
    {
      titulo: '2. Cognatos, Falsos Cognatos e Vocabulário',
      conteudo:
        'Aproveite a semelhança entre os idiomas, mas fique atento às armadilhas:\n\n- Cognatos Verdadeiros: Palavras parecidas com o português e que têm o mesmo significado (Ex: Inglês: "Future", "Different" / Espanhol: "Problema", "Especial").\n- Falsos Cognatos (Falsos Amigos): Palavras parecidas que enganam o leitor.\nNo Inglês: "Actually" (na verdade), "Push" (empurrar), "Pretend" (fingir), "Novel" (romance/livro).\nNo Espanhol: "Exquisito" (gostoso/saboroso), "Embarazada" (grávida), "Pastel" (bolo), "Polvo" (poeira).',
    },
    {
      titulo: '3. A Diversidade de Gêneros Textuais',
      conteudo:
        'O Enem não usa apenas textos jornalísticos na prova estrangeira. Prepare o usuário do seu app para encontrar:\n- Campanhas Sociais e Cartazes: Focam em conscientização, usando frases curtas e impacto visual.\n- Letras de Música e Poemas: Linguagem conotativa, cheia de metáforas e expressões de sentimentos.\n- Tiras de Quadrinhos: Linguagem mista, onde a expressão do personagem ajuda a traduzir o texto.',
    },
    {
      titulo: '💡 O Método de Ouro para Resolver no Enem',
      conteudo:
        'Siga sempre este roteiro infalível:\n1º) Leia o ENUNCIADO e as ALTERNATIVAS primeiro. Como estão em português, eles já vão te dar um resumo perfeito de qual é o assunto do texto e o que você precisa procurar.\n2º) Faça o Scanning no texto estrangeiro para achar o parágrafo ou frase que responde exatamente ao comando do enunciado.\n3º) Elimine opções que tragam traduções literais de palavras soltas que estão no texto apenas para confundir quem leu sem atenção.',
    },
    {
      titulo: 'Resumo Prático',
      conteudo:
        '- Não tente traduzir palavra por palavra.\n- Use o enunciado em português a seu favor.\n- Cuidado com falsos amigos (Ex: Push = Empurrar; Exquisito = Saboroso).',
    },
  ],
},


 'Língua Estrangeira|Vocabulário': {
  materia: 'Língua Estrangeira',
  assunto: 'Vocabulário',
  introducao:
    'Ter um bom vocabulário para o Enem significa conhecer as palavras mais frequentes que servem de base para a construção dos textos. A prova foca muito em conectivos (palavras de transição) e termos técnicos de assuntos atuais, como meio ambiente, tecnologia e direitos humanos.',
  secoes: [
    {
      titulo: '1. Os Conectores Lógicos (Os donos da frase)',
      conteudo:
        'Conhecer os conectivos ajuda a entender para onde o texto está indo. Veja os mais cobrados no Enem:\n\nNo Inglês:\n- "However", "But", "Although": Indicam oposição/contraste (porém, mas, embora).\n- "Therefore", "So", "Thus": Indicam conclusão (portanto, então, assim).\n- "Furthermore", "In addition": Indicam adição de ideias (além disso).\n\nNo Espanhol:\n- "Pero", "Sin embargo", "No obstante": Indicam oposição (mas, porém, no entanto).\n- "Mientras", "Luego": Indicam tempo e sequência (enquanto, logo).\n- "Además": Indica adição (além disso).',
    },
    {
      titulo: '2. Campos Semânticos que Despencam no Enem',
      conteudo:
        'O Enem repete muitos temas sociais e científicos. Estude os blocos de palavras por assunto:\n\n- Meio Ambiente (Environment / Medio Ambiente):\nInglês: "Global warming" (aquecimento global), "Pollution" (poluição), "Drought" (seca), "Waste" (lixo/desperdício).\nEspanhol: "Calentamiento global", "Contaminación", "Sequía", "Basura".\n\n- Tecnologia e Sociedade (Technology / Tecnología):\nInglês: "Device" (dispositivo/aparelho), "Network" (rede), "Behavior" (comportamento), "Issue" (problema/questão).\nEspanhol: "Dispositivo", "Red", "Comportamiento", "Asunto/Problema".',
    },
    {
      titulo: '3. A Técnica da Dedução Contextual',
      conteudo:
        'Nunca trave ao encontrar uma palavra totalmente desconhecida! Use a estrutura ao redor para deduzir o significado:\n1) Identifique a classe da palavra: É uma ação (verbo)? Uma característica (adjetivo)? Um nome (substantivo)?\n2) Olhe a carga emocional: O autor está usando essa palavra em um contexto positivo ou negativo?\n3) Procure por pistas: Palavras como "and" (e) ou "or" (ou) ligam ideias parecidas, enquanto "but" (mas) traz um oposto.',
    },
    {
      titulo: '💡 Dica de Ouro para a Prova',
      conteudo:
        'O Enem adora colocar termos em inglês ou espanhol destacados no enunciado e perguntar o significado deles baseado no texto. Quase sempre, a resposta correta não é a tradução literal e isolada da palavra, mas sim o sentido que ela ganhou dentro daquela história ou campanha publicitária.',
    },
    {
      titulo: 'Resumo Prático',
      conteudo:
        '- Domine os conectivos de oposição (However / Sin embargo).\n- Conheça os termos de tecnologia e meio ambiente.\n- Deduza palavras difíceis pela lógica e contexto do texto.',
    },
  ],
},


 'Língua Estrangeira|Gramática contextual': {
  materia: 'Língua Estrangeira',
  assunto: 'Gramática contextual',
  introducao:
    'A gramática contextual analisa como a estrutura de uma frase constrói o sentido real do texto. No Enem, você não precisa saber classificar uma oração, mas deve entender a quem um pronome está se referindo e se uma ação verbal já aconteceu, está acontecendo ou é apenas uma hipótese do autor.',
  secoes: [
    {
      titulo: '1. Referência Pronominal (Quem é quem?)',
      conteudo:
        'O Enem adora colocar questões perguntando a quem ou a que um pronome específico se refere no texto para avaliar sua coesão textual.\n\nNo Inglês:\n- "They/Them": Além de indicar o plural (eles/elas), é amplamente usado na linguagem moderna como pronome singular de gênero neutro quando não se quer ou não se sabe o gênero da pessoa.\n- "It": Refere-se a um objeto, animal ou uma ideia inteira dita na frase anterior.\n- "Whose": Indica posse (cujo/cuja).\n\nNo Espanhol:\n- Os pronomes de tratamento enganam muito: "Usted" indica formalidade (o senhor/a senhora), enquanto "Tú" é informal (você).\n- "Lo": É um artigo neutro muito cobrado, usado antes de adjetivos e advérbios para substantivá-los (Ex: "Lo mejor de la vida" = O melhor da vida). Ele NUNCA acompanha substantivos.',
    },
    {
      titulo: '2. Tempos Verbais e Linha do Tempo',
      conteudo:
        'Identificar o momento exato da ação ajuda a entender a intenção do autor:\n\nNo Inglês:\n- Present Perfect (Ex: "I have worked"): Indica uma ação que começou no passado e ainda continua ou tem reflexos no presente. O Enem adora usar isso para mostrar a continuidade de um problema social.\n- Modais ("Should", "Must", "Might"): Indicam a atitude do falante. "Should" é um conselho, "Must" é uma obrigação ou certeza, e "Might" é apenas uma possibilidade remota.\n\nNo Espanhol:\n- Pretérito Indefinido (Ex: "Ayer trabajé"): Passado totalmente concluído.\n- Futuro de Estilo Hipotético: Em espanhol, o futuro muitas vezes não indica algo que vai acontecer, mas sim uma dúvida ou suposição no presente (Ex: "¿Quién será aquele homem?" = Quem será aquele homem? / Quem deve ser aquele homem?).',
    },
    {
      titulo: '3. A Força dos Conectores (Revisão Dinâmica)',
      conteudo:
        'Conectores mudam o rumo da história. Uma única palavra pode anular tudo o que foi dito antes. Lembre-se sempre de olhar o sentido:\n- Causa/Explicação: "Because" (inglês) e "Porque / Ya que" (espanhol).\n- Consequência/Conclusão: "Therefore" (inglês) e "Por lo tanto" (espanhol).\n- Quebra de expectativa (Concessão): "Although / Even though" (inglês) e "Aunque" (espanhol). Traduzem-se como "embora" e introduzem uma ideia que não impede o fato principal de acontecer.',
    },
    {
      titulo: '💡 Como a Gramática Contextual Cai no Enem',
      conteudo:
        'As questões costumam focar no comando: "Ao usar a estrutura verbal destacada, o autor tem o objetivo de...". As respostas corretas geralmente envolvem termos interpretativos como: "retomar uma ideia anterior", "estabelecer uma relação de concessão", "indicar uma ação contínua que impacta a atualidade" ou "atribuir formalidade ao discurso".',
    },
    {
      titulo: 'Resumo Prático',
      conteudo:
        '- Identifique o referente dos pronomes para não perder o fio da história.\n- Verbos modais indicam intenção (conselho, ordem, dúvida).\n- O artigo neutro "Lo" em espanhol nunca acompanha substantivos diretos.',
    },
  ],
},


  'Língua Estrangeira|Inglês ou Espanhol': {
  materia: 'Língua Estrangeira',
  assunto: 'Inglês ou Espanhol',
  introducao:
    'No momento da inscrição do Enem, o candidato escolhe entre Inglês ou Espanhol para realizar a prova de Língua Estrangeira. Independentemente da sua escolha, o foco da banca é o mesmo: avaliar a sua capacidade de leitura, interpretação de texto e compreensão da função social daquela mensagem.',
  secoes: [
    {
      titulo: '1. Como Escolher a Melhor Língua?',
      conteudo:
        'Existe um mito de que a prova de Espanhol é mais fácil por ser parecida com o português. Cuidado! O Enem sabe disso e costuma colocar textos complexos e cheios de falsos cognatos (palavras que parecem uma coisa, mas significam outra) na prova de Espanhol.\n\nEscolha o idioma com o qual você tem mais familiaridade no dia a dia, seja através de músicas, filmes, jogos ou estudos anteriores. A segurança na leitura é o fator que garante as 5 questões.',
    },
    {
      titulo: '2. O Raio-X da Prova de Inglês',
      conteudo:
        'A prova de inglês costuma usar textos da internet, notícias de jornais como "The New York Times" ou "BBC", letras de músicas famosas e poemas modernos.\n\nFoque em dominar o vocabulário base e os conectores que mudam o rumo da história, como "however" (no entanto), "although" (embora), "therefore" (portanto) e "instead of" (em vez de). Eles revelam se o autor está concordando ou criticando uma situação.',
    },
    {
      titulo: '3. O Raio-X da Prova de Espanhol',
      conteudo:
        'A prova de espanhol traz muitos fragmentos de literatura hispano-americana, tirinhas da Mafalda (ou semelhantes) e notícias de jornais como "El País".\n\nO grande segredo aqui é não ler no "automático". Palavras como "todavía" (ainda), "sin embargo" (no entanto), "luego" (depois) e "aunque" (embora) aparecem direto no gabarito e exigem atenção redobrada para não confundir com termos parecidos do português.',
    },
    {
      titulo: '💡 A Estratégia de Resolução Perfeita',
      conteudo:
        'Não importa o idioma escolhido, use sempre esta estratégia no dia do exame:\n1º) Comece lendo o enunciado e as alternativas (que estão em português). Eles funcionam como um spoiler do texto.\n2º) Identifique o gênero textual (É uma música? Um anúncio? Uma notícia?).\n3º) Faça uma leitura rápida focando nos cognatos verdadeiros para pegar o contexto geral e eliminar as alternativas absurdas.',
    },
    {
      titulo: 'Resumo Prático',
      conteudo:
        '- Escolha o idioma por afinidade e não por achar que um é "mais fácil" que o outro.\n- Os enunciados em português são o seu maior aliado para traduzir o contexto da questão.\n- Domine os conectivos de oposição nos dois idiomas para garantir os pontos de interpretação.',
    },
  ],
},
  'Artes|Arte brasileira': {
  materia: 'Artes',
  assunto: 'Arte brasileira',
  introducao:
    'A arte brasileira é um reflexo direto da miscigenação e da construção histórica do país. No Enem, ela é cobrada sob a ótica da identidade nacional, valorizando as matrizes indígenas e africanas, a explosão do Modernismo de 1922 e as manifestações populares que resistem no cotidiano.',
  secoes: [
    {
      titulo: '1. O Modernismo e o Manifesto Antropofágico',
      conteudo:
        'A Semana de Arte Moderna de 1922 mudou os rumos da nossa arte. Liderados por nomes como Tarsila do Amaral e Anita Malfatti, os artistas criaram o conceito de Antropofagia: a ideia de "engolir" as técnicas e vanguardas europeias, digeri-las e cuspi-las em formato de arte puramente brasileira, focada no nosso povo, folclore, cores e fauna.',
    },
    {
      titulo: '2. Matrizes Africanas e Indígenas',
      conteudo:
        'O Enem adora cobrar a função social dessas produções:\n- Arte Indígena: Caracteriza-se por ser utilitária e ritualística. Os grafismos corporais e a plumagem servem como linguagem de identidade, status social e conexão espiritual, e não apenas adorno estético.\n- Arte Afro-brasileira: Manifesta-se fortemente na música, escultura e festas populares (como o Congado). Carrega elementos de resistência cultural contra o apagamento histórico e conexões religiosas.',
    },
    {
      titulo: '3. O Barroco no Brasil (Aleijadinho)',
      conteudo:
        'A primeira grande expressão artística nascida no Brasil ocorreu em Minas Gerais durante o ciclo do ouro. Antônio Francisco Lisboa, o Aleijadinho, usou a pedra-sabão e a madeira para criar esculturas dramáticas e expressivas, adaptando o Barroco europeu à realidade e à fisionomia do povo mineiro.',
    },
    {
      titulo: '💡 Como a Arte Brasileira Cai no Enem',
      conteudo:
        'As questões costumam colocar imagens de quadros (como "Abaporu" ou "Os Operários" de Tarsila) ou fotos de cerâmicas marajoaras e perguntar sobre a sua função social. As alternativas corretas costumam exaltar a "construção de uma identidade nacional legítima", a "revisão crítica do passado colonial" ou a "valorização estética do patrimônio material e imaterial".',
    },
    {
      titulo: 'Resumo Prático',
      conteudo:
        '- Modernismo = Romper com a Europa para criar uma estética brasileira.\n- Arte Indígena/Afro = Identidade, ritualística e resistência social.\n- Aleijadinho = O ápice do Barroco mineiro na escultura em pedra-sabão.',
    },
  ],
},

'Artes|Arte contemporânea': {
  materia: 'Artes',
  assunto: 'Arte contemporânea',
  introducao:
    'A arte contemporânea desenvolveu-se na segunda metade do século XX (pós-Segunda Guerra) e estende-se até hoje. Ela joga fora a necessidade de criar um objeto bonito ou realista e foca na IDEIA do artista. No Enem, ela aparece gerando estranhamento e reflexões sociais.',
  secoes: [
    {
      titulo: '1. O Conceito Acima do Objeto',
      conteudo:
        'Na arte contemporânea, o processo de criação e o conceito por trás da obra importam mais do que o resultado estético final. O artista pode usar materiais recicláveis, lixo, luzes ou projeções tecnológicas para criar sua mensagem. O grande objetivo é provocar o espectador e tirá-lo da zona de conforto.',
    },
    {
      titulo: '2. Novas Linguagens Artísticas',
      conteudo:
        'Fique de olho nas três formas que mais aparecem na prova:\n- Performance: O próprio corpo do artista é a obra de arte. Envolve ações ao vivo, muitas vezes chocantes ou repetitivas, misturando teatro e artes visuais.\n- Instalação: O artista organiza elementos em um espaço inteiro (uma sala, uma praça). O público não apenas olha, mas caminha por dentro da obra de arte.\n- Intervenção Urbana: Modificações temporárias feitas diretamente na cidade (como estátuas mascaradas ou grafites), criticando a rotina e o urbanismo.',
    },
    {
      titulo: '3. A Participação Ativa do Público',
      conteudo:
        'Diferente dos museus tradicionais onde você apenas contempla de longe, a arte contemporânea exige que o espectador participe. No Brasil, Lygia Clark e Hélio Oiticica foram pioneiros nisso. Oiticica criou os "Parangolés" (capas coloridas que as pessoas vestiam para dançar), provando que a arte só existia quando o público se movimentava.',
    },
    {
      titulo: '💡 Dica de Ouro para a Prova',
      conteudo:
        'Se a questão do Enem trouxer uma imagem confusa (como uma pilha de relógios, um homem parado olhando para a parede ou um objeto cotidiano quebrado), não procure "beleza". Pergunte-se: qual reflexão social essa cena provoca? O gabarito costuma falar sobre "efemeridade", "estranhamento estético", "ruptura com o suporte tradicional" ou "relação interativa com o espectador".',
    },
    {
      titulo: 'Resumo Prático',
      conteudo:
        '- Não busca beleza estética, busca reflexão ideológica.\n- Performance = O corpo do artista é o suporte da obra.\n- Instalação/Intervenção = O espaço é modificado e o público interage.',
    },
  ],
},

'Artes|Movimentos artísticos': {
  materia: 'Artes',
  assunto: 'Movimentos artísticos',
  introducao:
    'Os movimentos artísticos marcam as transições estéticas da humanidade. O Enem foca sutilmente na harmonia clássica do Renascimento e no contraste do Barroco, mas explode cobrando as Vanguardas Europeias do início do século XX, que serviram de combustível para o nosso Modernismo.',
  secoes: [
    {
      titulo: '1. Do Renascimento ao Barroco',
      conteudo:
        '- Renascimento (Razão e Equilíbrio): Valorizou a perspectiva geométrica, o corpo humano realista e a luz suave. Busca a perfeição clássica grecorromana.\n- Barroco (Emoção e Conflito): Abandona a calmaria renascentista para focar no drama. Usa a técnica do Chiaroscuro (fortes contrastes de luz e sombra) e linhas diagonais para dar sensação de movimento e angústia espiritual.',
    },
    {
      titulo: '2. As Vanguardas Europeias (Ruptura Total)',
      conteudo:
        'Surgiram no início do século XX e queriam destruir o conceito de arte acadêmica. Memorize os conceitos-chave de cada uma:\n\n- Cubismo: Destruição da perspectiva tradicional. O mundo é fragmentado e redesenhado em formas geométricas (Ex: Pablo Picasso).\n- Futurismo: Exaltação da tecnologia, das máquinas, da velocidade e da guerra. Usa linhas dinâmicas para simular aceleração.\n- Surrealismo: Focado no inconsciente, nos sonhos, na loucura e nas teorias de Freud. Retrata cenas absurdas e ilógicas (Ex: Salvador Dalí).\n- Dadaísmo: O deboche e a destruição total. Defendia o "nonsense" (sem sentido) e criou o conceito de *Ready-made* (pegar um objeto pronto, como um mictório, assiná-lo e colocá-lo no museu).',
    },
    {
      titulo: '3. Impressionismo (A Luz e a Tela)',
      conteudo:
        'Movimento do final do século XIX que quebrou as regras de pintura em estúdio. Os pintores iam para a rua pintar a luz do sol mudando ao longo do dia. Não há contornos nítidos; os desenhos são formados por pinceladas puras de tinta que se misturam nos olhos de quem observa (Ex: Claude Monet).',
    },
    {
      titulo: '💡 Fique Esperto no Enem',
      conteudo:
        'As vanguardas europeias aparecem muito associadas aos poemas modernistas de Oswald ou Mário de Andrade. O Enem adora perguntar como esses movimentos influenciaram a nossa literatura: a resposta gira em torno da "liberdade de criação", "rejeição aos modelos acadêmicos" ou "subversão da lógica tradicional".',
    },
    {
      titulo: 'Resumo Prático',
      conteudo:
        '- Cubismo = Geometria e múltiplos pontos de vista.\n- Futurismo = Máquina, velocidade e progresso industrial.\n- Surrealismo = Sonhos e inconsciente imaginativo.\n- Dadaísmo = Crítica radical e ironia absurda (*Ready-made*).',
    },
  ],
},
'Artes|Música e teatro': {
  materia: 'Artes',
  assunto: 'Música e teatro',
  introducao:
    'A música e o teatro são linguagens artísticas dinâmicas que utilizam o som, o corpo, o espaço e o tempo como formas de expressão. No Enem, essas manifestações são cobradas por meio de suas funções sociais: ferramentas de protesto político, preservação de memórias culturais e retrato da diversidade do povo brasileiro.',
  secoes: [
    {
      titulo: '1. A Música como Resistência Política (Tropicalismo e Ditadura)',
      conteudo:
        'A música brasileira tem um histórico profundo de engajamento social. Durante a Ditadura Militar nas décadas de 1960 e 1970, o movimento da Tropicália (liderado por Caetano Veloso, Gilberto Gil e Os Mutantes) uniu a guitarra elétrica do rock estrangeiro com ritmos tradicionais brasileiros (como o samba e o nordestino).\n\nO Enem cobra muito as "músicas de protesto" da época, que usavam metáforas e duplos sentidos nas letras para driblar a censura oficial e criticar a falta de liberdade política (Ex: Chico Buarque e Geraldo Vandré).',
    },
    {
      titulo: '2. Patrimônio Imaterial e Ritmos Populares',
      conteudo:
        'O exame valoriza imensamente a música popular que nasce das comunidades periféricas e regionais como patrimônio cultural imaterial. Fique atento a estes ritmos:\n- Samba de Roda e Maracatu: Fortes matrizes africanas, unindo percussão marcante e danças ritualísticas de resistência.\n- Choro e Bossa Nova: Fusões que mostram a sofisticação da instrumentalidade urbana brasileira.\n- Funk e Rap: Expressões contemporâneas das periferias que denunciam o racismo, a violência urbana e a desigualdade social.',
    },
    {
      titulo: '3. O Teatro e a Quebra da Quarta Parede (Teatro do Oprimido)',
      conteudo:
        'No teatro tradicional, os atores fingem que existe uma parede invisível separando o palco do público (a quarta parede). O teatro moderno e contemporâneo quebram essa barreira.\n\nO maior destaque para o Enem é o "Teatro do Oprimido", criado pelo brasileiro Augusto Boal. Nesse modelo, o público deixa de ser apenas espectador passivo e é convidado a subir no palco para atuar, propor soluções reais para os problemas sociais encenados (como machismo ou exploração trabalhista) e transformar a própria realidade.',
    },
    {
      titulo: '💡 Como Esse Tema Cai no Enem',
      conteudo:
        'As questões costumam trazer a letra de uma canção ou uma crônica sobre uma peça teatral e perguntar: "O fragmento poético/a proposta cênica evidencia uma relação com o contexto social marcada por...". O gabarito correto costuma envolver termos como: "engajamento político através da metáfora", "subversão das convenções cênicas tradicionais", "reivindicação de direitos de grupos marginalizados" ou "preservação de memórias identitárias".',
    },
    {
      titulo: 'Resumo Prático',
      conteudo:
        '- Música na Ditadura = Uso de metáforas para criticar o governo e driblar a censura.\n- Ritmos periféricos (Rap/Funk) = Denúncia da desigualdade e afirmação de identidade.\n- Teatro do Oprimido (Augusto Boal) = Participação ativa do público para resolver conflitos reais.',
    },
  ],
},
  'Educação Física|Esporte e sociedade': {
  materia: 'Educação Física',
  assunto: 'Esporte e sociedade',
  introducao:
    'O esporte é um fenômeno social amplo que vai muito além das quatro linhas de uma quadra. No Enem, ele é cobrado sob a ótica da sociologia e da economia: como o esporte pode ser uma ferramenta de ascensão social, inclusão ou, por outro lado, um reflexo de desigualdades e interesses comerciais da mídia.',
  secoes: [
    {
      titulo: '1. Inclusão Social e Paradesporto',
      conteudo:
        'O esporte tem o poder de integrar minorias e grupos marginalizados. O Enem adora cobrar o Paradesporto (esportes adaptados para Pessoas com Deficiência - PCD). As questões costumam destacar como as Olimpíadas e Paralimpíadas mudam a percepção da sociedade sobre os limites do corpo humano e promovem a acessibilidade urbana e social.',
    },
    {
      titulo: '2. Esporte-Performance vs. Esporte-Lazer',
      conteudo:
        'A prova exige que você diferencie os objetivos da prática esportiva:\n- Esporte de Rendimento (Performance): Focado no alto desempenho, recordes, competição extrema, comercialização de atletas e patrocínios milionários. Muitas vezes leva o corpo ao limite saudável.\n- Esporte de Participação (Lazer/Saúde): Focado na cooperação, bem-estar, integração entre amigos e diversão. Não busca atletas perfeitos, mas sim a participação de todos.',
    },
    {
      titulo: '3. A Espetacularização do Esporte',
      conteudo:
        'A mídia transformou o esporte em um produto de consumo de massa (espetáculo). O Enem critica essa comercialização extrema, onde os horários dos jogos, as regras das modalidades e até a vida dos atletas são moldados para gerar audiência na televisão e vender produtos de marcas patrocinadoras.',
    },
    {
      titulo: '💡 Como Esse Tema Cai no Enem',
      conteudo:
        'As questões costumam trazer textos sobre projetos sociais que usam o futebol ou o surf na periferia para afastar jovens da violência. A resposta correta quase sempre vai girar em torno de termos como: "democratização do acesso ao lazer", "emancipação cidadã através da prática corporal" ou "mitigação de impactos da vulnerabilidade social".',
    },
    {
      titulo: 'Resumo Prático',
      conteudo:
        '- Paradesporto = Ferramenta de visibilidade, dignidade e inclusão de PCDs.\n- Esporte de Rendimento = Foco comercial e técnico.\n- Esporte de Lazer = Foco social e de saúde coletiva.',
    },
  ],
},

'Educação Física|Corpo e saúde': {
  materia: 'Educação Física',
  assunto: 'Corpo e saúde',
  introducao:
    'A saúde na prova de Educação Física do Enem é tratada sob uma perspectiva coletiva e de qualidade de vida. A banca ataca fortemente os "padrões de beleza inalcançáveis" criados pelo cinema e redes sociais, além de combater o uso de anabolizantes e o culto exagerado ao corpo perfeito.',
  secoes: [
    {
      titulo: '1. O Mito do Corpo Perfeito e a Mídia',
      conteudo:
        'A mídia vende a ideia de que existe um padrão único de corpo saudável (magro, musculoso, jovem). O Enem critica essa imposição, mostrando que ela gera distúrbios psicológicos e alimentares (como anorexia, bulimia e vigorexia). O app deve ensinar ao estudante que saúde não tem um formato de corpo fixo e depende do bem-estar mental e social.',
    },
    {
      titulo: '2. Exercício Físico vs. Atividade Física',
      conteudo:
        'Uma distinção conceitual que costuma aparecer em provas:\n- Atividade Física: Qualquer movimento planejado ou não que gaste energia (Ex: Varrer a casa, caminhar até o ponto de ônibus, subir escadas).\n- Exercício Físico: Uma atividade física planejada, repetitiva e estruturada, que tem o objetivo de melhorar o condicionamento físico ou a saúde (Ex: Musculação, natação, corrida programada).',
    },
    {
      titulo: '3. Saúde como Direito Social',
      conteudo:
        'Ter hábitos saudáveis não depende apenas da força de vontade do indivíduo. O Enem cobra a infraestrutura pública: para uma população se exercitar, o governo precisa garantir ciclovias, parques iluminados, segurança e saneamento básico nas periferias. Sem isso, a prática de esportes vira um privilégio das classes mais ricas.',
    },
    {
      titulo: '💡 Dica de Ouro para a Prova',
      conteudo:
        'Sempre que a questão falar sobre academias, dietas milagrosas ou busca pelo corpo sarado, desconfie das alternativas superficiais. Procure por opções que critiquem a "mercantilização do corpo", que defendam a "aceitação da diversidade biológica" ou que denunciem a "patologização de corpos fora do padrão de beleza vigente".',
    },
    {
      titulo: 'Resumo Prático',
      conteudo:
        '- Saúde coletiva = Depende de políticas públicas e espaços urbanos seguros.\n- Padrões de beleza = São construções sociais da mídia que geram exclusão e distúrbios.\n- Exercício Físico = Planejado e estruturado; Atividade Física = Movimento cotidiano.',
    },
  ],
},

'Educação Física|Práticas corporais': {
  materia: 'Educação Física',
  assunto: 'Práticas corporais',
  introducao:
    'As práticas corporais são manifestações que envolvem o movimento e a expressão humana de forma livre. O Enem foca nas atividades alternativas e de aventura, que mostram como o ser humano pode usar o corpo para interagir de forma harmoniosa com a natureza ou com a arquitetura das cidades.',
  secoes: [
    {
      titulo: '1. Esportes de Aventura e Natureza',
      conteudo:
        'Práticas como o trekking, a escalada e o rapel buscam uma fuga do estresse urbano e o contato direto com o meio ambiente. O Enem cobra muito a responsabilidade ecológica dessas modalidades: praticar o esporte gerando o menor impacto ambiental possível, respeitando a fauna e a flora locais.',
    },
    {
      titulo: '2. Práticas Corporais Urbanas (O Skate e o Parkour)',
      conteudo:
        'O ambiente urbano também é espaço de movimento. O Parkour e o Skate ressignificam a arquitetura da cidade. Para um pedestre comum, uma escada ou um corrimão são apenas caminhos; para o skatista ou praticante de parkour, tornam-se obstáculos e suportes para a arte do movimento. O Enem valoriza essas subversões do espaço público.',
    },
    {
      titulo: '3. Ginásticas de Conscientização Corporal',
      conteudo:
        'Ao contrário da ginástica de academia que busca queimar calorias ou crescer músculos, as ginásticas de conscientização corporal (como a Yoga, o Pilates e o Tai Chi Chuan) buscam o autoconhecimento, a respiração correta, a correção da postura e o relaxamento mental, integrando corpo e mente de forma holística.',
    },
    {
      titulo: '💡 Como Esse Tema Cai no Enem',
      conteudo:
        'Questões sobre o uso do espaço urbano ou esportes de aventura costumam pontuar na alternativa que fala sobre "ressignificação dos elementos arquitetônicos cotidianos", "integração homem-natureza pautada pela sustentabilidade" ou "busca por atividades de lazer contra o sedentarismo urbano".',
    },
    {
      titulo: 'Resumo Prático',
      conteudo:
        '- Parkour/Skate = Usam a arquitetura da cidade de forma criativa e artística.\n- Esportes de Aventura = Exigem consciência ambiental e sustentabilidade.\n- Yoga/Pilates = Focam na saúde mental, postura e percepção interna do próprio corpo.',
    },
  ],
},

'Educação Física|Cultura corporal': {
  materia: 'Educação Física',
  assunto: 'Cultura corporal',
  introducao:
    'A cultura corporal de movimento reúne as danças, lutas, jogos e brincadeiras populares passados de geração em geração. No Enem, esse tema celebra a pluralidade cultural do Brasil, destacando manifestações folclóricas que preservam memórias ancestrais, como a Capoeira e as danças indígenas.',
  secoes: [
    {
      titulo: '1. A Capoeira: Luta, Dança e Resistência',
      conteudo:
        'A Capoeira é o elemento de cultura corporal que mais cai no Enem! Nascida como ferramenta de defesa e liberdade dos escravizados, ela disfarçava os golpes de luta com o ritmo do berimbau para enganar os senhores de engenho. Hoje, é patrimônio imaterial da humanidade, unindo música, esporte, história e ancestralidade afro-brasileira.',
    },
    {
      titulo: '2. Danças Circulares e Folclóricas Populares',
      conteudo:
        'Manifestações como o Frevo, o Bumba meu Boi, as Quadrilhas Juninas e o Maracatu não são apenas entretenimento. Elas carregam a identidade histórica de uma comunidade. O Enem cobra essas práticas valorizando o sentimento de pertencimento que elas criam, onde o idoso, o jovem e a criança dançam juntos, preservando viva a história local.',
    },
    {
      titulo: '3. Jogos e Brincadeiras Tradicionais',
      conteudo:
        'Atividades como a peteca (de origem indígena), a amarelinha ou a queimada são patrimônios da nossa infância. A prova critica o sedentarismo gerado pelo excesso de telas de celular, defendendo o retorno dessas brincadeiras populares de rua como essenciais para a socialização, o desenvolvimento motor e o respeito às regras coletivas.',
    },
    {
      titulo: '💡 Fique Esperto na Prova',
      conteudo:
        'As questões de cultura corporal sempre buscam combater preconceitos. Alternativas corretas nunca vão marginalizar expressões periféricas (como o passinho do funk ou o hip-hop) e sempre trarão termos bonitos no gabarito, como "salvaguarda da memória coletiva", "manifestação de matriz identitária ancestral" ou "pluralidade das expressões populares".',
    },
    {
      titulo: 'Resumo Prático',
      conteudo:
        '- Capoeira = Luta disfarçada de dança criada como resistência à escravidão.\n- Danças Regionais = Patrimônio imaterial que gera união social e preserva tradições.\n- Brincadeiras de Rua = Desenvolvem socialização e combatem o sedentarismo tecnológico.',
    },
  ],
},
'Tecnologia e Comunicação|Linguagem digital': {
  materia: 'Tecnologia e Comunicação',
  assunto: 'Linguagem digital',
  introducao:
    'A linguagem digital revolucionou a forma como a humanidade se comunica. No Enem, ela é cobrada a partir de suas novas estruturas textuais, que abandonam a leitura tradicional de cima para baixo e exigem do usuário a capacidade de interpretar textos híbridos, repletos de elementos visuais, sonoros e interativos.',
  secoes: [
    {
      titulo: '1. Multimodalidade e Textos Híbridos',
      conteudo:
        'Diferente do livro impresso que usa apenas texto corrido, a internet vive da multimodalidade. Um único post ou notícia combina texto escrito, imagens, áudios, gifs e vídeos. O Enem cobra a habilidade de ler o conjunto: como a imagem e o som complementam ou alteram o significado das palavras escritas.',
    },
    {
      titulo: '2. O Hipertexto (Navegação não linear)',
      conteudo:
        'Hipertexto é a estrutura digital que conecta um texto a outros blocos de informação por meio de links (hiperlinks). Na internet, o leitor não segue uma linha reta: ele clica em um link, entra em outra página, lê um parágrafo e abre um vídeo. Essa leitura fragmentada exige maior foco para não perder o fio condutor do assunto principal.',
    },
    {
      titulo: '3. Memes e Emojis como Linguagem Oficial',
      conteudo:
        'Os emojis, figurinhas e memes não são apenas brincadeiras, eles são considerados elementos de linguagem com forte valor discursivo. Um meme condensa uma crítica social pesada ou um sentimento coletivo através da ironia rápida. O Enem traz esses elementos para a prova para avaliar se o aluno compreende a linguagem informal e o humor da rede.',
    },
    {
      titulo: '💡 Como Esse Tema Cai no Enem',
      conteudo:
        'As questões costumam colocar um print de uma tela ou um infográfico interativo e perguntar sobre o comportamento do leitor. O gabarito correto quase sempre envolve expressões como: "participação ativa do interlocutor na construção do sentido", "flexibilização da leitura por meio de trajetórias não lineares" ou "linguagem híbrida que potencializa a comunicação".',
    },
    {
      titulo: 'Resumo Prático',
      conteudo:
        '- Multimodalidade = Combinação de texto, imagem e som em uma mesma mensagem.\n- Hipertexto = Leitura livre, guiada por links, sem uma ordem fixa obrigatória.\n- Memes e Emojis = Possuem valor de comunicação real e expressam ironia e sentimentos.',
    },
  ],
},

'Tecnologia e Comunicação|Mídias e sociedade': {
  materia: 'Tecnologia e Comunicação',
  assunto: 'Mídias e sociedade',
  introducao:
    'As mídias moldam a cultura e os comportamentos da sociedade. No Enem, este tema é abordado sob uma perspectiva sociológica e crítica, avaliando como o controle da informação mudou das grandes emissoras de TV para as mãos das grandes corporações de tecnologia (Big Techs) através dos algoritmos.',
  secoes: [
    {
      titulo: '1. Algoritmos e Bolhas de Filtro',
      conteudo:
        'As redes sociais utilizam algoritmos para rastrear tudo o que você clica, curte ou assiste. Com base nisso, elas mostram apenas conteúdos que você já concorda. Isso cria as chamadas "Bolhas Ideológicas" ou "Bolhas de Filtro". O Enem critica esse fenômeno porque ele impede o debate saudável, polariza a sociedade e faz com que as pessoas ignorem visões de mundo diferentes das delas.',
    },
    {
      titulo: '2. Desinformação e a Indústria das Fake News',
      conteudo:
        'A desinformação na era digital virou uma indústria. As notícias falsas são desenhadas para apelar para o lado emocional do usuário, fazendo com que elas sejam compartilhadas muito mais rápido que as notícias reais. O Enem cobra os mecanismos de verificação: checar a agência de notícias, conferir a data (repostar notícia antiga como se fosse nova é um erro comum) e avaliar as fontes bibliográficas.',
    },
    {
      titulo: '3. Cidadania Digital e Exclusão',
      conteudo:
        'A internet trouxe voz para minorias e permitiu movimentos sociais históricos através de hashtags e mobilizações online (Ativismo Digital). No entanto, a prova também lembra que existe a "Exclusão Digital": o abismo econômico entre quem tem acesso a computadores e internet de alta velocidade e quem não tem, gerando desigualdade de oportunidades educacionais e profissionais.',
    },
    {
      titulo: '💡 Dica de Ouro para a Prova',
      conteudo:
        'Sempre adote uma postura crítica nas questões sobre redes sociais. A banca do Enem valoriza alternativas que apontem os perigos do "controle invisível dos dados dos usuários", que denunciem a "polarização política gerada por sistemas de recomendação" ou que defendam a "urgência de letramento digital para combater mentiras organizadas".',
    },
    {
      titulo: 'Resumo Prático',
      conteudo:
        '- Algoritmos = Criam bolhas digitais que aumentam a polarização social e eliminam o contraditório.\n- Fake News = Apelam para a emoção para viralizar; devem ser combatidas com agências de checagem e letramento digital.\n- Ativismo Digital = Uso das redes para mobilização social e ampliação de vozes minoritárias.',
    },
  ],
},

'Tecnologia e Comunicação|Tecnologias da informação': {
  materia: 'Tecnologia e Comunicação',
  assunto: 'Tecnologias da informação',
  introducao:
    'As Tecnologias da Informação (TI) formam a infraestrutura técnica do nosso mundo conectado. Para o Enem, o foco não está em decorar linhas de código ou configurações técnicas de computadores, mas sim em compreender como o processamento massivo de dados afeta a privacidade do cidadão e a economia global.',
  secoes: [
    {
      titulo: '1. A Economia dos Dados (O Novo Petróleo)',
      conteudo:
        'Sabe por que a maioria das redes sociais e aplicativos são gratuitos? Porque a moeda de troca são os seus dados pessoais. Seus hábitos de consumo, sua localização e suas pesquisas são coletados e vendidos para empresas de publicidade. O Enem discute a importância de leis de proteção de dados (como a LGPD no Brasil) para garantir a privacidade dos cidadãos frente ao monitoramento constante.',
    },
    {
      titulo: '2. Inteligência Artificial e o Futuro do Trabalho',
      conteudo:
        'A automação e a Inteligência Artificial estão transformando o mercado de trabalho. O Enem aborda esse tema mostrando o fim de profissões repetitivas e a necessidade de qualificação profissional. A crítica gira em torno do desemprego estrutural e de como a tecnologia deve servir para auxiliar o trabalhador, e não apenas para desumanizar os processos de produção.',
    },
    {
      titulo: '3. Segurança Digital e Vulnerabilidade',
      conteudo:
        'A engenharia social e os ataques de phishing são os golpes mais comuns na internet, explorando a falta de atenção do usuário para roubar senhas e dados bancários. Práticas básicas de higiene digital (senhas fortes, não clicar em links de SMS/e-mail suspeitos, usar dupla autenticação) são cobradas no exame para testar a capacidade do aluno de se proteger em ambientes digitais.',
    },
    {
      titulo: '💡 Fique Esperto no Enem',
      conteudo:
        'Questões que trazem gráficos sobre vazamento de dados ou avanço da Inteligência Artificial costumam pontuar na alternativa que aborda a "necessidade de regulamentação ética das ferramentas tecnológicas" ou que alerta sobre a "vulnerabilidade da privacidade individual na sociedade de controle".',
    },
    {
      titulo: 'Resumo Prático',
      conteudo:
        '- Dados Pessoais = Possuem alto valor comercial e exigem leis de proteção à privacidade (LGPD).\n- Inteligência Artificial = Altera o mercado de trabalho e exige debates éticos sobre substituição humana.\n- Segurança = Depende de comportamento preventivo contra engenharia social (phishing).',
    },
  ],
},

'Tecnologia e Comunicação|Comunicação digital': {
  materia: 'Tecnologia e Comunicação',
  assunto: 'Comunicação digital',
  introducao:
    'A comunicação digital encurtou distâncias geográficas e permitiu a troca de informações em tempo recorde. No Enem, estuda-se como essa velocidade modificou as relações humanas cotidianas, a linguagem formal e informal, e criou novos desafios de convivência na rede, como o cyberbullying.',
  secoes: [
    {
      titulo: '1. Síncrona vs. Assíncrona e o Imediatismo',
      conteudo:
        'A comunicação na internet divide-se em dois eixos:\n- Síncrona (Tempo real): Ligações de vídeo, chats ao vivo. Exige respostas imediatas.\n- Assíncrona (Tempo diferido): E-mails, mensagens de fóruns. Permite reflexão antes de responder.\nO Enem pontua como a pressa das ferramentas síncronas muitas vezes gera ruídos de comunicação, ansiedade social e respostas agressivas por falta de reflexão.',
    },
    {
      titulo: '2. Netiqueta e Violência Virtual (Cyberbullying)',
      conteudo:
        'A falsa sensação de anonimato na internet faz com que muitas pessoas ataquem outras nas redes sociais. A Netiqueta é o conjunto de regras de bom senso para uma convivência pacífica online. O Enem combate ferozmente o Cyberbullying e o Discurso de Ódio, mostrando que ataques virtuais têm consequências psicológicas reais e graves no mundo físico.',
    },
    {
      titulo: '3. A democratização da Voz (O papel dos Prosumers)',
      conteudo:
        'Antigamente, as pessoas eram apenas consumidoras passivas de notícias (liam o jornal ou viam a TV). Hoje, na comunicação digital, todos nós somos "Prosumers" (Produtores + Consumidores). Qualquer cidadão com um celular pode filmar um acontecimento no seu bairro e viralizar uma notícia. Isso democratizou a comunicação, mas também descentralizou a responsabilidade sobre o que é publicado.',
    },
    {
      titulo: '💡 Como Esse Tema Cai no Enem',
      conteudo:
      'Textos que discutem comportamento em redes sociais ou a velocidade dos e-mails costumam ter como resposta correta alternativas que citam a "transformação das interações interpessoais contemporâneas", a "necessidade de empatia e ética nos ambientes virtuais" ou a "ressignificação dos papéis de emissor e receptor na rede".',
},
{
 titulo: 'Resumo Prático',
 conteudo:
'- Convivência Online = Exige o respeito à Netiqueta e o combate ativo ao cyberbullying e discurso de ódio.\n- Prosumer = O usuário moderno que consome e também produz informação na internet.\n- Imediatismo = A velocidade da comunicação síncrona pode gerar ansiedade e ruídos de interpretação.',
},
],
},

  'Biologia|Citologia': {
  materia: 'Biologia',
  assunto: 'Citologia',
  introducao:
    'A citologia estuda a estrutura e o funcionamento das células, as unidades funcionais e estruturais de todos os seres vivos. No Enem, este tema é cobrado com foco na bioenergética celular e na divisão de tarefas entre as organelas citoplasmáticas.',
  secoes: [
    {
      titulo: '1. Procariontes vs. Eucariotes (A Grande Ruptura)',
      conteudo:
        '- Células Procariontes: São extremamente simples, não possuem núcleo delimitado (o DNA fica solto no nucleoide) e não têm organelas membranosas. A única organela presente são os ribossomos. Exemplo: Bactérias e Cianobactérias.\n- Células Eucariontes: São complexas, possuem o material genético protegido por uma membrana (carioteca) e um citoplasma repleto de organelas especializadas. Exemplo: Células animais, vegetais, fungos e protozoários.',
    },
    {
      titulo: '2. Membrana Plasmática e o Mosaico Fluido',
      conteudo:
        'A membrana é formada por uma bicamada fosfolipídica com proteínas inseridas que se movem lateralmente (Mosaico Fluido). Sua principal função é a Permeabilidade Seletiva (controlar o que entra e sai).\n- Transporte Passivo (Sem gasto de ATP): Difusão simples, difusão facilitada e Osmose (passagem de água do meio menos concentrado para o mais concentrado).\n- Transporte Ativo (Com gasto de ATP): Bomba de Sódio e Potássio (move substâncias contra o gradiente de concentração).',
    },
    {
      titulo: '3. O Sistema de Organelas e a Bioenergética',
      conteudo:
        'O Enem ama associar as organelas a funções industriais de uma fábrica:\n- Mitocôndrias: Usinas de energia. Realizam a Respiração Celular para produzir ATP a partir da glicose e do Oxigênio.\n- Cloroplastos: Presentes em plantas e algas. Realizam a Fotossíntese, convertendo luz solar, gás carbônico e água em glicose.\n- Ribossomos e Retículo Endoplasmático Rugoso: Linha de produção de proteínas.\n- Complexo de Golgi: Centro de empacotamento e exportação de substâncias (secreção celular).\n- Lisossomos: Setor de reciclagem (digestão intracelular e autofagia).',
    },
    {
      titulo: '💡 Teoria Endossimbiótica (Questão Certa)',
      conteudo:
        'O Enem adora cobrar a origem das Mitocôndrias e dos Cloroplastos. A Teoria Endossimbiótica prova que essas duas organelas eram bactérias primitivas que foram engolidas por células maiores e passaram a viver em simbiose. Evidências: possuem DNA próprio circular (igual ao de bactérias), ribossomos próprios e capacidade de se autoduplicar.',
    },
    {
      titulo: 'Resumo Prático',
      conteudo:
        '- Mitocôndria = Produção de ATP (energia) via respiração celular.\n- Cloroplasto = Produção de matéria orgânica via fotossíntese.\n- Membrana = Permeabilidade seletiva e controle osmótico.\n- Complexo de Golgi = Empacotamento e secreção celular.',
    },
  ],
},

'Biologia|Genética': {
  materia: 'Biologia',
  assunto: 'Genética',
  introducao:
    'A genética é a ciência que estuda as leis da hereditariedade e a variação dos caracteres herdados. No Enem, as questões exigem a interpretação de heredogramas (árvores genealógicas), o cálculo de probabilidades de cruzamentos mendelianos e conceitos modernos de engenharia genética.',
  secoes: [
    {
      titulo: '1. O Alfabeto Genético (Conceitos Básicos)',
      conteudo:
        '- Gene: Fragmento de DNA que contém a receita para produzir uma proteína específica.\n- Alelos: Versões diferentes do mesmo gene (Ex: Alelo "A" para olhos escuros e alelo "a" para olhos claros).\n- Genótipo: A constituição genética do indivíduo (AA, Aa ou aa).\n- Fenótipo: A expressão física ou bioquímica do genótipo influenciada pelo ambiente. Fórmula: Fenótipo = Genótipo + Ambiente (Ex: Cor da pele alterada pelo sol).',
    },
    {
      titulo: '2. Dominância, Recessividade e Homozigose',
      conteudo:
        '- Homozigoto (Puro): Possui alelos iguais para uma característica (AA ou aa).\n- Heterozigoto (Híbrido): Possui alelos diferentes (Aa). O alelo dominante (A) se expressa mesmo em dose única, escondendo o alelo recessivo (a), que só se manifesta em homozigose (aa).',
    },
    {
      titulo: '3. Primeira Lei de Mendel e Cruzamentos',
      conteudo:
        'Cada característica é determinada por um par de alelos que se separam na formação dos gametas. Ao cruzar dois indivíduos heterozigotos (Aa × Aa), usamos o Quadrado de Punnett para prever os resultados:\n\n   | A  | a  |\n---|----|----|\n A | AA | Aa |\n---|----|----|\n a | Aa | aa |\n\n- Proporção Genotípica: 25% AA, 50% Aa, 25% aa (1:2:1).\n- Proporção Fenotípica (Dominância Completa): 75% Dominante e 25% Recessivo (3:1).',
    },
    {
      titulo: '💡 Como Interpretar Heredogramas no Enem',
      conteudo:
        'Para descobrir se uma doença em um heredograma é recessiva, procure por uma pegadinha visual clássica: UM CASAL IGUAL (ambos afetados ou ambos normais) QUE TEM UM FILHO DIFERENTE deles. Se o casal é normal e o filho é afetado, a doença é obrigatoriamente RECESSIVA e os pais são heterozigotos (Aa).',
    },
    {
      titulo: 'Resumo Prático',
      conteudo:
        '- Fenótipo = Características visíveis ou expressas (sofre ação do ambiente).\n- Cruzamento Aa × Aa = 75% de chance de manifestar o traço dominante.\n- Pais iguais com filho diferente = O filho diferente é recessivo (aa).',
    },
  ],
},

'Biologia|Ecologia': {
  materia: 'Biologia',
  assunto: 'Ecologia',
  introducao:
    'A ecologia estuda a dinâmica das interações dos seres vivos entre si e com o meio ambiente físico e químico. Este é o assunto número um em cobrança no Enem, aparecendo em formato de análises de teias alimentares, ciclos biogeoquímicos e poluição ambiental.',
  secoes: [
    {
      titulo: '1. Cadeias e Teias Alimentares (O Fluxo de Energia)',
      conteudo:
        '- Produtores: Autótrofos (plantas, algas) que introduzem a energia química no sistema.\n- Consumidores: Heterótrofos (herbívoros e carnívoros) que obtêm energia se alimentando.\n- Decompositores: Fungos e bactérias que reciclam a matéria orgânica em inorgânica.\n\nATENÇÃO PARA O ENEM: A matéria no ecossistema é CÍCLICA, mas o fluxo de energia é UNIDIRECIONAL e DECRESCENTE. O primeiro nível trófico (produtor) sempre tem mais energia disponível do que o último.',
    },
    {
      titulo: '2. Relações Ecológicas (Harmônicas vs. Desarmônicas)',
      conteudo:
        'Os seres vivos interagem constantemente:\n- Mutualismo (+/+): Interação obrigatória benéfica para ambos (Ex: Líquens).\n- Protocolooperação (+/+): Benéfica, mas não obrigatória (Ex: Pássaro-palito e crocodilo).\n- Competição (-/-): Disputa por recursos (comida, parceiros, território). Sempre gera prejuízo energético.\n- Predatismo e Parasitismo (+/-): Um organismo se beneficia prejudicando ou matando o outro.',
    },
    {
      titulo: '3. Impactos Ambientais Críticos no Enem',
      conteudo:
        'O Enem ama cobrar os seguintes fenômenos de poluição:\n- Magnificação Trófica (Bioacumulação): Metais pesados (como mercúrio) e agrotóxicos (DDT) não são eliminados pelo corpo. Eles se acumulam ao longo da cadeia alimentar. O ÚLTIMO nível trófico (o predador de topo) sempre terá a MAIOR concentração do poluente.\n- Eutrofização: Excesso de nutrientes (esgoto orgânico ou fertilizantes) na água gera explosão de algas na superfície. As algas bloqueiam a luz, as plantas do fundo morrem, bactérias aeróbicas consomem todo o oxigênio ao decompor essas plantas, gerando a morte em massa de peixes por asfixia.',
    },
    {
      titulo: '💡 O Ciclo do Nitrogênio (Cai Direto!)',
      conteudo:
        'O nitrogênio gasoso (N₂) não é absorvido pelas plantas. Ele precisa passar pela Fixação (bactérias *Rhizobium* nas raízes de leguminosas o transformam em amônia), depois pela Nitrificação (transformação de amônia em nitrito e depois em nitrato, que é a forma assimilável pelas plantas) e retorna à atmosfera via Desnitrificação.',
    },
    {
      titulo: 'Resumo Prático',
      conteudo:
        '- Energia diminui a cada nível trófico; Poluentes não biodegradáveis aumentam (Bioacumulação).\n- Eutrofização = Esgoto → Algas bloqueiam luz → Falta de O₂ → Morte de peixes.\n- Leguminosas ajudam a fixar o Nitrogênio no solo enriquecendo a agricultura.',
    },
  ],
},


 'Biologia|Evolução': {
  materia: 'Biologia',
  assunto: 'Evolução',
  introducao:
    'A evolução é o processo de transformação e adaptação das populações ao longo das gerações. No Enem, este tema é cobrado através do confronto clássico entre Lamarck e Darwin, além dos conceitos modernos de especiação e genética de populações.',
  secoes: [
    {
      titulo: '1. Lamarck vs. Darwin (O Grande Duelo)',
      conteudo:
        '- Lamarckismo (Jean-Baptiste Lamarck): Defendia a Lei do Uso e Desuso (órgãos muito usados se desenvolvem, órgãos sem uso regridem) e a Lei da Transmissão dos Caracteres Adquiridos. Para ele, o ambiente MODIFICAVA o indivíduo de forma ativa.\n- Darwinismo (Charles Darwin): Defendia a SELEÇÃO NATURAL. Os indivíduos já possuem variações naturais. O ambiente atua selecionando (filtrando) os mais aptos, que sobrevivem e geram descendentes. O ambiente não modifica, ele SELECIONA.',
    },
    {
      titulo: '2. Teoria Sintética da Evolução (Neodarwinismo)',
      conteudo:
        'Charles Darwin não conseguiu explicar na sua época a origem das variações entre os indivíduos. O Neodarwinismo resolveu isso unindo a Seleção Natural aos conhecimentos de Genética. As fontes de variabilidade genética são a Mutação (única forma de criar novos alelos) e a Recombinação Genética (crossing-over na meiose e união aleatória de gametas).',
    },
    {
      titulo: '3. Especiação (Como nascem novas espécies)',
      conteudo:
        'O processo mais comum cobrado no exame é a Especiação Alopátrica:\n1º) Uma população original sofre um Isolamento Geográfico (uma barreira física como um rio, montanha ou rodovia divide o grupo).\n2º) Os dois grupos passam a sofrer pressões de seleção diferentes e acumulam mutações ao longo do tempo.\n3º) Após muitas gerações, se as duas populações se reencontrarem e não conseguirem mais gerar filhos férteis, ocorreu o Isolamento Reprodutivo e surgiram duas espécies diferentes.',
    },
    {
      titulo: '💡 Como Evolução Cai no Enem',
      conteudo:
      'O exemplo clássico do Enem é a "resistência de bactérias a antibióticos" ou de "insetos a inseticidas". Cuidado com a pegadinha lamarckista: o antibiótico NÃO induz a bactéria a ficar resistente. O antibiótico funciona como o selecionador de Darwin: ele mata as bactérias fracas e apenas as que já eram resistentes por mutação sobrevivem e se multiplicam.',
},
{
titulo: 'Resumo Prático',
conteudo:
'- Lamarck = O ambiente força a mudança (Uso e desuso).\n- Darwin = O ambiente seleciona quem já nasceu com a característica vantajosa.\n- Antibióticos = Não criam resistência, apenas selecionam as bactérias mutantes resistentes.',
},
],
},
'Biologia|Fisiologia': {
materia: 'Biologia',
assunto: 'Fisiologia',
introducao:
'A fisiologia estuda o funcionamento integrado dos sistemas do corpo humano. O Enem cobra essa matéria conectando o funcionamento biológico a hábitos de saúde pública, alimentação, exercícios físicos e ao conceito de homeostase (equilíbrio interno do organismo).',
secoes: [
{
titulo: '1. Imunização (Vacina vs. Soro)',
conteudo:
'Este assunto cai em praticamente todas as edições do Enem. Saiba a diferença exata:\n- Vacina (Prevenção/Imunização Ativa): Contém o antígeno atenuado ou morto. Estimula o próprio corpo a produzir anticorpos e células de memória. Tem efeito lento, mas duradouro.\n- Soro (Cura/Imunização Passiva): Contém os anticorpos prontos já fabricados por outro organismo (Ex: Soro antiofídico para picada de cobra). Não cria células de memória, tem efeito imediato e serve para emergências.',
},
{
  titulo: '2. Sistemas Respiratório e Circulatório',
conteudo:
'O sistema respiratório garante a hematose (troca de gases nos alvéolos pulmonares). O Enem cobra muito a intoxicação por Monóxido de Carbono (CO, fumaça de escapamentos e incêndios): o CO se liga de forma irreversível à hemoglobina, impedindo o transporte de oxigênio e causando asfixia química. No sistema circulatório, lembre-se de que a artéria transporta sangue que sai do coração, e a veia traz o sangue de volta ao coração.',
},
{
titulo: '3. Controle Hormonal e Homeostase',
conteudo:
'O corpo mantém o equilíbrio interno através de hormônios. O foco principal da prova é o controle da glicose no sangue (Glicemia):\n- Insulina (Produzida no Pâncreas): Reduz o açúcar no sangue após as refeições, guardando a glicose nas células e no fígado (Glicogênio).\n- Glucagon (Produzida no Pâncreas): Atua nos períodos de jejum, quebrando o glicogênio do fígado e liberando açúcar no sangue para manter as células ativas.',
},
{
  titulo: '💡 Dica de Ouro para a Prova',
conteudo:
'Questões de fisiologia no Enem costumam relacionar disfunções do corpo a problemas cotidianos. Se o enunciado falar sobre "fadiga intensa em locais de grande altitude", estude a resposta focando na menor pressão de oxigênio, que exige que o corpo produza mais glóbulos vermelhos (hemácias) para se adaptar.',
},
{
titulo: 'Resumo Prático',
conteudo:
'- Vacina = Antígeno (previne, cria memória); Soro = Anticorpo pronto (cura emergências).\n- Insulina = Diminui glicose no sangue; Glucagon = Aumenta glicose no sangue.\n- Monóxido de Carbono (CO) = Bloqueia as hemácias e impede a oxigenação do corpo.',
},
],
},

  'Física|Mecânica': {
  materia: 'Física',
  assunto: 'Mecânica',
  introducao:
    'A mecânica estuda os movimentos dos corpos, as forças que os provocam e as leis de conservação de energia. No Enem, este tema aparece associado à segurança no trânsito (distância de frenagem, colisões e airbags) e à eficiência energética de usinas e motores.',
  secoes: [
    {
      titulo: '1. Cinemática e Velocidade Média',
      conteudo:
        'A cinemática descreve o movimento sem se preocupar com as suas causas. O conceito inicial mais importante é a Velocidade Média:\n\nVm = Δs ÷ Δt\n\nOnde Δs é a variação de espaço (deslocamento) e Δt é o intervalo de tempo.\n💡 Macete de Ouro: O Enem adora misturar unidades de medida. Para converter de km/h para m/s, DIVIDA por 3,6. Para fazer o caminho inverso (m/s para km/h), MULTIPLIQUE por 3,6.',
    },
    {
      titulo: '2. Dinâmica e Leis de Newton',
      conteudo:
        'A dinâmica estuda o que causa os movimentos: as Forças.\n- 1ª Lei (Inércia): Um corpo tende a manter seu estado de repouso ou movimento retilíneo uniforme a menos que uma força externa atue sobre ele. É por isso que usamos o cinto de segurança!\n- 2ª Lei (Princípio Fundamental): A força resultante é o produto da massa pela aceleração (F = m · a).\n- 3ª Lei (Ação e Reação): Para toda força de ação, existe uma reação de mesma intensidade, mesma direção e sentido oposto.',
    },
    {
      titulo: '3. Conservação da Energia Mecânica',
      conteudo:
        'A energia não pode ser criada nem destruída, apenas transformada. A Energia Mecânica (Em) é a soma de duas energias:\n- Energia Cinética (Ec): Energia do movimento. Depende da velocidade. Fórmula: Ec = (m · v²) ÷ 2.\n- Energia Potencial Gravitacional (Epg): Energia da posição/altura. Fórmula: Epg = m · g · h.\n\nExemplo do Enem: No topo de uma montanha-russa, o carrinho tem o máximo de Epg. À medida que ele desce, a altura diminui e a velocidade aumenta, transformando a Epg em Energia Cinética (Ec).',
    },
    {
      titulo: '💡 Como Mecânica Cai no Enem',
      conteudo:
        'A banca cobra muito o conceito de Trabalho e Potência associado a rendimento (gasto de combustível ou energia de hidrelétricas). Fique atento também a colisões: para reduzir a força do impacto em um acidente de carro, os engenheiros usam o airbag para aumentar o tempo do impacto (Teorema do Impulso), suavizando a batida para o passageiro.',
    },
    {
      titulo: 'Resumo Prático',
      conteudo:
        '- km/h para m/s = Divida por 3,6.\n- Cinto de segurança e Airbag = Aplicações práticas da Inércia e do Impulso.\n- Sistema Conservativo = Energia Potencial vira Energia Cinética e vice-versa.',
    },
  ],
},

'Física|Eletricidade': {
  materia: 'Física',
  assunto: 'Eletricidade',
  introducao:
    'A eletricidade analisa o comportamento das cargas elétricas em movimento (corrente elétrica) e em repouso. Este assunto cai em todas as edições do Enem, focando fortemente no consumo de energia elétrica residencial (kW·h) e na análise de circuitos elétricos domésticos.',
  secoes: [
    {
      titulo: '1. A Lei de Ohm e a Resistência',
      conteudo:
        'Os resistores são componentes que dificultam a passagem da corrente elétrica e transformam energia elétrica em calor (Efeito Joule, usado no chuveiro elétrico e na secadora). A Primeira Lei de Ohm organiza essa relação:\n\nU = R · I  (Mnemônico: "Quem vê, Ri")\n\nOnde U é a tensão/voltagem (medida em Volts - V), R é a resistência (medida em Ohms - Ω) e I é a intensidade da corrente elétrica (medida em Ampères - A).',
    },
    {
      titulo: '2. Circuitos em Série vs. Paralelo (O Segredo da Prova)',
      conteudo:
        'Você precisa saber como as lâmpadas e tomadas estão ligadas:\n- Circuito em Série: Há apenas um caminho para a corrente passar. Se uma lâmpada queimar, o circuito abre e TODAS as outras apagam (Ex: Pisca-pisca antigo). A resistência total é a soma das resistências.\n- Circuito em Paralelo: Há caminhos independentes. Se uma lâmpada queimar, as outras continuam funcionando normalmente. Esta é a ligação usada nas nossas casas! Todas as tomadas recebem a mesma voltagem (tensão constante).',
    },
    {
      titulo: '3. Potência Elétrica e a Conta de Luz',
      conteudo:
        'A potência mede a rapidez com que a energia é transformada. A fórmula básica é P = U · I (Mnemônico: "Piu"). Para calcular o consumo de um eletrodoméstico e prever o valor da conta de luz, usamos a fórmula da energia:\n\nEnergia (kW·h) = Potência (kW) × Tempo (h)\n\nAtenção: O Enem dá a potência em Watts (W). Você deve dividi-la por 1.000 para transformar em kilowatts (kW) antes de multiplicar pelas horas de uso!',
    },
    {
      titulo: '💡 Dica de Ouro para Circuitos do Enem',
      conteudo:
        'A banca adora colocar questões sobre dispositivos de segurança: Fusíveis e Disjuntores. Eles servem para proteger o circuito contra sobrecargas. Eles devem ser instalados SEMPRE em SÉRIE com o circuito que protegem, pois se a corrente ultrapassar o limite seguro, eles queimam ou desarmam, cortando a corrente antes de estragar os aparelhos.',
    },
    {
      titulo: 'Resumo Prático',
      conteudo:
        '- Ligação Residencial = Sempre em PARALELO (aparelhos funcionam de forma independente e com a mesma voltagem).\n- Chuveiro na posição "Inverno" = Menor resistência elétrica, o que gera maior corrente e maior potência (esquenta mais).\n- Consumo de Energia = Potência em kW multiplicada pelo tempo em horas.',
    },
  ],
},

'Física|Ondulatória': {
  materia: 'Física',
  assunto: 'Ondulatória',
  introducao:
    'A ondulatória estuda o comportamento das ondas, que são perturbações que transportam energia através do espaço sem transportar matéria. O Enem cobra massivamente a equação fundamental da ondulatória e, principalmente, a identificação dos fenômenos ondulatórios no nosso dia a dia.',
  secoes: [
    {
      titulo: '1. Propriedades e a Equação Fundamental',
      conteudo:
        'Toda onda possui uma crista (ponto mais alto), um vale (ponto mais baixo) e um comprimento de onda (λ - lâmbda, a distância entre duas cristas seguidas). A velocidade de propagação obedece à equação mais famosa da Física do Enem:\n\nv = λ · f  (Mnemônico: "Vem Vamos Ver Lâmbda Ferver")\n\nOnde v é a velocidade (m/s), λ é o comprimento de onda (m) e f é a frequência (Hz). Lembre-se: quando uma onda muda de meio (ex: da água para o ar), a sua FREQUÊNCIA NUNCA MUDA, pois ela depende apenas da fonte que a criou.',
    },
    {
      titulo: '2. Fenômenos Ondutatórios (Cai Direto!)',
      conteudo:
        'Você deve ler a situação do enunciado e identificar o fenômeno:\n- Reflexão: A onda bate em um obstáculo e volta para o mesmo meio. É o que gera o Eco.\n- Refração: A onda muda de meio de propagação. Ao mudar de meio, a velocidade (v) e o comprimento (λ) mudam, mas a frequência (f) continua a mesma.\n- Difração: É a capacidade da onda de contornar obstáculos ou passar por fendas. É por isso que você consegue ouvir alguém falando no corredor mesmo estando dentro do quarto com a porta aberta (o som contorna a parede).\n- Polarização: Filtrar uma onda para que ela oscile em apenas uma direção. Ocorre apenas com ondas transversais (como a luz). É o princípio dos óculos de sol polarizados e das telas de celular.',
    },
    {
      titulo: '3. Ressonância e Efeito Doppler',
      conteudo:
        '- Ressonância: Um corpo começa a vibrar espontaneamente ao ser atingido por uma onda externa que possui a mesma frequência natural de vibração dele (Ex: Uma cantora de ópera quebrando uma taça de cristal com a voz, ou o sinal de Wi-Fi sintonizando no roteador).\n- Efeito Doppler: A mudança aparente na frequência de uma onda devido ao movimento relativo entre a fonte e o observador. Quando a ambulância se APROXIMA de você, o som parece mais AGUDO (frequência alta). Quando ela se AFASTA, o som parece mais GRAVE (frequência baixa).',
    },
    {
      titulo: '💡 Como Esse Tema Cai no Enem',
      conteudo:
        'A prova adora misturar ondulatória com biologia e tecnologia. Um clássico são os exames de ultrassom (Reflexão de ondas sonoras mecânicas inaudíveis) ou o funcionamento de fibras ópticas na internet (Reflexão Total da luz dentro de um cabo de vidro). Domine o conceito visual de cada fenômeno para acertar as questões conceituais rápidas.',
    },
    {
      titulo: 'Resumo Prático',
      conteudo:
        '- Mudança de meio (Refração) = Velocidade muda, Frequência NÃO muda.\n- Ouvir atrás do muro = Difração (contornar obstáculos).\n- Ambulância chegando (Mais agudo) e afastando (Mais grave) = Efeito Doppler.',
    },
  ],
},

'Física|Termologia': {
  materia: 'Física',
  assunto: 'Termologia',
  introducao:
    'A termologia estuda o calor, a temperatura e as transformações térmicas dos corpos. No Enem, este assunto é cobrado associando a troca de energia a situações cotidianas, como o funcionamento de geladeiras, o isolamento térmico de roupas e garrafas, e fenômenos climáticos como as brisas marítimas.',
  secoes: [
    {
      titulo: '1. Temperatura vs. Calor (Não confunda!)',
      conteudo:
        '- Temperatura: É a medida do grau de agitação das moléculas de um corpo. Quanto mais rápido elas se movem, maior a temperatura.\n- Calor: É a energia térmica em TRÂNSITO. O calor sempre flui de forma espontânea do corpo de maior temperatura para o de menor temperatura, até que ambos atinjam o Equilíbrio Térmico.\n💡 Atenção: Dizer "estou com calor" é incorreto na Física, pois o calor não se armazena; os corpos armazenam energia interna.',
    },
    {
      titulo: '2. Processos de Transmissão de Calor (Cai Direto!)',
      conteudo:
        'O calor pode se propagar de três maneiras que o Enem adora contextualizar:\n- Condução: A energia passa de molécula para molécula através do contato físico. Ocorre principalmente em sólidos (metais são ótimos condutores; madeira e isopor são isolantes).\n- Convecção: Ocorre em fluidos (líquidos e gases) através da diferença de densidade. O fluido quente fica menos denso e SOBE, enquanto o fluido frio fica mais denso e DESCE, criando correntes de convecção (Ex: O ar-condicionado deve ficar no alto; o congelador da geladeira fica em cima).\n- Irradiação: O calor se propaga por ondas eletromagnéticas (infravermelho). É o único processo que ocorre no VÁCUO (Ex: O calor do Sol chegando à Terra ou o calor de uma fogueira).',
    },
    {
      titulo: '3. Calor Sensível (Mudança de Temperatura)',
      conteudo:
        'Quando um corpo recebe calor e apenas a sua temperatura varia (sem mudar de estado físico), usamos a fórmula do "Que Macete":\n\nQ = m · c · ΔT\n\nOnde Q é o calor (cal ou J), m é a massa (g ou kg), c é o calor específico da substância e ΔT é a variação de temperatura.\n💡 Conceito Fundamental para o Enem: O Calor Específico (c) mede a resistência à mudança de temperatura. A água tem um "c" muito alto (1 cal/g°C), o que significa que ela demárcia para esquentar e demárcia para esfriar. Já a areia da praia tem um "c" baixo (esquenta e esfria muito rápido). Isso explica a Brisa Marítima: de dia o vento sopra do mar para a praia; de noite, da praia para o mar.',
    },
    {
      titulo: '4. Calor Latente (Mudança de Estado Físico)',
      conteudo:
        'Quando o corpo recebe calor e o utiliza exclusivamente para quebrar as ligações moleculares e mudar de estado físico (como o gelo derretendo), a temperatura permanece CONSTANTE durante todo o processo. Usamos a fórmula do "Que Moleza":\n\nQ = m · L\n\nOnde L é o calor latente de fusão ou vaporização da substância.',
    },
    {
      titulo: '💡 Como Termologia Cai no Enem',
      conteudo:
        'A prova cobra muito o funcionamento da Garrafa Térmica (Vaso de Dewar). Ela é feita para evitar os 3 processos de transmissão: as paredes de vidro duplo com vácuo entre elas impedem a condução e a convecção; as paredes espelhadas refletem as ondas de calor de volta, impedindo a irradiação. Entender esse exemplo garante pontos cruciais!',
    },
    {
      titulo: 'Resumo Prático',
      conteudo:
        '- Calor = Energia que flui do corpo mais quente para o mais frio.\n- Convecção = Ar quente sobe, ar frio desce (fluidos).\n- Calor específico alto = Demárcia para mudar de temperatura (ex: água).\n- Mudança de estado físico = Temperatura fica travada (constante).',
    },
  ],
},

'Física|Óptica': {
  materia: 'Física',
  assunto: 'Óptica',
  introducao:
    'A óptica geométrica estuda o comportamento e a propagação da luz. No Enem, este tema afunila-se fortemente em dois eixos: os fenômenos de formação de imagens (espelhos e instrumentos ópticos) e a fisiologia do olho humano (correção de defeitos de visão por lentes).',
  secoes: [
    {
      titulo: '1. Princípios Básicos e Reflexão',
      conteudo:
        'A luz propaga-se em linha reta nos meios homogêneos e transparentes. Na Reflexão, a luz bate em uma superfície e retorna ao meio original.\n- Espelhos Planos: Formam imagens virtuais (atrás do espelho), direitas (de cabeça para cima) e simétricas (à mesma distância que o objeto está do espelho). Ocorre também a reversão da esquerda com a direita (Enantiomorfismo, por isso a palavra AMBULÂNCIA é escrita invertida na frente do carro).',
    },
    {
      titulo: '2. Refração e Lentes Esféricas',
      conteudo:
        'A Refração ocorre quando a luz muda de meio de propagação e sofre alteração na sua velocidade. Se a luz passar de um meio menos denso para um mais denso (como do ar para a água), ela desacelera e aproxima-se da linha reta normal.\nAs Lentes usam a refração para desviar a luz:\n- Lentes Convergentes (Bordas finas no ar): Concentram os raios de luz em um ponto (Foco). Usadas para ampliar imagens (lupa).\n- Lentes Divergentes (Bordas grossas no ar): Espalham os raios de luz.',
    },
    {
      titulo: '3. Óptica da Visão (O Prato Cheio do Enem)',
      conteudo:
        'O olho humano funciona como uma câmera fotográfica, projetando a imagem de cabeça para baixo na Retina. Quando há falhas geométricas no olho, surgem as ametropias:\n- Miopia: O olho é mais longo e a imagem forma-se ANTES da retina. O míope não enxerga bem de LONGE. Correção: **Lentes Divergentes** (para empurrar a imagem para trás).\n- Hipermetropia: O olho é mais curto e a imagem forma-se DEPOIS da retina. O hipermetrope não enxerga bem de PERTO. Correção: **Lentes Convergentes** (para puxar a imagem para a frente).\n- Presbiopia ("Vista Cansada"): Perda da elasticidade do cristalino devido à idade, dificultando focar de perto. Correção: **Lentes Convergentes** ou bifocais.',
    },
    {
      titulo: '💡 Dica de Ouro para a Prova',
      conteudo:
        'Um fenômeno derivado da refração que cai muito é a Reflexão Total da luz (quando a luz tenta passar do meio mais concentrado para o menos concentrado com um ângulo muito deitado, ela não consegue sair e reflete para dentro). É assim que funciona a Fibra Óptica da internet e é isso que gera as miragens no asfalto quente em dias de verão.',
    },
    {
      titulo: 'Resumo Prático',
      conteudo:
        '- Miopia = Dificuldade para ver de LONGE → Corrige com lente DIVERGENTE.\n- Hipermetropia = Dificuldade para ver de PERTO → Corrige com lente CONVERGENTE.\n- Imagem na retina = Sempre invertida e real.\n- Fibra óptica e miragens = Ocorrência de Reflexão Total da luz.',
    },
  ],
},


  'Química|Química orgânica': {
  materia: 'Química',
  assunto: 'Química orgânica',
  introducao:
    'A química orgânica estuda os compostos formados por carbono. No Enem, este assunto é o mais cobrado de toda a Química, focando na identificação de funções orgânicas em moléculas complexas (como medicamentos e hormônios) e nas propriedades físicas dessas moléculas, como a solubilidade e os pontos de fusão e ebulição.',
  secoes: [
    {
      titulo: '1. Reconhecimento de Funções Orgânicas (Cai Direto!)',
      conteudo:
        'A prova do Enem sempre traz estruturas grandes para você identificar os grupos funcionais. Memorize os principais:\n- Hidrocarbonetos: Possuem APENAS carbonos e hidrogênios (C e H). São a base do petróleo.\n- Álcool: Possui uma hidroxila (-OH) ligada a um carbono saturado.\n- Fenol: Possui uma hidroxila (-OH) ligada DIRETAMENTE a um anel aromático (benzeno).\n- Ácido Carboxílico: Possui o grupo carboxila (-COOH), responsável pelo caráter ácido de vinagres e suor.\n- Éster: Derivado de ácidos, possui uma ramificação com oxigênio entre carbonos (R-COO-R). São os responsáveis pelos aromas e sabores artificiais (flavorizantes).',
    },
    {
      titulo: '2. Propriedades Físicas: Solubilidade e Forças Intermoléculaires',
      conteudo:
        'O segredo do Enem é lembrar que "semelhante dissolve semelhante":\n- Compostos Polares: Dissolvem-se em água (que é polar). Apresentam forças do tipo Ligação de Hidrogênio (moléculas com H ligado a F, O, N) ou Dipolo-Dipolo. Ex: Álcoois pequenos e ácidos carboxílicos.\n- Compostos Apolares: Dissolvem-se em óleos e gorduras (lipofílicos). Apresentam forças fracas do tipo Dipolo Induzido (Forças de London). Ex: Hidrocarbonetos e cadeias longas de carbono.\n💡 Regra de Ouro: Quanto maior a cadeia de carbonos de uma molécula, mais APOLAR e menos solúvel em água ela se torna.',
    },
    {
      titulo: '3. Reações Orgânicas e Polímeros',
      conteudo:
        'A prova costuma cobrar reações clássicas do cotidiano:\n- Esterificação: Ácido Carboxílico + Álcool ⇄ Éster + Água (produção de essências e flavorizantes).\n- Saponificação: Gordura (Triglicerídeo) + Base Forte (Soda cáustica) → Sabão + Glicerol.\n- Polímeros de Adição e Condensação: Processo de formação dos plásticos (PET, PVC, Isopor, Nylon). O Enem foca muito na reciclagem e no impacto ambiental do descarte desses materiais.',
    },
    {
      titulo: '💡 Como Esse Tema Cai no Enem',
      conteudo:
        'A banca costuma colocar uma molécula de um poluente ou medicamento e perguntar se ela é mais solúvel na água ou no tecido adiposo (gordura). Procure pelos grupos polares (-OH, -COOH, -NH₂). Se a molécula tiver muitos desses grupos, ela é hidrofílica (solúvel em água). Se tiver apenas carbonos, é lipofílica (solúvel em gordura).',
    },
    {
      titulo: 'Resumo Prático',
      conteudo:
        '- Hidrocarboneto = Apenas C e H, altamente apolar e insolúvel em água.\n- Éster = Flavorizante (cheiro de fruta); Sabão = Saponificação (gordura + base).\n- Ligação de Hidrogênio = Força intermolecular mais forte, gera alto ponto de ebulição.',
    },
  ],
},

'Química|Estequiometria': {
  materia: 'Química',
  assunto: 'Estequiometria',
  introducao:
    'A estequiometria calcula as quantidades de reagentes e produtos envolvidos em uma reação química. No Enem, este tema é considerado de dificuldade média a difícil, pois exige precisão matemática e a aplicação de conceitos reais como pureza de reagentes, rendimento de processos industriais e identificação do reagente limitante.',
  secoes: [
    {
      titulo: '1. O Roteiro Infalível do Cálculo Estequiométrico',
      conteudo:
        'Para não errar nenhuma questão, siga sempre estes 4 passos na ordem:\n1º) Escreva a equação química descrita no texto.\n2º) Faça o Balanceamento da equação para respeitar a Lei de Lavoisier ("na natureza nada se perde, tudo se transforma").\n3º) Monte a proporção em Mols usando os coeficientes da equação balanceada.\n4º) Converta as unidades de acordo com o pedido do enunciado (Mol, Massa em gramas, Volume nas CNTP ou Número de Moléculas) e resolva a regra de três.\n💡 Lembrete: 1 Mol de qualquer gás nas CNTP ocupa sempre o volume de 22,4 Litros.',
    },
    {
      titulo: '2. Grau de Pureza dos Reagentes',
      conteudo:
        'Na vida real e nas indústrias, os reagentes não são 100% puros (vêm acompanhados de impurezas que não reagem, como terra ou areia). O Enem vai te dar uma massa e dizer que a pureza é de 80%, por exemplo.\n\n⚠️ Atenção: Você deve calcular a porcentagem de pureza LOGO NO INÍCIO da questão. Apenas a parte pura vai para a regra de três da reação. O resto é descartado.',
    },
    {
      titulo: '3. Rendimento da Reação e Reagente Limitante',
      conteudo:
        '- Rendimento: Nem toda reação consegue transformar 100% dos reagentes em produtos por causa de perdas no processo. Faça o cálculo estequiométrico normal fingindo que o rendimento é 100%. No final da questão, aplique a porcentagem do rendimento real dada pelo enunciado sobre o valor do produto encontrado.\n- Reagente Limitante: É o reagente que acaba primeiro e dita o fim da reação. O outro fica em Excesso. Se o Enem te der a massa dos dois reagentes, faça uma regra de três teste entre eles para descobrir quem está faltando (limitante) e faça todas as contas usando apenas ele.',
    },
    {
      titulo: '💡 Dica de Ouro para a Prova',
      conteudo:
        'As questões de estequiometria do Enem costumam ser longas e cansativas. Ganhe tempo simplificando as frações e simplificando os zeros na regra de três. Fique muito atento às unidades: o enunciado pode dar o reagente em toneladas (t) e pedir o produto em gramas (g). Converta tudo com calma antes de cruzar os dados.',
    },
    {
      titulo: 'Resumo Prático',
      conteudo:
        '- 1 Mol = Massa Molar (g) = 6 × 10²³ moléculas = 22,4 L (nas CNTP).\n- Pureza = Calcula no início da questão (trabalha apenas com a parte limpa).\n- Rendimento = Calcula no final da questão (aplica a perda sobre o produto gerado).',
    },
  ],
},

'Química|Soluções': {
  materia: 'Química',
  assunto: 'Soluções',
  introducao:
    'Soluções são misturas homogêneas compostas por um soluto (o que se dissolve) distribuído perfeitamente dentro de um solvente (o que dissolve). O Enem cobra muito a matemática das concentrações e a diluição associada a problemas ambientais (poluição de rios) e preparo de medicamentos ou soros.',
  secoes: [
    {
      titulo: '1. Concentração Comum vs. Concentração Molar',
      conteudo:
        'Você precisa dominar as duas principais formas de medir a força de uma solução:\n- Concentração Comum (C): Mede a massa do soluto em gramas por litro de solução. Fórmula: C = m ÷ V (g/L).\n- Concentração Molar ou Molaridade (M): Mede a quantidade de matéria em mols por litro de solução. É a unidade oficial dos laboratórios e a favorita da banca do Enem. Fórmula: M = n ÷ V  ou  M = m ÷ (MM · V), onde MM é a massa molar do soluto (mol/L).',
    },
    {
      titulo: '2. Diluição e Misturas (A Regra do Suco de Laranja)',
      conteudo:
        'Diluir significa adicionar apenas SOLVENTE (água) a uma solução já pronta. A quantidade de soluto não muda, mas o volume total aumenta, fazendo com que a concentração diminua (como colocar água em um suco muito doce).\n\nFórmula da Diluição:\nC₁ · V₁ = C₂ · V₂   ou   M₁ · V₁ = M₂ · V₂\n\nOnde o índice 1 representa a solução concentrada inicial e o índice 2 representa a solução diluída final.',
    },
    {
      titulo: '3. Titulação (Análise Volumétrica)',
      conteudo:
        'A titulação é um processo de laboratório usado para descobrir a concentração desconhecida de uma solução fazendo ela reagir com outra solução de concentração conhecida (padrão). O Enem adora misturar titulação com reações de Neutralização Ácido-Base (como descobrir a acidez do leite ou o teor de ácido no vinagre). Para resolver, use a estequiometria da reação entre o ácido e a base.',
    },
    {
      titulo: '💡 Fique Esperto no Enem',
      conteudo:
        'Muitas questões dão a concentração em título ou porcentagem em massa e densidade (d) e pedem para você descobrir a Molaridade. Existe uma fórmula rápida (mistura) que economiza minutos preciosos de prova:\n\nM = (1.000 · d · T) ÷ MM\n\nOnde d é a densidade (g/mL) e T é o título (porcentagem na forma decimal, ex: 10% = 0,1). Decorar esse macete acelera muito sua resolução.',
    },
    {
      titulo: 'Resumo Prático',
      conteudo:
        '- Diluição = Adiciona água, o volume aumenta e a concentração cai (C₁V₁ = C₂V₂).\n- Concentração Molar = Expressa em mol/L (Mols de soluto divididos pelo volume da solução).\n- Água = O solvente universal das soluções aquosas.',
    },
  ],
},

  'Química|Ligações químicas': {
  materia: 'Química',
  assunto: 'Ligações químicas',
  introducao:
    'As ligações químicas explicam como os átomos se unem para alcançar a estabilidade eletrônica (Regra do Octeto). No Enem, este assunto é cobrado relacionando o tipo de ligação às propriedades físicas macroscópicas dos materiais, como a capacidade de conduzir eletricidade, dureza e pontos de fusão e ebulição.',
  secoes: [
    {
      titulo: '1. Ligação Iônica (Transferência de Elétrons)',
      conteudo:
        'Ocorre entre um metal (que quer perder elétrons e vira um cátion) e um não metal (que quer ganhar elétrons e vira um ânion). A união ocorre por forte atração eletrostática.\n\nPropriedades dos Compostos Iônicos (Muito cobradas!):\n- Formam retículos cristalinos sólidos e duros, porém quebradiços em temperatura ambiente.\n- Possuem pontos de fusão e ebulição muito altos.\n- ⚠️ SÓ conduzem corrente elétrica se estiverem DERRETIDOS (fase líquida/fusão) ou DISSOLVIDOS EM ÁGUA (solução aquosa), pois nessas condições os íons ficam livres para se movimentar. No estado sólido, eles NÃO conduzem eletricidade.',
    },
    {
      titulo: '2. Ligação Covalente ou Molecular (Compartilhamento)',
      conteudo:
        'Ocorre entre ametais e/ou hidrogênio. Como ambos precisam ganhar elétrons para atingir o octeto, eles compartilham pares eletrônicos.\n\nPropriedades dos Compostos Moleculares:\n- Podem ser encontrados nos três estados físicos (sólido, líquido ou gasoso) em temperatura ambiente.\n- Possuem pontos de fusão e ebulição mais baixos que os compostos iônicos.\n- Em regra, NÃO conduzem eletricidade em nenhum estado físico (com exceção de ácidos em água, que sofrem ionização, e do grafite).',
    },
    {
      titulo: '3. Ligação Metálica (Mar de Elétrons)',
      conteudo:
        'Ocorre exclusivamente entre átomos de metais. Os metais possuem baixa eletronegatividade, tendendo a perder seus elétrons da camada de valência. Esses elétrons saem dos átomos e formam uma nuvem livre interligando os cátions fixos (Teoria do Mar de Elétrons).\n\nPropriedades dos Metais:\n- Excelentes condutores de calor e eletricidade tanto no estado sólido quanto líquido, graças à alta mobilidade dos elétrons livres.\n- Apresentam maleabilidade (capacidade de virar chapas/folhas) e ductilidade (capacidade de virar fios).',
    },
    {
      titulo: '💡 Como Ligações Químicas Cai no Enem',
      conteudo:
        'A prova adora colocar tabelas experimentais mostrando três substâncias desconhecidas (X, Y e Z) com seus respectivos pontos de fusão e testes de condutividade elétrica. Lembre-se do macete: se o composto conduz eletricidade no estado sólido, é um Metal. Se conduz apenas dissolvido ou derretido, é Iônico. Se não conduz de jeito nenhum, é Molecular.',
    },
    {
      titulo: 'Resumo Prático',
      conteudo:
        '- Iônica = Metal + Ametal. Conduz eletricidade apenas em água (solução) ou fundido.\n- Covalente = Ametal + Ametal. Compartilha elétrons, forma moléculas polares ou apolares.\n- Metálica = Metal + Metal. Elétrons livres garantem condução elétrica no estado sólido.',
    },
  ],
},

'Química|Eletroquímica': {
  materia: 'Química',
  assunto: 'Eletroquímica',
  introducao:
    'A eletroquímica estuda os processos que envolvem a transferência de elétrons para transformar energia química em energia elétrica (Pilhas) ou usar energia elétrica para forçar reações químicas (Eletrólise). É um dos temas mais garantidos e frequentes na prova de Ciências da Natureza.',
  secoes: [
    {
      titulo: '1. O Coração da Eletroquímica: Oxirredução',
      conteudo:
        'Toda reação eletroquímica depende de alguém perder elétrons e alguém ganhar elétrons simultaneamente:\n- Oxidação: É a PERDA de elétrons. O número de oxidação (Nox) do elemento aumenta. O elemento que oxida provoca a redução do outro, sendo chamado de Agente Redutor.\n- Redução: É o GANHO de elétrons. O número de oxidação (Nox) diminui. O elemento que reduz provoca a oxidação do outro, sendo chamado de Agente Oxidante.\n💡 Mnemônico para a prova: POR → Perde, Oxida, Redutor. / GER → Ganha, Eletrons, Reduz.',
    },
    {
      titulo: '2. Pilhas e Baterias (Processo Espontâneo)',
      conteudo:
        'A pilha gera corrente elétrica a partir de uma reação química espontânea (ΔE° > 0). Ela é dividida em dois polos:\n- Ânodo (Polo Negativo): É onde ocorre a OXIDAÇÃO. Ele perde elétrons, sofre corrosão (sua massa diminui) e atrai os ânions.\n- Cátodo (Polo Positivo): É onde ocorre a REDUÇÃO. Ele recebe os elétrons, sofre deposição (sua massa aumenta) e atrai os cátions.\n💡 Mnemônico definitivo para os polos: CRAO → Cátodo Reduz, Ânodo Oxida (Consoante com consoante, vogal com vogal). Os elétrons fluem SEMPRE do Ânodo para o Cátodo.\n\nCálculo da ddp (ΔE°): ΔE° = E°_redução (maior) − E°_redução (menor).',
    },
    {
      titulo: '3. Eletrólise (Processo Não Espontâneo)',
      conteudo:
        'A eletrólise utiliza uma corrente elétrica externa de uma fonte (como uma tomada ou pilha) para forçar uma reação química que não aconteceria sozinha (ΔE° < 0). É usada industrialmente para banhar joias com ouro ou prata (Galvanoplastia), produzir alumínio e purificar metais.\n\n⚠️ Atenção: Na eletrólise, o mnemônico CRAO continua valendo (Cátodo Reduz, Ânodo Oxida), mas os sinais dos polos se invertem: o Ânodo é o polo positivo e o Cátodo é o polo negativo.',
    },
    {
      titulo: '4. Proteção contra Corrosão (Metal de Sacrifício)',
      conteudo:
        'A ferrugem ocorre quando o ferro entra em contato com o oxigênio e a água, sofrendo oxidação. Para proteger estruturas de ferro (como navios, tanques industriais e tubulações), os engenheiros conectam a elas um bloco de **Metal de Sacrifício**.\n\nEsse metal deve possuir um Potencial de Oxidação MAIOR (ou menor potencial de redução) do que o ferro. Assim, o metal de sacrifício (geralmente Magnésio ou Zinco) oxida no lugar do ferro, sofrendo a corrosão e salvando a estrutura principal.',
    },
    {
      titulo: 'Resumo Prático',
      conteudo:
        '- CRAO = Cátodo sempre Reduz; Ânodo sempre Oxida (vale para pilhas e eletrólise).\n- Pilha = Química vira Eletricidade (Espontânea). Elétrons vão do Ânodo para o Cátodo.\n- Metal de sacrifício = Metal que oxida mais fácil (maior potencial de oxidação) para proteger outro.',
    },
  ],
},

  // =========================
  // HISTÓRIA
  // =========================

  "História|Brasil Colônia": {
  materia: "História",
  assunto: "Brasil Colônia",
  introducao:
    "O período colonial estende-se de 1500 a 1822 e marca a montagem do Estado português no território brasileiro. No Enem, este assunto é o mais cobrado de toda a História Geral e do Brasil, com foco absoluto na engrenagem econômica do açúcar, na mineração, na violência da escravidão e nas ricas formas de resistência de negros e indígenas.",
  secoes: [
    {
      titulo: "1. O Exclusivo Comercial e o Modelo de Plantation",
      conteudo:
        "A relação entre a Metrópole (Portugal) e a Colônia (Brasil) era ditada pelo Pacto Colonial (ou Exclusivo Metropolitano): o Brasil só podia vender matérias-primas para Portugal e comprar produtos manufaturados deles.\nPara explorar a terra, os portugueses montaram a estrutura de Plantation, que se sustenta em 4 pilares básicos que caem em todas as provas:\n- Latifúndio: Grandes extensões de terra.\n- Monocultura: Produção de um único produto principal (primeiro o Açúcar, depois o Café).\n- Mão de obra escravizada: Uso da violência e desumanização de povos indígenas e africanos.\n- Voltagem para a Exportação: Toda a produção servia para abastecer o mercado europeu."
    },
    {
      titulo: "2. A Economia do Açúcar vs. A Mineração",
      conteudo:
        "O Enem adora cobrar as diferenças sociais dessas duas grandes eras econômicas:\n- Ciclo do Açúcar (Nordeste): Sociedade rural, patriarcal, aristocrática e sem mobilidade social. Quem mandava era o Senhor de Engenho; na base, estavam os escravizados.\n- Ciclo do Ouro (Minas Gerais / Século XVIII): A descoberta de ouro provocou a urbanização do interior do Brasil. A sociedade tornou-se mais dinâmica, permitindo o surgimento de uma classe média urbana (comerciantes, artesãos, alfaiates) e uma pequena chance de mobilidade social através da compra da alforria."
    },
    {
      titulo: "3. Resistência e Conflitos Emancipacionistas",
      conteudo:
        "Os povos escravizados nunca aceitaram a dominação passivamente. A resistência manifestava-se todos os dias através de revoltas, quebra de ferramentas, abortos e, principalmente, a formação de Quilombos (como o Quilombo dos Palmares), que funcionavam como sociedades livres e alternativas no interior das matas.\nNo fim do período colonial, o arrocho de impostos gerou revoltas contra Portugal:\n- Inconfidência Mineira (1789): Movimento de elite (elitista) motivado pela cobrança forçada de impostos (Derrama). Queria a independência apenas de Minas Gerais e NÃO propunha o fim da escravidão.\n- Conjuração Baiana (1798): Movimento popular e negro. Defendia a independência da Bahia, a proclamação da República e a ABOLIÇÃO imediata da escravidão."
    },
    {
      titulo: "💡 Como Esse Tema Cai no Enem",
      conteudo:
        "As questões costumam trazer textos sobre a vida nos engenhos ou documentos sobre o Quilombo de Palmares e perguntar qual o significado político dessas estruturas. O gabarito correto quase sempre envolve expressões interpretativas como: 'subversão da ordem colonial vigente', 'manutenção de traços culturais ancestrais como forma de resistência' ou 'violência estrutural da elite latifundiária'."
    },
    {
      titulo: "Resumo Prático",
      conteudo:
        "- Pacto Colonial = Brasil produz para o lucro de Portugal.\n- Plantation = Latifúndio + Monocultura + Escravidão + Exportação.\n- Mineração = Provocou a urbanização, interiorização do Brasil e o nascimento de uma classe média."
    }
  ]
},

"História|Brasil Império": {
  materia: "História",
  assunto: "Brasil Império",
  introducao:
    "O Brasil Império compreende o período entre a Independência (1822) e a Proclamação da República (1889). No Enem, este tema é abordado destacando a contradição de um país que se declarou livre na teoria, mas manteve a escravidão e o latifúndio na prática, além das intensas revoltas populares que tentaram fragmentar o país durante a Regência.",
  secoes: [
    {
      titulo: "1. Primeiro Reinado e a Outorga de 1824",
      conteudo:
        "Após o Grito do Ipiranga, D. Pedro I governou de forma autoritária. Em 1824, ele fechou a Assembleia Constituinte e OUTORGOU (impôs à força) a primeira Constituição do Brasil.\nAs duas grandes marcas da Constituição de 1824 que caem direto na prova são:\n- Poder Moderador: Um quarto poder exclusivo do Imperador que ficava ACIMA dos poderes Executivo, Legislativo e Judiciário, permitindo que D. Pedro I vetasse qualquer lei.\n- Voto Censitário: O direito ao voto era determinado pela renda. Apenas homens ricos podiam votar ou se candidatar, excluindo a maioria do povo brasileiro."
    },
    {
      titulo: "2. O Período Regencial (A instabilidade extrema)",
      conteudo:
        "Quando D. Pedro I abdicou em 1831, seu filho tinha apenas 5 anos. O país foi governado por Regentes. Este foi o período mais violento e instável do Império, repleto de revoltas que contestavam o poder central do Rio de Janeiro:\n- Revoltas de Elite / Separatistas: Farroupilha (RS) e Sabinada (BA).\n- Revoltas Populares / Miseráveis: Cabanagem (PA) e Balaiada (MA), onde o povo pobre exigia terra e dignidade.\n- Revolta dos Malês (BA, 1835): Uma revolta única de escravizados muçulmanos alfabetizados que lutaram pela libertação dos negros e pela liberdade religiosa."
    },
    {
      titulo: "3. Segundo Reinado e a Lei de Terras de 1850",
      conteudo:
        "D. Pedro II assumiu o poder através do Golpe da Maioridade (1840). O período foi estabilizado graças à riqueza do Café no Oeste Paulista.\n⚠️ Assunto Chave para o Enem: Em 1850, foi assinada a **Lei de Terras**. Ela determinava que as terras públicas só podiam ser adquiridas através de COMPRA em dinheiro, e não mais por posse.\nO impacto social disso foi trágico: os imigrantes europeus e os negros libertos foram impedidos de se tornarem proprietários de terra, garantindo que o chão do Brasil continuasse concentrado nas mãos dos grandes fazendeiros (coronéis)."
    },
    {
      titulo: "4. A Crise do Império e o Processo de Abolição",
      conteudo:
        "A abolição da escravidão em 1888 foi fruto de uma pressão massiva do Movimento Abolicionista (liderado por intelectuais negros como Luiz Gama e José do Patrocínio) e da Inglaterra, e não apenas uma bondade da Princesa Isabel. Ao assinar a Lei Áurea sem dar indenizações aos fazendeiros e sem dar terras ou empregos aos ex-escravizados, a monarquia perdeu o apoio dos barões do café e ruiu. Os militares derrubaram o imperador em 1889."
    },
    {
      titulo: "💡 Dica de Ouro para a Prova",
      conteudo:
        "Sempre que o Enem trouxer textos sobre o Segundo Reinado, atente-se à transição do trabalho escravo para o imigrante assalariado. A elite adotou teorias de racismo científico (como o Darwinismo Social) para justificar a vinda de europeus com o objetivo oculto de promover o 'branqueamento' da população brasileira ao longo das gerações."
    },
    {
      titulo: "Resumo Prático",
      conteudo:
        "- Poder Moderador = Garantiu o autoritarismo de D. Pedro I na Constituição de 1824.\n- Período Regencial = Época de violentas revoltas populares e disputas territoriais.\n- Lei de Terras (1850) = Excluiu pobres, negros e imigrantes do direito à propriedade de terra no Brasil."
    }
  ]
},

"História|República": {
  materia: "História",
  assunto: "República",
  introducao:
    "A história republicana do Brasil começa em 1889 e estende-se até os dias de hoje. No Enem, este bloco foca de forma esmagadora nas estruturas políticas excludentes da República Velha (1889-1930), na Era Vargas e seus direitos trabalhistas, no autoritarismo da Ditadura Militar e no processo de redemocratização do país.",
  secoes: [
    {
      titulo: "1. República Velha: Coronelismo e Voto de Cabresto",
      conteudo:
        "A primeira fase da república foi controlada pelas oligarquias do café com leite (SP e MG). A base desse poder funcionava em uma pirâmide rígida:\n- Coronelismo: Os grandes fazendeiros (coronéis) usavam o controle da terra e a violência para obrigar os eleitores da região a votarem nos candidatos indicados por eles (Voto de Cabresto).\n- Voto Aberto: Como o voto não era secreto, os eleitores sofriam ameaças físicas se não obedecessem ao coronel.\n- Política dos Governadores: Um pacto de corrupção mútua onde o Presidente apoiava os governadores estaduais, os governadores apoiavam os coronéis locais, e os coronéis garantiam as fraudes eleitorais nas urnas para manter o mesmo grupo no poder."
    },
    {
      titulo: "2. Era Vargas (1930-1945) e o Trabalhismo",
      conteudo:
        "Getúlio Vargas assumiu o poder quebrando a hegemonia paulista. Ele revolucionou a relação do Estado com as massas através do Trabalhismo:\n- Criação da CLT (Consolidação das Leis do Trabalho): Garantiu direitos como salário mínimo, férias remuneradas e jornada de 8 horas. No entanto, Vargas usava as leis trabalhistas para controlar os sindicatos (Paternalismo / Pai dos Pobres).\n- Estado Novo (1937-1945): Fase ditatorial de Vargas. Criou o DIP (Departamento de Imprensa e Propaganda) para censurar jornais e criar o culto à imagem de Vargas como o herói nacional nas escolas e no rádio (A Hora do Brasil)."
    },
    {
      titulo: "3. A Ditadura Militar (1964-1985) e o AI-5",
      conteudo:
        "O golpe militar de 1964 derrubou João Goulart. No Enem, a ditadura é cobrada através do endurecimento do regime através dos Atos Institucionais (AI):\n- AI-5 (1968): O ápice da repressão. Fechou o Congresso Nacional, suspendeu o direito ao *habeas corpus* para crimes políticos, permitiu a censura prévia de músicas, jornais e peças de teatro, abrindo caminho para prisões arbitrárias e torturas promovidas pelos órgãos do Estado (DOI-CODI)."
    },
    {
      titulo: "4. Redemocratização e a Constituição Cidadã de 1988",
      conteudo:
      "A crise econômica (hiperinflação) e o movimento popular das 'Diretas Já' enfraqueceram os militares. Em 1985, o Brasil voltou a ter um presidente civil e, em 1988, foi promulgada a Constituição Cidadã.\nEssa Carta Magna é fundamental para o Enem porque consolidou o Brasil como um Estado Democrático de Direito, criminalizou o racismo, garantiu o voto para analfabetos, deu direitos de demarcação de terras aos povos indígenas e criou o SUS (Sistema Único de Saúde)."
},
{
titulo: "💡 Fique Esperto na Prova",
conteudo:
"Questões sobre a República Velha quase sempre trazem charges ironizando o 'Voto de Cabresto' com eleitores em formato de burro sendo guiados pelo coronel até as urnas. A resposta correta vai denunciar o cariz oligárquico da nossa primeira república e o controle oligárquico do aparato eleitoral."
},
{
titulo: "Resumo Prático",
conteudo:
"- República Velha = Voto de cabresto aberto, fraudes nas urnas e controle dos fazendeiros (café com leite).\n- Era Vargas = Criação dos direitos trabalhistas e forte censura/propaganda no Estado Novo.\n- Constituição de 1988 = Garantiu direitos sociais amplos, igualdade jurídica e o voto universal secreto."
}
]
},

  "História|Era Vargas": {
  materia: "História",
  assunto: "Era Vargas",
  introducao:
    "A Era Vargas (1930-1945) marca a modernização do Estado brasileiro e a transição de uma economia puramente agrícola para uma nação industrializada. O Enem cobra este tema focando na ambiguidade de Getúlio Vargas: ao mesmo tempo em que garantiu direitos sociais históricos aos trabalhadores, governou de forma autoritária e repressiva.",
  secoes: [
    {
      titulo: "1. A centralização do poder e a Revolução de 1932",
      conteudo:
        "Getúlio Vargas assumiu o poder após a Revolução de 1930, depondo Washington Luís e impedindo a posse de Júlio Prestes, quebrando a hegemonia das oligarquias paulistas. No início, Vargas governou sem uma Constituição, nomeando interventores para os estados. São Paulo não aceitou perder o controle político e explodiu na **Revolução Constitucionalista de 1932**, exigindo uma nova Carta Magna. Embora São Paulo tenha sido derrotado militarmente, Vargas convocou uma Assembleia Constituinte, promulgando a Constituição de 1934, que trouxe o voto secreto e o voto feminino."
    },
    {
      titulo: "2. O Trabalhismo e a CLT como ferramenta de controle",
      conteudo:
        "Vargas percebeu que a classe operária urbana estava crescendo com a industrialização. Em vez de reprimir as greves como faziam os governos anteriores, ele adotou a estratégia do **Trabalhismo** (ou Populismo):\n- Em 1943, unificou as leis na CLT (Consolidação das Leis do Trabalho), garantindo carteira assinada, salário mínimo, descanso semanal e férias remuneradas.\n- ⚠️ O Segredo do Enem: Esses direitos não foram uma 'bondade' ou presente do 'Pai dos Pobres'. Foi uma estratégia política para esvaziar os movimentos de esquerda (comunistas e anarquistas) e atrelar os sindicatos diretamente ao controle do Ministério do Trabalho, proibindo greves livres."
    },
    {
      titulo: "3. O Estado Novo (1937-1945) e o DIP",
      conteudo:
        "Em 1937, alegando a existência de um falso plano comunista para tomar o poder (Plano Cohen), Vargas deu um autogolpe e inaugurou o **Estado Novo**, a fase ditatorial da sua era. Ele fechou o Congresso, cancelou as eleições e outorgou uma Constituição autoritária (apelidada de 'Polaca' por se inspirar no fascismo polonês).\nPara se sustentar no poder, criou o **DIP (Departamento de Imprensa e Propaganda)**, responsável por duas missões que caem em toda prova:\n- Censura Prévia: Barrar qualquer crítica ao governo em jornais, rádios, teatros e cinemas.\n- Culto à Personalidade: Criar cartilhas escolares e programas de rádio oficiais (como a 'Hora do Brasil') para desenhar Getúlio Vargas como o herói protetor da nação."
    },
    {
      titulo: "4. Nacionalismo Econômico e Substituição de Importações",
      conteudo:
        "Com a Segunda Guerra Mundial, o Brasil não conseguia comprar produtos industrializados da Europa. Vargas aproveitou a crise para aplicar a política de **Substituição de Importações**, investindo pesado nas indústrias de base estatais. Ele fundou a Companhia Siderúrgica Nacional (CSN), a Vale do Rio Doce e a Fábrica Nacional de Motores (FNM), criando a infraestrutura industrial pesada que o país não possuía."
    },
    {
      titulo: "💡 Como Esse Tema Cai no Enem",
      conteudo:
        "As questões costumam trazer cartazes do DIP mostrando Vargas sorrindo cercado por crianças ou fotos de operários comemorando o 1º de maio. O gabarito correto quase sempre vai abordar o 'uso da legislação social como mecanismo de cooptação política das massas' ou a 'construção da imagem do governante através de aparatos de propaganda estatal'."
    },
    {
      titulo: "Resumo Prático",
      conteudo:
        "- Constituição de 1934 = Garantiu o voto secreto e o voto das mulheres no Brasil.\n- CLT (1943) = Deu direitos reais aos trabalhadores, mas retirou a autonomia dos sindicatos.\n- DIP = Órgão do Estado Novo responsável pela censura e pela exaltação da imagem de Vargas."
    }
  ]
},

"História|Ditadura Militar": {
  materia: "História",
  assunto: "Ditadura Militar",
  introducao:
    "A Ditadura Militar brasileira durou de 1964 a 1985 e foi marcada pelo autoritarismo, censura prévia, violação dos direitos humanos e um endividamento externo massivo. No Enem, as questões abordam os Atos Institucionais de exceção, os movimentos de resistência cultural/guerrilha e as contradições econômicas do chamado Milagre Econômico.",
  secoes: [
    {
      titulo: "1. O Golpe de 1964 e a Doutrina de Segurança Nacional",
      conteudo:
        "No contexto da Guerra Fria, o presidente João Goulart (Jango) propôs as Reformas de Base (reforma agrária, educacional e tributária). Setores conservadores da Igreja, da grande mídia, dos empresários e das Forças Armadas, apoiados pelos Estados Unidos, acusaram o presidente de tentar implantar o comunismo. Em 31 de março de 1964, um golpe civil-militar depôs Jango, iniciando um regime pautado na Doutrina de Segurança Nacional, que enxergava qualquer opositor político como um 'inimigo interno' que precisava ser eliminado."
    },
    {
      titulo: "2. O Endurecimento do Regime e o AI-5 (1968)",
      conteudo:
        "A ditadura foi se tornando mais violenta ao longo dos anos através dos Atos Institucionais (AI). O ápice do autoritarismo ocorreu no governo do General Costa e Silva com a assinatura do **AI-5** em dezembro de 1968. O AI-5 suspendeu as garantias constitucionais e permitiu ao presidente:\n- Fechar o Congresso Nacional e as Assembleias Estaduais quando quisesse.\n- Cassar mandatos políticos e suspender direitos de qualquer cidadão por 10 anos.\n- Acabar com o *Habeas Corpus* para crimes políticos, permitindo que os órgãos de repressão (como o DOI-CODI) prendessem pessoas sem ordem judicial, abrindo caminho para a tortura institucionalizada."
    },
    {
      titulo: "3. O Milagre Econômico e a Ditadura dos Números",
      conteudo:
        "Durante o governo do General Médici (1969-1974), conhecido como os 'Anos de Chumbo', a economia brasileira cresceu cerca de 10% ao ano, fenômeno chamado de **Milagre Econômico**. O regime utilizou o nacionalismo ufanista ('Brasil: ame-o ou deixe-o') e a conquista do tricampeonato de futebol de 1970 para camuflar as torturas.\n⚠️ Foco do Enem: Esse crescimento sustentou-se no arrocho salarial (congelamento de salários dos mais pobres) e em empréstimos internacionais pesados. O Ministro da Economia, Delfim Netto, dizia que era preciso 'fazer o bolo crescer para depois dividir'. O bolo cresceu, mas nunca foi dividido, gerando uma desigualdade social brutal e uma dívida externa explosiva que quebrou o país nos anos 1980."
    },
    {
      titulo: "4. Resistências e o Longo Processo de Abertura",
      conteudo:
        "A resistência ao regime ocorreu em várias frentes: na clandestinidade (guerrilhas rurais e urbanas), no movimento operário (greves do ABC Paulista lideradas por Lula) e na cultura (músicas de Chico Buarque, Geraldo Vandré e o movimento da Tropicália).\nA partir de 1974, o General Geisel iniciou uma abertura política descrita como 'lenta, gradual e segura'. Em 1979, Figueiredo assinou a Lei da Anistia, que permitiu o retorno dos exilados, mas também perdoou os militares que praticaram tortura. Em 1984, a campanha popular das **Diretas Já** levou milhões às ruas exigindo o voto para presidente, pavimentando o caminho para a redemocratização e para a Constituição de 1988."
    },
    {
      titulo: "💡 Dica de Ouro para a Prova",
      conteudo:
        "O Enem cobra muito a resistência cultural da MPB e do Teatro Oficina. Fique atento a letras de música com metáforas geométricas ou cotidianas (como 'Cálice' de Chico Buarque e Gilberto Gil, onde o som de 'cálice' remete ao imperativo 'cale-se'). A resposta correta sempre denunciará as estratégias artísticas para contornar os mecanismos de censura prévia institucional."
    },
    {
      titulo: "Resumo Prático",
      conteudo:
        "- AI-5 (1968) = Retirou o direito de defesa (habeas corpus) e institucionalizou a violência do Estado.\n- Milagre Econômico = Crescimento do PIB baseado em dívida externa e concentração de renda (ricos mais ricos, pobres mais pobres).\n- Diretas Já = Grande mobilização popular que exigia eleições diretas para encerrar o ciclo militar."
    }
  ]
},

"História|História Geral": {
  materia: "História",
  assunto: "História Geral",
  introducao:
    "A História Geral analisa a evolução social, política e econômica das civilizações humanas desde a Antiguidade clássica até a globalização contemporânea. No Enem, os temas preferidos da banca são a democracia grega (e suas exclusões), as transformações das relações de trabalho nas Revoluções Industriais e a luta por direitos humanos modernos.",
  secoes: [
    {
      titulo: "1. Antiguidade Clássica: O Berço Excludente da Cidadania",
      conteudo:
        "O Enem ama comparar a organização política de duas cidades-estado gregas:\n- Atenas: Criadora da Democracia Direta. Os cidadãos debatiam e votavam as leis diretamente na praça pública (Ágora). No entanto, essa cidadania era restrita: apenas homens, adultos, livres e nascidos em Atenas eram cidadãos. Mulheres, escravizados e estrangeiros (metecos) eram totalmente excluídos.\n- Esparta: Sociedade militarista, aristocrática e oligárquica. O foco era a formação de soldados perfeitos para a guerra, sustentada pelo trabalho servil dos hilotas."
    },
    {
      titulo: "2. Idade Média e o Sistema Feudal",
      conteudo:
      "A Idade Média europeia não foi uma 'Idade das Trevas', mas sim um período com lógica própria. A economia era baseada no Feudalismo: produção agrícola autossuficiente dentro dos feudos, sem moedas e sem comércio forte. A sociedade era dividida em três ordens fixas: o Clero (os que rezam), a Nobreza (os que guerreiam) e os Servos (os que trabalham). A relação política era baseada na Suserania e Vassalagem, um pacto de fidelidade e apoio militar firmado exclusivamente entre nobres."
},
{
titulo: "3. As Grandes Revoluções Modernas (Industrial e Francesa)",
conteudo:
"A Idade Moderna ruiu com a chegada de duas grandes revoluções no século XVIII:\n- Revolução Industrial (Inglaterra): Substituiu o trabalho artesanal manual pelas máquinas (Maquinofatura). Criou duas novas classes sociais em eterno conflito: a Burguesia (donos das fábricas) e o Proletariado (trabalhadores que vendiam sua força de trabalho em troca de salários miseráveis). Consolidou o tempo controlado pelo relógio da fábrica e a alienação do trabalhador.\n- Revolução Francesa (1789): Derrubou o Absolutismo do Rei e os privilégios da nobreza. Inspirada no Iluminismo, publicou a Declaração dos Direitos do Homem e do Cidadão, espalhando os conceitos de igualdade jurídica perante a lei e liberdade individual pelo mundo ocidental."
},
{
  titulo: "4. O Século XX: Imperialismo e Guerra Fria",
conteudo:
"O mundo contemporâneo é marcado pelas disputas geopolíticas. No século XIX, as potências europeias invadiram a África e a Ásia para roubar matérias-primas (Neocolonialismo / Imperialismo), justificando a violência através da farsa da 'missão civilizadora' (racismo científico). Essa disputa gerou as duas Guerras Mundiais. Após 1945, o mundo foi dividido na Guerra Fria, um conflito ideológico, cultural e militar indireto entre o bloco Capitalista (EUA) e o bloco Socialista (URSS), que moldou a geopolítica global até a queda do Muro de Berlim em 1989."
},
{
titulo: "💡 Fique Esperto no Enem",
conteudo:
"Questões de História Geral costumam usar textos filosóficos (como Aristóteles ou pensadores iluministas) ou relatos de operários do século XIX. Foque sempre na alternativa que discuta as contradições sociais: as exclusões da democracia ateniense, a exploração do trabalhador na fábrica ou as justificativas ideológicas para a invasão da África."
},
{
  titulo: "Resumo Prático",
conteudo:
"- Democracia Ateniense = Direta e participativa, porém altamente excludente (mulheres, escravos e estrangeiros não votavam).\n- Revolução Industrial = Criou a jornada de trabalho rígida controlada pelo relógio e a divisão extrema de tarefas.\n- Iluminismo/Revolução Francesa = Destruiu os privilégios de sangue da nobreza e criou a igualdade civil perante a lei."
}
]
},

  // =========================
  // GEOGRAFIA
  // =========================

  "Geografia|Geografia do Brasil": {
  materia: "Geografia",
  assunto: "Geografia do Brasil",
  introducao:
    "A geografia do Brasil analisa a organização do espaço nacional, englobando seus aspectos demográficos, econômicos e regionais. No Enem, este tema foca na concentração histórica de renda e infraestrutura no Sudeste, na expansão recente da fronteira agrícola em direção ao Centro-Oeste e ao Norte (MATOPIBA) e nos fluxos migratórios internos.",
  secoes: [
    {
      titulo: "1. Regionalização Oficial vs. Complexos Géoecônomicos",
      conteudo:
        "Para entender as questões do Enem, você precisa dominar as duas principais formas de dividir o mapa do Brasil:\n- Regionalização do IBGE (1970): Divide o país em 5 regiões políticas (Norte, Nordeste, Centro-Oeste, Sudeste e Sul) respeitando as fronteiras dos estados.\n- Complexos Géoecônomicos (Geoeconômica de Pedro Geiger): Divide o país em apenas 3 grandes regiões que NÃO respeitam as fronteiras estaduais, focando nas características históricas e econômicas: Amazônia (baixa densidade e foco ambiental), Nordeste (repulsão demográfica histórica e problemas socioeconômicos) e Centro-Sul (o coração econômico, industrial e agrícola do país)."
    },
    {
      titulo: "2. A Dinâmica Demográfica e as Migrações Internas",
      conteudo:
        "O perfil da população brasileira mudou. Estamos vivenciando uma transição demográfica: queda na taxa de natalidade (as mulheres têm menos filhos) e aumento da expectativa de vida (envelhecimento da população), o que exige reformas na previdência e na saúde.\nNas migrações internas, o cenário mudou:\n- Século XX (Anos 50 a 80): Êxodo rural massivo e migração interregional, principalmente de nordestinos em direção ao Sudeste (busca por emprego na indústria).\n- Século XXI: Predomina a Migração de Retorno (pessoas voltando para o Nordeste devido ao desenvolvimento local) e a migração intraregional (mudança para cidades médias do interior, fugindo do caos das metrópoles)."
    },
    {
      titulo: "3. O Avanço da Fronteira Agrícola e o MATOPIBA",
      conteudo:
        "O campo brasileiro é altamente produtivo, mas marcado pela concentração de terras (Latifúndios) e pelo avanço do Agronegócio voltado para a exportação de commodities (como soja e carne). O Enem cobra muito a destruição do Cerrado e da Amazônia provocada pelo avanço da fronteira agrícola. Fique de olho no acrônimo **MATOPIBA** (Maranhão, Tocantins, Piauí e Bahia), a região que se tornou a grande fronteira de expansão da soja no Brasil atual."
    },
    {
      titulo: "💡 Como Esse Tema Cai no Enem",
      conteudo:
        "As questões costumam trazer pirâmides etárias ou mapas de fluxos populacionais e perguntar sobre as transformações do espaço brasileiro. O gabarito correto quase sempre abordará o 'adensamento das redes de transporte no interior do país', a 'desconcentração industrial do Sudeste para outras regiões' ou os 'impactos socioambientais da modernização dolorosa do campo'."
    },
    {
      titulo: "Resumo Prático",
      conteudo:
        "- Centro-Sul = Centro géoecônomico que concentra o PIB, a indústria e a agricultura moderna.\n- Migração atual = Foco em cidades médias do interior e migração de retorno ao Nordeste.\n- MATOPIBA = Fronteira agrícola moderna da soja que devasta o Cerrado nordestino."
    }
  ]
},

"Geografia|Globalização": {
  materia: "Geografia",
  assunto: "Globalização",
  introducao:
    "A globalização é o processo de integração econômica, cultural, política e tecnológica do planeta, consolidado após o fim da Guerra Fria. No Enem, este tema é abordado sob uma perspectiva crítica, analisando a exclusão digital, o poder das empresas transnacionais e a nova Divisão Internacional do Trabalho (DIT).",
  secoes: [
    {
      titulo: "1. A Compressão Espaço-Tempo e a Redes Mundiais",
      conteudo:
        "O geógrafo David Harvey cunhou o termo 'Compressão Espaço-Tempo' para explicar que os avanços nos transportes (aviões a jato, trens de alta velocidade) e nas telecomunicações (internet, satélites, fibra óptica) criaram a sensação de que o mundo encolheu. Hoje, os fluxos financeiros mudam de país em segundos. O mundo passou a ser organizado em **Redes** (nós interconectados), onde as Cidades Globais (como Nova York, Londres, São Paulo) funcionam como os grandes centros de comando dessa teia."
    },
    {
      titulo: "2. A Nova Divisão Internacional do Trabalho (DIT)",
      conteudo:
        "O modelo de produção mudou com a globalização. Antigamente (DIT Clássica), as colônias davam matéria-prima e as metrópoles vendiam produtos industrializados. Na **Nova DIT**:\n- Países Desenvolvidos: Concentram a sede das grandes empresas transnacionais, a tecnologia de ponta, a pesquisa científica e os lucros financeiros.\n- Países em Desenvolvimento (como o Brasil): Fornecem matérias-primas (commodities), mão de obra barata, incentivos fiscais e abrigam fábricas terceirizadas de montagem, sofrendo com a poluição ambiental local."
    },
    {
      titulo: "3. Fragmentação da Produção e Desemprego Estrutural",
      conteudo:
        "As empresas transnacionais não produzem mais um carro ou celular em um único lugar. Elas fragmentam a produção: desenham o software nos EUA, compram peças na Ásia e montam no México para baratear os custos. Esse processo gerou o **Desemprego Estrutural**: a substituição de trabalhadores por máquinas e sistemas informatizados, forçando o crescimento do mercado de trabalho informal (uberização) no mundo todo."
    },
    {
      titulo: "💡 Dica de Ouro para a Prova",
      conteudo:
        "O Enem adora os textos do geógrafo brasileiro Milton Santos. Ele dividia a globalização em três visões: a fábula (como ela é vendida: um mundo feliz e conectado), a perversidade (como ela realmente é: gerando fome, desemprego e exclusão para quem não tem acesso à tecnologia) e a possibilidade (uma outra globalização, solidária e focada nas necessidades humanas). Entender essa crítica do Milton Santos garante muitas questões!"
    },
    {
      titulo: "Resumo Prático",
      conteudo:
        "- Redes e Fluxos = A estrutura da globalização comandada pelas Cidades Globais.\n- Nova DIT = Países ricos controlam a tecnologia e finanças; países emergentes dão matéria-prima e montagem.\n- Milton Santos = Crítico da globalização como perversidade que aprofunda a desigualdade social."
    }
  ]
},

"Geografia|Clima e vegetação": {
  materia: "Geografia",
  assunto: "Clima e vegetação",
  introducao:
    "A climatologia e a biogeografia estudam a interação entre a atmosfera e a cobertura vegetal da Terra. No Enem, este assunto cai massivamente associado à identificação das características dos biomas brasileiros, ao comportamento das massas de ar e aos impactos ambientais urbanos (Ilhas de Calor) e rurais (Savanização da Amazônia).",
  secoes: [
    {
      titulo: "1. Os Fatores do Clima e as Massas de Ar no Brasil",
      conteudo:
        "O clima é moldado por fatores como latitude, altitude e maritimidade. No Brasil, o clima é controlado por 5 grandes massas de ar, com destaque para duas que despencam na prova:\n- mEa (Massa Equatorial Amazônica): Quente e Extremamente ÚMIDA. É a única massa de ar interna do mundo que é úmida, graças à evapotranspiração da Floresta Amazônica. Ela distribui chuvas para todo o país através dos chamados 'Rios Voadores'.\n- mPa (Massa Polar Atlântica): Fria e úmida. Nasce na Antártica e entra pelo sul do Brasil no inverno, provocando frentes frias e o fenômeno da 'Friagem' (queda brusca de temperatura) até mesmo na Amazônia."
    },
    {
      titulo: "2. Os Domínios Morfoclimáticos do Brasil (Biomas)",
      conteudo:
        "O geógrafo Aziz Ab'Saber organizou o Brasil em domínios. Guarde as características e problemas de cada um:\n- Amazônia: Floresta latifundiada (folhas largas), perene e higrófila (adaptada à umidade). O solo é pobre, mas sustentado pela própria matéria orgânica (Serrapilheira). Sofre com o 'Arco do Desmatamento'.\n- Cerrado: A savana brasileira. Árvores de troncos tortuosos, casca grossa e raízes profundas (para buscar água nos lençóis freáticos no período de seca). O solo é ácido, corrigido pela técnica da calagem para o plantio de soja.\n- Caatinga: Vegetação xerófila (adaptada à seca), com plantas espinhosas (cactos) que perdem as folhas na estiagem para economizar água (caducifólias). Sofre grave risco de Desertificação."
    },
    {
      titulo: "3. Impactos Climáticos Urbanos",
      conteudo:
        "Nas cidades, a interferência humana altera o microclima local, gerando dois fenômenos muito cobrados:\n- Ilha de Calor: Elevação da temperatura nos centros urbanos devido ao excesso de concreto, asfalto, poluição e falta de árvores, fazendo com que o centro seja muito mais quente que as áreas rurais vizinhas.\n- Inversão Térmica: Fenômeno natural que ocorre no inverno. O ar frio (mais denso) fica preso próximo ao chão, e o ar quente (menos denso) fica em cima. Como o ar não circula, a poluição gerada pelos carros fica travada na altura em que respiramos, causando graves crises respiratórias na população."
    },
    {
      titulo: "💡 Como Esse Tema Cai no Enem",
      conteudo:
        "A banca costuma colocar Climagrafas (gráficos que mostram barras de chuva e linhas de temperatura) e pedir para você identificar o bioma. Se as barras de chuva sumirem no meio do ano (junho/julho/agosto) e a temperatura continuar alta, é Cerrado (clima Tropical Típico). Se as barras forem altas o ano inteiro, é Amazônia (Equatorial). Se forem todas muito baixas, é Caatinga (Semiaridismo)."
    },
    {
      titulo: "Resumo Prático",
      conteudo:
        "- Rios Voadores = Vapor de água da Amazônia levado pela mEa que chove no Centro-Oeste e Sudeste.\n- Cerrado e Caatinga = Adaptados à seca (raízes fundas no Cerrado, espinhos na Caatinga).\n- Ilha de Calor = Cidade quente por causa do asfalto, prédios e falta de vegetação verde."
    }
  ]
},
"Geografia|Urbanização": {
  materia: "Geografia",
  assunto: "Urbanização",
  introducao:
    "A urbanização estuda o crescimento das cidades e a concentração populacional no meio urbano. No Brasil, esse processo foi extremamente rápido, desordenado e concentrado na segunda metade do século XX, impulsionado pelo êxodo rural e pela industrialização, gerando profundas desigualdades socioespaciais que são o foco principal do Enem.",
  secoes: [
    {
      titulo: "1. Crescimento Acelerado e Macroeconômia Urbano",
      conteudo:
        "O Brasil transformou-se em um país urbano na década de 1970. Como a vinda das pessoas do campo ocorreu de forma muito rápida (êxodo rural), as cidades não tiveram tempo de planejar sua infraestrutura. Isso gerou a **Macrocéfalia Urbana**: o crescimento desordenado das cidades que sobrecarrega os serviços públicos (falta de hospitais, transporte público ineficiente, falta de saneamento básico e favelização).\nOutro conceito importante é a **Conurbação**: a união física de duas ou mais cidades vizinhas devido ao seu crescimento horizontal, formando as grandes Regiões Metropolitanas."
    },
    {
      titulo: "2. Segregação Socioespacial e Gentrificação",
      conteudo:
        "O espaço urbano reflete a desigualdade de classes. A **Segregação Socioespacial** ocorre quando a população de baixa renda é empurrada para as periferias distantes e áreas de risco (encostas de morros sujeitas a deslizamentos ou margens de rios sujeitas a enchentes), enquanto as classes ricas ocupam áreas centrais com infraestrutura completa.\nUm fenômeno moderno muito cobrado é a **Gentrificação**: a revitalização urbana de uma área degradada (como uma antiga zona portuária) que encarece o custo de vida local (aluguéis, impostos), expulsando os moradores tradicionais de baixa renda para dar lugar a um público de maior poder aquisitivo."
    },
    {
      titulo: "3. Problemas Ambientais Urbanos Específicos",
      conteudo:
        "O Enem cobra muito os impactos da falta de planejamento ambiental nas cidades:\n- Enchentes e Alagamentos: Causados pela impermeabilização do solo (excesso de asfalto e concreto) combinada com a canalização errada de rios e o acúmulo de lixo, impedindo que a água da chuva seja absorvida pela terra.\n- Lixo Urbano: A crise dos resíduos sólidos. O Enem defende a erradicação dos lixões a céu aberto (que poluem o solo e o lençol freático com o chorume) e apoia a transição para Aterros Sanitários controlados, além do incentivo à logística reversa e cooperativas de reciclagem."
    },
    {
      titulo: "💡 Como Esse Tema Cai no Enem",
      conteudo:
        "As questões costumam trazer poemas, letras de rap (como Racionais MC's) ou textos jornalísticos sobre moradia e transporte. O gabarito correto quase sempre vai abordar o 'direito à cidade', a 'reivindicação por mobilidade urbana democrática', a 'especulação imobiliária que encarece o solo urbano' ou a 'exclusão social materializada na paisagem das periferias'."
    },
    {
      titulo: "Resumo Prático",
      conteudo:
        "- Macrocéfalia Urbana = Cidade inchada que cresceu rápido demais e não consegue dar serviços para todos.\n- Gentrificação = Reforma que valoriza um bairro pobre, aumenta os preços e expulsa os moradores antigos.\n- Segregação Socioespacial = Ricos no centro com infraestrutura; pobres na periferia sem serviços básicos."
    }
  ]
},

"Geografia|Cartografia": {
  materia: "Geografia",
  assunto: "Cartografia",
  introducao:
    "A cartografia é a ciência responsável pela leitura, interpretação e confecção de mapas, cartas e plantas. No Enem, este assunto é cobrado de forma muito prática e matemática, exigindo cálculos de escala e fusos horários, além de uma visão crítica sobre a ideologia política por trás das Projeções Cartográficas.",
  secoes: [
    {
      titulo: "1. O Cálculo de Escala Cartográfica",
      conteudo:
        "A escala mostra quantas vezes a realidade foi reduzida para caber no mapa. Ela pode ser expressa de forma numérica (Ex: 1 : 100.000). Para resolver as questões do Enem sem errar, use a fórmula do triângulo cartográfico:\n\nd = D ÷ E  (ou D = d · E)\n\nOnde:\n- 'D' é a Distância Real no terreno (geralmente em quilômetros ou metros).\n- 'd' é a distância no mapa (geralmente em centímetros).\n- 'E' é o denominador da escala.\n⚠️ Macete de Ouro: Para transformar centímetros (cm) direto para quilômetros (km), corte 5 zeros do número. Para transformar centímetros (cm) para metros (m), corte 2 zeros."
    },
    {
      titulo: "2. Projeções Cartográficas: A Geopolítica do Mapa",
      conteudo:
        "Como a Terra é redonda, é impossível desenhá-la em um papel plano sem gerar distorções. Todo mapa possui uma intenção política. O Enem adora comparar as duas projeções cilíndricas mais famosas:\n- Projeção de Mercator (Século XVI): Criada na era das Grandes Navegações. Ela mantém a FORMA exata dos continentes, mas distorce o TAMANHO (as áreas próximas aos polos parecem gigantes). É uma projeção eurocêntrica, pois coloca a Europa no centro e visualmente maior que a realidade (visão de dominação colonial).\n- Projeção de Peters (Século XX): Criada no contexto da Guerra Fria. Ela mantém o TAMANHO proporcional exato das áreas, mas distorce a FORMA (os continentes parecem esticados para baixo). É uma projeção terceiro-mundista, pois valoriza o tamanho real dos países do Sul (África e América Latina)."
    },
    {
      titulo: "3. Curvas de Nível e Fusos Horários",
      conteudo:
        "- Curvas de Nível (Altimetria): Linhas que unem pontos com a mesma altitude. O Enem coloca isso para testar se você sabe ler o relevo. Dica: quanto mais PRÓXIMAS as linhas estiverem uma da outra, mais INCLINADO e íngreme é o terreno (ótimo para erosão ou esportes radicais); quanto mais AFASTADAS, mais plano é o relevo.\n- Fusos Horários: A Terra gira de Oeste para Leste. Cada fuso possui 15° de longitude e equivale a 1 hora. Regra infalível: para cidades localizadas a LESTE (direita), as horas estão ADIANTADAS (+). Para cidades localizadas a OESTE (esquerda), as horas estão ATRASADAS (−)."
    },
    {
      titulo: "💡 Dica de Ouro para a Prova",
      conteudo:
        "Quando o Enem cobrar Sensoriamento Remoto, fique atento às tecnologias modernas como o GPS, imagens de satélite e o SIG (Sistema de Informação Geográfica). O gabarito costuma associar essas ferramentas ao monitoramento em tempo real de desmatamentos na Amazônia, planejamento agrícola de precisão ou gestão de desastres urbanos."
    },
    {
      titulo: "Resumo Prático",
      conteudo:
        "- Escala grande (Ex: 1:50) = Mostra muitos detalhes (pouca redução, ex: planta de uma casa).\n- Mercator = Valoriza a forma e a Europa (Eurocêntrico); Peters = Valoriza a área real e os países do Sul político.\n- Fusos Horários = Para a direita (Leste) soma as horas; para a esquerda (Oeste) subtrai."
    }
  ]
},

  // =========================
  // FILOSOFIA
  // =========================

 "Filosofia|Ética": {
  materia: "Filosofia",
  assunto: "Ética",
  introducao:
    "A ética é o ramo da filosofia que investiga os fundamentos dos valores morais, buscando responder como devemos agir e o que define uma ação como justa ou boa. No Enem, este tema é um verdadeiro clássico, sendo cobrado através do confronto entre a ética do dever de Immanuel Kant e a ética das consequências do Utilitarismo.",
  secoes: [
    {
      titulo: "1. Ética vs. Moral (A Grande Distinção)",
      conteudo:
        "Embora muito usadas como sinônimos no cotidiano, na filosofia elas têm papéis bem diferentes:\n- Moral: É o conjunto de regras, normas, proibições e costumes que um grupo ou sociedade adota como correto em determinada época. A moral é cultural, temporal e prática (Ex: Usar roupas específicas em templos).\n- Ética: É a reflexão filosófica e teórica sobre a moral. A ética busca universalidade, questionando racionalmente por que seguimos certas regras e se elas são de fato justas."
    },
    {
      titulo: "2. Aristóteles e a Ética das Virtudes (Eudaimonia)",
      conteudo:
        "Para Aristóteles, o objetivo final de todo ser humano é a busca pela Felicidade (**Eudaimonia**). A felicidade não se encontra nos prazeres momentâneos ou no dinheiro, mas sim na prática da Virtude. A virtude é alcançada através da **Justa Medida** (ou Caminho do Meio): o equilíbrio perfeito entre o excesso e a escassez de um comportamento. Exemplo: A coragem é o meio-termo perfeito entre a covardia (falta de coragem) e a temeridade (excesso de coragem imprudente)."
    },
    {
      titulo: "3. Kant e a Ética do Dever (Imperativo Categórico)",
      conteudo:
        "Immanuel Kant criou uma ética racional e formal chamada de Deontologia (ética do dever). Para Kant, uma ação só é moralmente correta se for motivada exclusivamente pelo puro cumprimento do dever, independentemente das consequências ou de interesses pessoais. Ele sintetizou isso no **Imperativo Categórico**:\n'Aja apenas de acordo com aquela máxima pela qual você possa, ao mesmo tempo, querer que ela se torne uma lei universal.'\nOu seja, antes de mentir para se salvar, pergunte-se: eu gostaria que a mentira virasse uma lei universal e todos mentissem o tempo todo? Se a resposta for não, a ação é imoral."
    },
    {
      titulo: "4. Utilitarismo: A Ética das Consequências",
      conteudo:
        "Totalmente oposto a Kant, o Utilitarismo (de Jeremy Bentham e John Stuart Mill) defende uma ética teleológica e pragmática. Para os utilitaristas, a intenção ou o princípio da ação não importam; o que define se uma ação é moralmente boa ou má são as suas consequências. O critério central é o **Princípio da Máxima Utilidade**: uma ação é correta se ela promover a maior quantidade de felicidade e bem-estar para o maior número possível de pessoas afetadas por ela."
    },
    {
      titulo: "💡 Como Esse Tema Cai no Enem",
      conteudo:
        "O Enem adora colocar dilemas bioéticos modernos (como doação de órgãos, inteligência artificial ou dilemas médicos) e pedir para você analisar a situação sob a ótica de Kant ou dos utilitaristas. Se a resposta correta exigir agir por princípios universais inegociáveis, a lógica é Kantiana. Se focar no cálculo de benefícios públicos para a maioria, a lógica é Utilitarista."
    },
    {
      titulo: "Resumo Prático",
      conteudo:
        "- Aristóteles = Virtude está no equilíbrio (Justa Medida) para alcançar a felicidade.\n- Kant = Imperativo Categórico. Agir por dever e por princípios universais. A mentira nunca é justificável.\n- Utilitarismo = Foco no resultado. Ação correta é aquela que gera o maior bem para a maioria."
    }
  ]
},

"Filosofia|Política": {
  materia: "Filosofia",
  assunto: "Política",
  introducao:
    "A filosofia política estuda as relações de poder, a origem do Estado, a legitimidade das leis e a organização da sociedade. O Enem cobra este assunto massivamente através do pensamento político grego clássico e, de forma esmagadora, por meio das teorias dos três filósofos Contratualistas da Era Moderna.",
  secoes: [
    {
      titulo: "1. A Política na Antiguidade: O Animal Político",
      conteudo:
        "Para os filósofos gregos antigos, a política estava ligada diretamente à moral e à justiça:\n- Platão: Criticava a democracia porque ela permitia que pessoas despreparadas governassem. Defendia a **Sofocracia**: a ideia de que o Estado deveria ser governado por filósofos (Rei Filósofo), que eram os únicos capazes de contemplar a Ideia de Justiça.\n- Aristóteles: Definia o ser humano como um **Zoon Politikon** (Animal Político). Para ele, o homem só consegue alcançar sua plenitude e felicidade vivendo na *Polis* (cidade) e participando ativamente das decisões coletivas."
    },
    {
      titulo: "2. Maquiavel e a Autonomia da Política",
      conteudo:
        "No Renascimento, Nicolau Maquiavel chocou o mundo ao separar a política da moral religiosa. Em sua obra 'O Príncipe', ele mostra que o objetivo principal do governante é conquistar e MANTER o poder para garantir a ordem social. Para isso, o governante precisa ter duas qualidades:\n- *Virtù*: Capacidade, inteligência e astúcia para agir na hora certa.\n- *Fortuna*: As circunstâncias e oportunidades dadas pelo acaso.\n💡 Atenção no Enem: Maquiavel não disse textualmente que 'os fins justificam os meios', mas defendeu que o governante deve agir de forma pragmática, sendo melhor ser temido do que amado, se não puder ser ambos."
    },
    {
      titulo: "3. Os Contratualistas Modernos (O Trio de Ouro)",
      conteudo:
        "Hobbes, Locke e Rousseau investigaram como a sociedade saiu do Estado de Natureza (antes das leis) e fundou o Estado Civil através de um Contrato Social:\n- Thomas Hobbes: No Estado de Natureza, o homem vive em uma guerra de todos contra todos ('O homem é o lobo do homem') por medo da morte violenta. O Contrato Social serve para transferir a liberdade dos indivíduos para um governante absoluto (Leviatã), que garante a paz e a segurança em troca de obediência total.\n- John Locke (Pai do Liberalismo): No Estado de Natureza, os homens possuem Direitos Naturais inalienáveis (Vida, Liberdade e Propriedade). O Contrato Social serve exclusivamente para criar um governo que PROTEJA esses direitos. Se o governante não os proteger, a população tem o direito de rebelião para derrubá-lo.\n- Jean-Jacques Rousseau: Defendia que o homem nasce bom e livre no Estado de Natureza, mas a criação da propriedade privada o corrompeu ('O homem nasce livre, e por toda parte encontra-se acorrentado'). O Contrato Social deve ser um pacto de Democracia Direta focado na **Vontade Geral** para resgatar a soberania do povo."
    },
    {
      titulo: "💡 Dica de Ouro para a Prova",
      conteudo:
        "Sempre que o Enem colocar um texto sobre os Contratualistas, identifique o foco do autor. Se o texto falar em necessidade de ordem forte e autoridade, a resposta é Hobbes. Se falar em defesa da propriedade privada e limites do poder do rei, é Locke. Se falar em soberania popular e crítica à desigualdade gerada pela riqueza, é Rousseau."
    },
    {
      titulo: "Resumo Prático",
      conteudo:
        "- Aristóteles = Homem é um animal político feito para viver e participar da cidade.\n- Maquiavel = Política pragmática baseada na Virtù e Fortuna, separada da moral da Igreja.\n- Hobbes = Estado forte para dar segurança; Locke = Estado protetor da propriedade privada; Rousseau = Estado baseado na soberania do povo."
    }
  ]
},

"Filosofia|Filosofia antiga": {
  materia: "Filosofia",
  assunto: "Filosofia antiga",
  introducao:
    "A filosofia antiga compreende o nascimento do pensamento racional na Grécia no século VI a.C. e se estende até o período helenístico. No Enem, este tema é abordado destacando a transição do pensamento mítico para a racionalidade filosófica e o debate clássico entre Platão e Aristóteles sobre a origem do conhecimento.",
  secoes: [
    {
      titulo: "1. A Passagem do Mito ao Logos (Pré-Socráticos)",
      conteudo:
        "Antes da filosofia, os gregos explicavam o mundo através dos Mitos (narrativas fantasiosas envolvendo deuses e forças sobrenaturais). Os filósofos **Pré-socráticos** (ou Filósofos da Natureza/Physis) iniciaram a transição para o **Logos** (a explicação puramente racional e lógica).\nEles buscavam a **Arché**: o princípio físico fundamental, natural e único que teria dado origem a tudo o que existe no universo, sem precisar recorrer aos deuses.\nExemplos de Arché: Tales de Mileto (Água), Anaxímenes (Ar), Pitágoras (Números) e Demócrito (Átomo)."
    },
    {
      titulo: "2. Sócrates vs. Os Sofistas",
      conteudo:
        "No período clássico ateniense, o foco mudou da natureza para o próprio ser humano e a política:\n- Sofistas: Eram professores itinerantes que cobravam para ensinar a arte da Retórica (a técnica da persuasão). Para eles, não existia uma verdade única ou universal; tudo era relativo (Relativismo), importando apenas vencer o debate na Ágora.\n- Sócrates: Opunha-se radicalmente aos sofistas. Defendia a existência de verdades universais e usava o método do diálogo dividido em duas etapas: a **Ironia** (fazer perguntas para o interlocutor perceber que não sabia o que achava que sabia — 'Só sei que nada sei') e a **Maieutica** (parto das ideias, ajudando a pessoa a dar à luz ao seu próprio conhecimento verdadeiro)."
    },
    {
      titulo: "3. O Dualismo de Platão (Mundo das Ideias)",
      conteudo:
      "Platão explicou o conhecimento através do Mito da Caverna e dividiu a realidade em dois mundos:\n- Mundo Sensível: O mundo físico em que vivemos, captado pelos nossos sentidos. É um mundo imperfeito, mutável e cheio de ilusões e cópias imperfeitas.\n- Mundo Inteligível (ou das Ideias): O mundo acessado apenas pela razão. Lá residem as ideias perfeitas, eternas e imutáveis de todas as coisas. Para Platão, conhecer é relembrar (Reminiscência) o que nossa alma já contemplou no mundo das ideias antes de encarnar no corpo."
},
{
titulo: "4. O Realismo de Aristóteles (Empirismo Crítico)",
conteudo:
"Aristóteles, discípulo de Platão, rejeitou a teoria do mundo das ideias. Para ele, só existe este mundo em que vivemos. O conhecimento verdadeiro não vem da lembrança da alma, mas sim da experiência prática captada pelos nossos sentidos combinada com a organização da lógica mental.\nEle desenvolveu conceitos importantes sobre a matéria:\n- Substância: A união indissociável de Matéria (o de que algo é feito) e Forma (o que faz algo ser o que é).\n- Ato e Potência: O movimento e a transformação das coisas. O Ato é o que o objeto é no momento (Ex: Semente); a Potência é o que ele tem o potencial de se transformar (Ex: Árvore)."
},
{
  titulo: "💡 Fique Esperto no Enem",
conteudo:
"Questões de filosofia antiga aparecem muito em formato de comparação de textos. A prova costuma colocar um fragmento de Platão defendendo que os sentidos nos enganam e um de Aristóteles valorizando a observação da natureza. A alternativa correta exigirá que você reconheça a oposição entre o Racionalismo Idealista de Platão e o Realismo Empírico de Aristóteles."
},
{
titulo: "Resumo Prático",
conteudo:
"- Pré-socráticos = Buscaram a explicação racional (Logos) e a origem natural (Arché) de todas as coisas.\n- Sócrates = Combateu o relativismo dos sofistas usando a ironia e a maêutica para buscar verdades.\n- Platão = Conhecimento verdadeiro está no Mundo das Ideias (razão); Aristóteles = Conhecimento começa no mundo físico através dos sentidos (experiência)."
}
]
},
"Filosofia|Conhecimento": {
  materia: "Filosofia",
  assunto: "Conhecimento",
  introducao:
    "A Teoria do Conhecimento (ou Epistemologia) é a área da filosofia que investiga a natureza, a origem, os limites e a validade do saber humano. No Enem, este tema é cobrado exigindo que o estudante saiba diferenciar uma opinião superficial (Doxa) de um conhecimento científico validado (Episteme), além de entender o papel do ceticismo e do dogmatismo na história da ciência.",
  secoes: [
    {
      titulo: "1. O que é Conhecer? (Doxa vs. Episteme)",
      conteudo:
        "Desde a Grécia Antiga, os filósofos tentam separar o que é apenas achismo do que é saber de verdade:\n- *Doxa* (Opinião): É o conhecimento superficial, baseado em aparências, preconceitos e sentidos. É instável e varia de pessoa para pessoa. No mundo atual, as Fake News e os boatos de redes sociais são exemplos puramente de Doxa.\n- *Episteme* (Ciência/Conhecimento Verdadeiro): É o conhecimento profundo, testado, lógico e justificado por provas racionais ou experimentais. Para haver Episteme, a afirmação deve ser uma Crença Verdadeira Justificada."
    },
    {
      titulo: "2. Dogmatismo vs. Ceticismo",
      conteudo:
        "São duas posturas opostas diante da capacidade humana de alcançar a verdade:\n- Dogmatismo: Defende que a razão humana é plenamente capaz de conhecer a verdade absoluta sobre o mundo, sem necessidade de questionamentos profundos. O dogmático aceita verdades como prontas e inquestionáveis.\n- Ceticismo: Defende que a mente humana é limitada e NUNCA poderá alcançar a certeza absoluta sobre nada. O cético radical prefere suspender seus julgamentos (Epoché) e duvidar de todas as afirmações, pois sempre haverá argumentos contra e a favor de qualquer ideia."
    },
    {
      titulo: "3. O Método Científico Moderno",
      conteudo:
        "A filosofia do conhecimento deu base para o nascimento da ciência moderna no século XVII. Filósofos como Francis Bacon organizaram o **Método Indutivo**: observar os fatos da natureza de forma repetida (experiências) para, a partir de casos particulares, criar uma lei geral. A ciência contemporânea evoluiu para o método hipotético-dedutivo, onde uma teoria é aceita apenas enquanto resistir a testes de falseabilidade (tentativas de provar que ela está errada)."
    },
    {
      titulo: "💡 Como Esse Tema Cai no Enem",
      conteudo:
        "As questões costumam fazer pontes com a atualidade, discutindo o negacionismo científico e a pós-verdade. O gabarito correto quase sempre vai abordar a 'necessidade de critérios rigorosos de validação discursiva', a 'distinção entre crenças subjetivas e evidências factuais' ou a 'importância do questionamento racional contra verdades dogmáticas impostas'."
    },
    {
      titulo: "Resumo Prático",
      conteudo:
        "- Doxa = Opinião superficial e instável; Episteme = Conhecimento testado, racional e justificado.\n- Ceticismo = Duvidar da capacidade humana de atingir a certeza absoluta.\n- Conhecimento científico = Exige métodos de verificação e está sempre aberto a revisões se novas provas surgirem."
    }
  ]
},

"Filosofia|Filosofia moderna": {
  materia: "Filosofia",
  assunto: "Filosofia moderna",
  introducao:
    "A filosofia moderna (séculos XVII e XVIII) rompeu com o pensamento teocêntrico medieval para focar no Antropocentrismo e na autonomia da Razão Humana. Este é o assunto de Filosofia mais cobrado em toda a história do Enem, baseado no debate feroz entre o Rationalismo de Descartes e o Empirismo de Locke e Hume, encerrado pela síntese genial de Kant.",
  secoes: [
    {
      titulo: "1. René Descartes e o Rationalismo (O Império da Razão)",
      conteudo:
        "René Descartes é o pai do Rationalismo. Ele defendia que os nossos sentidos nos enganam (Ex: Uma colher na água parece torta) e, por isso, a experiência física não é confiável para a ciência. O conhecimento verdadeiro nasce de ideias inatas que já nascem na nossa mente e são acessadas apenas pelo pensamento lógico.\nPara achar uma verdade inabalável, ele criou o **Dúvida Metódica**: duvidar de tudo (do mundo, dos sentidos e até de si mesmo) até achar algo impossível de ser questionado. Ele percebeu que enquanto duvidava, ele estava pensando. Daí nasceu seu axioma supremo:\n\n*Cogito, ergo sum* (Penso, logo existo).\n\nA partir da certeza de que ele era uma coisa que pensa, Descartes reconstruiu todo o seu sistema filosófico."
    },
    {
      titulo: "2. O Empirismo Britânico (A Mente como Tábula Rasa)",
      conteudo:
        "Totalmente opostos a Descartes, os filósofos empiristas defendiam que o conhecimento nasce exclusivamente da Experiência Prática captada pelos sentidos (visão, audição, tato, etc.). Não existem ideias inatas:\n- John Locke: Defendia que a mente humana ao nascer é uma **Tábula Rasa** (uma página em branco). À medida que vivemos, tocamos e interagimos com o mundo, nossos sentidos preenchem essa página com impressões e ideias.\n- David Hume (O Empirismo Radical): Levou a teoria ao limite, criticando o conceito de causa e efeito. Para Hume, o fato de o Sol nascer todos os dias não garante que ele nascerá amanhã por uma lei lógica; nós apenas acreditamos nisso devido ao **Hábito** e ao costume psicológico de ver a repetição do evento."
    },
    {
      titulo: "3. Immanuel Kant e o Criticismo (A Revolução Copernicana)",
      conteudo:
        "No século XVIII, Immanuel Kant encerrou a briga entre rationalistas e empiristas com o seu **Criticismo** (na obra 'Crítica da Razão Pura'). Kant provou que ambos estavam parcialmente certos:\n- O empirismo está certo ao dizer que o conhecimento começa com a experiência dos sentidos (a matéria-prima).\n- O rationalismo está certo ao dizer que a mente possui estruturas organizadas antes da experiência (espaço e tempo) para processar os dados.\nMnemônico clássico de Kant: 'Pensamentos sem conteúdos [experiência] são vazios; intuições sem conceitos [razão] são cegas.' O homem não conhece o objeto em si (a coisa em si), mas apenas a forma como o objeto se apresenta para as estruturas da nossa mente (o fenômeno)."
    },
    {
      titulo: "💡 Dica de Ouro para a Prova",
      conteudo:
        "Quando o Enem colocar textos confrontando Descartes e Hume, o comando da questão vai te pedir para identificar o ponto de divergência entre eles. Lembre-se: a resposta estará na oposição entre a 'razão dedutiva e intuitiva' de Descartes contra a 'indução baseada nas impressões sensíveis e hábitos' de Hume. Guarde essas palavras-chave!"
    },
    {
      titulo: "Resumo Prático",
      conteudo:
        "- Descartes (Rationalismo) = Duvidou dos sentidos. A verdade vem das ideias inatas da razão (*Cogito, ergo sum*).\n- Locke e Hume (Empirismo) = A mente é uma folha em branco (Tábula Rasa). Todo saber vem dos sentidos e das experiências.\n- Kant (Criticismo) = Uniu os dois. Nós precisamos dos dados dos sentidos organizados pelas ferramentas da razão para conhecer o mundo."
    }
  ]
},

  // =========================
  // SOCIOLOGIA
  // =========================

  "Sociologia|Cultura e sociedade": {
  materia: "Sociologia",
  assunto: "Cultura e sociedade",
  introducao:
    "A cultura engloba todo o conjunto de saberes, crenças, artes, leis, morais e costumes adquiridos pelo homem em sociedade. No Enem, este tema é cobrado sob uma ótica antropológica, focando no combate ao preconceito cultural, no processo de socialização e na oposição clássica entre Etnocentrismo e Relativismo Cultural.",
  secoes: [
    {
      titulo: "1. Socialização Primária vs. Secundária",
      conteudo:
        "Ninguém nasce sabendo como viver em sociedade; nós aprendemos através do processo de Socialização:\n- Socialização Primária: Ocorre na infância, no núcleo familiar. É onde o indivíduo aprende a linguagem base, regras de comportamento fundamentais e internaliza os primeiros valores.\n- Socialização Secundária: Ocorre do fim da infância até a vida adulta, por meio de outras instituições sociais (escola, igreja, mercado de trabalho, mídia e redes sociais). Serve para adaptar o indivíduo a papéis sociais específicos."
    },
    {
      titulo: "2. Etnocentrismo vs. Relativismo Cultural",
      conteudo:
        "Este é o conceito de Antropologia que mais cai na prova:\n- Etnocentrismo: É a tendência de julgar e avaliar uma cultura estrangeira a partir dos padrões e valores da sua própria cultura. Quase sempre gera visões de superioridade, preconceitos, racismo e xenofobia (Ex: O colonizador europeu considerando a cultura indígena como 'selvagem').\n- Relativismo Cultural: É a postura científica oposta. Defende que nenhuma cultura é intrinsecamente superior ou inferior a outra, e que cada prática cultural só pode ser compreendida e julgada dentro do seu próprio contexto histórico e social."
    },
    {
      titulo: "3. Pierre Bourdieu: Capital Cultural e Habitus",
      conteudo:
        "O sociólogo francês Pierre Bourdieu explicou que as desigualdades vão além do dinheiro. Ele criou conceitos fundamentais:\n- Capital Cultural: O conhecimento acumulado, diplomas, domínio da norma-padrão da língua e familiaridade com artes e museus. As classes dominantes usam esse capital para manter seus privilégios, fazendo com que a escola funcione como um mecanismo de reprodução de desigualdades sociais.\n- *Habitus*: O conjunto de maneiras de agir, pensar, falar e interagir que o indivíduo internaliza de acordo com a classe social em que foi criado."
    },
    {
      titulo: "💡 Como Esse Tema Cai no Enem",
      conteudo:
        "As questões costumam trazer textos sobre heranças culinárias afro-brasileiras ou rituais de povos originários. O gabarito correto nunca validará preconceitos e sempre vai girar em torno da 'valorização do patrimônio imaterial', do 'reconhecimento da pluralidade de identidades culturalmente constituídas' ou da 'crítica às visões eurocêntricas e hierarquizantes'."
    },
    {
      titulo: "Resumo Prático",
      conteudo:
        "- Etnocentrismo = Julgar o outro usando a sua régua cultural (Gera preconceito).\n- Relativismo Cultural = Respeitar a lógica interna de cada cultura, sem criar hierarquias.\n- Capital Cultural = Conhecimento e bagagem escolar usados como símbolo de status e poder."
    }
  ]
},

"Sociologia|Desigualdade social": {
  materia: "Sociologia",
  assunto: "Desigualdade social",
  introducao:
    "A desigualdade social estuda a distribuição assimétrica e injusta de recursos, poder, direitos e oportunidades entre os diferentes grupos de uma sociedade. No Enem, este assunto é abordado a partir das teorias de classes sociais de Karl Marx e Max Weber, cruzando dados históricos sobre o racismo estrutural e a desigualdade de gênero no Brasil.",
  secoes: [
    {
      titulo: "1. Karl Marx vs. Max Weber: O Conceito de Classe",
      conteudo:
        "Os dois pensadores clássicos analisaram a estratificação social de maneiras diferentes:\n- Karl Marx: Defendia uma visão puramente econômica e bipolar. A sociedade é dividida pelo conflito entre duas classes: a Burguesia (donos dos meios de produção, como fábricas e terras) e o Proletariado (trabalhadores que possuem apenas a sua força de trabalho). A burguesia explora os operários através da **Mais-Valia** (o valor produzido pelo trabalhador que não lhe é pago e fica com o patrão).\n- Max Weber: Defendia uma visão multidimensional. A posição social de alguém não depende apenas do dinheiro (Classe), mas também do seu prestígio social e profissão (Status) e da sua influência na tomada de decisões na sociedade (Poder)."
    },
    {
      titulo: "2. Desigualdade Étnico-Racial e Racismo Estrutural",
      conteudo:
        "O Enem cobra a desigualdade racial não como um problema isolado de preconceito individual, mas como **Racismo Estrutural**. Isso significa que as consequências de mais de 350 anos de escravidão foram normalizadas e inseridas na própria engrenagem política, econômica e espacial do Brasil. Dados estatísticos provam que a população negra concentra os menores salários, os menores índices de escolaridade e as maiores taxas de violência, exigindo políticas públicas de reparação histórica (como as cotas raciais)."
    },
    {
      titulo: "3. Desigualdade de Gênero e a Divisão Sexual do Trabalho",
      conteudo:
        "A desigualdade de gênero manifesta-se fortemente na economia através da **Dupla Jornada de Trabalho** (as mulheres trabalham fora e ainda acumulam a responsabilidade esmagadora pelos afazeres domésticos e cuidados com os filhos) e no teto de vidro (*glass ceiling*), o fenômeno social invisível que dificulta o acesso de mulheres a cargos de alta liderança, mesmo possuindo maior escolaridade que os homens."
    },
    {
      titulo: "💡 Dica de Ouro para a Prova",
      conteudo:
        "Questões de desigualdade social no Enem vêm acompanhadas de gráficos do IBGE ou do PNUD (como o Índice de Gini). Lembre-se: quanto mais próximo de 0 estiver o Índice de Gini, maior é a igualdade de um país; quanto mais próximo de 1, maior é a concentração de renda. Saiba ler esses gráficos interpretando a desigualdade como um obstáculo para o desenvolvimento da cidadania plena."
    },
    {
      titulo: "Resumo Prático",
      conteudo:
        "- Mais-Valia (Marx) = O lucro do patrão gerado pelo trabalho não pago ao operário.\n- Estratificação para Weber = Depende de três pilares: Classe (dinheiro), Status (prestígio) e Poder (política).\n- Racismo Estrutural = Iniquidades sociais consolidadas na própria estrutura do Estado desde a era colonial."
    }
  ]
},

"Sociologia|Cidadania": {
  materia: "Sociologia",
  assunto: "Cidadania",
  introducao:
    "A cidadania é o estatuto jurídico e político que garante ao indivíduo o direito de participar ativamente das decisões e da vida do seu Estado, usufruindo de direitos e cumprindo deveres. No Enem, este tema é pautado pela evolução histórica dos direitos humanos e, obrigatoriamente, pelas conquistas sociais estabelecidas na Constituição Cidadã de 1988.",
  secoes: [
    {
      titulo: "1. A Tríade dos Direitos de T.H. Marshall",
      conteudo:
        "O sociólogo T.H. Marshall explicou que a cidadania plena moderna não nasceu pronta; ela foi conquistada em três etapas históricas cumulativas:\n- Direitos Civis (Século XVIII): Direitos individuais básicos de liberdade. Liberdade de expressão, de locomoção, de pensamento, direito à propriedade e igualdade perante a lei.\n- Direitos Políticos (Século XIX): Direito de participar do governo e do poder político. Direito de votar, ser votado, fundar partidos e organizar manifestações.\n- Direitos Sociais (Século XX): Direito ao bem-estar econômico e à segurança social. Direito à educação pública, saúde (SUS), salário mínimo, aposentadoria e moradia digna."
    },
    {
      titulo: "2. A Constituição Cidadã de 1988 e os Direitos Humanos",
      conteudo:
        "Após 21 anos de Ditadura Militar, o Brasil promulgou a Constituição de 1988, apelidada de 'Constituição Cidadã'. Ela é considerada uma das cartas mais avançadas do mundo na defesa dos Direitos Humanos porque ampliou as garantias individuais, criminalizou o racismo como crime inafiançável, estendeu o direito de voto aos analfabetos e adolescentes de 16 e 17 anos, e criou mecanismos de proteção para minorias históricas (como a demarcação de terras indígenas e quilombolas)."
    },
    {
      titulo: "3. Cidadania Ativa vs. Passiva",
      conteudo:
        "O app deve deixar claro para o aluno que a cidadania no Enem não é apenas votar de 2 em 2 anos (Cidadania Passiva). A banca valoriza a **Cidadania Ativa**: a participação constante da população no dia a dia da democracia, seja fiscalizando os gastos públicos, participando de conselhos municipais, organizando abaixo-assinados ou atuando em ONGs e movimentos comunitários para exigir melhorias locais."
    },
    {
      titulo: "💡 Como Esse Tema Cai no Enem",
      conteudo:
        "Textos que discutem o acesso a direitos de minorias ou o papel de ouvidorias públicas costumam ter como gabarito correto alternativas que trazem as expressões: 'consolidação das garantias democráticas', 'exercício da soberania popular para além do sufrágio universal', 'ampliação do espectro de direitos sociais' ou 'reconhecimento jurídico da dignidade da pessoa humana'."
    },
    {
      titulo: "Resumo Prático",
      conteudo:
        "- Direitos Civis = Liberdade individual; Políticos = Votar e ser votado; Sociais = Saúde, educação e amparo do Estado.\n- Constituição de 1988 = Consolidou os direitos sociais e a dignidade humana após o regime militar.\n- Cidadania Ativa = Participação social constante nas tomadas de decisão da comunidade."
    }
  ]
},

"Sociologia|Trabalho": {
  materia: "Sociologia",
  assunto: "Trabalho",
  introducao:
"O trabalho é a atividade pela qual o ser humano transforma a natureza para garantir sua sobrevivência e criar cultura. No Enem, este assunto analisa as transformações das relações trabalhistas ao longo do capitalismo: a divisão do trabalho em Durkheim, a exploração em Marx e a evolução dos modelos industriais (Taylorismo, Fordismo e Toyotismo) até a precarização digital atual.",
secoes: [
{
  titulo: "1. Émile Durkheim: Divisão do Trabalho e Solidariedade",
conteudo:
"Para Durkheim, a divisão do trabalho nas indústrias serve para criar coesão social (união). Ele dividiu as sociedades em duas formas de solidariedade:\n- Solidariedade Mecânica (Sociedades Pré-industriais): Baixa divisão do trabalho. As pessoas realizam funções parecidas, têm os mesmos costumes e são unidas pela semelhança e pela tradição coletiva forte.\n- Solidariedade Orgânica (Sociedades Modernas/Industriais): Altíssima divisão do trabalho. Cada pessoa faz uma função hiperespecífica (médico, engenheiro, padeiro). Elas são unidas pela DEPENDÊNCIA mútua que têm umas das outras para sobreviver. O perigo ocorre quando há uma crise de regras, gerando a Anomia Social."
},
{
  titulo: "2. A Evolução dos Modelos Industriais (Cai Direto!)",
conteudo:
"Identifique o modelo produtivo descrito no enunciado:\n- Taylorismo/Fordismo (Século XX): Produção em massa, rígida e padronizada. Trabalho repetitivo com o operário preso à esteira rolante fazendo a mesma função mecânica o dia todo (Alienantes). Há estoques gigantescos de mercadorias.\n- Toyotismo (Pós-década de 1970): Produção flexível e fragmentada. Funciona no modelo Just-in-time (produz apenas o que já foi vendido, eliminando os estoques). Exige um trabalhador polivalente (que saiba fazer várias funções) e gerencia fábricas terceirizadas globalmente."
},
{
titulo: "3. A Precarização do Trabalho na Era Digital (Uberização)",
conteudo:
"O avanço da tecnologia e dos aplicativos gerou a Uberização do Trabalho. O Enem critica esse fenômeno sob a ótica da precarização: o trabalhador é vendido pela mídia como um 'empreendedor autônomo' ou 'chefe de si mesmo', mas na verdade trabalha jornadas abusivas, sem direitos trabalhistas garantidos (sem FGTS, sem férias, sem licença médica) e totalmente controlado por um algoritmo invisível que dita suas regras e ganhos."
},
{
  titulo: "💡 Como Esse Tema Cai no Enem",
conteudo:
"A prova adora usar cenas do filme 'Tempos Modernos' de Charlie Chaplin para ironizar o Fordismo, ou relatos de entregadores de aplicativos para criticar a uberização. As alternativas corretas costumam citar a 'subordinação do trabalhador ao ritmo do maquinário', a 'alienação no processo produtivo flexível' ou a 'perda de garantias laborais históricas na economia de plataformas digitais'."
},
{
titulo: "Resumo Prático",
conteudo:
"- Fordismo = Produção em massa idêntica, esteira rolante, operário ultra-especializado e estoques cheios.\n- Toyotismo = Produção flexível sob demanda (Just-in-time) e trabalhador polivalente.\n- Uberização = Falso empreendedorismo que camufla a precarização e a perda de direitos do trabalhador."
}
]
},
"Sociologia|Movimentos sociais": {
materia: "Sociologia",
assunto: "Movimentos sociais",
introducao:
"Movimentos sociais são ações coletivas organizadas por setores da sociedade civil com o objetivo de confrontar elites e governos para defender direitos, promover mudanças estruturais ou resistir a retrocessos políticos. No Enem, estuda-se a transição dos movimentos operários clássicos para os Novos Movimentos Sociais focados em pautas identitárias.",
secoes: [
{
titulo: "1. Movimentos Sociais Clássicos vs. Novos Movimentos",
conteudo:
"O foco das lutas coletivas mudou ao longo do tempo:\n- Movimentos Clássicos (Século XIX e início do XX): Eram focados na economia e na luta de classes. O grande agente era o operário das fábricas e os sindicatos. Suas pautas centrais envolviam salários, redução da jornada trabalhista e direitos previdenciários.\n- Novos Movimentos Sociais (Pós-década de 1960): Passam a focar na Identidade, na cultura, na liberdade individual e no reconhecimento de direitos civis específicos de minorias. São exemplos marcantes: o Movimento Negro, o Movimento Feminista, o Movimento LGBTQIA+ e o Movimento Ambientalista/Ecologista."
},
{
titulo: "2. O Papel dos Movimentos Sociais na Redemocratização",
conteudo:
"A história do Brasil é marcada pela força da ação coletiva. Durante a Ditadura Militar, as manifestações estudantis (como as da UNE) e as greves operárias do ABC Paulista desafiaram o autoritarismo dos generais. O movimento das 'Diretas Já' e os protestos contra o alto custo de vida provam que as conquistas democráticas da Constituição de 1988 foram frutos de lutas organizadas pelo povo nas ruas, e não concessões do governo."
},
{
titulo: "3. Pautas Contemporâneas Rurais e Urbanas",
conteudo:
"O Enem cobra a atuação de movimentos de base que lutam por recursos vitais:\n- MST (Movimento dos Trabalhadores Rurais Sem Terra): Luta pela Reforma Agrária, exigindo a desapropriação de terras improdutivas (que não cumprem sua Função Social, prevista em lei) para a agricultura familiar sustentável.\n- MTST (Movimento dos Trabalhadores Sem Teto): Atua nas cidades denunciando a especulação imobiliária. Eles ocupam prédios e terrenos abandonados no centro que servem apenas para acumular valor para ricos, exigindo moradia social digna para a população de baixa renda."
},
{
titulo: "💡 Fique Esperto na Prova",
conteudo:
"Toda questão sobre movimentos sociais no Enem valoriza a legitimidade da organização popular. As alternativas corretas nunca vão criminalizar esses grupos ou tratá-los como baderneiros. Busque sempre por opções que usem termos bonitos como: 'mecanismo de ampliação da representação política', 'veiculação de demandas coletivas legítimas', 'tensionamento das estruturas de poder vigentes' ou 'protagonismo social na conquista de direitos'."
},
{
titulo: "Resumo Prático",
conteudo:
"- Movimentos Clássicos = Luta econômica operária e sindical baseada no ambiente fabril.\n- Novos Movimentos = Lutas identitárias, culturais e ecológicas (Negros, Mulheres, LGBTQIA+, Meio Ambiente).\n- Função Social da Terra/Propriedade = O argumento jurídico que legitima as lutas por moradia e reforma agrária (MST/MTST)."
}
]
},
"Redação|Texto dissertativo-argumentativo": {
  materia: "Redação",
  assunto: "Texto dissertativo-argumentativo",
  introducao:
    "A redação do Enem exige a produção de um texto dissertativo-argumentativo de até 30 linhas sobre um problema social, político ou cultural do Brasil. O objetivo é defender um ponto de vista (tese) de forma clara e apresentar, obrigatoriamente, uma proposta de intervenção para resolver o problema apresentado.",
  secoes: [
    {
      titulo: "1. A Estrutura Nota 1000 (O Esqueleto do Texto)",
      conteudo:
        "O seu texto precisa ser dividido em 4 parágrafos bem definidos:\n\n- Introdução (1º parágrafo): Apresente o tema usando uma alusão (histórica, filme ou livro), defina o problema e apresente a sua Tese (sua opinião direta + duas causas do problema).\n- Desenvolvimento 1 (2º parágrafo): Pegue a primeira causa que você citou na introdução e aprofunde. Use um argumento de autoridade (filósofo, dado estatístico ou notícia) para provar seu ponto.\n- Desenvolvimento 2 (3º parágrafo): Pegue a segunda causa e repita o processo, trazendo outro repertório legitimado para dar autoridade ao texto.\n- Conclusão (4º parágrafo): O espaço exclusivo para a Proposta de Intervenção."
    },
    {
      titulo: "2. Os 5 Elementos Obrigatórios da Proposta",
      conteudo:
        "A banca do Enem avalia a sua conclusão através de 5 perguntas obrigatórias (Competência 5). Cada elemento vale 40 pontos, somando 200 pontos no total. Sua proposta deve conter:\n\n1) Agente (Quem vai fazer?): Ex: Ministério da Educação, Governo Federal, Mídia.\n2) Ação (O que vai fazer?): A medida prática para resolver o problema.\n3) Meio/Modo (Como vai fazer?): O instrumento ou canal usado. Ex: 'por meio de verbas públicas', 'através de campanhas'.\n4) Efeito (Para que vai fazer?): O objetivo final ou impacto a longo prazo.\n5) Detalhamento (Explicação extra): Uma informação adicional sobre qualquer um dos 4 pontos acima (geralmente detalha-se o Agente ou a Ação)."
    },
    {
      titulo: "3. As 5 Competências de Avaliação",
      conteudo:
        "A redação é corrigida por dois avaliadores que dão até 200 pontos para cada uma das 5 competências:\n\n- Competência 1: Domínio da norma culta da língua escrita (erros de gramática, crase, vírgula e ortografia).\n- Competência 2: Compreensão do tema, uso de repertório sociocultural e aplicação do formato dissertativo.\n- Competência 3: Projeto de texto, coerência e capacidade de selecionar e organizar argumentos para defender a tese.\n- Competência 4: Coesão textual (uso correto de conectivos como 'Portanto', 'Contudo', 'Além disso' entre os parágrafos).\n- Competência 5: Elaboração da proposta de intervenção respeitando os Direitos Humanos."
    },
    {
      titulo: "💡 Pegadinhas que Zeram a Redação",
      conteudo:
        "Alertas fundamentais para o usuário do seu app:\n- Fugir totalmente do tema proposto.\n- Escrever menos de 7 linhas (o texto é anulado).\n- Desrespeitar os Direitos Humanos (atualmente não zera a nota inteira, mas retira todos os 200 pontos da Competência 5).\n- Colocar assinaturas, desenhos ou rasuras propositais fora do espaço da folha oficial de redação."
    },
    {
      titulo: "Resumo Prático",
      conteudo:
        "- Texto em 4 parágrafos (Introdução, Desenvolvimento 1, Desenvolvimento 2 e Conclusão).\n- Use conectivos para ligar os parágrafos e traga repertórios (filmes, livros, história) para validar seus argumentos.\n- A proposta de intervenção perfeita deve ter obrigatoriamente: Quem + O que + Como + Para que + Detalhe."
    }
  ]
}

};