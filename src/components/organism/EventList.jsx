import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width:100%;
  background-color: #fcd3b3;
  
`;

const EventGrid = styled.div`
  grid-template-columns: repeat(auto-fill, minmax());
  gap: 20px;
  padding: 10px;
  margin: 0 auto;
  width:100%;
  
`;

const MainEventCard = styled.div`
  border: 1px solid cornflowerblue;
  background-color: whitesmoke;
  border-radius: 8px;
  width:100%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  padding: 5%;  
`;

const MainEventSideContainer = styled.div `
  display: column !important;

`;

const MainSecondary = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 200px;
    gap: 1em;
    margin-top: 3%;
`;

const MainEventImage = styled.img`
  width: 250px;
  height: 350px;
  border-radius: 8px 8px 0 0;
`;

const MainEventDetails = styled.div`
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const MainEventTitle = styled.h2`
  text-align:center;
  background-color: black;
  color: white;
  font-size: 20px;
  margin-bottom: 5px;
  border-radius: 8px;
  padding: 10px;
  width: 60%;
  height: 14%;
  margin-left: 25%;
  border: 1px solid black;
`;



const MainEventCategory = styled.div `
  padding: 5%;
  width: 100%;
  margin: auto;
  margin-top: 10px;
  height: 18%;
  border: 1px solid black;
  border-radius: 10px;
  background-color: #000;
`;

const MainEventCategoryTitle = styled.h4 `
  text-align: center;
  color: white;
  font-size: 18px;
  border-bottom: 0.5px solid white;
`;

const MainEventCategoryText = styled.p `
  color: white;
  text-align: center;
  margin:auto;
  margin-top: 5px;
  font-size: 15px;
`;

const MainEventDescription = styled.p`
  text-align:justify;
  background-color: white;
  color: black;
  font-size: 14px;
  margin-top: 15px;
  margin-bottom: 5px;
  border-radius: 8px;
  padding: 10px;
  width: 70%;
  height: 100%;
  margin-left: 20%;
  border: 1px solid black;
`;

const MainEventButtonsContainer = styled.div`
  margin-left: 20%;
  display: flex;
  width: 70%;
  border-radius: 8px;
  gap: 23.35em;
  padding: 10px;
`;

const MainEventButton = styled.button`
  color: white;
  padding: 10px;
  border-radius: 5px;
  border-style: none;
  background-color: #5338b5;
  -webkit-box-shadow: 5px 5px 3px 1px rgba(168,152,240,1);
  -moz-box-shadow: 5px 5px 3px 1px rgba(168,152,240,1);
  box-shadow: 5px 8px 5px 1px rgba(168,152,240,1);
  width: 30%;
`;

const SecondaryEventCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  background-color: whitesmoke;
  width: 100%;
`;

const SecondaryEventImage = styled.img`
  width: 150px;
  height: 100;
  padding: 5%; 
  border-radius: 8px;
  opacity: 0.85;
`;

const SecondaryEventDetails = styled.div`
  padding: 10px;
`;

const SecondaryEventTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 5px;
`;

const SecondaryEventCategory = styled.span`
  font-size: 12px;
  color: #666;
`;

const EventList = () => {
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    // Simulación de solicitud a la API para obtener datos de eventos
    const mockApiData = [
      {
        image: 'https://img.chilango.com/2023/07/natanael-cano-tumbado-tour-2023-821x1024.jpg',
        title: 'Evento Principal',
        description: 'Descripción del evento principal...',
        category: 'Categoría Principal',
      },
      {
        image: 'https://img.chilango.com/2023/07/natanael-cano-tumbado-tour-2023-821x1024.jpg',
        title: 'Evento 1',
        category: 'Categoría Evento 1',
      },
      {
        image: 'https://img.chilango.com/2023/07/natanael-cano-tumbado-tour-2023-821x1024.jpg',
        title: 'Evento 1',
        category: 'Categoría Evento 1',
      },
      {
        image: 'https://img.chilango.com/2023/07/natanael-cano-tumbado-tour-2023-821x1024.jpg',
        title: 'Evento 1',
        category: 'Categoría Evento 1',
      },
      {
        image: 'https://img.chilango.com/2023/07/natanael-cano-tumbado-tour-2023-821x1024.jpg',
        title: 'Evento 1',
        category: 'Categoría Evento 1',
      },
      {
        image: 'https://img.chilango.com/2023/07/natanael-cano-tumbado-tour-2023-821x1024.jpg',
        title: 'Evento 1',
        category: 'Categoría Evento 1',
      },

      // Agregar más eventos aquí...
    ];

    setEventData(mockApiData);
  }, []);

  return (
    <Container>
      {eventData.length > 0 && (
        <EventGrid>
          <MainEventCard>
            <MainEventSideContainer>
              <MainEventImage src={eventData[0].image} alt="Imagen del Evento Principal" />
              <MainEventCategory>
                <MainEventCategoryTitle>Categoria</MainEventCategoryTitle>
                <MainEventCategoryText>Concierto</MainEventCategoryText>
              </MainEventCategory>
            </MainEventSideContainer>
            
            <MainEventDetails>
              <MainEventTitle>{eventData[0].title}</MainEventTitle>
              <MainEventDescription>{eventData[0].description}</MainEventDescription>
              <br />
              <MainEventButtonsContainer>
                <MainEventButton>Guardar Plantilla</MainEventButton>
                <MainEventButton>Editar Plantilla</MainEventButton>
              </MainEventButtonsContainer>
              
            </MainEventDetails>
          </MainEventCard>
          <MainSecondary>
            {eventData.slice(1).map((event, index) => (
                <SecondaryEventCard key={index}>
                <SecondaryEventImage src={event.image} alt={`Imagen del Evento ${event.title}`} />
                <SecondaryEventDetails>
                    <SecondaryEventTitle>{event.title}</SecondaryEventTitle>
                    <SecondaryEventCategory>Categoría: {event.category}</SecondaryEventCategory>
                </SecondaryEventDetails>
                </SecondaryEventCard>
            ))}
          </MainSecondary>
          
        </EventGrid>
      )}
    </Container>
  );
};

export default EventList;