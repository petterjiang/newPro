//input内容检验

export default {
    //判断手机号码 验证130-139,150-159,180-189号码段的手机号码
    validatemobile(mobile){
        let myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
        return myreg.test(mobile);
    },
    //判断密码强度
    //4个等级O.L,M,H
    pwdStrength(pwd) {
        var level = 0, strength = "O";
        if (pwd == null || pwd == '') {
            strength = "O";
        }
        else {
            var mode = 0;
            if (pwd.length <= 4)
                mode = 0;
            else {
                for (let i = 0; i < pwd.length; i++) {
                    var charMode, charCode;
                    charCode = pwd.charCodeAt(i);
                    // 判断输入密码的类型
                    if (charCode >= 48 && charCode <= 57) //数字
                        charMode = 1;
                    else if (charCode >= 65 && charCode <= 90) //大写
                        charMode = 2;
                    else if (charCode >= 97 && charCode <= 122) //小写
                        charMode = 4;
                    else
                        charMode = 8;
                    mode |= charMode;
                }
                // 计算密码模式
                level = 0;
                for (let i = 0; i < 4; i++) {
                    if (mode & 1)
                        level++;
                    mode >>>= 1;
                }
            }
            switch (level) {
                case 0:
                    strength = "O";
                    break;
                case 1:
                    strength = "L";
                    break;
                case 2:
                    strength = "M";
                    break;
                default:
                    strength = "H";
                    break;
            }
        }
        return strength;
    },
    //统一社会信用代码校验
    CheckSocialCreditCode(Code){
        if ((Code.length > 18) || (Code.length < 18)){
            return false;
        }else{
            var re=/.*[\u4e00-\u9fa5a-z]+.*$/;
            var res = re.test(Code);
            if(res){
                return false
            }else{
                return true
            }
        }
    },
    //验证组织机构合法性方法
    orgcodevalidate(value){
        if ((value.length > 10) || (value.length < 9)){
            return false;
        }else{
            var re=/.*[\u4e00-\u9fa5a-z]+.*$/;
            var res = re.test(value);
            if(res){
                return false
            }else{
                return true
            }
        }
    },
    //验证纳税人识别号方法
    taxpayerNumberCheck (value){
        if ((value.length > 20) || (value.length < 15)){
            return false;
        }else{
            var re=/.*[\u4e00-\u9fa5a-z]+.*$/;
            var res = re.test(value);
            if(res){
                return false
            }else{
                return true
            }
        }
    },
    //验证企业名称
    enterpriseNameCheck(value){
        if (value.length < 2){
            return false;
        }else{
            return true
        }
    },
    //密码设置验证,包含8-12位数字和字母返回true，否则返回false
    pwdCheck(code){
        var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/,
            res = re.test(code);
        if(res){
            return true;
        }else{
            return false;
        }
    }
}

