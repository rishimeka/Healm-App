import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';
import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

const Onboarding_Page_1 = ({navigation}) => {
    const [fontsLoaded] = useFonts({
        'Urbanist-Regular': require('./../assets/Fonts/Urbanist-Regular.ttf'),
        'Urbanist-Medium': require('./../assets/Fonts/Urbanist-Medium.ttf'),
    });
    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <Image
                style={styles.image}
                source={require('./../assets/Header-1.png')}
                contentFit={"cover"}
            />
            <Text style={styles.header_text}>Comprehensive Data</Text>
            <Text style={styles.body_text}>
                Data that is easy to understand, at a glance.
                You select what you need to see, we tailor the experience to whats important for you.
            </Text>
            <View style={styles.icon_container}>
                <View style={styles.icon_progress}>
                    <Ionicons name="remove" size={40} color='#000000'/>
                    <Ionicons name="remove" size={40} color='#AAA8AD'/>
                    <Ionicons name="remove" size={40} color='#AAA8AD'/>
                </View>
                <View style={styles.icon_arrow}>
                    <Ionicons name="arrow-forward-circle-sharp" size={80} color='#FFBF70'/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F0F7',
        alignItems: "center",
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 2
    },
    header_text: {
        paddingTop: 40,
        fontSize: 35,
        fontWeight: 400,
    },
    body_text: {
        paddingTop: 20,
        paddingHorizontal: 25,
        fontSize: 20,
        textAlign: "center",
        fontWeight: "normal",
    },
    icon_arrow:{
        alignItems: "flex-end"
    },
    icon_progress:{
        alignItems: "flex-start",
        flexDirection: "row",
        flex: 1,
    },
    icon_container:{
        position: "absolute",
        bottom: 50,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 50,
    }

});
export default Onboarding_Page_1;