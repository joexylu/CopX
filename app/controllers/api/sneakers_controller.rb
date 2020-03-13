class Api::SneakersController < ApplicationController
    
    def index
        if params[:brand]
            @sneakers = Sneaker.where(brand: params[:brand])
        else
            @sneakers = Sneaker.all
        end
        render :index
    end

    def show
        @sneaker = Sneaker.find_by(id: params[:id])
        render :show
    end
end
