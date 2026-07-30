import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";

import { styles } from "./styles";
import { api } from "../../services/api";
import { AddressInfo } from "../../components/AddressInfo";
import { ViaCEPResponse } from "../../types/cep";

export function Home() {
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState<ViaCEPResponse | null>(null);
  const [loading, setLoading] = useState(false);

  function handleCep(text: string) {
    const numbers = text.replace(/\D/g, "").slice(0, 8);
    setCep(numbers);
  }

  async function buscarCEP() {
    if (cep.length !== 8) {
      Alert.alert("Erro", "Digite um CEP válido.");
      return;
    }

    try {
      setLoading(true);

      const response = await api.get<ViaCEPResponse>(`${cep}/json/`);

      if (response.data.erro) {
        Alert.alert("CEP não encontrado.");
        setAddress(null);
      } else {
        setAddress(response.data);
      }
    } catch (error) {
      Alert.alert("Erro", "Não foi possível consultar o CEP.");
      setAddress(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consulta de CEP</Text>

      <TextInput
        placeholder="Digite o CEP"
        keyboardType="numeric"
        style={styles.input}
        value={cep}
        onChangeText={handleCep}
      />

      <TouchableOpacity
        style={[
          styles.button,
          loading && styles.buttonDisabled,
        ]}
        disabled={loading}
        onPress={buscarCEP}
      >
        <Text style={styles.buttonText}>
          Buscar CEP
        </Text>
      </TouchableOpacity>

      {loading && (
        <ActivityIndicator
          size="large"
          color="#1565C0"
          style={{ marginTop: 20 }}
        />
      )}

      <AddressInfo address={address} />
    </View>
  );
}