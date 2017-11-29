//公共工具方法
import copy from 'copy-to-clipboard';
export default {
    //判断是否移动端
    isPc(){
        if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
            return false
        } else {
            return true
        }
    },
    //复制内容到剪贴板
    copyText(text){
        copy(text,{
            debug: true,
            message: '请按下 #{key} 进行手动复制'
        });
    }

}

