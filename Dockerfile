FROM openjdk:21-jdk-slim
RUN apt-get update && apt-get install -y curl \
  && curl -sL https://deb.nodesource.com/setup_20.x | bash - \
  && apt-get install -y nodejs \
  && curl -L https://www.npmjs.com/install.sh | npm_install="10.2.3" | sh
RUN apt-get update && apt-get install -y python3.10

WORKDIR /usr/src/app

COPY . .

WORKDIR /usr/scr/app/frontend
RUN npm install
RUN npm run build

# Move built frontend files to backend resources
RUN mv dist ../backend/src/main/resources/static

# Prepare backend for build
WORKDIR /usr/src/app/backend
RUN chmod +x gradlew
RUN ./gradlew build

# Expose port and set the startup command
EXPOSE 8080
CMD ["java", "-jar", "/usr/src/app/backend/build/libs/demo-0.0.1-SNAPSHOT.jar"]