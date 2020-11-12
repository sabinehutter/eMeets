DROP DATABASE IF EXISTS studygroup_db;
CREATE DATABASE studygroup_db;

USE  studygroup_db;

CREATE TABLE member (
id INT AUTO_INCREMENT,
joined_group VARCHAR(100) NOT NULL,
first_name VARCHAR(10) NOT NULL,
last_name VARCHAR(10) NOT NULL,
social_handle VARCHAR (300) NOT NULL,

zip_code INT,
description VARCHAR (500),
img_url VARCHAR (1000),
PRIMARY KEY(id)
);


CREATE TABLE study_group (
id INT AUTO_INCREMENT,
group_name VARCHAR(100) NOT NULL,
group_blurb VARCHAR(500) NOT NULL,
PRIMARY KEY(id)
);


CREATE TABLE upcoming_events (
id INT AUTO_INCREMENT,
event_group VARCHAR(100) NOT NULL,
event_title VARCHAR(100) NOT NULL,
event_date TIMESTAMP NOT NULL,
event_url VARCHAR(500) NOT NULL,
PRIMARY KEY(id)
);