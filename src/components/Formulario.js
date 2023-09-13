import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TextInput,
  ScrollView,
  Pressable,
  Alert,
} from "react-native";

const Formulario = (props) => {
  const { modalVisible, setModalVisible, setPacientes, pacientes } = props;

  const [paciente, setPaciente] = useState("");
  const [dueño, setdueño] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [sintomas, setSintomas] = useState("");

  const handleCita = () => {
    //Validaciones
    if ([paciente, dueño, email, telefono, sintomas].includes("")) {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return;
    }

    const nuevoPaciente = {
      id: Date.now(),
      paciente,
      dueño,
      email,
      telefono,
      sintomas,
    };
    setPacientes([...pacientes, nuevoPaciente]);
    setModalVisible(!modalVisible);

    setPaciente("");
    setdueño("");
    setEmail("");
    setTelefono("");
    setSintomas("");
  };

  return (
    <Modal animationType="slide" visible={modalVisible}>
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.titulo}>
            Nueva {""}
            <Text style={styles.tituloBold}>Cita</Text>
          </Text>

          <Pressable
            onPress={() => setModalVisible(!modalVisible)}
            style={styles.btnCerrar}
          >
            <Text style={styles.btnCerrarTexto}>Cerrar</Text>
          </Pressable>

          <View style={styles.campo}>
            <Text style={styles.label}>Nombre paciente</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre paciente"
              placeholderTextColor={"#666"}
              value={paciente}
              onChangeText={setPaciente}
            />
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Nombre dueño</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre dueño"
              placeholderTextColor={"#666"}
              value={dueño}
              onChangeText={setdueño}
            />
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Email dueño</Text>
            <TextInput
              style={styles.input}
              placeholder="Email dueño"
              placeholderTextColor={"#666"}
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Teléfono dueño</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre paciente"
              placeholderTextColor={"#666"}
              keyboardType="number-pad"
              value={telefono}
              onChangeText={setTelefono}
              maxLength={10}
            />
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Síntomas</Text>
            <TextInput
              style={[styles.input, styles.sintomasInput]}
              placeholder="Síntomas"
              placeholderTextColor={"#666"}
              value={sintomas}
              onChangeText={setSintomas}
              multiline={true}
              numberOfLines={4}
            />
          </View>

          <Pressable style={styles.btnNuevaCita} onPress={handleCita}>
            <Text style={styles.btnNuevaCitaTexto}>Agregar paciente</Text>
          </Pressable>
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#6D22D9",
    flex: 1,
  },
  titulo: {
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 30,
    color: "#FFF",
  },
  tituloBold: {
    fontWeight: "900",
  },
  btnCerrar: {
    marginVertical: 20,
    backgroundColor: "#5827A4",
    marginHorizontal: 30,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#FFF",
  },
  btnCerrarTexto: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "900",
    textTransform: "uppercase",
  },
  campo: {
    marginTop: 20,
    marginHorizontal: 30,
  },
  label: {
    color: "#FFF",
    marginBottom: 10,
    marginTop: 10,
    fontSize: 20,
    fontWeight: "600",
  },
  input: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
  },
  sintomasInput: {
    height: 100,
    marginBottom: 20,
  },
  btnNuevaCita: {
    marginVertical: 30,
    backgroundColor: "#F59E0B",
    paddingVertical: 15,
    marginHorizontal: 39,
    borderRadius: 10,
  },
  btnNuevaCitaTexto: {
    textAlign: "center",
    color: "#5827A4",
    textTransform: "uppercase",
    fontWeight: "900",
    fontSize: 20,
  },
});

export default Formulario;
