import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import styles from './PageComponents.module.css'

interface Props {
  children: ReactNode | ReactNode[] | null
}

export const Paragraph: NextPage<Props> = (props: Props) => {

  const { children } = props;

  return (
    <p className={`${styles.paragraphTextStyle}  dark:text-gray-300`}>
      {children}
    </p>
  );
};