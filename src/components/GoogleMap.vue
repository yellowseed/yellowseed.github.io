<template>
  <div class="google-map" :id="mapName"></div>
</template>
<script>
export default {
  name: 'google-map',
  props: ['name'],
  data: function () {
    return {
      mapName: this.name + "-map",
      markerCoordinates: [{
        latitude: 51.501527,
        longitude: -0.1921837
      }, {
        latitude: 51.505874,
        longitude: -0.1838486
      }, {
        latitude: 51.4998973,
        longitude: -0.202432
      }],
      center:{latitude: 16.455522, longitude: -25.2943232},
      map: null,
      bounds: null,
      markers: []
    }
  },
  mounted: function () {
    this.bounds = new google.maps.LatLngBounds();
    const element = document.getElementById(this.mapName)
    const mapCentre = this.center;
    const options = {
      center: new google.maps.LatLng(mapCentre.latitude, mapCentre.longitude),
      mapTypeControlOptions: {
        position: google.maps.ControlPosition.LEFT_BOTTOM
      },
      zoomControl: true,
      zoomControlOptions: {
        position: google.maps.ControlPosition.LEFT_CENTER
      },
      scaleControl: true,
      streetViewControl: true,
      streetViewControlOptions: {
        position: google.maps.ControlPosition.LEFT_TOP
      },
      styles:window.mapStyle
    }
    this.map = new google.maps.Map(element, options);
    var infowindow = new google.maps.InfoWindow();

    window.origins.forEach((origin) => {
      const position = new google.maps.LatLng(origin.lat, origin.lng);
      var markerPin = {
             url: "https://www.yellow-seed.org/assets/map-marker-pin-250a32260d72eec9e743a41d9db8d8a76b74355f8960adffcbd84aa2a4144858.png"
           };
      const marker = new google.maps.Marker({
        position,
        map: this.map,
        icon: markerPin,
        description: origin.name
      });
      this.markers.push(marker);

      var content = "<p>" + "<a href='https://yellow-seed.org/origins/" + origin.id + "'>" + origin.name + "</a>"
        + "</p><strong>" + origin.country + "</strong><br>" +
        origin.desc.substring(0, 90) + "...";

      google.maps.event.addListener(marker, 'click', (function (marker, content, infowindow) {
        return function () {
          infowindow.setContent(content);

          infowindow.open(this.map, this);
        };
      })(marker, content, infowindow));

      this.map.fitBounds(this.bounds.extend(position));

    });



  }
};

</script>
