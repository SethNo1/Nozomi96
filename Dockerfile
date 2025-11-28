# Menggunakan Node.js versi 18
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Salin file package.json
COPY package.json .

# Install dependencies
RUN npm install

# Salin semua file ke container
COPY . .

# Expose port dari Fly.io
EXPOSE 8080

# Command untuk menjalankan server
CMD ["npm", "start"]
