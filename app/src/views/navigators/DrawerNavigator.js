import { createDrawerNavigator } from '@react-navigation/drawer';


import UserDetailsScreen from "../screens/UserDetailsScreen";
import SubscribedScreen from "../screens/SubscribedScreen";
import DetailScreen from "../screens/DetailsScreen";
import BottomNavigator from './BottomNavigator';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomeDrawer" component={BottomNavigator} />
      <Drawer.Screen name="DetailScreenDrawer" component={DetailScreen} />
       <Drawer.Screen name="SubscribedDrawer" component={SubscribedScreen} />
      <Drawer.Screen name="UserDetailsDrawer" component={UserDetailsScreen} />
    </Drawer.Navigator>
  );
}