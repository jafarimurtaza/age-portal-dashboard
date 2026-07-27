export default function StackTags({ stack }) {
  return (
    <div className="flex gap-2 flex-wrap">
      {stack.map((tech) => (
        <span
          key={tech}
          className="bg-blue-500/10 text-blue-300 text-xs font-medium px-3 py-1 rounded-lg"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}
