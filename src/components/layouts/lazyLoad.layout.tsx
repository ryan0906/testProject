import ReactLoadable from 'react-loadable';

export const MainLayout = ReactLoadable({
  loader: async () => await import(/* webpackChunkName: 'Main.layout' */ '@layouts/Main.layout'),
  loading: () => { return null }
});
