// src/components/CitiesSlider.js
import React from 'react';
import classNames from 'classnames';

class CitiesSlider extends React.Component {
    constructor(props) {
        super(props);

        this.IMAGE_PARTS = 4;
        this.changeTO = null;
        this.AUTOCHANGE_TIME = 4000;

        this.state = { activeSlide: -1, prevSlide: -1, sliderReady: false, showDescription: false };
    }

    componentWillUnmount() {
        window.clearTimeout(this.changeTO);
    }

    componentDidMount() {
        this.runAutochangeTO();
        setTimeout(() => {
            this.setState({ activeSlide: 0, sliderReady: true }, () => {
                this.showDescriptionWithDelay();
            });
        }, 0);
    }

    runAutochangeTO() {
        this.changeTO = setTimeout(() => {
            this.changeSlides(1);
            this.runAutochangeTO();
        }, this.AUTOCHANGE_TIME);
    }

    changeSlides(change) {
        window.clearTimeout(this.changeTO);
        const { length } = this.props.slides;
        const prevSlide = this.state.activeSlide;
        let activeSlide = prevSlide + change;
        if (activeSlide < 0) activeSlide = length - 1;
        if (activeSlide >= length) activeSlide = 0;
        this.setState({ activeSlide, prevSlide, showDescription: false }, () => {
            this.showDescriptionWithDelay();
        });
    }

    showDescriptionWithDelay() {
        setTimeout(() => {
            this.setState({ showDescription: true });
        }, 300); // 0.3초 지연
    }

    render() {
        const { activeSlide, prevSlide, sliderReady, showDescription } = this.state;
        return (
            <div className={classNames('slider', { 's--ready': sliderReady })}>
                <div className="slider__slides">
                    {this.props.slides.map((slide, index) => (
                        <div
                            className={classNames('slider__slide', { 's--active': activeSlide === index, 's--prev': prevSlide === index })}
                            key={slide.city}
                        >
                            <div className="slider__slide-content">
                                {activeSlide === index && showDescription && (
                                    <p className="slider__top-heading" style={{ whiteSpace: 'pre-line' }}>
                                        {slide.description}
                                    </p>
                                )}
                                <h2 className="slider__slide-heading">
                                    {slide.city.split('').map((l, i) => (
                                        <span key={i} style={{ marginRight: '0.1em' }}>{l}</span>
                                    ))}
                                </h2>
                                <p className="slider__slide-readmore">read more</p>
                            </div>
                            <div className="slider__slide-parts">
                                {[...Array(this.IMAGE_PARTS)].map((x, i) => (
                                    <div className="slider__slide-part" key={i}>
                                        <div className="slider__slide-part-inner" style={{ backgroundImage: `url(${slide.img})` }} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="slider__control" onClick={() => this.changeSlides(-1)} />
                <div className="slider__control slider__control--right" onClick={() => this.changeSlides(1)} />
            </div>
        );
    }
}

export default CitiesSlider;
