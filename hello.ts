export function handler(request: Request) {
  return new Response("Hello, <b>World!</b>", {
    headers: { "content-type": "text/html" },
  });
}
