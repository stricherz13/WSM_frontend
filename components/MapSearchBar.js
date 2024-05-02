import React, {useState, useEffect} from 'react';
import {SearchBar} from 'react-native-elements';
import {StyleSheet, View} from 'react-native';

const MapSearchBar = () => {
    const [search, setSearch] = useState('');
    const [locationName, setLocationName] = useState('');

    useEffect(() => {
        if (locationName) {
            console.log('Fetching data for location: ', locationName);
            fetch(`https://nominatim.openstreetmap.org/search?format=json&polygon=1&limit=1&addressdetails=1&q=${locationName}`)
                .then(response => response.json())
                .then(data => console.log('Received data: ', data))
                .catch(error => console.error('Error fetching data ', error));
        }
    }, [locationName]);

    return (
        <View style={styles.container}>
            <SearchBar
                placeholder="Search for a location"
                onChangeText={text => {
                    console.log('Search text: ', text);
                    setSearch(text);
                    setLocationName(text);
                }}
                value={search}
                lightTheme
                round
                containerStyle={{backgroundColor: 'transparent', borderColor: 'transparent'}}
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

