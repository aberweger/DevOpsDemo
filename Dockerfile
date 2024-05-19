FROM openjdk:21-jdk-slim

# Install curl and other dependencies
RUN apt-get update && apt-get install -y curl \
  && curl -sL https://deb.nodesource.com/setup_20.x | bash - \
  && apt-get install -y nodejs \
  && npm install -g npm@10.2.3 \
  && apt-get install -y python3.10

WORKDIR /usr/src/app

COPY . .

# Change directory to 'frontend' and install dependencies
WORKDIR /usr/src/app/frontend
RUN npm install

# Run the build command
RUN npm run build

# Move the built files to the backend resources
WORKDIR /usr/src/app
RUN mv frontend/dist backend/src/main/resources/static

# Prepare backend for build
WORKDIR /usr/src/app/backend
RUN chmod +x gradlew
RUN ./gradlew build

EXPOSE 8080

CMD ["java", "-jar", "/usr/src/app/backend/build/libs/demo-0.0.1-SNAPSHOT.jar"]
