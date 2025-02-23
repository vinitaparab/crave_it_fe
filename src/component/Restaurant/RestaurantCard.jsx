import { Card, Chip, IconButton } from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const RestaurantCard = () => {
  return (
    <Card className=" w-[18rem]">
      <div
        className={`${
          true ? "cursor-pointer" : " cursor-not-allowed"
        } relative`}
      >
        <img
          className=" w-full h-[10] rounded-t-md object-cover"
          src="https://media.istockphoto.com/id/1163284610/photo/very-stylish-indian-gourmet-restaurant.jpg?s=612x612&w=0&k=20&c=-0Bz0mNjnrDoXApfo6P_xBrKmIMPZYJwQ5zAGEpzThI="
          alt=""
        />
        <Chip
          size=" small"
          className=" absolute top-2 left-2"
          color={true ? "success" : "error"}
          label={true ? "open" : "closed"}
        />
      </div>
      <div className="p-4 textPart lg:flex w-full justify-between">
        <div className="space-y-1">
          <p className=" font-semibold text-lg">Villa Verona</p>
          <p className=" text-gray-500 text-sm">
            "🍕Craving something delicious? One search, endless flavors!"
          </p>
        </div>
        <div>
          <IconButton>
            {true ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </div>
      </div>
    </Card>
  );
};

export default RestaurantCard;
