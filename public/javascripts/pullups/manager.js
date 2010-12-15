var Manager = Backbone.Controller.extend({

  initialize: function(map) {
    this.promptLocation();
    this.map = map
  },
  
  promptLocation: function() {
    var t = this;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position){ t.locationProvided(position); }, this.locationNotProvided);
    } else {
      error('not supported');
    }
  },
  
  locationProvided: function(position) {
    var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    this.map.setCenter(latlng);
    
    $.ajax({
      type: 'GET',
      url: '/lookup-for-coordinates',
      data: { longitude: position.coords.longitude, latitude: position.coords.latitude },
      success: this.plotResults
    })
  },
  
  plotResults: function(response) {
    _.each(response, function(bar){
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(bar.latitude, bar.longitude),
        title: bar.name
      });
      
      marker.setMap(this.map);
    });
    
  }

});