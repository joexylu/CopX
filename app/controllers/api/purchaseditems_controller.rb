class Api::PurchaseditemsController < ApplicationController
    def index
        @purchaseditems = User.find_by(id: current_user.id).purchaseditems.order("created_at DESC")
        render :index
    end

    def show
        @purchaseditem = Purchaseditem.find_by(id: params[:id])
        render :show
    end

    def create
        @purchaseditem = Purchaseditem.new
        @purchaseditem.user_id = current_user.id
        @purchaseditem.sneaker_id = params[:sneaker_id].to_i
        @purchaseditem.size = params[:size].to_f
        @purchaseditem.price = params[:price].to_i
        @purchaseditem.order_number = SecureRandom.random_number(10**10).to_s.rjust(10, '0')
        if @purchaseditem.save
            @user = @purchaseditem.user
            render :show
        else
            render json: @purchaseditem.errors.full_messages, status: 401
        end
    end

end
