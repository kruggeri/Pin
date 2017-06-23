# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all

User.create!(
  username: "Kate",
  password: "123456",
  firstname: "Kate",
  lastname: "Ruggeri",
  email: "k.ruggeri8@gmail.com",
  about: "Artist/Computer Programmer/Aries",
  location: "New York, NY",
  personal_site_url: "kate-ruggeri.com"
  )

  User.create!(
    username: "ladyb",
    password: "123456",
    firstname: "Beth",
    lastname: "Klacko",
    email: "ladyb@gmail.com",
    about: "a few things that speak to me",
    location: "Chicago, IL",
    personal_site_url: "beths-site.com"
    )

  User.create!(
    username: "mac",
    password: "123456",
    firstname: "Mac",
    lastname: "Katter",
    email: "mac123@gmail.com",
    about: "Photographer",
    location: "Brooklyn, NY",
    personal_site_url: "macs-site.com"
  )
