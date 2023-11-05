import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import CText from './src/components/CText';
import {RootStackParamList} from './src/types/RootStackParamList';
import CButton from './src/components/CButton';
import ViewEntry from './src/screens/ViewEntry';
import {store} from './src/store';
import {Provider} from 'react-redux';

const RootStack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack.Navigator
          screenOptions={{
            headerTitle: props => <CText as="H3">{props.children}</CText>,
          }}>
          <RootStack.Group>
            <RootStack.Screen name="Home" component={HomeScreen} />
          </RootStack.Group>
          <RootStack.Group screenOptions={{presentation: 'modal'}}>
            <RootStack.Screen
              options={({navigation, route}) => ({
                title: `View Entry ${route.params.title}`,
                headerLeft: () => (
                  <CButton type="clear" onPress={() => navigation.goBack()}>
                    Close
                  </CButton>
                ),
              })}
              name="ViewEntry"
              component={ViewEntry}
            />
          </RootStack.Group>
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
