import SMI from "./SMI";
import News from "./News";
import Course from "./Course";
import ADS_1 from "./ADS_1";
import ADS_2 from "./ADS_2";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Find from "./Find";
import Weather from "./Weather";
import Visited from "./Visited";
import Maps from "./Maps";
import TVProgram from "./TVProgram";
import Live from "./Live";

import './Decomposition.css';

function Decomposition() {
  
  const smi_data = [
    {
      name: 'SMI 1',
      href: 'https://link_on_site_or_section'
    },{
      name: 'SMI 2',
      href: 'https://link_on_site_or_section'
    },{
      name: 'SMI 3',
      href: 'https://link_on_site_or_section'
  }];

  const news_data = [
    {
      img: 'https://link_on_image',
      name: 'News 1',
      href: 'https://link_on_site_or_section'
    },{
      img: 'https://link_on_image',
      name: 'News 2',
      href: 'https://link_on_site_or_section'
    },{
      img: 'https://link_on_image',
      name: 'News 3',
      href: 'https://link_on_site_or_section'
    },{
      img: 'https://link_on_image',
      name: 'News 4',
      href: 'https://link_on_site_or_section'
    },{
      img: 'https://link_on_image',
      name: 'News 5',
      href: 'https://link_on_site_or_section'
  }];

  const course_data = [
    {
      name: 'Course 1',
      price: 'price 1'
    },{
      name: 'Course 2',
      price: 'price 2'
    },{
      name: 'Course 3',
      price: 'price 3'
  }];

  const ads_1_data = {
      img: 'https://link_on_image',
      title: 'ADS',
      text: 'ADS Content',
      href: 'https://link_on_site_or_section'
  };

  const logo_image = 'https://link_on_image';

  const navigation_data = [
    {
      name: 'Nav 1',
      href: 'https://link_on_site_or_section'
    },{
      name: 'Nav 2',
      href: 'https://link_on_site_or_section'
    },{
      name: 'Nav 3',
      href: 'https://link_on_site_or_section'
    },{
      name: 'Nav 4',
      href: 'https://link_on_site_or_section'
    },{
      name: 'Nav 5',
      href: 'https://link_on_site_or_section'
    },{
      name: 'Nav 6',
      href: 'https://link_on_site_or_section'
    },{
      name: 'Nav 7',
      href: 'https://link_on_site_or_section'
    },{
      name: 'Nav 8',
      href: 'https://link_on_site_or_section'
  }];

  const find_data = 'popular request';

  const ads_2_data = {
    img: 'https://link_on_image',
    href: 'https://link_on_site_or_section'
  };

  const weather_data = {
    img: 'https://link_on_image',
    current: 'Current degree',
    morning: 'Morning degree',
    day: 'Day degree'
  };

  const visited_data = [
    {
      name: 'Name 1',
      href: 'https://link_on_site_or_section'
    },{
      name: 'Name 2',
      href: 'https://link_on_site_or_section'
    },{
      name: 'Name 3',
      href: 'https://link_on_site_or_section'
  }];

  const maps_data = {
    name: 'Name maps',
    href: 'https://link_on_site_or_section'
  };

  const tvprogram_data = [
    {
      time: 'hour:minute',
      name: 'Name 1',
      channel: 'Channel 1',
      href: 'https://link_on_site_or_section'
    },{
      time: 'hour:minute',
      name: 'Name 2',
      channel: 'Channel 2',
      href: 'https://link_on_site_or_section'
    },{
      time: 'hour:minute',
      name: 'Name 3',
      channel: 'Channel 3',
      href: 'https://link_on_site_or_section'
  }];

  const live_data = [
    {
      name: 'Name 1',
      channel: 'Channel 1',
      href: 'https://link_on_site_or_section'
    },{
      name: 'Name 2',
      channel: 'Channel 2',
      href: 'https://link_on_site_or_section'
    },{
      name: 'Name 3',
      channel: 'Channel 3',
      href: 'https://link_on_site_or_section'
  }];

  return (
    <div> {/* Блок для СМИ */}
      <SMI data={smi_data} />
      <div>
        <News data={news_data} />
        <ADS_1 {...ads_1_data} />
        <Course data={course_data} />
      </div>
      <div> {/* Блок для навигации и поиска */}
        <Logo img={logo_image} />
        <div className="inline">
          <Navigation data={navigation_data} />
          <Find data={find_data} />
        </div>
      </div>
      <ADS_2 img={ads_2_data} />
      <div>
        <Weather href='https://link_on_Weather' {...weather_data} />
        <Visited href='https://link_on_Visited' data={visited_data} />
        <Maps href='https://link_on_Maps' data={maps_data} />
        <TVProgram href='https://link_on_TVProgram' data={tvprogram_data} />
        <Live href='https://link_on_Live' data={live_data} />
      </div>
    </div>
  );
}

export default Decomposition;