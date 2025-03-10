import { View, Text } from 'react-native'
import React from 'react'
import { Redirect, Href } from 'expo-router';

const App = () => {
    return <Redirect href={'/(auth)/login' as Href} />
    // return <Redirect href={'/(drawer)/(tabs)/home' as Href} />
}

export default App