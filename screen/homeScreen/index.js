import React,{useState} from "react";
import {View,Dimensions,ImageBackground,Text,TextInput,Image,TouchableOpacity} from 'react-native'
import { Avatar,Icon } from "react-native-elements";
import styles from './styles'
import BPJS from '../../assets/bpjs-icon.svg'
import EPAY from '../../assets/epayslip-icon.svg'
import LOAN from '../../assets/loan-icon.svg'
import { deleteRow } from "../../constant/helpers";

const HomeScreen = ({navigation}) => {

    const avatar = require('../../assets/avatar.png')
    const notification = require('../../assets/notification.png')
    const applicantImg = require('../../assets/applicant.png')
    const bookmarkImg = require('../../assets/bookmark.png')
    const jobPostingImg = require('../../assets/job-posting.png')
    const yourProjectImg = require('../../assets/your-project.png')

    const [search,setSearch] = useState(null)

    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.notificationImageWrapper}>
                    <ImageBackground source={notification} 
                                     style={styles.notificationImageContainer} 
                                     imageStyle={styles.notificationImageStyle} 
                    >
                        <View style={styles.badgeContainer}>
                            <Text style={styles.badge}>5</Text>
                        </View>
                    </ImageBackground>
                </View>
                <TouchableOpacity onPress={() => {deleteRow() 
                                                  navigation.replace('Login')
                                                  }}>
                    <Avatar
                        size={Dimensions.get('window').width * 0.15}
                        rounded
                        source={avatar}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.searchContainer}>
                <Icon size={Dimensions.get('window').width * 0.08} 
                      name="search" 
                      type="evilicon" 
                      color="rgb(198, 198, 198)"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={text => setSearch(text)}
                    value={search}
                    placeholder="Search your job"
                />
            </View>
            <View style={styles.welcomeContainer}>
                <Text style={styles.boldText}>Welcome to Kerja 365</Text>
                <Text style={styles.normalText}>Arrange all you need here</Text>
                <View style={styles.svgContainer}>
                    <View style={styles.svgWrapper}>
                        <EPAY
                            width={Dimensions.get('screen').width * 0.07}
                            height={Dimensions.get('screen').width * 0.07}
                        />
                        <Text style={styles.svgText}>ePay Slip</Text>
                    </View>
                    <View style={styles.svgWrapper}>
                        <BPJS
                            width={Dimensions.get('screen').width * 0.07}
                            height={Dimensions.get('screen').width * 0.07}
                        />
                        <Text style={styles.svgText}>BPJS</Text>
                    </View>
                    <View style={styles.svgWrapper}>
                        <LOAN
                            width={Dimensions.get('screen').width * 0.07}
                            height={Dimensions.get('screen').width * 0.07}
                        />
                        <Text style={styles.svgText}>Loan</Text>
                    </View>
                </View>
            </View>
            <View style={styles.serviceContainer}> 
                <Text style={styles.boldText}>Services By Catagory</Text>
                <Text style={styles.normalText}>Find what you need</Text>
                <View style={styles.serviceContentContainer}>
                    <View style={styles.serviceContent}>
                        <TouchableOpacity style={styles.service}>
                            <View style={styles.serviceImgContainer}>
                                <Image source={applicantImg} style={styles.serviceImg} />
                            </View>
                                <Text style={styles.serviceName}>Applycant</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.service}>
                            <View style={styles.serviceImgContainer}>
                                <Image source={bookmarkImg} style={styles.serviceImg} />
                            </View>
                                <Text style={styles.serviceName}>Bookmark</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.serviceContent}>
                        <TouchableOpacity style={styles.service}>
                            <View style={styles.serviceImgContainer}>
                                <Image source={jobPostingImg} style={styles.serviceImg} />
                            </View>
                                <Text style={styles.serviceName}>Job posting</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.service}>
                            <View style={styles.serviceImgContainer}>
                                <Image source={yourProjectImg} style={styles.serviceImg} />
                            </View>
                                <Text style={styles.serviceName}>Your Project</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default HomeScreen