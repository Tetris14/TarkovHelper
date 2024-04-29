import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Link, Redirect } from "expo-router";
import { useState } from "react";
import TButton from "../src/components/buttons/TButton";
import { signin } from "../src/tools/loginTool";
import useUserStore from "../src/zustand/store";
import { signup } from "../src/tools/signUpTool";

function loginStore(username:string, email:string, jwtToken: string) {
  useUserStore((state) => state.login(username, email, jwtToken));
}

export default function login() {
  const [signInOrSignUp, setSignInOrSignUp] = useState<boolean>(false);
  const [emailText, setEmailText] = useState<string>("");
  const [usernameText, setUsernameText] = useState<string>("");
  const [passwordText, setPasswordText] = useState<string>("");
  const login = useUserStore((state) => state.login);

  if (useUserStore((state) => state.isLoggedIn)) {
    return <Redirect href="" />;
  }

  const handleSignin = async () => {
    const result = await signin(emailText, passwordText);
    if (result) {
      console.log(result);
      login(result.username, result.email, result.jwtToken);
    } else {
      alert("Error please check your mail or password");
    }
  };

  const handleSignUp = async () => {
    const result = await signup(emailText, usernameText, passwordText);
    if (result) {
      console.log(result);
      login(result.username, result.email, result.jwtToken);
    } else {
      alert("Error please check your mail or password");
    }
  }

  const handleSignUpOrSignUp = () => {
    if (signInOrSignUp) setSignInOrSignUp(false);
    else setSignInOrSignUp(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarkov Helper</Text>
      <View style={styles.signInContainer}>
        {!signInOrSignUp ? (
          <>
            <View>
              <Text style={styles.textFieldsTitles}>Email</Text>
              <TextInput
                onChangeText={setEmailText}
                value={emailText}
                style={styles.textInput}
                keyboardType="email-address"
              />
            </View>
            <View>
              <Text style={styles.textFieldsTitles}>Password</Text>
              <TextInput
                onChangeText={setPasswordText}
                value={passwordText}
                style={styles.textInput}
                secureTextEntry={true}
              />
              <Pressable onPress={handleSignUpOrSignUp}>
                <Text style={styles.changeSignInOrUpButton}>Sign Up</Text>
              </Pressable>
            </View>
            <TButton onPress={handleSignin} title="Sign In" />
          </>
        ) : (
          <>
            <View>
              <Text style={styles.textFieldsTitles}>Email</Text>
              <TextInput
                onChangeText={setEmailText}
                value={emailText}
                style={styles.textInput}
                keyboardType="email-address"
              />
            </View>
            <View>
              <Text style={styles.textFieldsTitles}>Username</Text>
              <TextInput
                onChangeText={setUsernameText}
                value={usernameText}
                style={styles.textInput}
              />
            </View>
            <View>
              <Text style={styles.textFieldsTitles}>Password</Text>
              <TextInput
                onChangeText={setPasswordText}
                value={passwordText}
                style={styles.textInput}
                secureTextEntry={true}
              />
              <Pressable onPress={handleSignUpOrSignUp}>
                <Text style={styles.changeSignInOrUpButton}>Sign In</Text>
              </Pressable>
            </View>
            <TButton onPress={handleSignUp} title="Sign Up" />
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    position: "absolute",
    top: 130,
    color: "rgb(151, 137, 106)",
    fontFamily: "tarkov-font-bold",
  },
  textFieldsTitles: {
    fontFamily: "tarkov-font-bold",
    color: "rgb(151, 137, 106)",
    marginLeft: 5,
    marginBottom: 5,
  },
  signInContainer: {
    justifyContent: "center",
    alignItems: "flex-end",
    gap: 30,
  },
  textInput: {
    color: "rgb(151, 137, 106)",
    borderColor: "rgb(151, 137, 106)",
    borderWidth: 1,
    width: 300,
    height: 50,
    borderRadius: 4,
    fontFamily: "tarkov-font-bold",
  },
  changeSignInOrUpButton: {
    color: "grey",
    fontFamily: "tarkov-font-bold",
    paddingTop: 5,
    paddingLeft: 5,
    opacity: 0.5,
  },
});
