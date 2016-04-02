eslint规范

## 新增
>* 团队配合,使用eslint来规范大家的代码

## 开始
>* npm i
>* npm run dev(开发模式)
>* npm run prod(生产模式)
>* npm run lint(规范检测)

## 参考文档
>* [eslint](http://eslint.org/)
>* [airbnb JavaScript规范](https://github.com/airbnb/javascript)
>* [Javascript 分号写前面好还是后面好?](https://www.zhihu.com/question/29961445)

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

    //---------eslint相关-----
    "eslint": "^2.6.0",
    "eslint-loader": "^1.3.0", //webpack preloader对js|jsx代码进行测试
    "babel-eslint": "^6.0.2", //对babelcode进行检测
    //eslint插件
    "eslint-plugin-babel": "^3.1.0",
    "eslint-plugin-flow-vars": "^0.2.1",
    "eslint-plugin-react": "^4.2.3",
    "eslint-config-airbnb": "^6.2.0", //airbnb代码规范

    "pre-commit": "^1.1.2", //提交git前确保代码符合规范
    //其他素材加载器,如json/png/jpg/字体等等
    "url-loader": "^0.5.7",
    "file-loader": "^0.8.5",
    "json-loader": "^0.5.4",
    //-------其他------
    "express": "^4.13.4", //开发服务器
}
```
