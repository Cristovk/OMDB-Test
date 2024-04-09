import React, { useState } from "react";
import { Dimensions } from "react-native";
import { YStack, XStack, View } from "tamagui";
import { SearchBar } from "../components";
import { Film } from "@tamagui/lucide-icons";

export const SearchView = () => {
  const [value, setValue] = useState("");

  const handleClear = () => {
    setValue((value) => {
      if (value == null) {
        return value;
      }
      return "";
    });
  };

  const screenWidth = Dimensions.get("window")?.width || 0; // Get screen width

  return (
    <YStack
      space="$20"
      alignSelf="center"
      $gtSm={{ flexDirection: "column", fullscreen: true }}
    >
      <XStack
        alignItems="center"
        justifyContent="center"
        marginTop="$5"
        marginBottom={"$-18"}
      >
        <Film size="$10" color="pink" />
      </XStack>

      <View style={{ width: `${screenWidth * 0.7}` }}>
        <SearchBar
          onChangeText={(text) => {
            if (text == null) {
              return;
            }
            setValue(text);
          }}
          onPress={handleClear}
          value={value}
          display={value?.length ? "flex" : "none"}
        />
      </View>
    </YStack>
  );
};
