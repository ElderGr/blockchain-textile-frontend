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
      },
    timelineContent: {
        width: '50vw',
        height: '80px',
        maxWidth: '400px',
        maxHeight: '300px',

        padding: '10px',
      marginLeft: '20px',
    
        // Media queries para responsividade
        '@media (max-width: 767px)': {
          width: '80vw',
          height: '40vh',
        },
      },
      timelineDot: {
        background: 'red',
      }
    
  });

const TimelineComponent = () => {
    const data = [
      {
        // time: '2023-11-01',
        title: 'Venda para o cliente',
        description: 'Definição dos objetivos e planejamento inicial.'
      },
      {
        // time: '2023-12-15',
        title: 'Envio para a Loja',
        description: 'Implementação das funcionalidades e testes.'
      },
      {
        // time: '2024-01-31',
        title: 'Confecção do produto',
        description: 'Disponibilização do passaporte para os usuários.'
      },
      {
        // time: '2024-03-31',
        title: 'Origem da matéria prima - Fibras / Fiação',
        description: 'Implementação de novas funcionalidades e melhorias.'
      },
      {
        // time: '2024-03-31',
        title: 'Origem da matéria prima - Fibras / Fiação',
        description: 'Implementação de novas funcionalidades e melhorias.'
      }
    ];



  

    const classes = useStyles();

  
    return (
        <Timeline className={classes.timeline}>
        {data.map((item, index) => (
          <TimelineItem key={index} className={classes.timelineItem}>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
              <TimelineContent>
                <div className={classes.timelineContent}>
              <p className="timeline-title"><strong>{item.title}</strong></p>
              <p className="timeline-description">{item.description}</p>
            </div>
              </TimelineContent>
            
          </TimelineItem>
        ))}
      </Timeline>
    );
  };
  
  export default TimelineComponent;
  