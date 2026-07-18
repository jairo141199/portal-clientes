import { AdvisoryArt, GrowthArt, ProtectionArt } from "./RecommendationArt";

const ITEMS = [
  {
    title: "Protege lo que más quieres",
    description: "Conoce nuestros seguros para tu hogar, vehículo o salud.",
    Art: ProtectionArt,
  },
  {
    title: "Haz crecer tus ahorros",
    description: "Descubre opciones de inversión hechas para tus metas.",
    Art: GrowthArt,
  },
  {
    title: "Agenda una asesoría",
    description: "Habla con un asesor y resuelve tus dudas financieras.",
    Art: AdvisoryArt,
  },
];

export function Recommendations() {
  return (
    <section>
      <h2 className="mb-4 text-lg font-medium text-gray-700 dark:text-gray-300">Te recomendamos</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {ITEMS.map(({ title, description, Art }) => (
          <div
            key={title}
            className="overflow-hidden rounded-2xl bg-white shadow-[0_2px_12px_rgba(0,0,0,0.05)] dark:bg-zinc-900 dark:shadow-none dark:ring-1 dark:ring-zinc-800"
          >
            <div className="h-28">
              <Art />
            </div>
            <div className="p-4">
              <p className="font-medium text-gray-900 dark:text-gray-50">{title}</p>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
