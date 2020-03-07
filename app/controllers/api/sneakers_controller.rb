class Api::SneakersController < ApplicationController
    
    def index
        @sneakers = Sneaker.all
        render :index
    end

    def show
        @sneaker = Sneaker.find_by(id: params[:id])
        render :show
    end
end
