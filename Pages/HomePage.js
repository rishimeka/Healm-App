import {Pressable, SafeAreaView, Text, TextInput, View} from "react-native";
import {styles} from "../Styles/Styles";
import HeartRateComponent from "../Componenets/HeartRateComponenet";
import BloodSugarComponent from "../Componenets/BloodSugarComponenet";
import BloodPressureComponent from "../Componenets/BloodPressureComponent";
import useHealthData from "../hooks/useHealthData";

const HomePage = ({navigation}) => {
    const {steps, distance, flights} = useHealthData();
    console.log(`Steps: ${steps} | Distance: ${distance}m | Flights: ${flights}`);
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text style={{fontSize: 35,
                    fontWeight: "bold",
                    alignSelf: "flex-start",
                    marginLeft: 5,
                    marginTop: 10,
                    marginBottom: 10,
                }}>Heart</Text>
                <Pressable onPress={() => navigation.navigate('HeartRatePage')}>
                    <HeartRateComponent />
                </Pressable>
                <BloodSugarComponent />
                <BloodPressureComponent />
            </View>
        </SafeAreaView>
    );
}

export default HomePage;
