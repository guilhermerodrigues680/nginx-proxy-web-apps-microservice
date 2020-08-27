# imagem base para compilar o projeto
FROM maven:3.6.3-jdk-8-slim as maven

# definindo o diretorio da aplicacao
WORKDIR /microservice-spring

# Copia o pom.xml com as dependencias do projeto
COPY pom.xml ./

# Copila todas as dependencias
RUN mvn dependency:go-offline -B

# copia o codigo fonte do projeto
COPY src ./src

# copila o projeto para release e salva em ./target/demo-x.x.x-x.jar
RUN mvn clean package -DskipTests

### IMAGEM FINAL ###

# imagem base final que executara o projeto compilado
FROM openjdk:8-jre-alpine

# Ajuste da timezone
RUN ln -snf /usr/share/zoneinfo/America/Sao_Paulo /etc/localtime && echo "America/Sao_Paulo" > /etc/timezone

# definindo o diretorio da aplicacao
WORKDIR /microservice-spring

# copia somente o projeto compilado pelo maven
COPY --from=maven /microservice-spring/target/demo-0.0.1-SNAPSHOT.jar ./demo.jar

# define o comando do container para executar a aplicacao
CMD ["java", "-jar", "./demo.jar"]
