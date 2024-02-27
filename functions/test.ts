import { Context } from "@netlify/functions";

export default async (req, context: Context) => {
  const functionUrl = process.env.URL;
  console.log(`Function deployed at: ${functionUrl}`);
  // Другая логика вашей функции
};