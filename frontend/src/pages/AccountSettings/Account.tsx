import { useState } from "react";
import { usersService } from "../../services/UsersService";
import { jwtDecode } from "jwt-decode";

const AccountSettings = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const handlePasswordChange = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  const handleChangePassword = async () => {
    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match.");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("No token found");
        return;
      }
      const decoded = jwtDecode(token);
      const userId = decoded.userId;

      await usersService.changePassword(userId, currentPassword, newPassword);
      alert("Password changed successfully");

      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      setShowModal(false);
    } catch (error) {
      console.error("Error changing password:", error);
      alert("Error changing password");
    }
  };

  const handleSaveChanges = async () => {
    try {
      const token = localStorage.getItem("token"); // to get the user id
      if (!token) {
        alert("No token found");
        return;
      }
      const decoded = jwtDecode(token);
      const id = decoded.userId;

      if (!id) {
        console.error("User ID not found in token");
        return;
      }

      await usersService.updateUser(id, username, email, role);
      alert("User updated successfully");
    } catch (error) {
      console.error("Error updating user:", error);
      alert("Error updating user");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="w-full max-w-md p-8 space-y-6 rounded-lg bg-white shadow-lg font-inter">
        <h2 className="text-center text-2xl font-bold text-gray-900">
          Account Details
        </h2>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username:
            </label>
            <input
              type="text"
              id="username"
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="role"
              className="block text-sm font-medium text-gray-700"
            >
              Role:
            </label>
            <input
              type="text"
              id="role"
              onChange={(e) => setRole(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              onClick={handlePasswordChange}
              className="mr-5 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Change Password
            </button>
            <button
              type="button"
              onClick={handleSaveChanges}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
          {showModal && (
            <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center lg:mr-[-250px]">
              <div
                className="fixed inset-0 transition-opacity"
                aria-hidden="true"
              >
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>
              <div className="z-20 bg-white rounded-lg shadow-lg p-6 mx-auto max-w-md">
                <div className="mb-4">
                  <h3 className="text-lg font-bold mb-2">Change Password</h3>
                  <div className="mb-4">
                    <label
                      htmlFor="currentPassword"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Current Password:
                    </label>
                    <input
                      type="password"
                      id="currentPassword"
                      className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="newPassword"
                      className="block text-sm font-medium text-gray-700"
                    >
                      New Password:
                    </label>
                    <input
                      type="password"
                      id="newPassword"
                      className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="confirmPassword"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Confirm New Password:
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="mr-5 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-gray-300 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleChangePassword}
                    className="mr-5 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default AccountSettings;
