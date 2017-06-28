json.extract! board, :id, :title, :description, :user_id

json.pins board.pins do |pin|
  json.partial! 'api/pins/pin.json.jbuilder', pin: pin
end
