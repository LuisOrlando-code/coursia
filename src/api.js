import axios from "axios"

const SYSTEM_PROMPT = `Eres un experto en diseño instruccional. Cuando el usuario te dé un tema, genera un curso completo en formato JSON con esta estructura exacta:

{
  "titulo": "Nombre del curso",
  "descripcion": "Descripción breve",
  "modulos": [
    {
      "id": 1,
      "titulo": "Nombre del módulo",
      "lecciones": [
        {
          "id": 1,
          "titulo": "Nombre de la lección",
          "contenido": "Explicación en 2-3 párrafos"
        }
      ]
    }
  ]
}

Genera 3-5 módulos con 3-4 lecciones cada uno. Responde SOLO con el JSON, sin texto adicional.`

export async function generarCurso(tema, apiKey) {
  const response = await axios.post(
    "https://api.anthropic.com/v1/messages",
    {
      model: "claude-sonnet-4-6",
      max_tokens: 4000,
      system: SYSTEM_PROMPT,
      messages: [{ role: "user", content: tema }]
    },
    {
      headers: {
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
        "anthropic-dangerous-direct-browser-access": "true"
      }
    }
  )

  const texto = response.data.content[0].text
  return JSON.parse(texto)
}