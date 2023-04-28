import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {AntDesign, Feather} from '@expo/vector-icons';
import {getUserData} from "../User";

const BloodSugarComponent = () => {
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <View style={{flexDirection: "row"}}>
                    <AntDesign name="heart" size={18} color="#EB4B62" />
                    <Text style={styles.heartRateText}>Blood Sugar</Text>
                </View>
                <Text style={styles.timeText}>{getUserData().patient.patient1.heartCategoryInfo.bloodSugar.lastRecordedDate + " " + getUserData().patient.patient1.heartCategoryInfo.bloodSugar.lastRecordedTime}</Text>
                <Text style={styles.numberText}>{getUserData().patient.patient1.heartCategoryInfo.bloodSugar.value}<Text style={styles.bpmText}>{" " + getUserData().patient.patient1.heartCategoryInfo.bloodSugar.units}</Text></Text>
        </View>
            <View style={styles.rightContainer}>
                <Text style={styles.trendText}>Trend Summary</Text>
                <Text style={styles.summaryText}>{getUserData().patient.patient1.heartCategoryInfo.bloodSugar.trendSummery}</Text>
            </View>
            <Feather name="chevron-right" size={30} color="#848484" style={styles.arrowIcon} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        height: 125,
        backgroundColor: '#FFE8ED',
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 20,
        paddingHorizontal: 20,
    },
    leftContainer: {
        flex: 1,
    },
    heartRateText: {
        fontSize: 16,
        color: '#EB4B62',
        marginLeft: 10,
    },
    timeText: {
        fontSize: 16,
        color: '#848484',
        marginTop: 5,
    },
    bpmText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#848484',
    },
    numberText: {
        color: 'black',
        fontSize: 32,
        fontWeight: '800',
        flexDirection: 'row',
        alignItems: 'center',
    },
    smallText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#848484',
    },
    trendText: {
        color: 'black',
        fontSize: 16,
        marginTop: 8,
    },
    summaryText: {
        color: '#848484',
        fontSize: 16,
        marginTop: 4,
        width: 175
    },

});

export default BloodSugarComponent;
