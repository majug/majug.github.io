(function () {
    'use strict';

    var initMaps = function () {
        var majug = new google.maps.LatLng(49.487047, 8.457915),

            mapOptions = {
                zoom: 15,
                center: majug
            },

            map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions),

            infowindow = new google.maps.InfoWindow({
                content: 'Uni Mannheim<br>A5, 6<br>68161 Mannheim<br>' +
                    '<img src="public/img/majugLogoMap.png">'
            }),

            marker = new google.maps.Marker({
                position: majug,
                map: map,
                title: 'majug'
            });

        google.maps.event.addListener(marker, 'click', function () {
            infowindow.open(map, marker);
        });
    };

    google.maps.event.addDomListener(window, 'load', initMaps);
}());

