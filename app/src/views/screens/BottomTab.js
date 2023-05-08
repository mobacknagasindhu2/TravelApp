import  React from "react";
import {View, Text} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DetailsScreen from "./DetailsScreen";
import HomeScreen from "./HomeScreen";
import SubscriptionScreen from "./Successfully";
import AccountScreen from "./AccountScreen";
import UserDetailsScreen from "./UserDetailsScreen";
const Tab = createBottomTabNavigator();

export default function BottomTab(){
    return (
        
       <Tab.Navigator screenOptions={{header : () => null}}>
        <Tab.Screen name ="Homes" component = {HomeScreen}/>
         <Tab.Screen name ="Details" component = {DetailsScreen}/>
          <Tab.Screen name ="Subscription" component = {SubscriptionScreen}/>
          <Tab.Screen name ="UserDetails" component = {UserDetailsScreen}/>

       </Tab.Navigator>
    )
}