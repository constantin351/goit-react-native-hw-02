import React, {useState} from "react";
import {
  StyleSheet,
  ImageBackground,
  View,
  Image,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  Alert,
  TouchableOpacity,
} from "react-native";
import photoBG from "../images/photo-BG-2x.jpg";


export const RegistrationScreen = () => {
  const [photo, setPhoto] = useState(null);
  // const [visible, setVisible] = useState(false);

  const [isKeyboardShown, setIsKeyboardShown] = useState(false);

  const [state, setState] = useState({
    userName: "",
    email: "",
    password: "",
    imageUri: null,
  });

  const [isFocusInput, setIsFocusInput] = useState({
    userName: false,
    email: false,
    password: false,
  });

  const [isShowPassword, setIsShowPassword] = useState(true);

  const handleSubmit = () => {
    Alert.alert("Credentials", `${state.userName} + ${state.email} + ${state.password}`);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground source={photoBG} style={styles.imageBg}>
          <KeyboardAvoidingView
            // behavior={Platform.OS === "android" ? "height" : "padding"}
          >
            <View
              style={{
                ...styles.formContainer,
                ...Platform.select({
                //   ios: {
                //     marginTop: isKeyboardShown ? 195 : 219,
                //   },
                  'android': {
                    marginTop: isKeyboardShown ? 147 : 263,
                    // marginBottom: isKeyboardShown ? 291 : 0,

                  },
                }),
              }}
            >
              <View style={styles.imgBox}>
                {photo ? (
                  <View>
                    <Image style={styles.avatar} source={{ uri: photo.uri }} />
                    <TouchableOpacity
                      onPress={clearPhoto}
                      style={styles.iconBtnDel}
                    >
                      <Image
                        style={styles.iconDel}
                        source={require("../images/delete_avatar_icon.png")}
                      />
                    </TouchableOpacity>
                  </View>
                ) : (
                  <View style={styles.iconBtn}>
                    <TouchableOpacity
                    // onPress={handleAddImage}
                    >
                      <Image
                        style={styles.iconAddDel}
                        source={require("../images/add_avatar_icon.png")}
                      />
                    </TouchableOpacity>
                  </View>
                )}
              </View>

              <Text style={styles.registerTitle}>Реєстрація</Text>

              <View
                style={{
                  //   ...styles.form,
                  paddingBottom: isKeyboardShown ? 32 : 45,
                }}
              >
                <View style={styles.inputName}>
                  <TextInput
                    style={{
                      ...styles.input,
                      borderColor: isFocusInput.userName
                        ? "#FF6C00"
                        : "#E8E8E8",
                      backgroundColor: isFocusInput.userName
                        ? "#FFFFFF"
                        : "#F6F6F6",
                    }}
                    placeholderTextColor={"#BDBDBD"}
                    textContentType="name"
                    value={state.userName}
                    placeholder="Логін"
                    onFocus={() => {
                      setIsKeyboardShown(true);
                        setIsFocusInput({
                          ...isFocusInput,
                          userName: true,
                        });
                    }}
                    onBlur={() => {
                        setIsKeyboardShown(true);
                      setIsFocusInput({
                        ...isFocusInput,
                        userName: false,
                      });
                    }}
                    onChangeText={(value) =>
                      setState((prevState) => ({
                        ...prevState,
                        userName: value,
                      }))
                    }
                  />
                </View>

                <View style={styles.inputEmail}>
                  <TextInput
                    style={{
                      ...styles.input,
                      borderColor: isFocusInput.email ? "#FF6C00" : "#E8E8E8",
                      backgroundColor: isFocusInput.email
                        ? "#FFFFFF"
                        : "#F6F6F6",
                    }}
                    placeholderTextColor={"#BDBDBD"}
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    value={state.email}
                    placeholder="Адреса електронної пошти"
                    onFocus={() => {
                      setIsKeyboardShown(true);
                        setIsFocusInput({
                          ...isFocusInput,
                          email: true,
                        });
                    }}
                    onBlur={() => {
                    setIsKeyboardShown(true);
                      setIsFocusInput({
                        ...isFocusInput,
                        email: false,
                      });
                    }}
                    onChangeText={(value) =>
                      setState((prevState) => ({ ...prevState, email: value }))
                    }
                  />
                </View>

                <View style={styles.inputPassword}>
                  <TextInput
                    style={{
                      ...styles.input,
                      borderColor: isFocusInput.password
                        ? "#FF6C00"
                        : "#E8E8E8",
                      backgroundColor: isFocusInput.password
                        ? "#FFFFFF"
                        : "#F6F6F6",
                    }}
                    placeholderTextColor={"#BDBDBD"}
                    textContentType="password"
                    value={state.password}
                    secureTextEntry={isShowPassword}
                    placeholder="Пароль"
                    onFocus={() => {
                      setIsKeyboardShown(true),
                        setIsFocusInput({
                          ...isFocusInput,
                          password: true,
                        });
                    }}
                    onBlur={() => {
                        setIsKeyboardShown(true);
                      setIsFocusInput({
                        ...isFocusInput,
                        password: false,
                      });
                    }}
                    onChangeText={(value) =>
                      setState((prevState) => ({
                        ...prevState,
                        password: value,
                      }))
                    }
                  />

                  <Text
                    style={styles.showPasswordText}
                    onPress={() => {
                      setIsShowPassword((prevState) => !prevState);
                    }}
                  >
                    {isShowPassword ? "Показати" : "Сховати"}
                  </Text>
                </View>

                <TouchableOpacity
                  style={{
                    ...styles.registerBtn,
                    marginTop: isKeyboardShown ? 30 : 43,
                  }}
                  onPress={handleSubmit}
                >
                  <Text style={styles.registerBtnText}>Зареєструватися</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                  <Text style={styles.doYouHaveAccount}>
                    Вже є акаунт? Увійти
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
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
    paddingTop: 92,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 10,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    justifyContent: "center",

    // width: 375,     ????
    // height: 549,     ????

    // alignItems: "center",
    // position: "relative",
    // alignItems: "self-end",
  },
  imgBox: {
    position: "absolute",
    left: "35%",
    top: "-15%",
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  avatar: {
    borderRadius: 16,
    width: "100%",
    height: "100%",
  },
  iconBtn: {
    position: "absolute",
    left: "90%",
    top: "65%",
  },
  iconAddDel: {
    // position: "absolute",
    width: 25,
    height: 25,
    // left: "88%",
    // top: -40,
    // backgroundColor: "#FFFFFF",
  },
  iconBtnDel: { position: "absolute", left: "85%", top: "65%" },
  iconDel: { width: 35, height: 35 },
  registerTitle: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: 30,
    lineHeight: 35.16,
    letterSpacing: 0.16,
    color: "#212121",
    fontWeight: 500,
    textAlign: "center",
    // marginTop: 92,
    // marginBottom: 33,
  },
  input: {
    // width: 343,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    paddingLeft: 16,
    paddingTop: 16,
    paddingBottom: 15,
    paddingRight: 16,
    borderWidth: 1,
    height: 50,
    borderRadius: 8,
    // paddingVertical: 15,
    // paddingHorizontal: 16,
    backgroundColor: "#F6F6F6",
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    // marginBottom: 16,
  },
  inputName: {
    marginTop: 33,
  },
  inputEmail: {
    marginTop: 16,
  },
  inputPassword: {
    marginTop: 16,
  },
  showPasswordText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    lineHeight: 19,
    fontSize: 16,
    position: "absolute",

    top: 16,
    right: 16,

    fontWeight: 400,
    color: "#1B4371",
  },
  registerBtn: {
    backgroundColor: "#FF6C00",
    height: 51,
    borderRadius: 100,
    alignContent: "center",
    justifyContent: "center",
    // padding: "16px 32px",
    paddingVertical: 16,
    // // paddingHorizontal: 16,
    // paddingTop: 16,
    // paddingBottom: 16,
    marginTop: 43,
  },
  registerBtnText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    lineHeight: 19,
    fontWeight: 400,
    fontSize: 16,
    color: "#FFFFFF",
    textAlign: "center",
  },
  doYouHaveAccount: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 19,
    fontWeight: 400,
    textAlign: "center",
    color: "#1B4371",
    marginTop: 16,
  },
});


