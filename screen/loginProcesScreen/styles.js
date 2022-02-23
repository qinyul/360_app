import { StyleSheet,Dimensions } from "react-native";
import { primaryColor, secondaryColor } from "../../constant/colors";


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        padding:10,
        paddingTop:'10%',
        backgroundColor:'#FAFAFA'
    },
    headerContainer:{
        width:'95%',
        height:'5%',
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center'
    },
    buttonBackContainer:{
        backgroundColor:secondaryColor,
        width:30,
        height:30,
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center',
    },
    loginFormContainer:{
        width:'95%',
        height:'50%',
        margin:'5%'
    },
    titleTextBold:{
        fontWeight:'bold',
        fontSize:Dimensions.get('window').width * 0.08
    },
    titleNormalText:{
        color:'rgb(175, 175, 175)',
        marginTop:'1%'
    },
    loginForm:{
        marginTop:'10%'
    },
    labelStyle:{
        color:'black'
    },  
    inputContainerStyle:{
        backgroundColor:secondaryColor,
        borderRadius:5,
        paddingLeft:10,
        borderBottomWidth:0,
        marginTop:10
    },
    inputStyle:{
        fontSize:Dimensions.get('window').width * 0.035,
    },
    forgotPassText:{
        color:primaryColor,
        marginLeft:10
    },
    loginButton:{
        width:'95%',
        marginHorizontal:'2%',
        marginTop:10,
        backgroundColor:primaryColor,
        height:'13%',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },
    footerContainer:{
        width:'95%',
        height:'45%',
        marginVertical:'5%',
        justifyContent:'center',
        alignItems:'center'
    },
    logoContainer:{
        marginVertical:'10%',
        width:'95%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        height:'15%'
    },
    logoWrapper:{
        height:'100%',
        width:'20%',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderColor:secondaryColor,
    },
    logo:{
        width:Dimensions.get('window').width * 0.09,
        height:'100%',
        resizeMode:'contain'
    },
    notMemberContainer:{
        flexDirection:'row'
    }
})

export default styles