import React from "react";
export default function Settings() {
  return (
    <div className="p-4">
      <div className="flex justify-start items-center gap-4">
        <label className="text-textSecondary"> Provider</label>
        <select className="p-2 border rounded-lg text-textSecondary bg-black bg-opacity-30 border-gray-500">
          <option>Choose Provider</option>
          <option value={'ollama'}>Ollama (local)</option>
          <option value={'gemma'}>Gemma</option>
          <option value={'openai'}>OpenAI</option>
        </select>
      </div>
    </div>
  );
}
