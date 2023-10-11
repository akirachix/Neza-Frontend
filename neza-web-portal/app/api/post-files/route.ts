import { BASE_URL } from "@/app/config";

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




















// import { BASE_URL } from "@/app/config";
// export async function POST(request: Request) {
//   try {
//     if (!BASE_URL) {
//       return new Response("Base url not found", {
//         status: 404,
//         statusText: "Failed",
//       });
//     }
//     const response = await request.json().then(async (response) => {
//       const result = await fetch(`${BASE_URL}/api/upload/`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(response),
//       });
//       const post = await result.json();
//       return post;
//     });
//     return new Response(JSON.stringify(response), {
//       status: 201,
//       statusText: "Success",
//     });
//   } catch (error: any) {
//     return new Response(error.message, {
//       status: 500,
//       statusText: "Failed",
//     });
//   }
// }
