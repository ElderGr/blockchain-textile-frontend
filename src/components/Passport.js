import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import produtoImage from '../produto.jpg';
import rankA from '../ranks/A.svg';
import rankB from '../ranks/B.svg';
import rankC from '../ranks/C.svg';
import rankD from '../ranks/D.svg';
import rankE from '../ranks/E.svg';
import rankF from '../ranks/F.svg';
import TimelineComponent from './Timeline';
import { useState, useEffect } from 'react';
import { get } from '../crud/product.crud';
import { transformDate } from '../utils/date';

const useStyles = makeStyles({
  root: {
    maxWidth: 1200,
    margin: '0 auto',
  },
  containerDetails: {
    paddingTop: "30px !important"
  },
  containerTimeline: {
    paddingTop: "30px !important"
  },
  paper: {
    background: '#f5f5f5',
    padding: 16,
  },
  productImageInverted: {
    transform: "rotateY(180deg) rotate(180deg)",
    height: "60px",
    width: "200px",
    background: `linear-gradient(to bottom, rgba(255,255,255,0.9) 40%,
              rgba(255,255,255,0.5)), url(${produtoImage})`,
    backgroundSize: "cover",
        backgroundPositionY: "bottom"


  },
  productDetailsContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  productDetails: {
    marginLeft: '20px',
  },
  ranks: {
    marginBottom: "20px",
  },
  index: {
    display: "block",
    fontWeight: "bold",
    marginBottom: "14px"
  }
  
});

const Passport = () => {
  const classes = useStyles();

  const [product, setProduct] = useState({});

  useEffect(() => {
    get().then((response) => {
      if(!response.data) return
      setProduct(response.data)
    });
  }, [])


  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} className={classes.containerDetails}>
            <Typography variant="h5">Detalhes do produto</Typography>
            <div className={classes.productDetailsContainer}>
              <div>
                <img src={produtoImage} alt="Imagem do produto" style={{ maxWidth: '200px' }} />
                <div className={classes.productImageInverted} alt="Imagem do produto" style={{ maxWidth: '200px' }} />
              </div>
              <div className={classes.productDetails}>

            <Typography><b>Produto:</b> {product.name}</Typography>
            <Typography><b>Data de Fabricação:</b> {transformDate(product.manufacturingDate)}</Typography>
            <Typography><b>Composição:</b></Typography>
            <ul>
            {product && product.composition && product.composition.map((element, key) => {
              return <li key={key}>{element}</li>
            }) }
            </ul>

            
            <Typography><b>Certificados:</b></Typography>
            <ul>
            {product && product.certificates && product.certificates.map((element, key) => {
              return <li key={key}>{element}</li>
            }) }
            </ul>


            </div>
            </div>
            <Typography variant="h5">Índice de Impacto Ambiental</Typography>
            <div className={classes.ranks}>
              <img style={{width: "72px"}} src={rankA}/>
              <img style={{width: "72px"}} src={rankB}/>
              <img style={{width: "72px"}} src={rankC}/>
              <img style={{width: "72px"}} src={rankD}/>
              <img style={{width: "72px"}} src={rankE}/>
              <img style={{width: "72px"}} src={rankF}/>
            </div>

            <span style={{color: "#08ac4a"}} className={classes.index}>Produto com baixo índice de impacto ambiental</span>
            <span style={{color: "#f3bf2e"}} className={classes.index}>Produto com médio índice de impacto ambiental</span>
            <span style={{color: "#ca1c16"}} className={classes.index}>Produto com alto índice de impacto ambiental</span>
        </Grid>
        <Grid item xs={12} sm={6}  className={classes.containerTimeline}>
          <Typography variant="h5">Jornada do produto</Typography>
          <TimelineComponent manufacturingDate={transformDate(product.manufacturingDate)}></TimelineComponent>
        </Grid>
      </Grid>
      
    </div>
  );
}

export default Passport;
