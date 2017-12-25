/***************************
 * fetch请求--
 * get:    get请求方法
 * post:   post请求方法
 *
 * 参数--
 * url:    请求地址
 * data:   请求参数
***************************/
// import Modal from './Modal';
// import { hashHistory } from 'react-router';
// import cookieCtrl from './cookieCtrl';
// import * as Interface from '../config/Interface';
import 'whatwg-fetch';
import 'es6-promise';

export default {
   get (url,data) {
       const selfData = this.obj2params(data);
       return fetch(url+"?"+selfData, {
           method: "GET",
           credentials: 'include',
           headers: {
               'Accept': 'application/json, text/plain, */*',
               'Content-Type': 'application/x-www-form-urlencoded',
               'X-Requested-With': 'XMLHttpRequest'
           }
       }).then(resp => {
           if (resp.ok) {
               return resp.json();
           } else {
               let error = '请求失败';
               throw error
           }
       });
   },
    post (url,data){
        const selfData = this.obj2params(data);
        return fetch(url, {
            method: "POST",
            credentials: 'include',
            mode: "cors",
            redirect:"follow",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-Requested-With': 'XMLHttpRequest'
            },
            body:selfData
        }).then(resp => {
            if (resp.ok) {
                return resp.json();
            } else {
                let error = "错误代码："+resp.status+"! 错误信息："+resp.statusText;
                throw error
            }
        });
    },
    obj2params(obj) {
        let result = '';
        let item;
        for (item in obj) {
            result += '&' + item + '=' + encodeURIComponent(obj[item]);
        }
        if (result) {
            result = result.slice(1);
        }
        return result;
    }
}