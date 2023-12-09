import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./popularjobcard.style";
import { router } from "expo-router";

const CustomerCards = ({ item }) => {
  return (
    <TouchableOpacity
      style={styles.containers}
      onPress={() => {
        router.push("JobDetails/CustDetails")
      }}
    >
      <Text style={styles.companyName} numberOfLines={1}>
        {item.Category}
      </Text>
      <Text style={styles.companyName} numberOfLines={1}>
        {item.Quantity}
      </Text>
      <Text style={styles.companyName} numberOfLines={1}>
        {item.Weight}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomerCards;
