"use client";

import React, { useState } from "react";

const initialForm = {
  name: "",
  code: "",
  start: "",
  end: "",
  graduates: "",
  projects: "",
  category: "Technology",
  status: "Active",
  iconColor: "purple",
  iconType: "web",
};

export default function AddCohortDrawer({
  open,
  onClose,
  onSubmit,
}) {
  const [form, setForm] = useState(initialForm);

  if (!open) return null;

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.name || !form.code || !form.start || !form.end) {
      alert("Please fill in all required fields.");
      return;
    }

    const categoryColors = {
      Technology: "bg-[#EEE8FF] text-[#5B2BEE]",
      "Data Science": "bg-[#FFF1D7] text-[#F59E0B]",
      Design: "bg-[#FFE8EE] text-[#E5486D]",
    };

    onSubmit({
      ...form,
      graduates: Number(form.graduates) || 0,
      projects: Number(form.projects) || 0,
      categoryColor:
        categoryColors[form.category] ||
        "bg-[#EEE8FF] text-[#5B2BEE]",
    });

    setForm(initialForm);
  }

  return (
    <div className="fixed inset-0 z-50">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"
      />

      <aside
        className="
          absolute
          right-0
          top-0
          h-full
          w-full
          max-w-[480px]
          overflow-y-auto
          bg-white
          shadow-2xl
        "
      >
        <div className="flex items-center justify-between border-b border-[#E7E8F0] px-6 py-5">
          <div>
            <h2 className="text-[20px] font-bold text-[#11142D]">
              Add Cohort
            </h2>

            <p className="mt-1 text-[13px] text-[#68708A]">
              Create a new cohort.
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-[24px] text-[#68708A] transition hover:text-[#11142D]"
          >
            ×
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 p-6"
        >
          <div>
            <label className="mb-2 block text-[13px] font-semibold text-[#11142D]">
              Cohort Name *
            </label>

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="e.g. Web Development Bootcamp"
              className="h-[44px] w-full rounded-[8px] border border-[#E1E3EC] px-3 text-[14px] outline-none focus:border-[#5B2BEE]"
            />
          </div>

          <div>
            <label className="mb-2 block text-[13px] font-semibold text-[#11142D]">
              Cohort Code *
            </label>

            <input
              name="code"
              value={form.code}
              onChange={handleChange}
              placeholder="e.g. WD-2024-01"
              className="h-[44px] w-full rounded-[8px] border border-[#E1E3EC] px-3 text-[14px] outline-none focus:border-[#5B2BEE]"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-2 block text-[13px] font-semibold text-[#11142D]">
                Start Date *
              </label>

              <input
                type="date"
                name="start"
                value={form.start}
                onChange={handleChange}
                className="h-[44px] w-full rounded-[8px] border border-[#E1E3EC] px-3 text-[14px] outline-none focus:border-[#5B2BEE]"
              />
            </div>

            <div>
              <label className="mb-2 block text-[13px] font-semibold text-[#11142D]">
                End Date *
              </label>

              <input
                type="date"
                name="end"
                value={form.end}
                onChange={handleChange}
                className="h-[44px] w-full rounded-[8px] border border-[#E1E3EC] px-3 text-[14px] outline-none focus:border-[#5B2BEE]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-2 block text-[13px] font-semibold text-[#11142D]">
                Graduates
              </label>

              <input
                type="number"
                name="graduates"
                value={form.graduates}
                onChange={handleChange}
                className="h-[44px] w-full rounded-[8px] border border-[#E1E3EC] px-3 text-[14px] outline-none focus:border-[#5B2BEE]"
              />
            </div>

            <div>
              <label className="mb-2 block text-[13px] font-semibold text-[#11142D]">
                Projects
              </label>

              <input
                type="number"
                name="projects"
                value={form.projects}
                onChange={handleChange}
                className="h-[44px] w-full rounded-[8px] border border-[#E1E3EC] px-3 text-[14px] outline-none focus:border-[#5B2BEE]"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-[13px] font-semibold text-[#11142D]">
              Category
            </label>

            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="h-[44px] w-full rounded-[8px] border border-[#E1E3EC] px-3 text-[14px] outline-none focus:border-[#5B2BEE]"
            >
              <option>Technology</option>
              <option>Data Science</option>
              <option>Design</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-[13px] font-semibold text-[#11142D]">
              Status
            </label>

            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="h-[44px] w-full rounded-[8px] border border-[#E1E3EC] px-3 text-[14px] outline-none focus:border-[#5B2BEE]"
            >
              <option>Active</option>
              <option>Completed</option>
              <option>Pending</option>
              <option>Archived</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-[13px] font-semibold text-[#11142D]">
              Icon Type
            </label>

            <select
              name="iconType"
              value={form.iconType}
              onChange={handleChange}
              className="h-[44px] w-full rounded-[8px] border border-[#E1E3EC] px-3 text-[14px] outline-none focus:border-[#5B2BEE]"
            >
              <option value="web">Web Development</option>
              <option value="mobile">Mobile App</option>
              <option value="data">Data Science</option>
              <option value="design">UI/UX Design</option>
              <option value="cloud">Cloud Computing</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-[13px] font-semibold text-[#11142D]">
              Icon Color
            </label>

            <select
              name="iconColor"
              value={form.iconColor}
              onChange={handleChange}
              className="h-[44px] w-full rounded-[8px] border border-[#E1E3EC] px-3 text-[14px] outline-none focus:border-[#5B2BEE]"
            >
              <option value="purple">Purple</option>
              <option value="green">Green</option>
              <option value="orange">Orange</option>
              <option value="pink">Pink</option>
              <option value="blue">Blue</option>
            </select>
          </div>

          <div className="flex gap-3 border-t border-[#E7E8F0] pt-5">
            <button
              type="button"
              onClick={onClose}
              className="h-[44px] flex-1 rounded-[8px] border border-[#E1E3EC] text-[14px] font-semibold text-[#11142D] transition hover:border-[#5B2BEE]"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="h-[44px] flex-1 rounded-[8px] bg-[#4B21E8] text-[14px] font-semibold text-white transition hover:bg-[#3F1BC7]"
            >
              Create Cohort
            </button>
          </div>
        </form>
      </aside>
    </div>
  );
}