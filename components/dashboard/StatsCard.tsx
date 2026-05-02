import { LucideIcon } from 'lucide-react';

interface Props {
  label: string;
  value: number;
  icon: LucideIcon; 
  iconBg: string;
}

export default function StatsCard({ label, value, icon: Icon, iconBg }: Props) {
  return (
    <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex-1 min-w-[200px]">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-500 text-sm font-medium">{label}</span>
        <div className={`p-2 rounded-xl ${iconBg}`}>
          <Icon className="w-7 h-7 text-gray-700" />
        </div>
      </div>
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-bold text-gray-900">{value.toLocaleString()}</span>
      </div>
    </div>
  );
}