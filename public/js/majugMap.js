(function () {
    'use strict';

    var initMaps = function () {
        var majug = new google.maps.LatLng(49.487047, 8.457915),
            // center = new google.maps.LatLng(49.489431, 8.457915),
            center = new google.maps.LatLng(49.489152, 8.465168),

            mapOptions = {
                zoom: 15,
                center: center
            },

            map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions),

            infowindow = new google.maps.InfoWindow({
                content: '<img src="public/img/majugLogoMap.png" style="height:96px; width: 100px;">'
                    + '<div>Uni Mannheim<br>A5, 6<br>68161 Mannheim<br></div>'

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

