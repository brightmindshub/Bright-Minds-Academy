export async function POST(req) {
  const body = await req.json();

  try {
    const res = await fetch(process.env.LEAD_FORM_API, {
      method: "POST",
      body: JSON.stringify(body),
    });
    const data = await res.json();

    if (data.result === "success") {
      return new Response(JSON.stringify({ result: "success" }), { status: 200 });
    }
    return new Response(JSON.stringify({ error: "Submission failed" }), { status: 500 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Server error" }), { status: 500 });
  }
}