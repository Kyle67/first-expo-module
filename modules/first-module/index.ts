import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to FirstModule.web.ts
// and on native platforms to FirstModule.ts
import FirstModule from './src/FirstModule';
import FirstModuleView from './src/FirstModuleView';
import { ChangeEventPayload, FirstModuleViewProps } from './src/FirstModule.types';

// Get the native constant value.
export const PI = FirstModule.PI;

export function hello(): string {
  return FirstModule.hello();
}

export async function setValueAsync(value: string) {
  return await FirstModule.setValueAsync(value);
}

const emitter = new EventEmitter(FirstModule ?? NativeModulesProxy.FirstModule);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { FirstModuleView, FirstModuleViewProps, ChangeEventPayload };
