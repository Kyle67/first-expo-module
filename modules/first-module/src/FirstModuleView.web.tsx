import * as React from 'react';

import { FirstModuleViewProps } from './FirstModule.types';

export default function FirstModuleView(props: FirstModuleViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
