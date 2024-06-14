FROM node:16-alpine

WORKDIR /app

# Clear npm cache
RUN npm cache clean --force

# Copy package.json and package-lock.json
COPY package.json ./
COPY package-lock.json ./

# Install dependencies with retries
RUN set -eux; \
    for i in $(seq 1 3); do \
        npm install && break || \
        { echo "Retrying npm install ($i/3)"; npm cache clean --force; }; \
    done

# Copy the rest of the application code
COPY . .

# Expose the application port
EXPOSE 5000

# Start the application
CMD ["npm", "start"]
