//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {createBottomTabNavigation} from '@react-navigation/bottom-tabs'
import MainScreen from '../Screens/MainScreen';

const Tab = createBottomTabNavigation();
// create a component
const AppNavigation = () => {
    return (
        <Tab.Navigation>
            <Tab.Screen name='MainScreen' Component={MainScreen} />
        </Tab.Navigation>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default AppNavigation;
