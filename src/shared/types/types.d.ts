/// <reference types="vite/client" />

declare module 'blogsify:site-data' {
  import type { UserConfig } from 'shared/types';
  const siteData: UserConfig;
  export default siteData;
}


declare module 'blogsify:routes' {
  import type { Route } from 'node/plugin-routes';
  export const routes: Route[];
}
