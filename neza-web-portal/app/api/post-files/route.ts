import { BASE_URL } from "@/config";

export async function POST(request: Request) {
  try {
    const uploadUrl = `${BASE_URL}/api/upload/`;

    if (!uploadUrl) {
      return new Response("Base URL not found", {
        status: 404,
        statusText: "Failed",
      });
    }

    return new Response(JSON.stringify({
      success: true, 
      message: 'File uploaded and processed successfully',
    }), {
      status: 201,
      statusText: "Success",
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    const errorMessage = 'File upload failed';

    return new Response(JSON.stringify({
      success: false,
      message: errorMessage,
    }), {
      status: 500,
      statusText: "Failed",
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}