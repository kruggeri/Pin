json.extract! pin, :id, :title, :description, :url, :image_url, :user_id

json.image_source asset_path(pin.image.url)
