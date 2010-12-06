class PullupBar < ActiveRecord::Base
  attr_accessor :address
  geocoded_by :address
  attr_accessible :name, :latitude, :longitude
end
