class Api::FollowsController < ApplicationController

  def create
    @follow = Follow.new(follow_params)
    if @follow.save
      @user = User.find_by_id(@follow.follower_id)
      render :create
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def destroy
    @follow = Follow.where(follower_id: params[:follow][:follower_id],
                  following_id: params[:follow][:following_id]).first
    if @follow.destroy
      render :show
    else
      render json: ["Failed to delete"], status: 422
    end
  end

  private

  def follow_params
    params.require(:follow).permit(:follower_id, :following_id)
  end
end
