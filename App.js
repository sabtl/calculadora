<<<<<<< HEAD
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

export default function App() {
  const [display, setDisplay] = useState('0');
  const [prev, setPrev] = useState(null);
  const [op, setOp] = useState(null);
  const [newNum, setNewNum] = useState(false);

  const handleNum = (n) => {
    if (newNum) {
      setDisplay(String(n));
      setNewNum(false);
    } else {
      setDisplay(display === '0' ? String(n) : display + n);
    }
  };

  const handleOp = (operation) => {
    const curr = parseFloat(display);
    if (prev === null) {
      setPrev(curr);
    } else if (op) {
      const result = calc(prev, curr, op);
      setDisplay(String(result));
      setPrev(result);
    }
    setOp(operation);
    setNewNum(true);
  };

  const calc = (p, c, operation) => {
    switch (operation) {
      case '+': return p + c;
      case '-': return p - c;
      case '*': return p * c;
      case '/': return p / c;
      default: return c;
    }
  };

  const handleEq = () => {
    if (op && prev !== null) {
      const result = calc(prev, parseFloat(display), op);
      setDisplay(String(result));
      setPrev(null);
      setOp(null);
      setNewNum(true);
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setPrev(null);
    setOp(null);
    setNewNum(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>🧮 Calculadora</Text>
        
        <View style={styles.display}>
          <Text style={styles.displayText}>{display}</Text>
        </View>

        <View style={styles.buttons}>
          <View style={styles.row}>
            <Button mode="contained" onPress={handleClear} style={styles.btn} labelStyle={styles.label}>C</Button>
            <Button mode="contained" onPress={() => handleOp('+')} style={[styles.btn, styles.op]} labelStyle={styles.label}>+</Button>
            <Button mode="contained" onPress={() => handleOp('-')} style={[styles.btn, styles.op]} labelStyle={styles.label}>-</Button>
            <Button mode="contained" onPress={() => handleOp('*')} style={[styles.btn, styles.op]} labelStyle={styles.label}>×</Button>
          </View>

          <View style={styles.row}>
            <Button mode="contained" onPress={() => handleNum(7)} style={styles.btn} labelStyle={styles.label}>7</Button>
            <Button mode="contained" onPress={() => handleNum(8)} style={styles.btn} labelStyle={styles.label}>8</Button>
            <Button mode="contained" onPress={() => handleNum(9)} style={styles.btn} labelStyle={styles.label}>9</Button>
            <Button mode="contained" onPress={() => handleOp('/')} style={[styles.btn, styles.op]} labelStyle={styles.label}>÷</Button>
          </View>

          <View style={styles.row}>
            <Button mode="contained" onPress={() => handleNum(4)} style={styles.btn} labelStyle={styles.label}>4</Button>
            <Button mode="contained" onPress={() => handleNum(5)} style={styles.btn} labelStyle={styles.label}>5</Button>
            <Button mode="contained" onPress={() => handleNum(6)} style={styles.btn} labelStyle={styles.label}>6</Button>
            <Button mode="contained" onPress={handleEq} style={[styles.btn, styles.eq]} labelStyle={styles.label}>=</Button>
          </View>

          <View style={styles.row}>
            <Button mode="contained" onPress={() => handleNum(1)} style={styles.btn} labelStyle={styles.label}>1</Button>
            <Button mode="contained" onPress={() => handleNum(2)} style={styles.btn} labelStyle={styles.label}>2</Button>
            <Button mode="contained" onPress={() => handleNum(3)} style={styles.btn} labelStyle={styles.label}>3</Button>
            <Button mode="contained" onPress={() => handleNum(0)} style={styles.btn} labelStyle={styles.label}>0</Button>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    maxWidth: 320,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    color: '#333',
  },
  display: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    height: 60,
    justifyContent: 'flex-end',
  },
  displayText: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'right',
    color: '#333',
  },
  buttons: {
    gap: 8,
  },
  row: {
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'space-between',
  },
  btn: {
    flex: 1,
    height: 50,
    backgroundColor: '#007AFF',
    borderRadius: 10,
    justifyContent: 'center',
  },
  op: {
    backgroundColor: '#FF9500',
  },
  eq: {
    backgroundColor: '#34C759',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
=======
import Count from './components/count'

export default function App() {
  return (
    <Count />
  );
}
>>>>>>> 105e392c9e4c061c6dc730d94cb5de27cd62f43a
