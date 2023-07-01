import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Feather } from "@expo/vector-icons";
// import { useSelector } from "react-redux";

export const PostsScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([
    {
      photo: "",
      comment: "my comment here",
      id: "1",
      location: "Ukraine",
      locationName: "Kiev",
    },
    {
      photo: "",
      comment: "my comment here",
      id: "2",
      location: "ukraine",
      locationName: "dnepr",
    },
  ]);
  const [commentsCount, setCommentsCount] = useState(0);
  // const { userName, userEmail, photo } = useSelector((state) => state.auth);

  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <View style={styles.imgBox}>
          <Image
            style={styles.avatar}
            source={require("../images/avatar.png")}
            // source={{ uri: photo }}
          />
        </View>

        <View style={styles.user}>
          <Text style={styles.name}>Natali Romanova{/* {userName} */}</Text>
          <Text style={styles.email}>email@example.com{/* {userEmail} */}</Text>
        </View>
      </View>

      {posts.length === 0 && (
        <View style={styles.noPostsTextWrapper}>
          <Text style={styles.noPostsText}>Немає публікацій</Text>
          <TouchableOpacity onPress={() => navigation.navigate("CreatePost")}>
            <Text style={styles.createPostLink}>Створити публікацію?</Text>
          </TouchableOpacity>
        </View>
      )}

      {posts && (
        <FlatList
          data={posts}
          keyExtractor={(item, index) => {
            index.toString();
          }}
          renderItem={({ item }) => (
            <View>
              <Image
                // source={{ uri: item.photo }}
                style={styles.post}
              />

              <Text style={styles.title}>{item.comment}</Text>

              <View style={styles.box}>
                <View style={styles.commentWrapper}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("Comments", {
                        prevScreen: "Home",
                        postId: item.id,
                        photo: item.photo,
                      })
                    }
                  >
                    <Feather name="message-circle" size={24} color="#BDBDBD" />
                  </TouchableOpacity>
                  <Text style={styles.commentsCount}>
                    {commentsCount[item.id] || 0}
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
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 15,
    // paddingTop: 55,
    // paddingBottom: 11,
  },
  userInfo: {
    flexDirection: "row",
    marginTop: 32,
    height: 60,
    alignItems: "center",
    marginBottom: 32,
  },
  imgBox: {
    width: 60,
    height: 60,
    marginRight: 8,
    borderRadius: 16,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },
  name: {
    fontFamily: "Roboto",
    fontWeight: 700,
    fontStyle: "normal",
    fontSize: 13,
    lineHeight: 15,
    color: "#212121",
  },
  email: {
    fontFamily: "Roboto",
    fontWeight: 400,
    fontStyle: "normal",
    fontSize: 11,
    lineHeight: 13,
    color: "#212121CC",
  },
  noPostsTextWrapper: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  noPostsText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: 16,
    color: "#b1aaaa",
    marginBottom: 14,
  },
  createPostLink: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: 16,
    color: "#1B4371",
    textDecorationLine: "underline",
  },
  post: {
    width: "100%",
    height: 240,
    borderRadius: 8,
    //
    backgroundColor: "#b1aaaa",
  },
  title: {
    marginTop: 8,
    marginBottom: 8,
    fontFamily: "Roboto",
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
    marginBottom: 34,
  },
  commentWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  commentsCount: {
    fontFamily: "Roboto",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
    marginLeft: 6,
  },
  wrapperLocation: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  locationName: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    textDecorationLine: "underline",
    marginLeft: 4,
  },
});
