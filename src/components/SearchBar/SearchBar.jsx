import { Input, Button, XStack } from "tamagui";
import { Search, BadgeX } from "@tamagui/lucide-icons";

export const SearchBar = React.memo(
  ({ display, onPress, value, onChangeText, onPressSearch }) => {
    return (
      <XStack alignItems="center">
        <Button
          size="$5"
          icon={Search}
          onPress={onPressSearch}
          marginRight="$-5"
          marginLeft="$-10"
          borderTopLeftRadius="$4"
          borderBottomLeftRadius="$4"
          borderTopRightRadius="$0"
          borderBottomRightRadius="$0"
          borderColor="$gray12Light"
          backgroundColor="$gray5Light"
          borderWidth="$0"
          borderRightWidth="$0"
        />
        <Input
          placeholder="Search"
          icon={Search}
          size="$5"
          flex={1}
          borderColor="$gray12Light"
          focusStyle={{ borderColor: "$gray12Light" }}
          value={value}
          onChangeText={onChangeText}
          borderWidth="$0"
          backgroundColor="$gray5Light"
          borderBottomLeftRadius="$4"
        />
        <Button
          size="$5"
          icon={BadgeX}
          onPress={onPress}
          marginLeft="$-2"
          marginRight="$-10"
          borderTopRightRadius="$4"
          borderBottomRightRadius="$4"
          borderTopLeftRadius="$0"
          borderBottomLeftRadius="$0"
          borderColor="$gray12Light"
          backgroundColor="$gray5Light"
          borderWidth="$0"
          borderLeftWidth="$0"
        />
      </XStack>
    );
  }
);
