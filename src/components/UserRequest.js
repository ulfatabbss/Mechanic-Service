import { StyleSheet, Text, View,StatusBar, FlatList,TouchableOpacity,Image, Dimensions,Modal } from 'react-native'
import React,{useContext,useEffect, useState} from 'react'
import Spinner from 'react-native-loading-spinner-overlay';
import Header from './Header'
import COLORS from '../content/color';
import { AuthContext } from '../navigation/AuthProvider';
const UserRequest = ({navigation}) => {
  const [uRequest,setURequest]=useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modelData, setModelData] = useState('');
  const {userInfo} = useContext(AuthContext);
  const [isLoading,setloding]=useState(true)
const detail=()=>{
  var axios = require('axios');
var data = '';

var config = {
  method: 'get',
  url: 'https://abdulrauf.laraartisan.com/api/repairingRequest/15',
  headers: { 
    'Accept': 'application/json', 
    'Content-Type': 'application/json', 
    'Authorization': `Bearer ${userInfo.access_token}`
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data.data));
setModelData(response.data.data)
})
.catch(function (error) {
  console.log(error);
});
}

  useEffect(()=>{
    setloding(true)
    detail();
    var axios = require('axios');
    var data = '';
    
    var config = {
      method: 'get',
      url: 'https://abdulrauf.laraartisan.com/api/repairingRequest/list',
      headers: { 
        'Accept': 'application/json', 
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${userInfo.access_token}`
      },
      data : data
    };
    axios(config)
    .then(function (response) {
      // console.log(JSON.stringify(response.data));
      setURequest(JSON.stringify(response.data.data));
      console.log(JSON.stringify(response.data.data))
      setloding(false)
    })
    .catch(function (error) {
      console.log(error);
      setloding(false)
    });
},[userInfo]);
const show=(props)=>{
  setModalVisible(!modalVisible);
  // setTitle(props.t)
  // setImage(props.img)

}
const Card = ({title}) => {
  // const img=data.images[0].url;
  return (
    <TouchableOpacity
      onPress = {()=>show()}>
      <View style={styles.card}>
      <View style={styles.mView}>
                    <Text style={styles.modalText}>Problem</Text>
                    {/* <Text style={styles.text}>{modelData?.category?.title}</Text> */}
              </View>
              <View style={{marginRight:20}}>
                    <Text style={{color:'black'}}>View</Text>
              </View>
      </View>
    </TouchableOpacity>
  );
};
  return (
    <View style={{flex:1,marginBottom:60}}>
        <Spinner visible={isLoading} />
         <StatusBar
        animated={true}
        backgroundColor="#5b18b4"/>
      <Header/>
      <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Image resizeMode='contain' style={{height:150,width:150,borderRadius:75,marginVertical:10,borderColor:'black',borderWidth:2,marginTop:50}}
               source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSELaf7ywCfL83F4AdhECQYGKD3HSWznuXjVxHV7IeZ&s'}}
               />
              <View style={styles.mView}>
                    <Text style={styles.modalText}>Categories    :</Text>
                    <Text style={styles.text}>{modelData?.category?.title}</Text>
              </View>
              <View style={styles.mView}>
                    <Text style={styles.modalText}>User               :</Text>
                    <Text style={styles.text}>{modelData?.customer?.name}</Text>
              </View>
              <View style={styles.mView}>
                    <Text style={styles.modalText}>Customer ID  :</Text>
                    <Text style={styles.text}>{modelData?.customer?.id}</Text>
              </View>
              <View style={styles.mView}>
                    <Text style={styles.modalText}>Problem         :</Text>
                    <Text style={styles.text}>{modelData?.title}</Text>
              </View>
              <View style={styles.mView}>
                    <Text style={styles.modalText}>Discription         :</Text>
                    <Text style={styles.text}>{modelData?.description}</Text>
              </View>
              {/* <Text style={styles.modalText}>Discription</Text>
              <Text numberOfLines={9} style={styles.text} >{modelData?.description}</Text> */}
              <TouchableOpacity
                style={{height:50,width:50,bottom:10,position:'absolute',borderWidth:5,borderColor:'green',borderRadius:25,alignItems:'center',justifyContent:'center'}}
                onPress={() => setModalVisible(!modalVisible)}>
               <Image style={{height:20,width:20}} source={{uri:'https://img.icons8.com/fluency/2x/checkmark.png'}}/>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      <Text style={styles.heading}>All request</Text>
      <View style={{flex:1}}>
      <FlatList
        data={uRequest.slice(0,7)}
       keyExtractor={item => item.id}
        renderItem={({item}) => {
          return <Card title={item.title} />;
        }}
      />
       </View>
    </View>
  )
}

export default UserRequest

const styles = StyleSheet.create({
  card: {
    height:80,alignSelf:'center',justifyContent:'space-between',alignItems:'center', 
    backgroundColor: COLORS.white,
    width:Dimensions.get("window").width-40,borderWidth:1,borderColor:COLORS.primary,
    marginHorizontal: 2,flexDirection:'row',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
  },
  text:{
    fontSize:20,color:'black',fontFamily:"FontAwesome",paddingHorizontal:10
  },heading:{
    fontSize:35,alignSelf:'center',fontWeight:'bold',color:'#000',padding:15,textTransform:'capitalize'
  },icon:{
    height:30,width:30,alignSelf:'center',marginRight:15
  }, modalView: {
    backgroundColor:COLORS.white,
    borderRadius: 10,
    height: '70%',
    width:'95%',
    alignItems: 'center',
    elevation: 5,borderWidth:2,borderColor:COLORS.primary
  }, 
   centeredView: {
    flex: 1,
backgroundColor:'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    alignSelf: 'center',alignItems:'center'
  },
  modalText: {
    color:'black',
    fontSize: 24,textTransform:'capitalize',fontFamily:"Poppins-Bold"
  },
  modelHeading:{
    fontSize:25,alignSelf:'center',fontWeight:'bold',color:'#000',padding:5,textTransform:'capitalize'
  },
  mView:{
    width: '90%',flexDirection:'row',alignItems:'center',
  }
})