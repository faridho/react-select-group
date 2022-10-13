import React from 'react';
import { ArrowUp } from './arrow-up';
import { ArrowDown } from './arrow-down';

export const Icon = (props) => {
  if (props.name === 'arrow-up') {
    return <ArrowUp />
  } else if(props.name === 'arrow-down') {
    return <ArrowDown />
  }
}
