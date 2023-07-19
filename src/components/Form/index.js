import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Vibration } from "react-native";
import ResultIMC from "./ResultIMC";
import styles from "./styles";


export default function Form() {

  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageIMC, setMessageIMC] = useState(null);
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");
  const [errorMessage, setErrorMessag] = useState(null);

  function imcCalculator() {
    return setImc((weight / (height * height)).toFixed(2));
  }

  function verificationImc() {
    if (imc == null) {
      Vibration.vibrate();
      setErrorMessag("campo orbigatorio!")
    }
  }

  function validationImc() {
    if (weight != null && height != null) {
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setMessageIMC("Seu IMC é igual:");
      setTextButton("Calcular Novamente");
      setErrorMessag(null);

      return
    }
    verificationImc();
    setImc(null);
    setTextButton("Calcular");
    setMessageIMC("Preencha o peso e altura");
  }

  return (
    <View style={styles.FormContext}>
      <View style={styles.form}>

        <Text style={styles.formLabel}>Altura</Text>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
        <TextInput style={styles.input}
          onChangeText={setHeight}
          value={height}
          placeholder="EX. 1.75"
          keyboardType="numeric"
        />

        <Text style={styles.formLabel}>Peso</Text>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
        <TextInput style={styles.input}
          onChangeText={setWeight}
          value={weight}
          placeholder="EX. 60.893"
          keyboardType="numeric"
        />
        <TouchableOpacity
          style={styles.buttonCalculator}
          onPress={() => validationImc()} >
          <Text
            style={styles.textButtonCalculator}>{textButton}</Text>
        </TouchableOpacity>
      </View>
      <ResultIMC
        messageResultIMC={messageIMC}
        resultIMC={imc}
      />
    </View>
  );
}

