import React, { useState } from "react";
import { Dimensions } from "react-native";
import { YStack, XStack, View, YGroup, separator, ScrollView } from "tamagui";
import { SearchBar, MovieListItem } from "../components";
import { Film } from "@tamagui/lucide-icons";

export const SearchView = () => {
  const [value, setValue] = useState("");
  const [starredMovies, setStarredMovies] = useState([]);
  const [starPressed, setStarPressed] = useState(false);
  const [starPressedMap, setStarPressedMap] = useState({});

  const handleClear = () => {
    setValue((value) => {
      if (value == null) {
        return null;
      }
      return "";
    });
  };

  const movies = [
    { title: "The Shawshank Redemption", genre: "Drama", year: 1994 },
    { title: "The Godfather", genre: "Crime", year: 1972 },
    { title: "The Dark Knight", genre: "Action", year: 2008 },
    { title: "Pulp Fiction", genre: "Crime", year: 1994 },
    {
      title: "The Lord of the Rings: The Return of the King",
      genre: "Adventure",
      year: 2003,
    },
    { title: "Forrest Gump", genre: "Drama", year: 1994 },
    { title: "Inception", genre: "Action", year: 2010 },
    { title: "The Matrix", genre: "Action", year: 1999 },
    { title: "The Silence of the Lambs", genre: "Thriller", year: 1991 },
    { title: "Interstellar", genre: "Sci-Fi", year: 2014 },
    { title: "Fight Club", genre: "Drama", year: 1999 },
    {
      title: "The Lord of the Rings: The Fellowship of the Ring",
      genre: "Adventure",
      year: 2001,
    },
    { title: "Goodfellas", genre: "Crime", year: 1990 },
    { title: "The Usual Suspects", genre: "Crime", year: 1995 },
    { title: "The Shawshank Redemption", genre: "Drama", year: 1994 },
  ];

  const handleStarPress = (movie) => {
    if (!movie) {
      return;
    }
    const isStarred = starredMovies.includes(movie.title);
    setStarPressedMap((prevMap) => ({
      ...prevMap,
      [movie.title]: !prevMap[movie.title],
    }));
    setStarredMovies((prevMovies) => {
      if (!prevMovies) {
        return null;
      }
      return isStarred
        ? prevMovies.filter((m) => m !== movie.title)
        : [...prevMovies, movie.title];
    });
  };
  const screenWidth = Dimensions.get("window")?.width || 0; // Get screen width

  const filteredMovies =
    value?.length || value != null
      ? movies.filter(
          (movie) =>
            movie.title?.toLowerCase()?.includes(value.toLowerCase()) ||
            movie.genre?.toLowerCase()?.includes(value.toLowerCase()) ||
            movie.year?.toString()?.includes(value)
        )
      : movies;

  return (
    <YStack
      alignSelf="center"
      justifyContent="space-around"
      $gtSm={{ flexDirection: "column", flex: 1 }}
    >
      <YStack
        alignItems="center"
        justifyContent="center"
        marginTop="$5"
        marginBottom="$-20"
        position={"fix"}
      >
        <Film size="$10" color="pink" />
      </YStack>
      <YStack
        alignItems="center"
        justifyContent="space-evenly"
        marginTop="$20"
        marginBottom="$10"
      >
        <XStack maxWidth={250}>
          <SearchBar
            onChangeText={setValue}
            onPress={handleClear}
            value={value}
            display={value?.length ? "flex" : "none"}
          />
        </XStack>

        <ScrollView
          borderRadius="$1"
          padding="$2"
          flex={1}
          minWidth={280}
          maxWidth={800}
        >
          <YGroup
            alignSelf="center"
            bordered
            marginTop="$5"
            minWidth={280}
            maxWidth={800}
          >
            {filteredMovies.map((movie) => (
              <>
                {movie && (
                  <MovieListItem
                    key={movie.title}
                    title={movie.title}
                    genre={movie.genre}
                    year={movie.year}
                    onStarPress={() => handleStarPress(movie)}
                    starPressed={starPressedMap[movie.title] || false}
                  />
                )}
              </>
            ))}
          </YGroup>
        </ScrollView>
      </YStack>
    </YStack>
  );
};
