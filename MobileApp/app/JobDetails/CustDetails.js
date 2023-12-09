import { useState } from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";

import styles from "../JobDetails/popularjobs.style";
import { COLORS, SIZES } from "../../constants";
import CustomerCards from "../popular/CustomerCards";
import fetch from "../../hook/useFetch";

const custDetails = () => {
  const router = useRouter();
  // const isLoading = false;
  // const error = false;
  const { data, isLoading, error } = fetch.useFetch();
  console.log(data);
  const [selectedJob, setSelectedJob] = useState();


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size='large' color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <CustomerCards
                item={ item }
              />
            )}
            keyExtractor={item => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            vertical
          />
        )}
      </View>
    </View>
  );
};

export default custDetails;
