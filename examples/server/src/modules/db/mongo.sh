#!/bin/bash

# work for docker
docker network create mongo-network

docker run --network mongo-network --name mongo-primary -p 27017:27017  -d mongo --replSet rs0

sleep 10

docker exec -it mongo-primary mongo --eval "rs.initiate()"

sleep 10

docker run --network mongo-network --name mongo-secondary  -d mongo --replSet rs0

sleep 10

docker run --network mongo-network --name mongo-arbiter -d mongo --replSet rs0 --arbiterOnly
