class AuthenticationController < ApplicationController

  skip_before_action :authorize, only: :login

  def login
    @user = User.find_by_username(params[:username].strip)

    if !@user
    render(
      json: { message: 'Invalid username or password.' }, 
      status: :unauthorized
    )
  else
      if !@user.authenticate params[:password]
        render(
          json: { message: 'Invalid username or password.' }, 
          status: :unauthorized
        )
        else 
            payload = { user_id: @user.id }
            secret = 'do not reveal'
            token = JWT.encode payload, secret

            render json: { token: token }, status: :ok
        end
      end 
    end
end
