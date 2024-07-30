"use client"; // Đảm bảo rằng component này chỉ chạy trên client

import { useEffect } from "react";

const BootstrapScripts = () => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return null;
};

export default BootstrapScripts;
