<template>
    <div class="header">
        <div class="first-header-warp">
            <div class="first-header">
                <ul class="clearfix">
                    <li><img :src="phone" /></li>
                    <li><img :src="fly" /></li>
                    <li><img :src="wechart" /></li>
                </ul>
                <ul>
                    <li><img :src="phone_fill" />
                        <span>+8613520888618</span>
                    </li>
                </ul>
                <ul>
                    <li>全球地区办公室</li>
                </ul>
                <ul>
                    <li>请联系我</li>
                </ul>
                <ul>
                    <li v-show="countryShow" @click="handerCountry" class="country current" ><img :src="country[currentCountry].img" /><span>{{country[currentCountry].name}}</span></li>
                    <li v-show="!countryShow" v-for="(c,i) in country"  @click="selectCountry(i)" :key="c.name" class="country"><img :src="c.img" /><span>{{c.name}}</span></li>
                </ul>
                <ul>
                    <li><img class="search" :src="search" /></li>
                </ul>
            </div>
        </div>
        <div class="second-header">
            <div class="logo"><img :src="logo" /></div>
            <ul class="nav">
                <li class="item">永居移民项目
                    <div class="header-info">
                        <div class="header-info-inline">
                            <img :src="passport" />
                            <p>投资移民改政策改变:Tier1 创业签证项目最新攻略</p>
                            <ul>
                                <li>欧盟拘留身份</li>
                                <li>英国</li>
                                <li>爱尔兰</li>
                                <li>葡萄牙</li>
                                <li>希腊</li>
                                <li>塞浦路斯</li>
                                <li>马耳他</li>
                            </ul>
                            <ul>
                                <li style="height: 30px;"></li>
                                <li>摩纳哥</li>
                                <li>西班牙</li>
                                <li>泽西</li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li class="item">护照投资移民项目
                    <div class="header-info">
                        <div class="header-info-inline">
                            <img :src="passport" />
                            <p>投资移民改政策改变:Tier1 创业签证项目最新攻略</p>
                            <ul>
                                <li>欧盟投资移民</li>
                                <li>塞浦路斯</li>
                                <li>马耳他</li>
                                <li>黑山共和国</li>
                                <li>保加利亚</li>
                            </ul>
                            <ul>
                                <li>加勒比海投资移民</li>
                                <li>多米尼克</li>
                                <li>圣卢西亚</li>
                                <li>安提瓜和巴布达</li>
                                <li>圣克里斯多福及尼维斯</li>
                                <li>格林纳达</li>
                            </ul>
                            <ul>
                                <li>Other countries</li>
                                <li>土耳其</li>
                                <li>瓦努阿图</li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li class="item">英国移民
                    <div class="header-info">
                        <div class="header-info-inline">
                            <ul>
                                <li>投资者和企业家</li>
                                <li>土耳其商务签证</li>
                                <li>Tier 1（投资者）签证</li>
                                <li>创业签证</li>
                                <li>创新签证</li>
                                <li>Tier 1 （企业家）</li>
                            </ul>
                            <ul>
                                <li>雇主和雇员</li>
                                <li>海外首席代表签证</li>
                                <li>Tier 2 （一般）签证</li>
                                <li>Tier 2 （公司内部调动）签证</li>
                                <li>雇主担保执照</li>
                                <li>模拟审核</li>
                            </ul>
                            <ul>
                                <li>移居和定居</li>
                                <li>欧盟安置计划</li>
                                <li>欧盟/欧洲经济区家庭许可证</li>
                                <li>伴侣和家庭签证</li>
                                <li>永久居留签证</li>
                                <li>欧盟/英国国籍</li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li class="item">地产信息
                    <div class="header-info">
                        <div class="header-info-inline">
                            <img :src="passport" />
                            <p>投资移民改政策改变:Tier1 创业签证项目最新攻略</p>
                            <ul class="estate">
                                <li>英国</li>
                                <li>塞浦路斯</li>
                                <li>多米尼克</li>
                                <li>土耳其</li>
                                <li>希腊</li>
                                <li>圣克里斯多福及尼维斯</li>
                            </ul>
                        </div>
                    </div>
                </li>
                <li class="item">新闻</li>
                <li class="item">有关阿斯顿
                    <div class="header-info">
                        <div class="header-info-inline">
                            <img :src="passport" />
                            <p>投资移民改政策改变:Tier1 创业签证项目最新攻略</p>
                            <ul class="astons">
                                <li>全球地区办公室</li>
                                <li>招才</li>
                                <li>与我们合作</li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import phone from "@/assets/img/phone.svg"
import fly from "@/assets/img/fly.svg"
import wechart from "@/assets/img/wechart.svg"
import phone_fill from "@/assets/img/phone_fill.svg"
import search from "@/assets/img/search.svg"
import CN from "@/assets/img/cn.svg"
import EN from "@/assets/img/en.svg"
import RU from "@/assets/img/ru.svg"
import logo from "@/assets/img/logo.svg"
import passport from "@/assets/img/passport.jpg"

