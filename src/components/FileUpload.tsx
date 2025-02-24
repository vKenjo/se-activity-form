import React from "react";

interface FileUploadProps {
  label: string;
  name: string;
}

const FileUpload: React.FC<FileUploadProps> = ({ label, name }) => {
  return (
    <div
      className="
        w-56 h-56 p-4
        bg-gray-50 border border-gray-300
        rounded-md shadow-sm
        flex flex-col items-center justify-center
      "
    >
      <span className="text-gray-700 font-semibold mb-2">{label}</span>
      <label
        htmlFor={name}
        className="cursor-pointer bg-[#FFD700] text-black px-4 py-2 
                   rounded hover:bg-yellow-400 transition-colors"
      >
        Upload
      </label>
      <input type="file" id={name} name={name} className="hidden" />
    </div>
  );
};

export default FileUpload;
