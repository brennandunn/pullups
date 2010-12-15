class PullupBar < ActiveRecord::Base
  attr_accessor :address
  geocoded_by :address
  attr_accessible :name, :latitude, :longitude
  
  
  def as_json(options={})
    attributes
  end
  
end
