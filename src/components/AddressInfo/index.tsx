import { View, Text } from "react-native";
import { ViaCEPResponse } from "../../types/cep";
import { styles } from "./styles";

interface Props {
  address: ViaCEPResponse | null;
}

export function AddressInfo({ address }: Props) {
  if (!address) return null;

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Endereço Encontrado</Text>

      <Text style={styles.text}>CEP: {address.cep}</Text>

      <Text style={styles.text}>
        Rua: {address.logradouro || "Não informado"}
      </Text>

      <Text style={styles.text}>
        Bairro: {address.bairro || "Não informado"}
      </Text>

      <Text style={styles.text}>
        Cidade: {address.localidade}
      </Text>

      <Text style={styles.text}>
        UF: {address.uf}
      </Text>

      <Text style={styles.text}>
        Complemento: {address.complemento || "Nenhum"}
      </Text>
    </View>
  );
}