import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'


export default class OperationButton extends React.Component {
    constructor(props) {
        super(props)
    }

    handlePress = () => {
        const { value } = this.props

        if (this.props.handleResultPress) {
            this.props.handleResultPress()
        } else {
            this.props.handleOperationPress(value)
        }
    }

    render() {
        const { value } = this.props
        return (
            <TouchableOpacity onPress={this.handlePress} style={[styles.button, this.props.toolButton ? styles.buttonTool : styles.buttonOpt]}>
                <Text style={styles.buttonTxt}>
                    {value === '*' ? 'x' : value}
                </Text>
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    button: {
      width: 70,
      height: 70,
      backgroundColor: 'white',
      margin: 10,
      borderRadius: 35,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonTxt: {
      fontSize: 40,
      padding: 10
    },
    buttonOpt: {
      backgroundColor: '#DAF7A6'
    },
    buttonTool: {
        backgroundColor: '#FFC300'
      },
  
  });
  