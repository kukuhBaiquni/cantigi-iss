import clsx from "clsx";
import React, { useEffect } from "react";

type Props = {
  isVisible: boolean;
  onClose: () => void;
}

export default function Modal({ isVisible, onClose }: Props) {
  useEffect(() => {
    const overlay = document.getElementById("overlay");
    overlay?.classList.toggle("fade-in", isVisible);
    if (isVisible && overlay != null) {
      overlay.style.opacity = "1";
      overlay.style.display = "flex";
      document.body.style.overflowY = "hidden";
    }
  }, [isVisible]);

  const onCloseModal = () => {
    const overlay = document.getElementById("overlay");
    if (overlay != null) {
      overlay.classList.toggle("fade-out", !isVisible);
      overlay.style.opacity = "0";
      setTimeout(() => {
        onClose();
        overlay.style.display = "none";
        document.body.style.overflowY = "auto";
      }, 300);
    }
  };

  return (
    <div
      className={clsx(
        "h-screen w-screen bg-black fixed overflow-hidden z-30 top-0 transition-all hidden",
        "justify-center items-center relative",
      )}
      id="overlay"
    >
      <button type="button" onClick={onCloseModal}>
        <i className="bx bx-x text-6xl absolute top-[62px] right-[72px] text-white" />
      </button>
      <div>
        <input className="py-4 px-2 w-[900px] bg-white" placeholder="Search ..." type="text" />
        <button className="bg-hover-color text-white p-4" type="button">Search</button>
      </div>
    </div>
  );
}
