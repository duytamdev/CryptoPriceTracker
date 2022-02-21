import React, {useContext} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AntDesign, MaterialIcons} from "@expo/vector-icons";
import {FavoriteContext} from "../../context/FavoriteContext";

const CoinDetailHeader = ({image, symbol, marketCapRank, onGoBack, coinId}) => {
    const {favoriteList, addNewFavoriteCoin, removeFavoriteCoin} = useContext(FavoriteContext);
    const checkIfCoinIsFavoriteList = () => {
        return favoriteList.some(coinIdValue => coinIdValue === coinId);
    }
    const handleLikeCoin = async () => {
        if (checkIfCoinIsFavoriteList() === true) {
            return await removeFavoriteCoin(coinId);
        }
        return await addNewFavoriteCoin(coinId);
    }
    return (
        <View style={styles.headerBar}>
            <TouchableOpacity onPress={onGoBack}>
                <MaterialIcons name="arrow-back-ios" size={30} color="white"/>
            </TouchableOpacity>
            <View style={styles.tickerContainer}>

                <Image source={{uri: image}} style={{width: 25, height: 25}}/>
                <Text style={styles.tickerTitle}>{symbol.toUpperCase()}</Text>
                <View style={styles.rankContainer}>
                    <Text style={styles.tickerRank}>#{marketCapRank}</Text>
                </View>
            </View>
            <AntDesign
                onPress={handleLikeCoin}
                name={checkIfCoinIsFavoriteList() == true ? 'star' : 'staro'}
                size={24}
                color="yellow"/>
        </View>
    );
};
const styles = StyleSheet.create({
    rankContainer: {
        backgroundColor: '#585858',
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderRadius: 5,
    },
    tickerRank: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
    },
    tickerTitle: {
        fontWeight: 'bold',
        color: 'white',
        marginHorizontal: 5,
    },
    tickerContainer: {
        flexDirection: 'row', alignItems: 'center'
    },
    headerBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});
export default CoinDetailHeader;
