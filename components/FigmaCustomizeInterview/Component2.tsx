import { memo } from 'react';
import type { FC } from 'react';

import resets from './_resets.module.css';
import classes from './Component2.module.css';

interface Props {
  className?: string;
}
/* @figmaId 21:29 */
export const Component2: FC<Props> = memo(function Component2(props = {}) {
  return (
    <div className='flex w-max content-center'>
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.customizeYourInterview}>Customize Your Interview</div>
      <div className={classes.rectangle2}></div>
      <div className={classes.rectangle5}></div>
      <div className={classes.rectangle7}></div>
      <div className={classes.rectangle6}></div>
      <div className={classes.start}>Start</div>
    </div>
    </div>

  );
});
