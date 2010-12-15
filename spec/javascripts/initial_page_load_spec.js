require('/javascripts/jquery.js');
require('/javascripts/underscore.js');
require('/javascripts/backbone.js');
require('/javascripts/mock-ajax.js');
require('/javascripts/pullups/manager.js');

describe('What happens when a page loads', function(){
  
  var $instance, $mockLocation;
  
  beforeEach(function(){
    clearAjaxRequests();

    spyOn(jQuery.ajaxSettings, 'xhr').andCallFake(function() {
      var newXhr = new FakeXMLHttpRequest();
      ajaxRequests.push(newXhr);
      return newXhr;
    });
    
    $mockLocation = { coords: { longitude: -1, latitude: 1 } };
    spyOn(navigator.geolocation, 'getCurrentPosition')
  })
  
  it('prompts the user to supply their location', function(){
    $instance = new Manager();
    expect(navigator.geolocation.getCurrentPosition).toHaveBeenCalled();
  })
  
  it('creates a XHR GET request with the current coordinates', function(){
    $instance = new Manager();
    $instance.locationProvided($mockLocation);
    expect(mostRecentAjaxRequest().url).toEqual('/lookup-for-coordinates?longitude=-1&latitude=1');
  })
  
})