import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { FiUploadCloud } from "react-icons/fi";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";

const fileTypes = ["JPG", "PNG", "GIF"];

const ClickToUpload = ({ setDragFiles }) => {
  const [file, setFile] = useState(null);

  const handleChange = (file) => {
    setFile(file);
    setDragFiles(file);
  };

  console.log(file);

  const details = (
    <div className="border-2 border-dashed border-sky-500 rounded-xl flex flex-col items-center py-4 px-3 hover:cursor-pointer mb-2">
      <FiUploadCloud className="text-2xl text-[#595a5c] mb-2" />
      <h2 className="mb-4">
        <span className="font-medium text-sky-600">Click to upload</span> or
        drag and drop
      </h2>
      <h2 className="text-[#595a5c] text-sm font-semibold">
        (Only upload <span className="text-black">JPG, PNG, GIF</span> files)
      </h2>
    </div>
  );

  return (
    <div className="mb-10">
      <FileUploader
        handleChange={handleChange}
        name="file"
        label="Upload or drag and drop"
        types={fileTypes}
        children={details}
      />

      <p className="text-center break-words">
        {file ? (
          <div className="flex items-center justify-center gap-2">
            <TiTick className="text-green-600 text-xl" />
            <h2 className="font-medium text-green-600">
              File(s) has been added
            </h2>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-2">
            <ImCross className="text-red-500 text-sm" />
            <h2 className="font-medium text-red-500">
              No file(s) uploaded yet
            </h2>
          </div>
        )}
      </p>
    </div>
  );
};

export default ClickToUpload;
