
//Función que busca el perfil PSN y posterior busca el perfil GTSport
function searchProfilePSN(psnProfile){
    let formdata = new FormData();
    formdata.append('mode', 'get_profile_by_name');
    formdata.append('output', 'links');
    formdata.append('online_id[]', psnProfile);
    let requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };

    fetch("https://www.kudosprime.com/gts/gt_com_api.php", requestOptions)
        .then(response => response.text())
        .then(result => {
            //Valida perfil
            if(result === "Profile not found."){
                fillNoProfile(psnProfile);
            }else{
                let strGTProfile = getGTProfile(result);

                searchProfileGranTurismo(strGTProfile);
            }
        })
        .catch(error => console.log('Error searching profile: ', error));
}

//Si el perfil de PSN existe debe extraer el perfil de Gran Turismo
function getGTProfile(strResult){
    let arrString = strResult.split("=");
    let str = arrString[2].split("\"");
    
    return str[0];
}

//Si el perfil de PSN no existe manda mensaje al HTML
function fillNoProfile(psnProfile){
    document.getElementById("profileResponse").innerHTML = `Profile ${psnProfile} not found.`;
}

//Busca el perfil general en la BD de Gran Turismo con la API
function searchProfileGranTurismo(gtProfile){
    let requestOptions = {
        method: 'POST'
    };
    let strURL = `https://www.gran-turismo.com/us/api/gt7sp/profile/?user_no=${gtProfile}&job=3`;

    fetch(strURL, requestOptions)
        .then(response => response.text())
        .then(result => {
            fillProfile(JSON.parse(result));
        })
        .catch(error => console.log('error', error));
}

//Agrega comas cada 3 dígitos para convertir un número grande (miles, millones)
function strAddCommas(strNumber){
    return strNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//Llena el DOM con la información del perfil
function fillProfile(datosStats){
    let stats = JSON.parse(datosStats.stats.stats);
    let cr_total = strAddCommas(stats.credit_earned);
    let performance = strAddCommas(datosStats.stats.driver_point);
    let mi_earned = strAddCommas(stats.mileage_earned);
    let dr_license = "";
    let sr_license = "";
    let sr = Number(datosStats.stats.manner_point);

    //Asigna la letra de la licencia obtenida al jugar de manera online
    switch(datosStats.stats.driver_class){
      case "1": 
        dr_license = "E"; 
        break;
      case "2": 
        dr_license = "D"; 
        break;
      case "3": 
        dr_license = "C"; 
        break;
      case "4": 
        dr_license = "B"; 
        break;
      case "5": 
        dr_license = "A"; 
        break;
      case "6": 
        dr_license = "A+"; 
        break;
      case "7": 
        dr_license = "S"; 
    }

    //Asigna la letra de la licencia de Safety en base a los puntos
    switch(true){
      case (sr > 80): 
        sr_license = "S"; 
        break;
      case (sr > 65): 
        sr_license = "A"; 
        break;
      case (sr > 40): 
        sr_license = "B"; 
        break;
      case (sr > 20): 
        sr_license = "C"; 
        break;
      case (sr > 10): 
        sr_license = "D"; 
        break;
      case (sr <= 10): 
        sr_license = "E"; 

    }

    //Modifica el DOM agregando la tabla con la información del usuario que se ha consultado
    document.getElementById("profileResponse").innerHTML = `
        <table id="tableResults">
          <thead>
              <tr><th colspan="2">Sports Mode</th></tr>
          </thead>
          <tbody>
              <tr><td class="tdHeader">Online Races: </td><td class="tdData">Finished: ${datosStats.stats.race_count}* </td></tr>
              <tr><td class="tdHeader">Driver Rating (DR): </td> <td class="tdData">${dr_license} - ${performance}</td></tr>
              <tr><td class="tdHeader">Sportmanship Rating(SR): </td> <td class="tdData">${sr_license} - ${datosStats.stats.manner_point}/99</td></tr>
              <tr><td class="tdHeader">Login Count: </td><td class="tdData">${stats.login_count}</td></tr>
              <tr><td class="tdHeader">Car(s): </td><td class="tdData">${stats.car_count}</td></tr>
              <tr><td class="tdHeader">Car(s) bought: </td><td class="tdData">${stats.buy_car_count}</td></tr>
              <tr><td class="tdHeader">Credits earned: </td><td class="tdData">${cr_total}</td></tr>
              <tr><td class="tdHeader">Mi earned: </td><td class="tdData">${mi_earned}</td></tr>
              <tr><td class="tdHeader">Xp Level: </td><td class="tdData">${stats.level} | ${stats.level_progress}% (${stats.xp} pts)</td></tr>
              <tr><td class="tdHeader">Liveries: </td><td class="tdData">${stats.livery_count}</td></tr>
              <tr><td class="tdHeader">Photos: </td><td class="tdData">${stats.photo_count}</td></tr>
              <tr><td class="tdHeader">Nick Name: </td><td class="tdData">${stats.nickname}</td></tr>
              <tr><td class="tdHeader">Profile iD: </td><td class="tdData">${datosStats.stats.user_no} (<a target="_blank" href="https://www.gran-turismo.com/us/gtsport/user/profile/${datosStats.stats.user_no}/overview">Link to Official</a>)</td></tr>
              
          </tbody>
        </table>
        <p id="myProfileDisclaimer">*: The Gran Turismo server has also stored this value for this profile.<br/>The reason for the discrepancy is uncertain, but if you delete or lose your saved game, this number probably precludes races prior to the deletion or incident.<br/>If you have played the demo, races performed during the demonstration period may not be included.</p>
      `;
}

//Obtener el input y el botón
let psnProfile = document.getElementById('psnProfile');
let btnSearchProfile = document.getElementById('btnSearchProfile');

//Evento se detona al dar clic en el botón
btnSearchProfile.addEventListener('click', () => { searchProfilePSN(psnProfile.value)  });
//Evento se detona al dar enter en el input
psnProfile.addEventListener('keydown', (event) => { if(event.key === 'Enter') searchProfilePSN(psnProfile.value);});