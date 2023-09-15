import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  FlatList,
  Alert,
  Modal,
} from "react-native";
import Formulario from "./src/components/Formulario";
import Paciente from "./src/components/Paciente";
import InfoPaciente from "./src/components/InfoPaciente";

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalPaciente, setModalPaciente] = useState(false);
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  const pacienteEditar = (id) => {
    const pacienteEditar = pacientes.filter((paciente) => paciente.id === id);
    setPaciente(pacienteEditar[0]);
  };

  const pacienteEliminar = (id) => {
    Alert.alert(
      "Deseas eliminar este paciente?",
      "Este paciente no se podra recuperar",
      [
        { text: "Cancelar" },
        {
          text: "Confirmar",
          onPress: () => {
            const pacientesActualizados = pacientes.filter(
              (pacientesState) => pacientesState.id !== id
            );
            setPacientes(pacientesActualizados);
          },
        },
      ]
    );
  };

  const cerraModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Administrador de citas {""}
        <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>

      <Pressable
        onPress={() => setModalVisible(!modalVisible)}
        style={styles.btnNuevaCita}
      >
        <Text style={styles.btnTextNuevaCita}>Nueva cita</Text>
      </Pressable>

      {pacientes.length === 0 ? (
        <Text style={styles.noPacientes}>No hay pacientes</Text>
      ) : (
        <FlatList
          style={styles.listado}
          data={pacientes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <Paciente
                item={item}
                setModalVisible={setModalVisible}
                setPaciente={setPaciente}
                pacienteEditar={pacienteEditar}
                pacienteEliminar={pacienteEliminar}
                setModalPaciente={setModalPaciente}
              />
            );
          }}
        />
      )}

      {modalVisible && (
        <Formulario
          cerraModal={cerraModal}
          setPacientes={setPacientes}
          pacientes={pacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
      )}

      <Modal visible={modalPaciente} animationType="fade">
        <InfoPaciente
          paciente={paciente}
          setModalPaciente={setModalPaciente}
          setPaciente={setPaciente}
        />
      </Modal>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EDEDEF",
    flex: 1,
  },
  titulo: {
    textAlign: "center",
    fontSize: 33,
    color: "#252F48",
    fontWeight: "600",
    paddingVertical: 30,
    paddingHorizontal: 30,
  },
  tituloBold: {
    fontWeight: "900",
    color: "#1BBCB6",
  },
  btnNuevaCita: {
    backgroundColor: "#A9C3B8",
    padding: 10,
    marginHorizontal: 30,
    borderRadius: 10,
  },
  btnTextNuevaCita: {
    textAlign: "center",
    color: "#252F48",
    fontSize: 20,
    fontWeight: "900",
    textTransform: "uppercase",
  },
  noPacientes: {
    marginTop: 40,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "600",
    color: "#252F48",
  },
  listado: {
    marginTop: 40,
    marginHorizontal: 30,
  },
});

export default App;
