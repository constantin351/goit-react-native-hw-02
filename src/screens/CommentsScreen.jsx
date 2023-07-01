import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
  FlatList,
  Image,
  Keyboard,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export const CommentsScreen = () => {
  const [comment, setComment] = useState("");
  const [allComments, setAllComments] = useState([
    { comment: "comment_1", id: "1", postedDate: "01.01.2020" },
    { comment: "comment_2", id: "2", postedDate: "05.05.2023" },
    { comment: "comment_3", id: "3", postedDate: "07.07.2023" },
    { comment: "comment_3", id: "4", postedDate: "07.07.2023" },
  ]);
  const [commentsCount, setCommentsCount] = useState(0);

  //   const userName = useSelector((state) => state.auth.userName); // из redux
  //   const avatar = useSelector((state) => state.auth.photo); // из redux

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <KeyboardAvoidingView>
          <View style={styles.postWrapper}>

            {/* <ScrollView> */}
            <Image
              //   source={{ uri: photo }}
              source={require("../images/post_photo.jpg")}
              style={styles.postedImage}
            />

            <SafeAreaView style={styles.wrapper}>
              <FlatList
                data={allComments}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <View style={styles.wrapperComment}>
                    <Image
                      style={styles.avatar}
                      source={require("../images/avatar_ellipse.png")}
                      //   source={{ uri: avatar }}
                    />
                    <View style={styles.commentContainer}>
                      <Text style={styles.userComment}>{item.comment}</Text>
                      <Text style={styles.postDate}>{item.postedDate}</Text>
                    </View>
                  </View>
                )}
              />
            </SafeAreaView>
            {/* </ScrollView> */}

            <View style={styles.inputWrapper}>
              <TextInput
                placeholderTextColor={"#BDBDBD"}
                placeholder="Коментувати..."
                style={styles.input}
                value={comment}
                onChangeText={(value) => setComment(value)}
                onBlur={() => {Keyboard.dismiss()}}
              ></TextInput>

              <TouchableOpacity
                style={styles.button}
                activeOpacity={0.8}
                // onPress={createPost}
              >
                <AntDesign name="arrowup" size={20} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    // justifyContent: "space-between",
    paddingHorizontal: 16,
    // paddingTop: 32,
    // paddingBottom: 16,
  },
  postedImage: {
    height: 240,
    width: "100%",
    borderRadius: 8,
    // marginBottom: 32,
    marginTop: 32,
    resizeMode: "cover",
  },
  wrapper: {
    height: 323,
    alignItems: "flex-end",
    // marginBottom: 7,
    // width: 343,
    // width: "100%",
    paddingTop: 32,
    paddingBottom: 7,
  },
  wrapperComment: {
    display: "flex",
    flexDirection: "row",
    // width: 299,
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 50,
    marginRight: 16,
  },
  commentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 24,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    borderColor: "rgba(0, 0, 0, 0.03)",
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderTopRightRadius: 6,
    width: 290,
  },
  userComment: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: 13,
    lineHeight: 18,
    color: "#212121",
    marginBottom: 8,
  },
  postDate: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: 10,
    lineHeight: 11.72,
    color: "#BDBDBD",
    textAlign: "right",
  },
  inputWrapper: {
    marginBottom: 16,
  },
  input: {
    position: "relative",
    width: "100%",
    padding: 16,
    height: 50,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 18,
    color: "#212121",
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    // borderColor: "#BDBDBD",
  },
  button: {
    position: "absolute",
    // left: "89%",
    right: 8,
    top: 8,
    // marginHorizontal: 25,
    backgroundColor: "#FF6C00",
    height: 34,
    width: 34,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
