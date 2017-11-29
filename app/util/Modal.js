//antd组件库Modal引用封装

import { Modal } from 'antd';
let witdh = '540';
let style={
    left: '50%',
    marginLeft: '-270px',
    top: '28%',
    position:'fixed'
};
//简单提示框
export default {
    success(title='成功',con='',onOk) {
        Modal.success({
            title: title,
            content: con,
            okText: '确认',
            onOk:onOk,
            width:witdh,
            style:style
        });
    },
    info(title='提示',con='',onOk){
        Modal.info({
            title: title,
            content: con,
            okText: '确认',
            onOk:onOk,
            width:witdh,
            style:style
        });
    },
    error(title='错误',con='',onOk){
        Modal.error({
            title: title,
            content: con,
            okText: '确认',
            onOk:onOk,
            width:witdh,
            style:style
        });
    },
    warning(title='警告',con='',onOk){
        Modal.error({
            title: title,
            content: con,
            okText: '确认',
            onOk:onOk,
            width:witdh,
            style:style
        });
    }
}
