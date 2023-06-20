import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Typography from '@mui/material/Typography';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './ShowProducts.css';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


const config = require("../../helpers/config.json");

const ShowProducts = () => {


    const [openModal, setOpenModal] = useState(false);
const [foodName, setFoodName] = useState('');
const [foodDescription, setFoodDescription] = useState('');
const [foodPrice, setFoodPrice] = useState('');
const [foodQuantity, setFoodQuantity] = useState('');
const [foodAvailability, setFoodAvailability] = useState('Available');
const handleOpenModal = () => {
  setOpenModal(true);
};

const handleCloseModal = () => {
  setOpenModal(false);
};
const handleAddFood = () => {
    if (!foodName || !foodDescription || !foodPrice || !foodQuantity || !foodAvailability) {
      alert("Please fill in all the fields.");
      return;
    }
  
    if (isNaN(foodPrice) || parseFloat(foodPrice) <= 0) {
      alert("Please enter a valid Food Price.");
      return;
    }
  
    if (isNaN(foodQuantity) || parseInt(foodQuantity) <= 0) {
      alert("Please enter a valid Food Quantity.");
      return;
    }
  
    const foodData = {
      name: foodName,
      description: foodDescription,
      price: foodPrice,
      quantity: foodQuantity,
      availability: foodAvailability
    };
    console.log(foodData);
  
    fetch(`${config['baseUrl']}/foodItemInsert`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(foodData)
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 200) {
          window.location.reload(false);
          // Food item added successfully
          handleCloseModal();
          // Refresh the data or update the state to show the new food item
        } else {
          // Error occurred while adding food item
          console.log(res.message);
        }
      })
      .catch((error) => console.log("Error", error));
  };
  
  const UpdateAvailability =(id,statuss)=>{
    console.log(statuss,id);
    // return
    fetch(`${config['baseUrl']}/UpdateFoodAvailability`, {
        method: "POST",
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
            "food_id": id,
            "availability": statuss
        })
    }).then(res => {
        return res.json();
    }).then(res => {
        console.log(res.message)
        window.location.reload(true)

    }).catch(err => console.log("error", err))
 }


  const [value, setValue] = useState(2.5);
  const [data, setData] = useState(null);
  const [images, setImages] = useState([]);
  const [filterValue, setFilterValue] = useState('');

  useEffect(() => {
    fetch(`${config['baseUrl']}/getAllFoods`, {
      method: 'GET',
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 200) {
          setData([...res.foods]);
        }
      })
      .catch((error) => console.log("Error", error));
  }, []);

  useEffect(() => {
    fetch(`${config['baseUrl']}/getAllFoods`, {
      method: 'GET',
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 200) {
          setImages([...res.images]);
        }
      })
      .catch((error) => console.log("Error", error));
  }, []);

  const DeleteFood = async (id) => {
    try {
      const response = await fetch(`${config['baseUrl']}/DeleteFood`, {
        method: "POST",
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          "food_id": id
        })
      });
  
      if (response.ok) {
        // Remove the deleted food item from the data state
        setData((prevData) => prevData.filter((food) => food.food_id !== id));
      } else {
        const errorData = await response.json();
        console.log(errorData.message);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };
  
  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return `${description.substring(0, maxLength)}...`;
    }
    return description;
  };

  const [expanded, setExpanded] = useState({});

  const handleToggleExpand = (foodId) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [foodId]: !prevExpanded[foodId]
    }));
  };

  return (
    <>
      <div className="container-fluid">
        <div className="col-md-12 aera bg-white  mt-4 p-5 sticky">
          <div className="row">
            <div className="col-md-6">
              <h1 className="text-start">All Foods</h1>
            </div>
            <div className="col-md-6">
              <div className="input">
                <input
                  type="text"
                  className="form-control text-start"
                  value={filterValue}
                  onChange={(e) => setFilterValue(e.target.value)}
                  placeholder="Search Food"
                />
              </div>
            </div>
          </div>
          <div className="row">
            {data ? (
              <>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="left">Food image</TableCell>
                        <TableCell align="left">Food name</TableCell>
                        <TableCell align="left">Food description</TableCell>
                        <TableCell align="left">Food price</TableCell>
                        <TableCell align="left">Food Quantity</TableCell>
                        <TableCell align="left">Food Availabity</TableCell>
                        <TableCell align="left">Food Last Restocked</TableCell>
                        <TableCell align="left">Delete Food</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data
                        .filter((data) => data.name.toLowerCase().includes(filterValue.toLowerCase()))
                        .map((data) => (
                          <TableRow key={data.food_id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell align="left">
                              {/* <p>{`${config['baseUrl']}${images.length > 0 ? images.filter(images => images.food_id_id === data.id)[0].path : ""}`}</p>
                              <img src={`${config['baseUrl']}${images.length > 0 ? images.filter(images => images.food_id_id === data.id)[0].path : ""}`} className='logo-img' alt="sds" />
                              <img src={`${config['baseUrl']}${data.image}`} className='logo-img' alt="" /> */}
                            </TableCell>
                            <TableCell align="left">{data.name}</TableCell>
                            <TableCell align="left">
                              {expanded[data.food_id] ? (
                                data.description
                              ) : (
                                truncateDescription(data.description, 100)
                              )}
                              {data.description.length > 100 && (
                                <Button variant="text" onClick={() => handleToggleExpand(data.food_id)}>
                                  {expanded[data.food_id] ? "Show less" : "Show more"}
                                </Button>
                              )}
                            </TableCell>
                            <TableCell align="left">Rs. {data.price}</TableCell>
                            <TableCell align="left">{data.quantity}</TableCell>
                            <TableCell align="left">{data.is_available}
                            {
                                                                                
                              data.is_available === "Unavailable" ?
                                <Button onClick={()=>{UpdateAvailability(data.food_id,data.is_available)}} variant="contained" style={{fontSize:12}}color="primary">Set as Available</Button>
                                :
                                <Button onClick={()=>{UpdateAvailability(data.food_id,data.is_available)}}  variant="contained" style={{fontSize:12}} color="secondary">Set as Unavailable</Button>
    
                            }
                            </TableCell>
                            <TableCell align="left">
                              {new Date(data.lastRestokedAt).toLocaleDateString('en-GB')}
                            </TableCell>
                            <Button variant="outlined"className='mt-3 mb-3' onClick={() => DeleteFood(data.food_id)}>
                              Delete Food
                            </Button>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </>
            ) : (
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <CircularProgress />
              </Box>
            )}
          </div>


        <div className="col">
            <div className="row">
            <Button variant="contained" className="mt-4 "  style={{ display: "flex", justifyContent: "center" , width:"200px", marginLeft:"40%"}}onClick={handleOpenModal}>
    Add Food
  </Button>
            </div>
        </div>
  <Modal open={openModal} onClose={handleCloseModal}>
  <Box
    sx={{
      position: 'absolute',
      top: '50%',
      left: '50%',  
      transform: 'translate(-50%, -50%)',
      bgcolor: 'background.paper',
      boxShadow: 24,
      borderRadius: 8,
      p: 4,
      minWidth: 300,
      maxWidth: 400,
      outline: 'none',
    }}
  >
    <Typography variant="h5" sx={{ mb: 2 }}>
      Add Food Item
    </Typography>
    <FormControl fullWidth sx={{ mb: 2 }}>
      <TextField
        label="Food Name"
        value={foodName}
        onChange={(e) => setFoodName(e.target.value)}
      />
    </FormControl>
    <FormControl fullWidth sx={{ mb: 2 }}>
      <TextField
        label="Food Description"
        value={foodDescription}
        onChange={(e) => setFoodDescription(e.target.value)}
      />
    </FormControl>
    <FormControl fullWidth sx={{ mb: 2 }}>
      <TextField
        label="Food Price"
        value={foodPrice}
        onChange={(e) => setFoodPrice(e.target.value)}
       
      />
    </FormControl>
    <FormControl fullWidth sx={{ mb: 2 }}>
      <TextField
        label="Food Quantity"
        value={foodQuantity}
        onChange={(e) => setFoodQuantity(e.target.value)}
       
      />
    </FormControl>
    <FormControl fullWidth sx={{ mb: 2 }}>
      <InputLabel >Food Availability</InputLabel>
      <Select className='mt-2'
        value={foodAvailability}
        onChange={(e) => setFoodAvailability(e.target.value)}
      >
        <MenuItem value="Available">Available</MenuItem>
        <MenuItem value="Unvailable">Unavailable</MenuItem>
      </Select>
    </FormControl>
    <Button variant="contained" onClick={handleAddFood}>
      Add Food
    </Button>
  </Box>
</Modal>
          
        </div>
      </div>
    </>
  );
};

export default ShowProducts;
