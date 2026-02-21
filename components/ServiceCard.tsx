interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="bg-white border border-neutral-200 rounded-lg p-6 shadow hover:shadow-lg transition">
      {icon && <div className="mb-4 text-green-900 text-3xl">{icon}</div>}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-neutral-700 text-sm">{description}</p>
    </div>
  );
}
