json.extract! pin, :id, :title, :description, :url, :image_url, :user_id
json.set! :user_image_url, pin.user.image_url
json.set! :user_username, pin.user.username

json.pinned_boards do
  pin.boards.each do |board|
    json.set! board.id, board.id
  end
end
