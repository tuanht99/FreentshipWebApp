import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable, Keyboard } from "react-native";
import OTPInput from "../components/OTPInput";
import { ButtonContainer, ButtonText } from "../themes/OTPInputTheme";

export default function OTPVerification({ navigation }) {
  const [otpCode, setOTPCode] = useState("");
  const [isPinReady, setIsPinReady] = useState(false);
  const maximumCodeLength = 4;
  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
      <OTPInput
        code={otpCode}
        setCode={setOTPCode}
        maximumLength={maximumCodeLength}
        setIsPinReady={setIsPinReady}
      />

      <ButtonContainer
        disabled={!isPinReady}
        style={{
          backgroundColor: !isPinReady ? "grey" : "#000000",
        }}
      >
        <ButtonText
         onPress={() => {
          console.log('a');
          navigation.navigate('InputPasswordView')}}
          style={{
            color: !isPinReady ? "black" : "#EEEEEE",
          }}
        >
          Login
        </ButtonText>
      </ButtonContainer>
      <StatusBar style="auto" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
});