import { ReactElement } from 'react';

export const Background = (props: { children: ReactElement | ReactElement[] }) => {
  const { children } = props;

  return (
    // Remove transition-all to disable the background color transition.
    <div className='h-full w-full bg-gradient-to-t from-gray-100 via-gray-300 to-gray-500
            dark:bg-gradient-to-b dark:from-gray-700 dark:via-gray-900 dark:to-black
            transition-all'>
      {children}
    </div>
  );
};