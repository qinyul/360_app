import React,{useState} from "react";
import {View,TouchableOpacity,Text,KeyboardAvoidingView,Platform,Dimensions, Alert} from 'react-native'
import { Icon } from "react-native-elements";
import EnButton from "../../components/enButton";
import { Input } from 'react-native-elements';
import styles from './styles'
import { Image } from "react-native";
import { saveToDB } from "../../constant/helpers";

const LoginProcessScreen = ({navigation}) => {

    const googleLogo = require('../../assets/google-logo.png')
    const facebookLogo = require('../../assets/facebook-logo.png')
    const appleLogo = require('../../assets/apple-logo.png')

    const [username,setUsername] = useState(null)
    const [password,setPassword] = useState(null)

    const loginHandler = () => {

        return fetch('https://tasklogin.herokuapp.com/api/login',{
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            method:'POST',
            body:JSON.stringify({
                username,
                password
            })
        })
        .then(async response => {
            const {code,access_token,message} = await response.json()

            switch(true){
                case message === 'Wrong Password':
                    return Alert.alert('Notification','Password Salah','')
                case message === 'Please fill your username':
                    return Alert.alert('Notification','Username Tidak Boleh Kosong','')
                case message === "Username isn't registered yet":
                    return Alert.alert('Notification','Username tidak terdaftar','')
                case message === "Success":
                    return saveToDB(access_token),navigation.replace('Home')
            }
        }) 
        .catch(err => {
            console.error(err)

            Alert.alert('Maaf terjadi kesalahan')
        })
    }

    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.buttonBackContainer} onPress={() => navigation.goBack()}>
                    <Icon name="chevron-left" type="evilicon" size={30}  />
                </TouchableOpacity>
                <EnButton />
            </View>
            <KeyboardAvoidingView style={styles.loginFormContainer}
                                  behavior={Platform.OS === "ios" ? "padding" : "height"}
                                  keyboardVerticalOffset={Platform.select({
                                      ios:0,
                                      android:Dimensions.get('window').width * 0.169
                                  })}
            >
                <View style={styles.loginFormTitle}>
                    <Text style={styles.titleTextBold}>Welcome</Text>
                    <Text style={styles.titleNormalText}>Sign to continue and manage all you need</Text>
                </View>
                <View style={styles.loginForm}>
                    <Input
                        placeholder='Enter Your Username'
                        label="Username"
                        labelStyle={styles.labelStyle}
                        inputContainerStyle={styles.inputContainerStyle}
                        inputStyle={styles.inputStyle}
                        onChangeText={text => setUsername(text)}
                    />
                    <Input
                        placeholder='Enter Your Password'
                        label="Password"
                        labelStyle={styles.labelStyle}
                        inputContainerStyle={styles.inputContainerStyle}
                        inputStyle={styles.inputStyle}
                        secureTextEntry
                        containerStyle={{height:'37%'}}
                        onChangeText={text => setPassword(text)}
                    />
                    <Text style={styles.forgotPassText}>Forgot Password?</Text>
                </View>
                <TouchableOpacity style={styles.loginButton} 
                                  onPress={() => loginHandler()}>
                    <Text style={{color:'white'}}>Log in</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
            <View style={styles.footerContainer}>
                <Text>Continue With</Text>
                <View style={styles.logoContainer}>
                    <TouchableOpacity style={styles.logoWrapper}>
                        <Image source={googleLogo} style={styles.logo} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{...styles.logoWrapper,marginHorizontal:'10%'}}>
                        <Image source={facebookLogo} style={styles.logo} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.logoWrapper}>
                        <Image source={appleLogo} style={styles.logo} />
                    </TouchableOpacity>
                </View>
                <View style={styles.notMemberContainer}>
                    <Text>Not a member?</Text>
                    <Text style={{marginLeft:10,color:'#1871DE'}}>Register Now</Text>
                </View>
            </View>
        </View>
    )
}

export default LoginProcessScreen