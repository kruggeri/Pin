json.extract! pin, :id, :title, :description, :url, :image_url, :user_id

json.image_source asset_path(pin.image.url)
json.userImage asset_path(pin.user.avatar.url)
json.board_id pin.board.id
json.board_title pin.board.title
