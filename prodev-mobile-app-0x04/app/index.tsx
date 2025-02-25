import { BACKGROUNDIMAGE, HEROLOGO } from "@/constants";
import { styles } from "@/styles/_mainstyle";
import { Text, View, StyleSheet, Image, ImageBackground, Dimensions, TouchableOpacity } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';

export default function Index() {
  const navigation = useNavigation();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground
          source={BACKGROUNDIMAGE}
          style={styles.backgroundImageContainer}
          resizeMode="cover"
        >
          <View style={styles.container}>
            <View style={styles.logoContainer}>
              <Image source={HEROLOGO} />
            </View>

            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>Find your favorite place here</Text>
              <Text style={styles.titleSubText}>The best prices for over 2 </Text>
              <Text style={styles.titleSubText}>million properties worldwide</Text>
            </View>

            <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
              <View style={styles.buttonGroup}>
                <TouchableOpacity 
                  style={styles.buttonPrimary}
                  onPress={() => navigation.navigate('join' as never)}
                >
                  <Text style={{ ...styles.titleSubText, color: "black" }}>Join here</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                  style={styles.buttonSecondary}
                  onPress={() => navigation.navigate('signin' as never)}
                >
                  <Text style={styles.titleSubText}>Sign In</Text>
                </TouchableOpacity>
              </View>
              <View style={{ alignItems: "center", paddingVertical: 20 }}>
                <Text style={{ color: "white" }}>Continue to home</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}