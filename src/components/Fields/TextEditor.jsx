import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const TextEditor = ({
  value,
  onChange,
  placeholder = "Write something...",
  theme = "snow",
  modules = defaultModules,
  formats = defaultFormats,
  className = "",
}) => {
  return (
    <div className={`text-editor ${className}`}>
      <ReactQuill
        theme={theme}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        modules={modules}
        formats={formats}
        className="border border-gray-300 rounded-md"
      />
    </div>
  );
};

// Default modules and formats for React Quill
const defaultModules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image"],
    ["clean"], // Remove formatting button
  ],
};

const defaultFormats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "list",
  "bullet",
  "link",
  "image",
];

export default TextEditor;
