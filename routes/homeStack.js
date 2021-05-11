import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/homescreen';
import Index from '../screens/indexscreen';
import SleepScreen from '../screens/sleepscreen';
//import MoodJournal from '../screens/moodjournalscreen';
import MoodJournalScreen from '../screens/moodjournalscreen';
import GoalSetterScreen from '../screens/goalsetterscreen';
import PositiveActivitiesScreen from '../screens/positiveactivities';
import ConnectToSmartWatchScreen from '../screens/connecttosmartwatchscreen';
import StartScreen from '../screens/startscreen';
import LoginScreen from '../screens/loginscreen';
import RegisterScreen from '../screens/registerscreen';
import ResetPasswordScreen from '../screens/resetpasswordscreen';
import MainHomeScreen from '../screens/mainhomescreen';
import PostScreen from '../screens/postscreen';
const screens = {
    
    Start: {
        screen : StartScreen,
        navigationOptions:{headerShown: false,},

    },

    LoginScreen: {
        screen : LoginScreen,
        navigationOptions:{headerShown: false,},

    },

    RegisterScreen: {
        screen : RegisterScreen
    },

    ResetPasswordScreen: {
        screen : ResetPasswordScreen
    },

    MainHomeScreen: {
        screen : MainHomeScreen,
        navigationOptions:{headerShown: false,},
    },
    
    Home: {
        
        screen : Index, 
        navigationOptions:{headerShown: false,},
    },

    

    Sleep: {
        screen : SleepScreen
    },

    MoodJournal: {
        screen : MoodJournalScreen
    },

    GoalSetter: {
        screen : GoalSetterScreen
    },

    PositiveActivities: {
       screen : PositiveActivitiesScreen
    },

    ConnectToSmartWatch: {
        screen : ConnectToSmartWatchScreen,
        //navigationOptions:{headerShown: false,},
    },

    Post: {
        screen : PostScreen,
    }
}

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);