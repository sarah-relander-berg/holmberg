import React, { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

interface ColumnsProps {
  className?: string;
}

export const Columns: React.FC<PropsWithChildren<ColumnsProps>> = (props) => {
  return (
    <div
      className={twMerge(
        'my-4 flex flex-col md:flex-row gap-6 text-black',
        props.className,
      )}
      {...props}
    >
      {props.children}
    </div>
  );
};
