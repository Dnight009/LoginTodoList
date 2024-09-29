import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Vibration } from 'react-native';

const Calculator = () => {
  const [currentNumber, setCurrentNumber] = useState<string>("");
  const [lastNumber, setLastNumber] = useState<string>("");

  const handleInput = (buttonPress: string) => {
    switch (buttonPress) {
      case "+": case "-": case "*": case "/":
        //Vibration.vibrate(35);
        setCurrentNumber(currentNumber + buttonPress);
        break;
      case "DEL":
        //Vibration.vibrate(35);
        setCurrentNumber(currentNumber.substring(0, currentNumber.length - 1));
        break;
      case "C":
        //Vibration.vibrate(35);
        setCurrentNumber("");
        setLastNumber("");
        break;
      case "=":
        //Vibration.vibrate(35);
        try {
          // Evaluate the expression
          // Note: Using eval here is for simplicity. In a real app, consider using a safer method.
          const result = eval(currentNumber);
          setCurrentNumber(result.toString());
        } catch (e) {
          setCurrentNumber("Error");
        }
        break;
      default:
        //Vibration.vibrate(35);
        setCurrentNumber(currentNumber + buttonPress);
        break;
    }
  };

  const buttonsLeft = [
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['0', '.', '=', '+']
  ];

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.text}>{currentNumber}</Text>
      </View>
      <View style={styles.buttonContainer}>
        {
          buttonsLeft.map((row, index) => (
            <View key={index} style={styles.row}>
              {
                row.map((item, itemIndex) => (
                  <TouchableOpacity
                    key={itemIndex}
                    style={styles.button}
                    onPress={() => handleInput(item)}
                  >
                    <Text style={styles.buttonText}>{item}</Text>
                  </TouchableOpacity>
                ))
              }
            </View>
          ))
        }
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleInput("C")}
        >
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleInput("DEL")}
        >
          <Text style={styles.buttonText}>DEL</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  display: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  text: {
    fontSize: 48,
    color: '#000',
  },
  buttonContainer: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  buttonText: {
    fontSize: 24,
    color: '#000',
  },
});

export default Calculator;










