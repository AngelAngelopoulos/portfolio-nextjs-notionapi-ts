import { DataList, Paragraph, Title, Spinner, ImageProfile } from '../components';
import { FaChevronRight } from 'react-icons/all';
import { useEffect } from 'react';
import { dataLeft as data_left, dataRight as data_right, description } from '../strings';
import AOS from 'aos';

const About = () => {

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
    AOS.refresh();
  });

  return (
    <div className='min-h-screen h-full w-full lg:pt-36 lg:pb-16  pt-32 pb-8 justify-center overflow-hidden'>
      <Title>About</Title>
      <div className=' w-5/6 mx-auto'>
        <div data-aos='fade-up'>
          <Paragraph>
            {description}
          </Paragraph>
        </div>
        <div className='lg:flex flex-wrap'>
          <div className='lg:w-5/12 w-6/8 lg:pt-4 pt-3' data-aos='fade-up'>
            <ImageProfile />
          </div>
          <div className='lg:pt-4 pt-3 flex-wrap lg:w-1/2 mx-auto'>
            <h2 className='lg:px-5 dark:text-white text-center  text-4xl font-bold' data-aos='fade-up'>
              Software Developer & Pentester
            </h2>
            <div className='lg:flex flex-wrap mx-auto py-5' data-aos='fade-up'>
              <DataList className='lg:w-1/2 mx-auto' data={data_left}>
                <FaChevronRight />
              </DataList>
              <DataList className='lg:w-1/2 mx-auto' data={data_right}>
                <FaChevronRight />
              </DataList>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;