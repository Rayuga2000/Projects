#!/bin/bash

read -p "Enter Project Name: " projectName

# create project
echo "y" | npm create vite@latest $projectName -- --template react
cd $projectName
npm i

# install modules
npm install -D tailwindcss postcss autoprefixer sass-embedded react-router-dom
npx tailwindcss init -p

# remove unnecessary files 
rm ./src/index.css ./src/App*

# write important stuff to existing files
echo "/** @type {import('tailwindcss').Config} */
export default {
  content: [
    \"./index.html\",
    \"./src/**/*.{js,ts,jsx,tsx}\",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}">tailwind.config.js

echo "@tailwind base;
@tailwind components;
@tailwind utilities;">index.scss