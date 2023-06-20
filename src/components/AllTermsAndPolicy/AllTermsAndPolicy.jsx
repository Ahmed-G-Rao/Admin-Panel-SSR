import React, { useState, useEffect, useRef } from 'react';
import "./AllTermsAndPolicy.css"
import Modal from "react-modal";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import 'rsuite/dist/rsuite.min.css'
const config = require('../../helpers/config.json');

const AllTermsAndPolicy = () => {
  const [data, setdata] = useState("")
  const [check, setcheck] = useState(null)
  const [description, setdescription] = useState("");

  useEffect(() => {
    fetch(`${config['baseUrl']}/getTermsAndConditions`, {
      method: "GET",
      headers: { 'content-type': 'application/json' }
    }).then(res => {
      return res.json()
    }).then(res => {
      if (res.data && res.data.length > 0) {
        setdata(res.data[0].description)
        setcheck(res.data)
      }
    })


  }, [])
  const Update = () => {
    const submit = { description: data, id:3 }
    fetch(`${config['baseUrl']}/UpdateTermsAndConditions`, {
      method: "POST",
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(submit)
    }).then(res => {
      return res.json()
    }).then(res => {
      window.location.reload(true)
      console.log(`Updated terms and conditions`)
    })
  }
  return (
    <>
      <div className="container-fluid bg-white ">
        <div className="col-md-12 justify-content-center aera bg-white  mt-4 pb-5 sticky">
          <div className="row">
            <div className="col-md-12 mt-4">
              <h1>Terms and conditions</h1>
            </div>
          </div>
          {
            check ?
              <textarea
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    Update();
                  }
                  else if (e.key === "Shift + Enter") {
                    alert(e.key)
                  }
                }}
                name="" onChange={(e) => setdata(e.target.value)} className='form-control' id="" cols="30" rows="10" value={data}></textarea>
              : <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <CircularProgress />
              </Box>
          }
          <div className="row">
            <div className="col-md-12 mt-2 text-end">
              <button
                onClick={Update}
                className='btn-c '>Update</button>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}

export default AllTermsAndPolicy