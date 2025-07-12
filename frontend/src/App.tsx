import React, { useState } from "react";
import axios from "axios";

function App() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  interface EmotionResult {
  emotion: string;
  emoji: string;
  message: string;
  color: string;
}

const [result, setResult] = useState<EmotionResult | null>(null);

  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setError("");

    try {
      const response = await axios.post("http://localhost:8000/analyze", { text });
      setResult(response.data);
    } catch (err) {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-xl font-semibold mb-4 text-center">Emotion Reflection Tool</h1>
        <form onSubmit={handleSubmit}>
          <textarea
            className="w-full border border-gray-300 p-3 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows={4}
            placeholder="How are you feeling?"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          ></textarea>
          <button
            type="submit"
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            {loading ? "Analyzing..." : "Submit"}
          </button>
        </form>

        {result && (
          <div className="mt-6 p-4 border rounded-md bg-green-50">
           <p><strong>Emotion:</strong> {result.emoji} {result.emotion}</p>
<p><strong>Message:</strong> {result.message}</p>
          </div>
        )}

        {error && (
          <div className="mt-4 text-red-600 text-sm">{error}</div>
        )}
      </div>
    </div>
  );
}

export default App;
