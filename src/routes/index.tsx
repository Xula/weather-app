import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainScreen } from '../screens/MainScreen';

const Stack = createNativeStackNavigator();

export const Routes = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
                name="MainScreen"
                component={MainScreen}
            />
        </Stack.Navigator>
    )
}