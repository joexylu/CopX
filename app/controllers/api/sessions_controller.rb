class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user.nil?
            # flash.now[:errors] = ["invalid credentials"]
            # render json: flash[:errors], status: 401
            render json:["invalid credentials"], status: 401
        else
            login!(@user)
            render "api/users/show"
        end
    end

    def destroy
        @user = current_user
        if @user.nil?
            # flash.now[:errors] = ["No Current_User"]
            render json:["No Current_User"], status: 404
        else
            logout!
            render json: {}
        end
    end
end
