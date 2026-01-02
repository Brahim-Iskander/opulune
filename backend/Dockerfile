# Use lightweight Java image
FROM eclipse-temurin:17-jre

# Set working directory
WORKDIR /app

# Copy jar file
COPY target/*.jar app.jar

# Expose port (Render uses 8080)
EXPOSE 8081

# Run app
ENTRYPOINT ["java", "-jar", "app.jar"]
