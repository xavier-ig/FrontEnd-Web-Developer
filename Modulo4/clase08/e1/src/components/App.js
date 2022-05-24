import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

const App = () => {
  return (
      <Container className="container">
        <Grid container spacing={2}>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <div className='gridItem'>
            Item 1
            </div>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
          <div className='gridItem'>
            Item 2
            </div>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
          <div className='gridItem'>
            Item 3
            </div>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
          <div className='gridItem'>
            Item 4
            </div>
          </Grid>

          <Grid item sm={6} sx={12}>
            <div className='gridItem'>
              Grid item con container
              <Grid container>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                  <div className='anidado'>
                    Grid anidado
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
        <br/>
        <Grid container spacing={2}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <div className='titulo'>
            Un Título corto y pegajoso
            </div>
          </Grid>
          <Grid item lg={3} md={6} sm={12} xs={12}>
            <div className='foto'>
            Soy una foto
            </div>
          </Grid>
          <Grid item lg={3} md={6} sm={12} xs={12}>
            <div className='foto'>
            Soy una foto
            </div>
          </Grid>
          <Grid item lg={3} md={6} sm={12} xs={12}>
            <div className='foto'>
            Soy una foto
            </div>
          </Grid>
          <Grid item lg={3} md={6} sm={12} xs={12}>
            <div className='foto'>
            Soy una foto
            </div>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <div className='articulo'>
            Lorem impum Lorem impumLorem impumLorem impumLorem impumLorem impumLorem impumLorem impumLorem impumLorem impumLorem impumLorem impumLorem impumLorem impumLorem impumLorem impumLorem impum
            </div>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <div className='articulo'>
            Lorem impum Lorem impumLorem impumLorem impumLorem impumLorem impumLorem impumLorem impumLorem impumLorem impumLorem impumLorem impumLorem impumLorem impumLorem impumLorem impumLorem impum
            </div>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <div className='subtitulo'>
            Opiniones
            </div>
          </Grid>
          <Grid item lg={2} md={3} sm={4} xs={6}>
            <div className='opiniones'>
            Opiniones Lorem impum Lorem impumLorem impumLorem
            </div>
          </Grid>
          <Grid item lg={2} md={3} sm={4} xs={6}>
            <div className='opiniones'>
            Opiniones Lorem impum Lorem impumLorem impumLorem
            </div>
          </Grid>
          <Grid item lg={2} md={3} sm={4} xs={6}>
            <div className='opiniones'>
            Opiniones Lorem impum Lorem impumLorem impumLorem
            </div>
          </Grid>
          <Grid item lg={2} md={3} sm={4} xs={6}>
            <div className='opiniones'>
            Opiniones Lorem impum Lorem impumLorem impumLorem
            </div>
          </Grid>
          <Grid item lg={2} md={3} sm={4} xs={6}>
            <div className='opiniones'>
            Opiniones Lorem impum Lorem impumLorem impumLorem
            </div>
          </Grid>
          <Grid item lg={2} md={3} sm={4} xs={6}>
            <div className='opiniones'>
            Opiniones Lorem impum Lorem impumLorem impumLorem
            </div>
          </Grid>
        </Grid>
          
      </Container> 
  )
}

export default App;
