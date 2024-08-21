import { useNavigation } from "@react-navigation/native";
import React, { useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  PanResponder,
  StyleSheet,
  View,
} from "react-native";
import ImageComponent from "./ImageComponent";
import NewsTextCard from "./NewsTextCard";

const { width, height } = Dimensions.get("window");

const CustomCarousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const translateX = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  const handleSwipedUp = () => {
    if (currentIndex === data.length - 1) return;
    Animated.timing(translateY, {
      toValue: -height,
      duration: 600,
      useNativeDriver: true,
    }).start(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
      translateY.setValue(0);
    });
  };

  const handleSwipedDown = () => {
    if (currentIndex === 0) return;

    Animated.timing(translateY, {
      toValue: height,
      duration: 600,
      useNativeDriver: true,
    }).start(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? data.length - 1 : prevIndex - 1
      );
      translateY.setValue(0);
    });
  };

  const handleSwipedLeft = () => {
    Animated.timing(translateX, {
      toValue: -width,
      duration: 600,
      useNativeDriver: true,
    }).start(() => {
      const currentArticle = data[currentIndex];
      navigation.navigate("WebViewScreen", { url: currentArticle.url });
      translateX.setValue(0);
    });
  };

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (evt, gestureState) => {
      return Math.abs(gestureState.dx) > 10 || Math.abs(gestureState.dy) > 10;
    },
    onPanResponderRelease: (evt, gestureState) => {
      const swipeThreshold = 50;

      if (gestureState.dy < -swipeThreshold) {
        handleSwipedUp();
      } else if (gestureState.dy > swipeThreshold) {
        handleSwipedDown();
      } else if (gestureState.dx < -swipeThreshold) {
        handleSwipedLeft();
      }
    },
  });

  return (
    <Animated.View
      style={[
        styles.container,
        { transform: [{ translateX }, { translateY }] },
      ]}
      {...panResponder.panHandlers}
    >
      {data.map((item, index) => (
        <View
          key={index}
          style={[
            styles.item,
            { display: index === currentIndex ? "flex" : "none" },
          ]}
        >
          <ImageComponent data={item.urlToImage} />
          <NewsTextCard data={item} />
        </View>
      ))}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    height,
  },
  item: {
    width: width,
    height: height,
  },
});

export default CustomCarousel;
