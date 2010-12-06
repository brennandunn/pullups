When /^I am at "([^"]*)"$/ do |location|
  location_hash = Geocoder.search(location)['results'].first['geometry']['location']
  page.evaluate_script "window.loc = { 'longitude': '#{location_hash['lat']}', 'latitude': '#{location_hash['lng']}' }"
end

Then /^I should see a Google map with (\d+) pins$/ do |count|
  find('#map').should have_selector('.gmnoprint', :count => count)
end