import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const LayoutScreen = () => {
    return (
        <Stack>
            <Stack.Screen name='index'
                options={{
                    title: 'Productos',
                    headerShown: false
                }}
            />
            <Stack.Screen name='add-product/index'
                options={{
                    title: 'Productos',
                    headerShown: false,
                    presentation:'modal'
                }}
            />

        </Stack>
    )
}

export default LayoutScreen