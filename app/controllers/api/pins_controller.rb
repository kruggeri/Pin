class Api::PinsController < ApplicationController
  def index
    @pins = Pin.all
    render :index
  end

  def create
    @pin = Pin.new(pin_params)
    @pin.user_id = current_user.id
    if @pin.save
      render :show
    else
      render json: @pin.errors.full_messages, status: 422
    end
  end

  def show
    @pin = Pin.find(params[:id])
    render :show
  end

  # TODO: not implemented
  def update
  end

  def destroy
    @pin = Pin.find(params[:id])
    if @pin.destroy
      render :show
    else
      render json: ['Failed to delete'], status: 404
    end
  end

  private

  def pin_params
    params.require(:pin).permit(
      :title, :image, :description, :image_url, :board_id
    )
  end
end
