"use client";

import React from "react";
import { UploadDropzone } from "@/lib/uploadthing"; // ensure path correct
import "@uploadthing/react/styles.css";

interface FileUploadProps {
  onChange: (url?: string) => void;
  value: string;
  endpoint: "messageFile" | "serverImage";
  className?: string;
  style?: React.CSSProperties; // <-- add this
}

const FileUpload: React.FC<FileUploadProps> = ({ onChange, value, endpoint, className, style }) => {
  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        try {
          const url = res?.[0]?.url;
          if (url) onChange(url);
        } catch (e) {
          console.error("Upload complete callback error:", e);
        }
      }}
      onUploadError={(error: Error) => {
        console.error("Upload error:", error);
      }}
      className={className}
      // style={style} // <-- forwarded
    />
  );
};

export default FileUpload;
