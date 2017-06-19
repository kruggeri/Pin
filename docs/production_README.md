
- Heroku Link

  At the end of the first day of full-stack projects, you should have a link to the live version of your site. It doesn't have to be pretty, but it has to be there. Push to Heroku ASAP!


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

The Discover Feed is the most recent pins created by the user's followers.



schema.md
Link to a document outlining the database schema for your app. Build up the schema by walking through your app's wireframes. Think carefully about what data will be needed for each view and the best way to store that data. Make note of any database-level validations and foreign key relationships.

API Endpoints

api-endpoints.md
Link to a page that lists your Rails API endpoints. Break these up between HTML and JSON endpoints. Discuss what params, if any, will be needed for each endpoint, and what information will be returned.

Implementation Timeline

Create a section in your proposal README for each phase of your project to develop an implementation timeline.

Refer back to your MVP and group the features into logical phases. Rather than building the entire project all at once, you're going to implement one feature at a time. You should have a working app at the end of each phase (even if not all of your features are in yet).

This is crucial both here and in the industry. The truth is, one never knows how long implementing any particular phase will take. Constraints change. Timelines are shortened without warning. An app after any phase must be able to stand on it's on. We call this building in 'slices' instead of 'layers'.
