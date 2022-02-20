import React, {useState} from 'react';
import {Dimensions, StyleSheet, Text, TextInput, View} from 'react-native';
import CoinDetailHeader from "../components/coinDetail/CoinDetailHeader";
import {AntDesign} from "@expo/vector-icons";
import {ChartDot, ChartPath, ChartPathProvider, ChartYLabel} from "@rainbow-me/animated-charts";

export const {width: SIZE} = Dimensions.get('window');

const CoinDetailedScreen = ({navigation,route}) => {

    const {
        current_price, image, name, symbol, price_change_percentage_24h, sparkline,rank
    } = route.params;
    const [coinValue, setCoinValue] = useState('1');
    const [usdValue, setUsdValue] = useState(current_price.toString());
    const percentageIcon = price_change_percentage_24h < 0 ? 'caretdown' : 'caretup'
    const percentageColor = price_change_percentage_24h < 0 ? '#ea3943' : '#16c784';

    const changeCoinValue = (value) => {
        setCoinValue(value);
        const floatValue = parseFloat(value) || 0;
        setUsdValue((floatValue * current_price).toFixed(5).toString());
    };

    const changeUsdValue = (value) => {
        setUsdValue(value);
        const floatValue = parseFloat(value)|| 0;
        setCoinValue((floatValue / current_price).toFixed(5).toString());
    };
    const formatUSD = value => {
        'worklet';
        if (value === '') {
            const formattedValue = `$${current_price.toLocaleString('en-US', { currency: 'USD' })}`
            return formattedValue;
        }

        const formattedValue =`$${parseFloat(value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`
        return formattedValue;
    };

    return (
        <View style={styles.container}>
            <ChartPathProvider data={{points:sparkline, smoothingStrategy: 'bezier'}}>

                <CoinDetailHeader
                    onGoBack={()=> navigation.goBack()}
                    image={image}
                    symbol={symbol}
                    marketCapRank={rank}
                />
                <View style={styles.priceContainer}>
                    <View>
                        <Text style={styles.name}>{name}</Text>
                        <ChartYLabel
                            format={formatUSD}
                            style={styles.currentPrice}
                        />
                    </View>
                    <View style={[styles.percentageContainer, {backgroundColor: percentageColor}]}>
                        <AntDesign
                            name={percentageIcon}
                            size={12}
                            color={'white'}
                            style={{alignSelf: 'center', marginEnd: 5}}
                        />
                        <Text style={styles.percentage}>
                            {price_change_percentage_24h.toFixed(2)}%
                        </Text>
                    </View>

                </View>
                <View>
                    <ChartPath strokeWidth={2} height={SIZE / 2} stroke={percentageColor} width={SIZE}/>
                    <ChartDot style={{backgroundColor: percentageColor,}}
                    />
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flexDirection:'row',flex:1, alignItems:'center'}}>
                        <Text style={styles.text}>{symbol.toUpperCase()}</Text>
                        <TextInput
                            onChangeText={value=> changeCoinValue(value)}
                            value={coinValue}
                            keyboardType={'numeric'}
                            style={styles.input}/>
                    </View>
                    <View style={{flexDirection:'row',flex:1, alignItems:'center'}}>
                        <Text style={styles.text}>USD</Text>
                        <TextInput
                            onChangeText={value=> changeUsdValue(value)}
                            value={usdValue}
                            keyboardType={'numeric'}
                            style={styles.input}/>
                    </View>
                </View>
            </ChartPathProvider>
        </View>
    );
};
const styles = StyleSheet.create({
    input:{
        flex:1,
        color:'white',
        fontWeight: 'bold',
       height:40,
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        padding: 10,
        fontSize: 16,
        marginEnd: 10,
    },
    percentageContainer: {
        padding: 5,
        paddingVertical: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    percentage: {
        color: 'white',
        fontSize: 17,
        fontWeight: '500',
    },
    priceContainer: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    currentPrice: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
    name: {
        color: 'white',
        fontSize: 15,
    },
    container: {
        flex: 1,
        paddingTop: 30,
        paddingHorizontal: 10,
        backgroundColor: '#121212',
    },
    text: {
        color: 'white',
    },
});
export default CoinDetailedScreen;
