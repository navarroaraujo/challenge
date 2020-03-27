import React from 'react';
import { SafeAreaView, View, FlatList, Text , TouchableHighlight} from 'react-native';


const DATA = [
  {
    id: '58694a0f-3da1-471f-bd96-783562e29d72',
    title: 'Corona Vírus',
    mortos: '6.507 Mortes',
    ano: '2019 a Atual',
    img: 'https://img.r7.com/images/coronavirus-grecia-idoso-mascara-10032020164912821?dimensions=460x201&&amp;&amp;resize=780x340&amp;crop=675x294+211+63layout=%27responsive%27',
    historia: 'O surto começou na China, que já chegou a concentrar 99% dos casos e agora corresponde a menos da metade deles. Mas, em março, o número dos novos pacientes começou a cair, e o país, pela primeira vez desde então, deixou de concentrar a maioria dos novos casos que surgem todos os dias.',
    contaminacao: 'Transmição pela via aérea ou pelo contato das mãos com a boca ou com os olhos — respirando no mesmo ambiente, tocando algo que uma pessoa infectada tocou, por exemplo.',
    sintomas: 'A doença parece se manifestar com um quadro de febre, acompanhada por tosse seca. Após uma semana, provoca dificuldade para respirar',
    tratamento: 'Não existe vacina ou tratamento contra o vírus até agora.',
  },
  {
    id: '58694a0f-3cu1-471f-bd96-145571e29d72',
    title: 'Peste Negra',
    mortos: '50 milhões de mortos',
    ano: '1333 a 1351',
    img: 'https://i2.wp.com/socientifica.com.br/wp-content/uploads/2019/11/Peste-negra.jpg?fit=900%2C507&ssl=1',
    historia: 'A peste bubônica ganhou o nome de peste negra por causa da pior epidemia que atingiu a Europa, no século 14. Ela foi sendo combatida à medida que se melhorou a higiene e o saneamento das cidades, diminuindo a população de ratos urbanos',
    contaminacao: 'Causada pela bactéria Yersinia pestis, comum em roedores como o rato. É transmitida para o homem pela pulga desses animais contaminados',
    sintomas: 'Inflamação dos gânglios linfáticos, seguida de tremedeiras, dores localizadas, apatia, vertigem e febre alta',
    tratamento: 'À base de antibióticos. Sem tratamento, mata em 60% dos casos',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Cólera',
    mortos: 'Centenas de milhares de mortos',
    ano: '1817 a 1824',
    img: 'https://drauziovarella.uol.com.br/wp-content/uploads/2011/04/201910_drauzio_colera_85618364_ezuimages_1000x563.jpg',
    historia: 'Conhecida desde a Antiguidade, teve sua primeira epidemia global em 1817. Desde então, o vibrião colérico (Vibrio cholerae) sofreu diversas mutações, causando novos ciclos epidêmicos de tempos em tempos',
    contaminacao: 'Por meio de água ou alimentos contaminados',
    sintomas: 'A bactéria se multiplica no intestino e elimina uma toxina que provoca diarréia intensa',
    tratamento: 'À base de antibióticos. A vacina disponível é de baixa eficácia (50% de imunização)',
  },
  {
    id: '58478a0f-3da1-471f-bd96-145571e29d72',
    title: 'Tuberculose',
    mortos: '1 bilhão de mortos',
    ano: '1850 a 1950',
    img: 'https://files.adventistas.org/esperanca/2017/08/pulmao.jpg',
    historia: 'Sinais da doença foram encontrados em esqueletos de 7 000 anos atrás. O combate foi acelerado em 1882, depois da identificação do bacilo de Koch, causador da tuberculose. Nas últimas décadas, ressurgiu com força nos países pobres, incluindo o Brasil, e como doença oportunista nos pacientes de Aids',
    contaminacao: 'Altamente contagiosa, transmite-se de pessoa para pessoa, através das vias respiratórias',
    sintomas: 'Ataca principalmente os pulmões',
    tratamento: 'À base de antibióticos, o paciente é curado em até seis meses',
  },
  {
    id: '58694a0f-3da1-571f-bd96-145571e29d72',
    title: 'Varíola',
    mortos: '300 milhões de mortos',
    ano: '1896 a 1980',
    img: 'https://abrilsuperinteressante.files.wordpress.com/2017/05/variola.png',
    historia: 'A doença atormentou a humanidade por mais de 3 000 anos. Até figurões como o faraó egípcio Ramsés II, a rainha Maria II da Inglaterra e o rei Luís XV da França tiveram a temida “bixiga”. A vacina foi descoberta em 1796',
    contaminacao: 'O Orthopoxvírus variolae era transmitido de pessoa para pessoa, geralmente por meio das vias respiratórias',
    sintomas: 'Febre, seguida de erupções na garganta, na boca e no rosto. Posteriormente, pústulas que podiam deixar cicatrizes no corpo',
    tratamento: 'Erradicada do planeta desde 1980, após campanha de vacinação em massa',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145348e29d72',
    title: 'Gripe Espanhola',
    mortos: '20 milhões de mortos',
    ano: '1918 a 1919',
    img: 'https://abrilsuperinteressante.files.wordpress.com/2017/05/gripe-espanhola.png',
    historia: 'O vírus Influenza é um dos maiores carrascos da humanidade. A mais grave epidemia foi batizada de gripe espanhola, embora tenha feito vítimas no mundo todo. No Brasil, matou o presidente Rodrigues Alves',
    contaminacao: 'Propaga-se pelo ar, por meio de gotículas de saliva e espirros',
    sintomas: 'Fortes dores de cabeça e no corpo, calafrios e inchaço dos pulmões',
    tratamento: 'O vírus está em permanente mutação, por isso o homem nunca está imune. As vacinas antigripais previnem a contaminação com formas já conhecidas do vírus',
  },
  {
    id: '58694a0f-4dj1-471f-bd96-145348e29d72',
    title: 'Tifo',
    mortos: '3 milhões de mortos',
    ano: '1918 a 1922',
    img: 'https://s1.static.brasilescola.uol.com.br/be/e/image/tifo(1).jpg',
    historia: 'A doença é causada pelas bactérias do gênero Rickettsia. Como a miséria apresenta as condições ideais para a proliferação, o tifo está ligado a países do Terceiro Mundo, campos de refugiados e concentração, ou guerras',
    contaminacao: 'O tifo exantemático (ou epidêmico) aparece quando a pessoa coça a picada da pulga e mistura as fezes contaminadas do inseto na própria corrente sangüínea. O tifo murino (ou endêmico) é transmitido pela pulga do rato',
    sintomas: 'Dor de cabeça e nas articulações, febre alta, delírios e erupções cutâneas hemorrágicas',
    tratamento: 'À base de antibióticos',
  },
  {
    id: '58694a0f-4dj1-471f-bd96-145348e29d23',
    title: 'Febre Amarela',
    mortos: '30 000 mortos',
    ano: '1960 a 1962',
    img: 'https://drauziovarella.uol.com.br/wp-content/uploads/2011/04/2018_drauzio_aedes-aegypti-mosquito_16847701_mrfiza_setembro_1000x563.jpg',
    historia: 'O Flavivírus, que tem uma versão urbana e outra silvestre, já causou grandes epidemias na África e nas Américas',
    contaminacao: 'A vítima é picada pelo mosquito transmissor, que picou antes uma pessoa infectada com o vírus',
    sintomas: 'Febre alta, mal-estar, cansaço, calafrios, náuseas, vômitos e diarréia. 85% dos pacientes recupera-se em três ou quatro dias. Os outros podem ter sintomas mais graves, que podem levá-los à morte',
    tratamento: 'Existe vacina, que pode ser aplicada a partir dos 12 meses de idade e renovada a cada dez anos',
  },
  {
    id: '58694j7l-4dj1-471f-bd96-145348e29d23',
    title: 'Sarampo',
    mortos: '6 milhões de mortos por ano',
    ano: 'Até 1963',
    img: 'https://s2.glbimg.com/cHt6zfJKsYEAeFrf2l4x9i8QpYs=/0x0:1000x667/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/9/t/YqD87qQPqMl22gx0oA3g/21969.png',
    historia: 'Era uma das causas principais de mortalidade infantil até a descoberta da primeira vacina, em 1963. Com o passar dos anos, a vacina foi aperfeiçoada, e a doença foi erradicada em vários países',
    contaminacao: 'Altamente contagioso, o sarampo é causado pelo vírus Morbillivirus, propagado por meio das secreções mucosas (como a saliva, por exemplo) de indivíduos doentes',
    sintomas: 'Pequenas erupções avermelhadas na pele, febre alta, dor de cabeça, mal-estar e inflamação das vias respiratórias',
    tratamento: 'Existe vacina, aplicada aos nove meses de idade e reaplicada aos 15 meses',
  },
  {
    id: '58694j7l-4dj1-471f-aa22-145348e29d23',
    title: 'Malária',
    mortos: '3 milhões de mortos por ano',
    ano: 'Desde 1980',
    img: 'https://drauziovarella.uol.com.br/wp-content/uploads/2011/04/2018_drauzio_malaria_mosquito-anopheles_118045824_kagemicrotank_outubro_1000x563.jpg',
    historia: 'Em 1880, foi descoberto o protozoário Plasmodium, que causa a doença. A OMS considera a malária a pior doença tropical e parasitária da atualidade, perdendo em gravidade apenas para a Aids',
    contaminacao: 'Pelo sangue, quando a vítima é picada pelo mosquito Anopheles contaminado com o protozoário da malária',
    sintomas: 'O protozoário destrói as células do fígado e os glóbulos vermelhos e, em alguns casos, as artérias que levam o sangue até o cérebro',
    tratamento: 'Não existe uma vacina eficiente, apenas drogas para tratar e curar os sintomas',
  },
  {
    id: '58694j7l-4dj1-471f-aa22-145348e83r02',
    title: 'AIDS',
    mortos: '22 milhões de mortos',
    ano: 'Desde 1981',
    img: 'https://petiscos.jp/wp-content/uploads/2016/10/virus-aids.jpg',
    historia: 'A doença foi identificada em 1981, nos Estados Unidos, e desde então foi considerada uma epidemia pela Organização Mundial de Saúde',
    contaminacao: 'O vírus HIV é transmitido através do sangue, do esperma, da secreção vaginal e do leite materno',
    sintomas: 'Destrói o sistema imunológico, deixando o organismo frágil a doenças causadas por outros vírus, bactérias, parasitas e células cancerígenas',
    tratamento: 'Não existe cura. Os soropositivos são tratados com coquetéis de drogas que inibem a multiplicação do vírus, mas não o eliminam do organismo',
  },
];

