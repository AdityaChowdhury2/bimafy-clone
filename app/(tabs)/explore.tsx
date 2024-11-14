import { StyleSheet, Image, Platform, Text } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { ScrollView } from "react-native-gesture-handler";

export default function TabTwoScreen() {
  return (
    <ScrollView>
      <Text>Tab Two</Text>
      <Text>Tab Two</Text>
      <Text>Tab Two</Text>
      <Text>Tab Two</Text>
      <Text>Tab Two</Text>
      <Text>Tab Two</Text>
      <Text>Tab Two</Text>
      <Text>Tab Two</Text>
      <Text>Tab Two</Text>
      <Text>Tab Two</Text>
      <Text>Tab Two</Text>
      <Text>Tab Two</Text>
      <Text>Tab Two</Text>
      <Text>Tab Two</Text>
      <Text>Tab Two</Text>
      <Text>Tab Two</Text>
      <Text>Tab Two</Text>
      <Text>Tab Two</Text>
      <Text>Tab Two</Text>
      <Text>Tab Two</Text>
      <Text>Tab Two</Text>
      <Text>Tab Two</Text>
      <Text>Tab Two</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
