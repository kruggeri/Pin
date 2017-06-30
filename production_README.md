# Pin

[Pin](https://p-i-n.herokuapp.com/)

Pin is a full-stack web application inspired by Pinterest. It's been altered to look and function more as an artist's portfolio, and was created with collectors/curators in mind.

 It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.

  Pin is made up of the following:

1. New account creation, login, and guest/demo login
2. Profile Page
3. Boards and Pins
4. Followers and Follows
5. Discover home page

Users can create their own "mood boards", which are catalogued on their profile pages. Through each board's page, users' can add a new "Pin"--images that have a title, description, and image credit.   


![pin background](app/assets/images/bg.png)


## Boards

Pins and Boards are stored in the database through a table on the backend. A board belongs to a user, and has many pins. Each board and pin has a user_id, and each pin has a board_id.

![boardShowIndex component](app/assets/images/profile_page2.png)

![boardShow component](app/assets/images/board_img.png)

Once logged in, an API call is made to the database to retrieve the current user's information. The user is then directed to their profile page, where their boards are rendered. Boards are rendered in two ways: BoardShow components and BoardIndexItem components.

BoardIndexItems are visible on each users' index page. Each item recreates Pinterest's mosaic look, by providing an indicator to the content of each Board. In the future, I'd like to add additional functionality for users to choose their 3 icons.  

A new board can be created by filling out a BoardCreateForm which is activated in a Module component. The board is then added to the User's page.

![pin detail](app/assets/images/pin_page.png)


On a board's show page, all of it's Pin Items are visible. Simillar to Pinterest, the images are arranged in a semi-salon style.

## Pins

Once a pin is selected, the user is able to view the Pin's show page. This displays the description, as well as the user who posted it. The look of the page is minimal and meant to showcase the image.

Users can add to their pages by clicking on the add pin icon, which opens the modal with the CreatePin component. User's can then select to upload a file from their hard drive. On submit this is added to the board's pins.

## Future

In addition to the user's collections and pins, I plan to create the ability for followers and follows-- so that users can watch other users' and their boards.

Users will also be able to "pin" other users' pins to their own boards. The user's discover page, will be a collection of all these images.  
