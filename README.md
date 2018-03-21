Yet another [Sass] renderer plugin for [Hexo]
=================================

> A hexo plugin for node-sass, fully compatible with hexo 3.x
  Inspired by [hexo-renderer-stylus](https://github.com/hexojs/hexo-renderer-stylus) and [hexo-renderer-sass](https://github.com/knksmith57/hexo-renderer-sass)
  
## Features

1. Use lastest API provided by hexo 3.x
2. Export some handy hexo related global functions to the Sass compiler context

  - hexo-config($key)

    Now you can use `hexo-config` function in your 'scss' files to access your hexo app's site configuration.

    ```
    $highlight_theme: hexo-config('highlight_theme')
    ```

  - hexo-theme-config($key)

    Similar to the `hexo-config`, you can use `hexo-theme-config` to access your hexo theme's configuration.

## Install

```sh
$ npm install --save hexo-renderer-scss
```

## Config

Anything specified under the key `node_sass` in your `_config.yml` files will
be [passed directly] to the `sass.render()` call. Check out the [node sass options docs]
for all available settings.

### _config.yml

```yaml
node_sass:
  debug: false
  outputStyle: nested
  precision: 5
  sourceComments: false
```

### Inheritance

The config object passed to node sass is constructed by merging properties from
the following locations using a least-specific-first order:

1. Hardcoded Defaults (`{outputStyle: 'nested',sourceComments: false}`)
2. Theme specific `_config.yml`
3. Blog root `_config.yml`

## About Releasing

The project will be released automatically via [semantic-release](https://github.com/semantic-release/cli) after being committed.

### Test releasing locally

```
npm run semantic-release-test
```

### Do releasing locally (not recommended!)

You should add a [`.env`](https://ollie.relph.me/blog/running-semantic-release-locally/) file to the project root firstly.

```
npm run semantic-release-local
```

More about the usage of `semantic-release`, pls read these posts: 

- https://github.com/JPeer264/node-semantic-git-commit-cli
- https://github.com/semantic-release/cli
- https://blog.greenkeeper.io/introduction-to-semantic-release-33f73b117c8
- https://medium.com/datreeio/semantic-release-survival-guide-6519cc5ea1a8
- https://ollie.relph.me/blog/running-semantic-release-locally/

## ♥︎

Questions, comments, concerns? --> [@o2team](https://twitter.com/o2circle).


[Hexo]:                   http://hexo.io
[Sass]:                   http://sass-lang.com/
[node-sass]:              https://github.com/andrew/node-sass
[passed directly]:        index.js:#L22
[node sass options docs]: https://github.com/sass/node-sass#options
[hexo-renderer-sass]:     https://github.com/knksmith57/hexo-renderer-sass
