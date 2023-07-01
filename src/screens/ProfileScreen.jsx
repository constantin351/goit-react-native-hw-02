import React, { useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";
// import { ScrollView } from "react-native-gesture-handler";
import * as ImagePicker from "expo-image-picker";

export const ProfileScreen = ({ navigation }) => {
  const [userPosts, setUserPosts] = useState([
    {
      photo: "",
      comment: "my comment here",
      id: "1",
      location: "Ukraine",
      locationName: "Kiev",
    },
    {
      photo: "",
      comment: "comment here",
      id: "2",
      location: "ukraine",
      locationName: "dnepr",
    },
  ]);

  const [userPhoto, setUserPhoto] = useState(null);
  // const { userId, userName, userPhoto } = useSelector((state) => state.auth); // берем из redux

  const handleAddImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Sorry, we have no access to your photo libriary!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (result.assets.length > 0) {
      setUserPhoto(result.assets[0]);
    }
  };

  const clearPhoto = () => {
    setUserPhoto(null);
  };


  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../images/photo-BG-2x.jpg")}
        style={styles.imageBg}
      >
        <View style={styles.wrapper}>
          <View style={styles.avatarBox}>
            {userPhoto ? (
              <View>
                <Image style={styles.avatar} 
                       source={{ uri: userPhoto.uri }}
                />
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
                onPress={handleAddImage}
                >
                  <Image
                    style={styles.iconAddDel}
                    source={require("../images/add_avatar_icon.png")}
                  />
                </TouchableOpacity>
              </View>
            )}
          </View>

          <Feather
            name="log-out"
            size={24}
            color={"#BDBDBD"}
            style={styles.logOut}
            onPress={() => navigation.navigate("Login")}
          />

          <Text style={styles.username}>Natali Romanova{/* {userName} */}</Text>

          {userPosts.length === 0 ? (
            <View style={styles.textWrapper}>
              <Text style={styles.text}>Немає публікацій</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("CreatePost")}
              >
                <Text style={styles.aside}>Створити публікацию?</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.postsList}>
              <FlatList
                data={userPosts}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <View>
                    <Image
                    //   source={{ uri: item.photo }}
                      style={styles.postImg}
                    />

                    <Text style={styles.title}>{item.comment}</Text>

                    <View style={styles.box}>
                      <View style={styles.commentWrapper}>
                        <TouchableOpacity
                          onPress={() =>
                            navigation.navigate("Comments", {
                              prevScreen: "Profile",
                              postId: item.id,
                              photo: item.photo,
                            })
                          }
                        >
                          <FontAwesome
                            name="comment"
                            size={24}
                            color="#FF6C00"
                            style={styles.commentIcon}
                          />
                          
                        </TouchableOpacity>

                        <Text style={styles.commentsCount}>
                          {/* {commentsCount[item.id] || 0} */}
                          15
                        </Text>

                        <TouchableOpacity
                        //onPress={() => navigation.navigate("Comments")}
                        >
                          <Feather
                            name="thumbs-up"
                            size={24}
                            color={"#FF6C00"}
                            style={styles.thumbUpLikeIcon}
                          />
                        </TouchableOpacity>

                        <Text style={styles.likesCount}>
                          {/* {likesCount[item.id] || 0} */}
                          135
                        </Text>
                      </View>

                      <View style={styles.wrapperLocation}>
                        <TouchableOpacity
                          onPress={() =>
                            navigation.navigate("Map", {
                              location: item.location,
                            })
                          }
                        >               

                          <Feather
                            name="map-pin"
                            size={24}
                            color={"#BDBDBD"}
                          />

                        </TouchableOpacity>

                        <TouchableOpacity
                          onPress={() =>
                            navigation.navigate("Map", {
                              location: item.location,
                            })
                          }
                        >
                          <Text style={styles.locationName}>{item.locationName}</Text>

                        </TouchableOpacity>

                      </View>
                    </View>
                  </View>
                )}
              />
            </View>
          )}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBg: {
    flex: 1,
    resizeMode: "cover",
  },
  wrapper: {
    marginTop: 147,
    paddingLeft: 16,
    paddingRight: 16,
    flex: 1,
    height: 549,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  avatarBox: {
    position: "absolute",
    // left: "35%",
    // top: "-14%",
    top: -60,
    left: "50%",
    transform: [{ translateX: -50 }],

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
  iconBtnDel: { position: "absolute", left: "85%", top: "65%" },
  iconDel: { width: 35, height: 35 },
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
  logOut: {
    position: "absolute",
    top: 22,
    right: 16,
  },
  username: {
    color: "#212121",
    fontFamily: "Roboto",
    fontSize: 30,
    fontWeight: 500,
    lineHeight: 35,
    textAlign: "center",
    marginTop: 92,
    marginBottom: 33,
  },
  textWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 32,
  },
  text: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: 16,
    color: "#b1aaaa",
    marginBottom: 12,
  },
  postsList: {
    marginBottom: 120,
    // paddingTop: 30,
    // marginTop: 30,
    paddingBottom: 46,
  },
  postImg: {
    height: 240,
    width: "100%",
    borderRadius: 8,
    //
    backgroundColor: "lightgrey",
    // marginTop: 32,
  },
  title: {
    marginTop: 8,
    marginBottom: 8,
    fontFamily: "Roboto",
    fontWeight: 500,
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },
  box: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 35,
  },
  commentWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  commentIcon: {
    marginRight: 6,
  },
  commentsCount: {
    fontFamily: "Roboto",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    fontStyle: "normal",
    marginRight: 24,
  },
  thumbUpLikeIcon: {
    marginRight: 6,
  },
  likesCount: {
    fontFamily: "Roboto",
    fontSize: 16,
    lineHeight: 19,
    fontStyle: "normal",
    color: "#212121",
  },
  wrapperLocation: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  locationName: {
    marginLeft: 4,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    textDecorationLine: "underline",
  },
});
