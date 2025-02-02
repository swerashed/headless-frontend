"use client";

import { Upload } from "lucide-react";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

function Dropzone({ className, onFileSelect }) {
  const [file, setFile] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles?.length) {
      setFile(acceptedFiles[0]); // Store only the first file
      onFileSelect(acceptedFiles[0]); // Pass the file to parent
    }
  }, [onFileSelect]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "application/pdf": [".pdf"] },
    maxSize: 6000000,
    maxFiles: 1,
    multiple: false,
  });

  return (
    <div {...getRootProps({ className })}>
      <input {...getInputProps()} />
      <div>
        <Upload className="mx-auto h-[29px] w-[29px] text-dark/40 transition-all duration-300 group-hover:text-green/70" />
        <p className="mt-0.5 text-center font-inter text-base font-normal leading-[26px] text-dark/80 transition-all duration-300 group-hover:text-green">
          {isDragActive ? "Drop your PDF here" : "Upload your resume"}
        </p>
        <p className="mt-0.5 text-center font-inter text-xs font-normal leading-normal text-dark/80 transition-all duration-300 group-hover:text-green">
          {file ? `Selected File: ${file.name}` : ""}
        </p>
      </div>
    </div>
  );
}

export default Dropzone;
