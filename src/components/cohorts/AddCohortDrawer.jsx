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
  iconType: "web",
};

export default function AddCohortDrawer({ open, onClose, onSubmit }) {
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

    if (
      !form.name.trim() ||
      !form.code.trim() ||
      !form.start ||
      !form.end
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    onSubmit({
      ...form,
      graduates: Number(form.graduates) || 0,
      projects: Number(form.projects) || 0,
<<<<<<< HEAD
=======
      categoryColor:
        categoryColors[form.category] || "bg-[#EEE8FF] text-[#5B2BEE]",
>>>>>>> 8574ca86792302ab87a57e7fd7ef456f4a882f7a
    });

    setForm(initialForm);
  }

  return (
    <div className="fixed inset-0 z-[100]">

      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-[3px]"
      />

<<<<<<< HEAD
      <aside
        className="
          absolute
          right-0
          top-0
          h-full
          w-full
          max-w-[480px]
          overflow-y-auto
          border-l
          border-[#28445F]
          bg-[#08223F]
          text-white
          shadow-[-15px_0_45px_rgba(0,0,0,0.35)]
        "
      >

        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#28445F] bg-[#08223F] px-6 py-5">

=======
      <aside className="absolute right-0 top-0 h-full w-full max-w-[480px] overflow-y-auto bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-[#E7E8F0] px-6 py-5">
>>>>>>> 8574ca86792302ab87a57e7fd7ef456f4a882f7a
          <div>
            <h2 className="font-[var(--font-fraunces)] text-[25px] font-semibold">
              Add Cohort
            </h2>

            <p className="mt-1 text-[13px] text-[#AAB7C8]">
              Create a new cohort.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="
              flex
              h-[38px]
              w-[38px]
              items-center
              justify-center
              rounded-full
              border
              border-[#35516C]
              text-[24px]
              text-[#AAB7C8]
              transition
              hover:border-[#D9A441]
              hover:text-[#D9A441]
            "
          >
            ×
          </button>

        </div>

<<<<<<< HEAD
        <form
          onSubmit={handleSubmit}
          className="space-y-5 p-6"
        >

=======
        <form onSubmit={handleSubmit} className="space-y-5 p-6">
>>>>>>> 8574ca86792302ab87a57e7fd7ef456f4a882f7a
          <div>
            <label className="mb-2 block text-[13px] font-semibold text-[#D9A441]">
              Cohort Name *
            </label>

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="e.g. Web Development Bootcamp"
              className="
                h-[46px]
                w-full
                rounded-[7px]
                border
                border-[#35516C]
                bg-[#061B35]
                px-4
                text-[14px]
                text-white
                outline-none
                placeholder:text-[#718399]
                focus:border-[#D9A441]
              "
            />
          </div>

          <div>
            <label className="mb-2 block text-[13px] font-semibold text-[#D9A441]">
              Cohort Code *
            </label>

            <input
              name="code"
              value={form.code}
              onChange={handleChange}
              placeholder="e.g. WD-2026-01"
              className="
                h-[46px]
                w-full
                rounded-[7px]
                border
                border-[#35516C]
                bg-[#061B35]
                px-4
                text-[14px]
                text-white
                outline-none
                placeholder:text-[#718399]
                focus:border-[#D9A441]
              "
            />
          </div>

          <div className="grid grid-cols-2 gap-4">

            <div>
              <label className="mb-2 block text-[13px] font-semibold text-[#D9A441]">
                Start Date *
              </label>

              <input
                type="date"
                name="start"
                value={form.start}
                onChange={handleChange}
                className="
                  h-[46px]
                  w-full
                  rounded-[7px]
                  border
                  border-[#35516C]
                  bg-[#061B35]
                  px-3
                  text-[13px]
                  text-white
                  outline-none
                  focus:border-[#D9A441]
                "
              />
            </div>

            <div>
              <label className="mb-2 block text-[13px] font-semibold text-[#D9A441]">
                End Date *
              </label>

              <input
                type="date"
                name="end"
                value={form.end}
                onChange={handleChange}
                className="
                  h-[46px]
                  w-full
                  rounded-[7px]
                  border
                  border-[#35516C]
                  bg-[#061B35]
                  px-3
                  text-[13px]
                  text-white
                  outline-none
                  focus:border-[#D9A441]
                "
              />
            </div>

          </div>

          <div className="grid grid-cols-2 gap-4">

            <div>
              <label className="mb-2 block text-[13px] font-semibold text-[#D9A441]">
                Graduates
              </label>

              <input
                type="number"
                min="0"
                name="graduates"
                value={form.graduates}
                onChange={handleChange}
                className="
                  h-[46px]
                  w-full
                  rounded-[7px]
                  border
                  border-[#35516C]
                  bg-[#061B35]
                  px-4
                  text-[14px]
                  text-white
                  outline-none
                  focus:border-[#D9A441]
                "
              />
            </div>

            <div>
              <label className="mb-2 block text-[13px] font-semibold text-[#D9A441]">
                Projects
              </label>

              <input
                type="number"
                min="0"
                name="projects"
                value={form.projects}
                onChange={handleChange}
                className="
                  h-[46px]
                  w-full
                  rounded-[7px]
                  border
                  border-[#35516C]
                  bg-[#061B35]
                  px-4
                  text-[14px]
                  text-white
                  outline-none
                  focus:border-[#D9A441]
                "
              />
            </div>

          </div>

          <div>
            <label className="mb-2 block text-[13px] font-semibold text-[#D9A441]">
              Category
            </label>

            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="
                h-[46px]
                w-full
                rounded-[7px]
                border
                border-[#35516C]
                bg-[#061B35]
                px-4
                text-[14px]
                text-white
                outline-none
                focus:border-[#D9A441]
              "
            >
              <option>Technology</option>
              <option>Data Science</option>
              <option>Design</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-[13px] font-semibold text-[#D9A441]">
              Status
            </label>

            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="
                h-[46px]
                w-full
                rounded-[7px]
                border
                border-[#35516C]
                bg-[#061B35]
                px-4
                text-[14px]
                text-white
                outline-none
                focus:border-[#D9A441]
              "
            >
              <option>Active</option>
              <option>Completed</option>
              <option>Upcoming</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-[13px] font-semibold text-[#D9A441]">
              Icon Type
            </label>

            <select
              name="iconType"
              value={form.iconType}
              onChange={handleChange}
              className="
                h-[46px]
                w-full
                rounded-[7px]
                border
                border-[#35516C]
                bg-[#061B35]
                px-4
                text-[14px]
                text-white
                outline-none
                focus:border-[#D9A441]
              "
            >
              <option value="web">Web Development</option>
              <option value="mobile">Mobile App</option>
              <option value="data">Data Science</option>
              <option value="design">UI/UX Design</option>
              <option value="cloud">Cloud Computing</option>
              <option value="database">Database</option>
              <option value="marketing">Marketing</option>
            </select>
          </div>

          <div className="flex gap-3 border-t border-[#28445F] pt-5">

            <button
              type="button"
              onClick={onClose}
              className="
                h-[46px]
                flex-1
                rounded-[7px]
                border
                border-[#405B74]
                bg-[#061B35]
                text-[14px]
                font-semibold
                text-[#C5D0DB]
                transition
                hover:border-[#D9A441]
                hover:text-[#D9A441]
              "
            >
              Cancel
            </button>

            <button
              type="submit"
              className="
                h-[46px]
                flex-1
                rounded-[7px]
                border
                border-[#D9A441]
                bg-[#D9A441]
                text-[14px]
                font-semibold
                text-[#061B35]
                transition-all
                hover:bg-[#E7B85C]
                hover:shadow-[0_8px_20px_rgba(217,164,65,0.2)]
              "
            >
              Create Cohort
            </button>

          </div>

        </form>
      </aside>
    </div>
  );
}