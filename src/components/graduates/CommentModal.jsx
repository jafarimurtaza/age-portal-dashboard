// components/graduates/CommentModal.jsx

"use client";

import { useEffect, useState } from "react";

export default function CommentModal({
  open,
  graduate,
  onClose,
  onSave,
}) {
  const [comment, setComment] = useState("");

  useEffect(() => {
    if (!open) {
      setComment("");
    }
  }, [open]);

  if (!open || !graduate) {
    return null;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const value = comment.trim();

    if (!value) return;

    onSave(graduate.id, value);
    setComment("");
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[#0B0F19]/50 p-4">

      <div className="w-full max-w-lg rounded-3xl bg-[#FAF7F2] p-6 shadow-2xl">

        <div className="mb-6 flex items-center justify-between">

          <div>
            <h2 className="text-2xl font-bold text-[#0B0F19]">
              Add Comment
            </h2>

            <p className="mt-1 text-sm text-[#1B3A6B]">
              {graduate.name}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer text-2xl text-[#1B3A6B]"
          >
            ×
          </button>

        </div>

        <form onSubmit={handleSubmit}>

          <textarea
            value={comment}
            onChange={(event) =>
              setComment(event.target.value)
            }
            rows={5}
            placeholder="Write a comment..."
            className="
              w-full
              resize-none
              rounded-2xl
              border
              border-[#F5F0E8]
              bg-white
              p-4
              text-[#0B0F19]
              outline-none
              transition
              focus:border-[#C8955A]
            "
          />

          <div className="mt-5 flex justify-end gap-3">

            <button
              type="button"
              onClick={onClose}
              className="
                cursor-pointer
                rounded-xl
                bg-[#F5F0E8]
                px-5
                py-3
                font-semibold
                text-[#0B0F19]
              "
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={!comment.trim()}
              className="
                cursor-pointer
                rounded-xl
                bg-[#1B3A6B]
                px-5
                py-3
                font-semibold
                text-white
                transition
                hover:bg-[#C8955A]
                disabled:cursor-not-allowed
                disabled:opacity-50
              "
            >
              Save Comment
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}