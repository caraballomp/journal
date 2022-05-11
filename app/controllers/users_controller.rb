class UsersController < ApplicationController

    skip_before_action :authorize, only: :create

    
    def index  
    @users =User.all
    render json: @users, status: :ok 
    end

    def create 
        if User.find_by_username(params[:username])
            render json: {status: "user already exists"}
        else
            @user =User.create(
            username: params[:username],
            password: params[:password]
            )
            render json: @user, status: :ok
        end
    end

end 
