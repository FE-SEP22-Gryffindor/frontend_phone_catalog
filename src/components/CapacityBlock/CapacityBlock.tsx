import classNames from 'classnames';
import React, { useState } from 'react';
import './CapacityBlock.scss';

export const CapacityBlock: React.FC = () => {
  const [capacity, setCapacity] = useState(64);

  return (
    <div className="capacity">
      <p className='capacity__title'>
        Select capacity
      </p>

      <div className='capacity__block'>
        <div
          className={classNames(
            'capacity__block__picker',
            { 'capacity__block__picker-active': capacity === 64 },
          )}
          onClick={() => setCapacity(64)}
        >
          64 GB
        </div>
        <div
          className={classNames(
            'capacity__block__picker',
            { 'capacity__block__picker-active': capacity === 256 },
          )}
          onClick={() => setCapacity(256)}
        >
          256 GB
        </div>
        <div
          className={classNames(
            'capacity__block__picker',
            { 'capacity__block__picker-active': capacity === 512 },
          )}
          onClick={() => setCapacity(512)}
        >
          512 GB
        </div>
      </div>
    </div>
  );
};
