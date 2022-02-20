import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import cryptocurrencies from "../../assets/data/cryptocurrencies.json";
import CoinItem from "../components/CoinItem";

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <FlatList data={cryptocurrencies} renderItem={({item}) => {
                return (
                    <CoinItem
                        market_cap={item.market_cap}
                        price_change_percentage_24h={item.price_change_percentage_24h}
                        current_price={item.current_price}
                        symbol={item.symbol}
                        rank={item.market_cap_rank}
                        logoUrl={item.image}
                        key={item.id}
                        name={item.name}/>
                )
            }}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flex: 1,
        backgroundColor: '#121212',
    },
});
export default HomeScreen;
