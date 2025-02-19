import { Avatar, colors, IconButton } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { deepOrange, orange } from "@mui/material/colors";

export const Navbar = () => {
  return (
    <div className="px-5 z-50 py-[.8rem] bg-[#f46c17] lg:px-20 flex justify-between">
      <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
        <li className="logo font-semibold text-gray-300 text-2xl">
          CraveIt
        </li>
      </div>

    <div className="flex items-center space-x-2 lg:space-x-10">
        <div className="">
          <IconButton>
            <SearchIcon sx={{ fontSize: "1.5rem" }} />
          </IconButton>
        </div>
        <div className="">
          <Avatar sx={{bgcolor:"white",colors:deepOrange}}>P</Avatar>
        </div>
      </div>
    </div>
  );
};
