import React from "react";

const DashboardStats = () => {
  // Données simulées pour le tableau de bord
  const stats = [
    {
      title: "Users",
      color: "bg-blue-500",
      total: 290,
      created: 34,
      removed: 1,
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
    },
    {
      title: "Applications",
      color: "bg-teal-500",
      total: 88,
      created: 19,
      removed: 2,
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
          />
        </svg>
      ),
    },
    {
      title: "Groups",
      color: "bg-purple-500",
      total: 24,
      created: 7,
      removed: 0,
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7v-2a3 3 0 005.356-1.857M17 20v2M7 20v2M5 10a3 3 0 013-3h8a3 3 0 013 3v2a3 3 0 01-3 3H8a3 3 0 01-3-3v-2z"
          />
        </svg>
      ),
    },
    {
      title: "Passwords",
      color: "bg-orange-500",
      total: 22,
      created: 0,
      removed: "Failed Atts",
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 11c0-1.104-.896-2-2-2s-2 .896-2 2v2H6v-2a4 4 0 018 0v2h-2v-2zm-6 4h12v5H6v-5zm6 2a1 1 0 110 2 1 1 0 010-2z"
          />
        </svg>
      ),
    },
    {
      title: "Logins",
      color: "bg-cyan-500",
      total: 457,
      created: 74,
      removed: "Failed Atts",
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
          />
        </svg>
      ),
    },
    {
      title: "All Reports",
      color: "bg-indigo-500",
      total: 5,
      created: "",
      removed: "",
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Tableau de bord</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col"
          >
            <div
              className={`flex items-center justify-between p-4 ${stat.color} text-white`}
            >
              <span className="text-lg font-semibold">{stat.title}</span>
              {stat.icon}
            </div>
            <div className="p-4 grid grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-800">{stat.total}</p>
                <p className="text-xs text-gray-500 uppercase">Total</p>
              </div>
              <div className="text-center">
                {stat.created !== "" && (
                  <>
                    <p className="text-lg font-semibold text-gray-700">{stat.created}</p>
                    <p className="text-xs text-gray-500 uppercase">
                      {stat.created === "Failed Atts" ? "Failed Atts" : "Created"}
                    </p>
                  </>
                )}
              </div>
              <div className="text-center">
                {stat.removed !== "" && (
                  <>
                    <p className="text-lg font-semibold text-gray-700">{stat.removed}</p>
                    <p className="text-xs text-gray-500 uppercase">
                      {stat.removed === "Failed Atts" ? "Failed Atts" : "Removed"}
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardStats;