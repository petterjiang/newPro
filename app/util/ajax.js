import $ from 'jquery';
import Modal from './Modal';
import {} from 'react-router';
import { hashHistory } from 'react-router';
import cookieCtrl from './cookieCtrl';
import * as Interface from '../config/Interface';

export default {
    post (url,data,success,error) {
        let _this = this;
        this.hasSession();
        $.ajaxSetup({ cache: false });
        $.ajax({
            type: 'POST',
            url: url,
            data: data,
            success: function(data){
                _this.isLogin(data);
                success(data);
            },
            error:error,
            dataType: 'json'
        });
    },
    //JQUERY get 请求
    get (url,data,success,error){
        let _this = this;
        this.hasSession();
        $.ajaxSetup({ cache: false });
        $.ajax({
            type: 'GET',
            url: url,
            data: data,
            success: function(data){
                _this.isLogin(data);
                success(data);
            },
            error:error,
            dataType: 'json'
        });
    },
    //后端判断session
    isLogin(resp){
       if(resp.code==false){
           if(Interface.isLogin){
               Interface.isLogin=false;
               Modal.info('登录超时，请重新登录！','',function(){
                   cookieCtrl.delCookie('mobileLogin');
                   cookieCtrl.delCookie('sessionid');
                   hashHistory.push('/');
               });
           }
           return false;
       }else{
           Interface.isLogin=true;
           return true;
       }
    },
    //前端判断session
    hasSession(){
        //console.log(cookieCtrl.getCookie('sessionid'));
        if(!cookieCtrl.getCookie('sessionid')){
            if(Interface.isLogin){
                Interface.isLogin=false;
                Modal.info('未登录，请重新登录！','',function(){
                    hashHistory.push('/');
                });
            }
            return false;
        }else{
            Interface.isLogin=true;
            return true;
        }

    }
}