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
        {item.createdAt}
      </Text>
      <Text style={styles.companyName} numberOfLines={1}>
        {item.PaymentMode}
      </Text>
      <Text style={styles.companyName} numberOfLines={1}>
        {item.Items.length}
      </Text>
      <Text style={styles.companyName} numberOfLines={1}>
        {item.TotalAmount}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomerCards;
