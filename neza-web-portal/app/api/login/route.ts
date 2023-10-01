
import { BASE_URL } from "@/app/config";

export async function POST(request: Request) {
  try {
    if (!{BASE_URL}) {
      return new Response("Base url not found", {
        status: 404,
        statusText: "Failed",
      });
    }
    const posts = await request.json().then(async (response) => {
      const result = await fetch(`https://nezabackend-2a2e9782ab7f.herokuapp.com/api/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(response),
      });

      const post = await result.json();

      return post;
    });

    return new Response(JSON.stringify(posts), {
      status: 200,
      statusText: "Success",
    });
  } catch (error: any) {
    return new Response(error.message, {
      status: 500,
      statusText: "Failed",
    });
  }
}
