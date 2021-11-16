import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import styles from './PageComponents.module.css'


interface Props {
  children: ReactNode | ReactNode[] | null;
}

export const Title: NextPage<Props> = (props: Props) => {
  const { children } = props;
  return (
    <h1 className={`${styles.titleTextStyle} dark:text-white`}>
      {children}
    </h1>
  );
};