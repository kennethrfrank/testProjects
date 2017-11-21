-- SQL UPDATED QUERIES

CREATE TABLE Events 
(EventID SERIAL, 
	eventName VARCHAR(40), 
	eventOrganizer VARCHAR(40), 
	eventTime TIMESTAMP, 
	eventAddress VARCHAR(80), 
	eventLocationName VARCHAR(50));

--