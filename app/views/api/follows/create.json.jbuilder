json.extract! @user, :id, :username

json.avatar_url asset_path(@user.avatar.url)

json.boards @user.boards do |board|
  json.partial! 'api/boards/board.json.jbuilder', board: board
end
