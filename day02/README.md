优化框架架构,区分开发模式和生产模式

## 新增
>* 添加生产模式,该模式下支持代码丑化/分割等功能
>* 抽离配置文件来统一设置编译参数
>* 添加样式loader
>* 添加素材loader

## 开始
>* npm i
>* npm run dev(开发模式)
>* npm run prod(生产模式)

## 参考文档
>* [webpack loading styles](http://survivejs.com/webpack/loading-assets/loading-styles/)
>* [webpack building](http://survivejs.com/webpack_react/building_kanban/)
>* [CSS Modules 详解及 React 中实践](http://zhuanlan.zhihu.com/p/20495964)

##各个击破

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

    "html-webpack-plugin": "^2.15.0", //html组织插件,把编译后的Js/css等文件插入到html页面中

    //样式loader,
    //less-loader处理less样式,依赖less,sass-loader处理sass样式,依赖node-sass
    //经过预处理后,css-loader接着处理@import和url()语句,然后传到style-loader,它组织文件注入到bundle.js文件中
    //相当于css都写进js中.一般生产线中会把css从js中抽离出来,于是需要extract-text-webpack-plugin插件来生成独立css文件
    //实际中,如果要组合多个样式名称的话,需要一个classnames帮助库
    "css-loader": "^0.23.1",
    "less": "^2.6.1",
    "less-loader": "^2.2.3",
    "node-sass": "^3.4.2",
    "postcss-loader": "^0.8.2",
    "sass-loader": "^3.2.0",
    "style-loader": "^0.13.1",
    "extract-text-webpack-plugin": "^1.0.1",
    "classnames": "^2.2.3",

    //其他素材加载器,如json/png/jpg/字体等等
    "url-loader": "^0.5.7",
    "file-loader": "^0.8.5",
    "json-loader": "^0.5.4",
    //-------其他------
    "express": "^4.13.4", //开发服务器
}
```
