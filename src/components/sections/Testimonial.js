import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'My Skills And Achievements',
    paragraph: 'Here are some of the essential skills which I have developed over the years of programming and experience'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
              <span className="testimonial-item-name " style={{color:'#6163FF'}}><b>Programming Languages</b></span>
              <div className="testimonial-item-footer text-xs mb-0 has-top-divider" style={{marginTop:'1vh'}}>
                </div>
                  <p className="text-sm mb-0">
                    <ul>
                      <li>Python</li>
                      <li>Java</li>
                      <li>Javascript (React.js)</li>
                      <li>HTML/CSS</li>
                      <li>PHP</li>
                      <li>R</li>
                    </ul>
                  </p>
                  {/* <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">AppName</a> */}
                  {/* </span> */}
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
              <span className="testimonial-item-name" style={{color:'#6163FF'}}><b>Education</b></span>
              <div className="testimonial-item-footer text-xs mb-0 has-top-divider" style={{marginTop:'1vh'}}>
                </div>
                  <p className="text-sm mb-0">
                  <ul>
                      <li>St. Francis Xavier SS</li>
                      <li>Big Bang Data Science Intro To Machine Learning In Python/R</li>
                      <li>Harvard CS50x Course</li>
                    </ul>
                  </p>
                  {/* <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">AppName</a> */}
                  {/* </span> */}
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                  <span className="testimonial-item-name" style={{color:'#6163FF'}}><b>Awards</b></span>
                  {/* <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">AppName</a>
                  </span> */}
                <div className="testimonial-item-footer text-xs mb-0 has-top-divider" style={{marginTop:'1vh'}}>
                </div>
                {/* <div className="testimonial-item-content"> */}
                  <p className="text-sm mb-0">
                  <ul>
                      <li>Distinction in Euclid Mathematics Competition</li>
                      <li>Distinction in Avogadro Chemistry Competition</li>
                      <li>1st Place Muinuddin and Hasan-Bukhari Community Service Award</li>
                      <li>Top 3 Quaid-E-Azam Academic Award</li>
                    </ul>
                  </p>
                {/* </div> */}
               
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;