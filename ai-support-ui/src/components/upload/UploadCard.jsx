import { useState } from "react";

import api from
"../../services/api";

import Card from
"../common/Card";

function UploadCard() {

  const [file, setFile] =
    useState(null);

  const [message, setMessage] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleUpload = async () => {

    if (!file) return;

    try {

      setLoading(true);

      const formData =
        new FormData();

      formData.append(
        "file",
        file
      );

      const response =
        await api.post(
          "/api/documents/upload",
          formData
        );

      setMessage(
        response.data
      );

    } catch (err) {

      setMessage(
        "Upload failed"
      );

    } finally {

      setLoading(false);
    }
  };

  return (

    <Card className="max-w-2xl">

      <h1 className="
        text-3xl
        font-bold
        text-white
        mb-6
      ">
        Upload Documents
      </h1>

      <div className="
        border-2
        border-dashed
        border-slate-700
        rounded-2xl
        p-10
        text-center
        mb-6
      ">

        <input
          type="file"
          accept=".pdf"
          onChange={(e) =>
            setFile(
              e.target.files[0]
            )
          }
          className="
            text-slate-300
          "
        />

      </div>

      <button
        onClick={handleUpload}
        disabled={loading}
        className="
          bg-blue-600
          hover:bg-blue-700
          px-6
          py-3
          rounded-xl
          text-white
          transition
        "
      >
        {
          loading
            ? "Uploading..."
            : "Upload PDF"
        }
      </button>

      {
        message &&
        (
          <p className="
            text-slate-300
            mt-4
          ">
            {message}
          </p>
        )
      }

    </Card>
  );
}

export default UploadCard;