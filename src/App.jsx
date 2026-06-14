import { useState } from "react"
import { generarCurso } from "./api"
import Curso from "./Curso"

function App() {
  const [tema, setTema] = useState("")
  const [apiKey, setApiKey] = useState("")
  const [curso, setCurso] = useState(null)
  const [cargando, setCargando] = useState(false)

  const handleGenerar = async () => {
    setCargando(true)
    const resultado = await generarCurso(tema, apiKey)
    setCurso(resultado)
    setCargando(false)
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center p-8">
      <h1 className="text-5xl font-bold mb-10 text-indigo-400">Coursia</h1>

      <div className="flex flex-col gap-4 w-full max-w-xl">
        <input
          type="password"
          placeholder="Tu API key de Anthropic"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
        />
        <input
          type="text"
          placeholder="¿Qué quieres aprender?"
          value={tema}
          onChange={(e) => setTema(e.target.value)}
          className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500"
        />
        <button
          onClick={handleGenerar}
          disabled={cargando}
          className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 rounded-lg px-4 py-3 font-semibold transition-colors"
        >
          {cargando ? "Generando..." : "Generar curso"}
        </button>
      </div>

      {curso && <Curso curso={curso} />}
    </div>
  )
}

export default App