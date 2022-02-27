
//resultsAPI

/*
let strUrl = "https://www.gran-turismo.com/us/api/gt7sp/profile/?user_no=15333889&job=3"

let requestOptions = {
    method: 'POST'
    ,mode: 'no-cors'
};

fetch(strUrl, requestOptions)
  .then(response => response.text())
  .then(result => {
    console.log('Resultado', result)
  })
  .catch(error => console.log('Agarrando el error: ', error));

*/

  let strUrl = "https://www.kudosprime.com/gts/gt_com_api.php?mode=get_profile_by_name&output=links&online_id=MX_Xavier_IG"

let requestOptions = {
    method: 'POST'
    ,mode: 'no-cors'
};

async fetch(strUrl, requestOptions)
  .then(response => response.text())
  .then(result => {
    console.log('Resultado:', String(result))
  })
  .catch(error => console.log('Agarrando el error: ', error));



  /*

var myHeaders = new Headers();
myHeaders.append("Cookie", "JSESSIONID=1625210773_665ADDCDDA57B970A11FAA80942BB7F91F1CC423BF2B74B8.worker21");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://www.gran-turismo.com/us/api/gt7sp/profile/?user_no=15333889&job=3", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

  */