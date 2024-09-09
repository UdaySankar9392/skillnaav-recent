import React from 'react';
import AdminNavBar from './AdminNavBar'; // Adjust path if needed
import AdminSideBar from './AdminSideBar'; // Adjust path if needed
import AdminBodyContent from './AdminBodyContent'; // Adjust path if needed
import { AdminProvider } from './AdminContextApi/AdminContext'; // Ensure path is correct

const AdminMain = () => {
  return (
    <AdminProvider>
      <div className="flex">
        <AdminSideBar />
        <div className="flex-1 flex flex-col">
          <AdminNavBar />
          <AdminBodyContent />
        </div>
      </div>

    </AdminProvider>
  );
};

export default AdminMain;
