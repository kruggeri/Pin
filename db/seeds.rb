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

Pin.create!(
    title: "Alex Valentine",
    image_url: "www.alexandervalentine.com/",
    user_id: User.find_by(username: "Kate").id,
    image: File.open('app/assets/images/painting_board1/alex_valentine.jpg'),
    board_id: Board.find_by(title: "Paintings").id
  )

Pin.create!(
    title: "Anoka Faruqee",
    image_url: "www.anokafaruqee.com/",
    user_id: User.find_by(username: "Kate").id,
    image: File.open('app/assets/images/painting_board1/anoka_2.jpg'),
    board_id: Board.find_by(title: "Paintings").id
  )

Pin.create!(
    title: "Cayman Robson",
    image_url: "www.caymanrobson.com/",
    user_id: User.find_by(username: "Kate").id,
    image: File.open('app/assets/images/painting_board1/cayman.jpg'),
    board_id: Board.find_by(title: "Paintings").id
  )

Pin.create!(
    title: "Doug Ashford",
    image_url: "www.dougashford.info/",
    user_id: User.find_by(username: "Kate").id,
    image: File.open('app/assets/images/painting_board1/doug_ashford.jpg'),
    board_id: Board.find_by(title: "Paintings").id
  )

Pin.create!(
    title: "Jose Lerma",
    image_url: "www.andrearosengallery.com/artists/jose-lerma",
    user_id: User.find_by(username: "Kate").id,
    image: File.open('app/assets/images/painting_board1/jose_lerma2.jpg'),
    board_id: Board.find_by(title: "Paintings").id
  )

Pin.create!(
    title: "Munro Galloway",
    image_url: "www.munrogalloway.org/",
    user_id: User.find_by(username: "Kate").id,
    image: File.open('app/assets/images/painting_board1/munro.jpg'),
    board_id: Board.find_by(title: "Paintings").id
  )

Pin.create!(
    title: "Howard Fonda",
    image_url: "www.howardfonda.com/",
    user_id: User.find_by(username: "Kate").id,
    image: File.open('app/assets/images/painting_board1/howard_fonda.jpg'),
    board_id: Board.find_by(title: "Paintings").id
  )

Pin.create!(
    title: "Tomashi Jackson",
    image_url: "www.tomashijackson.com/",
    user_id: User.find_by(username: "Kate").id,
    image: File.open('app/assets/images/painting_board1/tomashi.jpg'),
    board_id: Board.find_by(title: "Paintings").id
  )

  ####

Board.create!(
  title: "Photography",
  description: "fresh",
  user_id: User.find_by(username: "Kate").id
)

###

Pin.create!(
    title: "Sara Cwynar",
    image_url: "www.saracwynar.com/",
    user_id: User.find_by(username: "Kate").id,
    image: File.open('app/assets/images/photo_board1/cwynar.jpg'),
    board_id: Board.find_by(title: "Photography").id
  )


Pin.create!(
    title: "Sara Cwynar",
    image_url: "www.saracwynar.com/",
    user_id: User.find_by(username: "Kate").id,
    image: File.open('app/assets/images/photo_board1/cwynar2.jpg'),
    board_id: Board.find_by(title: "Photography").id
  )

Pin.create!(
    title: "Sara Cwynar",
    image_url: "www.saracwynar.com/",
    user_id: User.find_by(username: "Kate").id,
    image: File.open('app/assets/images/photo_board1/cwynar3.jpg'),
    board_id: Board.find_by(title: "Photography").id
  )

Pin.create!(
    title: "Cole Don Kelley",
    image_url: "www.coledonkelley.com/",
    user_id: User.find_by(username: "Kate").id,
    image: File.open('app/assets/images/photo_board1/cole.jpg'),
    board_id: Board.find_by(title: "Photography").id
  )

