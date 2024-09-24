import React, { useState } from "react";

// Example component code as a string (in practice, you'd pass this as props or state)
const exampleCode = `\
  <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; padding: 20px; background-color: #ffff; }
        h2 { color: #d946ef; }
        ul { padding: 0; }
        li { list-style: none; margin-bottom: 10px; }
        button { background-color: #3b82f6; color: white; padding: 10px; border-radius: 5px; border: none; cursor: pointer; }
      </style>
    </head>
    <body>
      <div>
        <h2>Enterprise</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <ul>
          <li><span>✔️</span> Better Support</li>
          <li><span>✔️</span> 5 team members</li>
          <li><span>✔️</span> 200 Credits</li>
        </ul>
        <button>Choose Plan</button>
      </div>
    </body>
  </html>
`;

const PreviewAndCodeWithIframe = () => {
  const [view, setView] = useState("preview");

  return (
    <div>
      <div>
        <button onClick={() => setView("preview")} style={{ marginRight: "10px" }}>Preview</button>
        <button onClick={() => setView("code")}>Code</button>
      </div>

      {view === "preview" ? (
        // iframe rendering the component using srcDoc
        <iframe
          title="Component Preview"
          srcDoc={exampleCode}
          style={{ width: "100%", height: "400px", border: "1px solid lightgray", marginTop: "20px", borderRadius: "10px" }}
        />
      ) : (
        <pre
          style={{
            backgroundColor: "#000", // Black background
            color: "#fff", // White text color for visibility
            padding: "10px",
            borderRadius: "5px",
            marginTop: "20px",
            whiteSpace: "pre-wrap",
            overflowX: "auto" // Allow horizontal scrolling if needed
          }}
        >
          {exampleCode}
        </pre>
      )}
    </div>
  );
};

export default PreviewAndCodeWithIframe;
