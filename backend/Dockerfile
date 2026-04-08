# # Use Node.js
# FROM node:20

# # Set working directory
# WORKDIR /app

# # Copy package files
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy all code
# COPY . .

# # Build app
# RUN npm run build

# # Expose port
# EXPOSE 5000

# # Start app
# CMD ["npm", "run", "start"]

# ---------- BUILD STAGE ----------
FROM node:20 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# ---------- PRODUCTION STAGE ----------
FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install 

COPY --from=builder /app/dist ./dist

EXPOSE 5000

CMD ["node", "dist/main.js"]