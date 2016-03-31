搭建一个最基础的框架

## 开始
>* npm i
>* npm run dev
>* open http://localhost:3000

## 参考文档
>* [react入门](https://facebook.github.io/react/docs/getting-started.html)
>* [Babel手册](https://github.com/thejameskyle/babel-handbook)
>* [webpack hmr教程]((http://andrewhfarmer.com/webpack-hmr-tutorial/))

## package的依赖关系说明:

```
 "devDependencies": {
    //-------babel---------
    "babel-cli": "^6.6.5", // babel命令行工具,提供babel-node命令这样能让后端也用上es2015
    //针对webpack,只需要安装babel-core babel-loader
    "babel-core": "^6.7.4",
    "babel-loader": "^6.2.4",

    "babel-preset-es2015": "^6.6.0", //es2015包
    "babel-preset-react": "^6.5.0", //react包

    "babel-preset-react-hmre": "^1.1.1", //react热加载包

    //--------react部分-------
    "react": "^0.14.8",
    "react-dom": "^0.14.8",

    //--------webpack部分----------
    "webpack": "^1.12.14",  // webpack
    //关于热加载有很多选择,比如单使用webpack-dev-server
    //但webpack-dev-server相当于一个独立的服务,需要另分配端口启动,
    //我们只需要关键的两个中间件,然后在开发的文件打包服务中集成,这样就不需要搞两套服务了
    "webpack-dev-middleware": "^1.6.1", //dev+hot实现热加载功能
    "webpack-hot-middleware": "^2.10.0" //配合dev

    //-------其他------
    "express": "^4.13.4", //开发服务器
}
```
