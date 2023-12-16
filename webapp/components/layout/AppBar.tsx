import React from 'react';
import Image from 'next/image';

type AppBarProps = {
  hasLogo?: boolean;
  transparent?: boolean;
  mode?: 'simple' | 'full' | 'compact';
} & React.HTMLAttributes<HTMLDivElement>;

const AppBar = ({
  hasLogo = true,
  mode = 'simple',
  transparent = false,
  className,
  ...rest
}: AppBarProps) => {
  return (
    <div
      className={`h-[100px] w-full ${transparent ? 'bg-neutral-700' : ''}`}
      {...rest}
    >
      <div className={`h-full bg-neutral-900`}>
        {hasLogo && (
          <div className='p-2'>
            <Image
              src='/icons/icon.png'
              alt='Logo'
              height={0}
              width={0}
              sizes='1'
              style={{ width: `8rem`, height: `50%` }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AppBar;
