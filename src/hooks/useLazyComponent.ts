import { lazy, ComponentType, LazyExoticComponent } from 'react';

export type ReactLazyFactory<T = any> = () => Promise<{ default: ComponentType<T> }>;

export type ComponentPreloadTuple<T = any> = [component: LazyExoticComponent<ComponentType<T>>, preloadFn: () => void];

export function getLazyComponentWithPreload<T = any>(componentPath: string): ComponentPreloadTuple<T>;
export function getLazyComponentWithPreload<T = any>(factory: ReactLazyFactory<T>): ComponentPreloadTuple<T>;
export function getLazyComponentWithPreload<T = any>(input: string | ReactLazyFactory<T>): ComponentPreloadTuple<T> {
  const factory = () => (typeof input === 'string' ? import(input) : input());
  return [lazy(factory), factory];
}