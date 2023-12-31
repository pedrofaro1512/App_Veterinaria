import React, { useState, useEffect } from "react";
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
  const {
    cerraModal,
    setPacientes,
    pacientes,
    paciente: pacienteObj,
    setPaciente: setPacienteApp,
  } = props;

  const [paciente, setPaciente] = useState("");
  const [id, setId] = useState("");
  const [dueño, setdueño] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [sintomas, setSintomas] = useState("");

  useEffect(() => {
    if (pacienteObj.paciente) {
      setPaciente(pacienteObj.paciente);
      setId(pacienteObj.id);
      setdueño(pacienteObj.dueño);
      setEmail(pacienteObj.email);
      setTelefono(pacienteObj.telefono);
      setSintomas(pacienteObj.sintomas);
    }
  }, [pacienteObj]);

  const handleCita = () => {
    //Validaciones
    if ([paciente, dueño, email, telefono, sintomas].includes("")) {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return;
    }

    const nuevoPaciente = {
      paciente,
      dueño,
      email,
      telefono,
      sintomas,
    };

    // Verificación si es un nuevo registro o edición
    if (id) {
      //Edición
      nuevoPaciente.id = id;
      const pacientesModificados = pacientes.map((pacienteState) =>
        pacienteState.id === nuevoPaciente.id ? nuevoPaciente : pacienteState
      );
      setPacientes(pacientesModificados);
      setPacienteApp({});
    } else {
      //Nuevo registro
      nuevoPaciente.id = Date.now();
      setPacientes([...pacientes, nuevoPaciente]);
    }

    cerraModal();

    setId("");
    setPaciente("");
    setdueño("");
    setEmail("");
    setTelefono("");
    setSintomas("");
  };

  return (
    <Modal animationType="slide">
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.titulo}>
            {pacienteObj.id ? "Editar" : "Nueva"} {""}
            <Text style={styles.tituloBold}>Cita</Text>
          </Text>

          <Pressable
            onPress={() => {
              cerraModal();
              setPacienteApp({});
              setId("");
              setPaciente("");
              setdueño("");
              setEmail("");
              setTelefono("");
              setSintomas("");
            }}
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
            <Text style={styles.btnNuevaCitaTexto}>
              {pacienteObj.id ? "Editar" : "Agregar"} Paciente
            </Text>
          </Pressable>
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#A9C3B8",
    flex: 1,
  },
  titulo: {
    fontSize: 30,
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
    backgroundColor: "#D16D79",
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
  campo: {
    marginTop: 20,
    marginHorizontal: 30,
  },
  label: {
    color: "#252F48",
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
    backgroundColor: "#1BBCB6",
    paddingVertical: 15,
    marginHorizontal: 39,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#1BBCB6",
  },
  btnNuevaCitaTexto: {
    textAlign: "center",
    color: "#252F48",
    textTransform: "uppercase",
    fontWeight: "900",
    fontSize: 20,
  },
});

export default Formulario;