Pin.create!(
    title: "Farrah Al Qasimi",
    image_url: "www.farahalqasimi.com/",
    user_id: User.find_by(username: "Kate").id,
    image: File.open('app/assets/images/photo_board1/farrah.jpg'),
    board_id: Board.find_by(title: "Photography").id
  )

Pin.create!(
    title: "John Edmonds",
    image_url: "www.johnedmondsphoto.com/",
    user_id: User.find_by(username: "Kate").id,
    image: File.open('app/assets/images/photo_board1/john.jpg'),
    board_id: Board.find_by(title: "Photography").id
  )

Pin.create!(
    title: "Kyle Williams",
    image_url: "www.kylewilliamsstudio.com/",
    user_id: User.find_by(username: "Kate").id,
    image: File.open('app/assets/images/photo_board1/kylewilliams.jpg'),
    board_id: Board.find_by(title: "Photography").id
  )

Pin.create!(
    title: "Mac Katter",
    image_url: "www.mac-katter.com/",
    user_id: User.find_by(username: "Kate").id,
    image: File.open('app/assets/images/photo_board1/mac_katter.jpg'),
    board_id: Board.find_by(title: "Photography").id
  )

Pin.create!(
    title: "Mac Katter",
    image_url: "www.mac-katter.com/",
    user_id: User.find_by(username: "Kate").id,
    image: File.open('app/assets/images/photo_board1/mac_katter2.png'),
    board_id: Board.find_by(title: "Photography").id
  )

Pin.create!(
    title: "Virginia Lee Montgomery",
    image_url: "www.virginialeemontgomery.com/",
    user_id: User.find_by(username: "Kate").id,
    image: File.open('app/assets/images/photo_board1/virginalee.jpg'),
    board_id: Board.find_by(title: "Photography").id
  )

Pin.create!(
    title: "Melanie Schiff",
    image_url: "www.melanieschiff.net/",
    user_id: User.find_by(username: "Kate").id,
    image: File.open('app/assets/images/photo_board1/melanie.jpg'),
    board_id: Board.find_by(title: "Photography").id
  )

Pin.create!(
    title: "Jessica Labatte",
    image_url: "www.jessicalabatte.com/",
    user_id: User.find_by(username: "Kate").id,
    image: File.open('app/assets/images/photo_board1/jessica_labatte.jpg'),
    board_id: Board.find_by(title: "Photography").id
  )

Pin.create!(
    title: "Martine Syms",
    image_url: "www.martinesyms.com/",
    user_id: User.find_by(username: "Kate").id,
    image: File.open('app/assets/images/photo_board1/martine.jpg'),
    board_id: Board.find_by(title: "Photography").id
  )

####

Board.create!(
  title: "Objects/Wares",
  description: "* * * * *",
  user_id: User.find_by(username: "Kate").id
)

###

Pin.create!(
    title: "Ben Medansky",
    image_url: "www.benmedansky.com/",
    user_id: User.find_by(username: "Kate").id,
    image: File.open('app/assets/images/wares/ben_medansky.jpeg'),
    board_id: Board.find_by(title: "Objects/Wares").id
  )

Pin.create!(
    title: "William J. O'Brien",
    image_url: "www.marianneboeskygallery.com/artists/william-j-oand39brien/works",
    user_id: User.find_by(username: "Kate").id,
    image: File.open('app/assets/images/wares/bill.jpg'),
    board_id: Board.find_by(title: "Objects/Wares").id
  )

Pin.create!(
    title: "Brook Hsu",
    image_url: "www.brookhsu.com/",
    user_id: User.find_by(username: "Kate").id,
    image: File.open('app/assets/images/wares/brookhsu.jpg'),
    board_id: Board.find_by(title: "Objects/Wares").id
  )

Pin.create!(
    title: "Olivia Wendel",
    image_url: "www.oliviawendel.com/",
    user_id: User.find_by(username: "Kate").id,
    image: File.open('app/assets/images/wares/olivia_wendel.jpg'),
    board_id: Board.find_by(title: "Objects/Wares").id
  )

