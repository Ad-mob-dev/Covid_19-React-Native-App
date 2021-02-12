import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/home';
import CountryByName from '../screens/bycname';
import Summary from '../screens/summary';

const Drawer = createDrawerNavigator();

const DrawerNavigation=()=>{
   return <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Analytics By Country" component={CountryByName}/>
            <Drawer.Screen name="Summary" component={Summary}/>
        </Drawer.Navigator>
        </NavigationContainer>

}

export default DrawerNavigation;