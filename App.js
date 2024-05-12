import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import MyMap from "./components/mymap";
import MapSearchBar from "./components/MapSearchBar";
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from "react-native-paper";

const App = () => {
    return (
        <Provider>
            <SafeAreaProvider>
                <View style={styles.container}>
                    <MapSearchBar/>
                    <MyMap/>
                </View>
            </SafeAreaProvider>
        </Provider>
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
