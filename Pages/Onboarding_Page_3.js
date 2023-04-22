import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { styles } from "../Styles/Styles";

const Onboarding_Page_1 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <Image
                style={styles.image}
                source={require('./../assets/Header-3.png')}
                contentFit={"cover"}
            />
            <Text style={styles.header_text}>{'Organize Everything'}</Text>
            <Text style={styles.body_text}>{'All of the irregularities, prescriptions, appointments. Everything that is important to you and your patient, you can access in one place.'}</Text>
            <View style={styles.icon_container}>
                <View style={styles.icon_progress}>
                    <Ionicons name="remove" size={40} color='#AAA8AD'/>
                    <Ionicons name="remove" size={40} color='#AAA8AD'/>
                    <Ionicons name="remove" size={40} color='#000000'/>
                </View>
                <View style={styles.icon_arrow}>
                    <Ionicons name="arrow-forward-circle-sharp" size={80} color='#FFBF70'/>
                </View>
            </View>
        </View>
    );
}
export default Onboarding_Page_1;
