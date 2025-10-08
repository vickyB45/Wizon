import React from "react";

const ComparisonTable = () => {
  const data = [
    {
      title: "Approach",
      wizon: "Business-Led Scaling",
      traditional: "Media Buying Without Strategy",
    },
    {
      title: "Ad Strategy",
      wizon: "Built Around PMF & Margins",
      traditional: "Generic Templates, No Customization",
    },
    {
      title: "Content Direction",
      wizon: "Strategic, Scroll-Stopping, Sales-Focused",
      traditional: "Generic Templates, No Customization",
    },
    {
      title: "Focus",
      wizon: "Profit, Stability & Brand Growth",
      traditional: "ROAS & Short-Term Wins",
    },
    {
      title: "Client Experience",
      wizon: "Transparent, Proactive & Fast",
      traditional: "Slow, Reactive, Poor Communication",
    },
    {
      title: "Retention Rate",
      wizon: "90%+ — Brands Stay for Years",
      traditional: "High Churn, Constant Replacements",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-2 sm:p-4 md:p-8">
      <div className="overflow-x-auto border border-gray-300 shadow-sm">
        <table className="min-w-[800px] sm:min-w-full text-left border-collapse">
          <thead>
            {/* Top merged header row */}
            <tr>
              <th
                className="border-2 border-gray-800 px-2 sm:px-4 py-2 font-bold text-center text-xl sm:text-2xl md:text-3xl text-black ms-0 sm:ms-20"
                colSpan={2}
              >
                <span
                  style={{ boxShadow: "4px 4px 0 #fff207" }}
                  className="bg-black text-white px-2 sm:px-4 py-1 text-xl sm:text-2xl md:text-3xl heading"
                >
                  Wizon Media
                </span>
              </th>
              <th className="border-2 border-gray-800 px-2 sm:px-4 py-2 font-bold text-center text-xl sm:text-2xl md:text-3xl text-black uppercase heading bg-gray-100">
                Traditional Agencies
              </th>
            </tr>
          </thead>

          <tbody>
            {data.map((row, i) => (
              <tr key={i} className="even:bg-gray-50">
                <td className="border-2 border-gray-900 px-2 sm:px-4 py-2 sm:py-3 font-bold text-xl sm:text-2xl md:text-3xl heading text-gray-900 w-1/3">
                  {row.title}
                </td>
                <td className="border-2 text text-base sm:text-lg md:text-xl border-gray-800 px-2 sm:px-4 py-2 sm:py-3 text-gray-800 w-1/3">
                  {row.wizon}
                </td>
                <td className="border-2 border-gray-800 px-2 sm:px-4 py-2 sm:py-3 text-base sm:text-lg md:text-xl text-gray-800 w-1/3">
                  {row.traditional}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparisonTable;
