import { XGroup, ListItem, Separator } from "tamagui";
import { Moon, Star, ChevronRight } from "@tamagui/lucide-icons";

export const MenuBotton = () => {
  return (
    <XGroup
      alignItems="center"
      bordered
      width={240}
      size="$5"
      separator={<Separator />}
    >
      <XGroup.Item>
        <ListItem
          hoverTheme
          pressTheme
          title="Search"
          icon={Moon}
          iconAfter={ChevronRight}
        />
      </XGroup.Item>
      <XGroup.Item>
        <ListItem
          hoverTheme
          pressTheme
          title="Favorites"
          icon={Star}
          iconAfter={ChevronRight}
        />
      </XGroup.Item>
    </XGroup>
  );
};
