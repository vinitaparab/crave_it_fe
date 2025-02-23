import Grid from '@mui/material/Grid2';
import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Divider } from '@mui/material';

const RestaurantDetails = () => {
  return (
    <div className=" px-5 lg:px-20">
      <section>
        <h3 className=' text-gray-500 py-2 mt-10'>Home/India/Indian fast food/4</h3>
        <div>
          <Grid container spacing={2}>
            <Grid size={12}>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://images.unsplash.com/photo-1481833761820-0509d3217039?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D"
                alt=""
              />
            </Grid>

            <Grid size={6}>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://media.istockphoto.com/id/850759554/photo/chairs-and-counters-coffee-shop-bar-table-seat-dining-table-in-the-restaurant-has-a-plate-of.jpg?s=612x612&w=0&k=20&c=jss4FlpbRqadJZVb1NEvwnpz1uJBbyUXLTnvm3YkbAA="
                alt=""
              />
            </Grid>
            <Grid size={6}>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
            </Grid>
          </Grid>

        </div>
        <div className=' pt-5 pb-5'>
          <p className=' text-gray-500 mt-1'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nihil deserunt 
  eligendi animi, laudantium nostrum, quia, aliquam maiores blanditiis mollitia 
  sunt dolorum numquam totam. Sint aspernatur culpa officia numquam dignissimos!
          </p>
          <h1 className=' text-4xl font-semibold'>Indian fasr food</h1>
          <div className=' space-y-3 mt-3'>

          </div>
            <p className=' text-gray-500 flex items-center gap-3'>
              <LocationOnIcon/>
            <span>
            Mumbai ,Maharashtra
            </span>

            </p>

            <p className=' text-gray-500 flex items-center gap-3'>
              <CalendarTodayIcon/>
            <span>
              Mon-Sun: 9:00 AM- 9:00 PM (Today  )
            </span>

            </p>
        </div>
      </section>
      <Divider/>
      <section className='pt-[2rem] lg:flex relative'>

      <div className=' space-y-10 lg:w-[20%] fill-transparent'>
        <div className=' space-y-10'>

        </div>

      </div>

      <div className=' space-y-5 lg:w-[80%] lg:pl-10'>menu</div>
      </section>
    </div>
  );
};

export default RestaurantDetails;
