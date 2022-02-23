import React,{useEffect,useState} from "react";
import {View,TouchableOpacity,Text, Image} from 'react-native'
import EnButton from "../../components/enButton";
import styles from './styles'
import * as SQLite from 'expo-sqlite';

const LoginScreen = ({navigation}) => {

    const loginWallpaper = require('../../assets/login-wallpaper.png')

    useEffect(() => {
      const db = SQLite.openDatabase('365.db');
  
      db.transaction(
        tx => {
          tx.executeSql("select * from user", [], (_, { rows }) => 
            {
              if(rows.length > 0 ) navigation.replace('Home')
            }
          );
        },
      );
    },[])

    return(
        <View style={styles.container}>
            <View style={styles.loginWallpaperContainer}> 
                <View style={styles.buttonContainer}>
                   <EnButton />
                </View>
                    <Image source={loginWallpaper} style={styles.loginWallpaper} />
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.boldText}>Make Your Ideas</Text>
                <Text style={styles.boldText}>Come Alive</Text>
                <Text style={styles.normalText}>Join us to build your awesome idea, there will be more teams you can meet</Text>
            </View>
            <View style={styles.loginButtonContainer}>
                <TouchableOpacity style={styles.signUpButton}>
                    <Text style={{fontWeight:'bold'}}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('LoginProcess')} >
                    <Text style={{color:'white'}}>Log in</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginScreen