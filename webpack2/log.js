Hash: 9f130cb237a3ec48d264
Version: webpack 2.3.1
Time: 12423ms
                                     Asset       Size  Chunks                    Chunk Names
                           main1.bundle.js    1.88 kB       0  [emitted]         main1
                           main2.bundle.js  511 bytes       1  [emitted]         main2
                            main.bundle.js    7.67 MB       2  [emitted]  [big]  main
                                   commons    7.31 kB       3  [emitted]         commonChunk
main1.1ca2583ccc9d5d099f60605962ba32f0.css   97 bytes       0  [emitted]         main1
   [1] ./~/process/browser.js 5.3 kB {2} [built]
   [2] ./~/path-browserify/index.js 6.18 kB {2} [built]
 [256] (webpack)/lib/webpack.js 3.9 kB {2} [built]
 [257] ./app/b.js 544 bytes {3} [built]
 [462] ./app/a1.js 158 bytes {0} [built]
 [463] ./app/b1.js 542 bytes {3} [built]
 [464] ./app/c.js 157 bytes {3} [built]
 [734] ./app/a.js 579 bytes {0} [built]
 [735] ./~/extract-text-webpack-plugin/index.js 11.6 kB {2} [built]
 [736] ./~/html-webpack-plugin/index.js 22.7 kB {2} [built]
 [806] ./app/main1.js 700 bytes {0} [built]
 [807] ./app/main2.js 366 bytes {1} [built]
 [979] ./app/a.scss 41 bytes {0} [built]
 [988] ./~/extract-text-webpack-plugin/schema/loader-schema.js 606 bytes {2} [built]
[1427] ./webpack.config.js 2.29 kB {2} [built]
    + 1423 hidden modules

WARNING in ./~/fsevents/~/node-pre-gyp/lib/util/compile.js
Module not found: Error: Can't resolve 'npm' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/fsevents/node_modules/node-pre-gyp/lib/util'
 @ ./~/fsevents/~/node-pre-gyp/lib/util/compile.js 39:27-49
 @ ./~/fsevents/~/node-pre-gyp/lib ^\.\/.*$
 @ ./~/fsevents/~/node-pre-gyp/lib/node-pre-gyp.js
 @ ./~/fsevents/fsevents.js
 @ ./~/chokidar/lib/fsevents-handler.js
 @ ./~/chokidar/index.js
 @ ./~/watchpack/lib/DirectoryWatcher.js
 @ ./~/watchpack/lib/watcherManager.js
 @ ./~/watchpack/lib/watchpack.js
 @ (webpack)/lib/node/NodeWatchFileSystem.js
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

WARNING in ./~/fsevents/~/node-pre-gyp/lib/util/nw-pre-gyp/index.html
Module parse failed: /Users/x3927/git/myGit/practice/webpack2/node_modules/fsevents/node_modules/node-pre-gyp/lib/util/nw-pre-gyp/index.html Unexpected token (1:0)
You may need an appropriate loader to handle this file type.
| <!doctype html>
| <html>
| <head>
 @ ./~/fsevents/~/node-pre-gyp/lib ^\.\/.*$
 @ ./~/fsevents/~/node-pre-gyp/lib/node-pre-gyp.js
 @ ./~/fsevents/fsevents.js
 @ ./~/chokidar/lib/fsevents-handler.js
 @ ./~/chokidar/index.js
 @ ./~/watchpack/lib/DirectoryWatcher.js
 @ ./~/watchpack/lib/watcherManager.js
 @ ./~/watchpack/lib/watchpack.js
 @ (webpack)/lib/node/NodeWatchFileSystem.js
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

WARNING in ./~/node-gyp/lib/Find-VS2017.cs
Module parse failed: /Users/x3927/git/myGit/practice/webpack2/node_modules/node-gyp/lib/Find-VS2017.cs Unexpected token (7:6)
You may need an appropriate loader to handle this file type.
| // Usage:
| // powershell -ExecutionPolicy Unrestricted -Version "2.0" -Command "&{Add-Type -Path Find-VS2017.cs; [VisualStudioConfiguration.Main]::Query()}"
| using System;
| using System.Text;
| using System.Runtime.InteropServices;
 @ ./~/node-gyp/lib ^\.\/.*$
 @ ./~/node-gyp/lib/node-gyp.js
 @ ./~/fsevents/~/node-pre-gyp/lib/util/compile.js
 @ ./~/fsevents/~/node-pre-gyp/lib ^\.\/.*$
 @ ./~/fsevents/~/node-pre-gyp/lib/node-pre-gyp.js
 @ ./~/fsevents/fsevents.js
 @ ./~/chokidar/lib/fsevents-handler.js
 @ ./~/chokidar/index.js
 @ ./~/watchpack/lib/DirectoryWatcher.js
 @ ./~/watchpack/lib/watcherManager.js
 @ ./~/watchpack/lib/watchpack.js
 @ (webpack)/lib/node/NodeWatchFileSystem.js
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

WARNING in ./~/html-webpack-plugin/index.js
227:81-88 Critical dependency: require function is used in a way in which dependencies cannot be statically extracted

WARNING in ./~/uglify-js/tools/node.js
24:11-32 Critical dependency: the request of a dependency is an expression

WARNING in ./~/ajv/lib/async.js
96:20-33 Critical dependency: the request of a dependency is an expression

WARNING in ./~/ajv/lib/async.js
119:15-28 Critical dependency: the request of a dependency is an expression

WARNING in ./~/ajv/lib/compile/index.js
13:21-34 Critical dependency: the request of a dependency is an expression

WARNING in ./~/loader-runner/lib/loadLoader.js
3:2-28 Critical dependency: the request of a dependency is an expression

WARNING in ./~/fsevents/fsevents.js
14:13-71 Critical dependency: the request of a dependency is an expression

WARNING in ./~/fsevents/~/node-pre-gyp/lib/pre-binding.js
19:22-48 Critical dependency: the request of a dependency is an expression

WARNING in ./~/fsevents/~/node-pre-gyp/lib/util/versioning.js
15:20-67 Critical dependency: the request of a dependency is an expression

ERROR in ./~/html-webpack-plugin/index.js
Module not found: Error: Can't resolve 'fs' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/html-webpack-plugin'
 @ ./~/html-webpack-plugin/index.js 3:9-22
 @ ./webpack.config.js

ERROR in ./~/extract-text-webpack-plugin/index.js
Module not found: Error: Can't resolve 'fs' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/extract-text-webpack-plugin'
 @ ./~/extract-text-webpack-plugin/index.js 5:9-22
 @ ./webpack.config.js

ERROR in ./~/extract-text-webpack-plugin/loader.js
Module not found: Error: Can't resolve 'fs' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/extract-text-webpack-plugin'
 @ ./~/extract-text-webpack-plugin/loader.js 5:9-22
 @ ./~/extract-text-webpack-plugin/index.js
 @ ./webpack.config.js

ERROR in (webpack)/lib/NormalModule.js
Module not found: Error: Can't resolve 'module' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/webpack/lib'
 @ (webpack)/lib/NormalModule.js 8:21-38
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

ERROR in (webpack)/lib/node/NodeOutputFileSystem.js
Module not found: Error: Can't resolve 'fs' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/webpack/lib/node'
 @ (webpack)/lib/node/NodeOutputFileSystem.js 7:11-24
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

ERROR in (webpack)/lib/node/NodeMainTemplateAsync.runtime.js
Module not found: Error: Can't resolve 'fs' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/webpack/lib/node'
 @ (webpack)/lib/node/NodeMainTemplateAsync.runtime.js 9:2-15 25:3-16
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

ERROR in ./~/mkdirp/index.js
Module not found: Error: Can't resolve 'fs' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/mkdirp'
 @ ./~/mkdirp/index.js 2:9-22
 @ (webpack)/lib/node/NodeOutputFileSystem.js
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

ERROR in ./~/loader-runner/lib/LoaderRunner.js
Module not found: Error: Can't resolve 'fs' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/loader-runner/lib'
 @ ./~/loader-runner/lib/LoaderRunner.js 5:9-22
 @ (webpack)/lib/NormalModule.js
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

ERROR in ./~/graceful-fs/graceful-fs.js
Module not found: Error: Can't resolve 'fs' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/graceful-fs'
 @ ./~/graceful-fs/graceful-fs.js 1:9-22
 @ ./~/enhanced-resolve/lib/NodeJsInputFileSystem.js
 @ (webpack)/lib/node/NodeEnvironmentPlugin.js
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

ERROR in ./~/uglify-js/tools/node.js
Module not found: Error: Can't resolve 'fs' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/uglify-js/tools'
 @ ./~/uglify-js/tools/node.js 8:9-22
 @ ./~/html-minifier/src/htmlminifier.js
 @ ./~/html-webpack-plugin/index.js
 @ ./webpack.config.js

ERROR in ./~/graceful-fs/fs.js
Module not found: Error: Can't resolve 'fs' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/graceful-fs'
 @ ./~/graceful-fs/fs.js 3:9-22
 @ ./~/graceful-fs/graceful-fs.js
 @ ./~/enhanced-resolve/lib/NodeJsInputFileSystem.js
 @ (webpack)/lib/node/NodeEnvironmentPlugin.js
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

ERROR in ./~/clean-css/lib/reader/read-sources.js
Module not found: Error: Can't resolve 'fs' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/clean-css/lib/reader'
 @ ./~/clean-css/lib/reader/read-sources.js 1:9-22
 @ ./~/clean-css/lib/clean.js
 @ ./~/clean-css/index.js
 @ ./~/html-minifier/src/htmlminifier.js
 @ ./~/html-webpack-plugin/index.js
 @ ./webpack.config.js

ERROR in ./~/clean-css/lib/reader/apply-source-maps.js
Module not found: Error: Can't resolve 'fs' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/clean-css/lib/reader'
 @ ./~/clean-css/lib/reader/apply-source-maps.js 1:9-22
 @ ./~/clean-css/lib/reader/read-sources.js
 @ ./~/clean-css/lib/clean.js
 @ ./~/clean-css/index.js
 @ ./~/html-minifier/src/htmlminifier.js
 @ ./~/html-webpack-plugin/index.js
 @ ./webpack.config.js

ERROR in ./~/clean-css/lib/reader/load-original-sources.js
Module not found: Error: Can't resolve 'fs' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/clean-css/lib/reader'
 @ ./~/clean-css/lib/reader/load-original-sources.js 1:9-22
 @ ./~/clean-css/lib/reader/read-sources.js
 @ ./~/clean-css/lib/clean.js
 @ ./~/clean-css/index.js
 @ ./~/html-minifier/src/htmlminifier.js
 @ ./~/html-webpack-plugin/index.js
 @ ./webpack.config.js

ERROR in ./~/chokidar/index.js
Module not found: Error: Can't resolve 'fs' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/chokidar'
 @ ./~/chokidar/index.js 3:9-22
 @ ./~/watchpack/lib/DirectoryWatcher.js
 @ ./~/watchpack/lib/watcherManager.js
 @ ./~/watchpack/lib/watchpack.js
 @ (webpack)/lib/node/NodeWatchFileSystem.js
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

ERROR in ./~/chokidar/lib/nodefs-handler.js
Module not found: Error: Can't resolve 'fs' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/chokidar/lib'
 @ ./~/chokidar/lib/nodefs-handler.js 3:9-22
 @ ./~/chokidar/index.js
 @ ./~/watchpack/lib/DirectoryWatcher.js
 @ ./~/watchpack/lib/watcherManager.js
 @ ./~/watchpack/lib/watchpack.js
 @ (webpack)/lib/node/NodeWatchFileSystem.js
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

ERROR in ./~/chokidar/lib/fsevents-handler.js
Module not found: Error: Can't resolve 'fs' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/chokidar/lib'
 @ ./~/chokidar/lib/fsevents-handler.js 3:9-22
 @ ./~/chokidar/index.js
 @ ./~/watchpack/lib/DirectoryWatcher.js
 @ ./~/watchpack/lib/watcherManager.js
 @ ./~/watchpack/lib/watchpack.js
 @ (webpack)/lib/node/NodeWatchFileSystem.js
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

ERROR in ./~/fsevents/fsevents.js
Module not found: Error: Can't resolve 'fs' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/fsevents'
 @ ./~/fsevents/fsevents.js 17:9-22
 @ ./~/chokidar/lib/fsevents-handler.js
 @ ./~/chokidar/index.js
 @ ./~/watchpack/lib/DirectoryWatcher.js
 @ ./~/watchpack/lib/watcherManager.js
 @ ./~/watchpack/lib/watchpack.js
 @ (webpack)/lib/node/NodeWatchFileSystem.js
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

ERROR in ./~/fsevents/~/node-pre-gyp/lib/pre-binding.js
Module not found: Error: Can't resolve 'fs' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/fsevents/node_modules/node-pre-gyp/lib'
 @ ./~/fsevents/~/node-pre-gyp/lib/pre-binding.js 4:17-30
 @ ./~/fsevents/~/node-pre-gyp/lib/node-pre-gyp.js
 @ ./~/fsevents/fsevents.js
 @ ./~/chokidar/lib/fsevents-handler.js
 @ ./~/chokidar/index.js
 @ ./~/watchpack/lib/DirectoryWatcher.js
 @ ./~/watchpack/lib/watcherManager.js
 @ ./~/watchpack/lib/watchpack.js
 @ (webpack)/lib/node/NodeWatchFileSystem.js
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

ERROR in ./~/fsevents/~/node-pre-gyp/lib/clean.js
Module not found: Error: Can't resolve 'fs' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/fsevents/node_modules/node-pre-gyp/lib'
 @ ./~/fsevents/~/node-pre-gyp/lib/clean.js 7:9-22 9:13-26
 @ ./~/fsevents/~/node-pre-gyp/lib ^\.\/.*$
 @ ./~/fsevents/~/node-pre-gyp/lib/node-pre-gyp.js
 @ ./~/fsevents/fsevents.js
 @ ./~/chokidar/lib/fsevents-handler.js
 @ ./~/chokidar/index.js
 @ ./~/watchpack/lib/DirectoryWatcher.js
 @ ./~/watchpack/lib/watcherManager.js
 @ ./~/watchpack/lib/watchpack.js
 @ (webpack)/lib/node/NodeWatchFileSystem.js
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

ERROR in ./~/fsevents/~/node-pre-gyp/lib/info.js
Module not found: Error: Can't resolve 'fs' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/fsevents/node_modules/node-pre-gyp/lib'
 @ ./~/fsevents/~/node-pre-gyp/lib/info.js 7:9-22
 @ ./~/fsevents/~/node-pre-gyp/lib ^\.\/.*$
 @ ./~/fsevents/~/node-pre-gyp/lib/node-pre-gyp.js
 @ ./~/fsevents/fsevents.js
 @ ./~/chokidar/lib/fsevents-handler.js
 @ ./~/chokidar/index.js
 @ ./~/watchpack/lib/DirectoryWatcher.js
 @ ./~/watchpack/lib/watcherManager.js
 @ ./~/watchpack/lib/watchpack.js
 @ (webpack)/lib/node/NodeWatchFileSystem.js
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

ERROR in ./~/fsevents/~/node-pre-gyp/lib/package.js
Module not found: Error: Can't resolve 'fs' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/fsevents/node_modules/node-pre-gyp/lib'
 @ ./~/fsevents/~/node-pre-gyp/lib/package.js 7:9-22 11:12-25
 @ ./~/fsevents/~/node-pre-gyp/lib ^\.\/.*$
 @ ./~/fsevents/~/node-pre-gyp/lib/node-pre-gyp.js
 @ ./~/fsevents/fsevents.js
 @ ./~/chokidar/lib/fsevents-handler.js
 @ ./~/chokidar/index.js
 @ ./~/watchpack/lib/DirectoryWatcher.js
 @ ./~/watchpack/lib/watcherManager.js
 @ ./~/watchpack/lib/watchpack.js
 @ (webpack)/lib/node/NodeWatchFileSystem.js
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

ERROR in ./~/fsevents/~/node-pre-gyp/lib/install.js
Module not found: Error: Can't resolve 'fs' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/fsevents/node_modules/node-pre-gyp/lib'
 @ ./~/fsevents/~/node-pre-gyp/lib/install.js 7:9-22
 @ ./~/fsevents/~/node-pre-gyp/lib ^\.\/.*$
 @ ./~/fsevents/~/node-pre-gyp/lib/node-pre-gyp.js
 @ ./~/fsevents/fsevents.js
 @ ./~/chokidar/lib/fsevents-handler.js
 @ ./~/chokidar/index.js
 @ ./~/watchpack/lib/DirectoryWatcher.js
 @ ./~/watchpack/lib/watcherManager.js
 @ ./~/watchpack/lib/watchpack.js
 @ (webpack)/lib/node/NodeWatchFileSystem.js
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

ERROR in ./~/fsevents/~/node-pre-gyp/lib/publish.js
Module not found: Error: Can't resolve 'fs' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/fsevents/node_modules/node-pre-gyp/lib'
 @ ./~/fsevents/~/node-pre-gyp/lib/publish.js 7:9-22
 @ ./~/fsevents/~/node-pre-gyp/lib ^\.\/.*$
 @ ./~/fsevents/~/node-pre-gyp/lib/node-pre-gyp.js
 @ ./~/fsevents/fsevents.js
 @ ./~/chokidar/lib/fsevents-handler.js
 @ ./~/chokidar/index.js
 @ ./~/watchpack/lib/DirectoryWatcher.js
 @ ./~/watchpack/lib/watcherManager.js
 @ ./~/watchpack/lib/watchpack.js
 @ (webpack)/lib/node/NodeWatchFileSystem.js
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

ERROR in ./~/fsevents/~/node-pre-gyp/lib/reveal.js
Module not found: Error: Can't resolve 'fs' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/fsevents/node_modules/node-pre-gyp/lib'
 @ ./~/fsevents/~/node-pre-gyp/lib/reveal.js 7:9-22
 @ ./~/fsevents/~/node-pre-gyp/lib ^\.\/.*$
 @ ./~/fsevents/~/node-pre-gyp/lib/node-pre-gyp.js
 @ ./~/fsevents/fsevents.js
 @ ./~/chokidar/lib/fsevents-handler.js
 @ ./~/chokidar/index.js
 @ ./~/watchpack/lib/DirectoryWatcher.js
 @ ./~/watchpack/lib/watcherManager.js
 @ ./~/watchpack/lib/watchpack.js
 @ (webpack)/lib/node/NodeWatchFileSystem.js
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

ERROR in ./~/fsevents/~/node-pre-gyp/lib/testbinary.js
Module not found: Error: Can't resolve 'fs' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/fsevents/node_modules/node-pre-gyp/lib'
 @ ./~/fsevents/~/node-pre-gyp/lib/testbinary.js 7:9-22
 @ ./~/fsevents/~/node-pre-gyp/lib ^\.\/.*$
 @ ./~/fsevents/~/node-pre-gyp/lib/node-pre-gyp.js
 @ ./~/fsevents/fsevents.js
 @ ./~/chokidar/lib/fsevents-handler.js
 @ ./~/chokidar/index.js
 @ ./~/watchpack/lib/DirectoryWatcher.js
 @ ./~/watchpack/lib/watcherManager.js
 @ ./~/watchpack/lib/watchpack.js
 @ (webpack)/lib/node/NodeWatchFileSystem.js
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

ERROR in ./~/fsevents/~/node-pre-gyp/lib/unpublish.js
Module not found: Error: Can't resolve 'fs' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/fsevents/node_modules/node-pre-gyp/lib'
 @ ./~/fsevents/~/node-pre-gyp/lib/unpublish.js 7:9-22
 @ ./~/fsevents/~/node-pre-gyp/lib ^\.\/.*$
 @ ./~/fsevents/~/node-pre-gyp/lib/node-pre-gyp.js
 @ ./~/fsevents/fsevents.js
 @ ./~/chokidar/lib/fsevents-handler.js
 @ ./~/chokidar/index.js
 @ ./~/watchpack/lib/DirectoryWatcher.js
 @ ./~/watchpack/lib/watcherManager.js
 @ ./~/watchpack/lib/watchpack.js
 @ (webpack)/lib/node/NodeWatchFileSystem.js
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

ERROR in ./~/fsevents/~/node-pre-gyp/lib/testpackage.js
Module not found: Error: Can't resolve 'fs' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/fsevents/node_modules/node-pre-gyp/lib'
 @ ./~/fsevents/~/node-pre-gyp/lib/testpackage.js 7:9-22 13:11-24
 @ ./~/fsevents/~/node-pre-gyp/lib ^\.\/.*$
 @ ./~/fsevents/~/node-pre-gyp/lib/node-pre-gyp.js
 @ ./~/fsevents/fsevents.js
 @ ./~/chokidar/lib/fsevents-handler.js
 @ ./~/chokidar/index.js
 @ ./~/watchpack/lib/DirectoryWatcher.js
 @ ./~/watchpack/lib/watcherManager.js
 @ ./~/watchpack/lib/watchpack.js
 @ (webpack)/lib/node/NodeWatchFileSystem.js
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

ERROR in ./~/fsevents/~/node-pre-gyp/lib/util/handle_gyp_opts.js
Module not found: Error: Can't resolve 'fs' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/fsevents/node_modules/node-pre-gyp/lib/util'
 @ ./~/fsevents/~/node-pre-gyp/lib/util/handle_gyp_opts.js 5:9-22
 @ ./~/fsevents/~/node-pre-gyp/lib ^\.\/.*$
 @ ./~/fsevents/~/node-pre-gyp/lib/node-pre-gyp.js
 @ ./~/fsevents/fsevents.js
 @ ./~/chokidar/lib/fsevents-handler.js
 @ ./~/chokidar/index.js
 @ ./~/watchpack/lib/DirectoryWatcher.js
 @ ./~/watchpack/lib/watcherManager.js
 @ ./~/watchpack/lib/watchpack.js
 @ (webpack)/lib/node/NodeWatchFileSystem.js
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

ERROR in ./~/fsevents/~/node-pre-gyp/lib/util/compile.js
Module not found: Error: Can't resolve 'fs' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/fsevents/node_modules/node-pre-gyp/lib/util'
 @ ./~/fsevents/~/node-pre-gyp/lib/util/compile.js 5:9-22
 @ ./~/fsevents/~/node-pre-gyp/lib ^\.\/.*$
 @ ./~/fsevents/~/node-pre-gyp/lib/node-pre-gyp.js
 @ ./~/fsevents/fsevents.js
 @ ./~/chokidar/lib/fsevents-handler.js
 @ ./~/chokidar/index.js
 @ ./~/watchpack/lib/DirectoryWatcher.js
 @ ./~/watchpack/lib/watcherManager.js
 @ ./~/watchpack/lib/watchpack.js
 @ (webpack)/lib/node/NodeWatchFileSystem.js
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

ERROR in ./~/fsevents/~/node-pre-gyp/lib/info.js
Module not found: Error: Can't resolve 'aws-sdk' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/fsevents/node_modules/node-pre-gyp/lib'
 @ ./~/fsevents/~/node-pre-gyp/lib/info.js 14:14-32
 @ ./~/fsevents/~/node-pre-gyp/lib ^\.\/.*$
 @ ./~/fsevents/~/node-pre-gyp/lib/node-pre-gyp.js
 @ ./~/fsevents/fsevents.js
 @ ./~/chokidar/lib/fsevents-handler.js
 @ ./~/chokidar/index.js
 @ ./~/watchpack/lib/DirectoryWatcher.js
 @ ./~/watchpack/lib/watcherManager.js
 @ ./~/watchpack/lib/watchpack.js
 @ (webpack)/lib/node/NodeWatchFileSystem.js
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

ERROR in ./~/fsevents/~/node-pre-gyp/lib/publish.js
Module not found: Error: Can't resolve 'aws-sdk' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/fsevents/node_modules/node-pre-gyp/lib'
 @ ./~/fsevents/~/node-pre-gyp/lib/publish.js 17:14-32
 @ ./~/fsevents/~/node-pre-gyp/lib ^\.\/.*$
 @ ./~/fsevents/~/node-pre-gyp/lib/node-pre-gyp.js
 @ ./~/fsevents/fsevents.js
 @ ./~/chokidar/lib/fsevents-handler.js
 @ ./~/chokidar/index.js
 @ ./~/watchpack/lib/DirectoryWatcher.js
 @ ./~/watchpack/lib/watcherManager.js
 @ ./~/watchpack/lib/watchpack.js
 @ (webpack)/lib/node/NodeWatchFileSystem.js
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

ERROR in ./~/fsevents/~/node-pre-gyp/lib/unpublish.js
Module not found: Error: Can't resolve 'aws-sdk' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/fsevents/node_modules/node-pre-gyp/lib'
 @ ./~/fsevents/~/node-pre-gyp/lib/unpublish.js 15:14-32
 @ ./~/fsevents/~/node-pre-gyp/lib ^\.\/.*$
 @ ./~/fsevents/~/node-pre-gyp/lib/node-pre-gyp.js
 @ ./~/fsevents/fsevents.js
 @ ./~/chokidar/lib/fsevents-handler.js
 @ ./~/chokidar/index.js
 @ ./~/watchpack/lib/DirectoryWatcher.js
 @ ./~/watchpack/lib/watcherManager.js
 @ ./~/watchpack/lib/watchpack.js
 @ (webpack)/lib/node/NodeWatchFileSystem.js
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

ERROR in ./~/fsevents/~/node-pre-gyp/lib/testbinary.js
Module not found: Error: Can't resolve 'child_process' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/fsevents/node_modules/node-pre-gyp/lib'
 @ ./~/fsevents/~/node-pre-gyp/lib/testbinary.js 10:9-33
 @ ./~/fsevents/~/node-pre-gyp/lib ^\.\/.*$
 @ ./~/fsevents/~/node-pre-gyp/lib/node-pre-gyp.js
 @ ./~/fsevents/fsevents.js
 @ ./~/chokidar/lib/fsevents-handler.js
 @ ./~/chokidar/index.js
 @ ./~/watchpack/lib/DirectoryWatcher.js
 @ ./~/watchpack/lib/watcherManager.js
 @ ./~/watchpack/lib/watchpack.js
 @ (webpack)/lib/node/NodeWatchFileSystem.js
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

ERROR in ./~/fsevents/~/node-pre-gyp/lib/util/compile.js
Module not found: Error: Can't resolve 'child_process' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/fsevents/node_modules/node-pre-gyp/lib/util'
 @ ./~/fsevents/~/node-pre-gyp/lib/util/compile.js 9:9-33
 @ ./~/fsevents/~/node-pre-gyp/lib ^\.\/.*$
 @ ./~/fsevents/~/node-pre-gyp/lib/node-pre-gyp.js
 @ ./~/fsevents/fsevents.js
 @ ./~/chokidar/lib/fsevents-handler.js
 @ ./~/chokidar/index.js
 @ ./~/watchpack/lib/DirectoryWatcher.js
 @ ./~/watchpack/lib/watcherManager.js
 @ ./~/watchpack/lib/watchpack.js
 @ (webpack)/lib/node/NodeWatchFileSystem.js
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

ERROR in ./~/fsevents/~/rc/index.js
Module parse failed: /Users/x3927/git/myGit/practice/webpack2/node_modules/fsevents/node_modules/rc/index.js Unexpected character '#' (1:0)
You may need an appropriate loader to handle this file type.
| #! /usr/bin/env node
| var cc   = require('./lib/utils')
| var join = require('path').join
 @ ./~/fsevents/~/node-pre-gyp/lib/info.js 11:13-26
 @ ./~/fsevents/~/node-pre-gyp/lib ^\.\/.*$
 @ ./~/fsevents/~/node-pre-gyp/lib/node-pre-gyp.js
 @ ./~/fsevents/fsevents.js
 @ ./~/chokidar/lib/fsevents-handler.js
 @ ./~/chokidar/index.js
 @ ./~/watchpack/lib/DirectoryWatcher.js
 @ ./~/watchpack/lib/watcherManager.js
 @ ./~/watchpack/lib/watchpack.js
 @ (webpack)/lib/node/NodeWatchFileSystem.js
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

ERROR in ./~/fsevents/~/rimraf/rimraf.js
Module not found: Error: Can't resolve 'fs' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/fsevents/node_modules/rimraf'
 @ ./~/fsevents/~/rimraf/rimraf.js 6:9-22
 @ ./~/fsevents/~/node-pre-gyp/lib/clean.js
 @ ./~/fsevents/~/node-pre-gyp/lib ^\.\/.*$
 @ ./~/fsevents/~/node-pre-gyp/lib/node-pre-gyp.js
 @ ./~/fsevents/fsevents.js
 @ ./~/chokidar/lib/fsevents-handler.js
 @ ./~/chokidar/index.js
 @ ./~/watchpack/lib/DirectoryWatcher.js
 @ ./~/watchpack/lib/watcherManager.js
 @ ./~/watchpack/lib/watchpack.js
 @ (webpack)/lib/node/NodeWatchFileSystem.js
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

ERROR in ./~/fsevents/~/mkdirp/index.js
Module not found: Error: Can't resolve 'fs' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/fsevents/node_modules/mkdirp'
 @ ./~/fsevents/~/mkdirp/index.js 2:9-22
 @ ./~/fsevents/~/node-pre-gyp/lib/package.js
 @ ./~/fsevents/~/node-pre-gyp/lib ^\.\/.*$
 @ ./~/fsevents/~/node-pre-gyp/lib/node-pre-gyp.js
 @ ./~/fsevents/fsevents.js
 @ ./~/chokidar/lib/fsevents-handler.js
 @ ./~/chokidar/index.js
 @ ./~/watchpack/lib/DirectoryWatcher.js
 @ ./~/watchpack/lib/watcherManager.js
 @ ./~/watchpack/lib/watchpack.js
 @ (webpack)/lib/node/NodeWatchFileSystem.js
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

ERROR in ./~/node-gyp/lib/node-gyp.js
Module not found: Error: Can't resolve 'child_process' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/node-gyp/lib'
 @ ./~/node-gyp/lib/node-gyp.js 16:20-44
 @ ./~/fsevents/~/node-pre-gyp/lib/util/compile.js
 @ ./~/fsevents/~/node-pre-gyp/lib ^\.\/.*$
 @ ./~/fsevents/~/node-pre-gyp/lib/node-pre-gyp.js
 @ ./~/fsevents/fsevents.js
 @ ./~/chokidar/lib/fsevents-handler.js
 @ ./~/chokidar/index.js
 @ ./~/watchpack/lib/DirectoryWatcher.js
 @ ./~/watchpack/lib/watcherManager.js
 @ ./~/watchpack/lib/watchpack.js
 @ (webpack)/lib/node/NodeWatchFileSystem.js
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

ERROR in ./~/node-gyp/lib/build.js
Module not found: Error: Can't resolve 'child_process' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/node-gyp/lib'
 @ ./~/node-gyp/lib/build.js 15:11-35
 @ ./~/node-gyp/lib ^\.\/.*$
 @ ./~/node-gyp/lib/node-gyp.js
 @ ./~/fsevents/~/node-pre-gyp/lib/util/compile.js
 @ ./~/fsevents/~/node-pre-gyp/lib ^\.\/.*$
 @ ./~/fsevents/~/node-pre-gyp/lib/node-pre-gyp.js
 @ ./~/fsevents/fsevents.js
 @ ./~/chokidar/lib/fsevents-handler.js
 @ ./~/chokidar/index.js
 @ ./~/watchpack/lib/DirectoryWatcher.js
 @ ./~/watchpack/lib/watcherManager.js
 @ ./~/watchpack/lib/watchpack.js
 @ (webpack)/lib/node/NodeWatchFileSystem.js
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

ERROR in ./~/node-gyp/lib/find-vs2017.js
Module not found: Error: Can't resolve 'child_process' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/node-gyp/lib'
 @ ./~/node-gyp/lib/find-vs2017.js 2:15-39
 @ ./~/node-gyp/lib ^\.\/.*$
 @ ./~/node-gyp/lib/node-gyp.js
 @ ./~/fsevents/~/node-pre-gyp/lib/util/compile.js
 @ ./~/fsevents/~/node-pre-gyp/lib ^\.\/.*$
 @ ./~/fsevents/~/node-pre-gyp/lib/node-pre-gyp.js
 @ ./~/fsevents/fsevents.js
 @ ./~/chokidar/lib/fsevents-handler.js
 @ ./~/chokidar/index.js
 @ ./~/watchpack/lib/DirectoryWatcher.js
 @ ./~/watchpack/lib/watcherManager.js
 @ ./~/watchpack/lib/watchpack.js
 @ (webpack)/lib/node/NodeWatchFileSystem.js
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

ERROR in ./~/node-gyp/lib/configure.js
Module not found: Error: Can't resolve 'child_process' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/node-gyp/lib'
 @ ./~/node-gyp/lib/configure.js 19:9-33
 @ ./~/node-gyp/lib ^\.\/.*$
 @ ./~/node-gyp/lib/node-gyp.js
 @ ./~/fsevents/~/node-pre-gyp/lib/util/compile.js
 @ ./~/fsevents/~/node-pre-gyp/lib ^\.\/.*$
 @ ./~/fsevents/~/node-pre-gyp/lib/node-pre-gyp.js
 @ ./~/fsevents/fsevents.js
 @ ./~/chokidar/lib/fsevents-handler.js
 @ ./~/chokidar/index.js
 @ ./~/watchpack/lib/DirectoryWatcher.js
 @ ./~/watchpack/lib/watcherManager.js
 @ ./~/watchpack/lib/watchpack.js
 @ (webpack)/lib/node/NodeWatchFileSystem.js
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

ERROR in ./~/fsevents/~/glob/glob.js
Module not found: Error: Can't resolve 'fs' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/fsevents/node_modules/glob'
 @ ./~/fsevents/~/glob/glob.js 43:9-22
 @ ./~/fsevents/~/rimraf/rimraf.js
 @ ./~/fsevents/~/node-pre-gyp/lib/clean.js
 @ ./~/fsevents/~/node-pre-gyp/lib ^\.\/.*$
 @ ./~/fsevents/~/node-pre-gyp/lib/node-pre-gyp.js
 @ ./~/fsevents/fsevents.js
 @ ./~/chokidar/lib/fsevents-handler.js
 @ ./~/chokidar/index.js
 @ ./~/watchpack/lib/DirectoryWatcher.js
 @ ./~/watchpack/lib/watcherManager.js
 @ ./~/watchpack/lib/watchpack.js
 @ (webpack)/lib/node/NodeWatchFileSystem.js
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

ERROR in ./~/fsevents/~/uid-number/uid-number.js
Module not found: Error: Can't resolve 'child_process' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/fsevents/node_modules/uid-number'
 @ ./~/fsevents/~/uid-number/uid-number.js 9:20-44
 @ ./~/fsevents/~/tar-pack/index.js
 @ ./~/fsevents/~/node-pre-gyp/lib/package.js
 @ ./~/fsevents/~/node-pre-gyp/lib ^\.\/.*$
 @ ./~/fsevents/~/node-pre-gyp/lib/node-pre-gyp.js
 @ ./~/fsevents/fsevents.js
 @ ./~/chokidar/lib/fsevents-handler.js
 @ ./~/chokidar/index.js
 @ ./~/watchpack/lib/DirectoryWatcher.js
 @ ./~/watchpack/lib/watcherManager.js
 @ ./~/watchpack/lib/watchpack.js
 @ (webpack)/lib/node/NodeWatchFileSystem.js
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

ERROR in ./~/fsevents/~/fstream-ignore/ignore.js
Module not found: Error: Can't resolve 'fs' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/fsevents/node_modules/fstream-ignore'
 @ ./~/fsevents/~/fstream-ignore/ignore.js 11:7-20
 @ ./~/fsevents/~/tar-pack/index.js
 @ ./~/fsevents/~/node-pre-gyp/lib/package.js
 @ ./~/fsevents/~/node-pre-gyp/lib ^\.\/.*$
 @ ./~/fsevents/~/node-pre-gyp/lib/node-pre-gyp.js
 @ ./~/fsevents/fsevents.js
 @ ./~/chokidar/lib/fsevents-handler.js
 @ ./~/chokidar/index.js
 @ ./~/watchpack/lib/DirectoryWatcher.js
 @ ./~/watchpack/lib/watcherManager.js
 @ ./~/watchpack/lib/watchpack.js
 @ (webpack)/lib/node/NodeWatchFileSystem.js
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

ERROR in ./~/node-gyp/lib/remove.js
Module not found: Error: Can't resolve 'fs' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/node-gyp/lib'
 @ ./~/node-gyp/lib/remove.js 10:9-22
 @ ./~/node-gyp/lib ^\.\/.*$
 @ ./~/node-gyp/lib/node-gyp.js
 @ ./~/fsevents/~/node-pre-gyp/lib/util/compile.js
 @ ./~/fsevents/~/node-pre-gyp/lib ^\.\/.*$
 @ ./~/fsevents/~/node-pre-gyp/lib/node-pre-gyp.js
 @ ./~/fsevents/fsevents.js
 @ ./~/chokidar/lib/fsevents-handler.js
 @ ./~/chokidar/index.js
 @ ./~/watchpack/lib/DirectoryWatcher.js
 @ ./~/watchpack/lib/watcherManager.js
 @ ./~/watchpack/lib/watchpack.js
 @ (webpack)/lib/node/NodeWatchFileSystem.js
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

ERROR in ./~/fsevents/~/request/lib/har.js
Module not found: Error: Can't resolve 'fs' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/fsevents/node_modules/request/lib'
 @ ./~/fsevents/~/request/lib/har.js 3:9-22
 @ ./~/fsevents/~/request/request.js
 @ ./~/fsevents/~/request/index.js
 @ ./~/fsevents/~/node-pre-gyp/lib/install.js
 @ ./~/fsevents/~/node-pre-gyp/lib ^\.\/.*$
 @ ./~/fsevents/~/node-pre-gyp/lib/node-pre-gyp.js
 @ ./~/fsevents/fsevents.js
 @ ./~/chokidar/lib/fsevents-handler.js
 @ ./~/chokidar/index.js
 @ ./~/watchpack/lib/DirectoryWatcher.js
 @ ./~/watchpack/lib/watcherManager.js
 @ ./~/watchpack/lib/watchpack.js
 @ (webpack)/lib/node/NodeWatchFileSystem.js
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

ERROR in ./~/fsevents/~/glob/sync.js
Module not found: Error: Can't resolve 'fs' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/fsevents/node_modules/glob'
 @ ./~/fsevents/~/glob/sync.js 4:9-22
 @ ./~/fsevents/~/glob/glob.js
 @ ./~/fsevents/~/rimraf/rimraf.js
 @ ./~/fsevents/~/node-pre-gyp/lib/clean.js
 @ ./~/fsevents/~/node-pre-gyp/lib ^\.\/.*$
 @ ./~/fsevents/~/node-pre-gyp/lib/node-pre-gyp.js
 @ ./~/fsevents/fsevents.js
 @ ./~/chokidar/lib/fsevents-handler.js
 @ ./~/chokidar/index.js
 @ ./~/watchpack/lib/DirectoryWatcher.js
 @ ./~/watchpack/lib/watcherManager.js
 @ ./~/watchpack/lib/watchpack.js
 @ (webpack)/lib/node/NodeWatchFileSystem.js
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

ERROR in ./~/rimraf/rimraf.js
Module not found: Error: Can't resolve 'fs' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/rimraf'
 @ ./~/rimraf/rimraf.js 6:9-22
 @ ./~/node-gyp/lib/build.js
 @ ./~/node-gyp/lib ^\.\/.*$
 @ ./~/node-gyp/lib/node-gyp.js
 @ ./~/fsevents/~/node-pre-gyp/lib/util/compile.js
 @ ./~/fsevents/~/node-pre-gyp/lib ^\.\/.*$
 @ ./~/fsevents/~/node-pre-gyp/lib/node-pre-gyp.js
 @ ./~/fsevents/fsevents.js
 @ ./~/chokidar/lib/fsevents-handler.js
 @ ./~/chokidar/index.js
 @ ./~/watchpack/lib/DirectoryWatcher.js
 @ ./~/watchpack/lib/watcherManager.js
 @ ./~/watchpack/lib/watchpack.js
 @ (webpack)/lib/node/NodeWatchFileSystem.js
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

ERROR in ./~/glob/glob.js
Module not found: Error: Can't resolve 'fs' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/glob'
 @ ./~/glob/glob.js 43:9-22
 @ ./~/node-gyp/lib/build.js
 @ ./~/node-gyp/lib ^\.\/.*$
 @ ./~/node-gyp/lib/node-gyp.js
 @ ./~/fsevents/~/node-pre-gyp/lib/util/compile.js
 @ ./~/fsevents/~/node-pre-gyp/lib ^\.\/.*$
 @ ./~/fsevents/~/node-pre-gyp/lib/node-pre-gyp.js
 @ ./~/fsevents/fsevents.js
 @ ./~/chokidar/lib/fsevents-handler.js
 @ ./~/chokidar/index.js
 @ ./~/watchpack/lib/DirectoryWatcher.js
 @ ./~/watchpack/lib/watcherManager.js
 @ ./~/watchpack/lib/watchpack.js
 @ (webpack)/lib/node/NodeWatchFileSystem.js
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

ERROR in ./~/fsevents/~/fstream/lib/proxy-writer.js
Module not found: Error: Can't resolve 'fs' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/fsevents/node_modules/fstream/lib'
 @ ./~/fsevents/~/fstream/lib/proxy-writer.js 14:9-22
 @ ./~/fsevents/~/fstream/fstream.js
 @ ./~/fsevents/~/tar-pack/index.js
 @ ./~/fsevents/~/node-pre-gyp/lib/package.js
 @ ./~/fsevents/~/node-pre-gyp/lib ^\.\/.*$
 @ ./~/fsevents/~/node-pre-gyp/lib/node-pre-gyp.js
 @ ./~/fsevents/fsevents.js
 @ ./~/chokidar/lib/fsevents-handler.js
 @ ./~/chokidar/index.js
 @ ./~/watchpack/lib/DirectoryWatcher.js
 @ ./~/watchpack/lib/watcherManager.js
 @ ./~/watchpack/lib/watchpack.js
 @ (webpack)/lib/node/NodeWatchFileSystem.js
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

