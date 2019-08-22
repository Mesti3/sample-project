import React, { useState } from 'react';
import SlideShow from 'react-slidez';
import { withTranslation } from "react-i18next";
import { Aux } from '../../hoc/index';

import slide1 from "../../assets/images/slider/image1.jpg";
import slide2 from "../../assets/images/slider/image2.jpg";
import slide3 from "../../assets/images/slider/image3.jpg";
import slide4 from "../../assets/images/slider/image4.jpg";


const Image = React.lazy(() => import("./image/image"));


const Slider = props => {
  const [site,] = useState([
    {
      id: 1,
      image: slide1,
      title: "Title",
      text: "Some text dsbshbhfuiehhfdsfbldfdfhbhlebfdhbhgfdshsgf;s"
    },
    {
      id: 2,
      image: slide2,
      title: "Title",
      text: "Some text dsbshbhfuiehhfdsfbldfdfhbhlebfdhbhgfdshsgf;s"
    },
    {
      id: 3,
      image: slide3,
      title: "Title",
      text: "Some text dsbshbhfuiehhfdsfbldfdfhbhlebfdhbhgfdshsgf;s"
    }
  ]);

  return (
    <Aux>
      <div className="Slider">
        <SlideShow
          slideInterval={6000}
          defaultIndex={1}
          showArrows={false}
        >
          <Image image={slide1} title={props.t('slider.slide1Title', { frameWork: "react-i18next" })}
                 text={props.t('slider.slide1Text', { frameWork: "react-i18next" })}/>
          <Image image={slide2} title={props.t('slider.slide2Title', { frameWork: "react-i18next" })}
                 text={props.t('slider.slide2Text', { frameWork: "react-i18next" })}/>
          <Image image={slide3} title={props.t('slider.slide3Title', { frameWork: "react-i18next" })}
                 text={props.t('slider.slide3Text', { frameWork: "react-i18next" })}/>
          <Image image={slide4} title={props.t('slider.slide4Title', { frameWork: "react-i18next" })}
                 text={props.t('slider.slide4Text', { frameWork: "react-i18next" })}/>
        </SlideShow>
      </div>
    </Aux>
  )
};

export default withTranslation('common')(Slider);