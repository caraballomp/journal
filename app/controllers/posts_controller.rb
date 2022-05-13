class PostsController < ApplicationController

    def index
        render json: Post.all.order('created_at DESC')
    end

    def create
        post =  Post.create!(post_permit)
        render json: post,  status: :created
    end

    def update
        post = Post.find(params[:id])
        post.update(post_permit)
        render json: post
    end

    def destroy
        post = Post.find(params[:id])
        post.destroy
        render json: {success: true}
    end


    private

    def post_permit
        params.require(:post).permit(:user_id, :image_url, :post_text, :date)
    end

end
