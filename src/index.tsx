import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import {useNavigation, NavigationContainer, NavigationHelpersContext, DrawerActions, TabRouter,} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

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
      <Text>Main</Text>
      <TouchableOpacity
        onPress={() => {
          navigate('Sub', {
            title: 'from Main',
          });
        }}>
        <Text>go to sub</Text>
      </TouchableOpacity>
    </View>
  );
}

function Sub() {
  const {dispatch} = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Sub</Text>
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
  return(
    <Stack.Navigator
      screenOptions={({route}) => ({
        title: route.params && route.params.title,
    })}>
      <Stack.Screen name="Main" component={Main} />
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