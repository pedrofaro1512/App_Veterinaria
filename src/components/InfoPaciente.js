import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const InfoPaciente = ({ paciente, setPaciente, setModalPaciente }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Información {""}
        <Text style={styles.tituloBold}>Paciente</Text>
      </Text>

      <View>
        <Pressable
          style={styles.btnCerrar}
          onPress={() => {
            setModalPaciente(false);
            setPaciente({});
          }}
        >
          <Text style={styles.btnCerrarTexto}>Cerrar</Text>
        </Pressable>
      </View>

      <View style={styles.contenido}>
        <View style={styles.campo}>
          <Text style={styles.label}>Nombre</Text>
          <Text style={styles.valor}>{paciente.paciente}</Text>
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Dueño</Text>
          <Text style={styles.valor}>{paciente.dueño}</Text>
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.valor}>{paciente.email}</Text>
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Telefono</Text>
          <Text style={styles.valor}>{paciente.telefono}</Text>
        </View>

        <View style={styles.campo}>
          <Text style={styles.label}>Síntomas</Text>
          <Text style={styles.valor}>{paciente.sintomas}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D16D79",
    flex: 1,
  },
  titulo: {
    fontSize: 25,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 30,
    color: "#252F48",
  },
  tituloBold: {
    fontWeight: "900",
  },
  btnCerrar: {
    marginVertical: 20,
    backgroundColor: "#A9C3B8",
    marginHorizontal: 30,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#1BBCB6",
  },
  btnCerrarTexto: {
    color: "#252F48",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "900",
    textTransform: "uppercase",
  },
  contenido: {
    backgroundColor: "#FFF",
    marginHorizontal: 30,
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  campo: {
    marginBottom: 20,
  },
  label: {
    textTransform: "uppercase",
    color: "#374151",
    fontWeight: "600",
  },
  valor: {
    fontWeight: "700",
    fontSize: 20,
    color: "#334155",
  },
});

export default InfoPaciente;
