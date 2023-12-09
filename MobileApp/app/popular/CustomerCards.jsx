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
        {item.CustName}
      </Text>
      <Text style={styles.companyName} numberOfLines={1}>
        {item.PhoneNo}
      </Text>
      <Text style={styles.companyName} numberOfLines={1}>
        {item.Address}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomerCards;
