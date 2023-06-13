import React, {useState} from "react";
import { StyleSheet, ImageBackground, View, Image, Text, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, TextInput, Alert, TouchableOpacity } from "react-native";
import photoBG from "../images/PhotoBG.png";
import userNoImage from "../images/user_no_image.png";
// import Icon from

export const RegistrationScreen = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onLogin = () => {
        Alert.alert("Credentials", `${name} + ${email} + ${password}`);
      };

    return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
            
            <ImageBackground source={photoBG} style={styles.imageBg}> 
                {/* style={styles.imageBg}   {width: '100%', height: '100%'} */}

                <View style={styles.formContainer}>
                    

                
                <View style={styles.imgBox}>
                    <View style={styles.iconBtn}>
                        <Image source={userNoImage} style={styles.avatar} />
                        <TouchableOpacity
                            // onPress={clearPhoto}
                            style={styles.iconBtn}
                        >
                            <Image 
                                style={styles.iconAddBtn}
                                source={require("../images/add.png")}
                            />
                        </TouchableOpacity>
                    </View>
                </View>



                <Text style={styles.registerTitle}>Реєстрація</Text>

                        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
                            <TextInput
                                value={name}
                                onChangeText={setName}
                                placeholder="Логін"
                                style={styles.input}
                                placeholderTextColor={"#BDBDBD"}
                            />
                            <TextInput
                                value={email}
                                onChangeText={setEmail}
                                placeholder="Адреса електронної пошти"
                                style={styles.input}
                                placeholderTextColor={"#BDBDBD"}
                            />
                            <TextInput
                                value={password}
                                onChangeText={setPassword}
                                placeholder="Пароль"
                                secureTextEntry
                                style={styles.input}
                                placeholderTextColor={"#BDBDBD"}
                            />

                            <Text
                                style={styles.showPasswordText}
                                // onPress={() => {
                                //     setIsShowPassword((prevState) => !prevState);
                                // }}
                            >Показати
                            {/* {isShowPassword ? "Показать" : "Скрыть"} */}
                            </Text>

                            <TouchableOpacity style={styles.registerBtn} onPress={onLogin}><Text style={styles.registerBtnText}>Зареєструватися</Text></TouchableOpacity>
                            
                            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                                <Text style={styles.doYouHaveAccount}>Вже є акаунт? Увійти</Text>
                            </TouchableOpacity>

                        </KeyboardAvoidingView>

                </View>
                
               
                </ImageBackground>       
        </View>
    </TouchableWithoutFeedback>
        
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // position: "relative",
        // justifyContent: "flex-end"
    },
    imageBg: {
        flex: 1,
        resizeMode: "cover",
        // justifyContent: "center",
        justifyContent: "flex-end",
        // width: 375,
        // height: 812,
        // position: "relative",

    },
    formContainer: {
        backgroundColor: "#FFFFFF",
        width: 375,
        height: 549,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        // alignItems: "center",
        justifyContent: "center",
        // position: "relative",
        // alignItems: "self-end",
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 92,
        paddingBottom: 78,
    },
    
    imgBox: {
        position: "absolute",
        left: "35%",
        top: "-11%",
        width: 120,
        height: 120,
        backgroundColor: "#F6F6F6",
        borderRadius: 16,
    },
    avatar: {
        width: "100%",
        height: "100%",
        borderRadius: 16,
    },
    iconBtn: {
        position: "absolute",
        left: "90%",
        top: "65%",
    },
    iconAddBtn: {
        // position: "absolute",
        width: 25,
        height: 25,
        // left: "88%",
        // top: -40,
        // backgroundColor: "#FFFFFF",
    },
    registerTitle: {
        color: "#212121",
        fontFamily: 'Roboto',
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: 30,
        lineHeight: 35.16,
        textAlign: "center",
        // marginTop: 92,
        marginBottom: 33,
    },
    input: {
        // width: 343,
        height: 50,
        paddingTop: 16,
        paddingBottom: 15,
        paddingLeft: 16,
        paddingRight:16,
        // paddingVertical: 15,
        // paddingHorizontal: 16,
        borderWidth: 1,
        backgroundColor: "#F6F6F6",
        borderRadius: 8,
        borderStyle: "solid",
        borderColor: "#E8E8E8",
        borderWidth: 1,
        marginBottom: 16,

        fontFamily: 'Roboto',
        fontStyle: "normal",
        fontSize: 16,
        color: "#212121",
        lineHeight: 19,
    },
    registerBtn: {
        // padding: "16px 32px",
        paddingVertical: 16,
        // // paddingHorizontal: 16,
        // paddingTop: 16,
        // paddingBottom: 16,
        marginTop: 27,

        backgroundColor: "#FF6C00",
        borderRadius: 100,
        height: 51,
        alignContent: "center",
    
    },
    showPasswordText: {
        fontFamily: 'Roboto',
        fontStyle: "normal",
        lineHeight: 19,
        fontSize: 16,
        fontWeight: 400,
        position: "absolute",
        top: 148,
        right: 16,
        color: "#1B4371",
    },
    registerBtnText: {
        textAlign: "center",
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontStyle: "normal",
        fontSize: 16,
        lineHeight: 19,
        color: "#FFFFFF",
    },
    doYouHaveAccount: {
        fontFamily: 'Roboto',
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: 19,
        marginTop: 16,
        textAlign: "center",
        color: "#1B4371",
    },
   
})


