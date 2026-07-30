import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E3F2FD",
    justifyContent: "center",
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
    color: "#1565C0",
  },

  input: {
    backgroundColor: "#FFF",
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#CCC",
    paddingHorizontal: 15,
    fontSize: 18,
  },

  button: {
    marginTop: 20,
    height: 50,
    backgroundColor: "#1565C0",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonDisabled: {
    backgroundColor: "#90CAF9",
  },

  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});