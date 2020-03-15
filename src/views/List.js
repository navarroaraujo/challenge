import React, { Component } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text , TouchableHighlight} from 'react-native';


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Corona Vírus',
    note: '2019',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Gripe Espanhola',
    note: '1917',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Peste Bubônica',
    note: '1343',
  },
  {
    id: '58478a0f-3da1-471f-bd96-145571e29d72',
    title: 'Varíola',
    note: '1960',
  },
  {
    id: '58694a0f-3da1-571f-bd96-145571e29d72',
    title: 'Tifo',
    note: '1918',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145348e29d72',
    title: 'Cólera',
    note: '1817',
  },
  {
    id: '58694a0f-4dj1-471f-bd96-145348e29d72',
    title: 'Tuberculose',
    note: '1850',
  },
  {
    id: '58694a0f-4dj1-471f-bd96-145348e29d23',
    title: 'HIV',
    note: '1980',
  },
];

function Item({ title, note, navigation}) {

  return (
    <TouchableHighlight
      onPress={() => {
        navigation.navigate('Detail')
      }}
    >
      <View style={styles.item}>
        <Text style={{fontWeight: 'bold', color: '#FFF', fontSize: 22, paddingBottom: 10}}>{title}</Text>
        <Text style={{fontSize: 14, color: '#FFF'}}>{note}</Text>
      </View>
    </TouchableHighlight>
  );
}

function List({navigation}) {
  return (
    <SafeAreaView style={{flex:1, borderTopWidth: 10, borderColor: '#111014', backgroundColor: '#111014'}}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} note={item.note}/>}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>

  );
}
const styles = StyleSheet.create({
  item: {
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
  },
})
export default List;