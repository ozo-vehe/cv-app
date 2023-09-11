import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: "center",
  },
  buttonText: {
    textAlign: "center",
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 5,
    width: 200,
    fontSize: 18,
  }
})

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  profile: {
    backgroundColor: "#82AB8D",
    paddingTop: 30,
    paddingHorizontal: 10,
    paddingVertical: 30,
  },
  name: {
    color: "#f7f7f7",
    fontSize: 44,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    marginBottom: 5,
  },
  details: {
    color: "#f7f7f7",
    fontWeight: "500",
    fontSize: 18,
    textAlign: "center",
  },
  bio: {
    marginVertical: 20,
    padding: 10,
  },
  bioHeader: {
    fontSize: 30,
    marginBottom: 10,
    fontWeight: "bold",
    textAlign: "center",
    color: "#181818",
  },
  bioText: {
    color: "#181818",
    textAlign: "center",
    fontSize: 20,
    lineHeight: 30,
  },
  buttonText: {
    color: "#f7f7f7",
    backgroundColor: "#82AB8D",
  }
})

export const editStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
  },
  header: {
    fontSize: 44,
    textAlign: "center",
    fontWeight: "bold",
  },
  subText: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 30,
  },
  inputField: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  input: {
    color: '#181818',
    borderWidth: 1,
    paddingVertical: 10,
    paddingLeft: 10,
    fontSize: 18,
    borderRadius: 5,
    borderColor: "#181818",
  },
  inputButton: {
    color: "#f7f7f7",
    backgroundColor: "#82AB8D",
    width: 150,
    padding: 10,
    textAlign: "center",
    borderRadius: 5,
  },
  textarea: {
    height: 150,
    textAlignVertical: "top",
  },
  buttonText: {
    color: "#f7f7f7",
    backgroundColor: "#82AB8D",
    marginVertical: 10,
  }
})