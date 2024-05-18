"use client";

import { AuthModal } from "@/components/AuthModal";
import { Modal } from "@/components/Modal";
import { useEffect, useState } from "react";

export const ModalProvider = () => {
  const [isMounted, setisMounted] = useState(false);

  useEffect(() => {
    setisMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AuthModal />
    </>
  );
};
