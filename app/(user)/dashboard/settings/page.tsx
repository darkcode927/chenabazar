export default function SettingsPage() {
  return (
    <div className="space-y-6">

      <h1 className="text-4xl font-black text-gray-800">
        Settings
      </h1>

      <div className="bg-white rounded-3xl shadow-xl p-8 space-y-5">

        <div className="flex items-center justify-between">
          <p className="font-semibold">
            Dark Mode
          </p>

          <button className="bg-sky-500 text-white px-4 py-2 rounded-xl">
            Enable
          </button>
        </div>

        <div className="flex items-center justify-between">
          <p className="font-semibold">
            Email Notifications
          </p>

          <button className="bg-green-500 text-white px-4 py-2 rounded-xl">
            Active
          </button>
        </div>

      </div>
    </div>
  );
}