import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

const Paciente = ({ item, setModalVisible, pacienteEditar }) => {
  const { paciente, dueño, id } = item;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Paciente</Text>
      <Text style={styles.texto}>{paciente}</Text>
      <Text style={styles.dueño}>{dueño}</Text>

      <View style={styles.containerButtons}>
        <Pressable
          style={[styles.btn, styles.btnEditar]}
          onPress={() => {
            setModalVisible(true);
            pacienteEditar(id);
          }}
        >
          <Text style={styles.btnText}>Editar</Text>
        </Pressable>
        <Pressable style={[styles.btn, styles.btnEliminar]}>
          <Text style={styles.btnText}>Eliminar</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    padding: 20,
    borderBottomColor: "#94A388",
    borderBottomWidth: 2,
  },
  label: {
    color: "#374151",
    textTransform: "uppercase",
    fontWeight: "700",
    marginBottom: 8,
  },
  texto: {
    color: "#6D28D9",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 8,
  },
  dueño: {
    color: "#374151",
  },
  containerButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  btn: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  btnEditar: {
    backgroundColor: "orange",
  },
  btnEliminar: {
    backgroundColor: "red",
  },
  btnText: {
    textTransform: "uppercase",
    fontWeight: "700",
    color: "#FFF",
    fontSize: 12,
  },
});

export default Paciente;
