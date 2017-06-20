

Pin is a full-stack web application inspired by Pinterest. It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.

  Pin is made up of the following:
    1. New account creation, login, and guest/demo login
    2. Profile Page
    3. Boards and Pins
    4. Follows
    5. Discover feed on home page (follows' pins)


- Pin Items/ Boards

Pins and Boards are stored in the database through a table on the backend. A board belongs to a user, and has many pins.
Each board and pin has a user_id and created_at columns in the table. Each pin has a board_id, and image_url as well.

Users can choose to select a pin item by "pinning" it, which saves the pin to own of their own boards.

Users can also create a new board, via their profile page or when they pin an image.

Boards are visible on each users' index page, along with their username, profile picture, and list of followers/follows. A user can also follow boards as well as users.

On a board's show page, all of it's Pin Items are visible. Once a pin is selected, the user is able to view the image's show page. This displays the description, as well as the user who posted it.

The Discovery Feed is the most recent pins created by the user's followers.


- Implementation Timeline

W1:  - Tues, solidify working skeleton and plan!
     - Wed/Thurs/Fri create auth sign up/login/logout, header/logo
     - Sat/Sun, create user show page, boarditems, with seeds
W2:  - Mon/Tues, complete user show page, boardpages, pin detail page
     - Wed, create follows and follower pages
     - Thurs/Fri  create home index page, search functionality  
