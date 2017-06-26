class Api::PinningsController < ApplicationController

  def create
    @pinning = Pinning.new(pinning_params)
    if @pinning.save
      @pin = @pinning.pin
      render 'api/pins/show.json.jbuilder'
    else
      render json: @pinning.errors.full_messages, status: 400
    end
  end

  def destroy
    @pinning = Pinning.where(board_id: params[:pinning][:board_id], pin_id: params[:pinning][:pin_id]).first
    board = @pinning.board
    if @pinning.destroy
      @board = board
      render 'api/boards/show.json.jbuilder'
    else
      render json: @pinning.errors.full_messages, status: 422
    end
  end

  private

  def pinning_params
    params.require(:pinning).permit(:board_id, :pin_id)
  end


end
