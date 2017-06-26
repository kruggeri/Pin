# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
Board.destroy_all
Pin.destroy_all
Pinning.destroy_all

## USERS ##

User.create!(
  username: "Kate",
  password: "123456",
  firstname: "Kate",
  lastname: "Ruggeri",
  email: "k.ruggeri8@gmail.com",
  about: "Artist/Computer Programmer/Aries",
  location: "New York, NY",
  personal_site_url: "kate-ruggeri.com",
  avatar: File.open('app/assets/images/kate_avatar.jpg')
  )

User.create!(
  username: "ladyb",
  password: "123456",
  firstname: "Beth",
  lastname: "Klacko",
  email: "ladyb@gmail.com",
  about: "a few things that speak to me",
  location: "Chicago, IL",
  personal_site_url: "beths-site.com",
  avatar: File.open('app/assets/images/beth_avatar.jpg')
  )

User.create!(
  username: "mac",
  password: "123456",
  firstname: "Mac",
  lastname: "Katter",
  email: "mac123@gmail.com",
  about: "Photographer",
  location: "Brooklyn, NY",
  personal_site_url: "macs-site.com",
  avatar: File.open('app/assets/images/mac_avatar2.png')

)

User.create!(
  username: "Lauren",
  password: "123456",
  firstname: "Lauren",
  lastname: "Anderson",
  email: "lando@gmail.com",
  about: "Basketball Diaries",
  location: "Kingston, NY",
  personal_site_url: "landos-site.com",
  avatar: File.open('app/assets/images/lauren_avatar.png')
)

User.create!(
  username: "cindy",
  password: "123456",
  firstname: "Cindy",
  lastname: "Kim",
  email: "ck@gmail.com",
  about: "Superstar.",
  location: "Bronx, NY",
  personal_site_url: "cindyjihyekim.com",
  avatar: File.open('app/assets/images/cindy_avatar.png')
)

User.create!(
  username: "brook",
  password: "123456",
  firstname: "Brook",
  lastname: "Winthrop",
  email: "brook@gmail.com",
  about: "0__0",
  location: "Los Angeles",
  personal_site_url: "brooks-site.com",
  avatar: File.open('app/assets/images/brook_avatar.png')
)

###

Board.create!(
  title: "Paintings",
  description: "Some of my favorites",
  user_id: User.find_by(username: "Kate").id
)

##

Pin.create!(
    title: "Dani Levine",
    description: "Histories of the Divided Line, 2016",
    image_url: "www.danilevine.net",
    image: File.open('app/assets/images/painting_board1/dani.jpg'),
    user_id: User.find_by(username: "Kate").id,
    board_id: Board.find_by(title: "Paintings").id,
  )

Pin.create!(
    title: "Edwin Smalling",
    description: "Good Fortune, 2016",
    image_url: "www.edwinsmalling.com",
    image: File.open('app/assets/images/painting_board1/edwin.jpg'),
    user_id: User.find_by(username: "Kate").id,
    board_id: Board.find_by(title: "Paintings").id,
  )

Pin.create!(
    title: "Anna Betbeze",
    description: "All That's Left, 2016, Wool, acid dyes, ash",
    image_url: "www.ninajohnson.com/exhibitions/anna-betbeze-hot-fruit",
    user_id: User.find_by(username: "Kate").id,
    image: File.open('app/assets/images/painting_board1/annabetbeze.jpeg'),
    board_id: Board.find_by(title: "Paintings").id
  )

Pin.create!(
    title: "Molly Zuckerman-Hartung",
    image_url: "www.mollyzuckermanhartung.com/",
    user_id: User.find_by(username: "Kate").id,
    image: File.open('app/assets/images/painting_board1/molly.jpg'),
    board_id: Board.find_by(title: "Paintings").id
  )

Pin.create!(
    title: "Anoka Faruqee",
    image_url: "www.anokafaruqee.com/",
    description: "Acrylic on canvas",
    user_id: User.find_by(username: "Kate").id,
    image: File.open('app/assets/images/painting_board1/anoka.jpg'),
    board_id: Board.find_by(title: "Paintings").id
  )

Pin.create!(
    title: "Tschabalala Self",
    image_url: "www.tschabalalaself.com/",
    user_id: User.find_by(username: "Kate").id,
    image: File.open('app/assets/images/painting_board1/tschaba.png'),
    board_id: Board.find_by(title: "Paintings").id
  )

Pin.create!(
    title: "Sarah Faux",
    image_url: "www.sarahfaux.net/",
    description: "Blue becomes you, 2016",
    user_id: User.find_by(username: "Kate").id,
    image: File.open('app/assets/images/painting_board1/sarah.jpg'),
    board_id: Board.find_by(title: "Paintings").id
  )

Pin.create!(
    title: "Erin Ikeler",
    image_url: "www.eeikeler.com/",
    description: "HISTORY REPEATS (2), 2016",
    user_id: User.find_by(username: "Kate").id,
    image: File.open('app/assets/images/painting_board1/erin.jpg'),
    board_id: Board.find_by(title: "Paintings").id
  )

Pin.create!(
    title: "Kyle Goldbach",
    image_url: "www.kylegoldbach.com/",
    description: "HISTORY REPEATS (2), 2016",
    user_id: User.find_by(username: "Kate").id,
    image: File.open('app/assets/images/painting_board1/kyle.jpg'),
    board_id: Board.find_by(title: "Paintings").id
  )

Pin.create!(
    title: "Zoe Walsh",
    image_url: "www.zoecwalsh.com/",
    description: "Untitled, 2017",
    user_id: User.find_by(username: "Kate").id,
    image: File.open('app/assets/images/painting_board1/zoe.jpg'),
    board_id: Board.find_by(title: "Paintings").id
  )