Pin.create!(
    title: "Rimas K. Simaitis",
    image_url: "www.rksim.com/",
    user_id: User.find_by(username: "Kate").id,
    image: File.open('app/assets/images/wares/rimas.jpg'),
    board_id: Board.find_by(title: "Objects/Wares").id
  )

Pin.create!(
    title: "Sarah Shikama",
    image_url: "www.sarahshikama.com/",
    user_id: User.find_by(username: "Kate").id,
    image: File.open('app/assets/images/wares/sarahshikama.jpg'),
    board_id: Board.find_by(title: "Objects/Wares").id
  )

Pin.create!(
    title: "Sarah Shikama",
    image_url: "www.sarahshikama.com/",
    user_id: User.find_by(username: "Kate").id,
    image: File.open('app/assets/images/wares/shikama2.jpg'),
    board_id: Board.find_by(title: "Objects/Wares").id
  )

Pin.create!(
    title: "Sarah Shikama",
    image_url: "www.sarahshikama.com/",
    user_id: User.find_by(username: "Kate").id,
    image: File.open('app/assets/images/wares/shikama3.jpg'),
    board_id: Board.find_by(title: "Objects/Wares").id
  )

Pin.create!(
    title: "Selva Aparicio",
    image_url: "www.selvaaparicio.net/",
    user_id: User.find_by(username: "Kate").id,
    image: File.open('app/assets/images/wares/selva.png'),
    board_id: Board.find_by(title: "Objects/Wares").id
  )

  Pin.create!(
      title: "Stephanie Brooks",
      image_url: "www.stephaniebrooks.com",
      user_id: User.find_by(username: "Kate").id,
      image: File.open('app/assets/images/wares/stephaniebrooks.png'),
      board_id: Board.find_by(title: "Objects/Wares").id
    )

  Pin.create!(
      title: "Stephanie Brooks",
      image_url: "www.stephaniebrooks.com",
      user_id: User.find_by(username: "Kate").id,
      image: File.open('app/assets/images/wares/stephaniebrooks2.png'),
      board_id: Board.find_by(title: "Objects/Wares").id
    )

###

Board.create!(
  title: "v i b r a n t",
  description: "colors / shapes",
  user_id: User.find_by(username: "ladyb").id
)

###

Pin.create!(
    title: "Alex Valentine",
    image_url: "www.alexvalentine.com",
    user_id: User.find_by(username: "ladyb").id,
    image: File.open('app/assets/images/beth_paint/alex_valentine.jpg'),
    board_id: Board.find_by(title: "v i b r a n t").id
  )

Pin.create!(
    title: "William J. O'Brien",
    image_url: "www.marianneboeskygallery.com/artists/william-j-oand39brien/works",
    user_id: User.find_by(username: "ladyb").id,
    image: File.open('app/assets/images/beth_paint/bill.jpg'),
    board_id: Board.find_by(title: "v i b r a n t").id
  )

Pin.create!(
    title: "Erin Nelson",
    image_url: "www.erinjanenelson.com/",
    user_id: User.find_by(username: "ladyb").id,
    image: File.open('app/assets/images/beth_paint/erin_nelson.jpg'),
    board_id: Board.find_by(title: "v i b r a n t").id
  )

  Pin.create!(
      title: "Ethan D'Ercole",
      image_url: "www.ethandercole.com/",
      user_id: User.find_by(username: "ladyb").id,
      image: File.open('app/assets/images/beth_paint/ethan.jpg'),
      board_id: Board.find_by(title: "v i b r a n t").id
    )

  Pin.create!(
      title: "Howard Fonda",
      image_url: "www.howardfonda.com/",
      user_id: User.find_by(username: "ladyb").id,
      image: File.open('app/assets/images/beth_paint/howard_fonda2.jpg'),
      board_id: Board.find_by(title: "v i b r a n t").id
    )

