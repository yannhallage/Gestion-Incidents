import { useContext, useEffect, useState } from "react";
import OptionComponent from "../optionComponent";
import ButtonClassic from "../../../buttonClassic";
import { AdminContext } from "../../../../context/FirsContext";

const CreerTicket = () => {
  const { setOptionSelect } = useContext(AdminContext);
  const [editorContent, setEditorContent] = useState(""); // Stocker le contenu

  useEffect(() => {
    // Charger Quill via le CDN
    const script = document.createElement("script");
    script.src = "https://cdn.quilljs.com/1.3.6/quill.min.js";
    script.onload = () => {
      const quill = new Quill("#editor-container", {
        theme: "snow",
        placeholder: "Décrivez votre panne...",
      });

      // Écouter les changements de l'éditeur
      quill.on("text-change", () => {
        setEditorContent(quill.root.innerHTML); // Stocker le HTML
      });
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      {/* Ajout du style de Quill */}
      <link rel="stylesheet" href="https://cdn.quilljs.com/1.3.6/quill.snow.css" />

      <div className="p-3">
        <span className="text-xl font-bold text-gray-800">Créer un ticket</span>
        <div className="mt-5">
          <ButtonClassic
            tile={"Retour"}
            color={
              "bg-gray-700 text-white cursor-pointer px-3 py-1 text-sm rounded hover:bg-gray-800 transition-colors"
            }
            event={() => {
              setOptionSelect(<OptionComponent />);
            }}
          />
        </div>

        <div className="bg-white p-6 mt-5 rounded-lg shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Sélections Type, Catégorie, etc. */}
            <div className="space-y-4">
              <div className="flex flex-col">
                <label className="block text-xs font-medium text-gray-700 mb-1">Type</label>
                <select
                  className="block w-full px-3 py-2 bg-gray-50 text-gray-800 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Statut
                  </option>
                  <option>En attente</option>
                  <option>En cours</option>
                  <option>Attribué</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="block text-xs font-medium text-gray-700 mb-1">Catégorie</label>
                <select
                  className="block w-full px-3 py-2 bg-gray-50 text-gray-800 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Sélectionner
                  </option>
                  <option>Logiciel</option>
                  <option>Matériel</option>
                  <option>Réseau</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="block text-xs font-medium text-gray-700 mb-1">Priorité</label>
                <select
                  className="block w-full px-3 py-2 bg-gray-50 text-gray-800 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Choisir
                  </option>
                  <option>Basse</option>
                  <option>Moyenne</option>
                  <option>Haute</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Attribuer à - Technicien
                </label>
                <select
                  className="block w-full px-3 py-2 bg-gray-50 text-gray-800 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Attribuer la panne à un Technicien
                  </option>
                  <option>Technicien 1</option>
                  <option>Technicien 2</option>
                  <option>Technicien 3</option>
                </select>
              </div>
            </div>

            {/* Éditeur Quill */}
            <div>
              <div className="flex flex-col">
                <label className="block text-xs font-medium text-gray-700 mb-1">Description</label>
                <div
                  id="editor-container"
                  className="border border-gray-300 rounded-md bg-gray-50 text-gray-800 text-sm"
                  style={{ minHeight: "150px" }} // Hauteur minimale pour l'éditeur
                ></div>
              </div>

              <div className="mt-4 space-x-3">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                  onClick={() => console.log("Contenu Quill:", editorContent)}
                >
                  Créer le ticket
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors">
                  Annuler
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreerTicket;