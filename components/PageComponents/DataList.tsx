import { NextPage } from 'next';
import styles from './PageComponents.module.css';
import { ReactElement } from 'react';

interface Item {
  title: string,
  info: string
}

interface Props {
  data: Item[];
  className: string;
  children: ReactElement | ReactElement[];
}

export const DataList: NextPage<Props> = (props: Props) => {

  const { className, data, children } = props;

  return (
    <ul className={className}>
      {
        data.map((item, index) =>
          <li key={index} className={`${styles.listItem} dark:text-gray-300`}>
            <p>
                            <span className='flex'>
                                {children}
                              <strong className={`${styles.strongText} dark:text-blue-200`}> {item.title} </strong>
                            </span>
              {item.info}
            </p>
          </li>,
        )
      }
    </ul>
  );
};