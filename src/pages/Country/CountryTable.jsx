import React from "react";

const CountryTable = ({ submittedList, onEdit, handleDelete }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-6 py-3">Country</th>
            <th className="px-6 py-3">State</th>
            <th className="px-6 py-3">City</th>
            <th className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {submittedList.map((item, index) => (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="px-6 py-4">{item.country}</td>
              <td className="px-6 py-4">{item.state}</td>
              <td className="px-6 py-4">{item.city}</td>
              <td className="px-6 py-4">
                <button
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onEdit(index);
                  }}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)} // Pass the index to the delete handler
                  className="font-medium text-red-600 dark:text-red-500 hover:underline ml-5"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CountryTable;
