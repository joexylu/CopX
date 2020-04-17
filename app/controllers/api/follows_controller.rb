class Api::FollowsController < ApplicationController
    def index
        @followingitems = User.find_by(id: current_user.id).following_sneakers
        render :index
    end
    
    def create
        @follow = Follow.new
        @follow.user_id = current_user.id
        @follow.sneaker_id = params[:id]
        if @follow.save
            @sneaker = @follow.sneaker
            render 'api/sneakers/show'
        else
            render json: @follow.errors.full_messages, status: 401
        end
    end

    def destroy
        @follow = Follow.find_by(user_id: current_user.id, sneaker_id: params[:id])
        @follow.destroy
        @sneaker = @follow.sneaker
        render 'api/sneakers/show'
    end
end
