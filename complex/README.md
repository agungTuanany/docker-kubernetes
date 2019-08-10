# DOCKER run this project

we have 3 different folder such **client**, **server**, **worker**, for each
folder we should build an images.

open your terminal:
~~~
# run this code inside your **client** workdir

docker build -f Dockerfile.dev -t client/docker-react .

# to test that your client project or images or file didn't have an error

docker run client/docker-react

# run this code inside your **server** workdir

docker build -f Dockerfile.dev -t server/docker-react .

# to test that your server projector images or file didn't have an error

docker run server/docker-react

# run this code inside your **worker** workdir

docker build -f Dockerfile.dev -t worker/docker-react .

# to test that your worker projecst or images or files didn't have an error

docker run worker/docker-react
~~~

## docker-compose run this project
~~~
# see in the root folder there's docker-compose.yml file
# run cli
docker-compose up
~~~

