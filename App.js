import React from 'react';
import { StyleSheet, Text, View, Dimensions, StatusBar, Alert } from 'react-native';
import NumberButton from './src/components/NumberButton';
import OperationButton from './src/components/OperationButton';


export default class App extends React.Component {
  state = {
    inputField: '0',
    result: null
  }

  operations = ['/', '+', '-', '*', '%']

  onNumClick = (val) => {
    const { inputField } = this.state
    if (val == 0 && inputField.length === 1) return
    if (inputField.slice(-1) === '.' && val === '.') return
    this.setState({
      inputField: inputField !== '0' || val === '.' ? inputField + val : val
    })
  }

  handleOperationPress = (opt) => {
    const { inputField, result } = this.state

    if (opt === 'AC') {
      this.setState({
        inputField: '0',
        result: null
      })
      return
    }

    if (opt === 'Del') {
      const newInputField = inputField.slice(0, inputField.length - 1)
      this.setState({
        inputField: newInputField
      })
      return
    }

    this.setState({
      inputField: result ? result + opt : inputField + opt,
      result: null,
    })
  }

  handleResultPress = () => {
    try {
      const { inputField } = this.state

      if (this.operations.indexOf(inputField.slice(-1)) > -1) {
        return
      }
      this.setState({
        result: eval(inputField)
      }, () => this.setState({ inputField: new String(this.state.result), result: null }))
    } catch {
      Alert.alert('Invalid operation')
    }
   
  }

  render() {
    const { inputField } = this.state
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <View>
          <Text style={styles.inputField}>
            {inputField}
          </Text>
        </View>
        <View style={styles.panel}>
          <OperationButton handleOperationPress={this.handleOperationPress} toolButton value={'AC'} />
          <OperationButton handleOperationPress={this.handleOperationPress} toolButton value={'Del'} />
          <OperationButton handleOperationPress={this.handleOperationPress} toolButton value={'%'} />
          <OperationButton handleOperationPress={this.handleOperationPress} value={'/'} />
          <NumberButton onNumClick={this.onNumClick} value={'7'} />
          <NumberButton onNumClick={this.onNumClick} value={'8'} />
          <NumberButton onNumClick={this.onNumClick} value={'9'} />
          <OperationButton handleOperationPress={this.handleOperationPress} value={'*'} />
          <NumberButton onNumClick={this.onNumClick} value={'4'} />
          <NumberButton onNumClick={this.onNumClick} value={'5'} />
          <NumberButton onNumClick={this.onNumClick} value={'6'} />
          <OperationButton handleOperationPress={this.handleOperationPress} value={'-'} />
          <NumberButton onNumClick={this.onNumClick} value={'1'} />
          <NumberButton onNumClick={this.onNumClick} value={'2'} />
          <NumberButton onNumClick={this.onNumClick} value={'3'} />
          <OperationButton handleOperationPress={this.handleOperationPress} value={'+'} />
          <NumberButton onNumClick={this.onNumClick} value={'0'} />
          <NumberButton onNumClick={this.onNumClick} value={'.'} />
          <OperationButton handleResultPress={this.handleResultPress} value={'='} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  panel: {
    borderTopColor: '#DAF7A6',
    borderTopWidth: 3,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2 + 120,
    flexWrap: 'wrap',
    flexDirection: 'row',
    padding: 5,
    backgroundColor: '#337176'
  },
  inputField: {
    fontSize: 50,
    padding: 20
  },

});
