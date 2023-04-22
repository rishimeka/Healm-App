import { StatusBar } from 'expo-status-bar';
import {Text, View, Image, Pressable} from 'react-native';
import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { styles } from "../Styles/Styles";

const Onboarding_Page_1 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <Image
                style={styles.image}
                source={require('./../assets/Header-2.png')}
                contentFit={"cover"}
            />
            <Text style={styles.header_text}>{'Curated Analysis'}</Text>
            <Text style={styles.body_text}>{'Our system will keep track of your patient, and will learn their health limits. Personalized preventive care, courtesy of our cutting edge analysis.'}</Text>
            <View style={styles.icon_container}>
                <View style={styles.icon_progress}>
                    <Ionicons name="remove" size={40} color='#AAA8AD'/>
                    <Ionicons name="remove" size={40} color='#000000'/>
                    <Ionicons name="remove" size={40} color='#AAA8AD'/>
                </View>
                <View style={styles.icon_arrow}>
                    <Pressable onPressOut={() => navigation.replace("Onboarding_3")}>
                        <Ionicons name="arrow-forward-circle-sharp" size={80} color='#FFBF70'/>
                    </Pressable>
                </View>
            </View>
            <Pressable style={styles.Bottom_Text_Container}>
                <Text style={styles.body_text}>Already have an account?</Text>
            </Pressable>
        </View>
    );
}
export default Onboarding_Page_1;
