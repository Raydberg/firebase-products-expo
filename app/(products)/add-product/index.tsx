import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import ThemedButton from '@/components/ThemedButton'
import { router, useNavigation } from 'expo-router'
import ThemedView from '@/components/ThemedView'
import EmojiPicker from 'rn-emoji-keyboard'
import { database } from '@/firebaseConfig'
import { collection, addDoc } from 'firebase/firestore'

const AddProductosScreen = () => {
    const [isOpen, setIsOpen] = useState(false)
    const navigation = useNavigation()
    const [newItem, setNewItem] = useState({
        emoji: '🧑‍💻',
        name: '' as string | null,
        price: 0,
        isSolid: false,
        createAt: new Date()
    })

    const handlePicker = (emojiOject) => {
        setNewItem({
            ...newItem,
            emoji: emojiOject.emoji
        })
    }
    const onSend = async () => {
        await addDoc(collection(database, 'products'), newItem);
        navigation.goBack()
    }
    return (
        <ThemedView className='p-4 mt-12'>
            <View className='flex flex-row justify-between'>
                <Text className='font-semibold text-2xl text-center'>Añadir un nuevo Emoji</Text>

                <ThemedButton
                    title='Atras'
                    onPress={() => router.back()}
                />
            </View>

            {/* Emoji selector */}
            <View className="mt-6 mb-4 items-center">
                <Text
                    onPress={() => setIsOpen(true)}
                    className="text-6xl shadow-sm p-4 bg-white rounded-full"
                >
                    {newItem.emoji}
                </Text>
                <Text className="text-gray-500 mt-2 text-sm">Toca para cambiar</Text>
            </View>

            <EmojiPicker
                onEmojiSelected={handlePicker}
                open={isOpen}
                onClose={() => setIsOpen(false)}
            />

            {/* Elegant input */}
            <View className="mt-4">
                <Text className="text-gray-600 mb-2 ml-1 font-medium">Nombre del Producto</Text>
                <TextInput
                    className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm text-lg"
                    placeholder="Ingresa el nombre"
                    placeholderTextColor="#9CA3AF"
                    onChangeText={(product) => setNewItem({ ...newItem, name: product })}
                    autoCapitalize="words"
                />
                <TextInput
                    className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm text-lg"
                    placeholder="Ingresa el precio"
                    placeholderTextColor="#9CA3AF"
                    onChangeText={(price) => setNewItem({ ...newItem, price: parseFloat(price) || 0 })}
                    keyboardType='phone-pad'
                // autoCapitalize=""
                />

                <ThemedButton
                    title='Añadir'
                    onPress={onSend}
                />
            </View>
        </ThemedView>
    )
}

export default AddProductosScreen