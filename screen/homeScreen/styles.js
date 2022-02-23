import { StyleSheet,Dimensions } from "react-native";
import { primaryColor, secondaryColor } from "../../constant/colors";


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        padding:10,
        paddingTop:'15%',
        backgroundColor:'#FAFAFA'
    },
    headerContainer:{
        width:'95%',
        height:'5%',
        justifyContent:'flex-end',
        flexDirection:'row',
        alignItems:'center'
    },
    notificationImageWrapper:{
        backgroundColor:secondaryColor,
        justifyContent:'center',
        alignItems:'center',
        width:Dimensions.get('window').width * 0.09,
        height:Dimensions.get('window').width * 0.09,
        borderRadius:20,
        marginRight:'5%'
    },  
    notificationImageContainer:{
        width:Dimensions.get('window').width * 0.055,
        height:Dimensions.get('window').width * 0.055,
    },
    notificationImageStyle:{
        width:20,
        height:20,
        resizeMode:'contain',
    },
    badgeContainer:{
        backgroundColor:'rgb(206, 183, 55)',
        width:Dimensions.get('window').width * 0.04,
        height:Dimensions.get('window').width * 0.04,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        bottom:'50%',
        left:'50%'
    },  
    badge:{
        fontSize:Dimensions.get('window').width * 0.029,
        color:'white',
    },
    searchContainer:{
        flexDirection:'row',
        alignItems:'center',
        borderWidth:1,
        borderColor:'rgb(230, 229, 230)',
        width:'95%',
        marginVertical:'5%',
        borderRadius:20,
        height:'6%',
        padding:10
    },
    input:{
        width:'100%'
    },  
    welcomeContainer:{
        width:'95%',
        height:'30%',
        alignItems:'flex-start'
    },
    boldText:{
        fontSize:Dimensions.get('screen').width * 0.06,
        fontWeight:'bold'
    },
    normalText:{
        fontSize:Dimensions.get('screen').width * 0.04
    },
    svgContainer:{
        width:'99%',
        height:'35%',
        borderRadius:35,
        backgroundColor:secondaryColor,
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        marginVertical:'10%',
        padding:10
    },
    svgWrapper:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    svgText:{
        marginLeft:'10%',
        color:'rgb(119, 119, 119)'
    },
    serviceContainer:{
        width:'95%',
        height:'64%',
        justifyContent:'flex-start',
        alignItems:'flex-start'
    },
    serviceContentContainer:{
        width:'95%',
        height:'30%',
        marginVertical:'5%',
        borderWidth:1,
        borderColor:'rgb(230, 229, 230)',
        justifyContent:'space-between',
        borderRadius:10,
        padding:10,
    },
    serviceContent:{
        width:'99%',
        height:'45%',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    service:{
        backgroundColor:'#F4F6F6',
        flexDirection:'row',
        alignItems:'center',
        width:'47%',
        height:'100%',
        borderRadius:10,
        padding:10
    },
    serviceImgContainer:{
        backgroundColor:primaryColor,
        width:'28%',
        height:'100%',
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center'
    },
    serviceImg:{
        width:'50%',
        height:'55%',
        resizeMode:'contain'
    },
    serviceName:{
        fontWeight:'bold',
        fontSize:Dimensions.get('screen').width * 0.035,
        marginLeft:'10%'
    }
})

export default styles