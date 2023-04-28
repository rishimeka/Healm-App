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
        bottom: 100,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 45,
    },
    Bottom_Text_Container:{
        position: "absolute",
        bottom: 50,
        justifyContent: "space-between"
    },
    text_input_box: {
        backgroundColor: 'white',
        width: Dimensions.get("screen").width*0.8,
        height: 65,
        marginTop: 20,
        borderRadius: 50,
        flexDirection: "row",
    },
    text_input_box_with_error: {
        borderColor: 'red',
        borderWidth: 2,
        backgroundColor: 'white',
        width: Dimensions.get("screen").width*0.8,
        height: 65,
        marginTop: 20,
        borderRadius: 15,
        flexDirection: "row",
    },
    text_input_text:{
        color: 'black',
        fontSize: 16,
        fontWeight: "normal",
        alignSelf: "center",
        margin: 10,
        flexDirection: "row",
        overflow: "hidden",
        maxWidth: 250,
        width: 250,
    },
    text_input_icons: {
        alignSelf: "center",
        marginLeft: 15,
        marginRight: 10
    },
    login_button: {
        width: Dimensions.get("screen").width*0.8,
        height: 65,
        marginTop: 30,
        borderRadius: 50,
        backgroundColor: "#FFDCB2",
        justifyContent: "center",
        alignItems: "center"
    },
    login_with_app_button: {
        width: Dimensions.get("screen").width*0.8,
        height: 65,
        marginBottom: 20,
        borderRadius: 50,
        backgroundColor: "#ffffff",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    login_button_text: {
        color: 'black',
        fontWeight: "500",
        fontSize: 18,
    },
    new_user_signup_button: {
        alignSelf: "center",
        marginBottom: 15,
        flexDirection: "row",
    },
    new_user_signup_button_text: {
        color: '#F6AF71',
        fontWeight: "normal",
        fontSize: 16,
    },
    subheader_text: {
        color: 'black',
        fontWeight: "normal",
        fontSize: 16,
    }, page_header_text: {
        paddingTop: 40,
        fontSize: 35,
        fontWeight: "bold",
        alignSelf: "flex-start"
    },
    page_subheader_text: {
        paddingTop: 10,
        fontSize: 20,
        fontWeight: "300",
        alignSelf: "flex-start",
        paddingBottom: 20
    },
    divider: {
        marginVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    line: {
        height: 1,
        width: Dimensions.get("screen").width*0.25,
        backgroundColor: '#E2E8F0',
    },
    dividerText:{
        marginHorizontal: 10,
        fontSize: 16,
        fontWeight: '300',
        color: "#808D9E"
    },
    heartRateText: {
        fontSize: 18,
        color: '#EB4B62',
        marginLeft: 18,
        marginTop: 20,
        fontWeight: 700,
    },
    bpmText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000000',
    },
    numberText: {
        color: 'black',
        fontSize: 25,
        fontWeight: '800',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
        marginLeft: 18,
    },
    smallText: {
        marginVertical: 0,
        marginLeft: 18,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#848484',
    },
    detailsButton: {
        backgroundColor: '#FFDCB2',
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 100,
        height: 35,
        marginLeft: 40,
    },
    iconWrapper: {
        position: 'absolute',
        right: 0,
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
    }, headerLine: {
        height: 1,
        width: Dimensions.get("screen").width*0.9,
        backgroundColor: '#E2E8F0',
        marginTop: 3,
        marginBottom: 10,
    }, trendDataText:{
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'normal',
        color: '#000000',
    },
    trendDataTextHighLight:{
        color: '#EB4B62',
    }
});