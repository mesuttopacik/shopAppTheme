import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import colors from '../../../constants/colors'
import Button from '../../components/Button'
import Input from '../../components/Input'

const Search = () => {
    return (
        <View style={styles.contanier}>
            <Input  placeholder='searc something' />
            <Button>deneme</Button>
        </View>
    )
}

const styles = StyleSheet.create({
contanier:{
    flex:1,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
}
})

export default Search
