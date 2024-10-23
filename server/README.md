# web-rick-and-morty

# Environment variables
```
PORT=<PORT_APP>
API_RICK_MORTY=<REST_ENDPOINT>
API_GQL_RICK_MORTY=<GRAPHQL_ENDPOINT>
STR_CONN_DB=mongodb://<MONGO_DB_USER>:<MONGO_DB_PWD>@<MONGO_DB_HOST>:27017/
DB_NAME=<MONGO_DB_NAME>
```

# Database configuration
*Important: The database name (DB_NAME) must be created before running the endpoint.

An endpoint is available through POST Method to configure the collection's database and Rick and Morty data from the API.
```
http://localhost:<PORT>/api/data/configure
```

This endpoint can receive a POST request with the following body:
```
{
    "importData": true,
    "clearData": true
}
```
**Params**
```
Without params:

If no params are passed, the endpoint just configures the collection's database.

With params:

importData: If true, the data will be imported from the Rick and Morty API.
clearData: If true, the data will be deleted before importing the new data.
```


# GraphQL

## Query characters
```
query GetCharacter($filter: CharacterFilter) {
  characters(filter: $filter) {
    id
    name
    status
    species
    type
    gender
    image
    starred
    episode {
      name
    }
    location {
      name
    }
    origin {
      name
    }
    softDelete
  }
}
```

**Parameters**
```
{
  "filter": {
    "name": "Rick",
    "species": "alien",
    "status": "alive",
    "type": "human",
    "gender": "male"
  }
}
```