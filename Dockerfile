# Uses Node.js 20 Alpine as base

#  👥 Create a new user (app) and group (app) inside the container
# -S creates a system user (no password, etc.)

# 👤 Switch to the app user for safer operations (avoid running as root!)

# 📁 Set working directory inside the container to /app

#  Copy package.json and package-lock.json into the container

# 👑 Temporarily switch back to root so we can change ownership

# ✅ Set ownership of all files to the app user so permissions don’t break

# 👤 Back to safe user again

# 🧩 Install all dependencies listed in package.json

# 📁 Copy the rest of the project files into the container

# 🌐 Tell Docker this app will run on port 5173 (used by Vite dev server)

# 🚀 Start the app using npm run dev (probably starts Vite development server)


FROM node:20-alpine

RUN addgroup app && adduser -S -G app app

USER app

WORKDIR /app

COPY package*.json ./

USER root

RUN chown -R app:app .

USER app

RUN npm install

COPY . .

EXPOSE 5173

CMD npm run dev