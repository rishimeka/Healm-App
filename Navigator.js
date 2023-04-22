import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding_Page_1 from './Pages/Onboarding_Page_1';
import Onboarding_Page_2 from "./Pages/Onboarding_Page_2";
import Onboarding_Page_3 from "./Pages/Onboarding_Page_3";
import Signup from "./Pages/Signup";

const Stack = createNativeStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: 'transparent',
                        title: '',
                    },
                    headerTintColor: '#F2EFEA',
                    headerTransparent: true,
                    headerTitle: 'Healm App',
                    headerTitleStyle: {
                        fontWeight: '800',
                        fontSize: 26,
                        color: '#F2EFEA',
                        marginTop: 5,
                        marginLeft: '5%',
                        marginBottom: 30,
                    },
                    headerLeftContainerStyle: {
                        paddingLeft: 20,
                        paddingTop: 20,
                    },
                }}
                initialRouteName="Onboarding_1">
                <Stack.Screen
                    name="Onboarding_1"
                    component={Onboarding_Page_1}
                />
                <Stack.Screen
                    name="Onboarding_2"
                    component={Onboarding_Page_2}
                />
                <Stack.Screen
                    name="Onboarding_3"
                    component={Onboarding_Page_3}
                />
                <Stack.Screen
                    name="Signup"
                    component={Signup}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigator;