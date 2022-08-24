// Example of Image Picker in React Native
// https://aboutreact.com/example-of-image-picker-in-react-native/
 
// Import React
import React, {useState} from 'react';
// Import required components
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform,
  PermissionsAndroid,
  TextInput,
  Dimensions,Alert, KeyboardAvoidingView
} from 'react-native';

import {
  launchCamera,
  launchImageLibrary
} from 'react-native-image-picker';
import COLORS from '../content/color';
 
const EditProfile = ({route}) => {
  const {navigation}=route.params;
  const [isLoading,setloding]=useState(true)
  const [filePath, setFilePath] = useState('');
  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };
 
  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else return true;
  };
 
  const captureImage = async (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      videoQuality: 'low',
      durationLimit: 30, //Video max duration in seconds
      saveToPhotos: true,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, (response) => {
        console.log('Response = ', response);
        if (response.didCancel) {
          alert('User cancelled camera picker');
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          alert('Camera not available on device');
          return;
        } else if (response.errorCode == 'permission') {
          alert('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
          alert(response.errorMessage);
          return;
        }
        console.log('base64 -> ', response.assets.base64);
        console.log('uri -> ', response.assets.uri);
        console.log('width -> ', response.assets.width);
        console.log('height -> ', response.assets.height);
        console.log('fileSize -> ', response.assets.fileSize);
        console.log('type -> ', response.assets.type);
        console.log('fileName -> ', response.assets.fileName);
        setFilePath(response);
      });
    }
  };
 
  const chooseFile = (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, (response) => {
      console.log('Response = ', response.assets[0].uri);
      setFilePath(response.assets[0]);
      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
      console.log('uri -> ', response.uri);
      // setFilePath(response.assets[0]);
    });
  };
 const handleSubmit=()=>{

  Alert.alert(
    'Your profile edit successfully...'
 )
 navigation.navigate('Profile')
 }
  return (


  
    <SafeAreaView style={{flex: 1,backgroundColor:'#fff'}}>
          <KeyboardAvoidingView>
      <View style={styles.container}>
        <Image
          source={{uri:filePath.uri}}
          style={styles.imageStyle}
        />
<View style={{flexDirection:'row',marginBottom:50}}>
<TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={() => captureImage('photo')}>
          <Text style={styles.textStyle}>
            Camera
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={() => chooseFile('photo')}>
          <Text style={styles.textStyle}>Choose</Text>
        </TouchableOpacity>
</View>
      <TextInput placeholderTextColor={'black'}  placeholder='Name' style={styles.textinput}/>
      <TextInput  placeholderTextColor={'black'} placeholder='Email' style={styles.textinput}/> 
       <TextInput  placeholderTextColor={'black'} placeholder='Password' style={styles.textinput}/>
       <TextInput  placeholderTextColor={'black'} placeholder='Conform-Password' style={styles.textinput}/>
       <TextInput  placeholderTextColor={'black'} placeholder='CINC' style={styles.textinput}/>
       <TouchableOpacity style={styles.button} onPress={handleSubmit}>
<Text style={{fontSize:20,color:'#fff',fontWeight:'bold'}}>Submit</Text>
      </TouchableOpacity>   
      </View>
     
      </KeyboardAvoidingView>
    </SafeAreaView>
 
  );
};
 
export default EditProfile;
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,position:'absolute',width:Dimensions.get('window').width,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    fontSize:8,fontWeight:'bold',
    padding: 10,
    color: 'white',
    textAlign: 'center',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor:COLORS.primary,
    padding: 3,
    marginVertical: 10,
    width: 60,borderRadius:10,marginHorizontal:10
  },
  imageStyle: {
    width: 120,
    height: 120,borderRadius:60,marginTop:50,
    margin: 5,borderWidth:1,borderColor:'gray'
  },
  textinput:{
    width:Dimensions.get('window').width-40,
    height:60,backgroundColor:'white',borderRadius:10,elevation:10,marginVertical:10,paddingHorizontal:20,borderColor:COLORS.primary,borderWidth:2
  }, 
   button: { 
     alignSelf:'center',
    top:20,height:60,bottom:10,
    backgroundColor:COLORS.primary,
    width:200,justifyContent:'center'
    ,alignItems:'center',
    borderRadius:10}
});