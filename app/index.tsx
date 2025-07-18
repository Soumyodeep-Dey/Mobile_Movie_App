import { Link } from "expo-router";
import { Text, View } from "react-native";
 
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500 mb-4 text-center text-2xl">
        Welcome!
      </Text>
      <Link href="/onboarding">
        <Text className="text-blue-500">Get Started</Text>
      </Link>
    </View>
  );
}