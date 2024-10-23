# web-rick-and-morty

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