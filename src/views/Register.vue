<template>
    <div>
        <div class="register">
        <h2>新用户注册</h2>
        <ul>
            <li>
            <span>邮箱：</span>
            <input type="text" id="uname" placeholder="请输入邮箱名" v-model="email"/>
            <em></em>
            <i></i>
            </li>
            <li>
            <span>密码：</span>
            <input type="password" id="upwd" placeholder="请输入密码" v-model="pwd1"/>
            <em></em>
            <i></i>
            </li>
            <li>
            <span>重复密码：</span>
            <input type="password" id="upwd2" placeholder="请重复输入密码" v-model="pwd2"/>
            <em></em>
            <i></i>
            </li>
            <li>
            <span>手机号：</span>
            <input type="text" id="phone" placeholder="请输入手机号" v-model="phone"/>
            <em></em>
            <i></i>
            </li>
            <li>
            <span>验证码：</span>
            <input type="text" class="inp_yzm" placeholder="请输入验证码" v-model="regCode"/>
            <img src="../assets/images/yzm.png" alt=""/>
            <strong class="icon_refresh"></strong>
            </li>
            <li class="li_checkbox"><label>
            <input type="checkbox" checked/>
            <span>我已阅读并同意用户注册协议</span>
            </label>
            </li>
            <li class="li_btn">
            <button type="button" @click="doReg">提交注册</button>
            </li>
        </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                email:"",
                pwd1:"",
                pwd2:"",
                phone:"",
                regCode:""
            }
        },
        methods:{
            doReg(){
                let that=this
                console.log(this.email,this.pwd1,this.pwd2,this.phone,this.regCode)
                let url="user_register.php"
                let params=`uname=${this.email}&upwd=${this.pwd1}&phone=${this.phone}`
                this.axios.post(url,params)
                    .then(res=>{
                        console.log(res)
                        if(res.data.code===1){
                            alert("恭喜您，注册成功，即将为您跳转到首页");
                            // 将用户的信息(uid/uname)保存到sessionStorage中
                            sessionStorage.uid=res.data.uid;
                            sessionStorage.uname=res.data.uname;
                            that.$router.push("/")

                        }else{
                            alert("注册失败，请重新输入");
                        }
                    })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>