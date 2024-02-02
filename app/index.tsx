import {trpc} from "../client/trpc";
import {Alert, Button, StyleSheet, Text, View} from "react-native";
import React from "react";

export default function AppScreen() {
    const query = trpc.greeting.useQuery();
    const mutation = trpc.action.useMutation({
        onSuccess: (data) => {
            Alert.alert(data);
        },
        onError: () => {
            Alert.alert("Error!");
        }
    });
    
    return (
        <View style={styles.container}>
            {query.isLoading ? <Text>Loading...</Text> : <Text>{query.data}</Text>}

            <Button title={"Press me"} onPress={() => mutation.mutate()} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
