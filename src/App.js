import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [files, setFiles] = useState([]);

  const handleFiles = (incomingFiles) => {
    if (incomingFiles) {
      const newFiles = [];
      const incomingFilesLength = incomingFiles.length;

      for (let i = incomingFilesLength - 1; i >= 0; i--) {
        if (incomingFiles[i] === null) continue;
        newFiles.push(incomingFiles[i]);
      }

      if (files) {
        const newFileState = [...newFiles, ...files];
        setFiles(newFileState);
      } else {
        const newFileState = [...newFiles];
        setFiles(newFileState);
      }
    }
  };

  const inputRef = useRef(null);
  const openFileSelector = () => {
    inputRef.current?.click();
  };
  return (
    <div className="App">
      <button onClick={openFileSelector}>UPLOAD A FILE</button>
      <input
        ref={inputRef}
        type="file"
        accept="image/*,.pdf"
        multiple
        hidden
        onChange={(e) => handleFiles(e.target.files)}
        data-cy="contact-us-form-input-button"
      />
      <ul>
        {files.map((file) => (
          <li key={file.name}>{file.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
