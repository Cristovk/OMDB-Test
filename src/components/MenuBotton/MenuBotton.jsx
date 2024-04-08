import { View, Text } from "tamagui";

export const MenuBotton = () => {
  return (
    <View
      sx={{
        bg: "#FFD1F5F8",
        borderRadius: "8px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "56px",
        padding: "8px 16px",
      }}
    >
      <Text sx={{ color: "#333", fontWeight: "bold" }}>Buscar</Text>
      <Text sx={{ color: "#333", fontWeight: "bold" }}>Favorito</Text>
    </View>
  );
};

