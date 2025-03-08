import { View, Text } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import ThemedButton from '@/components/ThemedButton'
import { Href, router, useNavigation } from 'expo-router'
import ThemedView from '@/components/ThemedView'
import { collection, onSnapshot, orderBy, Query, query, QuerySnapshot } from 'firebase/firestore'
import { database } from '@/firebaseConfig'
import ThemedProduct from '@/components/ThemedProduct'

interface Product {
    id: string;
    emoji: any;
    price: any;
    name: any;
    isSolid: any;
    createAt: any;
}
const HomeScreen = () => {
    
    const navigation = useNavigation();
    const [product, setProduct] = useState<Product[]>([])
    useEffect(() => {
        const collectioRef = collection(database, 'products');
        const productsQuery = query(collectioRef, orderBy('createAt', 'desc'))
        const unsuscribe = onSnapshot(productsQuery, querySnapshot => {
            setProduct(querySnapshot.docs.map(doc => ({
                id: doc.id,
                emoji: doc.data().emoji,
                price: doc.data().price,
                name: doc.data().name,
                isSolid: doc.data().isSolid,
                createAt: doc.data().createAt

            })))
        })
        return unsuscribe;
    }, [])
    

    return (
        <ThemedView className="p-4 mt-5" >
            <View className='flex flex-row justify-between mt-6'>
                <Text>HomeScreen</Text>
                <ThemedButton
                    title='Añadir Producto'
                    onPress={() => router.push('/(products)/add-product' as Href)}
                />
            </View>

            <View className="mt-4 gap-2">
                {product.map(product => <ThemedProduct key={product.id} {...product} />)}
            </View>
        </ThemedView>
    )
}

export default HomeScreen