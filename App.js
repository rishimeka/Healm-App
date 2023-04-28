import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import Navigator from "./Navigator";
import MainContainer from "./Pages/MainContainer";
import HomePage from "./Pages/HomePage";


export default function App() {
    return <Navigator/>
    //return <HomePage/>
}


/*
Packages installed:

npm install @react-navigation/bottom-tabs 

*/