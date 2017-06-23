users

id	integer	not null, primary key
username	string	not null, indexed, unique
email	string	not null, indexed, unique
password_digest	string	not null
session_token	string	not null, indexed, unique

pins 

id	integer	not null, primary key
title	string	not null
description	text	not null
author_id	integer	not null, foreign key (references users), indexed
board_id	integer	not null, foreign key (references boards), indexed
pinned	boolean	not null, default: false

boards

id	integer	not null, primary key
author_id	integer	not null, foreign key (references users), indexed
title	string	not null
description	string	

