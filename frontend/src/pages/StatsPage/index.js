import React from 'react';
import Header from '../../components/Header';
import { Container } from 'react-bootstrap';
import ShortenerService from '../../services/shortenerService';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {StatsContainer, StatsRow, StatsBox, StatsBoxTitle } from './styles';

import { parseISO, formatRelative } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

class StatsPage extends React.Component{

constructor(props){
    super(props);

      this.state = {
        isLoading: false,
        shortenedURL: {},
        errorMessage: '',
      }  
}

//TODA VEZ QUE COMPONENTE FOR MONTANDO VAMOS FAZER ALGUMA COISA
async componentDidMount(){
    const { code } = this.props.match.params;

    try {
        const service = new ShortenerService();
        const shortenedURL = await service.getStats(code);

        const parsedDate = parseISO( shortenedURL.updatedAt);
        const currentDate = new Date();
    
        const relativeDate = formatRelative( parsedDate, currentDate,{
            locale:ptBR
        });

        shortenedURL.relativeDate = relativeDate;


        this.setState({ isLoading: false, shortenedURL});
    } catch (error) {
        this.setState({ isLoading: false, errorMessage: "Ops, a url solicitada nao existe"});
    }
}


    render(){
        const {errorMessage, shortenedURL} = this.state;
        
        return(
            <Container>
                <Header>Estatistica....</Header>
                {errorMessage  ? (
                    <StatsContainer className="text-center">
                        <FontAwesomeIcon size="3x" color="#f8d7da" icon="exclamation-triangle" />
                        <p className="m-3">{errorMessage}</p>
                        <a className="btn btn-primary" href="/">Encurtar nova URL</a>
                    </StatsContainer>
                ) : ( 
                    
                 <StatsContainer className="text-center">
                     <p><b>https://pitu.tk/{shortenedURL.code}</b></p>
                     <p>Redirecona para: <br/>{shortenedURL.url}</p>
                    <StatsRow>
                        <StatsBox>
                            <b>{shortenedURL.hits}</b>
                            <StatsBoxTitle>Visitas</StatsBoxTitle>
                        </StatsBox>
                        <StatsBox>
                            <b>{shortenedURL.relativeDate}</b>
                            <StatsBoxTitle>Última visitas</StatsBoxTitle>
                        </StatsBox>
                    </StatsRow>
                    <a className="btn btn-primary" href="/"> Encurtar nova URL</a>
                 </StatsContainer>   
                )} 
            </Container>

        )
    }

}

export default StatsPage;