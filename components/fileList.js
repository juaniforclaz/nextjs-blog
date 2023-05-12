import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  getStorage,
  ref,
  getDownloadURL,
} from "firebase/firestore";
import { firestore } from "../firebaseConfig";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";

const FileList = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, "archivos"));
        const filesData = querySnapshot.docs.map((doc) => doc.data());
        setFiles(filesData);
      } catch (error) {
        console.error("Error al obtener los archivos:", error);
      }
    };

    fetchFiles();
  }, []);

  const handleDownload = async (fileUrl) => {
    try {
      const storage = getStorage();
      const fileRef = ref(storage, fileUrl);
      const downloadUrl = await getDownloadURL(fileRef);

      window.open(downloadUrl);
    } catch (error) {
      console.error("Error al descargar el archivo:", error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Archivos:</h2>
      {files.map((file) => (
        <div key={file.fileName} className="mb-6 p-4 bg-gray-100 rounded-lg">
          <h3 className="text-xl font-bold mb-2">{file.title}</h3>
          <p className="text-gray-700 mb-2">{file.description}</p>
          <p className="text-gray-700 mb-2">
            Nombre del archivo: {file.fileName}
          </p>
          <p className="text-gray-700 mb-2">
            Fecha de creación: {file.createdAt}
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleDownload(file.fileUrl)}
          >
            Descargar
          </button>
        </div>
      ))}
    </div>
  );
};

export default FileList;
