import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';
import { RegistrationScreen } from "./Screens/RegistrationScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/Back.jpg")}
        style={styles.image}
      >
        <RegistrationScreen />
        
      </ImageBackground>
      <Text>Ты</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
   
  },
  image: {
    flex: 2,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
