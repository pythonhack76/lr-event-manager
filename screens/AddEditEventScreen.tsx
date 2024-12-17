import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function AddEditEventScreen() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSave = () => {
    console.log('Evento Salvato:', { title, description });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crea o Modifica Evento</Text>
      <TextInput
        style={styles.input}
        placeholder="Titolo"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrizione"
        value={description}
        onChangeText={setDescription}
      />
      <Button title="Salva Evento" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  input: { borderWidth: 1, borderColor: 'gray', padding: 8, marginBottom: 16, borderRadius: 8 },
});