Pin.create!(
    title: "Jose Lerma",
    image_url: "www.andrearosengallery.com/artists/jose-lerma",
    user_id: User.find_by(username: "ladyb").id,
    image: File.open('app/assets/images/beth_paint/jose_lerma3.jpg'),
    board_id: Board.find_by(title: "v i b r a n t").id
  )

Pin.create!(
    title: "Kyle Goldbach",
    image_url: "www.kylegoldbach.com/",
    user_id: User.find_by(username: "ladyb").id,
    image: File.open('app/assets/images/beth_paint/kyle_g.jpg'),
    board_id: Board.find_by(title: "v i b r a n t").id
  )

Pin.create!(
    title: "Scott Reeder",
    image_url: "www.kavigupta.com/artist/scott-reeder/",
    user_id: User.find_by(username: "ladyb").id,
    image: File.open('app/assets/images/beth_paint/scott_reader.jpeg'),
    board_id: Board.find_by(title: "v i b r a n t").id
  )

  Pin.create!(
      title: "Scott Reeder",
      image_url: "www.kavigupta.com/artist/scott-reeder/",
      user_id: User.find_by(username: "ladyb").id,
      image: File.open('app/assets/images/beth_paint/ScottReeder2.jpg'),
      board_id: Board.find_by(title: "v i b r a n t").id
    )

  ###

  Board.create!(
    title: "something different",
    description: "photographs",
    user_id: User.find_by(username: "ladyb").id
  )

  ###

Pin.create!(
    title: "Aspen Mays",
    image_url: "www.aspenmays.com/",
    user_id: User.find_by(username: "ladyb").id,
    image: File.open('app/assets/images/beth_photo/aspenmays.jpg'),
    board_id: Board.find_by(title: "something different").id
  )

Pin.create!(
    title: "Awol Erizku",
    image_url: "www.awolerizku.com/",
    user_id: User.find_by(username: "ladyb").id,
    image: File.open('app/assets/images/beth_photo/awol.png'),
    board_id: Board.find_by(title: "something different").id
  )

  Pin.create!(
      title: "Cole Don Kelley",
      image_url: "www.coledonkelley.com/",
      user_id: User.find_by(username: "ladyb").id,
      image: File.open('app/assets/images/beth_photo/colekelley.png'),
      board_id: Board.find_by(title: "something different").id
    )

    Pin.create!(
        title: "Sara Cwynar",
        image_url: "www.saracwynar.com/",
        user_id: User.find_by(username: "ladyb").id,
        image: File.open('app/assets/images/beth_photo/cwynar.jpg'),
        board_id: Board.find_by(title: "something different").id
      )

    Pin.create!(
        title: "Sara Cwynar",
        image_url: "www.saracwynar.com/",
        user_id: User.find_by(username: "ladyb").id,
        image: File.open('app/assets/images/beth_photo/cwynar2.jpg'),
        board_id: Board.find_by(title: "something different").id
      )

    Pin.create!(
        title: "Eric Fleischaeuer",
        image_url: "www.ericfleischauer.com/",
        user_id: User.find_by(username: "ladyb").id,
        image: File.open('app/assets/images/beth_photo/eric_fleischauer.jpg'),
        board_id: Board.find_by(title: "something different").id
      )

      Pin.create!(
          title: "Erin Jane Nelson",
          image_url: "www.erinjanenelson.com/",
          user_id: User.find_by(username: "ladyb").id,
          image: File.open('app/assets/images/beth_photo/erinjanenelson-1.jpg'),
          board_id: Board.find_by(title: "something different").id
        )

        Pin.create!(
            title: "Erin Jane Nelson",
            image_url: "www.erinjanenelson.com/",
            user_id: User.find_by(username: "ladyb").id,
            image: File.open('app/assets/images/beth_photo/erinjanenelson.jpg'),
            board_id: Board.find_by(title: "something different").id
          )
