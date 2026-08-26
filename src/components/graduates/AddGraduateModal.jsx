"use client";

import { useEffect, useState } from "react";

const initialForm = {
  name: "",
  email: "",
  role: "",
  cohort: "",
  status: "Active",
  progress: "",
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
        progress: graduate.progress ?? "",
        skills: Array.isArray(graduate.skills)
          ? graduate.skills.join(", ")
          : "",
        avatar: graduate.avatar ?? "",
        bio: graduate.bio ?? "",
      });
    } else {
      setForm(initialForm);
    }
  }, [graduate, open]);

  if (!open) return null;

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const requiredFields = [
      "name",
      "email",
      "role",
      "cohort",
      "status",
      "progress",
      "skills",
      "avatar",
      "bio",
    ];

    const hasEmptyField = requiredFields.some(
      (field) => !String(form[field] ?? "").trim()
    );

    if (hasEmptyField) {
      return;
    }

    const progressNumber = Number(form.progress);

    if (
      Number.isNaN(progressNumber) ||
      progressNumber < 0 ||
      progressNumber > 100
    ) {
      return;
    }

    const skillsArray = form.skills
      .split(",")
      .map((skill) => skill.trim())
      .filter(Boolean);

    if (skillsArray.length === 0) {
      return;
    }

    onSave({
      ...form,
      progress: progressNumber,
      skills: skillsArray,
    });
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B0F19]/70 p-3 sm:p-6">
      <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto bg-white">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#F5F0E8] bg-white px-5 py-4 sm:px-8 sm:py-6">
          <h2 className="text-xl font-bold text-[#0B0F19] sm:text-3xl">
            {graduate ? "Edit Graduate" : "Add Graduate"}
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 cursor-pointer items-center justify-center text-3xl text-[#1B3A6B]"
          >
            ×
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid gap-4 p-5 sm:gap-5 sm:p-8 md:grid-cols-2"
        >
          <input
            required
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full border border-[#F5F0E8] p-3 outline-none focus:border-[#C8955A]"
          />

          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full border border-[#F5F0E8] p-3 outline-none focus:border-[#C8955A]"
          />

          <input
            required
            name="role"
            value={form.role}
            onChange={handleChange}
            placeholder="Role"
            className="w-full border border-[#F5F0E8] p-3 outline-none focus:border-[#C8955A]"
          />

          <input
            required
            name="cohort"
            value={form.cohort}
            onChange={handleChange}
            placeholder="Cohort"
            className="w-full border border-[#F5F0E8] p-3 outline-none focus:border-[#C8955A]"
          />

          <input
            required
            min="0"
            max="100"
            type="number"
            name="progress"
            value={form.progress}
            onChange={handleChange}
            placeholder="Progress (0 - 100)"
            className="w-full border border-[#F5F0E8] p-3 outline-none focus:border-[#C8955A]"
          />

          <select
            required
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full border border-[#F5F0E8] bg-white p-3 outline-none focus:border-[#C8955A]"
          >
            <option value="Active">Active</option>
            <option value="Alumni">Alumni</option>
            <option value="Inactive">Inactive</option>
          </select>

          <input
            required
            name="avatar"
            value={form.avatar}
            onChange={handleChange}
            placeholder="/images/avatar.jpg"
            className="w-full border border-[#F5F0E8] p-3 outline-none focus:border-[#C8955A] md:col-span-2"
          />

          <textarea
            required
            rows={4}
            name="bio"
            value={form.bio}
            onChange={handleChange}
            placeholder="Biography"
            className="w-full resize-none border border-[#F5F0E8] p-3 outline-none focus:border-[#C8955A] md:col-span-2"
          />

          <input
            required
            name="skills"
            value={form.skills}
            onChange={handleChange}
            placeholder="React, Next.js, Tailwind"
            className="w-full border border-[#F5F0E8] p-3 outline-none focus:border-[#C8955A] md:col-span-2"
          />

          <div className="sticky bottom-0 flex flex-col-reverse gap-3 border-t border-[#F5F0E8] bg-white pt-5 sm:flex-row sm:justify-end md:col-span-2">
            <button
              type="button"
              onClick={onClose}
              className="w-full cursor-pointer bg-[#F5F0E8] px-6 py-3 text-[#0B0F19] sm:w-auto"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="w-full cursor-pointer bg-[#1B3A6B] px-6 py-3 font-semibold text-white transition hover:bg-[#C8955A] sm:w-auto"
            >
              {graduate ? "Update Graduate" : "Add Graduate"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}