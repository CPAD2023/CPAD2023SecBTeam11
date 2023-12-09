import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./welcome.style";

 
const Welcome = () => {
  const router = useRouter();

  return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.containers}
          onPress={() => {
            router.push('/JobDetails/authpage');
          }}>
          <Text style={styles.Title} numberOfLines={1}>
          Authentication
          </Text>
        </TouchableOpacity>


        {/* <TouchableOpacity
          style={styles.containers}
          onPress={() => {
            router.push('/JobDetails/CustDetails');
          }}>
          <Text style={styles.Title} numberOfLines={1}>
          Customer
          </Text>
          <Text style={styles.Title} numberOfLines={1}>
          Details
          </Text>
        </TouchableOpacity>
       
        <TouchableOpacity
          style={styles.containers}
          onPress={() => {
            router.push('/JobDetails/BillDetails');
          }}>
          <Text style={styles.Title} numberOfLines={1}>
          Billings
          </Text>
          <Text style={styles.Title} numberOfLines={1}>
          Done Today
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.containers}
          onPress={() => {
            router.push('/JobDetails/stocks');
          }}>
          <Text style={styles.Title} numberOfLines={1}>
          Stocks
          </Text>
          <Text style={styles.Title} numberOfLines={1}>
          Available
          </Text>
        </TouchableOpacity> */}
    
      </View>
  );
};

export default Welcome;
