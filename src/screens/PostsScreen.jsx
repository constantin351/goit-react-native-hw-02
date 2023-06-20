import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Feather, SimpleLineIcons, AntDesign } from "@expo/vector-icons";

export const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headWrapper}>
        <Text style={styles.title}>Публікації</Text>

        <TouchableOpacity
          style={styles.logoutIcon}
          // onPress={signOut}
        >
          <Feather name="log-out" size={24} color="#BDBDBD" />
        </TouchableOpacity>
      </View>

      <View style={styles.postsWrapper}>
        <View style={styles.userInfo}>
          <View style={styles.imgBox}>
            <Image
              style={styles.avatar}
              source={require("../images/avatar.png")}
              // source={{ uri: photo }}
            />
          </View>

          <View style={styles.user}>
            <Text style={styles.name}>Natali Romanova</Text>
            <Text style={styles.email}>email@example.com</Text>
          </View>
        </View>
      </View>

      <View style={styles.tabBarWrapper}>
        <TouchableOpacity style={styles.gridButton}>
          <SimpleLineIcons name="grid" size={24} color="#212121" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.addPostButton}
          activeOpacity={0.8}
          //   onPress={handleSubmit}
        >
          <AntDesign name="plus" size={13} color="#FFFFFF" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.userButton}>
          <AntDesign name="user" size={24} color="#212121" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 15,
    // paddingLeft: 16,
    // paddingRight: 16,
    // paddingTop: 55,
    // paddingBottom: 11,
    boxShadow: "0px 0.5px 0px rgba(0, 0, 0, 0.3)",
    // shadowOpacity
  },
  title: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: 17,
    fontWeight: 500,
    lineHeight: 22,
    letterSpacing: -0.408,
    color: "#212121",
    textAlign: "center",
    marginRight: 109,
  },
  headWrapper: {
    display: "flex",
    flexDirection: "row",
    // marginTop: 27,
    alignItems: "center",
    justifyContent: "end",
    paddingBottom: 11,
    paddingTop: 55,
    paddingRight: 10,
    paddingLeft: 10,
    // shadowColor: "#000",
    // shadowOffset: {
    //     width: 0,
    //     height: 1,
    // },
    // shadowOpacity: 0.18,
    // shadowRadius: 1.00,
    // elevation: 1,
  },
  logoutIcon: {},
  postsWrapper: {
    height: 641,
    borderTopColor: "#000000",
    borderTopWidth: 1,
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
    // shadowColor: "#000",
    // shadowOffset: {
    //     width: 0,
    //     height: 1,
    // },
    // shadowOpacity: 0.18,
    // shadowRadius: 1.00,
    // elevation: 1,
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
    color: "#212121",
  },

  tabBarWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 9,
    paddingBottom: 34,
    // paddingRight: 89,
    // paddingLeft: 90,
  },
  gridButton: {
    marginRight: 39,
  },
  addPostButton: {
    width: 70,
    height: 40,
    backgroundColor: "#FF6C00",
    borderRadius: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 39,
  },
  userButton: {},
});