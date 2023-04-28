import {Text, View, Image, Pressable} from 'react-native';
import React from "react";
import { Ionicons } from '@expo/vector-icons';
import { styles } from "../../Styles/Styles";

const SettingsPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header_text}>{"Settings Page"}</Text>
    </View>
  );
};

export default SettingsPage;
