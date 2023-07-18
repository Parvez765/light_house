import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { FiUploadCloud } from "react-icons/fi";

const fileTypes = ["JPG", "PNG", "GIF"];

const ClickToUpload = () => {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };

  const stack2 = (
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
    <div>
      <FileUploader
        handleChange={handleChange}
        name="file"
        label="Upload or drag and drop"
        types={fileTypes}
        children={stack2}
      />

      <p className="text-center break-words">
        {file ? (
          <h2 className="font-medium">
            <span className="text-sky-600">File name:</span> {`${file.name}`}
          </h2>
        ) : (
          <h2 className="font-medium text-red-600">No files uploaded</h2>
        )}
      </p>
    </div>
  );
};

export default ClickToUpload;
