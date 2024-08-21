import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import { sanitizeNewsContent } from "../utils/sanitizeNewsContent";
import { timeAgo } from "../utils/timeAgo";

const Title = ({ data }) => {
  return <Text style={globalStyles.title}>{data}</Text>;
};

const Description = ({ data }) => {
  return <Text style={globalStyles.content}>{sanitizeNewsContent(data)}</Text>;
};

const NewsTextCard = ({ data }) => {
  return (
    <View style={{ padding: 20 }}>
      <Title data={data.title} />
      <Description data={data.content} />
      {data.publishedAt && data.source.name && (
        <Text style={globalStyles.source}>
          swipe left for more at {data.source.name} /{" "}
          {timeAgo(data.publishedAt)} ago
        </Text>
      )}
    </View>
  );
};

export default NewsTextCard;
