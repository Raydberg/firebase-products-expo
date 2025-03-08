import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import ThemedView from './ThemedView'
import { AntDesign } from '@expo/vector-icons'
import { deleteDoc, doc, updateDoc } from 'firebase/firestore'
import { database } from '@/firebaseConfig'

interface Props {
    id: string,
    emoji: string,
    name: string,
    price: number,
    isSolid: boolean
}

const ThemedProduct = ({ id, emoji, name, price, isSolid }: Props) => {
    const onEdit = (id: { id: string }) => {
        const docRef = doc(database, 'products', id);
        updateDoc(docRef, {
            isSolid: false
        })
    }
    const onDeleted = () => {
        const docRef = doc(database, 'products', id)
        deleteDoc(docRef);
    }
    return (
        <View className='m-2 p-4 rounded-xl shadow-md flex flex-col items-center '>
            <View>
                <AntDesign onPress={onDeleted} name='delete' size={36} color='red' />
            </View>
            <Text className='text-6xl mb-3'>{emoji}</Text>
            <View className='w-full flex flex-row items-center justify-between'>
                <View>
                    <Text className='text-lg font-bold'>{name}</Text>
                    <Text className='text-sm text-gray-500'>{isSolid ? 'Solid' : 'Liquid'}</Text>
                </View>
                <View>
                    <Text className='text-lg font-semibold text-green-600'>${price.toFixed(2)}</Text>
                </View>
                <TouchableOpacity className=''>
                    <Text>Comprar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ThemedProduct
