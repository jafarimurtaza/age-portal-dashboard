"use client";

import React, { useState } from "react";

const initialForm = {
  name: "",
  code: "",
  start: "",
  end: "",
  graduates: "",
  projects: "",
  category: "",
  status: "",
  iconType: "",
};

export default function AddCohortDrawer({
  open,
  onClose,
  onSubmit,
}) {
  const [form, setForm] = useState(initialForm);

  if (!open) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClose = () => {
    setForm(initialForm);
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name.trim() ||
      !form.code.trim() ||
      !form.start ||
      !form.end ||
      !form.category ||
      !form.status
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    const newCohort = {
      id: Date.now(),
      name: form.name,
      code: form.code,
      start: form.start,
      end: form.end,
      graduates: Number(form.graduates) || 0,
      projects: Number(form.projects) || 0,
      category: form.category,
      status: form.status,
      iconType: form.iconType || "default",
    };

    onSubmit(newCohort);
    setForm(initialForm);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex justify-end bg-black/50 backdrop-blur-sm">
      {/* Drawer */}
      <div
        className="
          relative h-full w-full max-w-[620px]
          overflow-y-auto
          border-l border-[#7DB5E8]/30
          bg-gradient-to-br
          from-[#071A35]
          via-[#073B73]
          to-[#0A5A91]
          shadow-[-15px_0_50px_rgba(0,0,0,0.45)]
        "
      >
        {/* Header */}
        <div className="sticky top-0 z-20 border-b border-[#7DB5E8]/40 bg-[#06182F]/85 px-7 py-6 backdrop-blur-md">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-[30px] font-bold tracking-tight text-white">
                Add Cohort
              </h2>

              <p className="mt-1 text-[15px] text-[#D7E7F7]">
                Create a new cohort and manage its information.
              </p>
            </div>

            <button
              type="button"
              onClick={handleClose}
              className="
                flex h-[46px] w-[46px]
                items-center justify-center
                rounded-full
                border border-[#8EC5F5]/60
                text-[23px]
                text-white
                transition-all duration-200
                hover:rotate-90
                hover:bg-white/15
              "
            >
              ×
            </button>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5 px-7 py-7"
        >
          {/* Cohort Name */}
          <div>
            <label className="mb-2 block text-[15px] font-semibold text-[#F6D29A]">
              Cohort Name
            </label>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="e.g. Web Development Cohort"
              className="
                h-[55px] w-full
                rounded-xl
                border border-[#8DC2EC]/70
                bg-white/10
                px-4
                text-[16px] font-medium text-white
                outline-none
                placeholder:text-[#B8C8D8]
                transition-all duration-200
                focus:border-[#F6D29A]
                focus:bg-white/15
                focus:ring-4 focus:ring-[#F6D29A]/10
              "
            />
          </div>

          {/* Cohort Code */}
          <div>
            <label className="mb-2 block text-[15px] font-semibold text-[#F6D29A]">
              Cohort Code
            </label>

            <input
              type="text"
              name="code"
              value={form.code}
              onChange={handleChange}
              placeholder="e.g. WD-2026-01"
              className="
                h-[55px] w-full
                rounded-xl
                border border-[#8DC2EC]/70
                bg-white/10
                px-4
                text-[16px] font-medium text-white
                outline-none
                placeholder:text-[#B8C8D8]
                transition-all
                focus:border-[#F6D29A]
                focus:bg-white/15
                focus:ring-4 focus:ring-[#F6D29A]/10
              "
            />
          </div>

          {/* Dates */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-[15px] font-semibold text-[#F6D29A]">
                Start Date
              </label>

              <input
                type="date"
                name="start"
                value={form.start}
                onChange={handleChange}
                className="
                  h-[55px] w-full
                  rounded-xl
                  border border-[#8DC2EC]/70
                  bg-white/10
                  px-4
                  text-[15px] font-medium text-white
                  outline-none
                  transition-all
                  focus:border-[#F6D29A]
                  focus:bg-white/15
                "
              />
            </div>

            <div>
              <label className="mb-2 block text-[15px] font-semibold text-[#F6D29A]">
                End Date
              </label>

              <input
                type="date"
                name="end"
                value={form.end}
                onChange={handleChange}
                className="
                  h-[55px] w-full
                  rounded-xl
                  border border-[#8DC2EC]/70
                  bg-white/10
                  px-4
                  text-[15px] font-medium text-white
                  outline-none
                  transition-all
                  focus:border-[#F6D29A]
                  focus:bg-white/15
                "
              />
            </div>
          </div>

          {/* Graduates & Projects */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-[15px] font-semibold text-[#F6D29A]">
                Graduates
              </label>

              <input
                type="number"
                name="graduates"
                min="0"
                value={form.graduates}
                onChange={handleChange}
                placeholder="0"
                className="
                  h-[55px] w-full
                  rounded-xl
                  border border-[#8DC2EC]/70
                  bg-white/10
                  px-4
                  text-[16px] font-medium text-white
                  outline-none
                  placeholder:text-[#B8C8D8]
                  transition-all
                  focus:border-[#F6D29A]
                  focus:bg-white/15
                "
              />
            </div>

            <div>
              <label className="mb-2 block text-[15px] font-semibold text-[#F6D29A]">
                Projects
              </label>

              <input
                type="number"
                name="projects"
                min="0"
                value={form.projects}
                onChange={handleChange}
                placeholder="0"
                className="
                  h-[55px] w-full
                  rounded-xl
                  border border-[#8DC2EC]/70
                  bg-white/10
                  px-4
                  text-[16px] font-medium text-white
                  outline-none
                  placeholder:text-[#B8C8D8]
                  transition-all
                  focus:border-[#F6D29A]
                  focus:bg-white/15
                "
              />
            </div>
          </div>

          {/* Category */}
          <div>
            <label className="mb-2 block text-[15px] font-semibold text-[#F6D29A]">
              Category
            </label>

            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="
                h-[55px] w-full
                rounded-xl
                border border-[#8DC2EC]/70
                bg-[#0B3764]
                px-4
                text-[16px] font-medium text-white
                outline-none
                transition-all
                focus:border-[#F6D29A]
              "
            >
              <option value="">Select Category</option>
              <option value="Technology">Technology</option>
              <option value="Data Science">Data Science</option>
              <option value="Design">Design</option>
              <option value="Business">Business</option>
              <option value="Marketing">Marketing</option>
            </select>
          </div>

          {/* Status */}
          <div>
            <label className="mb-2 block text-[15px] font-semibold text-[#F6D29A]">
              Status
            </label>

            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="
                h-[55px] w-full
                rounded-xl
                border border-[#8DC2EC]/70
                bg-[#0B3764]
                px-4
                text-[16px] font-medium text-white
                outline-none
                transition-all
                focus:border-[#F6D29A]
              "
            >
              <option value="">Select Status</option>
              <option value="Active">Active</option>
              <option value="Upcoming">Upcoming</option>
              <option value="Completed">Completed</option>
              <option value="Pending">Pending</option>
            </select>
          </div>

          {/* Icon Type */}
          <div>
            <label className="mb-2 block text-[15px] font-semibold text-[#F6D29A]">
              Icon Type
            </label>

            <select
              name="iconType"
              value={form.iconType}
              onChange={handleChange}
              className="
                h-[55px] w-full
                rounded-xl
                border border-[#8DC2EC]/70
                bg-[#0B3764]
                px-4
                text-[16px] font-medium text-white
                outline-none
                transition-all
                focus:border-[#F6D29A]
              "
            >
              <option value="">Select Icon</option>
              <option value="code">Code</option>
              <option value="data">Data</option>
              <option value="design">Design</option>
              <option value="business">Business</option>
              <option value="marketing">Marketing</option>
            </select>
          </div>

          {/* Small Buttons */}
          <div className="flex justify-end gap-3 border-t border-white/15 pt-5">
            <button
              type="button"
              onClick={handleClose}
              className="
                rounded-lg
                border border-[#8EC5F5]/50
                bg-white/5
                px-5 py-2.5
                text-sm font-medium text-white
                transition-all
                hover:bg-white/10
              "
            >
              Cancel
            </button>

            <button
              type="submit"
              className="
                rounded-lg bg-[#C8955A]px-5 py-2.5 text-sm font-semibold text-[#0B0F19]shadow-[0_5px_15px_rgba(200,149,90,0.3)]
                transition-all duration-200 hover:bg-[#E0AD70]hover:-translate-y-[1px]hover:shadow-[0_8px_20px_rgba(200,149,90,0.4)]
                active:translate-y-0
              "
            >
              Add Cohort 
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

