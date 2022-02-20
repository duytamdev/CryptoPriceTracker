import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {AntDesign} from '@expo/vector-icons';

const CoinItem =
    ({
         name,
         logoUrl,
         rank,
         price_change_percentage_24h,
         market_cap,
         current_price,
         symbol
     }) => {
        const normalizeMarketCap = (marketCap) => {
            if (marketCap > 1000000000000) {
                return `${Math.floor(marketCap / 1000000000000)} T`;
            }
            if (marketCap > 1000000000) {
                return `${Math.floor(marketCap / 1000000000)} B`;
            }
            if (marketCap > 1000000) {
                return `${Math.floor(marketCap / 1000000)} M`;
            }
            if (marketCap > 1000) {
                return `${Math.floor(marketCap / 1000)} K`;
            }
            return marketCap;
        };
        const percentageColor = price_change_percentage_24h < 0 ? '#ea3943' : '#16c784';
        const percentageIcon = price_change_percentage_24h < 0 ? 'caretdown' : 'caretup'
        return (
            <View style={styles.container}>
                <Image
                    style={{width: 30, height: 30, marginEnd: 10, alignSelf: 'center'}}
                    source={{uri: logoUrl}}
                />
                <View>
                    <Text style={styles.title}>{name}</Text>
                    <View style={{flexDirection: 'row'}}>
                        <View style={styles.rankContainer}>
                            <Text style={styles.rank}>{rank}</Text>
                        </View>
                        <Text style={styles.text}>{symbol.toUpperCase()} </Text>
                        <AntDesign
                            name={percentageIcon}
                            size={12}
                            color={percentageColor}
                            style={{alignSelf: 'center', marginEnd: 5}}
                        />
                        <Text style={{color: percentageColor}}>{`${price_change_percentage_24h.toFixed(2)}%`}</Text>
                    </View>
                </View>
                <View style={{marginLeft: 'auto', alignItems: 'flex-end'}}>
                    <Text style={styles.title}>{`${current_price}$`}</Text>
                    <Text style={styles.text}>{`MCap ${normalizeMarketCap(market_cap)}`}</Text>

                </View>
            </View>
        );
    };
const styles = StyleSheet.create({
    text: {
        color: 'white',
    },
    title: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    container: {
        flexDirection: 'row',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'gray',
        padding: 15,
    },
    rank: {
        fontWeight: 'bold',
        color: 'white',
    },
    rankContainer: {
        backgroundColor: '#585858',
        paddingHorizontal: 5,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5,
    },
});
export default CoinItem;
