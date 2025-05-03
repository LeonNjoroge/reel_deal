import {View, Image, TextInput} from 'react-native'
import React from 'react'
import {icons} from "@/constants/icons";

interface Props {
    placeholder: string;
    onPress?: () => void;
}

const SearchBar = ({ onPress, placeholder}: Props) => {
    return (
        <View
            className="flex-row items-center bg-dark-100 rounded-full px-5 py-4"
        >
            <Image
                source={icons.search}
                className="size=5 "
            />

            <TextInput
                onPress={onPress}
                placeholder={placeholder}
                value=""
                onChangeText={()=>{}}
                placeholderTextColor="#A8B5DB"
                className="flex-1 ml-2 text-white"
            />
        </View>
    )
}
export default SearchBar