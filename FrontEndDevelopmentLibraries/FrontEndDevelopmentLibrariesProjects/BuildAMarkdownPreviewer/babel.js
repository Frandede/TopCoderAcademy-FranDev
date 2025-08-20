const { useState } = React;

const defaultMarkdown = `
# ¡Hola! 👋
## Este es un sub-título
[Haz clic aquí](https://www.freecodecamp.org) para visitar FreeCodeCamp

Aquí hay código \`inline\`.

\`\`\`js
// Bloque de código
function saludar(nombre) {
  return \`Hola, \${nombre}!\`;
}
\`\`\`

- Lista
  - con
    - varios niveles

> Esto es una cita estilo blockquote.

**Este texto está en negrita**

![Imagen FCC](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

function App() {
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div className="container">
      <h1>Markdown Previewer</h1>
      <textarea
        id="editor"
        value={markdown}
        onChange={handleChange}
      ></textarea>
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked.parse(markdown) }}
      ></div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
