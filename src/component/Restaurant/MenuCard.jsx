import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";

// const ingredients=[
//     {
//          category:"Nuts & seeds",
//          ingredients:"Cashews"
//     },
//     {
//         category:"Protein",
//         ingredients:"Protein"
//     },
//     {
//         category:"Protein",
//         ingredients:"Bacon strips"
//     },
// ]
const demo = [
  {
    category: "Nuts & seeds",
    ingredients: ["Cashews"],
  },
  {
    category: "Protein",
    ingredients: ["Ground beef", "Bacon strips"],
  },
];

const MenuCard = () => {
  const handleCheckBoxChange = (value) => {
    console.log("vale");
  };
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <div className=" lg:flex items-center justify-between">
          <div className=" lg:flex items-center lg:gap-5">
            <img
              className=" w-[7rem] h-[7rem] object-cover"
              src="https://media.istockphoto.com/id/998309062/photo/burger-with-beef-and-cheese.jpg?b=1&s=612x612&w=0&k=20&c=mHsQePbxqrXOk5V7ImuJP0HiFr5ed_1FbFa4eDCwwkE="
              alt=""
            />
            <div className=" space-y-5 lg:space-y-5 lg:max-w-2xl">
              <p className=" font-semibold text-xl">Burger</p>
              <p>₹499</p>
              <p className=" text-gray-400">Nice food</p>
            </div>
          </div>
        </div>
        Accordian
        <Typography component="span">Accordion 1</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <form>
          <div className=" flex gap-5 flex-wrap">
            {demo.map((item) => (
              <div>
                <p>{item.category}</p>
                <FormGroup>
                  <FormGroup>
                    {item.ingredients.map((item) => (
                      <FormControlLabel
                        control={
                          <Checkbox
                            onchange={() => handleCheckBoxChange(item)}
                          />
                        }
                        label={item}
                      />
                    ))}
                  </FormGroup>
                </FormGroup>
              </div>
            ))}
          </div>
          <div className=" pt-5">
            <Button variant=" contained" disabled={false} type="submit">
              {true ? "Add to cart" : "Out Of Stock"}
            </Button>
          </div>
        </form>
      </AccordionDetails>
    </Accordion>
  );
};

export default MenuCard;
