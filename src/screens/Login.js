import React, { useState,useEffect,useContext} from 'react'
import { Dimensions, Text, Platform, ImageBackground,StatusBar,View,Image } from 'react-native'
import styled from 'styled-components/native'
import Spinner from 'react-native-loading-spinner-overlay';
import { AuthContext } from '../navigation/AuthProvider';
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
height: 400px;
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
    background-color: #5b18b4;
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
    background-color: 'rgba(0,0,0,0.5)';
    flex: 1;
`

const Login = ({ navigation }) => {

    const [email, setEmail] = useState('mechanic2@gmail.com');
    const [password, setPassword] = useState('12345678');
    const {isLoading, login} = useContext(AuthContext);

    return (
        <>
			<StatusBar
				translucent
				backgroundColor='transparent'
				barStyle='light-content'
			/>
            <Container>
            <Spinner visible={isLoading} />
            <ImageBackground source={require('../assests/back.png')} resizeMode="cover" style={{ flex: 1, height: Dimensions.get("screen").height }}>
                    <Overlay>
                        <View style={{justifyContent:'center',alignSelf:'center',marginTop:100}}>
                            <Image resizeMode='contain' style={{height:100,width:100,borderRadius:50}} source={require('../assests/logo.jpg')}>

                            </Image>
                        </View>
                        {/* <Header login={false} /> */}
                        <FormWrapper>
                            <Form>
                                <SignInText>Sign In</SignInText>
                                {/* <Input placeholder="Enter user type" placeholderTextColor='grey' value={user} onChangeText={(validate)=> setUser(validate)} /> */}
                                <Input placeholder="Enter your email" placeholderTextColor='grey' value={email} onChangeText={(validate)=> setEmail(validate)} />
                                <Input placeholder="Password" placeholderTextColor='grey' secureTextEntry value={password} onChangeText={(text) => setPassword(text)} />
                                <SubmitForm 

                                  onPress={() => {login(email, password)}}
                                  ><ButtonText>Sign In</ButtonText></SubmitForm>
<NewToNetflixTextWrapper activeOpacity={0.5} onPress={() => navigation.navigate("Register")}><NewToNetflix>Don't have an account ? Sign Up</NewToNetflix></NewToNetflixTextWrapper></Form>
                        </FormWrapper>
                    </Overlay>
                </ImageBackground>
            </Container>
        </>
    )
}

export default Login