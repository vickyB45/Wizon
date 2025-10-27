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
<div className="bg-[url('/image/table.png')]  py-8 px-2   bg-no-repeat">
      <div className="overflow-x-auto  max-w-6xl  mx-auto   shadow-sm">
        <table className="min-w-full sm:min-w-[800px] text-left  rounded-2xl">
          <thead>
            {/* Top merged header row */}
            <tr>
              <th
                className="text-end  px-6 rounded-2xl border-2  border-gray-800  sm:px-10 py-1 sm:py-2 font-bold  text-base sm:text-2xl md:text-3xl text-black ms-0 sm:ms-20"
                colSpan={2}
              >
                <span
                  style={{ boxShadow: "4px 4px 0 #fff207" }}
                  className="bg-black  text-white px-2 sm:px-4 text-xl md:text-4xl heading"
                >
                  Wizon Media
                </span>
              </th>
              <th className="border-2 border-gray-800 px-2 sm:px-4 py-1 sm:py-2 font-bold text-center text-base sm:text-2xl md:text-3xl text-black uppercase heading bg-gray-100">
                Traditional Agencies
              </th>
            </tr>
          </thead>

          <tbody>
            {data.map((row, i) => (
              <tr key={i} className="even:bg-gray-50">
                <td className="border-2 border-gray-900 px-2 sm:px-4 py-1 sm:py-3 font-bold text-sm sm:text-2xl md:text-3xl heading text-gray-900 w-1/3">
                  {row.title}
                </td>
                <td className="border-2 text text-sm sm:text-lg md:text-xl border-gray-800 px-2 sm:px-4 py-1 sm:py-3 text-gray-800 w-1/3">
                  {row.wizon}
                </td>
                <td className="border-2 text border-gray-800 px-2 sm:px-4 py-1 sm:py-3 text-sm sm:text-lg md:text-xl text-gray-800 w-1/3">
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
