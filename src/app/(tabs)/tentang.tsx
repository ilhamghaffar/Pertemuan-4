import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabTentang() {
  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={styles.title}
        accessibilityLabel="Judul halaman Tentang Aplikasi"
      >
        Tentang Aplikasi
      </Text>

      <Text style={styles.appName}>Aplikasi Jelajah Aman</Text>
      <Text style={styles.info}>Versi: 1.0.0</Text>
      <Text style={styles.info}>Pembuat: Nama Kamu</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  appName: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
  },
  info: {
    fontSize: 14,
    marginBottom: 8,
  },
});