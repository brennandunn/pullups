require 'spec_helper'

describe HomeController do

  context 'GET #lookup_for_coordinates' do

    before do
      @bar_norfolk = PullupBar.create(get_coordinates('norfolk, va').merge({:name => 'norfolk'}))
      @bar_williamsburg = PullupBar.create(get_coordinates('williamsburg, va').merge({:name => 'williamsburg'}))
      @bar_vb = PullupBar.create(get_coordinates('virginia beach, va').merge({:name => 'vb'}))
      @location = { :latitude => 36.86748, :longitude => -76.28186 }
    end
    
    it 'returns an array of pullup bars' do
      xhr :get, :lookup_for_coordinates, :location => @location
      results = ActiveSupport::JSON.decode(response.body) 
      results.should have(3).items
    end

    it "should order the pull up bars by distance" do
      xhr :get, :lookup_for_coordinates, :location => @location
      results = ActiveSupport::JSON.decode(response.body)
      results.map{ |b| b["pullup_bar"]["name"]}.should == [@bar_norfolk, @bar_vb, @bar_williamsburg].map(&:name)
    end
    
  end

end


def get_coordinates(location)
  location_hash = Geocoder.search(location)['results'].first['geometry']['location']
  { :latitude => location_hash['lat'], :longitude => location_hash['lng'] }
end