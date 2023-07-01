import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";
import { FontAwesome, MaterialCommunityIcons, Ionicons, Feather } from "@expo/vector-icons";


export const CreatePostsScreen = ({navigation}) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [cameraRef, setCameraRef] = useState(null);
  const [photo, setPhoto] = useState("");
  const [comment, setComment] = useState("");
  const [locationName, setLocationName] = useState("");
  const [location, setLocation] = useState(null);
  // const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    const requestCameraPermission = async() => {
      const {status} = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();
      if (status !== "granted") {
        console.log("No access to camera")
      } else {
        console.log("Camera permission granted!")
      }
    };

    requestCameraPermission();

    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setLocation(coords);
    })();
  }, []);


  const deletePhoto = () => {
    setPhoto("");
    setComment("");
    setLocationName("");
  };
  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
    <KeyboardAvoidingView>
      <View>
        <ScrollView >
          <Camera style={styles.camera} ref={setCameraRef}>
            {photo && (
              <View style={styles.previewPhotoContainer}>
                <Image
                  source={{ uri: photo }}
                  style={styles.previewPhoto}
                />
              </View>
            )}
            <TouchableOpacity 
                 style={styles.icon} 
                 onPress={async () => {
                  if (cameraRef) {
                    const { uri } = await cameraRef.takePictureAsync();
                    await MediaLibrary.createAssetAsync(uri);
                    setPhoto(uri);
                  }
                }}
            >
              {/* <FontAwesome name="camera" size={20} color="#BDBDBD" /> */}
               <MaterialCommunityIcons
                  name="camera"
                  size={24}
                  color={"#BDBDBD"}
                />
            </TouchableOpacity>
          </Camera>

          {photo ? (
            <Text style={styles.text}>Редагувати фото</Text>
          ) : (
            <Text style={styles.text}>Завантажити фото</Text>
          )}

          <View style={styles.formWrapper}>
            <TextInput
              placeholderTextColor={"#BDBDBD"}
              placeholder="Назва..."
              style={styles.inputPhotoName}
              value={comment}
              onChangeText={(value) => setComment(value)}
              onFocus={() => setIsShowKeyboard(true)}
            ></TextInput>

            <TextInput
              placeholderTextColor={"#BDBDBD"}
              placeholder="Місцевість..."
              style={styles.inputLocation}
              value={locationName}
              onChangeText={(value) => setLocationName(value)}
              onFocus={() => setIsShowKeyboard(true)}
            ></TextInput>

            <TouchableOpacity
              style={styles.locationBtn}
              onPress={() =>
                navigation.navigate("Map", {
                  location: location,
                  // location: location.coords,
                })}>

            <Feather
              name="map-pin"
              size={24}
              color={"#BDBDBD"}
              style={styles.mapPinIcon}
            />
            
            </TouchableOpacity>
          </View>

          {photo ? (
            <TouchableOpacity
              style={styles.buttonActive}
              activeOpacity={0.8}
              // onPress={sendPhoto}
            >
              <Text style={styles.buttonTextActive}>Опублікувати</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.8}
              // onPress={sendPhoto}
            >
              <Text style={styles.buttonText}>Опублікувати</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity
            style={styles.deleteBtn}
            activeOpacity={0.8}
            onPress={deletePhoto}
          >
            <Feather name="trash-2" size={24} color="#BDBDBD" />

          </TouchableOpacity>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  </View>
  </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    // paddingVertical: 32,
  },
  camera: {
    height: 240,
    borderRadius: 8,
    marginTop: 32,
    alignItems: "center",
    justifyContent: "center",
    // 
    backgroundColor: "#F6F6F6",
  },
previewPhotoContainer: {
    position: "absolute",
    // marginTop: 32,
    marginHorizontal: 16,
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
previewPhoto: {
    // position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  icon: {
    width: 60,
    height: 60,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    // backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    zIndex: 1,
  },
text: {
    marginTop: 8,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
    marginBottom: 32,
  },
  formWrapper: {
    marginBottom: 32,
  },
  inputPhotoName: {
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "Roboto",
    fontStyle: "normal",
    color: "#212121",
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    paddingTop: 15,
    paddingBottom: 15,
  },
  inputLocation: {
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "Roboto",
    fontStyle: "normal",
    color: "#212121",
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 26,
    marginTop: 16,
  },
locationBtn: {
    position: "absolute",
    top: "68%",
    width: 24,
    height: 24,
},
buttonActive: {
    backgroundColor: "#FF6C00",
    height: 51,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 120,
  },
  buttonTextActive: {
    color: "#FFFFFF",
  },
button: {
    backgroundColor: "#F6F6F6",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 19,
    height: 51,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 120,
  },
  buttonText: {
    color: "#BDBDBD",
  },
  deleteBtn: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 22,
    width: 70,
    height: 40,
    borderRadius: 100,
    backgroundColor: "#F6F6F6",
  }, 
});  