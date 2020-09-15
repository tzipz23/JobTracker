class SearchController < ApplicationController

    before_action :authorize_request

    def api
        render json: {api_data: {id: ENV['APP_ID'], key: ENV['API_KEY']}}, status: :ok
    end


end
