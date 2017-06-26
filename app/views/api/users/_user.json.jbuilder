json.id user.id
json.username user.username
json.firstname user.firstname
json.lastname user.lastname
json.email user.email
json.about user.about
json.location user.location
json.personal_site_url user.personal_site_url
json.avatar_url asset_path(user.avatar.url)

json.boards do
  user.boards.each do |board|
    json.set! board.id do
      json.partial! 'api/boards/board.json.jbuilder', board: board
    end
  end
end
