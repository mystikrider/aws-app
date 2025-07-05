# CI/CD + Vercel + React + Vite
    - git init
    - git remote add origin https://github.com/mystikrider/aws-app.git
    - git add .
    - git commit -m "Initial commit"
    - git push -u origin main

# husky
    - npm install husky lint-staged --save-dev
    - npx husky install

    - npx husky add .husky/pre-commit "npx lint-staged"

