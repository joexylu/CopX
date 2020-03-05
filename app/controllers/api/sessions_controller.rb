class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user.nil?
            render json:["invalid credentials"], status: 401
        else
            login!(@user)
            render "api/users/show"
        end
    end

    def destroy
        @user = current_user
        if @user.nil?
            render json:["No Current_User"], status: 404
        else
            logout!
            render json: {}
        end
    end
end
