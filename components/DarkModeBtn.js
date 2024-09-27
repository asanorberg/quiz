import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "@/redux/darkMode";
import { DarkModeSwitch } from "react-toggle-dark-mode";

function DarkModeButton() {
  const darkMode = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };
  return (
    <DarkModeSwitch
      className="text-teal-50"
      onChange={handleToggleDarkMode}
      checked={darkMode}
    />

    //   <button className={``} >
    //   {darkMode ? "Switch to light mode" : "Switch to dark mode"}
    // </button>
  );
}

export default DarkModeButton;
