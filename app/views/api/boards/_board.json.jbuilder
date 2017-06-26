json.extract! board, :id, :title, :description, :user_id

json.pins do
  board.pins.each do |pin|
    json.set! pin.id do
      json.partial! 'api/pins/pin.json.jbuilder', pin: pin
    end
  end
end
