// components/graduates/AddGraduateModal.jsx

"use client";

import { useEffect, useState } from "react";

const initialForm = {
  name: "",
  email: "",
  role: "",
  cohort: "",
  status: "Active",
  progress: 0,
  skills: "",
  avatar: "",
  bio: "",
};

export default function AddGraduateModal({
  open,
  onClose,
  onSave,
  graduate,
}) {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (graduate) {
      setForm({
        ...graduate,
        skills: Array.isArray(graduate.skills)
          ? graduate.skills.join(", ")
          : graduate.skills || "",
      });
    } else {
      setForm(initialForm);
    }
  }, [graduate]);

  if (!open) return null;

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    onSave({
      ...form,
      progress: Number(form.progress),
      skills: form.skills
        .split(",")
        .map((skill) => skill.trim())
        .filter(Boolean),
    });
  }

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        h-screen
        w-full
        items-start
        justify-center
        overflow-y-auto
        bg-[#0B0F19]/60
        p-3
        sm:items-center
        sm:p-5
        md:p-8
      "
    >
      <div
        className="
          my-2
          flex
          max-h-[calc(100vh-1rem)]
          w-full
          max-w-3xl
          flex-col
          overflow-hidden
          rounded-2xl
          bg-white
          shadow-2xl
          sm:my-0
          sm:max-h-[calc(100vh-2.5rem)]
          sm:rounded-3xl
          md:max-h-[calc(100vh-4rem)]
        "
      >
        {/* Header */}
        <div
          className="
            flex
            shrink-0
            items-center
            justify-between
            border-b
            border-[#F5F0E8]
            bg-white
            px-4
            py-4
            sm:px-6
            sm:py-5
            md:px-8
          "
        >
          <h2
            className="
              pr-3
              text-xl
              font-bold
              leading-tight
              text-[#0B0F19]
              sm:text-2xl
              md:text-3xl
            "
          >
            {graduate ? "Edit Graduate" : "Add Graduate"}
          </h2>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="
              flex
              h-9
              w-9
              shrink-0
              cursor-pointer
              items-center
              justify-center
              rounded-xl
              text-2xl
              leading-none
              text-[#1B3A6B]
              transition
              hover:bg-[#F5F0E8]
            "
          >
            ×
          </button>
        </div>

        {/* Scrollable Form */}
        <div
          className="
            min-h-0
            flex-1
            overflow-y-auto
            overscroll-contain
            px-4
            py-5
            sm:px-6
            sm:py-6
            md:px-8
          "
        >
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2"
          >
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              className="
                min-w-0
                rounded-xl
                border
                border-[#F5F0E8]
                p-3
                outline-none
                focus:border-[#C8955A]
                sm:p-3.5
              "
            />

            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="
                min-w-0
                rounded-xl
                border
                border-[#F5F0E8]
                p-3
                outline-none
                focus:border-[#C8955A]
                sm:p-3.5
              "
            />

            <input
              name="role"
              value={form.role}
              onChange={handleChange}
              placeholder="Role"
              className="
                min-w-0
                rounded-xl
                border
                border-[#F5F0E8]
                p-3
                outline-none
                focus:border-[#C8955A]
                sm:p-3.5
              "
            />

            <input
              name="cohort"
              value={form.cohort}
              onChange={handleChange}
              placeholder="Cohort"
              className="
                min-w-0
                rounded-xl
                border
                border-[#F5F0E8]
                p-3
                outline-none
                focus:border-[#C8955A]
                sm:p-3.5
              "
            />

            <input
              name="progress"
              type="number"
              min="0"
              max="100"
              value={form.progress}
              onChange={handleChange}
              placeholder="Progress"
              className="
                min-w-0
                rounded-xl
                border
                border-[#F5F0E8]
                p-3
                outline-none
                focus:border-[#C8955A]
                sm:p-3.5
              "
            />

            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="
                min-w-0
                rounded-xl
                border
                border-[#F5F0E8]
                bg-white
                p-3
                outline-none
                focus:border-[#C8955A]
                sm:p-3.5
              "
            >
              <option>Active</option>
              <option>Alumni</option>
              <option>Inactive</option>
            </select>

            <input
              name="avatar"
              value={form.avatar}
              onChange={handleChange}
              placeholder="/images/avatar.jpg"
              className="
                min-w-0
                rounded-xl
                border
                border-[#F5F0E8]
                p-3
                outline-none
                focus:border-[#C8955A]
                md:col-span-2
                sm:p-3.5
              "
            />

            <textarea
              rows={3}
              name="bio"
              value={form.bio}
              onChange={handleChange}
              placeholder="Biography"
              className="
                min-h-[90px]
                min-w-0
                resize-y
                rounded-xl
                border
                border-[#F5F0E8]
                p-3
                outline-none
                focus:border-[#C8955A]
                md:col-span-2
                sm:p-3.5
              "
            />

            <input
              name="skills"
              value={form.skills}
              onChange={handleChange}
              placeholder="React, Next.js, Tailwind"
              className="
                min-w-0
                rounded-xl
                border
                border-[#F5F0E8]
                p-3
                outline-none
                focus:border-[#C8955A]
                md:col-span-2
                sm:p-3.5
              "
            />

            {/* Buttons */}
            <div
              className="
                flex
                flex-col-reverse
                gap-3
                border-t
                border-[#F5F0E8]
                pt-5
                md:col-span-2
                sm:flex-row
                sm:justify-end
              "
            >
              <button
                type="button"
                onClick={onClose}
                className="
                  w-full
                  cursor-pointer
                  rounded-xl
                  bg-[#F5F0E8]
                  px-6
                  py-3
                  font-medium
                  transition
                  hover:bg-[#C8955A]
                  sm:w-auto
                "
              >
                Cancel
              </button>

              <button
                type="submit"
                className="
                  w-full
                  cursor-pointer
                  rounded-xl
                  bg-[#1B3A6B]
                  px-6
                  py-3
                  font-semibold
                  text-white
                  transition
                  hover:bg-[#C8955A]
                  sm:w-auto
                "
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}