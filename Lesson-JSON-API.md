# How to make a JSON server

- First make a data file with extension .json (making your own db)
- add data (each top level property is called a resource)
- we can delete edit do stuff with this data
- install json server package from npx and wrap the data with an endpoint
- All the Endpoint available to us for getting data from the db
- Running the command (npx json-server --watch data/db.json --port 8000)

|ENDPOINT    |METHOD | FUCNTION|
-------------|-------|-------------|
|/Anime      |GET    |Fetch all the Animes|
|/Anime/{id} |GET    |Fetch a specific Anime|
|/Anime      |POST   |Add a new Entry|
|/Anime/{id} |DELETE |Delete an Entry|





