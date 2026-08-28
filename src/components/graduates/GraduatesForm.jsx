"use client";

import { useEffect, useState } from "react";

const emptyGraduate = {
  name: "",
  email: "",
  cohort: "",
  role: "",
  skills: [],
  status: "",
  progress: 0,
  avatar: "",
};

const roles = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "DevOps Engineer",
  "UI Designer",
];

const statuses = [
  "Active",
  "Alumni",
  "Graduated",
  "Looking for Job",
  "Inactive",
];

const cohorts = [
  "Cohort 1",
  "Cohort 2",
  "Cohort 3",
  "Cohort 4",
  "Cohort 5",
  "Cohort 6",
];

export default function GraduateForm({
  graduate,
  onSave,
  onClose,
}) {
  const [form, setForm] = useState(emptyGraduate);
  const [skillInput, setSkillInput] = useState("");
  const [errors, setErrors] = useState({});

  const isEditing = Boolean(graduate?.id);

  useEffect(() => {
    if (graduate) {
      setForm({
        ...emptyGraduate,
        ...graduate,
        skills: Array.isArray(graduate.skills)
          ? graduate.skills
          : [],
      });
    } else {
      setForm(emptyGraduate);
    }

    setErrors({});
    setSkillInput("");
  }, [graduate]);

  const updateField = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [field]: "",
    }));
  };

  const addSkill = () => {
    const skill = skillInput.trim();

    if (!skill) return;

    if (
      !form.skills.some(
        (item) => item.toLowerCase() === skill.toLowerCase()
      )
    ) {
      setForm((prev) => ({
        ...prev,
        skills: [...prev.skills, skill],
      }));
    }

    setSkillInput("");
  };

  const removeSkill = (skillToRemove) => {
    setForm((prev) => ({
      ...prev,
      skills: prev.skills.filter(
        (skill) => skill !== skillToRemove
      ),
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Full name is required.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
      newErrors.email = "Please enter a valid email.";
    }

    if (!form.cohort) {
      newErrors.cohort = "Please select a cohort.";
    }

    if (!form.role) {
      newErrors.role = "Please select a role.";
    }

    if (!form.status) {
      newErrors.status = "Please select a status.";
    }

    if (!form.skills.length) {
      newErrors.skills = "Add at least one skill.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    onSave({
      ...form,
      name: form.name.trim(),
      email: form.email.trim(),
      progress: Number(form.progress) || 0,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-[#0B0F19]/60 p-3 sm:p-5 md:p-8">
      <div className="my-3 w-full max-w-3xl overflow-hidden rounded-2xl bg-[#FAF7F2] shadow-2xl sm:my-6 sm:rounded-3xl md:my-10">
        
        {/* Header */}
        <div className="sticky top-0 z-10 border-b border-[#F5F0E8] bg-[#FAF7F2] px-4 py-4 sm:px-6 sm:py-5 md:px-8">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h2 className="text-xl font-bold text-[#0B0F19] sm:text-2xl md:text-3xl">
                {isEditing
                  ? "Edit Graduate"
                  : "Add Graduate"}
              </h2>

              <p className="mt-1 text-xs leading-5 text-gray-500 sm:text-sm">
                {isEditing
                  ? "Update the graduate information below."
                  : "Complete all required information to add a graduate."}
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-xl text-xl text-gray-500 transition hover:bg-[#F5F0E8] hover:text-[#0B0F19]"
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="max-h-[calc(100vh-110px)] overflow-y-auto"
        >
          <div className="space-y-5 px-4 py-5 sm:space-y-6 sm:px-6 sm:py-6 md:px-8 md:py-8">

            {/* Name + Email */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#0B0F19]">
                  Full Name *
                </label>

                <input
                  type="text"
                  value={form.name}
                  onChange={(e) =>
                    updateField("name", e.target.value)
                  }
                  placeholder="John Doe"
                  className={`w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition focus:border-[#C8955A] ${
                    errors.name
                      ? "border-red-400"
                      : "border-[#F5F0E8]"
                  }`}
                />

                {errors.name && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#0B0F19]">
                  Email *
                </label>

                <input
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    updateField("email", e.target.value)
                  }
                  placeholder="john@example.com"
                  className={`w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition focus:border-[#C8955A] ${
                    errors.email
                      ? "border-red-400"
                      : "border-[#F5F0E8]"
                  }`}
                />

                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Role + Cohort */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#0B0F19]">
                  Role *
                </label>

                <select
                  value={form.role}
                  onChange={(e) =>
                    updateField("role", e.target.value)
                  }
                  className={`w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none ${
                    errors.role
                      ? "border-red-400"
                      : "border-[#F5F0E8]"
                  }`}
                >
                  <option value="">Select role</option>

                  {roles.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>

                {errors.role && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.role}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#0B0F19]">
                  Cohort *
                </label>

                <select
                  value={form.cohort}
                  onChange={(e) =>
                    updateField("cohort", e.target.value)
                  }
                  className={`w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none ${
                    errors.cohort
                      ? "border-red-400"
                      : "border-[#F5F0E8]"
                  }`}
                >
                  <option value="">Select cohort</option>

                  {cohorts.map((cohort) => (
                    <option key={cohort} value={cohort}>
                      {cohort}
                    </option>
                  ))}
                </select>

                {errors.cohort && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.cohort}
                  </p>
                )}
              </div>
            </div>

            {/* Status + Progress */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#0B0F19]">
                  Status *
                </label>

                <select
                  value={form.status}
                  onChange={(e) =>
                    updateField("status", e.target.value)
                  }
                  className={`w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none ${
                    errors.status
                      ? "border-red-400"
                      : "border-[#F5F0E8]"
                  }`}
                >
                  <option value="">Select status</option>

                  {statuses.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>

                {errors.status && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.status}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#0B0F19]">
                  Progress
                </label>

                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={Number(form.progress) || 0}
                    onChange={(e) =>
                      updateField(
                        "progress",
                        Number(e.target.value)
                      )
                    }
                    className="w-full accent-[#C8955A]"
                  />

                  <span className="w-12 shrink-0 text-right font-bold text-[#1B3A6B]">
                    {Number(form.progress) || 0}%
                  </span>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#0B0F19]">
                Skills *
              </label>

              <div className="flex flex-col gap-2 sm:flex-row">
                <input
                  type="text"
                  value={skillInput}
                  onChange={(e) =>
                    setSkillInput(e.target.value)
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      addSkill();
                    }
                  }}
                  placeholder="e.g. React"
                  className="min-w-0 flex-1 rounded-xl border border-[#F5F0E8] bg-white px-4 py-3 text-sm outline-none focus:border-[#C8955A]"
                />

                <button
                  type="button"
                  onClick={addSkill}
                  className="w-full cursor-pointer rounded-xl bg-[#1B3A6B] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#C8955A] sm:w-auto"
                >
                  Add Skill
                </button>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {form.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-2 rounded-full bg-[#0B0F19] px-3 py-1.5 text-xs font-medium text-white"
                  >
                    {skill}

                    <button
                      type="button"
                      onClick={() => removeSkill(skill)}
                      className="cursor-pointer text-white/70 hover:text-white"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>

              {errors.skills && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.skills}
                </p>
              )}
            </div>

            {/* Avatar */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#0B0F19]">
                Avatar
              </label>

              <input
                type="text"
                value={form.avatar}
                onChange={(e) =>
                  updateField("avatar", e.target.value)
                }
                placeholder="/images/avatar-1.jpg"
                className="w-full rounded-xl border border-[#F5F0E8] bg-white px-4 py-3 text-sm outline-none focus:border-[#C8955A]"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="sticky bottom-0 border-t border-[#F5F0E8] bg-[#FAF7F2] px-4 py-4 sm:px-6 md:px-8">
            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={onClose}
                className="w-full cursor-pointer rounded-xl border border-[#1B3A6B] px-5 py-3 text-sm font-semibold text-[#1B3A6B] transition hover:bg-[#F5F0E8] sm:w-auto"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="w-full cursor-pointer rounded-xl bg-[#1B3A6B] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#C8955A] sm:w-auto"
              >
                {isEditing
                  ? "Update Graduate"
                  : "Save Graduate"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}