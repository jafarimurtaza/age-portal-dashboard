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
        graduates: cohort.graduates || "",
        projects: cohort.projects || "",
        category: cohort.category || "Technology",
        status: cohort.status || "Active",
      });
    }
  }, [cohort]);

  if (!open) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
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
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40">
      <div className="h-full w-full max-w-md overflow-y-auto bg-white shadow-xl">

        <div className="flex items-center justify-between border-b px-6 py-5">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Edit Cohort
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Update cohort information
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-2xl text-gray-400 hover:text-gray-700"
          >
            ×
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 p-6"
        >
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Cohort Name
            </label>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="e.g. Web Development Cohort 1"
              className="w-full rounded-lg border px-3 py-2.5 outline-none focus:border-purple-500"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Cohort Code
            </label>

            <input
              type="text"
              name="code"
              value={form.code}
              onChange={handleChange}
              placeholder="e.g. WD-2026-01"
              className="w-full rounded-lg border px-3 py-2.5 outline-none focus:border-purple-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Start Date
              </label>

              <input
                type="date"
                name="start"
                value={form.start}
                onChange={handleChange}
                className="w-full rounded-lg border px-3 py-2.5 outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                End Date
              </label>

              <input
                type="date"
                name="end"
                value={form.end}
                onChange={handleChange}
                className="w-full rounded-lg border px-3 py-2.5 outline-none focus:border-purple-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Graduates
              </label>

              <input
                type="number"
                name="graduates"
                min="0"
                value={form.graduates}
                onChange={handleChange}
                className="w-full rounded-lg border px-3 py-2.5 outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Projects
              </label>

              <input
                type="number"
                name="projects"
                min="0"
                value={form.projects}
                onChange={handleChange}
                className="w-full rounded-lg border px-3 py-2.5 outline-none focus:border-purple-500"
              />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Category
            </label>

            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full rounded-lg border px-3 py-2.5 outline-none focus:border-purple-500"
            >
              <option value="Technology">
                Technology
              </option>

              <option value="Web Development">
                Web Development
              </option>

              <option value="Mobile Development">
                Mobile Development
              </option>

              <option value="Design">
                Design
              </option>

              <option value="Business">
                Business
              </option>
            </select>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Status
            </label>

            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="w-full rounded-lg border px-3 py-2.5 outline-none focus:border-purple-500"
            >
              <option value="Active">
                Active
              </option>

              <option value="Completed">
                Completed
              </option>

              <option value="Upcoming">
                Upcoming
              </option>
            </select>
          </div>

          <div className="flex gap-3 border-t pt-5">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-lg border px-4 py-2.5 font-medium text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="flex-1 rounded-lg bg-purple-600 px-4 py-2.5 font-medium text-white hover:bg-purple-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}