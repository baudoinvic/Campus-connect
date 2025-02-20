

import React, { useState } from "react";

const Company = () => {
 
  const [activeInternships, setActiveInternships] = useState([
    {
      id: 1,
      title: "Frontend Developer",
      applications: 12,
      status: "Active",
      deadline: "Nov 30, 2024",
    },
    {
      id: 2,
      title: "Data Analyst",
      applications: 8,
      status: "Active",
      deadline: "Dec 15, 2024",
    },
    {
      id: 3,
      title: "UX Designer",
      applications: 5,
      status: "Draft",
      deadline: "Jan 10, 2025",
    },
  ]);

  const [recentApplicants, setRecentApplicants] = useState([
    {
      id: 1,
      name: "Alex Johnson",
      university: "State University",
      position: "Frontend Developer",
      date: "Nov 12, 2024",
    },
    {
      id: 2,
      name: "Taylor Smith",
      university: "Tech Institute",
      position: "Data Analyst",
      date: "Nov 10, 2024",
    },
    {
      id: 3,
      name: "Jordan Lee",
      university: "City College",
      position: "UX Designer",
      date: "Nov 8, 2024",
    },
  ]);

  const [showNewInternshipForm, setShowNewInternshipForm] = useState(false);
  const [newInternship, setNewInternship] = useState({
    title: "",
    description: "",
    requirements: "",
    duration: "",
    location: "",
    deadline: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewInternship({ ...newInternship, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newId = activeInternships.length + 1;
    setActiveInternships([
      ...activeInternships,
      {
        id: newId,
        title: newInternship.title,
        applications: 0,
        status: "Active",
        deadline: newInternship.deadline,
      },
    ]);
    setShowNewInternshipForm(false);
    setNewInternship({
      title: "",
      description: "",
      requirements: "",
      duration: "",
      location: "",
      deadline: "",
    });
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
     

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <header className="bg-white shadow-sm">
          <div className="px-6 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-semibold text-gray-800">
                Company Dashboard
              </h1>
              <button
                onClick={() => setShowNewInternshipForm(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Post New Internship
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-green-100 text-green-500">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">
                    Active Internships
                  </p>
                  <p className="text-2xl font-semibold text-gray-800">2</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
              
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">
                    Total Applicants
                  </p>
                  <p className="text-2xl font-semibold text-gray-800">25</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
            
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">
                    Current Interns
                  </p>
                  <p className="text-2xl font-semibold text-gray-800">5</p>
                </div>
              </div>
            </div>
          </div>

          {/* Active Internships */}
          <div className="bg-white rounded-lg shadow mb-6">
            <div className="px-6 py-4 border-b">
              <h2 className="text-lg font-medium text-gray-800">
                Active Internships
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Applications
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Deadline
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {activeInternships.map((internship) => (
                    <tr key={internship.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                        {internship.title}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {internship.applications}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 py-1 text-xs rounded-full ${
                            internship.status === "Active"
                              ? "bg-green-100 text-green-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {internship.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {internship.deadline}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a
                          href="#"
                          className="text-blue-600 hover:text-blue-900 mr-3"
                        >
                          View
                        </a>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Recent Applicants */}
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b">
              <h2 className="text-lg font-medium text-gray-800">
                Recent Applicants
              </h2>
            </div>
            <div className="divide-y divide-gray-200">
              {recentApplicants.map((applicant) => (
                <div
                  key={applicant.id}
                  className="px-6 py-4 flex items-center justify-between"
                >
                  <div className="flex items-center">
                    <img
                      src="/api/placeholder/40/40"
                      alt={applicant.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-gray-800">
                        {applicant.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {applicant.university}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-800">
                      {applicant.position}
                    </p>
                    <p className="text-sm text-gray-500">{applicant.date}</p>
                  </div>
                  <div>
                    <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                      Review
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* New Internship Modal */}
      {showNewInternshipForm && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <form onSubmit={handleSubmit}>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="mb-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Post New Internship
                    </h3>
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="title"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      id="title"
                      value={newInternship.title}
                      onChange={handleInputChange}
                      className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Description
                    </label>
                    <textarea
                      name="description"
                      id="description"
                      rows="3"
                      value={newInternship.description}
                      onChange={handleInputChange}
                      className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      required
                    ></textarea>
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="requirements"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Requirements
                    </label>
                    <textarea
                      name="requirements"
                      id="requirements"
                      rows="2"
                      value={newInternship.requirements}
                      onChange={handleInputChange}
                      className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      required
                    ></textarea>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label
                        htmlFor="duration"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Duration
                      </label>
                      <input
                        type="text"
                        name="duration"
                        id="duration"
                        placeholder="e.g. 3 months"
                        value={newInternship.duration}
                        onChange={handleInputChange}
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="location"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Location
                      </label>
                      <input
                        type="text"
                        name="location"
                        id="location"
                        placeholder="e.g. Remote, New York"
                        value={newInternship.location}
                        onChange={handleInputChange}
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="deadline"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Application Deadline
                    </label>
                    <input
                      type="date"
                      name="deadline"
                      id="deadline"
                      value={newInternship.deadline}
                      onChange={handleInputChange}
                      className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      required
                    />
                  </div>
                </div>

                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Post Internship
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowNewInternshipForm(false)}
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Company;