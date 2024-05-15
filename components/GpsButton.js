import React from 'react';
import { IconButton } from 'react-native-paper';

const GpsButton = ({ animateToRegion, latitude, longitude }) => {
    return (
        <IconButton
            icon="crosshairs-gps"
            color="#22005d"
            size={40}
            style={{
                position: 'absolute',
                bottom: 45,
                right: 10,
                backgroundColor: '#e9dcfd',
                borderRadius:  15,
            }}
            onPress={() => animateToRegion(latitude, longitude)}
        />
    );
};

export default GpsButton;