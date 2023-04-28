import {useState} from "react";
import {Pressable, SafeAreaView, Text, TextInput, View} from "react-native";
import {styles} from "../Styles/Styles";
import {StatusBar} from "expo-status-bar";
import {StackActions} from "@react-navigation/native";
import {Ionicons} from "@expo/vector-icons";
import HeartRateComponent from "../Componenets/HeartRateComponenet";
import BloodSugarComponent from "../Componenets/BloodSugarComponenet";
import BloodPressureComponent from "../Componenets/BloodPressureComponent";
const HomePage = ({navigation}) => {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text style={{fontSize: 35,
                    fontWeight: "bold",
                    alignSelf: "flex-start",
                    marginLeft: 5,
                    marginBottom: 10,
                }}>Heart</Text>
                <HeartRateComponent />
                <BloodSugarComponent />
                <BloodPressureComponent />
            </View>
        </SafeAreaView>
    );
}

export default HomePage;