function Item({ navigation, ano, title,  mortos, img, historia, contaminacao, sintomas, tratamento}) {

  return (
    <TouchableHighlight
      onPress={() => {
        navigation.navigate('Detail', 
          {
            ano:ano, 
            title: title, 
            mortos: mortos, 
            img: img, 
            historia: historia, 
            contaminacao: contaminacao,
            sintomas: sintomas,
            tratamento: tratamento,
          }
        )
      }}
    >
      <View style={{
        backgroundColor: '#7159C1',
        padding: 15,
        marginVertical: 3,
        marginHorizontal: 10,
        borderColor: '#757575',
        borderRadius: 10,
        shadowColor: "#FFF",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
      }}>
        <Text style={{fontWeight: 'bold', color: '#FFF', fontSize: 22, paddingBottom: 10}}>{title}</Text>
        <Text style={{fontSize: 14, color: '#FFF'}}>{ano}</Text>
      </View>
    </TouchableHighlight>
  );
}

function List({navigation}) {
  return (
    <SafeAreaView style={{flex:1, borderTopWidth: 10, borderColor: '#111014', backgroundColor: '#111014'}}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => 
          <Item
            navigation={navigation}
            title={item.title} 
            ano={item.ano}
            mortos={item.mortos}
            img={item.img}
            historia={item.historia}
            contaminacao={item.contaminacao}
            sintomas={item.sintomas}
            tratamento={item.tratamento}
          />
        }
        keyExtractor={item => item.id}
      />
    </SafeAreaView>

  );
}
export default List;