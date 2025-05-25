# Stage 1: Build the Next.js application
# Use a Node.js base image (e.g., node:20-alpine for a lightweight image)
FROM node:18-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock if you use Yarn)
# These are copied first to leverage Docker's build cache
COPY package.json yarn.lock* package-lock.json* ./

# Install dependencies
# 'npm ci' is preferred for CI/CD environments as it ensures exact versions from package-lock.json
RUN npm ci

# Copy the rest of your application source code
# Assuming your source code is in 'src' and static assets in 'public'
COPY . .

# Build the Next.js application for production
# This creates the optimized build output in the .next folder
RUN npm run build

# Stage 2: Create the final production-ready image
# Use a smaller Node.js runtime image for the final production environment
FROM node:18-alpine AS runner

# Set environment variables for Next.js production mode
ENV NODE_ENV=production
# Expose the port Next.js uses (default is 3000)
EXPOSE 3000

# Set the working directory
WORKDIR /app

# Copy only the necessary files from the builder stage to the runner stage
# This makes the final image much smaller
COPY --from=builder /app/.next ./.next           
COPY --from=builder /app/node_modules ./node_modules 
COPY --from=builder /app/public ./public         

# If you have a custom server.js file for Next.js, copy it here
# COPY --from=builder /app/server.js ./server.js

# Command to start the Next.js production server
# 'npm start' will run 'next start' by default
CMD ["npm", "start"]

# Note: You can customize the base Node.js version (e.g., node:18-alpine, node:22-alpine)
# based on your application's requirements.
