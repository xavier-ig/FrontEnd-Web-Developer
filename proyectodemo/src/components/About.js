import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

const About = () => {
    return(
        <Container>
        <Grid container spacing={1}>
            <Grid item xs={12} align="left">
            <h1>About</h1>
            <p>This website wants to help you and provide usefull information regarding your online gaming in Gran Turismo Sport®</p>
            {/* Iconos */}
            {/* https://fontawesome.com/v4/icons/ */}
            <p>We took inspiration from these great websites and documentation:
                <br/>
                &nbsp;&nbsp;&nbsp;<a href='https://www.kudosprime.com/index.php' target="_blank" rel="noreferrer"><i class="fa fa-fw fa-rocket"></i>KudosPrime website</a>
                <br/>
                &nbsp;&nbsp;&nbsp;<a href='https://github.com/alexpersian/gtsport-api' target="_blank" rel="noreferrer"><i class="fa fa-fw fa-code"></i>GT Sport API (alexpersian)</a>                
                <br/>
                &nbsp;&nbsp;&nbsp;<a href='https://www.gran-turismo.com/us/gtsport/sportmode/' target="_blank" rel="noreferrer"><i class="fa fa-fw fa-copyright"></i>Gran Turismo Sport® official website</a>                
            </p>
            </Grid>
        </Grid>
        </Container>
    )
}

export default About;