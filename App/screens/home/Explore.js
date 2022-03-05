import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {PrimaryButton} from '../../components/Button';
import CText from '../../components/Text';
import AppColor from '../../constants/AppColor';
import AppFonts from '../../constants/AppFonts';
import SearchBar from '../../components/SearchBar';

const boxData=[
  {
    name: 'Vegetables',
    image: require('../../images/Login/logo.png'),
    backgroundColor: '#53B175',
  },
  {
    name: 'Fruits',
    image: require('../../images/Login/logo.png'),
    backgroundColor: '#F8A44C',
  },
  {
    name: 'Meat & Fish',
    image: require('../../images/Login/logo.png'),
    backgroundColor: '#F7A593',
  },
  {
    name: 'Bakery & Snakes',
    image: require('../../images/Login/logo.png'),
    backgroundColor: '#D3B0E0',
  },
  {
    name: 'Groceries',
    image: require('../../images/Login/logo.png'),
    backgroundColor: '#FDE598',
  },
]

export default function Explore(props) {
  return (
    <View style={styles.container} keyboardShouldPersistTaps="always">
      <View style={styles.header}>
        <CText style={{...styles.headText}}>Find Products</CText>
        <SearchBar
          data={[
            {id: '1', title: 'Alpha'},
            {id: '2', title: 'Alpha'},
            {id: '3', title: 'Alpha'},
            {id: '4', title: 'Alpha'},
          ]}
        />
      </View>
      <FlatList
        numColumns={2}
        showsVerticalScrollIndicator={false}
        style={{paddingHorizontal: 17}}
        data={boxData}
        renderItem={({item}) => (
          <TouchableOpacity
          activeOpacity={0.75}
          onPress={()=>props.navigation.navigate('ExploreItems')}
            style={{
              ...styles.boxItemStyle,
              backgroundColor: item.backgroundColor+'40',
              borderColor:item.backgroundColor,
            }}>
            <Image source={item.image} style={{width:100,height:100,resizeMode:'contain'}} />
            <CText style={{marginTop:20,marginBottom:10,textAlign:'center',fontFamily:AppFonts.bold}} numberOfLines={2}>{item.name}</CText>
          </TouchableOpacity>
        )}
        keyExtractor={(_,index)=>`expItem-${index}`}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headText: {
    fontFamily: AppFonts.medium,
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
  boxItemStyle: {
    flex: 0.5,
    height:190,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: AppColor.white,
    marginVertical: 8,
    marginHorizontal: 8,
    borderRadius: 18,
    borderWidth:1,
  },
});
