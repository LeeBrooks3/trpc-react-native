import {trpc} from "../client/trpc";
import {Alert, Button} from "react-native";

export function TestComponent() {
    const query = trpc.greeting.useQuery();
    const mutation = trpc.action.useMutation({
        onSuccess: () => {
            Alert.alert("Success!");
        },
        onError: () => {
            Alert.alert("Error!");
        }
    });
    
    return (
        <Button title={"Go!"} onPress={() => mutation.mutate()} />
    )
}
