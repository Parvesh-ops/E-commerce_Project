import React, { useEffect, useState } from "react";
import axios from "axios";

const Setting = () => {
  const [user, setUser] = useState(null);
  const [language, setLanguage] = useState("English");
  const [currency, setCurrency] = useState("USD");

  const [passwords, setPasswords] = useState({
    current: "",
    newPass: "",
    confirmPass: "",
  });

  useEffect(() => {
    async function loadUser() {
      try {
        const res = await axios.get("https://fakestoreapi.com/users/1");
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    loadUser();
  }, []);

  if (!user) return <p className="p-4">Loading settings...</p>;

  // ===========================
  // HANDLERS
  // ===========================
  const handleProfileUpdate = () => {
    alert("Profile updated successfully! (FakeStoreAPI is read-only)");
  };

  const handlePreferencesSave = () => {
    alert("Preferences saved!");
  };

  const handlePasswordChange = () => {
    if (passwords.newPass !== passwords.confirmPass) {
      alert("New passwords do not match!");
      return;
    }

    alert("Password updated! (FakeStoreAPI does not allow real update)");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      {/* =========================== PROFILE SETTINGS =========================== */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            className="border px-3 py-2 rounded"
            type="text"
            value={user.name.firstname}
            onChange={(e) =>
              setUser({
                ...user,
                name: { ...user.name, firstname: e.target.value },
              })
            }
          />

          <input
            className="border px-3 py-2 rounded"
            type="text"
            value={user.name.lastname}
            onChange={(e) =>
              setUser({
                ...user,
                name: { ...user.name, lastname: e.target.value },
              })
            }
          />

          <input
            className="border px-3 py-2 rounded"
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />

          <input
            className="border px-3 py-2 rounded"
            type="text"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
        </div>

        <button
          onClick={handleProfileUpdate}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Save Profile
        </button>
      </div>

      {/* =========================== STORE PREFERENCES =========================== */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">Store Preferences</h2>


        {/* Language */}
        <div className="mb-4">
          <label className="block mb-2">Language</label>
          <select
            className="border px-3 py-2 rounded"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option>English</option>
            <option>Nepali</option>
            <option>Hindi</option>
            <option>Spanish</option>
          </select>
        </div>

        {/* Currency */}
        <div>
          <label className="block mb-2">Currency</label>
          <select
            className="border px-3 py-2 rounded"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">USD ($)</option>
            <option value="NPR">NPR (रु)</option>
            <option value="EUR">EUR (€)</option>
            <option value="INR">INR (₹)</option>
          </select>
        </div>

        <button
          onClick={handlePreferencesSave}
          className="mt-4 px-4 py-2 bg-green-600 text-white rounded"
        >
          Save Preferences
        </button>
      </div>

      {/* =========================== SECURITY SETTINGS =========================== */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Security</h2>

        <input
          type="password"
          placeholder="Current Password"
          className="border w-full px-3 py-2 rounded mb-3"
          onChange={(e) =>
            setPasswords({ ...passwords, current: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="New Password"
          className="border w-full px-3 py-2 rounded mb-3"
          onChange={(e) =>
            setPasswords({ ...passwords, newPass: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Confirm New Password"
          className="border w-full px-3 py-2 rounded mb-3"
          onChange={(e) =>
            setPasswords({ ...passwords, confirmPass: e.target.value })
          }
        />

        <button
          onClick={handlePasswordChange}
          className="px-4 py-2 bg-red-600 text-white rounded"
        >
          Update Password
        </button>
      </div>
    </div>
  );
};

export default Setting;
