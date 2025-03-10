import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const AuthLayout = () => {
    return (
        <Stack>
            <Stack.Screen name='login/index' options={{ headerShown: false }} />
            <Stack.Screen name='register/index' options={{ headerShown: false }} />
            <Stack.Screen name='forgot/index' options={{ headerShown: false }} />
        </Stack>
    )
}

export default AuthLayout