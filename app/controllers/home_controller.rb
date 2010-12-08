class HomeController < ApplicationController
  layout 'blank'
  
  def index
    
  end

  def lookup_for_coordinates
    longitude = params[:location][:longitude]
    latitude = params[:location][:latitude]
    render :json => PullupBar.near([latitude, longitude], 100)
  end

end
