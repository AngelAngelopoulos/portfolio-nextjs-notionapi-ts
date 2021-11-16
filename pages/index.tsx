import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { useState } from 'react';
import { APIErrorCode, ClientErrorCode, isNotionClientError } from '@notionhq/client/build/src';
import Link from 'next/link';
import { greetings } from '../strings';

const { Client } = require('@notionhq/client');

// Initializing a client
const notion = new Client({
  auth: process.env.NOTION_TOKEN_API,
});

interface Certificate {
  id: String;
  cert_name: String;
  link: String;
  image_link: String;
}

interface Props {
  data: Certificate;
}

const Home: NextPage<Props> = (props: Props) => {

  const [state, setState] = useState(props.data);

  return (
    <div className='w-full h-screen'>
      <div className={styles.backgroundImageTitle}>
        <div className={styles.containerThree}>
          <div className='mx-4 text-center text-black'>
            <h1 className={styles.heroTitle} data-aos='zoom-out-up'>{greetings.up}</h1>
            <h2 className='font-bold text-3xl mb-12' data-aos='zoom-in-down'>{greetings.down}</h2>
          </div>

          <div className='absolute bottom-14'>
            <Link href='/contact'>
              <a
                className={styles.buttonTitle}>
                Contact me
              </a>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

Home.getInitialProps = async (ctx) => {
  try {
    const result = await notion.databases.query({
      database_id: process.env.DATABASE_CERTS_ID,
    });

    const data = result.results.map((page: any) => {
      return {
        id: page.id,
        cert_name: page.properties.CertName.title[0]?.plain_text,
        //tags: page.properties.Tags,
        link: page.properties.Link.url,
        image_link: page.properties.ImageLink.url,
      };
    });

    console.log(data);

    return { data: data };
  } catch (error: unknown) {
    if (isNotionClientError(error)) {
      // error is now strongly typed to NotionClientError
      switch (error.code) {
        case ClientErrorCode.RequestTimeout:
          // ...
          break;
        case APIErrorCode.ObjectNotFound:
          // ...
          break;
        case APIErrorCode.Unauthorized:
          // ...
          break;
        // ...
        default:
          // you could even take advantage of exhaustiveness checking
          console.log(error.code);
      }
    }
    return { data: false };
  }
};

export default Home;


