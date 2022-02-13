import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import AppColor from '../constants/AppColor';
import AppFonts from '../constants/AppFonts';
import {AutocompleteDropdown} from 'react-native-autocomplete-dropdown';

export default function SearchBar(props) {
  return (
    <View>
      <Image
        source={require('../icons/home/search.png')}
        style={{...styles.searchIcon}}
      />
      <AutocompleteDropdown
        dataSet={props.data}
        textInputProps={{
          placeholder: 'Search Store',
          placeholderTextColor: AppColor.darkGrey,
          autoCorrect: false,
          autoCapitalize: 'none',
          style: {...styles.searchBar},
        }}
        inputHeight={55}
        rightButtonsContainerStyle={{backgroundColor: 'transparent'}}
        emptyResultText=""
        containerStyle={{marginHorizontal: 20, marginVertical: 15}}
        closeOnBlur={true}
        clearOnFocus={false}
        ChevronIconComponent={
          <Image source={require('../icons/home/down.png')} />
        }
        ClearIconComponent={
          <Image
            source={require('../icons/home/close.png')}
            style={{width: 15, height: 15}}
          />
        }
        // initialValue={{id:'1'}}
        // showClear={false}
        // showChevron={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: AppColor.searchGrey,
    borderRadius: 15,
    paddingVertical: 13,
    fontFamily: AppFonts.medium,
    fontSize: 14,
    paddingLeft: 40,
  },
  searchIcon: {
    position: 'absolute',
    top: 30,
    left: 30,
    elevation: 1,
    zIndex: 1,
  },
});
