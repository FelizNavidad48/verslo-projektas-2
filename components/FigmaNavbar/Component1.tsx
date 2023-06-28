import { memo } from 'react';
import type { FC } from 'react';
import Link from 'next/link'
import resets from './_resets.module.css';
import classes from './Component1.module.css';

interface Props {
  className?: string;
}
/* @figmaId 15:53 */
export const Component1: FC<Props> = memo(function Component1(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle1}></div>
      <div className={classes.blackWhiteMinimalistCalligraph}></div>
    </div>
  );
});
