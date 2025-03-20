# Devcast

A podcast SaaS application with OpenAI integration

### Core technologies used:
- NextJS
- TailwindCSS
- ShadCN
- Clerk Authentication
- Convex API
- OpenAI API
- Embla Carousel

### Online version at Vercel
This project has been [deployed at Vercel](https://devcast-orcin.vercel.app/)

### Running locally
1. To run this project locally, first you need to install all the dependencies with the command: `npm install`. If it doesn't work, try `npm install --force`
2. After this is done, you will need to create a `.env.local` file, and fill in the necessary environment variables, which are:

   ```
    CONVEX_DEPLOYMENT
    NEXT_PUBLIC_CONVEX_URL
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
    CLERK_SECRET_KEY
    CLERK_WEBHOOK_SECRET
    NEXT_PUBLIC_CLERK_SIGN_IN_URL
    NEXT_PUBLIC_CLERK_SIGN_UP_URL
   ```
4. Then, at the project root, run `npx convex dev`
5. At a separate terminal, run `npm run dev`

### Screenshots

![devcast-login](https://github.com/user-attachments/assets/b0e2aaa9-e933-42ce-a51f-c12dc14403a6)

![devcast-main-section](https://github.com/user-attachments/assets/a384d4ac-a4e0-4d3a-b660-5b7f61ae71a8)
