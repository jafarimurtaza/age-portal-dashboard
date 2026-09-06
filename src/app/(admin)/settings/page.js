"use client";

import { useState } from "react";
import {
  FaUser,
  FaLock,
  FaTriangleExclamation,
  FaRightFromBracket,
  FaEnvelope,
  FaCircleCheck,
} from "react-icons/fa6";

import SectionCard from "@/components/settings/SectionCard";

const inputBase =
  "w-full border bg-white px-4 py-3 text-sm text-[#0B0F19] outline-none transition-all duration-200 placeholder:text-[#0B0F19]/30";

const inputNormal =
  "border-[#0B0F19]/10 hover:border-[#C8955A]/50 focus:border-[#C8955A] focus:ring-2 focus:ring-[#C8955A]/10";

const inputError =
  "border-rose-300 bg-rose-50/20 focus:border-rose-400 focus:ring-2 focus:ring-rose-400/10";

function FieldLabel({ children, required = false }) {
  return (
    <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.1em] text-[#0B0F19]/50">
      {children}

      {required && <span className="ml-1 text-rose-500">*</span>}
    </label>
  );
}

function StatusMessage({ children }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-600">
      <FaCircleCheck className="text-[10px]" />
      {children}
    </span>
  );
}

function ErrorMessage({ children }) {
  return (
    <div className="flex items-center gap-2 text-xs font-medium text-rose-600">
      <FaTriangleExclamation className="text-[10px]" />
      {children}
    </div>
  );
}

