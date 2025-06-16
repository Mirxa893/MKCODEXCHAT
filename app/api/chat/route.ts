// app/api/chat/route.ts
import { OpenAIStream } from 'ai'
import type { ChatRequest } from 'ai'
 
export const runtime = 'edge'

export async function POST(req: Request) {
  const body: ChatRequest = await req.json()

  const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'deepseek/deepseek-chat-v3-0324:free',
      messages: body.messages,
      stream: true,
    }),
  })

  const stream = await OpenAIStream(res)
  return new Response(stream)
}
