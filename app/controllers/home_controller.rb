class HomeController < ApplicationController
  layout 'blank'
  
  def index
    
  end

  def lookup_for_coordinates
    longitude = params[:longitude].to_f
    latitude = params[:latitude].to_f
    render :json => PullupBar.near([latitude, longitude], 100)
  end

end
