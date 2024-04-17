import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import produtoImage from '../produto.jpg';
import rankA from '../ranks/A.svg';
import rankB from '../ranks/B.svg';
import rankC from '../ranks/C.svg';
import rankD from '../ranks/D.svg';
import rankE from '../ranks/E.svg';
import rankF from '../ranks/F.svg';
import TimelineComponent from './Timeline';
import { Card } from '@mui/material';

const useStyles = makeStyles({
  root: {
    maxWidth: 1200,
    margin: '0 auto',
  },
  container: {
  },
  paper: {
    background: '#f5f5f5',
    padding: 16,
  },
  productDetailsContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  productDetails: {
    marginLeft: '20px',
  }
  
});

const Passport = ({ productName, productColor, composition, environmentalImpact }) => {
  const classes = useStyles();

  // Cálculo do índice de impacto ambiental (exemplo)
  const indiceImpactoAmbiental = 0.5;

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <div className={classes.paper}>
            <Typography variant="h5">Detalhes do produto</Typography>
            <div className={classes.productDetailsContainer}>
            <img src={produtoImage} alt="Imagem do produto" style={{ maxWidth: '200px' }} />
            <div className={classes.productDetails}>

            <Typography><b>Produto:</b> Calça Jeans</Typography>
            <Typography><b>Cor:</b> Azul claro</Typography>
            <Typography><b>Composição:</b></Typography>
            <ul>
              <li>80% Polyester</li>
              <li>10% Nylon</li>
              <li>10% Algodão reciclável</li>
            </ul>
            </div>
            </div>
            <Typography variant="h6">Índice de Impacto Ambiental: </Typography>
            <img style={{width: "64px"}} src={rankA}/>
            <img style={{width: "64px"}} src={rankB}/>
            <img style={{width: "64px"}} src={rankC}/>
            <img style={{width: "64px"}} src={rankD}/>
            <img style={{width: "64px"}} src={rankE}/>
            <img style={{width: "64px"}} src={rankF}/>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5">Jornada do produto</Typography>
          {/* <Paper className={classes.paper}>
            <ul>
              <li>Início: 03/08/2023</li>
              <li>Origem da matéria prima - Fibras/Fiação</li>
              <li>Tecelagem</li>
              <li>Acabamento</li>
              <li>Confecção do produto</li>
              <li>Envio para loja</li>
              <li>Venda para o cliente</li>
            </ul>
          </Paper> */}
          <TimelineComponent></TimelineComponent>
        </Grid>
      </Grid>
      
    </div>
  );
}

export default Passport;
