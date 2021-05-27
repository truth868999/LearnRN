import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import {useNavigation, NavigationContainer, NavigationHelpersContext} from '@react-navigation/native'
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
        navigate('Sub');
        }}>
        <Text>go to Sub</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity
        onPress={() => {
        navigate('Sub2');
        }}>
        <Text>go to Sub2</Text>
      </TouchableOpacity> */}
    </View>
  );
}

function Sub() {
  return (
    <View style={styles.container}>
      <Text>Sub</Text>
    </View>
  )
}

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Main" component={Main} />
      <Tab.Screen name="Sub" component={Sub} />
    </Tab.Navigator>
  );
}

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
    <Stack.Navigator>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Sub" component={Sub} />
      {/* <Stack.Screen name="Sub2" component={Sub2} /> */}
    </Stack.Navigator>
  );
}

export default function(){
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}