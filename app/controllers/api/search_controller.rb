class Api::SearchController < ApplicationController

    def show
        @results = Sneaker.where("LOWER(name) LIKE ?", "%#{params[:id]}%")
        render :show
    end
end
