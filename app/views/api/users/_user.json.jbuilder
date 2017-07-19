json.id user.id
json.username user.username
json.firstname user.firstname
json.lastname user.lastname
json.email user.email
json.about user.about
json.location user.location
json.personal_site_url user.personal_site_url
json.avatar_url asset_path(user.avatar.url)

json.boards user.boards do |board|
  json.partial! 'api/boards/board.json.jbuilder', board: board
end

json.followers do
  user.followers.each do |follower|
    json.set! follower.id do
      json.extract! follower, :id, :username, :boards, :pins
      json.avatar_url asset_path(follower.avatar.url)
    end
  end
end

json.followings do
  user.followings.each do |following|
    json.set! following.id do

      json.extract! following, :id, :username, :boards
      json.avatar_url asset_path(following.avatar.url)
      json.pins do
        following.pins.each do |pin|
          json.set! pin.id do
            json.partial! 'api/pins/pin.json.jbuilder', pin: pin
          end
        end
      end
    end
  end
end

if current_user
  if user.followers.exists?(id: current_user.id)
    json.followed true
  else
    json.followed false
  end
end
