// Initialize and add the map
function initMap() {
    // The location of IIT
    const iit = {lat: 41.836895, lng: -87.627276};

    const iconBase =
        "https://developers.google.com/maps/documentation/javascript/examples/full/images/";
    const icons = {
        redCirclePaddle: {
            icon: "https://maps.google.com/mapfiles/kml/paddle/red-circle.png",
        },
        library: {
            icon: iconBase + "library_maps.png",
        },
    };

    // The map, centered at IIT
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: iit,
    });
    const features = [
        {
            position: new google.maps.LatLng(41.836895, -87.627276),
            type: "redCirclePaddle",
        },
        {
            position: new google.maps.LatLng(41.833734, -87.62831),
            type: "library",
        },
    ];

    // Create markers.
    for (let i = 0; i < features.length; i++) {
        const marker = new google.maps.Marker({
            position: features[i].position,
            icon: icons[features[i].type].icon,
            map: map,
        });
    }

    var infoWindow = new google.maps.infoWindow({
        content: "<h1>Hello World</h1>"
    });

    marker.addEventListener('click', function () {
        infoWindow.open(map, marker);
    });
}