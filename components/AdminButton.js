const AdminButton = ({ onClick, isAdminPage, darkMode, className }) => {
  let buttonClassName = "";

  if (!className) {
    buttonClassName = `hover:text-gray-300 border-none text-[16px] cursor-pointer rounded-sm ${
      darkMode ? "bg-blue text-green-100" : "bg-green-600 text-green-50"
    }`;
  } else {
    buttonClassName = className;
  }

  return (
    <button onClick={onClick} className={buttonClassName}>
      {isAdminPage ? "Log out" : "Admin"}
    </button>
  );
};

export default AdminButton;
