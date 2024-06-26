import React from 'react';
// import { Timeline as ReactTimeline } from 'react-timeline';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
    timeline: {
      backgroundColor: '#f5f5f5',
      borderRadius: '5px',
      padding: '10px',
    },
    timeline: {
        backgroundColor: '#f5f5f5',
        borderRadius: '5px',
        padding: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: "2px solid",
        height: "80vh",

      },
      timelineContainer: {
        height: "100%",
        overflow: "auto"
      },
    timelineContent: {
        width: '50vw',
        height: '80px',
        maxWidth: '400px',
        maxHeight: '300px',

        padding: '10px',
        marginLeft: '20px',

        border: "1px solid white",
        background: "white",
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        alignContent: 'center',
    
        // Media queries para responsividade
        '@media (max-width: 767px)': {
          width: '80vw',
          height: '40vh',
        },
      },
      timelineDot: {
        // background: 'red !important',
      },
      timelineConnector: {
        backgroundImage: 'linear-gradient(to bottom, black 20px, transparent 8px) !important',
        backgroundSize: '100% 30px !important',
        background: 'transparent !important'
      },
      date: {
        fontSize: '12px',
        color: 'gray',
        display: 'flex',
        justifyContent: '',
        alignItems: 'center',
        marginTop: '10px',
      }
    
  });

const TimelineComponent = (props) => {
    const data = [
      {
        title: 'Venda para o cliente',
        description: 'Definição dos objetivos e planejamento inicial.',
        color: "green"
      },
      {
        title: 'Envio para a Loja',
        description: 'Implementação das funcionalidades e testes.',
        color: "orange"
      },
      {
        title: 'Testes de Qualidade',
        description: 'Avaliação da conformidade dos produtos com os padrões de qualidade.',
        color: "red"
      },
      {
        title: 'Confecção do produto',
        description: 'Disponibilização do passaporte para os usuários.',
        color: "blue"
      },
      {
        title: 'Origem da matéria prima - Fibras / Fiação',
        description: 'Implementação de novas funcionalidades e melhorias.',
        color: "gray"
      },      
    ];

    const classes = useStyles();

  
    return (
        <Timeline className={classes.timeline}>
        <span className={classes.date}>Finalizado: 03/08/2023</span>
        <div className={classes.timelineContainer}>
        {data.map((item, index) => (
          <TimelineItem key={index} className={classes.timelineItem}>
            <TimelineSeparator>
              <TimelineDot className={classes.timelineDot} style={{background: item.color}} />
              <TimelineConnector className={classes.timelineConnector} />
            </TimelineSeparator>
              <TimelineContent>
                <div className={classes.timelineContent}>
              <p className="timeline-title"><strong>{item.title}</strong></p>
              <p className="timeline-description">{item.description}</p>
            </div>
              </TimelineContent>
            
          </TimelineItem>
        ))}
        </div>
        <span className={classes.date}>Inicio: {props.manufacturingDate}</span>
      </Timeline>
    );
  };
  
  export default TimelineComponent;
  