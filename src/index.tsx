import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {CommonActions} from '@react-navigation/routers';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack'
import {useNavigation, NavigationContainer, NavigationHelpersContext, DrawerActions, TabRouter,} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { NativeViewGestureHandler } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function Main() {
  const {navigate} = useNavigation();
  return (
    <View style={styles.container}>
       <TouchableOpacity
        onPress={() =>
          navigate('Sub', {
            title: `${Date.now()}`,
          })
        }>
        <Text>go to Sub</Text>
       </TouchableOpacity>
    </View>
  );
}

function Sub() {
  return (
    <View style={styles.container}>
      <Text>sign up or login</Text>
    </View>
  )
}

// const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

// function DrawerNavigator() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Main" component={Main} />
//       <Drawer.Screen name="Sub" component={Sub} />
//     </Drawer.Navigator>
//   );
// }

// function Sub2() {
//   return (
//     <View style={styles.container}>
//       <Text>Sub2</Text>
//     </View>
//   )
// }

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen name="main" component={Main} />
      <Stack.Screen name="Sub" component={Sub} />
    </Stack.Navigator>
   );
 }

export default function(){
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}