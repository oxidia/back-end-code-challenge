# back-end-code-challenge
Gemography back-end code challenge.

> **IMPORTANT:** The microservice can't be implemented as required due two major limitations (cited below).

## Contents
A REST microservice that list the languages used by the first 100 trending public repositories on GitHub if available.

## Run
```sh
# docker
docker-compose up

# local
npm install && npm start
```

## Documentation
```sh
GET /api/v1
```

## Note
```
A 100 trending repositories are not guaranteed because the number of trending repositories varies.

I can't find a method to get the framework used by a repository.
```
