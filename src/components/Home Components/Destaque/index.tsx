import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { Cont, Container } from "./styles";
import { sliderData } from "./data";

export default class Destaque extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 3,
    showNavigation: false,
    config: { tension: 120, friction: 14 },
  };

  slides = sliderData.map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  onChangeInput = (e: any): void => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0,
    });
  };

  render() {
    return (
      <Container>
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
        />
        <Cont />
      </Container>
    );
  }
}
