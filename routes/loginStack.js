import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import StartScreen from '../screens/startscreen';
import LoginScreen from '../screens/loginscreen';
import RegisterScreen from '../screens/registerscreen';


const screens = {
    
    Start: {
        screen : StartScreen
    },

    LoginScreen: {
        screen : LoginScreen
    },

    RegisterScreen: {
        screen : RegisterScreen
    }
}

const LoginStack = createStackNavigator(screens);

export default createAppContainer(LoginStack);