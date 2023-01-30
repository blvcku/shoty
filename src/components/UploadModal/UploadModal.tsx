import React, { useEffect, useState } from "react";
import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";
const ffmpeg = createFFmpeg({ log: true });

export const UploadModal = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    await ffmpeg.load();
    setReady(true);
  };

  return <div>{ready ? "Ready" : "Not ready"}</div>;
};
