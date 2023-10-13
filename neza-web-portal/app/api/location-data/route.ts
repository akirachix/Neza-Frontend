import { BASE_URL } from "@/config";

export async function GET() {
  try {
    if (!BASE_URL) {
      return {
        status: 404,
        statusText: "failed",
        message: "Base url not found",
      };
    }
    const response = await fetch(`${BASE_URL}/locations/`);
    const result = await response.json();
    return new Response(JSON.stringify(result), {
        status:200,
        statusText : 'success'
    })
}
   catch (error:any) {
    return {
      status: 501,
      statusText: "failed",
      message: error.message,
    };
  }
}


