import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

// import styles from "./welcome.style";


const authPage = () => {
  const router = useRouter();

  return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.containers}
          onPress={() => {
            router.push('/JobDetails/CustDetails');
          }}>
          <Text style={styles.Title} numberOfLines={1}>
          Authenticate
          </Text>
        </TouchableOpacity>
      </View>
  );
};

export default authPage;
