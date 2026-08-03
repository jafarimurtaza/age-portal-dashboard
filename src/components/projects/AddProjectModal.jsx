"use client";
import { useState, useEffect } from "react";

export default function AddProjectModal({
  open,
  onClose,
  onAdd,
  onEdit,
  editingProject,
}) {
  const isEditMode = Boolean(editingProject);

  const emptyForm = {
    name: "",
    github: "",
    cohort: "Cohort 1",
    authorName: "",
    authorRole: "",
    stack: "",
    status: "Draft",
  };

  const [form, setForm] = useState(emptyForm);

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
  }, [editingProject, open]);

  if (!open) return null;

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.authorName.trim()) {
      alert("لطفاً نام پروژه و نام نویسنده را وارد کنید.");
      return;
    }

    const projectData = {
      name: form.name,
      github: form.github || "github.com/username/project",
      cohort: form.cohort,
      author: {
        name: form.authorName,
        role: form.authorRole || "Contributor",
        initials: form.authorName.slice(0, 2).toUpperCase(),
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
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-[#0B0F19]/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden">
        <div className="bg-gradient-to-r from-[#0B0F19] to-[#1B3A6B] px-6 py-5">
          <h2 className="font-[family-name:var(--font-fraunces)] text-xl text-[#FAF7F2]">
            {isEditMode ? "Edit Project" : "New Project"}
          </h2>
          <p className="text-xs text-[#FAF7F2]/50 mt-1">
            {isEditMode
              ? "Update the details of this project"
              : "Add a graduate project to the ledger"}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="p-6 flex flex-col gap-4 max-h-[70vh] overflow-y-auto"
        >
          <div>
            <label className="text-xs font-medium text-[#0B0F19]/60 mb-1 block">
              Project name
            </label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="e.g. Skills Graph Visualizer"
              className="w-full bg-[#FAF7F2] rounded-xl px-4 py-2.5 text-sm text-[#0B0F19] outline-none focus:ring-2 focus:ring-[#C8955A]/40"
            />
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
              className="w-full bg-[#FAF7F2] rounded-xl px-4 py-2.5 text-sm text-[#0B0F19] outline-none focus:ring-2 focus:ring-[#C8955A]/40"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-medium text-[#0B0F19]/60 mb-1 block">
                Cohort
              </label>
              <select
                value={form.cohort}
                onChange={(e) => handleChange("cohort", e.target.value)}
                className="w-full bg-[#FAF7F2] rounded-xl px-4 py-2.5 text-sm text-[#0B0F19] outline-none"
              >
                <option>Cohort 1</option>
                <option>Cohort 2</option>
                <option>Cohort 3</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-medium text-[#0B0F19]/60 mb-1 block">
                Status
              </label>
              <select
                value={form.status}
                onChange={(e) => handleChange("status", e.target.value)}
                className="w-full bg-[#FAF7F2] rounded-xl px-4 py-2.5 text-sm text-[#0B0F19] outline-none"
              >
                <option>Draft</option>
                <option>In Review</option>
                <option>Published</option>
                <option>Archived</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-medium text-[#0B0F19]/60 mb-1 block">
                Author name
              </label>
              <input
                type="text"
                value={form.authorName}
                onChange={(e) => handleChange("authorName", e.target.value)}
                placeholder="e.g. Sana Ahmadi"
                className="w-full bg-[#FAF7F2] rounded-xl px-4 py-2.5 text-sm text-[#0B0F19] outline-none focus:ring-2 focus:ring-[#C8955A]/40"
              />
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
                className="w-full bg-[#FAF7F2] rounded-xl px-4 py-2.5 text-sm text-[#0B0F19] outline-none focus:ring-2 focus:ring-[#C8955A]/40"
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
              className="w-full bg-[#FAF7F2] rounded-xl px-4 py-2.5 text-sm text-[#0B0F19] outline-none focus:ring-2 focus:ring-[#C8955A]/40"
            />
          </div>

          <div className="flex gap-3 mt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 border border-[#0B0F19]/15 text-[#0B0F19]/70 rounded-xl py-2.5 text-sm font-medium hover:bg-[#FAF7F2]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-[#C8955A] hover:bg-[#b3814c] text-white rounded-xl py-2.5 text-sm font-medium"
            >
              {isEditMode ? "Save Changes" : "Add Project"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
