import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({ selected }) => {
    let backgroundColor;
    backgroundColor = selected ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.3)';
    return (
        <View style={styles.styleDots}></View>
    )

}

const Skip = ({ ...props }) => (
    <TouchableOpacity {...props}>
        <Text style={{ fontSize: 16, marginLeft: 30 }}>Skip</Text>
    </TouchableOpacity>

)
const Next = ({ ...props }) => (
    <TouchableOpacity
        {...props}>
        <Text style={styles.styleNext}>Next</Text>
    </TouchableOpacity>

)
const Done = ({ ...props }) => (
    <TouchableOpacity
        style={styles.styleDone}
        {...props}>
        <Text style={{ fontSize: 16 }}>Done</Text>
    </TouchableOpacity>

)

const onboardingscreen = ({ navigation }) => {
    return (
        <Onboarding
            SkipButtonComponent={Skip}
            NextButtonComponent={Next}
            DoneButtonComponent={Done}
            DotComponent={Dots}
            onSkip={() => navigation.navigate('Login')}
            onDone={() => navigation.navigate('Login')}
            pages={[
                {
                    backgroundColor: '#D9F7B7',
                    image: <Image source={require('../assets/images/notes.png')} />,
                    title: 'Monitorizează task-urile',
                    subtitle: 'Salvează în Schițe notițele pentru a nu rata nicio întalnire și "improve your skils" prin cursurile noastre!',
                },
                {
                    backgroundColor: '#FAE4A3',
                    image: <Image source={require('../assets/images/f.png')} />,
                    title: 'Comandă direct din aplicație',
                    subtitle: 'Nu mai trebuie să verifici meniul fizic, acum totul e mai simplu. Plasează o comandă direct din aplicație!',
                },
                {
                    backgroundColor: '#F5CA48',
                    image: <Image source={require('../assets/images/p.png')} />,
                    title: 'Rămâi conectat!',
                    subtitle: 'Păstrează legatura cu colegii de echipa și cu ultimele noutăți din firmă! ',
                },
            ]}
        />
    )
}


const styles=StyleSheet.create({
    styleDots:
    {
        width: 5,
        height: 5, 
        marginHorizontal: 3, 
        backgroundColor:'black'
    },
    styleSkip:
    {
        fontSize: 16, 
        marginLeft: 30
    },
    styleNext:
    {
        marginRight: 30 
    },
    styleDone:
    {
        marginRight: 30 
    },

});
export default onboardingscreen;