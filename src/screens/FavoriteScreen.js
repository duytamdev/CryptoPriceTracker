import React, {useContext, useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {FavoriteContext} from '../context/FavoriteContext';
import {getFavoriteCoins} from '../services/cryptoService';
import CoinItem from '../components/CoinItem';

export const Header = title => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
const FavoriteScreen = () => {
  const {favoriteList} = useContext(FavoriteContext); // list coinID
  const [coins, setCoins] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const transformCoinIds = () => favoriteList.join('%2C');
  const fetchFavoriteCoins = async () => {
    const data = await getFavoriteCoins(1, transformCoinIds());
    setCoins(data);
  };
  useEffect(() => {
    if (favoriteList.length > 0) {
      fetchFavoriteCoins();
    }
  }, [favoriteList]);
  const handleRefresh = () => {
    setRefreshing(true);
    fetchFavoriteCoins();
    setRefreshing(false);
  };
  return (
    <View style={styles.container}>
      {coins && (
        <FlatList
          refreshing={refreshing}
          onRefresh={handleRefresh}
          ListHeaderComponent={Header('Favorite')}
          data={coins}
          renderItem={({item}) => {
            return (
              <CoinItem
                symbol={item.symbol}
                name={item.name}
                logoUrl={item.image}
                rank={item.market_cap_rank}
                price_change_percentage_24h={item.price_change_percentage_24h}
                market_cap={item.market_cap}
                current_price={item.current_price}
              />
            );
          }}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: '#121212',
  },
  headerContainer: {
    paddingStart: 16,
    paddingBottom: 16,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },
});
export default FavoriteScreen;
