class TagController < ApplicationController

    before_action :authorize_request

    def index
        user_tags_array = @current_user.user_tags
        tags_array = user_tags_array.map do |ut| Tag.find(ut.tag_id) end
        render json: tags_array
    end

    def create

        # check params
        new_tag = Tag.new(tag_name: params[:tag_name])
        tag = Tag.find_by(tag_name: new_tag.tag_name) 
        if !tag
            # if the tag name does not exist, flip false to true, and enter conditional
            new_tag.save
            tag = new_tag
            #save tag
        end
        
        UserTag.create(user_id: @current_user.id, tag_id: tag.id)

        render json: {tag: new_tag}, status: :ok
        
    end

    def show
    end
    
    def destroy
        user_tag = UserTag.find_by(user_id: @current_user.id, tag_id: params[:id].to_i)
        deleted_tag = user_tag.destroy
        render json: {deletedTag: deleted_tag}, status: :ok
    end

    private 

    def user_params(*args)
        params.require(:tag).permit(*args)
    end
end