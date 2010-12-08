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
  
  it('plots results on a google map', function() {

    $map = jasmine.createSpy();
    $mockResults = [{name: 'Norfolk', latitude: -1.0, longitude: 1.0},{name: 'Virginia Beach', latitude: -1.0, longitude: 1.0},{name: 'Chesapeake', latitude: -1.0, longitude: 1.0}];

    $instance = new Manager($map);
    $instance.plotResults($mockResults);
  
    expect($map).toHaveBeenCalledWith($mockResults);
    
  })
  
})