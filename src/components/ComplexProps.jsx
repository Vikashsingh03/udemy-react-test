import { useState } from "react";

function UserProfileCard({ user, theme, actions }) {
  return (
    <div className={`p-6 rounded-xl shadow-md ${theme.backGroundColor} ${theme.textColor}`}>

      <div className="flex items-start gap-4">
        
        <div className={`w-16 h-16 rounded-full ${theme.avatarBg} flex items-center justify-center text-2xl`}>
          {user.avatar}
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-bold mb-1">{user.name}</h3>
          <p className="text-sm opacity-80 mb-2">{user.email}</p>

          <div className="flex gap-2 text-xs">
            <span className={`px-3 py-1 rounded-full font-medium ${theme.badgeBg}`}>
              {user.role}
            </span>
            <span className={`px-3 py-1 rounded-full font-medium ${theme.badgeBg}`}>
              {user.status}
            </span>
          </div>
        </div>
      </div>

      {user.stats && (
        <div className="mt-5 pt-4 border-t border-gray-300 grid grid-cols-3 gap-4">
          {Object.entries(user.stats).map(([key, value]) => (
            <div key={key} className="text-center">
              <div className="text-xl font-bold">{value}</div>
              <div className="text-xs opacity-70 capitalize">{key}</div>
            </div>
          ))}
        </div>
      )}

      {actions && (
        <div className="mt-5 flex gap-3">
          
          {actions.primary && (
            <button
              onClick={actions.primary.onClick}
              className={`flex-1 py-2 px-4 cursor-pointer rounded-lg text-sm font-medium transition ${actions.primary.className}`}
            >
              {actions.primary.label}
            </button>
          )}

          {actions.secondary && (
            <button
              onClick={actions.secondary.onClick}
              className="flex-1 py-2 cursor-pointer px-4 rounded-lg text-sm font-medium border border-gray-300 hover:bg-gray-100 transition"
            >
              {actions.secondary.label}
            </button>
          )}

        </div>
      )}
    </div>
  );
}

function ComplexProps() {
  const [message,setMessage] = useState("")
  const users = [
    {
      user: {
        name: "Alice Johnson",
        email: "alice@example.com",
        avatar: "👧",
        role: "Admin",
        status: "Active",
        stats: {
          posts: 145,
          followers: 2834,
          following: 421,
        },
      },
      theme: {
        backGroundColor: "bg-gradient-to-br from-purple-100 to-blue-100",
        textColor: "text-gray-800",
        avatarBg: "bg-purple-300",
        badgeBg: "bg-purple-200",
      },
      actions: {
        primary: {
          label: "View Profile",
          onClick: () => alert("Viewing Alice's Profile"),
          className: "bg-purple-500 text-white hover:bg-purple-600",
        },
        secondary: {
          label: "Message",
          onClick: () => alert("Opening Message to Alice"),
        },
      },
    },

    {
      user: {
        name: "Bob Smith",
        email: "bob@example.com",
        avatar: "👦",
        role: "Developer",
        status: "Online",
        stats: {
          projects: 28,
          commits: 1531,
          reviews: 89,
        },
      },
      theme: {
        backGroundColor: "bg-gradient-to-br from-green-100 to-green-100",
        textColor: "text-gray-800",
        avatarBg: "bg-green-300",
        badgeBg: "bg-green-200",
      },
      actions: {
        primary: {
          label: "View Profile",
          onClick: () => alert("Viewing Bob's Profile"),
          className: "bg-green-500 text-white hover:bg-green-600",
        },
        secondary: {
          label: "Message",
          onClick: () => alert("Opening Message to Bob"),
        },
      },
    },

  ]

  return (
    <div className="p-8 bg-white shadow-lg rounded-xl">
      <div>
  <h3 className="text-2xl font-bold mb-2 text-gray-800">Complex/Nested Props</h3>
    <p className="text-sm mb-2 text-gray-800 ">Complex props allow you to pass nested objects and functions, enabling sophisticated component configuration and interactions.</p>
   </div>
      <h2 className="text-xl  font-bold mb-6 mt-4 text-gray-800">User Profile Cards (Nested User, Theme and Actions)</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {users.map((userData, idx) => (
          <UserProfileCard key={idx} {...userData} />
        ))}
      </div>
    </div>
  );
}

export default ComplexProps;