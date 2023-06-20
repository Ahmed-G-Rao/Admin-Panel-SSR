import React, { useState, useEffect, forwardRef } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import CircularProgress from '@mui/material/CircularProgress';
import './ShowOrders.css'
const config = require("../../helpers/config.json")
const ShowOrders = () => {
    const [order, setOrder] = useState(null)
    const [user,setUser] = useState(null)
    const [productData, setProductData] = useState([])
    const [vendor, setVendor] = useState([])
    useEffect(() => {
        fetch(`${config['baseUrl']}/GetAllOrders`, {
            method: 'GET',
            headers: { "content-type": "application/json" }
        }).then(res => {
            return res.json();
        }).then(res => {

            if (res.data.length > 0) {
                let temp = []
                temp = res.data
                setOrder([...temp])
            }
        })
    }, [])
   
 const UpdateStatus =(id,statuss)=>{
    fetch(`${config['baseUrl']}/UpdateOrderStatus`, {
        method: "POST",
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
            "order_id": id,
            status: statuss
        })
    }).then(res => {
        return res.json();
    }).then(res => {
        // console.log(res.message)
        window.location.reload(true)

    }).catch(err => console.log("error", err))
 }
    return (
        <>
            <div className="container-fluid mx-4">
                <div className="row">
                    <div className="col-md-12 text-start aera bg-white  mt-4 p-5">
                        <h1>Orders</h1>
                        <div className="row">
                            <div className="col-md-12 ">
                                {order ?
                                    <>
                                        <TableContainer component={Paper}>
                                            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell align="left">Order Id</TableCell>
                                                        <TableCell align="left">User Id</TableCell>
                                                        <TableCell align="left">Order Details</TableCell>
                                                        <TableCell align="left">Ordered Amount</TableCell>
                                                        <TableCell align="left">Ordered At</TableCell>
                                                        <TableCell align="left">Table Id</TableCell>
                                                        <TableCell align="left">Status</TableCell>
                                                        <TableCell align="left">Change Status</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {
                                                        order && order.length > 0 ? order.map((item) => {
                                                            return (
                                                                <>
                                                                    <TableRow
                                                                        key={item.id}
                                                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                                    >

                                                                        <TableCell align='left'>
                                                                          {item.order_id}
                                                                        </TableCell>
                                                                        <TableCell align='left'>
                                                                           {item.user_id}
                                                                        </TableCell>
                                                                        <TableCell align='left'>
                                                                            {item.order_details && typeof item.order_details === 'string' && item.order_details.startsWith('[') && item.order_details.endsWith(']')
                                                                                ? JSON.parse(item.order_details).join(',\t\n')
                                                                                : item.order_details
                                                                            }
                                                                        </TableCell>

                                                                        <TableCell align='left'>
                                                                            {item.amount}
                                                                        </TableCell>
                                                                        <TableCell align='left'>
                                                                            {new Date(item.ordered_at).toLocaleString('en-GB', {
                                                                                day: '2-digit',
                                                                                month: '2-digit',
                                                                                year: '2-digit',
                                                                                hour: '2-digit',
                                                                                minute: '2-digit',
                                                                            })}
                                                                        </TableCell>
                                                                        <TableCell align='left'>
                                                                            {item.table_id}
                                                                        </TableCell>
                                                                        <TableCell align='left'>
                                                                            {item.status}
                                                                           
                                                                        </TableCell>
                                                                        <TableCell align='left'>
                                                                        {
                                                                                
                                                                                item.status === "pending" ?
                                                                                <Button onClick={()=>{UpdateStatus(item.order_id,item.status)}} variant="contained" style={{fontSize:12}}color="primary">Set as Approved</Button>
                                                                                :
                                                                                <Button onClick={()=>{UpdateStatus(item.order_id,item.status)}}  variant="contained" style={{fontSize:12}} color="secondary">Set as Pending</Button>
    
                                                                        }
                                                                        </TableCell>
                                                                        
                                                        </TableRow>

                                                                </>
                                                            )
                                                        }) : ""
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
                    </div>
                </div>



            </div>

        </>
    )
}

export default ShowOrders