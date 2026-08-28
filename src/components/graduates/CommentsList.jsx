// components/graduates/CommentsList.jsx

"use client";

export default function CommentsList({
  comments = [],
}) {
  if (comments.length === 0) {
    return (
      <div className="rounded-2xl bg-[#F5F0E8] p-5 text-center">
        <p className="text-sm text-[#1B3A6B]">
          No comments yet.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">

      {comments.map((comment, index) => {

        const text =
          typeof comment === "string"
            ? comment
            : comment.text;

        return (
          <div
            key={comment.id || index}
            className="
              rounded-2xl
              bg-[#F5F0E8]
              p-4
            "
          >
            <p className="text-sm text-[#0B0F19]">
              {text}
            </p>
          </div>
        );
      })}

    </div>
  );
}