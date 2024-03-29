import React, {useState} from "react";
import {Dimensions, Pressable, SafeAreaView, Text, TextInput, View} from "react-native";
import {styles} from "../../Styles/Styles";
import {getUserData} from "../../User";
import {LineChart} from "react-native-chart-kit";
import {FontAwesome, MaterialIcons} from '@expo/vector-icons';

const BloodPressurePage = ({navigation}) => {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text style={{fontSize: 35,
                    fontWeight: "bold",
                    alignSelf: "flex-start",
                    marginLeft: 5,
                    marginVertical: 10,
                }}>Blood Pressure</Text>
                <View style={styles.headerLine}/>
                <View style={{backgroundColor: "white", height: 300, borderRadius: 20}}>
                    <View style={{flexDirection: "row", alignItems: 'center'}}>
                        <View>
                            <Text style={styles.heartRateText}>Blood Pressure</Text>
                            <Text style={styles.numberText}>{getUserData().patient.patient1.heartCategoryInfo.bloodPressure.value}<Text style={styles.bpmText}>{" " + getUserData().patient.patient1.heartCategoryInfo.bloodPressure.units}</Text></Text>
                            <Text style={styles.smallText}>Average Blood Pressure for Today</Text>
                        </View>
                        <Pressable style={styles.detailsButton}>
                            <Text style={{}}>Details</Text>
                            <MaterialIcons name="chevron-right" size={25} color="black" />
                        </Pressable>
                    </View>
                    <LineChart
                        data={getUserData().patient.patient1.heartCategoryInfo.bloodPressure.history}
                        width={Dimensions.get("screen").width*0.9}
                        height={175}
                        chartConfig={{
                            backgroundColor: "#ffffff",
                            backgroundGradientFrom: "#ffffff",
                            backgroundGradientTo: "#ffffff",
                            decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 1) => '#ffffff',
                            labelColor: (opacity = 1) => '#000000',
                            style: {
                                borderRadius: 0
                            },
                            propsForDots: {
                                r: "0",
                                strokeWidth: "0",
                                stroke: "#ffffff"
                            }
                        }}
                        bezier
                        style={{
                            marginVertical: 8,
                            borderRadius: 20
                        }}
                    />
                </View>
                <View style={{backgroundColor: "white", width: Dimensions.get("screen").width*0.9, borderRadius: 20, marginTop: 25, padding: 25}}>
                    <Text style={styles.bpmText}>Trend Data</Text>
                    <Text style={styles.trendDataText}>Grandma had <Text style={styles.trendDataTextHighLight}>1 irregularity</Text> today at 2:34 PM. This is in line for her weekly trend;
                        <Text style={styles.trendDataTextHighLight}> 2 irregularities</Text> yesterday, <Text style={styles.trendDataTextHighLight}>1 irregularity</Text> on Monday,<Text style={styles.trendDataTextHighLight}> 2 irregularities</Text> on sunday.</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default BloodPressurePage;