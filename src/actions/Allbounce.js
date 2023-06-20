const config = require('../helpers/config.json');
export const getAllBounce = (date2,todate) => {
    var nnn1=new Date().toISOString().substr(0, 10).split("-")[0]
    var nnn2=new Date().toISOString().substr(0, 10).split("-")[1]
    var nnn3=new Date().getDate()-1
    return (dispatch) => {
        fetch(`${config['baseUrl']}/bounce/get${todate!==""&&todate!==null&&todate!==undefined?`?to=${todate}`:`?to=${new Date().toISOString().substr(0, 10)}`}&from=${date2!==null&&date2!==undefined&&date2!==""?date2:nnn1+"-"+nnn2+"-"+nnn3}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', "jwt_token": localStorage.getItem("token"), },
        }).then(res => res.json()).then((response) => {
            const allbounce = response

            console.log("kkkkk", response);
            dispatch({
                type: "GET_ALLBOUNCE",
                allbounce: allbounce,
                allbounceResponse: "got it",
                loading: true
            });
        }).catch((error) => {
            console.log("error", error);
            dispatch({
                type: "GET_ALLBOUNCE",
                allbounce: {},
                allbounceResponse: null,
                loading: true
            });
            alert("Please Check Your Internet Connection...")
        })

    }


}