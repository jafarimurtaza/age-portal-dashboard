// components/graduates/DeleteGraduateModal.jsx

"use client";

export default function DeleteGraduateModal({
  open,
  graduate,
  onClose,
  onDelete,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-5">

      <div className="w-full max-w-md rounded-3xl bg-white p-8">

        <h2 className="text-2xl font-bold text-[#0B0F19]">

          Delete Graduate

        </h2>

        <p className="mt-5 text-gray-500">

          Are you sure you want to delete

          <span className="font-semibold text-[#1B3A6B]">

            {" "}
            {graduate?.name}

          </span>

          ?

        </p>

        <div className="mt-8 flex justify-end gap-3">

          <button
            onClick={onClose}
            className="rounded-xl bg-[#F5F0E8] px-5 py-3"
          >
            Cancel
          </button>

          <button
            onClick={onDelete}
            className="rounded-xl bg-[#C8955A] px-5 py-3 text-white"
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}