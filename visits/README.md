# How to run this project

build docker container
~~~
docker build -t daun/visits:latest .
~~~


run docker with specifying port | container port mapping
~~~
docker run -p 5001:5001 daun/visits
~~~

#Docker Compose

docker run myimage

~~~
docker-compose up
~~~

docker build . + docker run myimage
~~~
docker-compose up --build
~~~

# Stopping Docker Compose Containers

launch in background
~~~
docker-compose up -d
~~~

Stop Containers
~~~
docker-compose down
~~~

# Automatic Container Restart

# Container Status with Docker Compose

~~~
docker-compose ps | need to run the command in appropriate directory
~~~

