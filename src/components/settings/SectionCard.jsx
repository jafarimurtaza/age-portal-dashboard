export default function SectionCard({
  icon: Icon,
  title,
  description,
  children,
  variant = "profile",
  number,
}) {
  const styles = {
    profile: {
      accent: "bg-[#C8955A]",
      icon: "bg-[#0B0F19] text-[#C8955A]",
      number: "text-[#C8955A]",
    },

    password: {
      accent: "bg-[#1B3A6B]",
      icon: "bg-[#1B3A6B] text-white",
      number: "text-[#1B3A6B]",
    },

    danger: {
      accent: "bg-rose-500",
      icon: "bg-rose-50 text-rose-500",
      number: "text-rose-500",
    },
  };

  const style = styles[variant];

  return (
    <section className="relative border-t border-[#0B0F19]/10 py-8 sm:py-10">
      <div className="grid grid-cols-1 lg:grid-cols-[230px_minmax(0,1fr)] lg:gap-14">
        <div className="relative pb-5 lg:pb-0">
          <div className="flex items-start gap-4">
            <div
              className={`flex h-10 w-10 shrink-0 items-center justify-center ${style.icon}`}
            >
              <Icon className="text-sm" />
            </div>

            <div>
              <div className="mb-2 flex items-center gap-2">
                <span
                  className={`text-[10px] font-bold tracking-[0.15em] ${style.number}`}
                >
                  {number}
                </span>

                <span className="h-px w-6 bg-[#0B0F19]/10" />
              </div>

              <h2 className="font-[family-name:var(--font-fraunces)] text-xl leading-tight text-[#0B0F19]">
                {title}
              </h2>

              <p className="mt-2 max-w-[190px] text-xs leading-5 text-[#0B0F19]/45">
                {description}
              </p>
            </div>
          </div>

          <span
            className={`absolute left-0 top-0 hidden h-full w-0.5 lg:block ${style.accent}`}
          />
        </div>

        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}
