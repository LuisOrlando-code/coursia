function Curso({ curso }) {
  return (
    <div className="w-full max-w-3xl mt-12">
      <h2 className="text-3xl font-bold text-white mb-2">{curso.titulo}</h2>
      <p className="text-gray-400 mb-8">{curso.descripcion}</p>

      {curso.modulos.map((modulo) => (
        <div key={modulo.id} className="mb-8">
          <h3 className="text-xl font-semibold text-indigo-400 mb-4">
            {modulo.titulo}
          </h3>

          {modulo.lecciones.map((leccion) => (
            <div key={leccion.id} className="bg-gray-800 rounded-lg p-5 mb-3">
              <h4 className="text-white font-medium mb-2">{leccion.titulo}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{leccion.contenido}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Curso