export default function SettingsPage() {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");

  const [profileError, setProfileError] = useState("");
  const [profileSaved, setProfileSaved] = useState(false);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [passwordError, setPasswordError] = useState("");
  const [passwordUpdated, setPasswordUpdated] = useState(false);

  const handleSaveProfile = (e) => {
    e.preventDefault();

    setProfileError("");
    setProfileSaved(false);

    if (!displayName.trim()) {
      setProfileError("Display name is required.");
      return;
    }

    if (!email.trim()) {
      setProfileError("Email address is required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setProfileError("Please enter a valid email address.");
      return;
    }

    setProfileSaved(true);

    setTimeout(() => {
      setProfileSaved(false);
    }, 2500);
  };

  const handleUpdatePassword = (e) => {
    e.preventDefault();

    setPasswordError("");
    setPasswordUpdated(false);

    if (!currentPassword || !newPassword || !confirmPassword) {
      setPasswordError("Please fill in all password fields.");
      return;
    }

    if (newPassword.length < 6) {
      setPasswordError("New password must be at least 6 characters.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setPasswordError("New password and confirmation password do not match.");
      return;
    }

    setPasswordUpdated(true);

    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");

    setTimeout(() => {
      setPasswordUpdated(false);
    }, 2500);
  };
  return (
    <main className="min-h-screen bg-[#FAF9F7] px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <header className="mb-2">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-[#C8955A]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0B0F19]/40">
              Administration
            </span>
          </div>

          <h1 className="font-[family-name:var(--font-fraunces)] text-4xl tracking-tight text-[#0B0F19] sm:text-5xl">
            Settings<span className="text-[#C8955A]">.</span>
          </h1>

          <p className="mt-3 text-sm text-[#0B0F19]/45">
            Manage your profile, security preferences, and account access.
          </p>
        </header>

        <SectionCard
          icon={FaUser}
          number="01"
          title="Profile"
          description="Update your personal account information."
          variant="profile"
        >
          <form onSubmit={handleSaveProfile}>
            <div className="flex max-w-4xl flex-col gap-5 xl:flex-row xl:items-end">
              <div className="w-full xl:max-w-[270px]">
                <FieldLabel required>Display name</FieldLabel>

                <input
                  type="text"
                  value={displayName}
                  onChange={(e) => {
                    setDisplayName(e.target.value);
                    setProfileError("");
                  }}
                  placeholder="Admin"
                  className={`${inputBase} ${
                    profileError && !displayName.trim()
                      ? inputError
                      : inputNormal
                  }`}
                />
              </div>

              <div className="w-full xl:max-w-[310px]">
                <FieldLabel required>Email address</FieldLabel>

                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-[#0B0F19]/25" />

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setProfileError("");
                    }}
                    placeholder="admin@example.com"
                    className={`${inputBase} pl-11 ${
                      profileError &&
                      (!email.trim() ||
                        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
                        ? inputError
                        : inputNormal
                    }`}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="h-[46px] shrink-0 bg-[#0B0F19] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#1B3A6B]"
              >
                Save changes
              </button>
            </div>

            {profileError && (
              <div className="mt-4 max-w-4xl border-l-2 border-rose-400 bg-rose-50 px-4 py-3">
                <ErrorMessage>{profileError}</ErrorMessage>
              </div>
            )}

            {profileSaved && (
              <div className="mt-4">
                <StatusMessage>Profile saved</StatusMessage>
              </div>
            )}
          </form>
        </SectionCard>

        <SectionCard
          icon={FaLock}
          number="02"
          title="Change password"
          description="Keep your administrator account secure."
          variant="password"
        >
          <form onSubmit={handleUpdatePassword}>
            <div className="max-w-4xl">
              <div className="mb-5 max-w-[640px]">
                <FieldLabel required>Current password</FieldLabel>
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => {
                    setCurrentPassword(e.target.value);
                    setPasswordError("");
                  }}
                  placeholder="Enter current password"
                  className={`${inputBase} ${
                    passwordError ? inputError : inputNormal
                  }`}
                />
              </div>

              <div className="flex flex-col gap-5 xl:flex-row xl:items-end">
                <div className="w-full xl:max-w-[270px]">
                  <FieldLabel required>New password</FieldLabel>

                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => {
                      setNewPassword(e.target.value);
                      setPasswordError("");
                    }}
                    placeholder="Minimum 6 characters"
                    className={`${inputBase} ${
                      passwordError ? inputError : inputNormal
                    }`}
                  />
                </div>

                <div className="w-full xl:max-w-[270px]">
                  <FieldLabel required>Confirm password</FieldLabel>

                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                      setPasswordError("");
                    }}
                    placeholder="Repeat new password"
                    className={`${inputBase} ${
                      passwordError ? inputError : inputNormal
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  className="h-[46px] shrink-0 bg-[#1B3A6B] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#0B0F19]"
                >
                  Update password
                </button>
              </div>

              {passwordError && (
                <div className="mt-4 max-w-3xl border-l-2 border-rose-400 bg-rose-50 px-4 py-3">
                  <ErrorMessage>{passwordError}</ErrorMessage>
                </div>
              )}

              {passwordUpdated && (
                <div className="mt-4">
                  <StatusMessage>Password updated</StatusMessage>
                </div>
              )}
            </div>
          </form>
        </SectionCard>

        <SectionCard
          icon={FaTriangleExclamation}
          number="03"
          title="Danger zone"
          description="Manage actions that affect your current account session."
          variant="danger"
        >
          <div className="flex max-w-4xl items-center justify-between border-l-2 border-rose-200 pl-5">
            <div>
              <p className="text-sm font-semibold text-[#0B0F19]">
                Sign out of this device
              </p>

              <p className="mt-1.5 text-xs leading-5 text-[#0B0F19]/45">
                Your current admin session will be ended on this device.
              </p>
            </div>

            <button
              type="button"
              className="ml-5 inline-flex shrink-0 items-center gap-2 border border-rose-300 px-5 py-3 text-sm font-semibold text-rose-600 transition-colors hover:bg-rose-500 hover:text-white"
            >
              <FaRightFromBracket className="text-xs" />
              Log out
            </button>
          </div>
        </SectionCard>
      </div>
    </main>
  );
}
