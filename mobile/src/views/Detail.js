import React from 'react';
import { View ,SafeAreaView, Image, Text, ScrollView} from 'react-native';

function Detail({navigation}) {

  const Title = navigation.getParam('title')
  const Ano = navigation.getParam('ano')
  const Mortos = navigation.getParam('mortos')
  const Img = navigation.getParam('img')
  const História = navigation.getParam('historia')
  const Contaminação = navigation.getParam('contaminacao')
  const Sintomas = navigation.getParam('sintomas')
  const Tratamento = navigation.getParam('tratamento')

  return(
    <SafeAreaView style={{flex:1, backgroundColor: '#f5f5f5', justifyContent: 'space-between'}}>
      <ScrollView>
        <View style={{padding:20}}>
          <Text style={{fontWeight:"bold", fontSize: 22}}>{Title}</Text>
          <Text style={{}}>{Mortos} - {Ano}</Text>
        </View>
        <Image style={{height:300, resizeMode: 'cover'}} source={{uri: Img}}/>
        <View style={{padding:20}}>
          <Text style={{fontWeight:"bold", paddingBottom:10, fontSize:16, textAlign:'justify'}}>História:
            <Text style={{fontWeight:'normal'}}> {História}</Text>
          </Text>
          <Text style={{fontWeight:"bold", paddingBottom:10, fontSize:16, textAlign:'justify'}}>Contaminação:
            <Text style={{fontWeight:'normal'}}> {Contaminação}</Text>
          </Text>
          <Text style={{fontWeight:"bold", paddingBottom:10, fontSize:16, textAlign:'justify'}}>Sintomas:
            <Text style={{fontWeight:'normal'}}> {Sintomas}</Text>
          </Text>
          <Text style={{fontWeight:"bold", paddingBottom:10, fontSize:16, textAlign:'justify'}}>Tratamento:
            <Text style={{fontWeight:'normal'}}> {Tratamento}</Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>

  ) 
};

export default Detail;