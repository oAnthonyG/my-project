import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  FormContext: {
    width: "100%",
    height: "100%",
    bottom: 0,
    marginTop: 30,
    alignItems: "center",
    backgroundColor: "#FFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  form: {
    width: "100%",
    height: "auto",
    marginTop: 30,
    padding: 10,
  },
  formLabel: {
    color: "#000",
    fontSize: 18,
    paddingLeft: 20,
  },
  input: {
    width: "90%",
    height: 40,
    margin: 12,
    paddingLeft: 10,
    borderRadius: 50,
    backgroundColor: "#f6f6f6",
  },
  buttonCalculator: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 14,
    paddingBottom: 14,
    marginBottom: 12,
    marginTop: 30,
    borderRadius: 50,
    backgroundColor: "#FF0043",
  },
  textButtonCalculator: {
    fontSize: 20,
    color: "#fff",
  },
  errorMessage: {
    fontSize: 12,
    fontWeight: "bold",
    paddingLeft: 20,
    color: "red",
  }
});

export default styles;