
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

function fillProfile(datosStats){
    let stats = JSON.parse(datosStats.stats.stats);

    document.getElementById("profileResponse").innerHTML = `
        <table id="tableResults">
          <thead>
              <tr><th colspan="2">Sports Mode</th></tr>
          </thead>
          <tbody>
              <tr><td class="tdHeader">Races: </td><td class="tdData">Finished: ${datosStats.stats.race_count}* </td></tr>
              <tr><td class="tdHeader">Performances: </td><td class="tdData">${datosStats.stats.driver_point}</td></tr>
              <tr><td class="tdHeader">Sportmanship (SR): </td> <td class="tdData">${datosStats.stats.manner_point}/99</td></tr>
              <tr><td class="tdHeader">Login Count: </td><td class="tdData">${stats.login_count}</td></tr>
              <tr><td class="tdHeader">Car(s): </td><td class="tdData">${stats.car_count}</td></tr>
              <tr><td class="tdHeader">Car(s) bought: </td><td class="tdData">${stats.buy_car_count}</td></tr>
              <tr><td class="tdHeader">Credits earned: </td><td class="tdData">${stats.credit_earned}</td></tr>
              <tr><td class="tdHeader">Mi earned: </td><td class="tdData">${stats.mileage_earned}</td></tr>
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
