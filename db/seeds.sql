USE studygroup_db;

INSERT INTO member (joined_group, first_name, last_name, social_handle, zipcode, img_url)
VALUES ("Coding Study Group", "John", "Smith", "https://twitter.com/IngrahamAngle", "11101", "#" );

INSERT INTO member (joined_group, first_name, last_name, social_handle, zipcode, img_url)
VALUES ("Coding Study Group", "Charlie", "Olivia", "https://twitter.com/IngrahamAngle", "10025", "#" );

INSERT INTO study_group (group_name, group_blurb)
VALUES ("Coding Study Group", "Coding Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor");


INSERT INTO upcoming_events(event_group, event_title, event_date, event_url)
VALUES ("Coding Study Group", "Group virtual hang out", "11/24/2020", "#");