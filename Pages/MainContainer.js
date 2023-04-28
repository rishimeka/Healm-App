import React from "react";
import { View, Text } from "react-native-web";
import { Ionicons } from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
import SummaryPage from "./Main_Pages/SummaryPage";
import CalendarPage from "./Main_Pages/CalendarPage";
import DataPage from "./Main_Pages/DataPage";
import SettingsPage from "./Main_Pages/SettingsPage";
import SignupPage from "./Signup_Pages/SignupPage";
import Onboarding_Page_1 from "./Onboarding_Pages/Onboarding_Page_1";
import { styles } from "../Styles/Styles";

// Screen Names
const summaryName = "Summary";
const calendarName = "Calendar";
const dataName = "Data";
const settingsName = "Settings";

const Tab = createBottomTabNavigator();

const MainContainer = () => {
  return (
    <Tab.Navigator
      initialRouteName={summaryName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case summaryName:
              iconName = focused ? "heart" : "heart-outline";
              break;
            case calendarName:
              iconName = focused ? "calendar-outline" : "calendar-outline";
              break;
            case dataName:
              iconName = focused ? "analytics" : "analytics-outline";
              break;
            case settingsName:
              iconName = focused ? "cog-outline" : "cog-outline";
              break;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#F6AF71",
        headerShown: false,
      })}
    >
      <Tab.Screen name={summaryName} component={SummaryPage} />
      <Tab.Screen name={calendarName} component={CalendarPage} />
      <Tab.Screen name={dataName} component={DataPage} />
      <Tab.Screen name={settingsName} component={SettingsPage} />
    </Tab.Navigator>
  );
};

export default MainContainer;
