const PALETTES = [
  {
    name: "Lime Cream",
    shades: [
      { label: "50", bg: "bg-lime-cream-50" },
      { label: "100", bg: "bg-lime-cream-100" },
      { label: "200", bg: "bg-lime-cream-200" },
      { label: "300", bg: "bg-lime-cream-300" },
      { label: "400", bg: "bg-lime-cream-400" },
      { label: "500", bg: "bg-lime-cream-500" },
      { label: "600", bg: "bg-lime-cream-600" },
      { label: "700", bg: "bg-lime-cream-700" },
      { label: "800", bg: "bg-lime-cream-800" },
      { label: "900", bg: "bg-lime-cream-900" },
      { label: "950", bg: "bg-lime-cream-950" },
    ],
  },
  {
    name: "Dry Sage",
    shades: [
      { label: "50", bg: "bg-dry-sage-50" },
      { label: "100", bg: "bg-dry-sage-100" },
      { label: "200", bg: "bg-dry-sage-200" },
      { label: "300", bg: "bg-dry-sage-300" },
      { label: "400", bg: "bg-dry-sage-400" },
      { label: "500", bg: "bg-dry-sage-500" },
      { label: "600", bg: "bg-dry-sage-600" },
      { label: "700", bg: "bg-dry-sage-700" },
      { label: "800", bg: "bg-dry-sage-800" },
      { label: "900", bg: "bg-dry-sage-900" },
      { label: "950", bg: "bg-dry-sage-950" },
    ],
  },
  {
    name: "Dusty Olive",
    shades: [
      { label: "50", bg: "bg-dusty-olive-50" },
      { label: "100", bg: "bg-dusty-olive-100" },
      { label: "200", bg: "bg-dusty-olive-200" },
      { label: "300", bg: "bg-dusty-olive-300" },
      { label: "400", bg: "bg-dusty-olive-400" },
      { label: "500", bg: "bg-dusty-olive-500" },
      { label: "600", bg: "bg-dusty-olive-600" },
      { label: "700", bg: "bg-dusty-olive-700" },
      { label: "800", bg: "bg-dusty-olive-800" },
      { label: "900", bg: "bg-dusty-olive-900" },
      { label: "950", bg: "bg-dusty-olive-950" },
    ],
  },
  {
    name: "Mossy Olive",
    shades: [
      { label: "50", bg: "bg-mossy-olive-50" },
      { label: "100", bg: "bg-mossy-olive-100" },
      { label: "200", bg: "bg-mossy-olive-200" },
      { label: "300", bg: "bg-mossy-olive-300" },
      { label: "400", bg: "bg-mossy-olive-400" },
      { label: "500", bg: "bg-mossy-olive-500" },
      { label: "600", bg: "bg-mossy-olive-600" },
      { label: "700", bg: "bg-mossy-olive-700" },
      { label: "800", bg: "bg-mossy-olive-800" },
      { label: "900", bg: "bg-mossy-olive-900" },
      { label: "950", bg: "bg-mossy-olive-950" },
    ],
  },
  {
    name: "Dark Khaki",
    shades: [
      { label: "50", bg: "bg-dark-khaki-50" },
      { label: "100", bg: "bg-dark-khaki-100" },
      { label: "200", bg: "bg-dark-khaki-200" },
      { label: "300", bg: "bg-dark-khaki-300" },
      { label: "400", bg: "bg-dark-khaki-400" },
      { label: "500", bg: "bg-dark-khaki-500" },
      { label: "600", bg: "bg-dark-khaki-600" },
      { label: "700", bg: "bg-dark-khaki-700" },
      { label: "800", bg: "bg-dark-khaki-800" },
      { label: "900", bg: "bg-dark-khaki-900" },
      { label: "950", bg: "bg-dark-khaki-950" },
    ],
  },
];

export function ColorPalette() {
  return (
    <div className="flex flex-col gap-8 w-full max-w-5xl p-8">
      <h2 className="text-3xl tracking-wide">Palette de couleurs</h2>
      {PALETTES.map((palette) => (
        <div key={palette.name} className="flex flex-col gap-2">
          <h3 className="text-lg font-medium text-foreground-soft">
            {palette.name}
          </h3>
          <div className="grid grid-cols-11 gap-2">
            {palette.shades.map((shade) => (
              <div key={shade.label} className="flex flex-col items-center gap-1">
                <div
                  className={`h-16 w-full rounded-lg border border-black/5 ${shade.bg}`}
                />
                <span className="text-xs text-foreground-muted">
                  {shade.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
