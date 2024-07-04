import AdminHeader from "@/src/common/admin-header";
import Footer from "@/src/common/footer";
import Admin from "@/src/components/admin/admin";
import React from "react";

const AdminPage = () => {
  return (
    <React.Fragment>
      <AdminHeader/>
      <Admin />
      <Footer />
    </React.Fragment>
  );
};

export default AdminPage;
