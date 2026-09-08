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
  status: "Upcoming",
  iconType: "web",
};

export default function AddCohortDrawer({
  open,
  onClose,
  onSubmit,
}) {
  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    if (!open) {
      setForm(emptyForm);
    }
  }, [open]);

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
      alert("Please fill in Cohort Name and Cohort Code.");
      return;
    }

    onSubmit({
      ...form,
      graduates: Number(form.graduates) || 0,
      projects: Number(form.projects) || 0,
    });

    setForm(emptyForm);
  }

  if (!open) return null;

  return (
    <>
      {/* BACKDROP */}

      <div
        onClick={onClose}
        className="
          fixed
          inset-0
          z-40
          bg-[#0B0F19]/60
          backdrop-blur-[2px]
        "
      />

      {/* DRAWER */}

      <aside
        className="
          fixed
          right-0
          top-0
          z-50
          flex
          h-screen
          w-full
          max-w-[650px]
          flex-col
          border-l
          border-[#C8955A]/25
          bg-gradient-to-b
          from-[#1B3A6B]
          via-[#142F57]
          to-[#0B0F19]
          shadow-[-15px_0_45px_rgba(11,15,25,0.45)]
          animate-in
          slide-in-from-right
          duration-300
        "
      >
        {/* HEADER */}

        <div
          className="
            flex
            items-start
            justify-between
            border-b
            border-[#FAF7F2]/10
            px-8
            pb-7
            pt-8
          "
        >
          <div>
            <h2
              className="
                text-[30px]
                font-bold
                tracking-tight
                text-[#FAF7F2]
              "
            >
              Add Cohort
            </h2>

            <p
              className="
                mt-1
                text-[15px]
                text-[#F5F0E8]/65
              "
            >
              Add new cohort information.
            </p>
          </div>

          {/* CLOSE BUTTON */}

          <button
            type="button"
            onClick={onClose}
            className="
              flex
              h-[46px]
              w-[46px]
              items-center
              justify-center
              rounded-full
              border
              border-[#FAF7F2]/20
              text-[22px]
              text-[#FAF7F2]
              transition-all
              duration-200
              hover:border-[#C8955A]
              hover:bg-[#C8955A]
              hover:text-[#0B0F19]
            "
          >
            ×
          </button>
        </div>

        {/* FORM */}

        <form
          onSubmit={handleSubmit}
          className="
            flex-1
            overflow-y-auto
            px-8
            py-7
          "
        >
          {/* COHORT NAME */}

          <div className="mb-5">
            <label className="mb-2 block text-[14px] font-semibold text-[#F5F0E8]">
              Cohort Name
            </label>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter cohort name"
              className="
                h-[62px]
                w-full
                rounded-[10px]
                border
                border-[#8FA5BB]/60
                bg-[#0B0F19]/25
                px-5
                text-[17px]
                font-medium
                text-[#FAF7F2]
                outline-none
                placeholder:text-[#FAF7F2]/35
                transition-all
                duration-200
                focus:border-[#C8955A]
                focus:bg-[#0B0F19]/40
                focus:ring-2
                focus:ring-[#C8955A]/10
              "
            />
          </div>

          {/* COHORT CODE */}

          <div className="mb-5">
            <label className="mb-2 block text-[14px] font-semibold text-[#F5F0E8]">
              Cohort Code
            </label>

            <input
              type="text"
              name="code"
              value={form.code}
              onChange={handleChange}
              placeholder="Example: AI-2024-01"
              className="
                h-[62px]
                w-full
                rounded-[10px]
                border
                border-[#8FA5BB]/60
                bg-[#0B0F19]/25
                px-5
                text-[17px]
                font-medium
                text-[#FAF7F2]
                outline-none
                placeholder:text-[#FAF7F2]/35
                transition-all
                duration-200
                focus:border-[#C8955A]
                focus:bg-[#0B0F19]/40
                focus:ring-2
                focus:ring-[#C8955A]/10
              "
            />
          </div>

          {/* DATES */}

          <div className="mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2">

            <div>
              <label className="mb-2 block text-[14px] font-semibold text-[#F5F0E8]">
                Start Date
              </label>

              <input
                type="date"
                name="start"
                value={form.start}
                onChange={handleChange}
                className="
                  h-[62px]
                  w-full
                  rounded-[10px]
                  border
                  border-[#8FA5BB]/60
                  bg-[#0B0F19]/25
                  px-5
                  text-[16px]
                  font-medium
                  text-[#FAF7F2]
                  outline-none
                  transition-all
                  duration-200
                  [color-scheme:dark]
                  focus:border-[#C8955A]
                  focus:bg-[#0B0F19]/40
                "
              />
            </div>

            <div>
              <label className="mb-2 block text-[14px] font-semibold text-[#F5F0E8]">
                End Date
              </label>

              <input
                type="date"
                name="end"
                value={form.end}
                onChange={handleChange}
                className="
                  h-[62px]
                  w-full
                  rounded-[10px]
                  border
                  border-[#8FA5BB]/60
                  bg-[#0B0F19]/25
                  px-5
                  text-[16px]
                  font-medium
                  text-[#FAF7F2]
                  outline-none
                  transition-all
                  duration-200
                  [color-scheme:dark]
                  focus:border-[#C8955A]
                  focus:bg-[#0B0F19]/40
                "
              />
            </div>

          </div>

          {/* GRADUATES + PROJECTS */}

          <div className="mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2">

            <div>
              <label className="mb-2 block text-[14px] font-semibold text-[#F5F0E8]">
                Graduates
              </label>

              <input
                type="number"
                name="graduates"
                value={form.graduates}
                onChange={handleChange}
                placeholder="0"
                min="0"
                className="
                  h-[62px]
                  w-full
                  rounded-[10px]
                  border
                  border-[#8FA5BB]/60
                  bg-[#0B0F19]/25
                  px-5
                  text-[17px]
                  font-medium
                  text-[#FAF7F2]
                  outline-none
                  placeholder:text-[#FAF7F2]/35
                  transition-all
                  duration-200
                  focus:border-[#C8955A]
                  focus:bg-[#0B0F19]/40
                "
              />
            </div>

            <div>
              <label className="mb-2 block text-[14px] font-semibold text-[#F5F0E8]">
                Projects
              </label>

              <input
                type="number"
                name="projects"
                value={form.projects}
                onChange={handleChange}
                placeholder="0"
                min="0"
                className="
                  h-[62px]
                  w-full
                  rounded-[10px]
                  border
                  border-[#8FA5BB]/60
                  bg-[#0B0F19]/25
                  px-5
                  text-[17px]
                  font-medium
                  text-[#FAF7F2]
                  outline-none
                  placeholder:text-[#FAF7F2]/35
                  transition-all
                  duration-200
                  focus:border-[#C8955A]
                  focus:bg-[#0B0F19]/40
                "
              />
            </div>

          </div>

          {/* CATEGORY */}

          <div className="mb-5">
            <label className="mb-2 block text-[14px] font-semibold text-[#F5F0E8]">
              Category
            </label>

            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="
                h-[62px]
                w-full
                rounded-[10px]
                border
                border-[#8FA5BB]/60
                bg-[#0B0F19]/25
                px-5
                text-[17px]
                font-medium
                text-[#FAF7F2]
                outline-none
                transition-all
                duration-200
                focus:border-[#C8955A]
                focus:bg-[#0B0F19]/40
              "
            >
              <option className="bg-[#0B0F19]">Technology</option>
              <option className="bg-[#0B0F19]">Data Science</option>
              <option className="bg-[#0B0F19]">Design</option>
            </select>
          </div>

          {/* STATUS */}

          <div className="mb-5">
            <label className="mb-2 block text-[14px] font-semibold text-[#F5F0E8]">
              Status
            </label>

            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="
                h-[62px]
                w-full
                rounded-[10px]
                border
                border-[#8FA5BB]/60
                bg-[#0B0F19]/25
                px-5
                text-[17px]
                font-medium
                text-[#FAF7F2]
                outline-none
                transition-all
                duration-200
                focus:border-[#C8955A]
                focus:bg-[#0B0F19]/40
              "
            >
              <option className="bg-[#0B0F19]">Active</option>
              <option className="bg-[#0B0F19]">Completed</option>
              <option className="bg-[#0B0F19]">Upcoming</option>
            </select>
          </div>

          {/* ICON TYPE */}

          <div className="mb-8">
            <label className="mb-2 block text-[14px] font-semibold text-[#F5F0E8]">
              Icon Type
            </label>

            <select
              name="iconType"
              value={form.iconType}
              onChange={handleChange}
              className="
                h-[62px]
                w-full
                rounded-[10px]
                border
                border-[#8FA5BB]/60
                bg-[#0B0F19]/25
                px-5
                text-[17px]
                font-medium
                text-[#FAF7F2]
                outline-none
                transition-all
                duration-200
                focus:border-[#C8955A]
                focus:bg-[#0B0F19]/40
              "
            >
              <option value="web" className="bg-[#0B0F19]">
                Technology
              </option>

              <option value="mobile" className="bg-[#0B0F19]">
                Mobile
              </option>

              <option value="data" className="bg-[#0B0F19]">
                Data Science
              </option>

              <option value="design" className="bg-[#0B0F19]">
                Design
              </option>

              <option value="marketing" className="bg-[#0B0F19]">
                Marketing
              </option>

              <option value="cloud" className="bg-[#0B0F19]">
                Cloud
              </option>

              <option value="database" className="bg-[#0B0F19]">
                Database
              </option>
            </select>
          </div>

          {/* BUTTONS */}

          <div
            className="
              flex
              items-center
              justify-end
              gap-3
              border-t
              border-[#FAF7F2]/10
              pt-6
            "
          >
            <button
              type="button"
              onClick={onClose}
              className="
                h-[46px]
                rounded-[8px]
                border
                border-[#FAF7F2]/20
                px-6
                text-[14px]
                font-semibold
                text-[#F5F0E8]
                transition-all
                hover:border-[#C8955A]
                hover:text-[#C8955A]
              "
            >
              Cancel
            </button>

            <button
              type="submit"
              className="
                h-[46px]
                rounded-[8px]
                bg-[#C8955A]
                px-7
                text-[14px]
                font-semibold
                text-[#0B0F19]
                shadow-[0_8px_20px_rgba(200,149,90,0.2)]
                transition-all
                duration-200
                hover:-translate-y-[2px]
                hover:bg-[#D5A66F]
                hover:shadow-[0_12px_25px_rgba(200,149,90,0.3)]
              "
            >
              Add Cohort
            </button>
          </div>

        </form>
      </aside>
    </>
  );
}