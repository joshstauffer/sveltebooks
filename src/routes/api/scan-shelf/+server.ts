import { json, type RequestHandler } from "@sveltejs/kit";

export const POST: RequestHandler = async ({ request }) => {
  const { base64 } = await request.json();

  //console.log({ base64 });

  const bookArray = [
    {
      bookTitle: "Clean Code",
      author: "Robert Martin"
    },
    {
      bookTitle: "The Way of the Shepherd",
      author: "Kevin Leman"
    },
    {
      bookTitle: "Mere Christianity",
      author: "C.S. Lewis"
    },
  ]

  return json({ bookArray });
};