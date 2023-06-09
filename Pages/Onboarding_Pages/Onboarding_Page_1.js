import { StatusBar } from 'expo-status-bar';
import {Text, View, Image, Pressable} from 'react-native';
import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { styles } from "../../Styles/Styles";
import {shouldThrowAnErrorOutsideOfExpo} from "expo/build/environment/validatorState";

const Onboarding_Page_1 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <Image
                style={styles.image}
                source={require('./../../assets/Header-1.png')}
                contentFit={"cover"}
            />
            <Text style={styles.header_text}>{'Comprehensive Data'}</Text>
            <Text style={styles.body_text}>{'Data that is easy to understand, at a glance. You select what you need to see, we tailor the experience to whats important for you.'}</Text>
            <View style={styles.icon_container}>
                <View style={styles.icon_progress}>
                    <Ionicons name="remove" size={40} color='#000000'/>
                    <Ionicons name="remove" size={40} color='#AAA8AD'/>
                    <Ionicons name="remove" size={40} color='#AAA8AD'/>
                </View>
                <View style={styles.icon_arrow}>
                    <Pressable onPressOut={() => navigation.replace("Onboarding_2")}>
                        <Ionicons name="arrow-forward-circle-sharp" size={80} color='#FFBF70'/>
                    </Pressable>
                </View>
            </View>
            <Pressable style={styles.Bottom_Text_Container} onPressOut={() => navigation.navigate("Login")}>
                <Text style={styles.body_text}>Already have an account?</Text>
            </Pressable>
        </View>
    );
}
export default Onboarding_Page_1;
