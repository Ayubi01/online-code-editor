import React, { useState } from "react";
import CodeEditor from "./components/Editor";

function App() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  const srcDoc = `
    <html>
      <head><style>${css}</style></head>
      <body>${html}
        <script>${js}</script>
      </body>
    </html>
  `;

  return (
    <div className="h-screen flex flex-col bg-gray-800 text-white">
      <div className="grid grid-cols-3 gap-2 p-2 h-1/2">
        <CodeEditor language="html" value={html} onChange={setHtml} />
        <CodeEditor language="css" value={css} onChange={setCss} />
        <CodeEditor language="javascript" value={js} onChange={setJs} />
      </div>
      <div className="flex-grow">
        <iframe
          srcDoc={srcDoc}
          title="Output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
          className="bg-white"
        />
      </div>
    </div>
  );
}

export default App;
