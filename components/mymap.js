import React, {useEffect, useState} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {StyleSheet, View} from 'react-native';
import gpsLocation from '../assets/gpsLocation.png';
import {FAB, Portal} from 'react-native-paper';
import * as Location from 'expo-location';


const MyMap = () => {
    const [region, setRegion] = useState(null)

    const handleMapPress = (event) => {
        const {latitude, longitude} = event.nativeEvent.coordinate;
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    };

    const [mapType, setMapType] = useState('standard');

    const [open, setOpen] = useState(false);

    useEffect(() => {
        (async () => {
            let {status} = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.error('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setRegion({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            });
        })();
    }, []);

    if (!region) {
        return null; // Render nothing if location is not yet fetched
    }

    console.log(region);

    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                region={region}
                onPress={handleMapPress}
                mapType={mapType}
            >
                <Marker coordinate={region} image={gpsLocation}/>
            </MapView>
            <Portal>
                <FAB.Group
                    style={{paddingBottom: 100}}
                    open={open}
                    visible={true}
                    direction="up"
                    icon={open ? 'close' : 'layers'}
                    backdropColor={'rgba(0, 0, 0, 0.25)'}
                    actions={[
                        {icon: 'satellite', onPress: () => setMapType('satellite')},
                        {icon: 'terrain', onPress: () => setMapType('terrain')},
                        {icon: 'map', onPress: () => setMapType('standard')},
                    ]}
                    onStateChange={({open}) => setOpen(open)}
                />
            </Portal>
        </View>
    );
}

export default MyMap;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
});