ERROR in ./~/fsevents/~/forever-agent/index.js
Module not found: Error: Can't resolve 'net' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/fsevents/node_modules/forever-agent'
 @ ./~/fsevents/~/forever-agent/index.js 6:10-24
 @ ./~/fsevents/~/request/request.js
 @ ./~/fsevents/~/request/index.js
 @ ./~/fsevents/~/node-pre-gyp/lib/install.js
 @ ./~/fsevents/~/node-pre-gyp/lib ^\.\/.*$
 @ ./~/fsevents/~/node-pre-gyp/lib/node-pre-gyp.js
 @ ./~/fsevents/fsevents.js
 @ ./~/chokidar/lib/fsevents-handler.js
 @ ./~/chokidar/index.js
 @ ./~/watchpack/lib/DirectoryWatcher.js
 @ ./~/watchpack/lib/watcherManager.js
 @ ./~/watchpack/lib/watchpack.js
 @ (webpack)/lib/node/NodeWatchFileSystem.js
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

ERROR in ./~/fsevents/~/forever-agent/index.js
Module not found: Error: Can't resolve 'tls' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/fsevents/node_modules/forever-agent'
 @ ./~/fsevents/~/forever-agent/index.js 7:10-24
 @ ./~/fsevents/~/request/request.js
 @ ./~/fsevents/~/request/index.js
 @ ./~/fsevents/~/node-pre-gyp/lib/install.js
 @ ./~/fsevents/~/node-pre-gyp/lib ^\.\/.*$
 @ ./~/fsevents/~/node-pre-gyp/lib/node-pre-gyp.js
 @ ./~/fsevents/fsevents.js
 @ ./~/chokidar/lib/fsevents-handler.js
 @ ./~/chokidar/index.js
 @ ./~/watchpack/lib/DirectoryWatcher.js
 @ ./~/watchpack/lib/watcherManager.js
 @ ./~/watchpack/lib/watchpack.js
 @ (webpack)/lib/node/NodeWatchFileSystem.js
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

ERROR in ./~/fsevents/~/tough-cookie/lib/cookie.js
Module not found: Error: Can't resolve 'net' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/fsevents/node_modules/tough-cookie/lib'
 @ ./~/fsevents/~/tough-cookie/lib/cookie.js 32:10-24
 @ ./~/fsevents/~/request/lib/cookies.js
 @ ./~/fsevents/~/request/index.js
 @ ./~/fsevents/~/node-pre-gyp/lib/install.js
 @ ./~/fsevents/~/node-pre-gyp/lib ^\.\/.*$
 @ ./~/fsevents/~/node-pre-gyp/lib/node-pre-gyp.js
 @ ./~/fsevents/fsevents.js
 @ ./~/chokidar/lib/fsevents-handler.js
 @ ./~/chokidar/index.js
 @ ./~/watchpack/lib/DirectoryWatcher.js
 @ ./~/watchpack/lib/watcherManager.js
 @ ./~/watchpack/lib/watchpack.js
 @ (webpack)/lib/node/NodeWatchFileSystem.js
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

ERROR in ./~/osenv/osenv.js
Module not found: Error: Can't resolve 'child_process' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/osenv'
 @ ./~/osenv/osenv.js 3:11-35
 @ ./~/node-gyp/lib/configure.js
 @ ./~/node-gyp/lib ^\.\/.*$
 @ ./~/node-gyp/lib/node-gyp.js
 @ ./~/fsevents/~/node-pre-gyp/lib/util/compile.js
 @ ./~/fsevents/~/node-pre-gyp/lib ^\.\/.*$
 @ ./~/fsevents/~/node-pre-gyp/lib/node-pre-gyp.js
 @ ./~/fsevents/fsevents.js
 @ ./~/chokidar/lib/fsevents-handler.js
 @ ./~/chokidar/index.js
 @ ./~/watchpack/lib/DirectoryWatcher.js
 @ ./~/watchpack/lib/watcherManager.js
 @ ./~/watchpack/lib/watchpack.js
 @ (webpack)/lib/node/NodeWatchFileSystem.js
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

ERROR in ./~/glob/sync.js
Module not found: Error: Can't resolve 'fs' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/glob'
 @ ./~/glob/sync.js 4:9-22
 @ ./~/glob/glob.js
 @ ./~/node-gyp/lib/build.js
 @ ./~/node-gyp/lib ^\.\/.*$
 @ ./~/node-gyp/lib/node-gyp.js
 @ ./~/fsevents/~/node-pre-gyp/lib/util/compile.js
 @ ./~/fsevents/~/node-pre-gyp/lib ^\.\/.*$
 @ ./~/fsevents/~/node-pre-gyp/lib/node-pre-gyp.js
 @ ./~/fsevents/fsevents.js
 @ ./~/chokidar/lib/fsevents-handler.js
 @ ./~/chokidar/index.js
 @ ./~/watchpack/lib/DirectoryWatcher.js
 @ ./~/watchpack/lib/watcherManager.js
 @ ./~/watchpack/lib/watchpack.js
 @ (webpack)/lib/node/NodeWatchFileSystem.js
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

ERROR in ./~/fs.realpath/index.js
Module not found: Error: Can't resolve 'fs' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/fs.realpath'
 @ ./~/fs.realpath/index.js 8:9-22
 @ ./~/glob/glob.js
 @ ./~/node-gyp/lib/build.js
 @ ./~/node-gyp/lib ^\.\/.*$
 @ ./~/node-gyp/lib/node-gyp.js
 @ ./~/fsevents/~/node-pre-gyp/lib/util/compile.js
 @ ./~/fsevents/~/node-pre-gyp/lib ^\.\/.*$
 @ ./~/fsevents/~/node-pre-gyp/lib/node-pre-gyp.js
 @ ./~/fsevents/fsevents.js
 @ ./~/chokidar/lib/fsevents-handler.js
 @ ./~/chokidar/index.js
 @ ./~/watchpack/lib/DirectoryWatcher.js
 @ ./~/watchpack/lib/watcherManager.js
 @ ./~/watchpack/lib/watchpack.js
 @ (webpack)/lib/node/NodeWatchFileSystem.js
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

ERROR in ./~/fsevents/~/fs.realpath/index.js
Module not found: Error: Can't resolve 'fs' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/fsevents/node_modules/fs.realpath'
 @ ./~/fsevents/~/fs.realpath/index.js 8:9-22
 @ ./~/fsevents/~/glob/glob.js
 @ ./~/fsevents/~/rimraf/rimraf.js
 @ ./~/fsevents/~/node-pre-gyp/lib/clean.js
 @ ./~/fsevents/~/node-pre-gyp/lib ^\.\/.*$
 @ ./~/fsevents/~/node-pre-gyp/lib/node-pre-gyp.js
 @ ./~/fsevents/fsevents.js
 @ ./~/chokidar/lib/fsevents-handler.js
 @ ./~/chokidar/index.js
 @ ./~/watchpack/lib/DirectoryWatcher.js
 @ ./~/watchpack/lib/watcherManager.js
 @ ./~/watchpack/lib/watchpack.js
 @ (webpack)/lib/node/NodeWatchFileSystem.js
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

ERROR in ./~/fsevents/~/tunnel-agent/index.js
Module not found: Error: Can't resolve 'net' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/fsevents/node_modules/tunnel-agent'
 @ ./~/fsevents/~/tunnel-agent/index.js 3:10-24
 @ ./~/fsevents/~/request/lib/tunnel.js
 @ ./~/fsevents/~/request/request.js
 @ ./~/fsevents/~/request/index.js
 @ ./~/fsevents/~/node-pre-gyp/lib/install.js
 @ ./~/fsevents/~/node-pre-gyp/lib ^\.\/.*$
 @ ./~/fsevents/~/node-pre-gyp/lib/node-pre-gyp.js
 @ ./~/fsevents/fsevents.js
 @ ./~/chokidar/lib/fsevents-handler.js
 @ ./~/chokidar/index.js
 @ ./~/watchpack/lib/DirectoryWatcher.js
 @ ./~/watchpack/lib/watcherManager.js
 @ ./~/watchpack/lib/watchpack.js
 @ (webpack)/lib/node/NodeWatchFileSystem.js
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

