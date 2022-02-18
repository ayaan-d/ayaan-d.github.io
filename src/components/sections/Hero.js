import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Grid from '@mui/material/Grid';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { IconButton } from '@mui/material';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import { Link, animateScroll as scroll } from "react-scroll";


const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertDesktop,
  alignTop,
  imageFill,
  invertMobile,
  ...props
}) => {

  // const openModal = (e) => {
  //   e.preventDefault();
  //   setVideomodalactive(true);
  // }

  // const closeModal = (e) => {
  //   e.preventDefault();
  //   setVideomodalactive(false);
  // }   

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

    const splitClasses = classNames(
      'split-wrap',
      invertMobile && 'invert-mobile',
      invertDesktop && 'invert-desktop',
      alignTop && 'align-top'
    );
  
    const sectionHeader = {
      title: 'My Experiences',
      paragraph: 'Throughout my years of highschool, I have pursued extracurricular activities which allow me to meld my passions from software to positive community impact. Below are some of those experiences which I have been a part of:'
    };
  
  return (
    <section
      {...props}
      className={outerClasses}
    >
      <Grid container direction='column'>
        <Grid container direction='row'>

        <Grid item xs={5} style={{float:'left', paddingLeft:'6vw', marginTop:'7vh', marginRight:'0'}}>
            <Image src={require('./../../assets/images/pic.svg')} 
                    width={600} paddingRight={0} mar>
            </Image>
          </Grid>

          <Grid item xs={6} style={{marginTop:'30vh', marginLeft:'2vw', marginBottom:'30vh'}}>
          <h1 className="reveal-from-bottom" data-reveal-delay="400" style={{marginBottom:'1px'}}>
              Hi 👋 My name is <span className="text-color-primary">Ayaan</span>.
              </h1>
              <h1 className="reveal-from-bottom" data-reveal-delay="400" style={{fontSize:'4vh', marginTop:'1px'}}>
                Welcome to my personal website!
              </h1>
          </Grid>
        </Grid>

        <Grid item>
          <icon>
            <Link activeClass='active' spy={true} smooth={true} offset={-0} duration={500} to='toJump'><KeyboardArrowDownIcon style={{fontSize:'6em'}}></KeyboardArrowDownIcon></Link>
          </icon>
        </Grid>
      </Grid>


        {/* <div className={innerClasses}> */}
          {/* <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
            👋 Hi, my name is <span className="text-color-primary">Ayaan</span>
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.
                </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile href="https://cruip.com/">
                    Get started
                    </Button>
                  <Button tag="a" color="dark" wideMobile href="https://github.com/cruip/open-react-template/">
                    View on Github
                    </Button>
                </ButtonGroup>
              </div>
            </div>
          </div> */}
          {/* <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
            <a
              data-video="https://player.vimeo.com/video/174002812"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src={require('./../../assets/images/video-placeholder.jpg')}
                alt="Hero"
                width={896}
                height={504} />
            </a>
          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://player.vimeo.com/video/174002812"
            videoTag="iframe" /> */}
        {/* </div> */}
    {/* </section> */}

{/* <section
{...props}
className={outerClasses}
id='toJump'
> */}
<div className="container" id='toJump'>
  <div className={innerClasses}>
    <SectionHeader data={sectionHeader} className="center-content" />
    <div className={splitClasses}>

      <div className="split-item">
        <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
          <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
            Lightning fast workflow
            </div>
          <h3 className="mt-0 mb-12">
            Discord Study Bot
            </h3>
          <p className="m-0">
          As the pandemic continues to change the lifestyle of many students, I decided to program a Study Bot which enables students to work together and study efficiently through the popular platform Discord virtually during online schooling.
          This StudyBot utilizes Discord.py paired with SQL to create databases for question banks for students to study. Furthermore, various API's enable features such as built in Wikipedia summaries, dictionaries and language translators. 
          </p>
        </div>
        <div className={
          classNames(
            'split-item-image center-content-mobile reveal-from-bottom',
            imageFill && 'split-item-image-fill'
          )}
          data-reveal-container=".split-item">
          <Image
            src={require('./../../assets/images/features-split-image-01.png')}
            alt="Features split 01"
            width={528}
            height={396} />
        </div>
      </div>

      <div className="split-item">
        <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
          <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
            Lightning fast workflow
            </div>
          <h3 className="mt-0 mb-12">
          Sorting Algorithm Visualizer
            </h3>
          <p className="m-0">
          As I continue to delve into the world of data structures and algorithms, I decided to improve my coding logic and understanding of sorting algorithms through visualization. Through the PyGame library I programmed a sorting visualizer which works with many types of sorting such as bubble, quick, and merge sort and shows the process and differences between each algorithm to further comprehend their differences in time complexities and efficiency.                   </p>
        </div>
        <div className={
          classNames(
            'split-item-image center-content-mobile reveal-from-bottom',
            imageFill && 'split-item-image-fill'
          )}
          data-reveal-container=".split-item">
          <a href='https://github.com/AyaanDada0145/SortingVisualizer/blob/main/sortingVis.py' target="_blank">
          <Image
            src={require('./../../assets/images/visualizerpng.png')}
            alt="Features split 02"
            width={528}
            height={396} />
          </a>
        </div>
      </div>

      <div className="split-item">
        <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
          <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
            Lightning fast workflow
            </div>
          <h3 className="mt-0 mb-12">
          StatIt NBA
            </h3>
          <p className="m-0">
          As a follower of the NBA, my love for the game of basketball led me to developing a project with the Tkinter module to display statistics for all professional players; past or present. By fetching data through the SportsReference API, the GUI allows those who are interested in the analytical and mathematical side behind sports such as myself to have all the info they need in one spot.
            </p>
        </div>
        <div className={
          classNames(
            'split-item-image center-content-mobile reveal-from-bottom',
            imageFill && 'split-item-image-fill'
          )}
          data-reveal-container=".split-item">
          <Image
            src={require('./../../assets/images/features-split-image-03.png')}
            alt="Features split 03"
            width={528}
            height={396} />
        </div>
      </div>

    </div>
  </div>
</div>
</section>


    
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;