"use client";
import { useState, useEffect, useRef } from "react";

const COHORT_OPTIONS = ["Cohort 1", "Cohort 2", "Cohort 3"];
const STATUS_OPTIONS = ["Draft", "In Review", "Published", "Archived"];

const emptyForm = {
  name: "",
  github: "",
  cohort: "Cohort 1",
  authorName: "",
  authorRole: "",
  stack: "",
  status: "Draft",
};

function getInitials(fullName) {
  return fullName
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");
}

function isLikelyGithubLink(value) {
  if (!value.trim()) return true;
  return /^(https?:\/\/)?(www\.)?github\.com\/[^/\s]+\/[^/\s]+\/?$/i.test(
    value.trim(),
  );
}
function CustomSelect({ label, value, onChange, options }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <label className="text-xs font-medium text-[#0B0F19]/60 mb-1 block">
        {label}
      </label>
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        className="w-full bg-[#FAF7F2] rounded-none px-4 py-2.5 text-sm text-[#0B0F19] outline-none focus:ring-2 focus:ring-[#C8955A]/40 flex items-center justify-between transition-colors"
      >
        <span>{value}</span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`text-[#0B0F19]/40 transition-transform ${isOpen ? "rotate-180" : ""}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 mt-1 bg-white border border-[#0B0F19]/10 shadow-xl z-20 py-1 max-h-48 overflow-y-auto">
          {options.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => {
                onChange(opt);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                opt === value
                  ? "bg-[#C8955A]/15 text-[#8a6539] font-medium"
                  : "text-[#0B0F19] hover:bg-[#F5F0E8]"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function AddProjectModal({
  open,
  onClose,
  onAdd,
  onEdit,
  editingProject,
}) {
  const isEditMode = Boolean(editingProject);
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const firstFieldRef = useRef(null);

  useEffect(() => {
    if (editingProject) {
      setForm({
        name: editingProject.name,
        github: editingProject.github,
        cohort: editingProject.cohort,
        authorName: editingProject.author.name,
        authorRole: editingProject.author.role,
        stack: editingProject.stack.join(", "),
        status: editingProject.status,
      });
    } else {
      setForm(emptyForm);
    }
    setErrors({});
    setIsSubmitting(false);
  }, [editingProject, open]);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);
  useEffect(() => {
    if (open && firstFieldRef.current) {
      firstFieldRef.current.focus();
    }
  }, [open]);

  if (!open) return null;

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "نام پروژه الزامی است.";
    }

    if (!form.authorName.trim()) {
      newErrors.authorName = "نام نویسنده الزامی است.";
    }

    if (!isLikelyGithubLink(form.github)) {
      newErrors.github = "لینک باید به شکل github.com/username/repo باشد.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    if (!validate()) return;

    setIsSubmitting(true);

    const projectData = {
      name: form.name.trim(),
      github: form.github.trim() || "github.com/username/project",
      cohort: form.cohort,
      author: {
        name: form.authorName.trim(),
        role: form.authorRole.trim() || "Contributor",
        initials: getInitials(form.authorName),
      },
      stack: form.stack
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
      status: form.status,
    };

    if (isEditMode) {
      onEdit({ ...editingProject, ...projectData });
    } else {
      onAdd({
        ...projectData,
        id: Date.now(),
        updatedRelative: "just now",
        updatedDate: new Date().toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }),
      });
    }

    setForm(emptyForm);
    setIsSubmitting(false);
    onClose();
  };

  const inputBase =
    "w-full bg-[#FAF7F2] rounded-none px-4 py-2.5 text-sm text-[#0B0F19] outline-none focus:ring-2 transition-colors";
  const inputOk = "focus:ring-[#C8955A]/40";
  const inputError = "ring-2 ring-rose-400/60 focus:ring-rose-400/60";

  return (
    <div
      className="fixed inset-0 bg-[#0B0F19]/60 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden max-h-[92vh] sm:max-h-none">
        <div className="relative bg-gradient-to-r from-[#0B0F19] to-[#1B3A6B] px-4 sm:px-6 py-4 sm:py-5">
          <h2 className="font-[family-name:var(--font-fraunces)] text-xl text-[#FAF7F2] pr-8">
            {isEditMode ? "Edit Project" : "New Project"}
          </h2>
          <p className="text-xs text-[#FAF7F2]/50 mt-1 pr-8">
            {isEditMode
              ? "Update the details of this project"
              : "Add a graduate project to the ledger"}
          </p>
          <button
            onClick={onClose}
            type="button"
            aria-label="Close"
            className="absolute right-3 top-3 sm:right-4 sm:top-4 w-8 h-8 rounded-full flex items-center justify-center text-[#FAF7F2]/60 hover:text-[#FAF7F2] hover:bg-white/10 transition-colors"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="p-4 sm:p-6 flex flex-col gap-4 max-h-[70vh] overflow-y-auto"
        >
          <div>
            <label className="text-xs font-medium text-[#0B0F19]/60 mb-1 block">
              Project name
            </label>
            <input
              ref={firstFieldRef}
              type="text"
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="e.g. Skills Graph Visualizer"
              className={`${inputBase} ${errors.name ? inputError : inputOk}`}
            />
            {errors.name && (
              <p className="text-xs text-rose-500 mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="text-xs font-medium text-[#0B0F19]/60 mb-1 block">
              GitHub link
            </label>
            <input
              type="text"
              value={form.github}
              onChange={(e) => handleChange("github", e.target.value)}
              placeholder="github.com/username/project"
              className={`${inputBase} ${errors.github ? inputError : inputOk}`}
            />
            {errors.github && (
              <p className="text-xs text-rose-500 mt-1">{errors.github}</p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <CustomSelect
              label="Cohort"
              value={form.cohort}
              onChange={(v) => handleChange("cohort", v)}
              options={COHORT_OPTIONS}
            />
            <CustomSelect
              label="Status"
              value={form.status}
              onChange={(v) => handleChange("status", v)}
              options={STATUS_OPTIONS}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-medium text-[#0B0F19]/60 mb-1 block">
                Author name
              </label>
              <input
                type="text"
                value={form.authorName}
                onChange={(e) => handleChange("authorName", e.target.value)}
                placeholder="e.g. Sana Ahmadi"
                className={`${inputBase} ${errors.authorName ? inputError : inputOk}`}
              />
              {errors.authorName && (
                <p className="text-xs text-rose-500 mt-1">
                  {errors.authorName}
                </p>
              )}
            </div>
            <div>
              <label className="text-xs font-medium text-[#0B0F19]/60 mb-1 block">
                Author role
              </label>
              <input
                type="text"
                value={form.authorRole}
                onChange={(e) => handleChange("authorRole", e.target.value)}
                placeholder="e.g. Frontend Developer"
                className={`${inputBase} ${inputOk}`}
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-medium text-[#0B0F19]/60 mb-1 block">
              Tech stack (comma separated)
            </label>
            <input
              type="text"
              value={form.stack}
              onChange={(e) => handleChange("stack", e.target.value)}
              placeholder="React, Next.js, Tailwind"
              className={`${inputBase} ${inputOk}`}
            />
          </div>

          <div className="flex gap-3 mt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 border border-[#0B0F19]/15 text-[#0B0F19]/70 rounded-none py-2.5 text-sm font-medium hover:bg-[#FAF7F2]"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-[#C8955A] hover:bg-[#b3814c] disabled:opacity-60 disabled:cursor-not-allowed text-white rounded-none py-2.5 text-sm font-medium transition-colors"
            >
              {isSubmitting
                ? "Saving..."
                : isEditMode
                  ? "Save Changes"
                  : "Add Project"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