ERROR in ./~/fsevents/~/tunnel-agent/index.js
Module not found: Error: Can't resolve 'tls' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/fsevents/node_modules/tunnel-agent'
 @ ./~/fsevents/~/tunnel-agent/index.js 4:10-24
 @ ./~/fsevents/~/request/lib/tunnel.js
 @ ./~/fsevents/~/request/request.js
 @ ./~/fsevents/~/request/index.js
 @ ./~/fsevents/~/node-pre-gyp/lib/install.js
 @ ./~/fsevents/~/node-pre-gyp/lib ^\.\/.*$
 @ ./~/fsevents/~/node-pre-gyp/lib/node-pre-gyp.js
 @ ./~/fsevents/fsevents.js
 @ ./~/chokidar/lib/fsevents-handler.js
 @ ./~/chokidar/index.js
 @ ./~/watchpack/lib/DirectoryWatcher.js
 @ ./~/watchpack/lib/watcherManager.js
 @ ./~/watchpack/lib/watchpack.js
 @ (webpack)/lib/node/NodeWatchFileSystem.js
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

ERROR in ./~/fstream/lib/proxy-writer.js
Module not found: Error: Can't resolve 'fs' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/fstream/lib'
 @ ./~/fstream/lib/proxy-writer.js 14:9-22
 @ ./~/fstream/fstream.js
 @ ./~/node-gyp/lib/install.js
 @ ./~/node-gyp/lib ^\.\/.*$
 @ ./~/node-gyp/lib/node-gyp.js
 @ ./~/fsevents/~/node-pre-gyp/lib/util/compile.js
 @ ./~/fsevents/~/node-pre-gyp/lib ^\.\/.*$
 @ ./~/fsevents/~/node-pre-gyp/lib/node-pre-gyp.js
 @ ./~/fsevents/fsevents.js
 @ ./~/chokidar/lib/fsevents-handler.js
 @ ./~/chokidar/index.js
 @ ./~/watchpack/lib/DirectoryWatcher.js
 @ ./~/watchpack/lib/watcherManager.js
 @ ./~/watchpack/lib/watchpack.js
 @ (webpack)/lib/node/NodeWatchFileSystem.js
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

ERROR in ./~/fsevents/~/fs.realpath/old.js
Module not found: Error: Can't resolve 'fs' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/fsevents/node_modules/fs.realpath'
 @ ./~/fsevents/~/fs.realpath/old.js 24:9-22
 @ ./~/fsevents/~/fs.realpath/index.js
 @ ./~/fsevents/~/glob/glob.js
 @ ./~/fsevents/~/rimraf/rimraf.js
 @ ./~/fsevents/~/node-pre-gyp/lib/clean.js
 @ ./~/fsevents/~/node-pre-gyp/lib ^\.\/.*$
 @ ./~/fsevents/~/node-pre-gyp/lib/node-pre-gyp.js
 @ ./~/fsevents/fsevents.js
 @ ./~/chokidar/lib/fsevents-handler.js
 @ ./~/chokidar/index.js
 @ ./~/watchpack/lib/DirectoryWatcher.js
 @ ./~/watchpack/lib/watcherManager.js
 @ ./~/watchpack/lib/watchpack.js
 @ (webpack)/lib/node/NodeWatchFileSystem.js
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

ERROR in ./~/fs.realpath/old.js
Module not found: Error: Can't resolve 'fs' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/fs.realpath'
 @ ./~/fs.realpath/old.js 24:9-22
 @ ./~/fs.realpath/index.js
 @ ./~/glob/glob.js
 @ ./~/node-gyp/lib/build.js
 @ ./~/node-gyp/lib ^\.\/.*$
 @ ./~/node-gyp/lib/node-gyp.js
 @ ./~/fsevents/~/node-pre-gyp/lib/util/compile.js
 @ ./~/fsevents/~/node-pre-gyp/lib ^\.\/.*$
 @ ./~/fsevents/~/node-pre-gyp/lib/node-pre-gyp.js
 @ ./~/fsevents/fsevents.js
 @ ./~/chokidar/lib/fsevents-handler.js
 @ ./~/chokidar/index.js
 @ ./~/watchpack/lib/DirectoryWatcher.js
 @ ./~/watchpack/lib/watcherManager.js
 @ ./~/watchpack/lib/watchpack.js
 @ (webpack)/lib/node/NodeWatchFileSystem.js
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

ERROR in ./~/forever-agent/index.js
Module not found: Error: Can't resolve 'net' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/forever-agent'
 @ ./~/forever-agent/index.js 6:10-24
 @ ./~/request/request.js
 @ ./~/request/index.js
 @ ./~/node-gyp/lib/install.js
 @ ./~/node-gyp/lib ^\.\/.*$
 @ ./~/node-gyp/lib/node-gyp.js
 @ ./~/fsevents/~/node-pre-gyp/lib/util/compile.js
 @ ./~/fsevents/~/node-pre-gyp/lib ^\.\/.*$
 @ ./~/fsevents/~/node-pre-gyp/lib/node-pre-gyp.js
 @ ./~/fsevents/fsevents.js
 @ ./~/chokidar/lib/fsevents-handler.js
 @ ./~/chokidar/index.js
 @ ./~/watchpack/lib/DirectoryWatcher.js
 @ ./~/watchpack/lib/watcherManager.js
 @ ./~/watchpack/lib/watchpack.js
 @ (webpack)/lib/node/NodeWatchFileSystem.js
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

ERROR in ./~/forever-agent/index.js
Module not found: Error: Can't resolve 'tls' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/forever-agent'
 @ ./~/forever-agent/index.js 7:10-24
 @ ./~/request/request.js
 @ ./~/request/index.js
 @ ./~/node-gyp/lib/install.js
 @ ./~/node-gyp/lib ^\.\/.*$
 @ ./~/node-gyp/lib/node-gyp.js
 @ ./~/fsevents/~/node-pre-gyp/lib/util/compile.js
 @ ./~/fsevents/~/node-pre-gyp/lib ^\.\/.*$
 @ ./~/fsevents/~/node-pre-gyp/lib/node-pre-gyp.js
 @ ./~/fsevents/fsevents.js
 @ ./~/chokidar/lib/fsevents-handler.js
 @ ./~/chokidar/index.js
 @ ./~/watchpack/lib/DirectoryWatcher.js
 @ ./~/watchpack/lib/watcherManager.js
 @ ./~/watchpack/lib/watchpack.js
 @ (webpack)/lib/node/NodeWatchFileSystem.js
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

ERROR in ./~/fsevents/~/graceful-fs/graceful-fs.js
Module not found: Error: Can't resolve 'fs' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/fsevents/node_modules/graceful-fs'
 @ ./~/fsevents/~/graceful-fs/graceful-fs.js 1:9-22
 @ ./~/fsevents/~/fstream/lib/reader.js
 @ ./~/fsevents/~/fstream/fstream.js
 @ ./~/fsevents/~/tar-pack/index.js
 @ ./~/fsevents/~/node-pre-gyp/lib/package.js
 @ ./~/fsevents/~/node-pre-gyp/lib ^\.\/.*$
 @ ./~/fsevents/~/node-pre-gyp/lib/node-pre-gyp.js
 @ ./~/fsevents/fsevents.js
 @ ./~/chokidar/lib/fsevents-handler.js
 @ ./~/chokidar/index.js
 @ ./~/watchpack/lib/DirectoryWatcher.js
 @ ./~/watchpack/lib/watcherManager.js
 @ ./~/watchpack/lib/watchpack.js
 @ (webpack)/lib/node/NodeWatchFileSystem.js
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

ERROR in ./~/request/lib/har.js
Module not found: Error: Can't resolve 'fs' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/request/lib'
 @ ./~/request/lib/har.js 3:9-22
 @ ./~/request/request.js
 @ ./~/request/index.js
 @ ./~/node-gyp/lib/install.js
 @ ./~/node-gyp/lib ^\.\/.*$
 @ ./~/node-gyp/lib/node-gyp.js
 @ ./~/fsevents/~/node-pre-gyp/lib/util/compile.js
 @ ./~/fsevents/~/node-pre-gyp/lib ^\.\/.*$
 @ ./~/fsevents/~/node-pre-gyp/lib/node-pre-gyp.js
 @ ./~/fsevents/fsevents.js
 @ ./~/chokidar/lib/fsevents-handler.js
 @ ./~/chokidar/index.js
 @ ./~/watchpack/lib/DirectoryWatcher.js
 @ ./~/watchpack/lib/watcherManager.js
 @ ./~/watchpack/lib/watchpack.js
 @ (webpack)/lib/node/NodeWatchFileSystem.js
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

