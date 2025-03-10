import { View, Text, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'
import ThemedView from '@/components/ThemedView'
import { FontAwesome } from '@expo/vector-icons'
import { router } from 'expo-router'

const ForgotScreen = () => {
    const [email, setEmail] = useState<string>("")
    return (
        <ThemedView margin className='flex flex-col justify-center items-center h-full'>
            <View className='w-4/5 max-w-sm'>
                <Text className='text-3xl font-bold mb-8 text-center dark:text-white'>Recupera tu contraseña</Text>
                <Text className='text-2xl font-bold mb-8 text-center dark:text-white'>Ingresa tu correo para recuperar contraseña</Text>

                <View className='mb-4'>
                    <Text className='text-sm mb-1 dark:text-gray-300'>Email</Text>
                    <View className='flex-row mb-2 items-center bg-gray-100 dark:bg-gray-800 rounded-lg'>
                        <View className='p-3'>
                            <FontAwesome name="envelope-o" size={20} color="#9CA3AF" />
                        </View>
                        <TextInput
                            value={email}
                            onChangeText={setEmail}
                            placeholder='Enter your email'
                            className='flex-1 p-3 dark:text-white mb-5'
                            placeholderTextColor='#9CA3AF'
                            autoCapitalize='none'
                            keyboardType='email-address'
                        />
                    </View>
                    <Text onPress={() => router.back()} className='mt-5 text-blue-500 font-semibold text-right'>Volver atras</Text>
                    <Pressable className='mt-2' >
                        <View className='mt-5 bg-blue-500 rounded-lg p-3'>
                            <Text className='text-white text-center font-bold'>Enviar codigo</Text>
                        </View>
                    </Pressable>
                </View>


            </View>
        </ThemedView>
    )
}

export default ForgotScreen