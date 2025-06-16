// app/api/chat/route.ts

export const runtime = 'edge'

export async function POST(req: Request) {
  const { messages } = await req.json()

  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
      'Content-Type': 'application/json',
      'HTTP-Referer': 'https://codexmkaiassistantnew.vercel.app/', // Optional but recommended
      'X-Title': 'MK Codex Chatbot'
    },
    body: JSON.stringify({
      model: 'deepseek/deepseek-chat-v3-0324:free',
      messages,
      stream: true
    })
  })

  return new Response(response.body, {
    status: response.status,
    headers: {
      'Content-Type': 'text/event-stream'
    }
  })
}
