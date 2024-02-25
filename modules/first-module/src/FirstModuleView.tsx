import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { FirstModuleViewProps } from './FirstModule.types';

const NativeView: React.ComponentType<FirstModuleViewProps> =
  requireNativeViewManager('FirstModule');

export default function FirstModuleView(props: FirstModuleViewProps) {
  return <NativeView {...props} />;
}
