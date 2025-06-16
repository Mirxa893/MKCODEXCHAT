'use client'

import { useChat } from 'ai/react'

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      <div className="flex items-center px-4 py-3 bg-opacity-80 backdrop-blur-lg">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white truncate flex items-center">
            Chat Hugging Face UI
          </h2>
        </div>
      </div>
      <div className="flex-1 p-4 md:p-8 overflow-y-auto">
        <div className="flex flex-col space-y-4">
          {messages.map((m) => (
            <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`p-4 rounded-lg ${m.role === 'user'
                  ? 'bg-blue-600 text-right w-2/5'
                  : 'bg-purple-700 text-left w-2/5'}`}>
                <span className="font-medium">{m.role === 'user' ? 'You' : 'AI'}</span>: {m.content}
              </div>
            </div>
          ))}
        </div>
      </div>
      <form onSubmit={handleSubmit} className="flex items-center px-4 py-3 bg-gray-800">
        <input
          className="flex-1 px-4 py-2 text-white bg-gray-700 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Say something..."
          value={input}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="ml-4 p-2 text-blue-400 rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send
        </button>
      </form>
    </div>
  )
}
