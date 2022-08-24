import React, { useState,useContext } from 'react'
import { Dimensions, ImageBackground,StatusBar,Image,View,KeyboardAvoidingView,StyleSheet,Text,Radio,Alert} from 'react-native'
import styled from 'styled-components/native'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Container = styled.ScrollView`
	flex: 1;
    background-color: #000;
`


const FormWrapper = styled.View`
    width: 100%;
    justifyContent: center;
    alignItems: center;
    height: 60%;
`

const Form = styled.View`
height: 500px;
    width: 90%;
    background-color: black;
    flex-direction: column;
    border-radius: 20px;
    padding: 20px;
    justify-content: center;
`

const SubmitForm = styled.TouchableOpacity`
    width: 95%;
    height: 50px;
    color: white;
    border-radius: 10px;
    border: none;
    justify-content: center;
    align-items: center
    margin-top: 20px;
    background-color:#5b18b4;
`

const Input = styled.TextInput`
    width: 95%;
    height: 50px;
    border: none;
    padding: 10px;
    border-radius: 15px;
    background-color: #333333;
    color: white;
    margin-top: 10px;
`

const ButtonText = styled.Text`
	font-size: 15px;
	font-weight: bold;
    padding-left: 5px;
    color: white;
`
const SignInText = styled.Text`
font-size: 30px;
font-weight: bold;
color: white;
margin: 10px;
text-align: left;
`

const NewToNetflixTextWrapper = styled.TouchableOpacity`
    width: 100%;
`

const NewToNetflix = styled.Text`
font-size: 15px;
font-weight: 500;
text-align: center;
color: #ccc;
margin: 15px;
text-align: center;
`

const Overlay = styled.View`
    background-color: '#00000080';
    flex: 1;
`

const HalfInputWrapper = styled.View`
    flex-direction:row;
    justify-content: center;
    align-items: center;
`

const HalfInput = styled.TextInput`
width: 45.8%;
    height: 50px;
    border: none;
    padding: 10px;
    border-radius: 15px;
    background-color: #333333;
    color: white;
    margin-right: 5px;
    margin-top: 10px;  
`

const InputsWrapper = styled.View` 
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

var radio_props = [
    {label: 'User', value: 'user' },
    {label: 'Mechanic', value: 'mechanic' }
  ];
const Register = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confrom, setconfrom] = useState('');
    const [role, setRole] =  useState('user');
    const [userInfo, setUserInfo] = useState({});

    const register = (name,email,password,confrom,role) => {
        console.log(role,'rooooooooooooool')
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        var formdata = new FormData();
        formdata.append("name", name);
        formdata.append("email",email);
        formdata.append("password",password);
        formdata.append("password_confirmation",confrom);
        formdata.append("role", role);
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: formdata,
          redirect: 'follow'
        };
        
        fetch("https://abdulrauf.laraartisan.com/api/auth/register", requestOptions)
          .then(response => response.text())
          .then(result => {
            let userInfo = result.data;
            setUserInfo(userInfo);
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            navigation.navigate('Login')
            Alert.alert(
                'Welcom Register successfull...'
             )
            console.log(result)}
            )
          .catch(error => {
            Alert.alert(
                `Register error ${error}`
             )
            console.log('error', error)});
      };
    return (
        <>
            <StatusBar style="light"/>
            <Container>
            {/* <Spinner visible={isLoading} /> */}
                <ImageBackground source={require('../assests/back.png')} resizeMode="cover" style={{ flex: 1, height: Dimensions.get("screen").height }}>
                    <Overlay>
                    <View style={{justifyContent:'center',alignSelf:'center',marginTop:100}}>
                            <Image resizeMode='contain' style={{height:100,width:100,borderRadius:50}}  source={require('../assests/logo.jpg')}>

                            </Image>
                        </View>
                        <FormWrapper>
                            <Form>
                                <KeyboardAvoidingView style={{ width: '100%' }}>
                                    <SignInText>Sign Up</SignInText>
                                    <InputsWrapper>
                                      <Input placeholderTextColor='grey' placeholder="Name" value={name} onChangeText={text => setName(text)} />
                                      {/* <Input placeholderTextColor='grey' placeholder="Role" value={role} onChangeText={text => setRole(text)} /> */}

                                        <Input placeholderTextColor='grey' placeholder="Enter your email" value={email} onChangeText={(validate) => setEmail(validate)} />
                                        <Input placeholderTextColor='grey' placeholder="Password" value={password} secureTextEntry onChangeText={(text) => setPassword(text)} />
                                        <Input placeholderTextColor='grey' placeholder="confrom Password" value={confrom} secureTextEntry onChangeText={(text) => setconfrom(text)} />
                                       <View style={{margin:15}}>
                                       <RadioForm
          radio_props={radio_props}
          labelHorizontal={true}
          formHorizontal={true}
         buttonColor={'#5b18b4'}
         labelColor={'#fff'}
         selectedButtonColor={'#5b18b4'}
        labelStyle={{color:'#fff'}}
        initial={0}
          onPress={(value) => {setRole(value)}}
        />
                                       </View>
                                      
                                        <SubmitForm  onPress={() => {register(name,email,password,confrom,role)}}><ButtonText>{"Sign Up"}</ButtonText></SubmitForm>
                                        <NewToNetflixTextWrapper activeOpacity={0.5} onPress={() => navigation.navigate("Login")}><NewToNetflix>Already have an account ? Sign In</NewToNetflix></NewToNetflixTextWrapper>
                                        
                                    </InputsWrapper>
                                </KeyboardAvoidingView>
                            </Form>
                        </FormWrapper>
                    </Overlay>
                </ImageBackground>
            </Container>
        </>
    )
}

export default Register
const styles = StyleSheet.create({
    checkboxContainer: {
        flexDirection: "row",
        margin:10,
      },
      checkbox: {
        
      },
      label: {
        margin: 8,
        color:'white'
      },
})
