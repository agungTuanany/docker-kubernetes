# Use an existing docker image as base
FROM alpine


#Downlad and install a dependency
RUN apk add --update redis
RUN apk add --update gcc



# Tell the image what to do when i starts as a container
CMD ["redis-server"]
