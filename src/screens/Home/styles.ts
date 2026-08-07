import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    justifyContent: "center",
    paddingHorizontal: 24,
  },

  title: {
    fontSize: 34,
    fontWeight: "800",
    color: "#FFFFFF",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    color: "#94A3B8",
    marginBottom: 35,
  },

  input: {
    height: 58,
    backgroundColor: "#1E293B",
    borderRadius: 18,
    paddingHorizontal: 18,
    color: "#FFF",
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#334155",
  },

  button: {
    marginTop: 22,
    height: 58,
    backgroundColor: "#3B82F6",
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#3B82F6",
    shadowOpacity: 0.35,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: 8,
    },

    elevation: 10,
  },

  buttonDisabled: {
    backgroundColor: "#475569",
    shadowOpacity: 0,
  },

  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 1,
  },
});