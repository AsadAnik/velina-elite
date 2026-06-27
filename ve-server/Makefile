PROJECT_NAME := ve-server
DOCKERFILE := Dockerfile
PORT := 3000

.PHONY: build run stop rm rmi logs up down rebuild

build:
	docker-compose build

up:
	docker-compose up -d

down:
	docker-compose down

rm:
	docker rm $(PROJECT_NAME)

rmi:
	docker rmi $(PROJECT_NAME)

logs:
	docker logs -f $(PROJECT_NAME)