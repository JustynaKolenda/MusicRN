import React from 'react';
import {  NavigationContainer,  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BasicView from './BasicView';
import styled from 'styled-components';
import optionsNavigation from '../variables/optionsNavigation';

const Nav = createStackNavigator();


const Navigation = () => (
   
    <NavigationContainer >
        <Nav.Navigator  mode='modal'> 
            <Nav.Screen name="Massive reload" options={optionsNavigation.MusicCafle} component={BasicView} />
        </Nav.Navigator>
    </NavigationContainer>
    
)

export default Navigation