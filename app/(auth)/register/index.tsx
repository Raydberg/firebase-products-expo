import { View, Text, Pressable, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import ThemedView from '@/presentation/shared/ThemedView'
import { FontAwesome } from '@expo/vector-icons'
import { router } from 'expo-router'

interface FormDataProps {
    email: string,
    password: string,
    confirmPassword: string
}

const RegisterSreen = () => {
    const [formData, setFormData] = useState<FormDataProps>({
        email: '',
        password: '',
        confirmPassword: ''
    })


    const [showPassword, setShowPassword] = useState<boolean>()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [errors, setErrors] = useState<FormDataProps>({
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleChange = (field, value) => {
        setFormData(prev => ({
            ...prev, [field]: value
        }))
        if (errors[field]) {
            setErrors(prev => ({
                ...prev,
                [field]: value
            }))
        }
    }

    const validateForm = () => {
        let valid = true
        const newErrors = { email: '', password: '', confirmPassword: '' }

        // Validación de email
        if (!formData.email) {
            newErrors.email = 'El email es requerido'
            valid = false
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email inválido'
            valid = false
        }

        // Validación de contraseña
        if (!formData.password) {
            newErrors.password = 'La contraseña es requerida'
            valid = false
        } else if (formData.password.length < 6) {
            newErrors.password = 'La contraseña debe tener al menos 6 caracteres'
            valid = false
        }

        // Validación de confirmación
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Las contraseñas no coinciden'
            valid = false
        }

        setErrors(newErrors)
        return valid
    }
    const handleRegister = async () => {
        if (!validateForm()) return

        setIsSubmitting(true)
        try {
            console.log('Datos de registro:', formData)
            // Aquí iría la lógica de registro con Firebase
            // await createUserWithEmailAndPassword(auth, formData.email, formData.password)

            Alert.alert('Éxito', 'Registro exitoso', [
                { text: 'OK', onPress: () => router.push('/(auth)/login') }
            ])
        } catch (error) {
            Alert.alert('Error', 'No se pudo registrar. Intente nuevamente.')
            console.log(error)
        } finally {
            setIsSubmitting(false)
        }
    }
    return (
        <ThemedView className='flex flex-col justify-center items-center h-full'>
            <View className='w-4/5 max-w-sm'>
                <Text className='text-3xl font-bold mb-8 text-center dark:text-white'>
                    Registra tu cuenta
                </Text>

                {/* Campo email */}
                <View className='mb-4'>
                    <Text className='text-sm mb-1 dark:text-gray-300'>Email</Text>
                    <View className='flex-row items-center bg-gray-100 dark:bg-gray-800 rounded-lg'>
                        <View className='p-3'>
                            <FontAwesome name="envelope-o" size={20} color="#9CA3AF" />
                        </View>
                        <TextInput
                            value={formData.email}
                            onChangeText={(value) => handleChange('email', value)}
                            placeholder='Ingresa tu email'
                            className='flex-1 p-3 dark:text-white'
                            placeholderTextColor='#9CA3AF'
                            autoCapitalize='none'
                            keyboardType='email-address'
                        />
                    </View>
                    {errors.email ? <Text className='text-red-500 mt-1'>{errors.email}</Text> : null}
                </View>

                {/* Campo contraseña */}
                <View className='mb-4'>
                    <Text className='text-sm mb-1 dark:text-gray-300'>Contraseña</Text>
                    <View className='flex-row items-center bg-gray-100 dark:bg-gray-800 rounded-lg'>
                        <View className='p-3'>
                            <FontAwesome name="lock" size={20} color="#9CA3AF" />
                        </View>
                        <TextInput
                            value={formData.password}
                            onChangeText={(value) => handleChange('password', value)}
                            placeholder='Ingresa tu contraseña'
                            className='flex-1 p-3 dark:text-white'
                            placeholderTextColor='#9CA3AF'
                            secureTextEntry={!showPassword}
                        />
                        <Pressable onPress={() => setShowPassword(!showPassword)} className='p-3'>
                            <FontAwesome name={showPassword ? "eye" : "eye-slash"} size={20} color="#9CA3AF" />
                        </Pressable>
                    </View>
                    {errors.password ? <Text className='text-red-500 mt-1'>{errors.password}</Text> : null}
                </View>

                {/* Campo confirmar contraseña */}
                <View className='mb-6'>
                    <Text className='text-sm mb-1 dark:text-gray-300'>Confirmar contraseña</Text>
                    <View className='flex-row items-center bg-gray-100 dark:bg-gray-800 rounded-lg'>
                        <View className='p-3'>
                            <FontAwesome name="lock" size={20} color="#9CA3AF" />
                        </View>
                        <TextInput
                            value={formData.confirmPassword}
                            onChangeText={(value) => handleChange('confirmPassword', value)}
                            placeholder="Repite tu contraseña"
                            className='flex-1 p-3 dark:text-white'
                            placeholderTextColor='#9CA3AF'
                            secureTextEntry={!showPassword}
                        />
                    </View>
                    {errors.confirmPassword ? <Text className='text-red-500 mt-1'>{errors.confirmPassword}</Text> : null}
                    <Pressable onPress={() => router.push('/(auth)/login')}>
                        <Text className='text-right text-sm mt-3 text-blue-500'>¿Ya tienes una cuenta?</Text>
                    </Pressable>
                </View>

                {/* Botón de registro */}
                <Pressable
                    className={`mt-2 ${isSubmitting ? 'opacity-70' : ''}`}
                    onPress={handleRegister}
                    disabled={isSubmitting}
                >
                    <View className='bg-blue-500 rounded-lg p-3'>
                        <Text className='text-white text-center font-bold'>
                            {isSubmitting ? 'Registrando...' : 'Registrarse'}
                        </Text>
                    </View>
                </Pressable>
            </View>
        </ThemedView>
    )
}

export default RegisterSreen