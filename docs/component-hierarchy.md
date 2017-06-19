
- React Components

  - AuthForm Container
      + AuthForm

  - Header Container
      + SearchBar
      + Link to userpage

  - SearchResultsContainer
      + Search

  - Search

  - PinsContainer
      + PinsIndex
      + BoardsIndex

  - PinsIndex
      + PinsIndexItem

  - UserIndex
      + BoardsIndex
        + BoardIndexItem

  - BoardIndexItem
      + PinIndexItem

  - DetailPinContainer
    + DetailPinItem

  - FollowContainer
      + FollowsIndex
      + FollowersIndex

Path	                       Component
"/sign-up"	                 "AuthFormContainer"
"/sign-in"	                 "AuthFormContainer"
"/log-out"                   "AuthFormContainer"
"/pins"	                     "PinsIndex"
"/pins/:pinId"	             "DetailPinContainer"
"/users/:userId"	           "UserIndex"
"/users/:userId/:boardId"	   "BoardIndexItem"
"/home/search-results"	     "SearchResultsContainer"
"/search"	                   "Search"
"/users/:userId/follows"     "FollowsIndex"
"/users/:userId/followers"   "FollowersIndex"
