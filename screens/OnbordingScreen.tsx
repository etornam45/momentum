import React from "react";
import { Button, Text, StyleSheet, View, Image } from "react-native";
import Onboarding from 'react-native-onboarding-swiper';
import OnboardingImageWrapper from "../components/OnboardingImageWrapper";

export default function OnbordingScreen({ navigation }) {
    return (

        <Onboarding
            onDone={() => navigation.navigate('Login')}
            onSkip={() => navigation.replace("Login")}
            pages={[
                {
                    backgroundColor: '#fff',
                    image: <OnboardingImageWrapper ><Image source={require('../assets/onboarding-1.png')} /></OnboardingImageWrapper>,
                    title: 'WELCOME TO MOMENTUM',
                    subtitle: 'We can help you to be a better version of yourself.',
                },
                {
                    backgroundColor: '#fff',
                    image: <OnboardingImageWrapper><Image source={require('../assets/onboarding-2.png')} /></OnboardingImageWrapper>,
                    title: 'CREATE NEW HABIT EASILY',
                    subtitle: 'We can help you to be a better version of yourself',
                },
                {
                    backgroundColor: '#cff',
                    image: <OnboardingImageWrapper><Image source={require('../assets/onboarding-3.png')} /></OnboardingImageWrapper>,
                    title: 'KEEP TRACK OF YOUR PROGRESS',
                    subtitle: 'We can help you to be a better version of yourself',
                },
                {
                    backgroundColor: '#aff',
                    image: <OnboardingImageWrapper><Image source={require('../assets/onboarding-4.png')} /></OnboardingImageWrapper>,
                    title: 'JOIN A SUPPORTIVE COMMUNITY',
                    subtitle: 'We can help you to be a better version of yourself',
                },
            ]}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});