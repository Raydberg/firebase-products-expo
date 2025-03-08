import { View, Text, Pressable, PressableProps } from 'react-native'
import { Href, router } from 'expo-router'

interface Props extends PressableProps {
    title: string;
    bgColor?: string;
    textColor?: string;
}

const ThemedButton = ({ title, bgColor = 'bg-blue-600', textColor = 'text-white', ...rest }: Props) => {
    return (
        <Pressable
            className={`px-6 py-3 ${bgColor} rounded-lg shadow-lg active:bg-blue-700 active:transform active:scale-95`}
            style={({ pressed }) => [
                {
                    elevation: pressed ? 2 : 5,
                    transform: [{ scale: pressed ? 0.98 : 1 }],
                    alignSelf: 'flex-start',
                },
            ]}
            {...rest}
        >
            <Text className={`${textColor} font-bold text-xs tracking-wide`}>
                {title}
            </Text>
        </Pressable>
    )
}

export default ThemedButton