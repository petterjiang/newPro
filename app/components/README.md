#components--组件
  所有功能组件,可重用组件。放入本文件夹。
   
  组件文件夹使用以下规范方便组件管理：
  
  * 组件文件夹名称（设置为组件名称）  例如：Login
  
  * 组件文件夹包含下列4个文件（详细见示例 Login 和 My 组件）
   
       actions.js       --该组件action创建函数（没有数据交换组件可以不要这个文件，如Header）
   
       actionType.js    --该组件action列表（没有数据交换组件可以不要这个文件，如Header）
   
       reducer.js       --该组件reducer（没有数据交换组件可以不要这个文件，如Header）
   
       index.js         --该组件view界面