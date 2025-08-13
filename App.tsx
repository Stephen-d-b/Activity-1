import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

export default function App() {
  const [firstName, setFirstName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [focusedInput, setFocusedInput] = useState<"firstName" | "surname" | null>(null);

  const handleAddUser = () => {
    if (!firstName || !surname) {
      alert("Please fill in both fields!");
      return;
    }

    console.log(`Added user: ${firstName} ${surname}`);
    alert(`Added user: ${firstName} ${surname}`);

    setFirstName("");
    setSurname("");
    setFocusedInput(null);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require("./assets/react-native-1.png")}
              resizeMode="cover"
            />
          </View>

          <Text style={styles.welcomeText}>Welcome to My React Native App!</Text>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>First Name</Text>
            <TextInput
              style={[
                styles.inputBox,
                focusedInput === "firstName" && styles.inputBoxFocused,
              ]}
              placeholder="Enter your first name"
              placeholderTextColor="#bbb"
              value={firstName}
              onChangeText={setFirstName}
              onFocus={() => setFocusedInput("firstName")}
              onBlur={() => setFocusedInput(null)}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Surname</Text>
            <TextInput
              style={[
                styles.inputBox,
                focusedInput === "surname" && styles.inputBoxFocused,
              ]}
              placeholder="Enter your surname"
              placeholderTextColor="#bbb"
              value={surname}
              onChangeText={setSurname}
              onFocus={() => setFocusedInput("surname")}
              onBlur={() => setFocusedInput(null)}
            />
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={handleAddUser}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Add User</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#222222",
  },
  scrollContent: {
    padding: 30,
    alignItems: "center",
    minHeight: "100%",
    justifyContent: "center",
  },
  imageContainer: {
    width: 280,
    height: 280,
    borderRadius: 20,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#29d1fc",
    marginBottom: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  welcomeText: {
    fontSize: 28,
    color: "#ffffff",
    fontWeight: "700",
    marginBottom: 40,
    textAlign: "center",
    textShadowColor: "rgba(0,0,0,0.5)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  inputGroup: {
    width: "100%",
    marginBottom: 25,
  },
  label: {
    color: "#8acde7",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    paddingLeft: 5,
  },
  inputBox: {
    backgroundColor: "#333333",
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 12,
    color: "#29d1fc",
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#555555",
  },
  inputBoxFocused: {
    borderColor: "#29d1fc",
    borderWidth: 2,
    backgroundColor: "#2a2a2a",
  },
  button: {
    backgroundColor: "#29d1fc",
    paddingVertical: 16,
    paddingHorizontal: 60,
    borderRadius: 25,
    shadowColor: "#00c7ff",
    shadowOpacity: 0.7,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 10,
    elevation: 8,
  },
  buttonText: {
    color: "#222222",
    fontWeight: "700",
    fontSize: 18,
    textAlign: "center",
    letterSpacing: 1,
  },
});
