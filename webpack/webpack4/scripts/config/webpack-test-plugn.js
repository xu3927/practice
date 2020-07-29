/**
 * ## webpack 生命周期
 * 编译过程包含以下几个过程:
 * - beforeRun
 * - run
 * - beforeCompile
 * - compile
 * - make
 * - seal
 *
 * # hooks
 * ## hook 类型:
 * - SyncHook(同步钩子) - SyncHook
 * - Bail Hooks(保释钩子) - SyncBailHook
 * - Waterfall Hooks(瀑布钩子) - SyncWaterfallHook
 *
 * 异步钩子如下：
 * - Async Series Hook(异步串行钩子) - AsyncSeriesHook
 * - Async waterfall(异步瀑布钩子) - AsyncWaterfallHook
 * - Async Series Bail - AsyncSeriesBailHook
 * - Async Parallel - AsyncParallelHook
 * - Async Series Bail - AsyncSeriesBailHook
 *
 *
 */

module.exports = class MyTestPlugin {
    apply(compiler) {
        // synchook 完成插件初始化, 准备编译环境时触发. Called while preparing the compiler environment, right after initializing the plugins in the configuration file.
        compiler.hooks.environment.tap('SomeStringWhichIsPlugin', () => {
            console.log('[environment]:')
        })

        // synchook environment hook 触发后触发该hook
        compiler.hooks.afterEnvironment.tap('SomeStringWhichIsPlugin', () => {
            console.log('[afterEnvironment]:')
        })

        // synchook 初始化内部plugins后触发
        compiler.hooks.afterPlugins.tap(
            'SomeStringWhichIsPlugin',
            (compilation) => {
                console.log('[afterPlugins]:')
            }
        )
        // synchook 完成resolver过程后
        compiler.hooks.afterResolvers.tap(
            'SomeStringWhichIsPlugin',
            (compilation) => {
                console.log('[afterResolvers]:')
            }
        )

        // synchook 读取 config 后触发
        compiler.hooks.entryOption.tap(
            'SomeStringWhichIsPlugin',
            (context, entry) => {
                // context 当前执行目录. entry 入口文件
                console.log('[entryOption]:', context, entry)
            }
        )

        /**
         * AsyncSeriesHook
         * Executes a plugin after compilation parameters are created.
         * 编译参数创建后. 执行的插件
         * 可以用来修改编译参数
         */
        compiler.hooks.beforeCompile.tap(
            'SomeStringWhichIsPlugin',
            (compilationParams, callback) => {
                console.log('[beforeCompile]:', callback)
                // callback()
            }
        )

        // SyncHook Called right after beforeCompile, before a new compilation is created.
        compiler.hooks.compile.tap(
            'SomeStringWhichIsPlugin',
            (compilationParams) => {
                console.log('[compile]:')
            }
        )

        // AsyncSeriesHook running the compiler之前触发该hook
        compiler.hooks.beforeRun.tapAsync(
            'SomeStringWhichIsPlugin',
            (ctx, entry) => {
                console.log('[beforeRun]:', ctx, entry)
            }
        )

        // AsyncSeriesHook Hook into the compiler before it begins reading records.
        compiler.hooks.run.tapAsync('SomeStringWhichIsPlugin', (ctx, entry) => {
            console.log('run:', ctx, entry)
        })

        //  AsyncSeriesHook Executes a plugin during watch mode after a new compilation is triggered but before the compilation is actually started.
        compiler.hooks.watchRun.tapAsync(
            'SomeStringWhichIsPlugin',
            (compiler, callback) => {
                console.log('[watchRun]:')
                callback()
            }
        )

        // SyncHook Called after a NormalModuleFactory is created.
        compiler.hooks.normalModuleFactory.tap(
            'SomeStringWhichIsPlugin',
            (normalModuleFactory) => {
                console.log('[normalModuleFactory]:')
            }
        )

        // SyncHook Runs a plugin after a ContextModuleFactory is created.
        compiler.hooks.contextModuleFactory.tap(
            'SomeStringWhichIsPlugin',
            (contextModuleFactory) => {
                console.log('[contextModuleFactory]:')
            }
        )

        // 4.x 无 SyncHook Called when a compiler object is initialized. 4.x 中 compiler.hooks.initialize 为 undefined
        // compiler.hooks.initialize.tap(
        //     'SomeStringWhichIsPlugin',
        //     (ctx, entry) => {
        //         console.log('initialize:', ctx, entry)
        //     }
        // )

        // SyncHook Executed while initializing the compilation, right before emitting the compilation event.
        compiler.hooks.thisCompilation.tap(
            'SomeStringWhichIsPlugin',
            (compilation, compilationParams) => {
                console.log('[thisCompilation]:')
            }
        )

        // SyncHook Runs a plugin after a compilation has been created.
        compiler.hooks.compilation.tap(
            'SomeStringWhichIsPlugin',
            (compilation, compilationParams) => {
                console.log('[compilation]:')
            }
        )

        // AsyncSeriesHook Called after finishing and sealing the compilation.
        compiler.hooks.afterCompile.tapAsync(
            'SomeStringWhichIsPlugin',
            (compilation, callback) => {
                console.log('[afterCompile]:')
                callback()
            }
        )

        // SyncBailHook Executed while initializing the compilation, right before emitting the compilation event.
        compiler.hooks.shouldEmit.tap(
            'SomeStringWhichIsPlugin',
            (compilation) => {
                // return true to emit the output, otherwise false
                console.log('[shouldEmit]:')
                return true
            }
        )
        //  AsyncSeriesHook Executed right before emitting assets to output dir.
        compiler.hooks.emit.tapAsync(
            'SomeStringWhichIsPlugin',
            (compilation, callback) => {
                console.log('[emit]:')
                callback()
            }
        )

        // debug 中 AsyncSeriesHook Called after emitting assets to output directory.
        compiler.hooks.afterEmit.tapAsync(
            'SomeStringWhichIsPlugin',
            (compilation, callback) => {
                console.log('[afterEmit]:')
                callback()
            }
        )

        // 4.x 中无该方法 Executed when an asset has been emitted. Provides access to information about the emitted asset, such as its output path and byte content.
        // compiler.hooks.assetEmitted.tapAsync(
        //     'SomeStringWhichIsPlugin',
        //     (
        //         file,
        //         { content, source, outputPath, compilation, targetPath }
        //     ) => {
        //         console.log('assetEmitted:', compilation)
        //     }
        // )

        // AsyncSeriesHook Executed when the compilation has completed.
        compiler.hooks.done.tapPromise('SomeStringWhichIsPlugin', (stats) => {
            console.log('[done]:')
            return Promise.resolve()
        })

        // SyncHook Called if the compilation fails.
        compiler.hooks.failed.tap('SomeStringWhichIsPlugin', (compilation) => {
            console.log('[failed]:')
        })

        // SyncHook Executed when a watching compilation has been invalidated.
        compiler.hooks.invalid.tap('SomeStringWhichIsPlugin', (compilation) => {
            console.log('[invalid]:')
        })

        compiler.hooks.make.tapAsync(
            'MyTestPlugin',
            (compilation, callback) => {
                console.log('[make]:')
                let _time = {}
                compilation.hooks.buildModule.tap('MyTestPlugin', (module) => {
                    // console.log('module.resource', module.resource)
                    // console.log('module.loaders', module.loaders)
                    if (module.resource) {
                        console.time(module.resource)
                    }
                })

                compilation.hooks.succeedModule.tap(
                    'MyTestPlugin',
                    (module) => {
                        if (module.resource) {
                            // console.log('[succeedModule]:', module.resource)
                            // 打印模块build耗时
                            // console.timeEnd(module.resource)
                        }
                    }
                )

                callback()
            }
        )
    }
}
