import React, {useState} from 'react';
import {SearchBar} from 'react-native-elements';
import {StyleSheet} from 'react-native';

const MapSearchBar = () => {
    const [search, setSearch] = useState('');

    return (
        <view>
            <SearchBar
                placeholder="Search for a location"
                onChangeText={setSearch}
                value={search}
                lightTheme
                round
                style={styles.container}
            />
        </view>
    );
};

const styles = StyleSheet.create({
    container: {
        // position: 'absolute', // Position the SearchBar absolutely
    },
});

export default MapSearchBar;

