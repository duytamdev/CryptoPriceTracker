import React, {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FavoriteContext = createContext();

const FavoriteProvider = ({children}) => {
  const [favoriteCoinIdList, setFavoriteCoinIdList] = useState([]);
  const getFavoriteCoinIdList = async () => {
    const jsonValue = await AsyncStorage.getItem('@favoriteList');
    setFavoriteCoinIdList(jsonValue != null ? JSON.parse(jsonValue) : []);
  };
  useEffect(() => {
    getFavoriteCoinIdList();
  }, []);

  const addNewFavoriteCoin = async coinId => {
    try {
      const newList = [...favoriteCoinIdList, coinId];
      const jsonValue = JSON.stringify(newList);
      await AsyncStorage.setItem('@favoriteList', jsonValue);
      setFavoriteCoinIdList(newList);
      return true;
    } catch (e) {
      console.log(e);
    }
    return false;
  };
  const removeFavoriteCoin = async coinId => {
    try {
      const newList = favoriteCoinIdList.filter(
        favorite => favorite !== coinId,
      );
      const jsonValue = JSON.stringify(newList);
      await AsyncStorage.setItem('@favoriteList', jsonValue);
      setFavoriteCoinIdList(newList);
      return true;
    } catch (e) {
      console.log(e);
    }
    return false;
  };
  return (
    <FavoriteContext.Provider
      value={{
        favoriteList: favoriteCoinIdList,
        getFavoriteList: getFavoriteCoinIdList,
        addNewFavoriteCoin,
        removeFavoriteCoin,
      }}>
      {children}
    </FavoriteContext.Provider>
  );
};
export {FavoriteContext, FavoriteProvider};
