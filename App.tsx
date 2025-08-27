import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Button,
} from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen name="ViewDetails" component={ViewDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Home Screen
export function MainScreen({ navigation }: any) {
  const [Name, setName] = useState("");
  const [Surname, setSurname] = useState("");

  console.log("App starting up now.");
  return (
    <View style={styles.container}>
      <View style={styles.mainPicture}>
        <Image
          style={styles.ImageSize}
          source={require("./assets/react-native-1.png")}
        />
      </View>

      <Text style={styles.welcomeText}>Welcome to your React App</Text>

      <View style={styles.InputFlex}>
        <Text style={styles.HeadingText}> Enter Name: </Text>
        <TextInput
          style={styles.InputBoxs}
          placeholder="First Name"
          onChangeText={(newText) => setName(newText)}
        />
      </View>

      <View style={styles.InputFlex}>
        <Text style={styles.HeadingText}> Enter Surname: </Text>
        <TextInput
          style={styles.InputBoxs}
          placeholder="Last Name"
          onChangeText={(newText) => setSurname(newText)}
        />
      </View>

      <Button
        title="Add User"
        onPress={() => {
          navigation.navigate("ViewDetails", {
            NameSend: Name,
            SurnameSend: Surname,
          });
          console.log("The user's name is:" + Name + " Surname:" + Surname);
        }}
      />
    </View>
  );
}

// View Details Screen
function ViewDetails({ route }: any) {
  const { NameSend, SurnameSend } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.mainPicture}>
        <Image
          style={styles.ImageSize}
          source={require("./assets/react-native-1.png")}
        />
      </View>
      <Text style={styles.welcomeText}>User Information</Text>
      <Text style={styles.detailsText}>
        Name : {NameSend} {"\n"}Surname : {SurnameSend}
      </Text>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222222",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  mainPicture: {
    marginBottom: 20,
  },
  ImageSize: {
    width: 200, // increased size
    height: 200,
    resizeMode: "contain",
  },
  welcomeText: {
    fontSize: 28,
    color: "#ffffff",
    fontWeight: "700",
    marginBottom: 20,
    textAlign: "center",
  },
  InputFlex: {
    width: "100%",
    marginBottom: 15,
  },
  HeadingText: {
    color: "#8acde7",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
  },
  InputBoxs: {
    backgroundColor: "#333333",
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 12,
    color: "#29d1fc",
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#555555",
  },
  detailsText: {
    fontSize: 22,
    color: "#29d1fc",
    fontWeight: "600",
    textAlign: "center",
    marginTop: 15,
  },
});
