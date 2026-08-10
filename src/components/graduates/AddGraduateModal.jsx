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
        skills: graduate.skills.join(", "),
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-5">

      <div className="w-full max-w-3xl rounded-3xl bg-white p-8">

        <div className="mb-8 flex items-center justify-between">

          <h2 className="text-3xl font-bold text-[#0B0F19]">

            {graduate ? "Edit Graduate" : "Add Graduate"}

          </h2>

          <button
            onClick={onClose}
            className="text-2xl text-[#1B3A6B]"
          >
            ×
          </button>

        </div>

        <form
          onSubmit={handleSubmit}
          className="grid gap-5 md:grid-cols-2"
        >

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            className="rounded-xl border border-[#F5F0E8] p-3"
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="rounded-xl border border-[#F5F0E8] p-3"
          />

          <input
            name="role"
            value={form.role}
            onChange={handleChange}
            placeholder="Role"
            className="rounded-xl border border-[#F5F0E8] p-3"
          />

          <input
            name="cohort"
            value={form.cohort}
            onChange={handleChange}
            placeholder="Cohort"
            className="rounded-xl border border-[#F5F0E8] p-3"
          />

          <input
            name="progress"
            type="number"
            value={form.progress}
            onChange={handleChange}
            placeholder="Progress"
            className="rounded-xl border border-[#F5F0E8] p-3"
          />

          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="rounded-xl border border-[#F5F0E8] p-3"
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
            className="rounded-xl border border-[#F5F0E8] p-3 md:col-span-2"
          />

          <textarea
            rows={3}
            name="bio"
            value={form.bio}
            onChange={handleChange}
            placeholder="Biography"
            className="rounded-xl border border-[#F5F0E8] p-3 md:col-span-2"
          />

          <input
            name="skills"
            value={form.skills}
            onChange={handleChange}
            placeholder="React, Next.js, Tailwind"
            className="rounded-xl border border-[#F5F0E8] p-3 md:col-span-2"
          />

          <div className="mt-2 flex justify-end gap-3 md:col-span-2">

            <button
              type="button"
              onClick={onClose}
              className="rounded-xl bg-[#F5F0E8] px-6 py-3"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-xl bg-[#1B3A6B] px-6 py-3 font-semibold text-white hover:bg-[#C8955A]"
            >
              Save
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}