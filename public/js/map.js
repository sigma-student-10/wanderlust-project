
    mapboxgl.accessToken = mapToken;
    const map = new mapboxgl.Map({
        container: 'map',  // container ID
        center: [ 91.4130, 24.3804 ], // starting position [lng, lat]. Note that lat must be set between -90 and 90
        zoom: 9 // starting zoom
    });
