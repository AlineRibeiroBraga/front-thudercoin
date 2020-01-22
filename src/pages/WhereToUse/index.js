import React, { Component } from 'react';

import { CareStore } from '../../assets/img';
import axios from '../../utils/httpClient';
import About from '../About/index';
import {
  Restaurant,
  Book,
  Round,
  Taxi,
  CenterImg,
  Img,
  Info,
  ItemList,
  Ul,
  Container,
} from './styles';
import { Grid } from '@material-ui/core';

class WhereToUse extends Component {
  state = {
    origins: [],
  };

  handleClick = category => {
    axios.get(`/origins/filter/earn-expend?earn=FALSE&expend=TRUE`).then(({ data }) => {
      let filteredOrigins = [];
      data.forEach(origin => {
        if (origin.category.name === category) {
          filteredOrigins.push(origin)
        }
      });
      this.setState({
        origins: filteredOrigins,
      });
    });
  };

  componentDidMount() {
    this.handleClick("Restaurante");
  }

  render() {
    const { origins } = this.state;

    return (
      <Container>
        <About />
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={3}
            sm={3} //768px - Tablet
            xl={3}
            xs={6}
          >
            <CenterImg >
              <Round onClick={() => this.handleClick('Restaurante')}>
                <Restaurant />
              </Round>
            </CenterImg>
          </Grid>
          <Grid
            item
            lg={3}
            sm={3}
            xl={3}
            xs={6}
          >
            <CenterImg >
              <Round onClick={() => this.handleClick('Educacao')}>
                <Book />
              </Round>
            </CenterImg>
          </Grid>
          <Grid
            item
            lg={3}
            sm={3}
            xl={3}
            xs={6}
          >
            <CenterImg >
              <Round onClick={() => this.handleClick('Transporte')}>
                <Taxi />
              </Round>
            </CenterImg>
          </Grid>
          <Grid
            item
            lg={3}
            sm={3}
            xl={3}
            xs={6}
          >
            <CenterImg >
              <Round onClick={() => this.handleClick('Care Store')}>
                <img
                  src={CareStore}
                  style={{ height: '70%' }}
                  alt="Care Store Logo"
                />
              </Round>
            </CenterImg>
          </Grid>
          </Grid>
          <Grid container >
            <Ul>
              {origins.map(origin => (
                <Grid
                  item
                  lg={6}
                  sm={6}
                  xl={3}
                  xs={12}
                >
                  <ItemList>
                    <Grid container justify="space-around" alignItems="center" >
                      <Grid
                        item
                        lg={6}
                        sm={6}
                        xl={6}
                        xs={12}
                      >
                        <CenterImg>
                          <Img
                            src={require(`../../assets/img/${origin.imagePath}`)}
                            alt={origin.name}
                          />
                        </CenterImg>
                      </Grid>
                      <Grid
                        item
                        lg={5}
                        sm={5}
                        xl={5}
                        xs={12}
                      >
                        <Info>
                          <h2>{origin.name}</h2>
                          <h3>{origin.address}</h3>
                        </Info>
                      </Grid>
                    </Grid>
                  </ItemList>
                </Grid>
              ))}
            </Ul>
          </Grid>
      </Container>
        );
      }
    }
    
export default WhereToUse;