import React from "react";
import {TouchableOpacity,Text} from 'react-native'
import styles from './styles'

const EnButton = () => {

    return(
        <>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>EN</Text>
            </TouchableOpacity>
        </>
    )
}

export default EnButton