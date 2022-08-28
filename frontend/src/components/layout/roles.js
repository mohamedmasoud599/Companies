/// icons

const UserRole = () => {
  return [
    {
      pathname: "/RegisteredPeople",
      string: "كشف الافراد المسجلين",
    },
  ];
};

const AdminRole = () => {
  return [
    {
      pathname: "/adminstration",
      string: "تسجيل  فرد جديد",
    },

    {
      pathname: "/RegisteredPeople",
      string: "كشف الافراد المسجلين",
    },
    {
      pathname: "/employees",
      string: "كشف المواقف والتخلفات",
    },
  ];
};

export { UserRole, AdminRole };
