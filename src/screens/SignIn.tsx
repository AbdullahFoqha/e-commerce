import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";
import AppTextInput from "../components/common/AppTextInput";
import AppButton from "../components/common/AppButton";
import Fire from '../../assets/svg/fire.svg'
import Twitter from '../../assets/svg/twitter.svg'
import Google from '../../assets/svg/google.svg'
import Facebook from '../../assets/svg/facebook.svg'

const SignIn: React.FC = () => {
    return (
        <SafeAreaView style={{
            width: '100%',
            height: '100%',
            alignItems: 'center',
            padding: 25,
            backgroundColor: colors.white,
        }}>
            <View style={styles.titleContainer}>
                <View style={{
                    shadowColor: colors.gray40, backgroundColor: colors.white, shadowOpacity: .2, shadowOffset: {height: 6, width: 2},
                    shadowRadius: 2, borderRadius: 50,
                    width: 76, height: 76, justifyContent: 'center', alignItems: 'center',
                    marginVertical: 15
                }}>
                    <Fire fill={colors.accent} width={36} height={48}/>
                </View>
                <Text style={styles.title}>Sector</Text>
                <Text style={styles.subTitle}>e-commerce</Text>
            </View>

            <View style={{
                paddingHorizontal: 30, width: '100%', alignItems: 'center', height: '30%', flexGrow: 1
            }}>
                <View style={{width: '100%'}}>
                    <AppTextInput placeholder={'Email'}/>
                    <AppTextInput placeholder={'Password'}/>
                </View>

                <View style={styles.container}>
                    <AppButton label={'Sign up'} style={styles.signUpButton} onClick={() => console.log('Test')}/>
                    <AppButton label={'Sign in'} style={styles.signInButton}/>
                </View>

                <Text style={styles.forgotPassword}>Forgot password?</Text>
            </View>

            <View style={{
                paddingHorizontal: 30, width: '100%', alignItems: 'center', height: '25%'
            }}>
                <Text style={{fontSize: 16, color: colors.gray90, fontWeight: '300'}}>Or sign in with social networks</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginVertical: 20}}>
                    <View style={{borderRadius: 6, borderWidth: 1, borderColor: colors.gray90, paddingVertical: 10, paddingHorizontal: 30}}>
                        <Twitter fill={colors.gray90}/>
                    </View>

                    <View style={{borderRadius: 6, borderWidth: 1, borderColor: colors.gray90, paddingVertical: 10, paddingHorizontal: 30}}>
                        <Google fill={colors.gray90}/>
                    </View>

                    <View style={{borderRadius: 6, borderWidth: 1, borderColor: colors.gray90, paddingVertical: 10, paddingHorizontal: 30}}>
                        <Facebook fill={colors.gray90}/>
                    </View>
                </View>

                <AppButton label={'Sign up'} style={{backgroundColor: colors.gray10}}
                           labelStyle={{color: colors.gray90, fontWeight: 'normal'}}/>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    signUpButton: {
        backgroundColor: colors.gray90,
        width: '47.5%'
    },
    signInButton: {
        width: '47.5%'
    },
    forgotPassword: {
        marginVertical: 10,
        color: colors.primary,
        fontWeight: '300'
    },
    title: {
        textTransform: 'uppercase',
        color: colors.gray90,
        fontSize: 24,
        fontWeight: '500'
    },
    titleContainer: {
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    subTitle: {
        fontSize: 16,
        fontWeight: '300',
        color: colors.gray90
    }
});


export default SignIn;
