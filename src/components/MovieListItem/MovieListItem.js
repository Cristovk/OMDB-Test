import { Button, Group, Text, ListItem, Separator, YGroup } from "tamagui";
import { Star, ChevronRight } from "@tamagui/lucide-icons";

export const MovieListItem = ({
  title,
  genre,
  year,
  onStarPress,
  starPressed,
}) => (
  <YGroup.Item>
    <ListItem
      hoverTheme
      pressTheme
      title={title}
      subTitle={`${genre} (${year})`}
      icon={
        <Button
          size="xs"
          icon={Star}
          onPress={onStarPress}
          color={starPressed ? "gold" : "grey"}
        />
      }
      iconAfter={<ChevronRight />}
    />
  </YGroup.Item>
);
