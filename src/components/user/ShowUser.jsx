import React, { useState, useEffect, forwardRef } from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import './ShowUser.css'
const config = require("../../helpers/config.json")
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const ShowUser = () => {
    const [open3, setOpen3] = useState(false);

    const handleClick3 = () => {
        setOpen3(true);
    };

    const handleClose3 = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen3(false);
    };


    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [Roles, setRoles] = useState('Manager');

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [roleId, setRoleId] = useState('');

    const [data, setdata] = useState(null);


    const DeleteUser = async (id) => {
        await fetch(`${config['baseUrl']}/DeleteSubUser`, {
          method: "POST",
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({
            "id": id
          })
        })
          .then(result => result.json())
          .then(res => {
            if (res.status === 200) {
              window.location.reload(true);
            } else {
              console.log(res.message);
            }
          })
          .catch(error => {
            console.log(error);
          });
      };
    const CreateUser = async () => {
        if (name == '') {
            alert("enter name")
        }
        else if (email == '') {
            alert("enter email")
        }
       
        else {
            console.log(name,email);
            await fetch(`${config['baseUrl']}/RegisterSubUser`, {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({
                    "username": name,
                    "email": email,
                    "role": Roles
                })
            }).then(result => {
                return result.json();
            }).then(res => {
                if (res.status == 200) {
                    console.log("User Created created", res)
                    handleClose()
                    window.location.reload(true)
                }
                else {
                    console.log(res.message)
                }
            })
        }
    }

    useEffect(() => {

        fetch(`${config['baseUrl']}/GetAllSubUsers`, {
            method: "GET",
            headers: { 'content-type': 'application/json' },

        }).then(res => {
            return res.json();
        }).then(res => {
            if (res.data && res.data.length > 0) {
                var temp = []
                temp = res.data
                setdata([...temp])
                // console.log(data)
            }
            // console.log(res.data)
        })
    }, [])
 

    return (
        <>
            <div className="container-fluid">
                <div className="col-md-12 sticky aera bg-white  mt-4 pb-5">
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <h1>Sub Admin</h1>

                        </div>
                        <div className="col-md-6 text-end">
                            <Button variant="outlined" className='my-3' onClick={handleOpen}>Create Sub Admin</Button>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            {
                                data ?
                                    <>
                                        <TableContainer component={Paper}>
                                            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                                                <TableHead>
                                                    <TableRow>
                                                    <TableCell align="left">Id</TableCell>
                                                        <TableCell align="left">Name</TableCell>
                                                        <TableCell align="center">Email</TableCell>
                                                        <TableCell align="center">Role </TableCell>
                                                        <TableCell align="left">Delete</TableCell>
                                                        {/* <TableCell align="left">Edit</TableCell> */}
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {data && data.length > 0 ? data.map((data) => (
                                                        <TableRow
                                                            key={data.name}
                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                        >
                                                            <TableCell align='left'>
                                                                {data.id}
                                                            </TableCell>
                                                            <TableCell align='left'>
                                                                {data.name}
                                                            </TableCell>
                                                            <TableCell align="center">{data.email}</TableCell>
                                                            <TableCell align="center">{data.role}</TableCell>

                                                            <TableCell align="left"><i style={{ cursor: "pointer" }} className='fa fa-trash m-none me-5 text-danger' onClick={(e) => DeleteUser(data.id)}></i></TableCell>
                                                          
                                                        </TableRow>
                                                    ))
                                                        : ""
                                                    }
                                                </TableBody>
                                            </Table>
                                        </TableContainer>

                                    </> : <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <CircularProgress />
                                    </Box>
                            }
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-12 text-center">

                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <span onClick={handleClose} className='cross cursor'>
                                                <svg width={40} height={40} fill="CurrentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7.496 7.495a.6.6 0 0 1 .85 0l3.174 3.176 3.176-3.176a.6.6 0 0 1 .85.85l-3.177 3.174 3.176 3.176a.603.603 0 0 1 0 .85.6.6 0 0 1-.85 0l-3.175-3.177-3.175 3.176a.6.6 0 1 1-.85-.85l3.177-3.175-3.176-3.175a.6.6 0 0 1 0-.85Z" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 mb-3 text-center">
                                            <h3>Create Sub Admin</h3>
                                        </div>
                                    </div>
                                    <div className="role-input">
                                        <input placeholder='Enter username' name='from_name' type="text" onChange={(e) => setName(e.target.value)} className="form-control" />
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="role-input mt-2">
                                                <input placeholder='Enter useremail' name='user_email' type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                   
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="role-input mt-2">
                                                <label >Select Role</label>
                                                <br />
                                                <Select className='mt-2'
                                                    value={Roles}
                                                    onChange={(e) => setRoles(e.target.value)}
                                                >
                                                    <MenuItem value="Manager">Manager</MenuItem>
                                                    <MenuItem value="Chef">Chef</MenuItem>
                                                </Select>
                                            </div>
                                        </div>
                                    </div>
                                    <Button variant="outlined" className="me-2 mt-2" onClick={() => { CreateUser() }}>Add User</Button>
                                </Box>
                            </Modal>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ShowUser