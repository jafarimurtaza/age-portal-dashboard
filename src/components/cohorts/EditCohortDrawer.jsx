"use client";

import React, { useEffect, useState } from "react";

const emptyForm = {
  name: "",
  code: "",
  start: "",
  end: "",
  graduates: "",
  projects: "",
  category: "Technology",
  status: "Active",
};

const categoryColors = {
  Technology: "bg-[#EAF1FB] text-[#1B3A6B]",
  "Data Science": "bg-[#FFF1D7] text-[#C8955A]",
  Design: "bg-[#FCE8E3] text-[#B85C4A]",
};

export default function EditCohortDrawer({
  open,
  onClose,
  cohort,
  onSubmit,
}) {
  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    if (cohort) {
      setForm({
        name: cohort.name || "",
        code: cohort.code || "",
        start: cohort.start || "",
        end: cohort.end || "",
        graduates: cohort.graduates ?? "",
        projects: cohort.projects ?? "",
        category: cohort.category || "Technology",
        status: cohort.status || "Active",
      });
    }
  }, [cohort]);

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

    if (!form.name.trim() || !form.code.trim()) {
      alert("Please enter cohort name and code.");
      return;
    }

    onSubmit({
      ...cohort,
      ...form,
      graduates: Number(form.graduates) || 0,
      projects: Number(form.projects) || 0,
      categoryColor:
        categoryColors[form.category] ||
        categoryColors.Technology,
    });
  }

  return (
    <div className="fixed inset-0 z-50">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#0B0F19]/40 backdrop-blur-[2px]"
      />

      <aside className="absolute right-0 top-0 h-full w-full max-w-[480px] overflow-y-auto bg-[#FAF7F2] shadow-2xl">
        <div className="flex items-center justify-between border-b border-[#E5DED3] bg-white px-6 py-5">
          <div>
            <h2 className="text-[20px] font-bold text-[#0B0F19]">
              Edit Cohort
            </h2>

            <p className="mt-1 text-[13px] text-[#68708A]">
              Update cohort information.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full text-[25px] text-[#68708A] transition hover:bg-[#F5F0E8] hover:text-[#0B0F19]"
          >
            ×
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 p-6"
        >
          <div>
            <label className="mb-2 block text-[13px] font-semibold text-[#0B0F19]">
              Cohort Name *
            </label>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="e.g. Web Development Bootcamp"
              className="h-[44px] w-full rounded-[8px] border border-[#DED8CE] bg-white px-3 text-[14px] text-[#0B0F19] outline-none transition focus:border-[#1B3A6B] focus:ring-2 focus:ring-[#1B3A6B]/10"
            />
          </div>

          <div>
            <label className="mb-2 block text-[13px] font-semibold text-[#0B0F19]">
              Cohort Code *
            </label>

            <input
              type="text"
              name="code"
              value={form.code}
              onChange={handleChange}
              placeholder="e.g. WD-2026-01"
              className="h-[44px] w-full rounded-[8px] border border-[#DED8CE] bg-white px-3 text-[14px] text-[#0B0F19] outline-none transition focus:border-[#1B3A6B] focus:ring-2 focus:ring-[#1B3A6B]/10"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-2 block text-[13px] font-semibold text-[#0B0F19]">
                Start Date
              </label>

              <input
                type="date"
                name="start"
                value={form.start}
                onChange={handleChange}
                className="h-[44px] w-full rounded-[8px] border border-[#DED8CE] bg-white px-3 text-[14px] text-[#0B0F19] outline-none focus:border-[#1B3A6B]"
              />
            </div>

            <div>
              <label className="mb-2 block text-[13px] font-semibold text-[#0B0F19]">
                End Date
              </label>

              <input
                type="date"
                name="end"
                value={form.end}
                onChange={handleChange}
                className="h-[44px] w-full rounded-[8px] border border-[#DED8CE] bg-white px-3 text-[14px] text-[#0B0F19] outline-none focus:border-[#1B3A6B]"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-2 block text-[13px] font-semibold text-[#0B0F19]">
                Graduates
              </label>

              <input
                type="number"
                min="0"
                name="graduates"
                value={form.graduates}
                onChange={handleChange}
                className="h-[44px] w-full rounded-[8px] border border-[#DED8CE] bg-white px-3 text-[14px] outline-none focus:border-[#1B3A6B]"
              />
            </div>

            <div>
              <label className="mb-2 block text-[13px] font-semibold text-[#0B0F19]">
                Projects
              </label>

              <input
                type="number"
                min="0"
                name="projects"
                value={form.projects}
                onChange={handleChange}
                className="h-[44px] w-full rounded-[8px] border border-[#DED8CE] bg-white px-3 text-[14px] outline-none focus:border-[#1B3A6B]"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-[13px] font-semibold text-[#0B0F19]">
              Category
            </label>

            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="h-[44px] w-full rounded-[8px] border border-[#DED8CE] bg-white px-3 text-[14px] outline-none focus:border-[#1B3A6B]"
            >
              <option value="Technology">Technology</option>
              <option value="Data Science">Data Science</option>
              <option value="Design">Design</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-[13px] font-semibold text-[#0B0F19]">
              Status
            </label>

            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="h-[44px] w-full rounded-[8px] border border-[#DED8CE] bg-white px-3 text-[14px] outline-none focus:border-[#1B3A6B]"
            >
              <option value="Active">Active</option>
              <option value="Completed">Completed</option>
              <option value="Upcoming">Upcoming</option>
            </select>
          </div>

          <div className="flex gap-3 border-t border-[#E5DED3] pt-5">
            <button
              type="button"
              onClick={onClose}
              className="h-[44px] flex-1 rounded-[8px] border border-[#DED8CE] bg-white text-[14px] font-semibold text-[#0B0F19] transition hover:border-[#1B3A6B]"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="h-[44px] flex-1 rounded-[8px] bg-[#1B3A6B] text-[14px] font-semibold text-white transition hover:bg-[#142C52]"
            >
              Save Changes
            </button>
          </div>
        </form>
      </aside>
    </div>
  );
}