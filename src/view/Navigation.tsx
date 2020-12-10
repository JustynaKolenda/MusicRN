import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BasicView from './BasicView';

const Nav = createStackNavigator();

const Navigation = () => (
    <NavigationContainer>
        <Nav.Navigator> 
            <Nav.Screen name="BasicView" component={BasicView} />
        </Nav.Navigator>
    </NavigationContainer>
    
)

export default Navigation