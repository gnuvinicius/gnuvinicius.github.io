if ( navigator.geolocation ) {
    navigator.geolocation.getCurrentPosition(setCurrentPosition, positionError, {
        enableHighAccuracy: false,
        timeout: 15000,
        maximumAge: 0
    })
}

function setCurrentPosition(position) {
    console.log(position)
    document.querySelector( '.latitude' ).innerHTML = position.coords.latitude;
    document.querySelector( '.longitude' ).innerHTML = position.coords.longitude;
    document.querySelector( '.platform' ).innerHTML = navigator.platform;
    document.querySelector( '.userAgent' ).innerHTML = navigator.userAgent;

}

function positionError( error ) {

    switch ( error.code ) {
        case error.PERMISSION_DENIED:
            console.error( "User denied the request for Geolocation." );
            document.querySelector( '.error' ).innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            console.error( "Location information is unavailable." );
            break;
        case error.TIMEOUT:
            console.error( "The request to get user location timed out." );
            break;
        case error.UNKNOWN_ERROR:
            console.error( "An unknown error occurred." );
            break;
    }

}
