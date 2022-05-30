import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import PropTypes from 'prop-types';

const Evento = (props) => {
    const [canal, setChannel] = React.useState({
        data: {},
    })
    const [evento, setEvent] = React.useState({
        data: {},
    })
    const [stop, setStop] = React.useState({
        x: 0,
    })

    const getChannel = async() => {
        let requestOptions = {
            method: 'POST',
            headers: {
            "Accept": "*/*",
            "User-Agent": "Thunder Client (https://www.thunderclient.com)"
            }
        }
        let strURL = 'https://www.gran-turismo.com/us/api/gt7sp/event/?job=3&channel_id_csv='+props.eventNumber
        
        const response = await fetch(strURL, requestOptions);
        const data = await response.json(); // Extracting data as a JSON Object from the response
    
        setChannel({
            ...canal,
            data: data
        })
    }
    const getEvent = async() => {
        try{
            let requestOptions = {
                method: 'POST',
                headers: {
                    "Accept": "*/*",
                    "User-Agent": "Thunder Client (https://www.thunderclient.com)"
                }
            }
            let strURL = 'https://www.gran-turismo.com/us/api/gt7sp/event/?job=1&event_id_csv='+canal.data.event_calendar[0].event_id
            
            const response = await fetch(strURL, requestOptions);
            const data = await response.json(); // Extracting data as a JSON Object from the response
        
            //console.log('Evento ID: ' + canal.data.event_calendar[0].event_id)

            setEvent({
                ...evento,
                data: data
            })
            if(stop.x !== -1){
                setStop({
                    ...stop,
                    x: -1
                })
            }
        }catch(e){
            //console.log('Error: Event.js - getEvent: ' + e)
            setStop({
                ...stop,
                x: stop.x + 1
            })
        }
    }
    
    const didMount = () => {
        try{
            getChannel();
            if(canal.data)
            {
                getEvent()
            }
        }catch(e){
            //console.log('Error: Event.js - didMount: ' + e)
        }
    };
    React.useEffect(didMount, [stop]);

    return(
        <Card sx={{ maxWidth: 350, bgcolor: '#ECECEC' }} >
           <CardHeader
             avatar={
               <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                   {props.eventNumber}
               </Avatar>
             }
             
             title={props.localizeInfo.data["gt7sp.game.COMMON.SportMode.DAILY_RACE_"+props.eventNumber]}
             subheader={ (stop.x === -1) ? evento.data.event[0].value[0].GameParameter.events[0].regulation.car_category_types[0] : ' ' }
             sx={{ textAlign: 'left' }}
           />
           <CardMedia
             component="img"
             height="194"
             image={ (stop.x === -1) ? process.env.PUBLIC_URL + "/" + evento.data.event[0].value[0].GameParameter.tracks[0].course_code + ".jpg" : '' }
             alt=""
           />
           <CardContent sx={{ textAlign: 'justify' }}>
             <Typography variant="body2" color="text.secondary">
               Event ID: { (stop.x === -1) ? canal.data.event_calendar[0].event_id : '0' }
               <br/>
               Track Name: { (stop.x === -1) ? props.localizeInfo.data["gt7sp.game.COMMON.CourseName."+evento.data.event[0].value[0].GameParameter.tracks[0].course_code] : '0' }
             </Typography>
           </CardContent>
        </Card>
    )
}

Evento.propTypes = {
    eventNumber: PropTypes.string.isRequired,
    localizeInfo: PropTypes.object.isRequired,
}

export default Evento;
