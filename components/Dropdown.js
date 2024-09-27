import React, { useState } from "react";
import { useSelector } from "react-redux";

const Dropdown = ({ trigger, menu }) => {
  const [open, setOpen] = useState(false);
  const darkMode = useSelector((state) => state.darkMode);

  return (
    <div className="relative inline-block">
      {React.cloneElement(trigger, { onClick: () => setOpen(!open) })}
      {open && (
        <div
          className={`absolute p-4 z-10 right-0 mt-2 w-[160px] rounded shadow-lg ${
            darkMode ? "bg-sky-950  " : "bg-white"
          } `}
        >
          <ul className=" p-2 list-none">
            {menu.map((menuItem, index) => (
              <li key={index} className="text-[16px] mb-6">
                {React.cloneElement(menuItem, {
                  onClick: () => {
                    menuItem.props.onClick();
                    setOpen(false);
                  },
                })}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
