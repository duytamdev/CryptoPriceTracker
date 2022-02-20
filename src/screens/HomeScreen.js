import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View,Text} from 'react-native';
import CoinItem from "../components/CoinItem";
import {getMarketData} from "../services/cryptoService";
const Header = ()=>{
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.title}>Markers</Text>
        </View>
    )
}
const HomeScreen = ({navigation}) => {
    const [data, setData] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    useEffect(()=>{
       const fetchMarkerData =async() => {
           const res = await getMarketData();
           setData(res)
       }
       fetchMarkerData()
    },[])
    const handleRefresh = () => {
      setRefreshing(true);
        const fetchMarkerData =async() => {
            const res = await getMarketData();
            setData(res)
        }
        fetchMarkerData()
      setRefreshing(false);
    }
    const handleWatchDetail = (coin) => {
      navigation.navigate('CoinDetailedScreen',{
          name: coin.name,
          rank: coin.market_cap_rank,
          symbol: coin.symbol,
          price_change_percentage_24h:coin.price_change_percentage_24h,
          current_price: coin.current_price,
          image: coin.image,
          sparkline:coin.sparkline_in_7d.price
      });
    }
    return (
        <View style={styles.container}>
            <FlatList ListHeaderComponent={Header} refreshing={refreshing} onRefresh={handleRefresh} data={data} renderItem={({item}) => {
                return (
                    <CoinItem
                        onPress={()=>handleWatchDetail(item)}
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
        paddingTop: 40,
        flex: 1,
        backgroundColor: '#121212',
    },
    headerContainer: {
        paddingStart: 16,
        borderBottomColor:'white',
        borderBottomWidth: 1,
        paddingBottom: 16,
    },
    title:{
      color:'white',
      fontWeight:'bold',
      fontSize: 24,
    },
});
export default HomeScreen;
