export default function StackTags({ stack }) {
  return (
    <div className="flex gap-2 flex-wrap">
      {stack.map((tech) => (
        <span
          key={tech}
          className="bg-[#1B3A6B]/10 text-[#1B3A6B] text-xs font-medium px-3 py-1 rounded-lg"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}
