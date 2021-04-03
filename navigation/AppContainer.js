import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { HomeNavigator } from "./HomeNavigator";

const AppContainer = (props) => {
  return (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  );
};

export default AppContainer;
