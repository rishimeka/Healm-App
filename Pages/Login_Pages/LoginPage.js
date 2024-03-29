import {useState} from "react";
import {Pressable, SafeAreaView, Text, TextInput, View} from "react-native";
import {styles} from "../../Styles/Styles";
import {StatusBar} from "expo-status-bar";
import {StackActions} from "@react-navigation/native";
import {checkUsername_password} from "../../User"
import {Ionicons} from "@expo/vector-icons";

const LoginPage = ({navigation}) => {
    const [userName, setUserName] = useState('');
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');
    function navigate(){
        if((userName !== "") && (password !== "")){
            if(checkUsername_password(userName, password) !== -1){
                navigation.navigate("HomePage");
            }
            else console.log("Invalid Username or Password")
            console.log(userName, password)
        }
        else console.log("Username or Password incomplete")
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.page_header_text}>Hi! Welcome back</Text>
                <Text style={styles.page_subheader_text}>Sign In to your account</Text>
                <View style={styles.text_input_box}>
                    <Ionicons style={styles.text_input_icons} size={30} name="mail-outline"></Ionicons>
                    <TextInput
                        style={styles.text_input_text}
                        keyboardType="email-address"
                        returnKeyType="done"
                        onChangeText={(userInputValue) => setUserName(userInputValue)}
                        placeholder={"Type your email"}/>
                </View>
                <View style={styles.text_input_box}>
                    <Ionicons style={styles.text_input_icons} size={30} name="lock-closed-outline"></Ionicons>
                    <TextInput
                        style={styles.text_input_text}
                        secureTextEntry={true}
                        returnKeyType="done"
                        placeholder={"Type your password"}
                        onChangeText={(userInputValue) => setPassword(userInputValue)}/>
                </View>
                <Pressable
                    style={{
                        alignSelf: "flex-end",
                        marginTop: 5,
                        marginRight: 5,
                        flexDirection: "row",}}
                    onPress={() => navigation.dispatch(
                        StackActions.replace('Login')
                    )}>
                    <Text style={{
                        color: '#F6AF71',
                        fontWeight: "500",
                        fontSize: 16,
                        marginTop: 5,
                    }}>Forgot password?</Text>
                </Pressable>
                <Pressable
                    style={styles.login_button}
                    onPressOut={() => navigate()}><Text style={styles.login_button_text}>Sign In</Text>
                </Pressable>

                <View style={styles.divider}>
                    <View style={styles.line}></View>
                    <Text style={styles.dividerText}>Or sign in with</Text>
                    <View style={styles.line}></View>
                </View>

                <Pressable
                    style={styles.login_with_app_button}
                    onPressOut={() => navigate()}>
                    <Ionicons style={styles.text_input_icons} size={30} name="logo-apple"></Ionicons>
                    <Text style={styles.login_button_text}>Sign In with Apple</Text>
                </Pressable>
                <Pressable
                    style={styles.login_with_app_button}
                    onPressOut={() => navigate()}>
                    <Ionicons style={styles.text_input_icons} size={30} name="logo-google"></Ionicons>
                    <Text style={styles.login_button_text}>Sign In with Google</Text>
                </Pressable>
                <Pressable
                    style={styles.new_user_signup_button}
                    onPressOut={() => navigation.navigate("Signup")}>
                    <Text style={styles.subheader_text}>Don’t have an account? </Text><Text style={styles.new_user_signup_button_text}>Sign Up</Text>
                </Pressable>
                <View style={{
                    alignItems: "center",
                    position: "absolute",
                    bottom: 10
                }}>
                <Text style={styles.subheader_text}> By using our services you are agreeing to our </Text>
                    <Pressable
                        style={styles.new_user_signup_button}>
                        <Text style={{
                            color: '#F6AF71',
                            fontWeight: "normal",
                            fontSize: 16,
                            marginTop: 5,
                        }}>Terms and Services</Text>
                </Pressable>
                </View>
            </View>
            <StatusBar style="dark"/>
        </SafeAreaView>
    );
}

export default LoginPage;
