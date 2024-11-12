import React from 'react';
import LoginScreen from './screens/loginscreen'; 

export default function App() {
  return <LoginScreen />;
}

const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
}

function LoginScreen() {
  return (
    <View>
      <Text>Login Screen</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
