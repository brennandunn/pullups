var Manager = Backbone.Controller.extend({

  initialize: function(map) {
    this.promptLocation();
    this.map = map
  },
  
  promptLocation: function() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.locationProvided, this.locationNotProvided);
    } else {
      error('not supported');
    }
  },
  
  locationProvided: function(position) {
    $.ajax({
      type: 'GET',
      url: '/lookup-for-coordinates',
      data: { longitude: position.coords.longitude, latitude: position.coords.latitude }
      success: this.plotResults
    })
  },
  
  plotResults: function(response) {
    
    // Do nothing.
    
  }

});