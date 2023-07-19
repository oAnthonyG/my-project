import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  resultIMC: {
    fontSize: 48,
    fontWeight: "bold",
    width: "100%",
    alignItems: "center",
    flex: 1,
    marginTop: 20,
    paddingTop: 60,
    borderRadius: 50,
    color: "#FF0043",
  },
  numberImc: {
    fontSize: 48,
    color: "#FF0043",
    fontWeight: "bold",
  },
  information: {
    fontSize: 18,
    color: "#FF0043",
    fontWeight: "bold",
  },
  boxShareButton: {
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
  },
  shared: {
    backgroundColor: "#1877f2",
    borderRadius: 50,
    paddingBottom: 5,
    paddingTop: 5,
  },
  sharedText: {
    color: "#fff",
    fontWeight: "bold",
    paddingHorizontal: 30,
  }
});

export default styles;