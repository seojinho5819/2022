import React from 'react'
import { SafeAreaView, Text, View,StyleSheet } from 'react-native'

import TreeView from 'react-native-final-tree-view'
import { getStatusBarHeight } from "react-native-status-bar-height";
import { Dimensions } from "react-native";
import { isIphoneX, getBottomSpace } from "react-native-iphone-x-helper";
import BottomNavigation from './components/bottomNavigation';

const height= Dimensions.get("window").height - getStatusBarHeight() - getBottomSpace();
const App = () => {

  const status = getStatusBarHeight(true);
  const Height = () => {
  if (isIphoneX()) {
   
        return Dimensions.get("window").height - status -          getBottomSpace();
    } else {
   
      return Dimensions.get("window").height - status;
    }
  };



const family = [
  {
    id: 'Grandparent',
    name: 'Grandpa',
    age: 78,
    children: [
      {
        id: 'Me',
        name: 'Me',
        age: 30,
        children: [
          {
            id: 'Erick',
            name: 'Erick',
            age: 10,
          },
          {
            id: 'Rose',
            name: 'Rose',
            age: 12,
          },
        ],
      },
    ],
  }
]

const getIndicator = (isExpanded, hasChildrenNodes) => {
  if (!hasChildrenNodes) {
    return '-'
  } else if (isExpanded) {
    return '\\/'
  } else {
    return '>'
  }
}


  return (
    <SafeAreaView style={{height:height}}>
      <View style={styles.view}>
      <TreeView
        data={family} // defined above
        renderNode={({ node, level, isExpanded, hasChildrenNodes }) => {
          return (
            <View style={{borderWidth:1}}>
              <Text
                style={{
                  marginLeft: 25 * level,
                }}
              >
                {getIndicator(isExpanded, hasChildrenNodes)} {node.name}
              </Text>
            </View>
          )
        }}
      />
      </View>
      <BottomNavigation 
        style={styles.bottomNavigation}
      />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  bottomNavigation : {
    
  },
  view : {
    height : height * 0.9
  }
})

export default App