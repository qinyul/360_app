import { StyleSheet,Dimensions } from "react-native";
import { primaryColor,secondaryColor } from "../../constant/colors";

const styles =  StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        padding:10,
        paddingTop:'10%',
        backgroundColor:'#FAFAFA'
    },
    loginWallpaperContainer:{
        backgroundColor:secondaryColor,
        alignItems:'center',
        width:'95%',
        height:'50%',
        borderRadius:25,
        padding:10
    },
    buttonContainer:{
        width:'100%',
        flexDirection:'row-reverse',
    },
    loginWallpaper:{
        width:'65%',
        height:'65%',
        marginTop:'10%',
    },
    titleContainer:{
        width:'95%',
        height:'25%',
        alignItems:'center',
        padding:20
    },
    boldText:{
        fontWeight:'bold',
        fontSize:Dimensions.get('window').width * 0.08
    },
    normalText:{
        textAlign:'center',
        marginTop:'5%'
    },
    loginButtonContainer:{
        width:'95%',
        height:'25%',
        justifyContent:'space-around',
        alignItems:'center',
        flexDirection:'row'
    },
    signUpButton:{
        borderWidth:0.5,
        width:'45%',
        height:'20%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        borderColor:'rgb(229, 229, 229)'
    },
    loginButton:{
        width:'45%',
        height:'20%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:primaryColor,
        borderRadius:5
    }
})

export default styles