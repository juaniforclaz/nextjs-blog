import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "../firebaseConfig";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [year, setYear] = useState("");

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

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file || !title || !description || !year) {
      return;
    }

    try {
      const docRef = await addDoc(collection(firestore, "archivos"), {
        title,
        description,
        year,
        fileName: file.name,
        createdAt: new Date().toISOString(),
      });
      setFile(null);
      setTitle("");
      setYear("");
      setDescription("");

      console.log("Archivo subido con éxito. ID del documento:", docRef.id);
    } catch (error) {
      console.error("Error al subir el archivo:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 p-4 bg-gray-100 rounded-lg flex flex-col gap-5 shadow-md"
    >
      <div className="flex flex-col gap-3">
        <label htmlFor="file">Archivo</label>
        <input type="file" id="file" onChange={handleFileChange} />
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="year">Año correspondiente</label>
        <input
          type="number"
          id="year"
          value={year}
          onChange={handleYearChange}
        />
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="description">Descripción</label>
        <textarea
          id="description"
          value={description}
          onChange={handleDescriptionChange}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Subir
      </button>
    </form>
  );
};

export default UploadForm;
