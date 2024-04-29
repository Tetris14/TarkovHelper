import React, { useEffect, useState } from "react";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import useUserStore from "../src/zustand/store";
import { Redirect } from "expo-router";
import { useFonts } from "expo-font";
import { SafeAreaView } from "react-native-safe-area-context";
import { getTarkovAmmo } from "../src/tools/getTarkovAmmo";
import TDisplayItem from "../src/components/squareDisplay/TDisplayItems";

export default function Page() {
  const [fontsLoaded] = useFonts({
    "tarkov-font-bold": require("../assets/tarkov-font-bold.otf"),
  });
  const isLoggedIn: boolean = useUserStore((state) => state.isLoggedIn);
  const [username, setUsername] = useState<string>(
    useUserStore((state) => state.username)
  );
  const [email, setEmail] = useState<string>(
    useUserStore((state) => state.email)
  );
  const [jwtToken, setJwtToken] = useState<string>(
    useUserStore((state) => state.jwtToken)
  );
  const logout = useUserStore((state) => state.logout);
  const [resultTarkov, setResultTarkov] = useState<any>(undefined);

  if (!isLoggedIn) {
    return <Redirect href="/login" />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Tarkov Helper</Text>
      <ScrollView style={styles.displayersContainer} showsVerticalScrollIndicator={false}>
        <View>
          <TDisplayItem title="Ammo" display="ammo"/>
        </View>
        <View>
          <TDisplayItem title="Weapon" display="cl"/>
        </View>
        <View>
          <TDisplayItem title="Armor" display="armor"/>
        </View>
        <View>
          <TDisplayItem title="Meds" display="meds"/>
        </View>
        <View>
          <TDisplayItem title="Misc" display="barter"/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  middleText: {
    fontSize: 36,
    fontFamily: "tarkov-font-bold",
    color: "rgb(151, 137, 106)",
  },
  displayersContainer: {
  },
  title: {
    fontSize: 40,
    color: "rgb(151, 137, 106)",
    fontFamily: "tarkov-font-bold",
    paddingBottom: 20,
  },
});
