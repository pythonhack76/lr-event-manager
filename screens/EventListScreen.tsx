import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function EventListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista degli Eventi</Text>
      <Button title="Crea un nuovo evento" onPress={() => navigation.navigate('AddEditEvent')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});
