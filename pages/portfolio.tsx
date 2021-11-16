import { NextPage, NextPageContext } from 'next';
import { Paragraph, Title } from '../components';

interface Project {
  title: string,
  category: string,
  description: string,
  date: number
}

interface Props {
  projects: Project[];
}

const Portfolio: NextPage<Props> = (props: Props) => {

  const { projects } = props;

  return (
    <div className=' min-h-screen h-full w-full lg:pt-36 lg:pb-16  pt-32 pb-8 justify-center'>
      <Title>Portfolio</Title>
      <div className=" mx-auto w-5/6">
        <div data-aos="fade-up">
          <Paragraph>
            These are some of the projects that I made throughout my professional and student life:
          </Paragraph>


        </div>
      </div>
    </div>
  );
};

Portfolio.getInitialProps = async (ctx: NextPageContext) => {
  return {
    projects: [
      {
        title: '📲 Handwriting Digit Recognition 📲',
        description: 'I made and Machine Learning Inference using Machine Learning Studio 🚀 from Microsoft Azure. ' +
          'The model was a sample of handwriting numbers to predict 📱.',
        category: 'Machine Learning',
        date: Date.UTC(2020, 8, 15),
      }],
  };
};

export default Portfolio;