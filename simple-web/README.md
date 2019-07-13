# How to run this project

build docker container
~~~
docker build -t <initial-name>/simpleweb .
~~~


run docker with specifying port | container port mapping
~~~
docker run -p 5001:5001 <initial-name>/simpleweb
~~~
