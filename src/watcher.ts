import type { Plugin } from 'vite';

declare module 'vite' {
  export class FSWatcher {
    _userIgnored: unknown;
  }
}

export function watchNodeModules(modules: string[]): Plugin {
  return {
    name: 'watch-node-modules',
    configureServer: (server) => {
      const regex = `/node_modules\\/(?!${modules.join('|')}).*/`;
      const ignored = ['**/.git/**', '**/test-results/**', new RegExp(regex)];

      server.watcher.options = { ...server.watcher.options, ignored };
      server.watcher._userIgnored = undefined;
    },
  };
}
