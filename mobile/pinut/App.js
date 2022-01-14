import React from 'react'
import { SafeAreaView, Text, View, StyleSheet,Button } from 'react-native'


import { getStatusBarHeight } from "react-native-status-bar-height";
import { Dimensions } from "react-native";
import { isIphoneX, getBottomSpace } from "react-native-iphone-x-helper";
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigation from './components/bottomNavigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const HomeScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress = {() => navigation.navigate('Details')} 
        />
    </View>
  )
}

const DetailsScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details again"
        onPress={ () => navigation.push('Details')}
      />
      <Button 
        title="Go to Home"
        onPress={ () => navigation.navigate('Home')}
      />
      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
      />
      <Button 
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  )
}

const Stack = createNativeStackNavigator();
const height = Dimensions.get("window").height - getStatusBarHeight() - getBottomSpace();

const App = () => {

  const status = getStatusBarHeight(true);
  const Height = () => {
    if (isIphoneX()) {

      return Dimensions.get("window").height - status - getBottomSpace();
    } else {

      return Dimensions.get("window").height - status;
    }
  };

  return (
    <SafeAreaView style={{ height: height }}>

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  bottomNavigation: {

  },
  view: {
    height: height * 0.9
  }
})

export default App