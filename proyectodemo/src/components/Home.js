import { imgCenter } from "../helpers/constants";
import { searchProfilePSN } from '../helpers/utils';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import React from "react";
import PropTypes from 'prop-types';
import Evento from "./Evento";

const Home = (props) => {
    const [state, setState] = React.useState({
        psnProfile: '',
    });

    const handleInputChange = (event) => { 
        setState({
          ...state,
          psnProfile: event.target.value
        })
    }
    
    const handleClick = () =>{
        searchProfilePSN(state.psnProfile)
    }

    return(
        <Container className="container">
            <Grid container spacing={1}>
                <Grid item xs={12} align="center">
                    <h1>Improve your gaming and #findyourline</h1>
                    <p>Review your stats live to improve your driving skills</p>
                    <img className="imgCenter" src={imgCenter} alt="findyourline_gt7"></img>
                </Grid>
                <Grid item xs={12} align="center">
                    <h3>Search Players of Gran Turismo Sport</h3>
                    <div className="psn_user-input">
                        <input 
                            className="inputStyle" 
                            type="text" 
                            placeholder="PlayStation ID" 
                            value={state.psnProfile}
                            onChange={handleInputChange}
                        />
                        <button 
                            className="btnStyle" 
                            onClick={handleClick}>Search</button>
                    </div>
                    <p className="myProfileDisclaimer">
                       This search tool requires the exact PSN profile name.
                       <br/>
                       Profile name contains no "space", but can contains one or several "_" (underscore) instead.
                       <br/>
                       If you still can't find a profile name, it may have been renamed and still exists here as an old name version.
                       <br/>
                    </p>
                    <div id="profileResponse"></div>
                    <br/>
                </Grid>
                <Grid container spacing={1} align="center">
                    <Grid item lg={4} md={6} sm={12} xs={12}>
                        <Evento eventNumber="1" localizeInfo={props.localizeInfo}/>
                    </Grid>
                    <Grid item lg={4} md={6} sm={12} xs={12}>
                        <Evento eventNumber="2" localizeInfo={props.localizeInfo}/>
                    </Grid>
                    <Grid item lg={4} md={6} sm={12} xs={12}>
                        <Evento eventNumber="3" localizeInfo={props.localizeInfo}/>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

Home.propTypes = {
    localizeInfo: PropTypes.object.isRequired,
}

export default Home;