import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity } from "react-native";
import React,{useContext} from 'react'
import { AuthContext } from "../navigation/AuthProvider";
const Profile = ({navigation}) => {
  const {logout,userInfo} = useContext(AuthContext);
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.titleBar}>
        </View>

        <View style={{ alignSelf: "center" }}>
            <View style={styles.profileImage}>
                <Image source={{uri:'https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'}} style={styles.image} resizeMode="center"></Image>
            </View>
            <View style={styles.dm}>
                {/* <MaterialIcons name="chat" size={18} color="#DFD8C8"></MaterialIcons> */}
            </View>
            <View style={styles.active}></View>
            <View style={styles.add}>
                {/* <Ionicons name="ios-add" size={48} color="#DFD8C8" style={{ marginTop: 6, marginLeft: 2 }}></Ionicons> */}
            </View>
        </View>

        <View style={styles.infoContainer}>
            <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>{userInfo.user.name}</Text>
            <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>{userInfo.user.email}</Text>
        </View>
        <TouchableOpacity style={{alignSelf:"center",height:30,width:100,backgroundColor:'#5b18b4',borderRadius:10,margin:20,alignItems:"center",justifyContent:"center"}} 
        onPress={()=>navigation.navigate("EditProfile",{navigation:navigation})}>
<Text style={{fontSize:10,color:'#fff',fontWeight:'bold'}}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height:50,width:100,backgroundColor:'#5b18b4',borderRadius:10,margin:50,alignItems:"center",justifyContent:"center"}} 
        onPress={()=>navigation.navigate("CardView")}>
<Text style={{fontSize:20,color:'#fff',fontWeight:'bold'}}>Payments</Text>
        </TouchableOpacity>
    </ScrollView>
</SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({  container: {
  flex: 1,
  backgroundColor: "#FFF"
},
text: {
  fontFamily: "HelveticaNeue",
  color: "#52575D"
},
image: {
  flex: 1,
  height: undefined,
  width: undefined
},
titleBar: {
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: 24,
  marginHorizontal: 16
},
subText: {
  fontSize: 12,
  color: "#AEB5BC",
  textTransform: "uppercase",
  fontWeight: "500"
},
profileImage: {
  width: 200,
  height: 200,
  borderRadius: 100,
  overflow: "hidden"
},
dm: {
  backgroundColor: "#41444B",
  position: "absolute",
  top: 20,
  width: 40,
  height: 40,
  borderRadius: 20,
  alignItems: "center",
  justifyContent: "center"
},
active: {
  backgroundColor: "#34FFB9",
  position: "absolute",
  bottom: 28,
  left: 10,
  padding: 4,
  height: 20,
  width: 20,
  borderRadius: 10
},
add: {
  backgroundColor: "#41444B",
  position: "absolute",
  bottom: 0,
  right: 0,
  width: 60,
  height: 60,
  borderRadius: 30,
  alignItems: "center",
  justifyContent: "center"
},
infoContainer: {
  alignSelf: "center",
  alignItems: "center",
  marginTop: 16
},
statsContainer: {
  flexDirection: "row",
  alignSelf: "center",
  marginTop: 32
},
statsBox: {
  alignItems: "center",
  flex: 1
},
mediaImageContainer: {
  width: 180,
  height: 200,
  borderRadius: 12,
  overflow: "hidden",
  marginHorizontal: 10
},
mediaCount: {
  backgroundColor: "#41444B",
  position: "absolute",
  top: "50%",
  marginTop: -50,
  marginLeft: 30,
  width: 100,
  height: 100,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 12,
  shadowColor: "rgba(0, 0, 0, 0.38)",
  shadowOffset: { width: 0, height: 10 },
  shadowRadius: 20,
  shadowOpacity: 1
},
recent: {
  marginLeft: 78,
  marginTop: 32,
  marginBottom: 6,
  fontSize: 10
},
recentItem: {
  flexDirection: "row",
  alignItems: "flex-start",
  marginBottom: 16
},
activityIndicator: {
  backgroundColor: "#CABFAB",
  padding: 4,
  height: 12,
  width: 12,
  borderRadius: 6,
  marginTop: 3,
  marginRight: 20
}, 
viewKs: {
  justifyContent: 'space-between',
  flexDirection: 'row',
  marginHorizontal:40,
  marginVertical:10,borderWidth:1,padding:10,borderRadius:10
},
ptext:{
  fontSize:16,
  fontWeight:'500',
color:'#000'
}
});