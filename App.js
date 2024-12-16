import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import "./global.css";
import SplashScreen from './screens/SplashScreen';
import StackNavigator from './Navigation/StackNavigator';

export default function App() {
  return (
   <StackNavigator/>
  );
}