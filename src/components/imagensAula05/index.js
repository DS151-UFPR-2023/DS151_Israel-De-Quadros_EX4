import { FlatList, Image } from "react-native";
import { styles } from "./styles";

import { data } from "./data";

export default function ExercicioAula05() {
  return (
    <FlatList
      data={data}
      numColumns={4}
      keyExtractor={(data) => data.url}
      renderItem={({ item }) => (
        <Image
          width={Math.floor(Math.random() * 100) + 50 }
          height={Math.floor(Math.random() * 100) + 50 }
          source={{
            uri: item.url,
          }}
          alt=""
          key={item.id}
        ></Image>
      )}
      contentContainerStyle={styles.container}
    ></FlatList>
  );
}
