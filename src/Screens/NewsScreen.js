import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppContext from "../contexts/AppContext";
import CustomCarousel from "../components/CustomCarousel";

const NewsScreen = () => {
  const { newsData, isLoading } = useContext(AppContext);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#FE7D55" />
        </View>
      ) : (
        newsData && <CustomCarousel data={newsData.articles} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default NewsScreen;
