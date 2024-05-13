import React from 'react';
import { IconButton } from 'react-native-paper';

const GpsButton = ({ animateToRegion, latitude, longitude }) => {
    return (
        <IconButton
            icon="crosshairs-gps"
            color="#841584"
            size={60}
            style={{
                position: 'absolute',
                bottom: 20,
                right: 20,
            }}
            onPress={() => animateToRegion(latitude, longitude)}
        />
    );
};

export default GpsButton;