## DOCKER run this project

build docker container

~~~
# for dev-env
# run in cli
docker build -f Dockerfile.dev -t "<images-name>/<container-name>:dev" .

docker run -p 3001:3000 -v /app/node_modules -v $(pwd):app/ <images-name>/<container-name>
~~~

## docker-compose run this project
~~~
# see in the root folder there's docker-compose.yml
# run cli
docker-compose up
~~~

~~~
# for prod-env
docker build .

# run nginx
docker run -p 8080:80 <container-id>
~~~
