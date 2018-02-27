# react + redux + react-router 3自制脚手架
  本脚手架集成antd react组件库，react-redux插件。

## 本地运行条件: 
   确保本机安装node.js,npm

------------------------------------------------------------------------------
## 运行node本地环境:
   npm install          -- 运行之前，安装package.json中所有依赖插件。
   
   npm start            -- 启动本地服务。
   
   npm run build-uat    -- 打包uat环境文件。生成文件打包到build-uat文件夹，可在webpack config文件中配置文件夹名称
   
   npm run build        -- 打包正式环境文件。生成文件打包到build文件夹，可在webpack config文件中配置文件夹名称

   打包uat环境文件配置在 webpack.uat.config.js 中，打包正式环境文件配置在 webpack.production.config.js 中
  
   配置两个环境文件目的在于区别测试环境和正式环境，通过配置文件中webpack.DefinePlugin插件设置的环境变量，可以在代码中通过变量判断当前环境是否本地开发环境和测试或者是正式环境。
   
## 根目录配置文件
   package.json --npm命令配置以及所有插件依赖配置。
   
   package-lock.json  -- 依赖插件的地址以及版本锁定。

   .babelrc  --JavaScript 语法的编译器的配置文件，配置高版本的javascript语法解释为低版本的javascript。包括配置es6，es7的语法解释器。 以及引入插件的的预设presets。方便插件引用。
   
   .eslintrc  --配置javascript语法检测规则
   
   .gitignore --配置不需要上传git的文件及文件夹
   
   webpack.config.js --本地开发环境的服务以及各项配置
   
   webpack.uat.config.js --测试环境的各项配置
   
   webpack.production.config.js --生产环境的各项配置
   
## 跟目录文件夹
    
   /app        --所有开发文件
   
   /test       --测试，单元测试文件
    
    


    
