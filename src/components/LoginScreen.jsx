import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Alert
} from "react-native";

 
export const LoginScreen = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState({ email: "", password: "" });
  const [isFocusInput, setIsFocusInput] = useState({
    email: false,
    password: false,
  });
  const [isShowPassword, setIsShowPassword] = useState(true);

  const handleSubmit = () => {
    Alert.alert("Credentials", `${state.email} + ${state.password}`);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../images/photo-BG-2x.jpg")}
          style={styles.image}
        >
          <KeyboardAvoidingView
            // behavior={Platform.OS === "android" ? "height" : "padding"}
          >
            <View
              style={{
                ...styles.formWrapper,

                ...Platform.select({
                //   ios: {
                //     marginTop: isShowKeyboard ? 456 : 0,
                //   },
                  'android': {
                    marginTop: isShowKeyboard ? 273 : 323,
                    // paddingBottom: isShowKeyboard ? 32 : 111,
                    // paddingTop: isShowKeyboard ? 32 : 32,
                    // marginBottom: isShowKeyboard ? 200 : 0,
                  },
                }),
              }}
            >
              <Text
                style={{
                  ...styles.title,
                    // marginTop: isShowKeyboard ? 24 : 0,
                }}
              >
                Увійти
              </Text>

              <View
                style={{
                  ...styles.form,
                //   paddingBottom: isShowKeyboard ? 32 : 70,
                }}
              >
                <View style={styles.inputMail}>
                  <TextInput
                    style={{
                      ...styles.input,
                      borderColor: isFocusInput.email ? "#FF6C00" : "#E8E8E8",
                      backgroundColor: isFocusInput.email
                        ? "#FFFFFF"
                        : "#F6F6F6",
                    }}
                    textAlign={"left"}
                    placeholderTextColor={"#BDBDBD"}
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    value={state.email}
                    placeholder="Адреса електронної пошти"

                    onFocus={() => {
                      setIsShowKeyboard(true);
                        setIsFocusInput({
                          ...isFocusInput,
                          email: true,
                        });
                    }}

                    onBlur={() => {
                        setIsShowKeyboard(false);
                      setIsFocusInput({
                        ...isFocusInput,
                        email: false,
                      });
                    }}

                    onChangeText={(value) =>
                      setState((prevState) => ({
                        ...prevState,
                        email: value,
                      }))
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
                    textAlign={"left"}
                    placeholderTextColor={"#BDBDBD"}
                    textContentType="password"
                    value={state.password}
                    secureTextEntry={isShowPassword}
                    placeholder="Пароль"
                    onFocus={() => {
                      setIsShowKeyboard(true),
                        setIsFocusInput({
                          ...isFocusInput,
                          password: true,
                        });
                    }}
                    onBlur={() => {
                        setIsShowKeyboard(false);
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
                    style={styles.showPass}
                    onPress={() => {
                      setIsShowPassword((prevState) => !prevState);
                    }}
                  >
                    {isShowPassword ? "Показати" : "Сховати"}
                  </Text>
                </View>

                <TouchableOpacity
                  style={styles.button}
                  activeOpacity={0.8}
                  onPress={handleSubmit}
                >
                  <Text style={styles.buttonText}>Увійти</Text>
                </TouchableOpacity>

                <TouchableOpacity
                //   onPress={() => navigation.navigate("Registration")}
                >
                  <Text style={styles.aside}>
                    Немає акаунту?{" "}
                    <Text style={styles.asideRegistreText}>
                      Зареєструватися
                    </Text>
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
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  formWrapper: {
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 144,
    backgroundColor: "#FFFFFF",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    justifyContent: "center",
  },
  title: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: 30,
    fontWeight: 500,
    lineHeight: 35,
    letterSpacing: 0.16,
    color: "#212121",
    textAlign: "center",
  },
  input: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    paddingTop: 16,
    paddingBottom: 15,
    paddingLeft: 16,
    paddingRight: 16,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    height: 50,
    borderRadius: 8,
  },
  inputMail: {
    marginTop: 33,
  },
  inputPassword: {
    marginTop: 16,
  },
  showPass: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    lineHeight: 19,
    fontSize: 16,
    position: "absolute",
    top: 16,
    // left: 260,
    right: 15,
    color: "#1B4371",
  },
  button: {
    marginTop: 43,
    backgroundColor: "#FF6C00",
    height: 61,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: "#FFFFFF",
  },
  aside: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    lineHeight: 19,
    marginTop: 16,
    textAlign: "center",
    color: "#1B4371",
  },
  asideRegistreText: {
    textDecorationLine: "underline",
  },
});