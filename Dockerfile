# Stage 1
# Use an existing node alpine image as a base image.
FROM node:18-alpine as build-stage

# Set working directory
RUN mkdir /usr/app

# Copy all files from current directory to docker 
COPY . /usr/app

WORKDIR /usr/app

# Install and cache app dependencies
RUN yarn

CMD ["npm", "run", "start"]
