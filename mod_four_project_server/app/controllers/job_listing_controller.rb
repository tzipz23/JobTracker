class JobListingController < ApplicationController
  before_action :authorize_request

  def index

        user_listings_array = @current_user.job_listings
        
        render json: user_listings_array
    
  end

  def show
  end

  def update
  end

  def create
    @listing = JobListing.new(user_id: @current_user.id, 
                            job_salary: params[:listing][:salary_is_predicted],
                            job_title: params[:listing][:title],
                            company: params[:listing][:company][:display_name],
                            city: params[:listing][:location][:area][2],
                            state: params[:listing][:location][:area][1],
                            snippet: params[:listing][:description],
                            job_url: params[:listing][:redirect_url],
                            latitude: params[:listing][:latitude],
                            longitude: params[:listing][:longitude],)
    # byebug
    if (@listing.save)
      render json: {listing: @listing}, status: :ok
    else
      render json: {error: "Error: Did not create resource successfully"}, status: :unprocessable_entity
    end


  end

  def destroy
  end

  private

  def listing_params(*args)
    params.require(:listing).permit(*args)
  end
end
