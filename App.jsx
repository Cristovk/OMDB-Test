import React, { useContext, useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import { TamaguiProvider, Theme, View, Text } from "tamagui";
import config from "./src/tamagui.config";

// Context
import { MovieContext, MovieProvider } from "./src/contexts/DataContext";

import { SearchView } from "./src/view";

export default function App() {
  const colorScheme = useColorScheme();
  const [loaded, error] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  if (!loaded) {
    return null;
  }
  if (error) {
    console.error("Error loading fonts:", error);
  }

  return (
    <SafeAreaProvider>
      <MovieProvider>
        <TamaguiProvider config={config}>
          <Theme name={colorScheme === "dark" ? "dark" : "light"}>
            <SearchView />
          </Theme>
        </TamaguiProvider>
      </MovieProvider>
    </SafeAreaProvider>
  );
}
