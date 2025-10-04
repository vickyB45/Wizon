import { HiMiniCheckBadge } from "react-icons/hi2";


export default function TrustBadges() {
  const items = [
    "NOT A SALES PITCH",
    "NO STRINGS ATTACHED",
    "NO GATEKEEPING",
  ];

  return (
    <div className="flex  flex-wrap justify-evenly items-center gap-8 py-6">
      {items.map((text, idx) => (
        <div key={idx} className="flex items-center gap-2">
          <HiMiniCheckBadge className="text-green-600 w-8 h-8" />
          <span className="font-semibold text-black text-[18px] heading">{text}</span>
        </div>
      ))}
    </div>
  );
}
