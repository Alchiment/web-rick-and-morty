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
    episode {
      name
    }
    location {
      name
    }
    origin {
      name
    }
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