ERROR in ./~/tough-cookie/lib/cookie.js
Module not found: Error: Can't resolve 'net' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/tough-cookie/lib'
 @ ./~/tough-cookie/lib/cookie.js 32:10-24
 @ ./~/request/lib/cookies.js
 @ ./~/request/index.js
 @ ./~/node-gyp/lib/install.js
 @ ./~/node-gyp/lib ^\.\/.*$
 @ ./~/node-gyp/lib/node-gyp.js
 @ ./~/fsevents/~/node-pre-gyp/lib/util/compile.js
 @ ./~/fsevents/~/node-pre-gyp/lib ^\.\/.*$
 @ ./~/fsevents/~/node-pre-gyp/lib/node-pre-gyp.js
 @ ./~/fsevents/fsevents.js
 @ ./~/chokidar/lib/fsevents-handler.js
 @ ./~/chokidar/index.js
 @ ./~/watchpack/lib/DirectoryWatcher.js
 @ ./~/watchpack/lib/watcherManager.js
 @ ./~/watchpack/lib/watchpack.js
 @ (webpack)/lib/node/NodeWatchFileSystem.js
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

ERROR in ./~/isexe/index.js
Module not found: Error: Can't resolve 'fs' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/isexe'
 @ ./~/isexe/index.js 1:9-22
 @ ./~/which/which.js
 @ ./~/node-gyp/lib/build.js
 @ ./~/node-gyp/lib ^\.\/.*$
 @ ./~/node-gyp/lib/node-gyp.js
 @ ./~/fsevents/~/node-pre-gyp/lib/util/compile.js
 @ ./~/fsevents/~/node-pre-gyp/lib ^\.\/.*$
 @ ./~/fsevents/~/node-pre-gyp/lib/node-pre-gyp.js
 @ ./~/fsevents/fsevents.js
 @ ./~/chokidar/lib/fsevents-handler.js
 @ ./~/chokidar/index.js
 @ ./~/watchpack/lib/DirectoryWatcher.js
 @ ./~/watchpack/lib/watcherManager.js
 @ ./~/watchpack/lib/watchpack.js
 @ (webpack)/lib/node/NodeWatchFileSystem.js
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

ERROR in ./~/fsevents/~/graceful-fs/fs.js
Module not found: Error: Can't resolve 'fs' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/fsevents/node_modules/graceful-fs'
 @ ./~/fsevents/~/graceful-fs/fs.js 3:9-22
 @ ./~/fsevents/~/graceful-fs/graceful-fs.js
 @ ./~/fsevents/~/fstream/lib/reader.js
 @ ./~/fsevents/~/fstream/fstream.js
 @ ./~/fsevents/~/tar-pack/index.js
 @ ./~/fsevents/~/node-pre-gyp/lib/package.js
 @ ./~/fsevents/~/node-pre-gyp/lib ^\.\/.*$
 @ ./~/fsevents/~/node-pre-gyp/lib/node-pre-gyp.js
 @ ./~/fsevents/fsevents.js
 @ ./~/chokidar/lib/fsevents-handler.js
 @ ./~/chokidar/index.js
 @ ./~/watchpack/lib/DirectoryWatcher.js
 @ ./~/watchpack/lib/watcherManager.js
 @ ./~/watchpack/lib/watchpack.js
 @ (webpack)/lib/node/NodeWatchFileSystem.js
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

ERROR in ./~/tunnel-agent/index.js
Module not found: Error: Can't resolve 'net' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/tunnel-agent'
 @ ./~/tunnel-agent/index.js 3:10-24
 @ ./~/request/lib/tunnel.js
 @ ./~/request/request.js
 @ ./~/request/index.js
 @ ./~/node-gyp/lib/install.js
 @ ./~/node-gyp/lib ^\.\/.*$
 @ ./~/node-gyp/lib/node-gyp.js
 @ ./~/fsevents/~/node-pre-gyp/lib/util/compile.js
 @ ./~/fsevents/~/node-pre-gyp/lib ^\.\/.*$
 @ ./~/fsevents/~/node-pre-gyp/lib/node-pre-gyp.js
 @ ./~/fsevents/fsevents.js
 @ ./~/chokidar/lib/fsevents-handler.js
 @ ./~/chokidar/index.js
 @ ./~/watchpack/lib/DirectoryWatcher.js
 @ ./~/watchpack/lib/watcherManager.js
 @ ./~/watchpack/lib/watchpack.js
 @ (webpack)/lib/node/NodeWatchFileSystem.js
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

ERROR in ./~/tunnel-agent/index.js
Module not found: Error: Can't resolve 'tls' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/tunnel-agent'
 @ ./~/tunnel-agent/index.js 4:10-24
 @ ./~/request/lib/tunnel.js
 @ ./~/request/request.js
 @ ./~/request/index.js
 @ ./~/node-gyp/lib/install.js
 @ ./~/node-gyp/lib ^\.\/.*$
 @ ./~/node-gyp/lib/node-gyp.js
 @ ./~/fsevents/~/node-pre-gyp/lib/util/compile.js
 @ ./~/fsevents/~/node-pre-gyp/lib ^\.\/.*$
 @ ./~/fsevents/~/node-pre-gyp/lib/node-pre-gyp.js
 @ ./~/fsevents/fsevents.js
 @ ./~/chokidar/lib/fsevents-handler.js
 @ ./~/chokidar/index.js
 @ ./~/watchpack/lib/DirectoryWatcher.js
 @ ./~/watchpack/lib/watcherManager.js
 @ ./~/watchpack/lib/watchpack.js
 @ (webpack)/lib/node/NodeWatchFileSystem.js
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

ERROR in ./~/isexe/windows.js
Module not found: Error: Can't resolve 'fs' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/isexe'
 @ ./~/isexe/windows.js 4:9-22
 @ ./~/isexe/index.js
 @ ./~/which/which.js
 @ ./~/node-gyp/lib/build.js
 @ ./~/node-gyp/lib ^\.\/.*$
 @ ./~/node-gyp/lib/node-gyp.js
 @ ./~/fsevents/~/node-pre-gyp/lib/util/compile.js
 @ ./~/fsevents/~/node-pre-gyp/lib ^\.\/.*$
 @ ./~/fsevents/~/node-pre-gyp/lib/node-pre-gyp.js
 @ ./~/fsevents/fsevents.js
 @ ./~/chokidar/lib/fsevents-handler.js
 @ ./~/chokidar/index.js
 @ ./~/watchpack/lib/DirectoryWatcher.js
 @ ./~/watchpack/lib/watcherManager.js
 @ ./~/watchpack/lib/watchpack.js
 @ (webpack)/lib/node/NodeWatchFileSystem.js
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js

ERROR in ./~/isexe/mode.js
Module not found: Error: Can't resolve 'fs' in '/Users/x3927/git/myGit/practice/webpack2/node_modules/isexe'
 @ ./~/isexe/mode.js 4:9-22
 @ ./~/isexe/index.js
 @ ./~/which/which.js
 @ ./~/node-gyp/lib/build.js
 @ ./~/node-gyp/lib ^\.\/.*$
 @ ./~/node-gyp/lib/node-gyp.js
 @ ./~/fsevents/~/node-pre-gyp/lib/util/compile.js
 @ ./~/fsevents/~/node-pre-gyp/lib ^\.\/.*$
 @ ./~/fsevents/~/node-pre-gyp/lib/node-pre-gyp.js
 @ ./~/fsevents/fsevents.js
 @ ./~/chokidar/lib/fsevents-handler.js
 @ ./~/chokidar/index.js
 @ ./~/watchpack/lib/DirectoryWatcher.js
 @ ./~/watchpack/lib/watcherManager.js
 @ ./~/watchpack/lib/watchpack.js
 @ (webpack)/lib/node/NodeWatchFileSystem.js
 @ (webpack)/lib ^.*$
 @ (webpack)/lib/webpack.js
 @ ./webpack.config.js
Child extract-text-webpack-plugin:
       [0] ./~/css-loader/lib/css-base.js 2.19 kB {0} [built]
       [1] ./~/base64-js/index.js 3.48 kB {0} [built]
       [2] ./~/buffer/index.js 48.6 kB {0} [built]
       [3] ./~/css-loader!./~/sass-loader/lib/loader.js!./app/a.scss 237 bytes {0} [built]
       [4] ./~/ieee754/index.js 2.05 kB {0} [built]
       [5] ./~/isarray/index.js 132 bytes {0} [built]
       [6] (webpack)/buildin/global.js 509 bytes {0} [built]