export default {
    data(){
        return {
            phone: phone,
            fly: fly,
            wechart: wechart,
            phone_fill: phone_fill,
            search: search,
            logo: logo,
            passport: passport,
            country: [
                {
                    img: CN,
                    name: 'CN'
                },
                {
                    img: EN,
                    name: 'EN'
                },
                {
                    img: RU,
                    name: 'RU'
                }
            ],
            countryShow: true,
            currentCountry: 0
        }
    },
    methods:{
        handerCountry(){
            this.countryShow = false
        },
        selectCountry(i){
            this.countryShow = true
            this.currentCountry = i
        }
    }
}
</script>
<style>
/* 动画 */
@keyframes borderShow {
    from {
        border-bottom: 2px solid transparent;
    }
    to {
        border-bottom: 2px solid #E4002B;
    }
}
.header{
    border-bottom: 1px solid #E5E5E5;
    width: 100%;
    position: fixed;
    z-index: 10;
    background-color: #fff;
}
/* first-header */
.header .first-header-warp{
    background-color: #F2F2F2;
}
.header .first-header{
    display: flex;  
    justify-content: flex-end;
    flex-direction: row;
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 5.5rem;
    padding-right: 5.5rem;
}
.header .first-header ul{
    display:  inline-flex;
    align-items: center;
    list-style: none;
    margin-right: 40px;
    height: 40px;
}
.header .first-header ul:nth-child(5){
    margin-right: 0;
}
.header .first-header ul:last-child{
    margin-right: 0;
    margin-left: 30px;
}
.header .first-header ul li{
    cursor: pointer;
    font-size: 12px;
    line-height: 1.4rem;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1.5px;
    color: #4D4D4D;
}
.header .first-header ul li:hover{
    color: #E4002b;
}
.header .first-header ul li img{
    display: inline-block;
    margin-right: 15px;
    width: 24px;
    height: 24px;
    height: 100%;
    vertical-align: middle;
}
.header .first-header ul li span{
    display: inline-block;
    height: 100%;
    vertical-align: middle;
}
.header .first-header ul li .search{
    width: 12px;
    margin: 0;
}
.header .first-header ul .country img{
    width: 12px;
    margin-right: 5px;
}
.header .first-header ul .country{
    margin-right: 20px;
}
.header .first-header ul .country.current{
    margin-right: 0;
}
.header .first-header ul .country:last-child{
    margin-right: 0;
}
.header .first-header ul .current::after{
    content: '';
    display: inline-block;
    width: 6px;
    height: 6px;
    margin-left: 6px;
    transform: translateY(-50%) rotate(135deg);
    border-right: 1px solid #4D4D4D;
    border-top: 1px solid #4D4D4D;
}
/* second-header */
.header .second-header{
    margin-left: auto;
    margin-right: auto;
    max-width: 1280px;
    padding: 0 5.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
}
.header .second-header .nav{
    display: flex;
    list-style: none;
    flex-direction: row;    
    justify-content: flex-end;
    height: 80px;
}
.header .second-header .nav .item{
    display: flex;
    align-items: center;
    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;
    padding: 28px 20px;
    font-size: 15px;
    line-height: 20px;
    color: #000;
    cursor: pointer;
}
.header .second-header .nav .item:hover{
    border-bottom: 2px solid #E4002B;
    animation: borderShow 1s;
}
.header .second-header .nav .item:last-child{
    padding-right: 0;
}
.header .second-header li .header-info{
    max-height: inherit;
    position: absolute;
    left: 0;
    z-index: 3;
    top: 120px;
    padding-top: 30px;
    padding-bottom: 30px;
    height: 300px;
    min-width: 100%;
    background: #F2F2F2;
    display: none;
}
.header .second-header li:hover .header-info{
    display: block;
}
.header .second-header li .header-info-inline{
    margin-left: auto;
    margin-right: auto;
    max-width: 1280px;
    padding: 0 5.5rem;
    display: flex;
    flex-direction: row;
    cursor: default;
}
.header .second-header li .header-info-inline ul{
    list-style: none;
    margin-left: 80px;
}
.header .second-header li .header-info-inline ul li:first-child{
    font-size: 15px;
    line-height: 20px;
    font-weight: 700;
}
.header .second-header li .header-info-inline ul li{
    font-size: 15px;
    line-height: 20px;
    padding: 5px 0;
}
.header .second-header li:hove .header-info{
    display: block;
}
.header .second-header .header-info img{
    width: 270px;
    height: 170px;
    margin-right: 20px;
}
.header .second-header .header-info p{
    font-size: 15px;
    line-height: 20px;
    font-weight: 700;
    width: 150px;
}
.header .second-header .header-info .astons {
    float: right;
}
.header .second-header .header-info .astons li:first-child{
    font-weight: inherit;
}
.header .second-header .header-info .estate li:first-child{
    font-weight: inherit;
}
</style>