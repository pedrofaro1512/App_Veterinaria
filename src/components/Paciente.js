import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

const Paciente = ({
  item,
  setModalVisible,
  pacienteEditar,
  pacienteEliminar,
  setModalPaciente,
  setPaciente,
}) => {
  const { paciente, dueño, id } = item;

  return (
    <Pressable
      onLongPress={() => {
        setModalPaciente(true);
        setPaciente(item);
      }}
    >
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
          <Pressable
            style={[styles.btn, styles.btnEliminar]}
            onPress={() => {
              pacienteEliminar(id);
            }}
          >
            <Text style={styles.btnText}>Eliminar</Text>
          </Pressable>
        </View>
      </View>
    </Pressable>
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
    color: "#252F48",
    textTransform: "uppercase",
    fontWeight: "700",
    marginBottom: 8,
  },
  texto: {
    color: "#1BBCB6",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 8,
  },
  dueño: {
    color: "#252F48",
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
    backgroundColor: "#A9C3B8",
  },
  btnEliminar: {
    backgroundColor: "#D16D79",
  },
  btnText: {
    textTransform: "uppercase",
    fontWeight: "800",
    color: "#252F48",
    fontSize: 13,
  },
});

export default Paciente;
