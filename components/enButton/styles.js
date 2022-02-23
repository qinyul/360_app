import { StyleSheet } from "react-native";
import { primaryColor } from "../../constant/colors";

const styles = StyleSheet.create({
    button:{
        width:40,
        height:40,
        borderRadius:20,
        backgroundColor:primaryColor,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText:{
        color:'white'
    },
})

export default styles