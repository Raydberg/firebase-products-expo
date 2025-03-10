import { View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import ThemedView from '@/presentation/shared/ThemedView'
import { FontAwesome } from '@expo/vector-icons'
import { router, Href } from 'expo-router';

const LoginScreen = () => {
    const [password, setPassword] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [showPassword, setShowPassword] = useState<boolean>()
    const onChangeLogin = () => {
        console.log(password, email)
    }
    return (
        <ThemedView margin className='flex flex-col justify-center items-center h-full'>
            <View className='w-4/5 max-w-sm'>
                <Text className='text-3xl font-bold mb-8 text-center dark:text-white'>Bienvenido!!!!!</Text>

                <View className='mb-4'>
                    <Text className='text-sm mb-1 dark:text-gray-300'>Email</Text>
                    <View className='flex-row items-center bg-gray-100 dark:bg-gray-800 rounded-lg'>
                        <View className='p-3'>
                            <FontAwesome name="envelope-o" size={20} color="#9CA3AF" />
                        </View>
                        <TextInput
                            value={email}
                            onChangeText={setEmail}
                            placeholder='Enter your email'
                            className='flex-1 p-3 dark:text-white'
                            placeholderTextColor='#9CA3AF'
                            autoCapitalize='none'
                            keyboardType='email-address'
                        />
                    </View>
                </View>

                <View className='mb-6'>
                    <Text className='text-sm mb-1 dark:text-gray-300'>Password</Text>
                    <View className='flex-row items-center bg-gray-100 dark:bg-gray-800 rounded-lg'>
                        <View className='p-3'>
                            <FontAwesome name="lock" size={20} color="#9CA3AF" />
                        </View>
                        <TextInput
                            value={password}
                            onChangeText={setPassword}
                            placeholder='Enter your password'
                            className='flex-1 p-3 dark:text-white'
                            placeholderTextColor='#9CA3AF'
                            secureTextEntry={!showPassword}
                        />
                        <Pressable onPress={() => setShowPassword(!showPassword)} className='p-3'>
                            <FontAwesome name={showPassword ? "eye" : "eye-slash"} size={20} color="#9CA3AF" />
                        </Pressable>
                    </View>
                    <Text onPress={() => router.push('/(auth)/forgot')} className='text-right text-sm mt-1 text-blue-500'>Olvidaste tu contraseña?</Text>
                </View>

                <Pressable className='mt-2' onPress={onChangeLogin}>
                    <View className='bg-blue-500 rounded-lg p-3'>
                        <Text className='text-white text-center font-bold'>Iniciar Sesion</Text>
                    </View>
                </Pressable>

                <View className='flex-row justify-center mt-6'>
                    <Text className='dark:text-gray-300'>No tienes cuenta ? </Text>
                    <Text onPress={() => router.push('/(auth)/register')} className='text-blue-500 font-semibold'>Crea una cuenta</Text>
                </View>
            </View>
        </ThemedView>
    )
}

export default LoginScreen
