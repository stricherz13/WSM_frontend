import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import MyMap from "./components/mymap";
import MapSearchBar from "./components/SearchBar";
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
    return (
        <SafeAreaProvider>

            <View style={styles.container}>
                <MapSearchBar/>
                <MyMap/>
            </View>
        </SafeAreaProvider>
    );
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
});
