import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'


export default class NumberButton extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { value } = this.props
        return (
            <TouchableOpacity onPress={() => this.props.onNumClick(value)} style={{...styles.button, width: value === '0' ? 160 : 70}}>
                <Text style={styles.buttonTxt}>
                    {value}
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
  });
  