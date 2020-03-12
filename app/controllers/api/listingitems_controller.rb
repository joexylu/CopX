class Api::ListingitemsController < ApplicationController
    def index
        @listingitems = Sneaker.find_by(id: params[:sneaker_id]).listingitems
        render :index
    end

    def show
        @listingitem = Listingitem.find_by(id: params[:id])
        render :show
    end

    # def create
    #     @listingitem = Listingitem.new(list_params)
    #     if @listingitem.save
    #         render :show
    #     else
    #         render json: @listingitem.errors.full_messages, status 422
    #     end
    # end

    # def destroy
    #     @listingitem = Listingitem.find(params[:id])
    #     if @listingitem.destroy
    #         render :show
    #     else
    #         render json: @listingitem.errors.full_messages, status 422
    #     end
    # end

    def list_params
        params.require(:listingitem).permit(:sneaker_id, :size, :price)
    end
end
