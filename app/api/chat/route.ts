import { OpenAIStream, StreamingTextResponse } from 'ai'

export const runtime = 'edge'

export async function POST(req: Request) {
  const { messages } = await req.json()

  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
      'Content-Type': 'application/json',
      'HTTP-Referer': 'https://codexmkaiassistantnew.vercel.app',
      'X-Title': 'MK Codex Assistant'
    },
    body: JSON.stringify({
      model: 'deepseek/deepseek-chat-v3-0324',
      messages,
      stream: true
    })
  })

  const stream = OpenAIStream(response)
  return new StreamingTextResponse(stream)
}