import React, {useState} from 'react';
import {SearchBar} from 'react-native-elements';
import {StyleSheet, View} from 'react-native';

const MapSearchBar = () => {
    const [search, setSearch] = useState('');

    return (
        <View style={styles.container}>
            <SearchBar
                placeholder="Search for a location"
                onChangeText={setSearch}
                value={search}
                lightTheme
                round
                containerStyle={{backgroundColor: 'transparent'}}
                inputContainerStyle={{backgroundColor: 'white', paddingVertical: 0}}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 35,
        width: '100%',
        zIndex: 1,
    },
});

export default MapSearchBar;

