import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "../firebaseConfig";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file || !title || !description) {
      return;
    }

    try {
      const docRef = await addDoc(collection(firestore, "archivos"), {
        title,
        description,
        fileName: file.name,
        createdAt: new Date().toISOString(),
      });
      setFile(null);
      setTitle("");
      setDescription("");

      console.log("Archivo subido con éxito. ID del documento:", docRef.id);
    } catch (error) {
      console.error("Error al subir el archivo:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="file">Archivo:</label>
        <input type="file" id="file" onChange={handleFileChange} />
      </div>
      <div>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div>
        <label htmlFor="description">Descripción:</label>
        <textarea
          id="description"
          value={description}
          onChange={handleDescriptionChange}
        />
      </div>
      <button type="submit">Subir</button>
    </form>
  );
};

export default UploadForm;
