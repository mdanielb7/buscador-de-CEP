import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    width: "100%",
    marginTop: 30,
    backgroundColor: "#1E293B",
    borderRadius: 22,
    padding: 22,

    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: 10,
    },

    elevation: 10,
  },

  title: {
    fontSize: 22,
    fontWeight: "800",
    color: "#38BDF8",
    marginBottom: 18,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#334155",
    paddingBottom: 10,
  },

  label: {
    color: "#94A3B8",
    fontSize: 15,
    fontWeight: "600",
  },

  text: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "500",
  },
});