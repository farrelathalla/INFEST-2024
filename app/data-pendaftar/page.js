"use client";
import { useState, useEffect } from 'react';

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    // Fetch users data from the API
    const fetchUsers = async () => {
      const res = await fetch("/api/csv");
      const data = await res.json();
      console.log(data)
      setUsers(data);
      setFilteredUsers(data); // Set filtered users initially to all users
    };

    fetchUsers();
  }, []);

  // Handle search
  useEffect(() => {
    const results = users.filter(user =>
      user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.phoneNumber.includes(searchTerm) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(results);
  }, [searchTerm, users]);

  // Function to download CSV
  const downloadCSV = () => {
    const csvData = [["No", "Name", "PhoneNumber", "Email"]]; // CSV Header
    filteredUsers.forEach((user, index) => {
      csvData.push([index + 1, user.fullName, user.phoneNumber, user.email, user.image]);
    });

    const csvContent = `data:text/csv;charset=utf-8,${csvData.map(e => e.join(",")).join("\n")}`;
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "users_data.csv");
    document.body.appendChild(link);
    link.click();
  };

  // Handle opening the modal to show image
  const openModal = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  // Handle closing the modal
  const closeModal = () => {
    setSelectedUser(null);
    setIsModalOpen(false);
  };

    

  return (
    <div className="p-4 flex flex-col items-center">
      <h1 className='text-3xl poppins-extrabold md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#678BFF] to-[#9E77FB] text-center drop-shadow-lg'>
          Daftar Peserta Main Event
        </h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by name, phone number, or email"
        className="border py-3 px-5 rounded-full mb-4 w-[90%] mt-10 md:w-[80%] text-sm md:text-base"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Table */}
      <table className="table-auto text-sm md:text-base w-[90%] mb-4 text-white">
        <thead>
          <tr>
            <th className="px-4 py-2">No</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">PhoneNumber</th>
            <th className="px-4 py-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user, index) => (
              <tr key={index} className="text-center">
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{user.fullName}</td>
                <td className="border px-4 py-2">{user.phoneNumber}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => openModal(user)}
                    className="text-blue-500 underline"
                  >
                    Show Image
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center py-4">
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Download CSV Button */}
      <button
        onClick={downloadCSV}
        className="bg-gradient-to-b from-[#3E5399] to-[#9E77FB] text-white font-semibold py-5 px-12 rounded-full text-base md:text-lg mt-5 z-10"
      >
        Download CSV
      </button>

      {/* Modal to show image */}
      {isModalOpen && selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-2xl mb-4">{selectedUser.fullName}'s Image</h2>
            {selectedUser.image ? (
              <img src={selectedUser.image} alt={selectedUser.fullName} className="w-64 h-64 object-cover" />
            ) : (
              <p>No image available</p>
            )}
            <button
              onClick={closeModal}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersPage;
