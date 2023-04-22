import {Dimensions, StyleSheet} from "react-native";
export const styles = StyleSheet.create({
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
        bottom: 70,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 50,
    },
    Bottom_Text_Container:{
        position: "absolute",
        bottom: 30,
        justifyContent: "space-between"
    },
});