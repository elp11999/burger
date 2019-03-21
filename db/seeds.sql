--
-- Schema to seed the burgers table
--

insert into burgers (burger_name, devoured)
    values ("Big Mac", false),
		   ("Royale with Cheese", false),
		   ("Vegan Burger", false),
		   ("Slug Burger", false),
		   ("Bacon Cheese Burger", false);


--
-- Heroku JAWSDB seed
--
use uiezm7582wctd1xn;

-- Create burgers table
drop table if exists burgers;
create table burgers (
    id int primary key not null auto_increment,
    burger_name varchar(256) not null,
    devoured boolean,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

insert into burgers (burger_name, devoured)
    values ("Big Mac", false),
		   ("Royale with Cheese", false),
		   ("Vegan Burger", false),
		   ("Slug Burger", false),
		   ("Bacon Cheese Burger", false);