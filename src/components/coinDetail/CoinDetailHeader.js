import React from 'react';
import {Text, View, StyleSheet, Image,TouchableOpacity} from 'react-native';
import {EvilIcons, MaterialIcons} from "@expo/vector-icons";

const CoinDetailHeader = ({image,symbol,marketCapRank,onGoBack}) => {

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
            <EvilIcons name="user" size={30} color="white"/>
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
