import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { getTarkovAmmo } from "../../tools/getTarkovAmmo";

export default function TDisplayItem(props) {
  const { title = "Item" } = props;
  const [content, setContent] = useState<any>([]);

  useEffect(() => {
    getTarkovAmmo(props.display).then((data) => {
      setContent(data.data.items);
    });
  }, []);

  console.log(props.title);
  console;

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.infosContainer}>
          {content.map((entry, index) => (
            <View style={{ flexDirection: "row" }}>
              <Text
                key={index}
                style={{
                  marginBottom: 10,
                  fontFamily: "tarkov-font-bold",
                  fontSize: 12,
                }}
              >
                {entry.name}
              </Text>
              <Text> : {entry.avg24hPrice} ₽</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: "rgb(151, 137, 106)",
    borderWidth: 1,
    borderRadius: 4,
    maxWidth: 300,
    height: 200,
    marginBottom: 10,
  },
  titleContainer: {
    borderColor: "rgb(151, 137, 106)",
    borderBottomWidth: 1,
  },
  titleText: {
    color: "rgb(151, 137, 106)",
    fontFamily: "tarkov-font-bold",
    fontSize: 24,
  },
  contentText: {
    fontFamily: "tarkov-font-bold",
  },
  infosContainer: {},
});
