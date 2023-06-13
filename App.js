import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useFonts} from 'expo-font';
//
import { RegistrationScreen } from './src/components/RegistrationScreen';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Black': require('./src/assets/fonts/Roboto-Black.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Open up App.js to start working on your app!</Text> */}
      <RegistrationScreen />

        
      {/* </RegistrationScreen> */}
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Roboto-Black', 
    fontSize: 30,
  }
});



// удалить

{/* <TouchableWithoutFeedback onPress={handleSubmit}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/image/photo-BG-2x.jpg")}
          style={styles.image}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            {visible && (
              <AnimatedLoader
                visible={visible}
                overlayColor="rgba(255,255,255,0.75)"
                animationStyle={styles.lottie}
                speed={1}
              >
                <Text>Загрузка...</Text>
              </AnimatedLoader>
            )}

            <View
              style={{
                ...styles.formWrapper,

                ...Platform.select({
                  ios: {
                    marginTop: isShowKeyboard ? 195 : 219,
                  },
                  android: {
                    marginTop: isShowKeyboard ? -100 : 0,
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
                        source={require("../../assets/image/del-avatar.icon.png")}
                      />
                    </TouchableOpacity>
                  </View>
                ) : (
                  <View style={styles.iconBtn}>
                    <TouchableOpacity onPress={handleAddImage}>
                      <Image
                        style={styles.icon}
                        source={require("../../assets/image/add.png")}
                      />
                    </TouchableOpacity>
                  </View>
                )}
              </View>
              <Text style={styles.title}>Регистрация</Text>

              <View
                style={{
                  ...styles.form,
                  paddingBottom: isShowKeyboard ? 32 : 45,
                }}
              >
                <View style={styles.inputuserName}>
                  <TextInput/>
                </View>
                
                <View style={styles.inputMail}>
                  <TextInput/>
                </View>

                <View style={styles.inputPassword}>

                  <TextInput/>

                  <Text
                    style={styles.showPass}
                    onPress={() => {
                      setIsShowPassword((prevState) => !prevState);
                    }}
                  >
                    {isShowPassword ? "Показать" : "Скрыть"}
                  </Text>
                </View>

                <TouchableOpacity>
                  <Text style={styles.buttonText}>Зарегистрироваться</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                  <Text style={styles.aside}>Уже есть аккаунт? Войти</Text>
                </TouchableOpacity>

              </View>
            </View>

          </KeyboardAvoidingView>

        </ImageBackground>

      </View> */}


    
    