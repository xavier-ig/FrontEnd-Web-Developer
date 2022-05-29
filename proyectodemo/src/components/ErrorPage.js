import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

const ErrorPage = () => {
    return(
        <Container className="container">
        <Grid container spacing={1}>
            <Grid item xs={12} align="left">
            <h1>Error Page</h1>
            <p>Path not found</p>
            </Grid>
        </Grid>
        </Container>
    )
}

export default ErrorPage;