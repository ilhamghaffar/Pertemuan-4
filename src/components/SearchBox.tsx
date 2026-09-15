import { useState } from "react";
import { View, TextInput, Button } from "react-native";
interface SearchBoxProps {
  onCari: (kota: string) => void;
}
export default function SearchBox({ onCari }: SearchBoxProps) {
  const [teks, setTeks] = useState("");
  return (
    <View
    style={{
        flexDirection: "row",
        gap: 8,
        width: "100%",
        alignItems: "center",
    }}
>
      <TextInput
        placeholder="Ketik nama kota"
        placeholderTextColor="#777"
        value={teks}
        onChangeText={setTeks}
        style={{
          flex: 1,
          height: 45,
          borderWidth: 1,
          borderColor: "#999",
          paddingHorizontal: 12,
          backgroundColor: "white",
          color: "black",
          borderRadius: 8,
        }}
      />
      <Button title="Cari" onPress={() => onCari(teks)} />
    </View>
  );
}
