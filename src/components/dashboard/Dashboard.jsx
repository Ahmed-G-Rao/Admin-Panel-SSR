
import React, { useState, useEffect } from "react"
import "./Dashboard.css"
import burger from "../../assets/dashboard/OADjlP.png"
import Charts from "./piechart"
import { Link } from 'react-router-dom'
const config = require("../../helpers/config.json")

const Dashboard = (props) => {
  const [vendor, setVendor] = useState([])
  const [product, setProduct] = useState([])
  const [category, setCategory] = useState([])
  const [order, setOrder] = useState([])
  useEffect(() => {
    fetch(`${config['baseUrl']}/getAllVendors`, {
      method: "GET",
      headers: { "content-type": "application/json" }
    }).then(res => {
      return res.json();
    }).then(res => {
      if (res.data.length > 0) {
        let temp = []
        temp = res.data
        setVendor([...temp])
      }
    })
  }, [])
  useEffect(() => {
    fetch(`${config['baseUrl']}/getProducts`, {
      method: "GET",
      headers: { "content-type": "application/json" }
    }).then(res => {
      return res.json();
    }).then(res => {
      if (res.data.length > 0) {
        let temp = []
        temp = res.data
        setProduct([...temp])
      }
    })
  }, [])
  useEffect(() => {
    fetch(`${config['baseUrl']}/categoryGet`, {
      method: "GET",
      headers: { "content-type": "application/json" }
    }).then(res => {
      return res.json();
    }).then(res => {
      if (res.data.length > 0) {
        let temp = []
        temp = res.data
        setCategory([...temp])
      }
    })
  }, [])
  useEffect(() => {
    fetch(`${config['baseUrl']}/getAllOrders`, {
      method: "GET",
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
  return (
    <>
      <div className="container-fluid my-4">
        <div className="row">
          <div className="col-md-3 pb-lg-0 pb-md-0 pb-4">
            <div className="small-box bg-white">
              <div className="inner py-1">
                <div className="row" style={{ position: 'relative', top: '12px' }}>
                  <div className="col-md-4 col-4">
                    <h3 className="ml-5 font-weight-bolder hea">
                      {vendor.length}
                    </h3>
                  </div>
                  <div className="col-md-4 col-5" />
                  <div className="col-md-4 col-3">
                    <div className="icon con">
                      <svg width={60} height={60} fill="#0b2782" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 11h-3V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v14c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-6a1 1 0 0 0-1-1ZM5 19a1 1 0 0 1-1-1V5h12v13c0 .351.061.688.171 1H5Zm15-1a1 1 0 0 1-2 0v-5h2v5Z" />
                        <path d="M6 7h8v2H6V7Zm0 4h8v2H6v-2Zm5 4h3v2h-3v-2Z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="ml-4 pera">Vendors</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#0b2782" fillOpacity={1} d="M0,256L6.2,266.7C12.3,277,25,299,37,272C49.2,245,62,171,74,133.3C86.2,96,98,96,111,128C123.1,160,135,224,148,250.7C160,277,172,267,185,229.3C196.9,192,209,128,222,106.7C233.8,85,246,107,258,106.7C270.8,107,283,85,295,69.3C307.7,53,320,43,332,64C344.6,85,357,139,369,170.7C381.5,203,394,213,406,202.7C418.5,192,431,160,443,128C455.4,96,468,64,480,90.7C492.3,117,505,203,517,240C529.2,277,542,267,554,240C566.2,213,578,171,591,154.7C603.1,139,615,149,628,165.3C640,181,652,203,665,224C676.9,245,689,267,702,266.7C713.8,267,726,245,738,245.3C750.8,245,763,267,775,266.7C787.7,267,800,245,812,245.3C824.6,245,837,267,849,272C861.5,277,874,267,886,266.7C898.5,267,911,277,923,240C935.4,203,948,117,960,85.3C972.3,53,985,75,997,101.3C1009.2,128,1022,160,1034,170.7C1046.2,181,1058,171,1071,160C1083.1,149,1095,139,1108,122.7C1120,107,1132,85,1145,117.3C1156.9,149,1169,235,1182,272C1193.8,309,1206,299,1218,250.7C1230.8,203,1243,117,1255,80C1267.7,43,1280,53,1292,96C1304.6,139,1317,213,1329,213.3C1341.5,213,1354,139,1366,128C1378.5,117,1391,171,1403,170.7C1415.4,171,1428,117,1434,90.7L1440,64L1440,320L1433.8,320C1427.7,320,1415,320,1403,320C1390.8,320,1378,320,1366,320C1353.8,320,1342,320,1329,320C1316.9,320,1305,320,1292,320C1280,320,1268,320,1255,320C1243.1,320,1231,320,1218,320C1206.2,320,1194,320,1182,320C1169.2,320,1157,320,1145,320C1132.3,320,1120,320,1108,320C1095.4,320,1083,320,1071,320C1058.5,320,1046,320,1034,320C1021.5,320,1009,320,997,320C984.6,320,972,320,960,320C947.7,320,935,320,923,320C910.8,320,898,320,886,320C873.8,320,862,320,849,320C836.9,320,825,320,812,320C800,320,788,320,775,320C763.1,320,751,320,738,320C726.2,320,714,320,702,320C689.2,320,677,320,665,320C652.3,320,640,320,628,320C615.4,320,603,320,591,320C578.5,320,566,320,554,320C541.5,320,529,320,517,320C504.6,320,492,320,480,320C467.7,320,455,320,443,320C430.8,320,418,320,406,320C393.8,320,382,320,369,320C356.9,320,345,320,332,320C320,320,308,320,295,320C283.1,320,271,320,258,320C246.2,320,234,320,222,320C209.2,320,197,320,185,320C172.3,320,160,320,148,320C135.4,320,123,320,111,320C98.5,320,86,320,74,320C61.5,320,49,320,37,320C24.6,320,12,320,6,320L0,320Z">
                </path>
              </svg>
            </div>
          </div>
          <div className="col-md-3  pb-lg-0 pb-md-0 pb-4 ">
            <div className="small-box bg-white">
              <div className="inner py-1">
                <div className="row" style={{ position: 'relative', top: '12px' }}>
                  <div className="col-md-4 col-4">
                    <h3 className="ml-5 font-weight-bolder hea">
                      {product.length}
                    </h3>
                  </div>
                  <div className="col-md-4 col-5" />
                  <div className="col-md-4 col-3">
                    <div className="icon con">
                      <svg width={60} height={60} fill="none" stroke="#0b2782" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <path d="M12 3a4 4 0 1 0 0 8 4 4 0 1 0 0-8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="ml-4 pera">Products</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#0b2782" fillOpacity={1} d="M0,256L6.2,266.7C12.3,277,25,299,37,272C49.2,245,62,171,74,133.3C86.2,96,98,96,111,128C123.1,160,135,224,148,250.7C160,277,172,267,185,229.3C196.9,192,209,128,222,106.7C233.8,85,246,107,258,106.7C270.8,107,283,85,295,69.3C307.7,53,320,43,332,64C344.6,85,357,139,369,170.7C381.5,203,394,213,406,202.7C418.5,192,431,160,443,128C455.4,96,468,64,480,90.7C492.3,117,505,203,517,240C529.2,277,542,267,554,240C566.2,213,578,171,591,154.7C603.1,139,615,149,628,165.3C640,181,652,203,665,224C676.9,245,689,267,702,266.7C713.8,267,726,245,738,245.3C750.8,245,763,267,775,266.7C787.7,267,800,245,812,245.3C824.6,245,837,267,849,272C861.5,277,874,267,886,266.7C898.5,267,911,277,923,240C935.4,203,948,117,960,85.3C972.3,53,985,75,997,101.3C1009.2,128,1022,160,1034,170.7C1046.2,181,1058,171,1071,160C1083.1,149,1095,139,1108,122.7C1120,107,1132,85,1145,117.3C1156.9,149,1169,235,1182,272C1193.8,309,1206,299,1218,250.7C1230.8,203,1243,117,1255,80C1267.7,43,1280,53,1292,96C1304.6,139,1317,213,1329,213.3C1341.5,213,1354,139,1366,128C1378.5,117,1391,171,1403,170.7C1415.4,171,1428,117,1434,90.7L1440,64L1440,320L1433.8,320C1427.7,320,1415,320,1403,320C1390.8,320,1378,320,1366,320C1353.8,320,1342,320,1329,320C1316.9,320,1305,320,1292,320C1280,320,1268,320,1255,320C1243.1,320,1231,320,1218,320C1206.2,320,1194,320,1182,320C1169.2,320,1157,320,1145,320C1132.3,320,1120,320,1108,320C1095.4,320,1083,320,1071,320C1058.5,320,1046,320,1034,320C1021.5,320,1009,320,997,320C984.6,320,972,320,960,320C947.7,320,935,320,923,320C910.8,320,898,320,886,320C873.8,320,862,320,849,320C836.9,320,825,320,812,320C800,320,788,320,775,320C763.1,320,751,320,738,320C726.2,320,714,320,702,320C689.2,320,677,320,665,320C652.3,320,640,320,628,320C615.4,320,603,320,591,320C578.5,320,566,320,554,320C541.5,320,529,320,517,320C504.6,320,492,320,480,320C467.7,320,455,320,443,320C430.8,320,418,320,406,320C393.8,320,382,320,369,320C356.9,320,345,320,332,320C320,320,308,320,295,320C283.1,320,271,320,258,320C246.2,320,234,320,222,320C209.2,320,197,320,185,320C172.3,320,160,320,148,320C135.4,320,123,320,111,320C98.5,320,86,320,74,320C61.5,320,49,320,37,320C24.6,320,12,320,6,320L0,320Z">
                </path>
              </svg>
            </div>
          </div>
          <div className="col-md-3  pb-lg-0 pb-md-0 pb-4 ">
            <div className="small-box bg-white">
              <div className="inner py-1">
                <div className="row" style={{ position: 'relative', top: '12px' }}>
                  <div className="col-md-4 col-4">
                    <h3 className="ml-5 font-weight-bolder hea">
                      {category.length}
                    </h3>
                  </div>
                  <div className="col-md-4 col-5" />
                  <div className="col-md-4 col-3">
                    <div className="icon con">
                      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="#0b2782" d="m6.76 6l.45.89L7.76 8H12v5H4V6h2.76m.62-2H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H9l-.72-1.45a1 1 0 0 0-.9-.55zm15.38 2l.45.89l.55 1.11H28v5h-8V6h2.76m.62-2H19a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-4l-.72-1.45a1 1 0 0 0-.9-.55zM6.76 19l.45.89l.55 1.11H12v5H4v-7h2.76m.62-2H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1H9l-.72-1.45a1 1 0 0 0-.9-.55zm15.38 2l.45.89l.55 1.11H28v5h-8v-7h2.76m.62-2H19a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-4l-.72-1.45a1 1 0 0 0-.9-.55z" /></svg>
                    </div>
                  </div>
                </div>
                <p className="ml-4 pera">Categories</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#0b2782" fillOpacity={1} d="M0,256L6.2,266.7C12.3,277,25,299,37,272C49.2,245,62,171,74,133.3C86.2,96,98,96,111,128C123.1,160,135,224,148,250.7C160,277,172,267,185,229.3C196.9,192,209,128,222,106.7C233.8,85,246,107,258,106.7C270.8,107,283,85,295,69.3C307.7,53,320,43,332,64C344.6,85,357,139,369,170.7C381.5,203,394,213,406,202.7C418.5,192,431,160,443,128C455.4,96,468,64,480,90.7C492.3,117,505,203,517,240C529.2,277,542,267,554,240C566.2,213,578,171,591,154.7C603.1,139,615,149,628,165.3C640,181,652,203,665,224C676.9,245,689,267,702,266.7C713.8,267,726,245,738,245.3C750.8,245,763,267,775,266.7C787.7,267,800,245,812,245.3C824.6,245,837,267,849,272C861.5,277,874,267,886,266.7C898.5,267,911,277,923,240C935.4,203,948,117,960,85.3C972.3,53,985,75,997,101.3C1009.2,128,1022,160,1034,170.7C1046.2,181,1058,171,1071,160C1083.1,149,1095,139,1108,122.7C1120,107,1132,85,1145,117.3C1156.9,149,1169,235,1182,272C1193.8,309,1206,299,1218,250.7C1230.8,203,1243,117,1255,80C1267.7,43,1280,53,1292,96C1304.6,139,1317,213,1329,213.3C1341.5,213,1354,139,1366,128C1378.5,117,1391,171,1403,170.7C1415.4,171,1428,117,1434,90.7L1440,64L1440,320L1433.8,320C1427.7,320,1415,320,1403,320C1390.8,320,1378,320,1366,320C1353.8,320,1342,320,1329,320C1316.9,320,1305,320,1292,320C1280,320,1268,320,1255,320C1243.1,320,1231,320,1218,320C1206.2,320,1194,320,1182,320C1169.2,320,1157,320,1145,320C1132.3,320,1120,320,1108,320C1095.4,320,1083,320,1071,320C1058.5,320,1046,320,1034,320C1021.5,320,1009,320,997,320C984.6,320,972,320,960,320C947.7,320,935,320,923,320C910.8,320,898,320,886,320C873.8,320,862,320,849,320C836.9,320,825,320,812,320C800,320,788,320,775,320C763.1,320,751,320,738,320C726.2,320,714,320,702,320C689.2,320,677,320,665,320C652.3,320,640,320,628,320C615.4,320,603,320,591,320C578.5,320,566,320,554,320C541.5,320,529,320,517,320C504.6,320,492,320,480,320C467.7,320,455,320,443,320C430.8,320,418,320,406,320C393.8,320,382,320,369,320C356.9,320,345,320,332,320C320,320,308,320,295,320C283.1,320,271,320,258,320C246.2,320,234,320,222,320C209.2,320,197,320,185,320C172.3,320,160,320,148,320C135.4,320,123,320,111,320C98.5,320,86,320,74,320C61.5,320,49,320,37,320C24.6,320,12,320,6,320L0,320Z">
                </path>
              </svg>
            </div>
          </div>
          <div className="col-md-3  pb-lg-0 pb-md-0 pb-4 ">
            <div className="small-box bg-white">
              <div className="inner py-1">
                <div className="row" style={{ position: 'relative', top: '12px' }}>
                  <div className="col-md-4 col-4">
                    <h3 className="ml-5 font-weight-bolder hea">
                      {order.length}
                    </h3>
                  </div>
                  <div className="col-md-4 col-5" />
                  <div className="col-md-4 col-3">
                    <div className="icon con">
                      <svg width={60} height={60} fill="none" stroke="#0b2782" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 20a1 1 0 1 0 0 2 1 1 0 1 0 0-2z" />
                        <path d="M20 20a1 1 0 1 0 0 2 1 1 0 1 0 0-2z" />
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="ml-4 pera">Orders</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#0b2782" fillOpacity={1} d="M0,256L6.2,266.7C12.3,277,25,299,37,272C49.2,245,62,171,74,133.3C86.2,96,98,96,111,128C123.1,160,135,224,148,250.7C160,277,172,267,185,229.3C196.9,192,209,128,222,106.7C233.8,85,246,107,258,106.7C270.8,107,283,85,295,69.3C307.7,53,320,43,332,64C344.6,85,357,139,369,170.7C381.5,203,394,213,406,202.7C418.5,192,431,160,443,128C455.4,96,468,64,480,90.7C492.3,117,505,203,517,240C529.2,277,542,267,554,240C566.2,213,578,171,591,154.7C603.1,139,615,149,628,165.3C640,181,652,203,665,224C676.9,245,689,267,702,266.7C713.8,267,726,245,738,245.3C750.8,245,763,267,775,266.7C787.7,267,800,245,812,245.3C824.6,245,837,267,849,272C861.5,277,874,267,886,266.7C898.5,267,911,277,923,240C935.4,203,948,117,960,85.3C972.3,53,985,75,997,101.3C1009.2,128,1022,160,1034,170.7C1046.2,181,1058,171,1071,160C1083.1,149,1095,139,1108,122.7C1120,107,1132,85,1145,117.3C1156.9,149,1169,235,1182,272C1193.8,309,1206,299,1218,250.7C1230.8,203,1243,117,1255,80C1267.7,43,1280,53,1292,96C1304.6,139,1317,213,1329,213.3C1341.5,213,1354,139,1366,128C1378.5,117,1391,171,1403,170.7C1415.4,171,1428,117,1434,90.7L1440,64L1440,320L1433.8,320C1427.7,320,1415,320,1403,320C1390.8,320,1378,320,1366,320C1353.8,320,1342,320,1329,320C1316.9,320,1305,320,1292,320C1280,320,1268,320,1255,320C1243.1,320,1231,320,1218,320C1206.2,320,1194,320,1182,320C1169.2,320,1157,320,1145,320C1132.3,320,1120,320,1108,320C1095.4,320,1083,320,1071,320C1058.5,320,1046,320,1034,320C1021.5,320,1009,320,997,320C984.6,320,972,320,960,320C947.7,320,935,320,923,320C910.8,320,898,320,886,320C873.8,320,862,320,849,320C836.9,320,825,320,812,320C800,320,788,320,775,320C763.1,320,751,320,738,320C726.2,320,714,320,702,320C689.2,320,677,320,665,320C652.3,320,640,320,628,320C615.4,320,603,320,591,320C578.5,320,566,320,554,320C541.5,320,529,320,517,320C504.6,320,492,320,480,320C467.7,320,455,320,443,320C430.8,320,418,320,406,320C393.8,320,382,320,369,320C356.9,320,345,320,332,320C320,320,308,320,295,320C283.1,320,271,320,258,320C246.2,320,234,320,222,320C209.2,320,197,320,185,320C172.3,320,160,320,148,320C135.4,320,123,320,111,320C98.5,320,86,320,74,320C61.5,320,49,320,37,320C24.6,320,12,320,6,320L0,320Z">
                </path>
              </svg>
            </div>
          </div>
        </div>



        <div className="row py-5">
          <div className="col-12 col-lg-7 col-md-12 mb-lg-0 mb-0 mb-md-5">
            <div className="row ml-md-0 ml-lg-0 ml-0 mr-md-0 mr-lg-0 mr-0">
              <div className="col-md-12 aera bg-white rounded">
                <div className="row py-4">
                  <div className="col-md-12 d-flex py-2" style={{ alignItems: 'center' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-link ml-3"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
                    <h3 className="ml-3">
                      Quick Links
                    </h3>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 mb-lg-0 mb-md-0 mb-3">
                    <div className="ber text-white">
                      <Link className="text-white" to="/dashboard"><i className="fa fa-tachometer mr-0 px-0" />Dashboard</Link>
                    </div>
                  </div>
                  <div className="col-md-4 mb-lg-0 mb-md-0 mb-3">
                    <div className="ber text-white">
                      <Link className="text-white" to="/termsandconditions"><i class="fas fa-weight"></i>Terms And Conditions</Link>
                    </div>
                  </div>
                  <div className="col-md-4 mb-lg-0 mb-md-0 mb-3">
                    <div className="ber text-white">
                      <Link className="text-white" to="/privacy"><i class="fas fa-weight"></i>Manage Privacy Policy</Link>
                    </div>
                  </div>
                </div>
                <div className="row py-4">
                  <div className="col-md-4 mb-lg-0 mb-md-0 mb-3">
                    <div className="ber text-white">
                      <Link className="text-white" to="/aboutapp"><i class="fas fa-weight"></i>About App</Link>
                    </div>
                  </div>
                  <div className="col-md-4 mb-lg-0 mb-md-0 mb-3">
                    <div className="ber text-white">
                      <Link className="text-white" to="/termLength"><i class="far fa-window-maximize"></i>Term Length</Link>
                    </div>
                  </div>
                  <div className="col-md-4 mb-lg-0 mb-md-0 mb-3">
                    <div className="ber text-white">
                      <Link className="text-white" to="/rentalagreement"><i class="fab fa-product-hunt"></i>Rental Agreement</Link>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 mb-lg-0 mb-md-0 mb-3">
                    <div className="ber text-white">
                      <Link className="text-white" to="/orders"><i class="fas fa-users"></i>Orders</Link>
                    </div>
                  </div>
                  <div className="col-md-4 mb-lg-0 mb-md-0 mb-3">
                    <div className="ber text-white">
                      <Link className="text-white" to="/vendors"><i class="fas fa-users"></i>Vendors</Link>
                    </div>
                  </div>
                  <div className="col-md-4 mb-lg-0 mb-md-0 mb-3">
                    <div className="ber text-white">
                      <Link className="text-white" to="/subcategory"><i class="fas fa-users"></i>Sub Category</Link>
                    </div>
                  </div>
                </div>
                <div className="row py-4">
                  <div className="col-md-4 mb-lg-0 mb-md-0 mb-3">
                    <div className="ber text-white">
                      <Link className="text-white" to="/featuredcategory"><i class="fas fa-users"></i>Featured Category</Link>
                    </div>
                  </div>
                  <div className="col-md-4 mb-lg-0 mb-md-0 mb-3">
                    <div className="ber text-white">
                      <Link className="text-white" to="/termination"><i class="fas fa-genderless"></i>Termination</Link>
                    </div>
                  </div>
                  <div className="col-md-4 mb-lg-0 mb-md-0 mb-3">
                    <div className="ber text-white">
                      <Link className="text-white" to="/roles"><i class="fas fa-users"></i>Roles</Link>
                    </div>
                  </div>
                </div>
                <div className="row pb-4">
                  <div className="col-md-4 mb-lg-0 mb-md-0 mb-3">
                    <div className="ber text-white">
                      <Link className="text-white" to="/userform"><i class="fas fa-users"></i>Sub admin</Link>
                    </div>
                  </div>
                  <div className="col-md-4 mb-lg-0 mb-md-0 mb-3">
                    <div className="ber text-white">
                      <Link className="text-white" to="/products"><i class="fas fa-users"></i>Products</Link>
                    </div>
                  </div>
                  <div className="col-md-4 mb-lg-0 mb-md-0 mb-3">
                    <div className="ber text-white">
                      <Link className="text-white" to="/category"><i class="fas fa-users"></i>Main Category</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5 col-md-12 mt-5 mt-lg-0 mt-md-0" >
            <div className="aera bg-white rounded h-100" >
              <div className="row">
                <div className="col-md-12 d-flex py-3 justify-content-center" style={{ alignItems: 'center' }}>
                  <svg width={24} height={24} fill="none" stroke="CurrentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <rect width={14} height={20} x={5} y={2} rx={2} ry={2} />
                    <path d="M12 18h.01" />
                  </svg>
                  <h5 className="ml-1">
                    Android/IoS devices
                  </h5>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 d-flex justify-content-center">
                  <Charts />
                </div>
              </div>
            </div>
          </div>
        </div>







        <div className="row">
          <div className="col-md-7 py-4 nn">
            <div className="box box-info nj pt-5 pb-3 bg-white" style={{ overflowX: 'auto' }}>
              <div className="box-header d-flex" style={{ alignItems: 'center' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-truck ml-3">
                  <rect x={1} y={3} width={15} height={13} />
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                  <circle cx="5.5" cy="18.5" r="2.5" />
                  <circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
                <h3 className="box-title ml-3">
                  Operational Comparision(This Month)</h3>
              </div>
              <div className="box-body ir_height280">
                <div className="chart">
                  <div className="chart ir_height250" id="operational_comparision" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}><svg height={250} version="1.1" width="650.083" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" id="widthgraph" style={{ position: 'relative', top: '-0.65625px' }}>
                    <desc style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}>Created with Raphaël
                      2.2.0</desc>
                    <defs style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }} /><text x="49.208335876464844" y="211.6666660308838" textAnchor="end" fontFamily="sans-serif" fontSize="12px" stroke="none" fill="#888888" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'end', fontFamily: 'sans-serif', fontSize: '12px', fontWeight: 'normal' }} fontWeight="normal">
                      <tspan dy="3.9999990463256836" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}>0</tspan>
                    </text>
                    <path fill="none" stroke="#aaaaaa" d="M61.708335876464844,211.6666660308838H626.083" strokeWidth="0.5" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}>
                    </path><text x="49.208335876464844" y="164.99999952316284" textAnchor="end" fontFamily="sans-serif" fontSize="12px" stroke="none" fill="#888888" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'end', fontFamily: 'sans-serif', fontSize: '12px', fontWeight: 'normal' }} fontWeight="normal">
                      <tspan dy="3.9999890327453613" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}>5,000</tspan>
                    </text>
                    <path fill="none" stroke="#aaaaaa" d="M61.708335876464844,164.99999952316284H626.083" strokeWidth="0.5" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }} /><text x="49.208335876464844" y="118.3333330154419" textAnchor="end" fontFamily="sans-serif" fontSize="12px" stroke="none" fill="#888888" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'end', fontFamily: 'sans-serif', fontSize: '12px', fontWeight: 'normal' }} fontWeight="normal">
                      <tspan dy="3.9999942779541016" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}>10,000</tspan>
                    </text>
                    <path fill="none" stroke="#aaaaaa" d="M61.708335876464844,118.3333330154419H626.083" strokeWidth="0.5" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}>
                    </path><text x="49.208335876464844" y="71.66666650772095" textAnchor="end" fontFamily="sans-serif" fontSize="12px" stroke="none" fill="#888888" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'end', fontFamily: 'sans-serif', fontSize: '12px', fontWeight: 'normal' }} fontWeight="normal">
                      <tspan dy="3.999999523162842" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}>15,000</tspan>
                    </text>
                    <path fill="none" stroke="#aaaaaa" d="M61.708335876464844,71.66666650772095H626.083" strokeWidth="0.5" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}>
                    </path><text x="49.208335876464844" y={25} textAnchor="end" fontFamily="sans-serif" fontSize="12px" stroke="none" fill="#888888" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'end', fontFamily: 'sans-serif', fontSize: '12px', fontWeight: 'normal' }} fontWeight="normal">
                      <tspan dy="3.9999990463256836" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}>20,000</tspan>
                    </text>
                    <path fill="none" stroke="#aaaaaa" d="M61.708335876464844,25H626.083" strokeWidth="0.5" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}>
                    </path><text x="579.0517779897053" y="224.1666660308838" textAnchor="middle" fontFamily="sans-serif" fontSize="12px" stroke="none" fill="#888888" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'middle', fontFamily: 'sans-serif', fontSize: '12px', fontWeight: 'normal' }} fontWeight="normal" transform="matrix(1,0,0,1,0,6.6667)">
                      <tspan dy="3.9999990463256836" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}>Supp Pay</tspan>
                    </text><text x="390.926889948527" y="224.1666660308838" textAnchor="middle" fontFamily="sans-serif" fontSize="12px" stroke="none" fill="#888888" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'middle', fontFamily: 'sans-serif', fontSize: '12px', fontWeight: 'normal' }} fontWeight="normal" transform="matrix(1,0,0,1,0,6.6667)">
                      <tspan dy="3.9999990463256836" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}>Expense</tspan>
                    </text><text x="296.8644459279378" y="224.1666660308838" textAnchor="middle" fontFamily="sans-serif" fontSize="12px" stroke="none" fill="#888888" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'middle', fontFamily: 'sans-serif', fontSize: '12px', fontWeight: 'normal' }} fontWeight="normal" transform="matrix(1,0,0,1,0,6.6667)">
                      <tspan dy="3.9999990463256836" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}>Waste</tspan>
                    </text><text x="202.80200190734863" y="224.1666660308838" textAnchor="middle" fontFamily="sans-serif" fontSize="12px" stroke="none" fill="#888888" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'middle', fontFamily: 'sans-serif', fontSize: '12px', fontWeight: 'normal' }} fontWeight="normal" transform="matrix(1,0,0,1,0,6.6667)">
                      <tspan dy="3.9999990463256836" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}>Sale</tspan>
                    </text><text x="108.73955788675943" y="224.1666660308838" textAnchor="middle" fontFamily="sans-serif" fontSize="12px" stroke="none" fill="#888888" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', textAnchor: 'middle', fontFamily: 'sans-serif', fontSize: '12px', fontWeight: 'normal' }} fontWeight="normal" transform="matrix(1,0,0,1,0,6.6667)">
                      <tspan dy="3.9999990463256836" style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' }}>Purchase</tspan>
                    </text>
                    <rect x="73.46614137903849" y="211.6666660308838" width="70.54683301544189" height={0} rx={0} ry={0} fill="#7367f0" stroke="none" fillOpacity={1} style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', fillOpacity: 1 }} />
                    <rect x="167.52858539962767" y="180.68466613640786" width="70.54683301544189" height="30.981999894475933" rx={0} ry={0} fill="#7367f0" stroke="none" fillOpacity={1} style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', fillOpacity: 1 }} />
                    <rect x="261.59102942021684" y="100.07266641097068" width="70.54683301544189" height="111.5939996199131" rx={0} ry={0} fill="#7367f0" stroke="none" fillOpacity={1} style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', fillOpacity: 1 }} />
                    <rect x="355.65347344080607" y="211.6666660308838" width="70.54683301544189" height={0} rx={0} ry={0} fill="#7367f0" stroke="none" fillOpacity={1} style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', fillOpacity: 1 }} />
                    <rect x="449.71591746139524" y="211.6666660308838" width="70.54683301544189" height={0} rx={0} ry={0} fill="#7367f0" stroke="none" fillOpacity={1} style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', fillOpacity: 1 }} />
                    <rect x="543.7783614819845" y="211.6666660308838" width="70.54683301544189" height={0} rx={0} ry={0} fill="#7367f0" stroke="none" fillOpacity={1} style={{ WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', fillOpacity: 1 }} />
                  </svg>
                    <div className="morris-hover morris-default-style" style={{ left: '150.771px', top: '95px' }}>
                      {/* <div class="morris-hover-row-label">Sale</div> */}
                      <div className="morris-hover-point" style={{ color: '#7367f0' }}>
                        {/* Amount:
                                        3,319.5 */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 py-4">
            <div className>
              <div className="box box-info pb-1 aera bg-white">
                <div className="box-header d-flex py-4" style={{ alignItems: 'center' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-alert-triangle ml-2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1={12} y1={9} x2={12} y2={13} /><line x1={12} y1={17} x2="12.01" y2={17} /></svg>
                  <h3 className="box-title ml-3">Ingredients in Alert/Low Stock                        <span className="ir_color_red">(159)</span>
                  </h3>
                </div>
                <div className="box-body ir_height280">
                  <ul className="todo-list">
                    <li className="todo-title">
                      <span className="text">Ingredient Name</span>
                      <div className="ir_fl_right_pr_fw float-right">
                        <span>Current Stock</span>
                      </div>
                    </li>
                  </ul>
                  <div className="slimScrollDiv" style={{ position: 'relative', width: 'auto', height: '220px' }}><ul className="todo-list ir_txt_overflow" id="low_stock_ingredients" style={{ width: 'auto', height: '220px' }}>
                    <li>
                      <span className="text">Soyabin Oil (IG-001)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>-0.50</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Onion(IG-002)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>-220.00</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Potato(IG-003)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>-1000.00</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Beef(IG-004)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">yogurt(IG-005)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>-200.00</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Katari Vogh Rice(IG-006)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>-250.00</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Ilish(IG-007)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>-0.50</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Garlic(IG-008)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Chicken(IG-009)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Oyster Sauce(IG-010)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Water(IG-012)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>-100.00</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Soy Sauce(IG-013)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">chow mein noodles(IG-014)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Carrot(IG-015)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">egg yolks(IG-016)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Lime juice(IG-017)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Salt(IG-018)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>-33.00</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Granulated sugar(IG-019)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Olive oil(IG-020)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>-12.00</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Mexican oregano(IG-021)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Cod cheeks(IG-022)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Corn tortillas(IG-023)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Cabbage(IG-024)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Flour(IG-025)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Bell pepper(IG-026)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Orange juice(IG-027)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Orange marmalade(IG-028)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Orange zest(IG-029)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Fresh ginger(IG-030)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Sake(IG-031)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">sesame seeds(IG-032)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Spaghetti(IG-033)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Kimchi juice(IG-034)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Gochujang(IG-035)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Scallions(IG-036)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Dried guajillo chiles(IG-037)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Lemongrass(IG-039)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Galanga(IG-040)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Kaffir lime leaves(IG-041)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Shallot (IG-042)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Coriander roots(IG-043)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>-11000.00</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Tamarind pulp(IG-044)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Cinnamon stick(IG-045)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Green cardamom(IG-046)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>-10.00</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Cloves(IG-047)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Mashroom(IG-048)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">White pepper(IG-049)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Soft tof(IG-050)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Black vinegar(IG-051)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Eggs(IG-052)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Pink peppercorns(IG-053)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Concord grapes(IG-054)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Honey(IG-055)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Sweet potato shochu(IG-056)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Baking soda(IG-057)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>-894.00</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Coconut oil(IG-058)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Nutritional yeast(IG-059)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Vanilla extract(IG-060)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Soy milk(IG-061)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Unsweetened chocolate (IG-062)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">American cheese(IG-063)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>-541.00</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Mayonnaise(IG-064)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>-33.00</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Ketchup(IG-065)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Yellow mustard(IG-066)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Dill pickle(IG-067)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Tomatoes(IG-068)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Lettuce(IG-069)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Hamburger buns(IG-070)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Flat leaf parsley(IG-071)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Parmigiano-Reggiano(IG-072)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Mint (IG-073)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Suger(IG-074)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>-200.00</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Brown sugar shochu(IG-075)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Club soda(IG-076)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Lime(IG-077)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Hoisin sauce(IG-078)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Doubanjiang(IG-079)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Light corn syrup(IG-080)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Heavy cream(IG-081)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Cultured unsalted butter(IG-082)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Bittersweet chocolate(IG-084)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>-200.00</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Lamb (IG-085)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Black mustard seeds(IG-086)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>-800.00</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Fenugreek seeds(IG-087)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Fennel seeds(IG-088)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Jalapeno peppers(IG-089)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Tamarind concentrate(IG-090)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Cilantro(IG-092)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Capers in brine(IG-094)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Fennel (IG-095)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Dijon mustard(IG-096)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Chives(IG-097)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Salt rice(IG-098)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>-4.00</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Shiso(IG-100)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>-20.00</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Daikon(IG-101)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>-11.00</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Sweet potatoes(IG-102)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Bacon(IG-103)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Mizuna(IG-104)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Fish fillet(IG-105)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">All-purpose flour(IG-106)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>-1002.00</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Cornstarch(IG-107)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Paprika(IG-108)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Onion powder(IG-109)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Kansui(IG-110)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Medium shrimp(IG-111)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Shrimp shells(IG-112)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Dried pollock (IG-113)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Thin Chinese wonton noodles(IG-114)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Wonton wrappers(IG-115)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Cooked rice(IG-116)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Chopped garlic chives(IG-117)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Kaffir lime leaves(IG-118)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Mirin(IG-119)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Fish sauce(IG-120)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>-110.00</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Tomato paste(IG-121)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>-55.00</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Chili powder(IG-122)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Cooked short-grain rice(IG-123)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Cheddar cheese (IG-124)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>-2500.00</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Sandwich bread(IG-125)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Thai sweet chili sauce(IG-126)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Perfect Hollandaise sauce(IG-127)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">English muffins(IG-128)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Thick-cut ham(IG-129)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Avocado (IG-130)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>-8.00</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Kaski Fish(205)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">regular(130)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Med(131)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">بطيخ احمر(132)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">ფქვილი(100)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">კარაქი(134)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">მარილი()</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">ყველი()</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">კარტოფილი ფრი()</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">ბურგერის პური()</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">ხორცი()</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">კეჩუპი()</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Basmathi Rice(141)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Tomatto(143)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">chicken(144)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>-125500.59</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">cerveza(146)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Coca Cola Cro 12 Onzas (147)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">چکن(148)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Coffee Satchets(hdufueui)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Milk(150)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>-2.50</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Cream(151)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Shea Hatfield(2)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Flynn Lucas(2)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Babaay(154)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Cambe(155)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Corn Pizza(156)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">nimak(77)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Antor Spicy Ingredient (antor123)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>-140.00</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Raw Fish Salmon(159)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>-0.20</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Coffee Beans Ethiopian(160)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">JOSE(162)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Max cream(164)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Max Salt(165)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Something(166)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                    <li>
                      <span className="text">Pum Oil(167)</span>
                      <div className="ir_fl_right_c_red_pr_5">
                        <span>0.0</span>
                      </div>
                    </li>
                  </ul><div className="slimScrollBar" style={{ background: 'rgb(0, 0, 0)', width: '7px', position: 'absolute', top: '124px', opacity: '0.4', display: 'none', borderRadius: '7px', zIndex: 99, right: '1px', height: '30px' }} /><div className="slimScrollRail" style={{ width: '7px', height: '100%', position: 'absolute', top: '0px', display: 'none', borderRadius: '7px', background: 'rgb(51, 51, 51)', opacity: '0.2', zIndex: 90, right: '1px' }} /></div>
                </div>
              </div>
            </div>
          </div>
        </div>




        <div className="row pb-4">
          <div className="col-md-7 py-3">
            <div className="box box-info aera py-3 bg-white">
              <div className="box-header d-flex">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather mt-1 feather-coffee mb-1 ml-3"><path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" /><line x1={6} y1={1} x2={6} y2={4} /><line x1={10} y1={1} x2={10} y2={4} /><line x1={14} y1={1} x2={14} y2={4} /></svg>
                <h3 className="box-title ml-2">Top 10 Food Items This Month</h3>
              </div>
              <div className="box-body ir_height280">
                <ul className="todo-list">
                  <li className="todo-title font-weight-bold d-flex">
                    <div className="ir_font_bold ir_fl_left_pl_5">
                      <span>SN</span>
                    </div>
                    <span className="text ir_font_bold">Food Name</span>
                    <div className="ir_fl_right_pr_fw">
                      <span>Count</span>
                    </div>
                  </li>
                </ul>
                <div className="slimScrollDiv" style={{ position: 'relative', overflow: 'hidden', width: 'auto', height: '220px' }}><ul className="todo-list ir_txt_overflow" id="top_ten_food_menu" style={{ overflow: 'hidden', width: 'auto', height: '220px' }}>
                  <li>
                    <div className="ir_fl_left_pl_5">
                      <span>1</span>
                    </div>
                    <span className="text">Spice Burger (060)</span>
                    <div className="ir_fl_right_c_pr_5">
                      <span>19</span>
                    </div>
                  </li>
                  <li>
                    <div className="ir_fl_left_pl_5">
                      <span>2</span>
                    </div>
                    <span className="text">Soto Tauto (034)</span>
                    <div className="ir_fl_right_c_pr_5">
                      <span>9</span>
                    </div>
                  </li>
                  <li>
                    <div className="ir_fl_left_pl_5">
                      <span>3</span>
                    </div>
                    <span className="text">Mutton Gravy (014)</span>
                    <div className="ir_fl_right_c_pr_5">
                      <span>8</span>
                    </div>
                  </li>
                  <li>
                    <div className="ir_fl_left_pl_5">
                      <span>4</span>
                    </div>
                    <span className="text">mandhiiiiiiiiiiii (018)</span>
                    <div className="ir_fl_right_c_pr_5">
                      <span>5</span>
                    </div>
                  </li>
                  <li>
                    <div className="ir_fl_left_pl_5">
                      <span>5</span>
                    </div>
                    <span className="text">bharta (0026)</span>
                    <div className="ir_fl_right_c_pr_5">
                      <span>4</span>
                    </div>
                  </li>
                  <li>
                    <div className="ir_fl_left_pl_5">
                      <span>6</span>
                    </div>
                    <span className="text">i do (028)</span>
                    <div className="ir_fl_right_c_pr_5">
                      <span>2</span>
                    </div>
                  </li>
                  <li>
                    <div className="ir_fl_left_pl_5">
                      <span>7</span>
                    </div>
                    <span className="text">Chicken Karahi Half KG (012)</span>
                    <div className="ir_fl_right_c_pr_5">
                      <span>1</span>
                    </div>
                  </li>
                  <li>
                    <div className="ir_fl_left_pl_5">
                      <span>8</span>
                    </div>
                    <span className="text">Chicken Burger (035)</span>
                    <div className="ir_fl_right_c_pr_5">
                      <span>1</span>
                    </div>
                  </li>
                  <li>
                    <div className="ir_fl_left_pl_5">
                      <span>9</span>
                    </div>
                    <span className="text">هوت تشوكليت (048)</span>
                    <div className="ir_fl_right_c_pr_5">
                      <span>1</span>
                    </div>
                  </li>
                  <li>
                    <div className="ir_fl_left_pl_5">
                      <span>10</span>
                    </div>
                    <span className="text">Espresso (047)</span>
                    <div className="ir_fl_right_c_pr_5">
                      <span>1</span>
                    </div>
                  </li>
                </ul><div className="slimScrollBar" style={{ background: 'rgb(0, 0, 0)', width: '7px', position: 'absolute', top: '102px', opacity: '0.4', display: 'none', borderRadius: '7px', zIndex: 99, right: '1px', height: '117.191px' }} /><div className="slimScrollRail" style={{ width: '7px', height: '100%', position: 'absolute', top: '0px', display: 'none', borderRadius: '7px', background: 'rgb(51, 51, 51)', opacity: '0.2', zIndex: 90, right: '1px' }} /></div>
              </div>
            </div>
          </div>
          <div className="col-md-5 pt-3">
            <div className="box box-info aera py-3 bg-white">
              <div className="box-header d-flex">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather mt-1 feather-users ml-3 mb-1"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx={9} cy={7} r={4} /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                <h3 className="box-title ml-2">Top 10 Customers This Month</h3>
              </div>
              <div className="box-body txt_28">
                <ul className="todo-list font-weight-bold">
                  <li className="todo-title">
                    <div className="ir_font_bold ir_fl_left_pl_5">
                      <span>SN</span>
                    </div>
                    <span className="text">Customer Name</span>
                    <div className="ir_fl_right_pr_fw">
                      <span>Sale Amount</span>
                    </div>
                  </li>
                </ul>
                <div className="slimScrollDiv" style={{ position: 'relative', overflow: 'hidden', width: 'auto', height: '220px' }}><ul className="todo-list" id="top_ten_customer" style={{ overflow: 'hidden', width: 'auto', height: '220px' }}>
                  <li>
                    <div className="ir_fl_left_pl_5">
                      <span>1</span>
                    </div>
                    <span className="text">Walk-in Customer</span>
                    <div className="ir_fl_right_c_pr_5">
                      <span>219901.13</span>
                    </div>
                  </li>
                  <li>
                    <div className="ir_fl_left_pl_5">
                      <span>2</span>
                    </div>
                    <span className="text">sgafg</span>
                    <div className="ir_fl_right_c_pr_5">
                      <span>45549.50</span>
                    </div>
                  </li>
                  <li>
                    <div className="ir_fl_left_pl_5">
                      <span>3</span>
                    </div>
                    <span className="text">Abc</span>
                    <div className="ir_fl_right_c_pr_5">
                      <span>29000.00</span>
                    </div>
                  </li>
                </ul><div className="slimScrollBar" style={{ background: 'rgb(0, 0, 0)', width: '7px', position: 'absolute', top: '0px', opacity: '0.4', display: 'none', borderRadius: '7px', zIndex: 99, right: '1px', height: '220px' }} /><div className="slimScrollRail" style={{ width: '7px', height: '100%', position: 'absolute', top: '0px', display: 'none', borderRadius: '7px', background: 'rgb(51, 51, 51)', opacity: '0.2', zIndex: 90, right: '1px' }} /></div>
              </div>
            </div>
          </div>
        </div>







        <div className="row">
          <div className="col-md-12 pb-4">
            <div className="box box-info aera ccc bg-white">
              <div className="box-header py-3">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-briefcase mb-1 ml-3"><rect x={2} y={7} width={20} height={14} rx={2} ry={2} /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
                <h3 className="box-title ml-2">Monthly Sale Comparison</h3>
              </div>
              <div className="box-body ml-2">
                <div className="chart">
                  <div id="chart_div" className="ir_w_100_h_280"><div style={{ position: 'relative', width: '980px', height: '280px' }}><div style={{ position: 'absolute', left: '0px', top: '0px', width: '100%', height: '100%' }}><svg width={1149} height={280}><defs><filter x="-100%" y="-100%" width="300%" height="300%" id="rablfilter5"><feGaussianBlur in="SourceAlpha" stdDeviation={2} /><feOffset dx={0} dy={0} /><feComponentTransfer><feFuncA type="linear" slope={0} /></feComponentTransfer><feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge></filter><filter x="-100%" y="-100%" width="300%" height="300%" id="rablfilter4"><feGaussianBlur in="SourceAlpha" stdDeviation={2} /><feOffset dx={0} dy={0} /><feComponentTransfer><feFuncA type="linear" slope="0.4" /></feComponentTransfer><feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge></filter><filter x="-100%" y="-100%" width="300%" height="300%" id="rablfilter3"><feGaussianBlur in="SourceAlpha" stdDeviation={1} /><feOffset dx={0} dy={2} /><feComponentTransfer><feFuncA type="linear" slope="0.2" /></feComponentTransfer><feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge></filter><filter x="-100%" y="-100%" width="300%" height="300%" id="rablfilter2"><feGaussianBlur in="SourceAlpha" stdDeviation={2} /><feOffset dx={0} dy={1} /><feComponentTransfer><feFuncA type="linear" slope="0.4" /></feComponentTransfer><feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge></filter><filter x="-100%" y="-100%" width="300%" height="300%" id="rablfilter1"><feGaussianBlur in="SourceAlpha" stdDeviation={0} /><feOffset dx={0} dy={1} /><feComponentTransfer><feFuncA type="linear" slope="0.4" /></feComponentTransfer><feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge></filter><clipPath id="rablfilter0"><rect x="49.5" y="8.5" width={1149} height={250} /></clipPath></defs><g><rect x={0} y={0} width={1149} height={280} fill="white" stroke="black" strokeWidth={0} /><rect x="49.5" y="8.5" width={1099} height={250} fill="none" /></g><g><line x1="49.5" x2="1148.5" y1="258.5" y2="258.5" stroke="#9E9E9E" strokeWidth={1} /><line x1="49.5" x2="1148.5" y1={196} y2={196} stroke="#E0E0E0" strokeWidth={1} /><line x1="49.5" x2="1148.5" y1="133.5" y2="133.5" stroke="#E0E0E0" strokeWidth={1} /><line x1="49.5" x2="1148.5" y1={71} y2={71} stroke="#E0E0E0" strokeWidth={1} /><line x1="49.5" x2="1148.5" y1="8.5" y2="8.5" stroke="#E0E0E0" strokeWidth={1} /></g><g><path d="M 120.97854077253218 258.5 A 0 0 0 0 1 120.97854077253218 258.5 L 120.97854077253218 258.5 A 0 0 0 0 1 120.97854077253218 258.5 L 62 258.5 A 0 0 0 0 1 62 258.5 L 62 258.5 A 0 0 0 0 1 62 258.5 Z" fill="#7367f0" clipPath="url(#rablfilter0)" /><path d="M 213.25321888412017 258.5 A 0 0 0 0 1 213.25321888412017 258.5 L 213.25321888412017 258.5 A 0 0 0 0 1 213.25321888412017 258.5 L 154.274678111588 258.5 A 0 0 0 0 1 154.274678111588 258.5 L 154.274678111588 258.5 A 0 0 0 0 1 154.274678111588 258.5 Z" fill="#7367f0" clipPath="url(#rablfilter0)" /><path d="M 305.52789699570826 258.5 A 0 0 0 0 1 305.52789699570826 258.5 L 305.52789699570826 258.5 A 0 0 0 0 1 305.52789699570826 258.5 L 246.54935622317598 258.5 A 0 0 0 0 1 246.54935622317598 258.5 L 246.54935622317598 258.5 A 0 0 0 0 1 246.54935622317598 258.5 Z" fill="#7367f0" clipPath="url(#rablfilter0)" /><path d="M 397.8025751072962 258.5 A 0 0 0 0 1 397.8025751072962 258.5 L 397.8025751072962 258.5 A 0 0 0 0 1 397.8025751072962 258.5 L 338.824034334764 258.5 A 0 0 0 0 1 338.824034334764 258.5 L 338.824034334764 258.5 A 0 0 0 0 1 338.824034334764 258.5 Z" fill="#7367f0" clipPath="url(#rablfilter0)" /><path d="M 490.0772532188842 258.5 A 0 0 0 0 1 490.0772532188842 258.5 L 490.0772532188842 258.5 A 0 0 0 0 1 490.0772532188842 258.5 L 431.098712446352 258.5 A 0 0 0 0 1 431.098712446352 258.5 L 431.098712446352 258.5 A 0 0 0 0 1 431.098712446352 258.5 Z" fill="#7367f0" clipPath="url(#rablfilter0)" /><path d="M 582.3519313304722 258.5 A 0 0 0 0 1 582.3519313304722 258.5 L 582.3519313304722 258.5 A 0 0 0 0 1 582.3519313304722 258.5 L 523.37339055794 258.5 A 0 0 0 0 1 523.37339055794 258.5 L 523.37339055794 258.5 A 0 0 0 0 1 523.37339055794 258.5 Z" fill="#7367f0" clipPath="url(#rablfilter0)" /><path d="M 674.6266094420602 258.5 A 0 0 0 0 1 674.6266094420602 258.5 L 674.6266094420602 258.5 A 0 0 0 0 1 674.6266094420602 258.5 L 615.648068669528 258.5 A 0 0 0 0 1 615.648068669528 258.5 L 615.648068669528 258.5 A 0 0 0 0 1 615.648068669528 258.5 Z" fill="#7367f0" clipPath="url(#rablfilter0)" /><path d="M 766.9012875536481 258.5 A 0 0 0 0 1 766.9012875536481 258.5 L 766.9012875536481 258.5 A 0 0 0 0 1 766.9012875536481 258.5 L 707.922746781116 258.5 A 0 0 0 0 1 707.922746781116 258.5 L 707.922746781116 258.5 A 0 0 0 0 1 707.922746781116 258.5 Z" fill="#7367f0" clipPath="url(#rablfilter0)" /><path d="M 859.175965665236 258.5 A 0 0 0 0 1 859.175965665236 258.5 L 859.175965665236 258.5 A 0 0 0 0 1 859.175965665236 258.5 L 800.197424892704 258.5 A 0 0 0 0 1 800.197424892704 258.5 L 800.197424892704 258.5 A 0 0 0 0 1 800.197424892704 258.5 Z" fill="#7367f0" clipPath="url(#rablfilter0)" /><path d="M 951.450643776824 258.5 A 0 0 0 0 1 951.450643776824 258.5 L 951.450643776824 258.5 A 0 0 0 0 1 951.450643776824 258.5 L 892.472103004292 258.5 A 0 0 0 0 1 892.472103004292 258.5 L 892.472103004292 258.5 A 0 0 0 0 1 892.472103004292 258.5 Z" fill="#7367f0" clipPath="url(#rablfilter0)" /><path d="M 1043.725321888412 258.5 A 0 0 0 0 1 1043.725321888412 258.5 L 1043.725321888412 258.5 A 0 0 0 0 1 1043.725321888412 258.5 L 984.74678111588 258.5 A 0 0 0 0 1 984.74678111588 258.5 L 984.74678111588 258.5 A 0 0 0 0 1 984.74678111588 258.5 Z" fill="#7367f0" clipPath="url(#rablfilter0)" /><path d="M 1134 31.229294433593736 A 2 2 0 0 1 1136 33.229294433593736 L 1136 258 A 0 0 0 0 1 1136 258 L 1077.0214592274679 258 A 0 0 0 0 1 1077.0214592274679 258 L 1077.0214592274679 33.229294433593736 A 2 2 0 0 1 1079.0214592274679 31.229294433593736 Z" fill="#7367f0" clipPath="url(#rablfilter0)" /></g><g /><g><text x="91.4892703862661" y="275.8333282470703" style={{ cursor: 'default', userSelect: 'none', WebkitFontSmoothing: 'antialiased', fontFamily: 'Roboto', fontSize: '12px' }} fill="#757575" dx="-18.28125px">Jan-21</text><text x="183.76394849785407" y="275.8333282470703" style={{ cursor: 'default', userSelect: 'none', WebkitFontSmoothing: 'antialiased', fontFamily: 'Roboto', fontSize: '12px' }} fill="#757575" dx="-18.19791603088379px">Feb-21</text><text x="276.0386266094421" y="275.8333282470703" style={{ cursor: 'default', userSelect: 'none', WebkitFontSmoothing: 'antialiased', fontFamily: 'Roboto', fontSize: '12px' }} fill="#757575" dx="-18.92708396911621px">Mar-21</text><text x="368.3133047210301" y="275.8333282470703" style={{ cursor: 'default', userSelect: 'none', WebkitFontSmoothing: 'antialiased', fontFamily: 'Roboto', fontSize: '12px' }} fill="#757575" dx="-17.70833396911621px">Apr-21</text><text x="460.5879828326181" y="275.8333282470703" style={{ cursor: 'default', userSelect: 'none', WebkitFontSmoothing: 'antialiased', fontFamily: 'Roboto', fontSize: '12px' }} fill="#757575" dx="-19.69270896911621px">May-21</text><text x="552.862660944206" y="275.8333282470703" style={{ cursor: 'default', userSelect: 'none', WebkitFontSmoothing: 'antialiased', fontFamily: 'Roboto', fontSize: '12px' }} fill="#757575" dx="-18.32291603088379px">Jun-21</text><text x="645.1373390557941" y="275.8333282470703" style={{ cursor: 'default', userSelect: 'none', WebkitFontSmoothing: 'antialiased', fontFamily: 'Roboto', fontSize: '12px' }} fill="#757575" dx="-16.46875px">Jul-21</text><text x="737.412017167382" y="275.8333282470703" style={{ cursor: 'default', userSelect: 'none', WebkitFontSmoothing: 'antialiased', fontFamily: 'Roboto', fontSize: '12px' }} fill="#757575" dx="-18.953125px">Aug-21</text><text x="829.68669527897" y="275.8333282470703" style={{ cursor: 'default', userSelect: 'none', WebkitFontSmoothing: 'antialiased', fontFamily: 'Roboto', fontSize: '12px' }} fill="#757575" dx="-18.5px">Sep-21</text><text x="921.961373390558" y="275.8333282470703" style={{ cursor: 'default', userSelect: 'none', WebkitFontSmoothing: 'antialiased', fontFamily: 'Roboto', fontSize: '12px' }} fill="#757575" dx="-17.61979103088379px">Oct-21</text><text x="1014.236051502146" y="275.8333282470703" style={{ cursor: 'default', userSelect: 'none', WebkitFontSmoothing: 'antialiased', fontFamily: 'Roboto', fontSize: '12px' }} fill="#757575" dx="-18.95833396911621px">Nov-21</text><text x="1106.510729613734" y="275.8333282470703" style={{ cursor: 'default', userSelect: 'none', WebkitFontSmoothing: 'antialiased', fontFamily: 'Roboto', fontSize: '12px' }} fill="#757575" dx="-18.65104103088379px">Dec-21</text><text x="43.5" y="262.49999475479126" style={{ cursor: 'default', userSelect: 'none', WebkitFontSmoothing: 'antialiased', fontFamily: 'Roboto', fontSize: '12px' }} fill="#757575" dx="-6.739583492279053px">0</text><text x="43.5" y="199.99999475479126" style={{ cursor: 'default', userSelect: 'none', WebkitFontSmoothing: 'antialiased', fontFamily: 'Roboto', fontSize: '12px' }} fill="#757575" dx="-42.79166793823242px">100,000</text><text x="43.5" y="137.49999475479126" style={{ cursor: 'default', userSelect: 'none', WebkitFontSmoothing: 'antialiased', fontFamily: 'Roboto', fontSize: '12px' }} fill="#757575" dx="-42.79166793823242px">200,000</text><text x="43.5" y="74.99999856948853" style={{ cursor: 'default', userSelect: 'none', WebkitFontSmoothing: 'antialiased', fontFamily: 'Roboto', fontSize: '12px' }} fill="#757575" dx="-42.79166793823242px">300,000</text><text x="43.5" y="12.5" style={{ cursor: 'default', userSelect: 'none', WebkitFontSmoothing: 'antialiased', fontFamily: 'Roboto', fontSize: '12px' }} fill="#757575" dx="-42.79166793823242px">400,000</text></g><g /><g /><g /></svg></div></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Dashboard