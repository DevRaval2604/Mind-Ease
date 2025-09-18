// ...existing code...
function Sidebar() {
  return (
    <aside className="w-60 shrink-0 border-r border-gray-200 p-4 hidden md:block sticky top-0 h-screen overflow-y-auto">
      <div className="font-semibold text-gray-900 mb-4">MindEase</div>
      <nav className="space-y-2 text-sm">
        <a className="block px-3 py-2 rounded-md bg-blue-50 text-blue-700" href="/dashboard">Dashboard</a>
        <a className="block px-3 py-2 rounded-md hover:bg-gray-50" href="/appointments/book">Appointments</a>
        <a className="block px-3 py-2 rounded-md hover:bg-gray-50" href="/profile">Profile</a>
        <a className="block px-3 py-2 rounded-md hover:bg-gray-50" href="#">Settings</a>
      </nav>
    </aside>
  );
}

export default Sidebar;