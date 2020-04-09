<template>
    <div class="index main">
        <el-carousel>
            <el-carousel-item v-for="item in carousel" :key="item.title">
                <div class="content">
                    <img class="bg" :src="item.img" alt />
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.text }}</p>
                    <Button :name="item.enter"></Button>
                </div>
            </el-carousel-item>
        </el-carousel>
        <div class="step">
            <h1>获取可替换居民和/或公民身份的四个步骤</h1>
            <p>由我们行业领先的专业人士管理整个过程,一站式服务帮组您获取居民和公明身份。从始自终，我们将为您提供量身定制、高效率的服务，包括移民申请，尽职调查及协助您做出最佳投资决策。</p>
            <ul>
                <li>
                    <img :src="one" alt />
                    <h3>我们帮助您选择最适合的项目</h3>
                    <p>我们的移民顾问将会评估您的个人情况，并且协助您选择合适且符合申请条件标准的投资选项以确保您可成功申请 我们会评估您的个人迁址目标，并就最合适的居民身份和公民身份项目提供详细深入的建议。我们会为您免费提供与可信赖的合格移民顾问的初步咨询，可在我司驻伦敦、利马索尔、莫斯科、迪拜、北京或利雅得的办公室进行咨询，也可通过电话，以最方便您的方式为准。</p>
                </li>
                <li>
                    <img :src="two" alt />
                    <h3>我们为您准备最吸引人和最安全的投资选择</h3>
                    <p>无论您决定投资房产还是选择其他领域进行投资，我们都将执行预筛选检查以确保您的投资安全。我们会为您安排房产参观，在您选择的目的地产生的所有旅行费用均由我司承担。我们也会与开发商协商房产价格以确保带给您最佳收益。</p>
                </li>
                <li>
                    <img :src="three" alt />
                    <h3>我们收集所有需要的文件并提交您的申请</h3>
                    <p>我们的移民专家将尽职尽责地准备您的申请，并将其提交给各移民局。我们会监管整个流程并随时向您更新情况。我们遵守所有必要的法规和许可，并且在没有任何中间人的情况下工作。</p>
                </li>
                <li>
                    <img :src="four" alt />
                    <h3>数月后您将收到您的居民卡或护照</h3>
                    <p>尽享作为全球公民的益处：迁址到您选择的国家；在超过150个国家免签旅游；税收优化获益；为您家庭的未来保证经济和政治稳定性；使您的子女在欧洲接受一流的教育。</p>
                </li>
            </ul>
            <div>
                <Button name="APLLY NOW"></Button>
            </div>
        </div>
        <div class="about">
            <div class="about-wrap">
                <div class="about-inline">
                    <div class="info">
                        <h2>客户选择我们的原因</h2>
                        <ul class="list">
                            <li>
                                <h4>数十年的移民经验</h4>
                                <p>在投资、移民和迁址领域超过30年的经验。在2018年，超过1200名客户在我们的帮助下成功获得了可替换的居民或公民身份。</p>
                            </li>
                            <li>
                                <h4>始终主动的客户服务</h4>
                                <p>我们7天24小时待命，并作出迅速回应。快速处理和有效管理所有文书。我们确保我们的客户能获得最有效和最高效的客户服务。</p>
                            </li>
                            <li>
                                <h4>授权的政府代理</h4>
                                <p>我们始终谨记最高诚信工作并以客户的最大利益为宗旨。我们受业务运营所在国当局的监管。</p>
                            </li>
                            <li>
                                <h4>一家国际运营的英国公司</h4>
                                <p>我们在伦敦、莫斯科、迪拜、利雅得、中国和塞浦路斯设有国际办事处，确保我们的客户可以得到最有效客户服务。</p>
                            </li>
                        </ul>
                        <ul class="list">
                            <li>
                                <img :src="adItem1" alt />
                                <p>2019 最佳投资移民律所大奖</p>
                            </li>
                            <li>
                                <img :src="adItem2" alt />
                                <p>瓦努阿图特许批准持牌的专业移民代理机构</p>
                            </li>
                            <li>
                                <img :src="adItem3" alt />
                                <p>2019政府合法移民证书</p>
                            </li>
                            <li>
                                <img :src="adItem4" alt />
                                <p>英国政府ombudsman物业管理会员資格</p>
                            </li>
                        </ul>
                    </div>
                    <div class="img">
                        <img :src="thumbAbout" alt />
                    </div>
                </div>
            </div>
        </div>
        <div class="programs">
            <div class="programs-header">
                <div @click="switchHander(1)" :class="switchProgarm?'active':''">公民身份项目</div>
                <div @click="switchHander(2)" :class="switchProgarm?'':'active'">Residency programs</div>
            </div>
            <ul v-show="switchProgarm" class="programs-list">
                <li v-for="(item,i) in progarmOne" :key="i">
                    <img :src="item.img" alt />
                    <a>{{item.title}}</a>
                    <ul>
                        <li>{{item.one}}</li>
                        <li>
                            <span>最低投资额</span> -
                            <span>{{item.two}}</span>
                        </li>
                        <li>{{item.three}}</li>
                    </ul>
                </li>
            </ul>
            <ul v-show="!switchProgarm" class="programs-list">
                <li v-for="(item,i) in progarmTwo" :key="i">
                    <img :src="item.img" alt />
                    <a>{{item.title}}</a>
                    <ul>
                        <li>{{item.one}}</li>
                        <li>-</li>
                        <li>{{item.three}}</li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="estate">
            <div class="estate-inline">
                <h2>房产投资</h2>
                <div class="desc">
                    <div>
                        <p>访问Astons仔细审查过的房地产投资组合，它们符合投资移民项目的要求，也满足生活和投资机遇。</p>
                        <p>Astons提供了加勒比地区和欧洲大量获批的房地产开发项目，包括别墅、酒店和度假村，可自由选择产权，全部或部分所有。我们多样化的投资组合涵盖了各层次的价格范围，从低成本的房地产到高价值、豪华的开发项目。在展示开发区域给我们的客户之前，我们对所有开发项目进行了全面的尽职调查，因此我们可以保证对所有的投资选择都是完全充满信心的。我们还有一个记录英国居住用和投资机会的地产信息综合数据库。</p>
                    </div>
                    <div>
                        <p>我们享有优先进入高端住宅和房地产市场的选择特权，甚至可以进入未向市场公开的区域。作为购置代理商，我们提供商业用和住宅房地产领域广泛的服务。</p>
                        <p>由于有大量的投资选择可以提供，Astons为您精心挑选最合适的房地产项目，并根据您的要求直接为您安排考查。我们与开发商联系，为客户协商最优惠的价格。我们确保完全遵守所有法律程序，担保完全遵守所有相关法规要求。</p>
                    </div>
                </div>
                <Button name="全部房产"></Button>
                <div class="card-list">
                    <div class="card-list-item" v-for="(item,i) in estate" :key="i">
                        <div class="card-list-item-warp">
                            <div class="bg">
                                <img :src="item.img" />
                            </div>
                            <div>
                                <div>{{ item.title }}</div>
                                <div>{{ item.des }}</div>
                                <div>
                                    <img :src="cypus" alt />
                                    {{ item.local }}
                                </div>
                                <div>
                                    <img class="icon" :src="time" alt />六个月
                                </div>
                                <h3>{{ item.price }}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="introduce">
            <div class="introduce-wrap">
                <div class="introduce-inline">
                    <div class="info">
                        <div class="text">
                            <span>有关阿斯顿</span>
                            <h2>全球居民&公民身份解决方案</h2>
                            <p>Astons是一家致力于提供英国、欧盟和加勒比海居民和公民身份的投资移民公司。</p>
                            <p>在为私人客户提供法律事务的整体管理，为投资者的移民方案提供建议，英国移民，税务咨询，私人教育，资产结构化和投资服务等领域，Astons拥有超过30年的经验。Astons 作为高净值人士及其家人信任的顾问，也是全球主要律师、家庭援助办事处、银行和投资公司值得信赖的顾问。</p>
                            <p>我们拥有丰富的经验和熟练的多语种移民团队以及公民和居民身份顾问，确保提供真正国际化和个性化的服务，并以绝对的自由裁量权、速度和诚信执行。作为一个有强大国际关系的公司，Astons在全球范围内均设有办事处，包括伦敦、莫斯科、利马索尔、迪拜、北京和利雅得。</p>
                            <p></p>
                        </div>
                        <Button name="请联系我"></Button>
                    </div>
                    <div class="img">
                        <img :src="ASTON" alt />
                    </div>
                </div>
            </div>
        </div>
        <div class="reason">
            <div class="reason-warp">
                <h2>考虑双重公民身份的原因</h2>
                <ul>
                    <li>
                        <img :src="earth" alt />在全球范围内出差或旅游，包括欧盟和英国，无需不断地申请签证。
                    </li>
                    <li>
                        <img :src="safety" alt />在几个月内举家迁址到欧洲或世界范围的其他地方。
                    </li>
                    <li>
                        <img :src="invest" alt />通过优惠的税收政策守护您的财产
                    </li>
                    <li>
                        <img :src="family" alt />投资房地产和其他资产，在投资期结束后可以选择释放投资。
                    </li>
                    <li>
                        <img :src="passport" alt />另一个被称为家的地方。稳定的经济和政治环境增强您的财政稳定性。
                    </li>
                    <li>
                        <img :src="invest2" alt />使您的子女在世界上最具盛誉的学校和大学里接受教育。
                    </li>
                </ul>
            </div>
        </div>
        <div class="contact">
            <div class="contact-warp">
                <div class="contact-header">
                    <h2>联系我们</h2>
                    <div>
                        <Button name="全球地区办公室"></Button>
                    </div>
                </div>
                <div class="tabs">
                    <ul class="selection">
                        <li :class="switchTab === 1?'active':''" @click="handerTab(1)">英国</li>
                        <li :class="switchTab === 2?'active':''" @click="handerTab(2)">俄罗斯</li>
                        <li :class="switchTab === 3?'active':''" @click="handerTab(3)">沙迦</li>
                        <li :class="switchTab === 4?'active':''" @click="handerTab(4)">中国</li>
                        <li :class="switchTab === 5?'active':''" @click="handerTab(5)">塞浦路斯</li>
                        <li :class="switchTab === 6?'active':''" @click="handerTab(6)">沙特阿拉伯</li>
                    </ul>
                    <ul class="content">
                        <li v-show="switchTab === 1">
                            <div class="detail">
                                <div>
                                    <img :src="A_LD" alt />
                                    <div>
                                        <h4>英国</h4>
                                        <p>伦敦</p>
                                    </div>
                                </div>
                                <div class="detail-info">
                                    <div>
                                        <p>地址</p>
                                        <p>1 Albemarle street, Mayfair, London, United Kingdom, W1S 4HA</p>
                                    </div>
                                    <div>
                                        <p>电话</p>
                                        <p>+44 207 292 2977</p>
                                    </div>
                                    <div>
                                        <p>电子邮箱</p>
                                        <p>info@astons.com</p>
                                    </div>
                                </div>
                                <Button name="请联系我"></Button>
                            </div>
                            <baidu-map class="map" :zoom="16" center="伦敦"></baidu-map>
                        </li>
                        <li v-show="switchTab === 2">
                            <div class="detail">
                                <div>
                                    <img :src="A_ELS" alt />
                                    <div>
                                        <h4>俄罗斯</h4>
                                        <p>莫斯科</p>
                                    </div>
                                </div>
                                <div class="detail-info">
                                    <div>
                                        <p>地址</p>
                                        <p>White Gardens Business Center, Lesnaya street, 7, 11 floor, Moscow, Russia,125047</p>
                                    </div>
                                    <div>
                                        <p>电话</p>
                                        <p>+7 499 709 81 93</p>
                                    </div>
                                    <div>
                                        <p>电子邮箱</p>
                                        <p>info@astons.com</p>
                                    </div>
                                </div>
                                <Button name="请联系我"></Button>
                            </div>
                            <baidu-map class="map" :zoom="16" center="莫斯科"></baidu-map>
                        </li>
                        <li v-show="switchTab === 3">
                            <div class="detail">
                                <div>
                                    <img :src="A_SJ" alt />
                                    <div>
                                        <h4>沙迦</h4>
                                        <p>迪拜</p>
                                    </div>
                                </div>
                                <div class="detail-info">
                                    <div>
                                        <p>地址</p>
                                        <p>SAIF Suite Y1-088, P.O. Box 120795 Sharjah – U.A.E</p>
                                    </div>
                                    <div>
                                        <p>电话</p>
                                        <p>+44 207 292 2977</p>
                                    </div>
                                    <div>
                                        <p>电子邮箱</p>
                                        <p>info@astons.com</p>
                                    </div>
                                </div>
                                <Button name="请联系我"></Button>
                            </div>
                            <baidu-map class="map" :zoom="16" center="迪拜"></baidu-map>
                        </li>
                        <li v-show="switchTab === 4">
                            <div class="detail">
                                <div>
                                    <img :src="A_ZG" alt />
                                    <div>
                                        <h4>中国</h4>
                                        <p>伦敦</p>
                                    </div>
                                </div>
                                <div class="detail-info">
                                    <div>
                                        <p>地址</p>
                                        <p>Beijing Fortune Plaza,Dongsanhuan Zhong Road, Chaoyang District, Beijing, Post code:100020</p>
                                    </div>
                                    <div>
                                        <p>电话</p>
                                        <p>400 100 2231</p>
                                    </div>
                                    <div>
                                        <p>电子邮箱</p>
                                        <p>info@astons.com</p>
                                    </div>
                                </div>
                                <Button name="请联系我"></Button>
                            </div>
                            <baidu-map class="map" :zoom="16" center="北京"></baidu-map>
                        </li>
                        <li v-show="switchTab === 5">
                            <div class="detail">
                                <div>
                                    <img :src="A_SPLS" alt />
                                    <div>
                                        <h4>塞浦路斯</h4>
                                        <p>利马索尔</p>
                                    </div>
                                </div>
                                <div class="detail-info">
                                    <div>
                                        <p>地址</p>
                                        <p>“Zavos Seasons Complex”, Office no.12, Ayios Tychonas, Limassol, 4532, Cyprus</p>
                                    </div>
                                    <div>
                                        <p>电话</p>
                                        <p>+35 725 123 282</p>
                                    </div>
                                    <div>
                                        <p>电子邮箱</p>
                                        <p>info@astons.com</p>
                                    </div>
                                </div>
                                <Button name="请联系我"></Button>
                            </div>
                            <baidu-map class="map" :zoom="16" center="利马索尔"></baidu-map>
                        </li>
                        <li v-show="switchTab === 6">
                            <div class="detail">
                                <div>
                                    <img :src="A_STALB" alt />
                                    <div>
                                        <h4>沙特阿拉伯</h4>
                                        <p>利雅得</p>
                                    </div>
                                </div>
                                <div class="detail-info">
                                    <div>
                                        <p>地址</p>
                                        <p>Office no: 9, Building no: 24, Al Mashreq Street, King Abdul Aziz Road, Al Sulaimaniyah, Riyadh, Saudi Arabia</p>
                                    </div>
                                    <div>
                                        <p>电话</p>
                                        <p>+44 207 292 2977</p>
                                    </div>
                                    <div>
                                        <p>电子邮箱</p>
                                        <p>info@astons.com</p>
                                    </div>
                                </div>
                                <Button name="请联系我"></Button>
                            </div>
                            <baidu-map class="map" :zoom="16" center="利雅得"></baidu-map>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import hero_1 from "@/assets/img/hero-1.jpg";
import hero_2 from "@/assets/img/hero-2.webp";
import hero_3 from "@/assets/img/hero-3.webp";
import hero_4 from "@/assets/img/hero-4.webp";
import hero_5 from "@/assets/img/hero-5.webp";
import hero_6 from "@/assets/img/hero-6.webp";

import one from "@/assets/img/one.svg";
import two from "@/assets/img/two.svg";
import three from "@/assets/img/three.svg";
import four from "@/assets/img/four.svg";

import adItem1 from "@/assets/img/Apr19231-2019_AI_Corproate_Immigration_and_Relocation_Winners_Logo.png";
import adItem2 from "@/assets/img/Group_164.png";
import adItem3 from "@/assets/img/International_Marketing_Agent_2019.png";
import adItem4 from "@/assets/img/property.png";

import thumbAbout from "@/assets/img/thumb_about.jpg";

import YG from "@/assets/img/country/thumb_uk_x3.jpg";
import SPLS from "@/assets/img/country/thumb_cyprus_x3.jpg";
import MQT from "@/assets/img/country/thumb_Feature_Image_Malta_x1.jpg";
import BJLY from "@/assets/img/country/thumb_Feature_Image_Bulgaria_x3.jpg";
import HSGHG from "@/assets/img/country/thumb_Feature_Image_Montenegro_x3.jpg";
import TEQ from "@/assets/img/country/thumb_Feature_Image_Turkey_x3.jpg";
import DMNK from "@/assets/img/country/thumb_Feature_Image_Dominica_x1.jpg";
import GLND from "@/assets/img/country/thumb_Feature_Image_Grenada_x1.jpg";
import SLXY from "@/assets/img/country/thumb_Feature_Image_ST_Lucia_x3.jpg";
import ATGHBBD from "@/assets/img/country/thumb_Feature_Image_Antigua_x3.jpg";
import SKLSDFHNWS from "@/assets/img/country/thumb_Feature_Image_ST_Kitts_and_Nevis_x3.jpg";
import WLAT from "@/assets/img/country/thumb_Feature_Image_Vanuatu_x3.jpg";

import PTY from "@/assets/img/country/thumb_Title_Image_Portugal_desktop_x3.jpg";
import XL from "@/assets/img/country/thumb_Title_Image_Greece_desktop_x3.jpg";
import MET from "@/assets/img/country/thumb_Title_Image_Malta_x3.jpg";
import AEL from "@/assets/img/country/thumb_Title_Image_Ireland_desktop_x3.jpg";

import estate1 from "@/assets/img/estate1.jpg";
import estate2 from "@/assets/img/estate2.jpg";
import estate3 from "@/assets/img/estate3.jpg";

import cypus from "@/assets/img/Cyprus_icon.svg";
import time from "@/assets/img/time.svg";

import ASTON from "@/assets/img/main_ASTONS-O06.jpg";

import earth from "@/assets/img/icon-earth.svg";
import safety from "@/assets/img/icon-safety.svg";
import invest from "@/assets/img/icon-investment.svg";
import family from "@/assets/img/icon-family.svg";
import passport from "@/assets/img/icon-double-passport.svg";
import invest2 from "@/assets/img/Icons_investment2.svg";

import A_LD from "@/assets/img/thumb_768.jpg";
import A_ELS from "@/assets/img/thumb_Moscow_x3.jpg";
import A_SJ from "@/assets/img/thumb_s1200.jpg";
import A_ZG from "@/assets/img/thumb_beijing_x3.jpg";
import A_SPLS from "@/assets/img/thumb_Limassol_x3.jpg";
import A_STALB from "@/assets/img/thumb_Ryiadh_x3.jpg";

import Button from "../components/Botton";

export default {
    data() {
        return {
            A_LD: A_LD,
            A_ELS: A_ELS,
            A_SJ: A_SJ,
            A_ZG: A_ZG,
            A_SPLS: A_SPLS,
            A_STALB: A_STALB,
            one: one,
            two: two,
            three: three,
            four: four,
            adItem1: adItem1,
            adItem2: adItem2,
            adItem3: adItem3,
            adItem4: adItem4,
            thumbAbout: thumbAbout,
            cypus: cypus,
            time: time,
            ASTON: ASTON,
            earth: earth,
            safety: safety,
            invest: invest,
            family: family,
            passport: passport,
            invest2: invest2,
            switchProgarm: true,
            switchTab: 1,
            carousel: [
                {
                    img: hero_1,
                    title: "全球移民和迁址供应商获奖者",
                    text:
                        "英国，欧盟和加勒比地区投资订制投资居民身份和公民身份解决方案",
                    enter: "APPLY TODAY"
                },
                {
                    img: hero_2,
                    title:
                        "赛普路斯投资计划—您和您的家庭在欧盟生活，工作和学习完全自由的直接道路",
                    text:
                        "阿斯顿（Astons）提供一个借由购买房地产于欧盟生活并于180内获得第二本护照的塞浦路斯公民身份的一站式服务。",
                    enter: "详情请点入"
                },
                {
                    img: hero_3,
                    title: "加勒比海护照移民",
                    text: "富豪最向往的护照直接免签130多个国家",
                    enter: "详情请点入"
                },
                {
                    img: hero_4,
                    title: "塞浦路斯护照项目",
                    text: "仅仅180天即可快速的享有欧盟身份",
                    enter: "详情请点入"
                },
                {
                    img: hero_5,
                    title: "英国投资移民签证专家",
                    text: "快速移居英国的黄金桥梁",
                    enter: "详情请点入"
                },
                {
                    img: hero_6,
                    title: "投资移民项目",
                    text:
                        "家庭永远是最重要的，现在就给他们的未来做最好的保障。",
                    enter: "详情请点入"
                }
            ],
            progarmOne: [
                {
                    img: YG,
                    title: "英国",
                    one: "4 个月登陆- 2年拿绿卡",
                    two: "2 百万英镑",
                    three: "免签163个国家"
                },
                {
                    img: SPLS,
                    title: "塞浦路斯",
                    one: "180天拿护照",
                    two: "2百万欧元 (房产投资)",
                    three: "免签171个国家"
                },
                {
                    img: MQT,
                    title: "马耳他",
                    one: "14 个月拿护照",
                    two: "115万欧元",
                    three: "免签182个国家"
                },
                {
                    img: BJLY,
                    title: "保加利亚",
                    one: "2年内取得公民身份",
                    two: "51.2万欧元",
                    three: "免签证旅行至169个国家"
                },
                {
                    img: HSGHG,
                    title: "黑山共和国",
                    one: "3个月内取得公民身份",
                    two: "35万欧元",
                    three: "免签证旅行至122个国家"
                },
                {
                    img: TEQ,
                    title: "土耳其",
                    one: "2个月拿护照",
                    two: "25万美元",
                    three: "免签证旅行至115个国家"
                },
                {
                    img: DMNK,
                    title: "多米尼克",
                    one: "2-3个月拿护照",
                    two: "10万美元",
                    three: "免签127 个国家"
                },
                {
                    img: GLND,
                    title: "格林纳达投资公民",
                    one: "3-4个月拿护照",
                    two: "15万美元",
                    three: "免签131 个国家"
                },
                {
                    img: SLXY,
                    title: "圣卢西亚",
                    one: "3-4个月拿护照",
                    two: "10万美元",
                    three: "免签证旅行至132个国家"
                },
                {
                    img: ATGHBBD,
                    title: "安提瓜和巴布达",
                    one: "3（4）个月拿护照",
                    two: " 10万美元",
                    three: "免签证旅行至140个国家"
                },
                {
                    img: SKLSDFHNWS,
                    title: "圣克里斯多福和尼维斯",
                    one: "46-60天拿护照",
                    two: "15万美元",
                    three: "免签证旅行至152个国家"
                },
                {
                    img: WLAT,
                    title: "瓦努阿图",
                    one: "1个月拿护照",
                    two: "13万美元",
                    three: "免签证旅行至125个国家"
                },
                {
                    img: TEQ,
                    title: "土耳其",
                    one: "2个月拿护照",
                    two: "25万美元",
                    three: "免签证旅行至115个国家"
                },
                {
                    img: WLAT,
                    title: "瓦努阿图",
                    one: "1个月拿护照",
                    two: "13万美元",
                    three: "免签证旅行至125个国家"
                }
            ],
            progarmTwo: [
                {
                    img: PTY,
                    title: "葡萄牙",
                    one: "90 天内取得欧盟居留权",
                    two: "",
                    three: "申根国家旅游免签证"
                },
                {
                    img: XL,
                    title: "希腊",
                    one: "60 天内取得欧盟居留权",
                    two: "",
                    three: "申根国家旅游免签证"
                },
                {
                    img: MET,
                    title: "马尔他",
                    one: "120 天内取得欧盟居留权",
                    two: "",
                    three: "申根国家旅游免签证"
                },
                {
                    img: AEL,
                    title: "爱尔兰",
                    one: "两个月内取得欧盟居留权",
                    two: "",
                    three: "-"
                }
            ],
            estate: [
                {
                    img: estate1,
                    title: "利马索尔的1，2或3房的海滨公寓",
                    des: "利马索尔的1，2或3房的海滨公寓",
                    local: "塞浦路斯利马索尔",
                    price: "$1,338,000"
                },
                {
                    img: estate2,
                    title: "公园大厦",
                    des: "面向利马索尔海岸线的利马索尔高级俱乐部住宅开发案",
                    local: "塞浦路斯利马索尔",
                    price: "$4,899,042"
                },
                {
                    img: estate3,
                    title: "贝斯特韦斯特码头酒店式公寓",
                    des: "拉卡纳码头旁的主要开发项目具有潜在的投资回报率",
                    local: "塞浦路斯利拉卡纳",
                    price: "$340,000"
                }
            ]
        };
    },
    methods: {
        switchHander(e) {
            if (e === 1) {
                this.switchProgarm = true;
            } else {
                this.switchProgarm = false;
            }
        },
        handerTab(e){
            this.switchTab = e
        }
    },
    components: {
        Button: Button
    }
};
</script>

<style>
/* carousel */
.index .el-carousel {
    height: calc(100vh - 121px);
}
.index .el-carousel__container {
    height: 100%;
}
.index .el-carousel__item {
    height: calc(100vh - 121px);
}
.index .el-carousel__item .bg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    z-index: -1;
}
.index .el-carousel__item .content {
    margin-left: auto;
    margin-right: auto;
    max-width: 1280px;
    padding: 0 5.5rem;
    justify-content: space-between;
    padding-top: 6rem;
    padding-bottom: 6rem;
    color: #fff;
}
.index .el-carousel__item .content h3 {
    font-size: 3rem;
    line-height: 3.6rem;
    max-width: 77rem;
    margin-bottom: 2rem;
}
.index .el-carousel__item .content p {
    max-width: 770px;
    font-size: 2rem;
    line-height: 2.6rem;
    font-weight: bold;
    letter-spacing: 1px;
}
.index .el-carousel .content .as-btn {
    margin-top: 20px;
}
/* step */
.index .step {
    padding-top: 8rem;
    padding-bottom: 7.5rem;
    padding-right: 5.5rem;
    padding-left: 5.5rem;
    max-width: 1280px;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
}
.index .step h1 {
    font-size: 3.6rem;
    line-height: 4.4rem;
    margin-bottom: 1.5rem;
}
.index .step p {
    padding-right: 1.5rem;
    padding-left: 1.5rem;
    font-size: 1.8rem;
    line-height: 2.7rem;
}
.index .step ul {
    display: flex;
    justify-content: flex-start;
    align-items: normal;
    flex-direction: row;
    flex-wrap: wrap;
    margin-right: -1.5rem;
    margin-left: -1.5rem;
    margin-top: 2rem;
}
.index .step ul li {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 2rem;
    margin-bottom: 4rem;
    padding-right: 1.5rem;
    padding-left: 1.5rem;
    width: 25%;
}
.index .step ul li img {
    margin-bottom: 1rem;
    margin-right: 2rem;
}
.index .step ul li h3 {
    margin-bottom: 1rem;
    font-size: 2rem;
    line-height: 2.6rem;
}
.index .step ul li p {
    margin: 0;
    padding: 0;
    font-size: 1.5rem;
    line-height: 2rem;
}
/* about */
.index .about {
    background: #f2f2f2;
    padding-top: 8rem;
    padding-bottom: 8rem;
}
.index .about .about-wrap {
    position: relative;
}
.index .about .about-inline {
    max-width: 1280px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 5.5rem;
    padding-left: 5.5rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    z-index: 2;
}
.index .about .info {
    width: 48%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    min-height: 540px;
    align-items: flex-start;
}
.index .about .info h2 {
    font-size: 3.6rem;
    line-height: 4.4rem;
    margin-bottom: 1.5rem;
}
.index .about .info .list {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-flow: row wrap;
    list-style: none;
    margin-right: -1.5rem;
    margin-left: -1.5rem;
}
.index .about .info .list li {
    width: 50%;
    margin-top: 5rem;
    padding-right: 1.5rem;
    padding-left: 1.5rem;
}
.index .about .info .list h4 {
    color: #e4002b;
    margin-bottom: 1rem;
    font-size: 2rem;
    line-height: 2.6rem;
}
.index .about .img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    max-width: 100%;
}
.index .about .img img {
    position: absolute;
    top: 0;
    width: 50%;
    left: 51%;
    max-width: 100%;
    object-fit: cover;
    height: 100%;
}
/* program */
.index .programs {
    padding-right: 5.5rem;
    padding-left: 5.5rem;
    max-width: 1280px;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    padding-top: 8rem;
    padding-bottom: 2rem;
}
.index .programs .programs-header {
    margin-right: -1.5rem;
    margin-left: -1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-flow: row wrap;
    margin-bottom: 6rem;
}
.index .programs .programs-header div {
    font-size: 3.6rem;
    line-height: 4.4rem;
    padding-right: 1.5rem;
    padding-left: 1.5rem;
    width: 33.3333333333%;
    font-weight: bold;
    margin-bottom: -1px;
    cursor: pointer;
    color: #b2b2b2;
    transition: color 0.2s;
}
.index .programs .programs-header::after {
    content: "";
    display: block;
    width: calc(100% - 3rem);
    margin: auto;
    height: 1px;
    background-color: #e5e5e5;
}
.index .programs .programs-header div.active {
    color: #000;
}
.index .programs .programs-header div.active::after {
    content: "";
    position: relative;
    display: block;
    width: 100%;
    margin-top: 1rem;
    height: 2px;
    background-color: #e4002b;
    overflow: hidden;
}
.index .programs .programs-list {
    margin-right: -1.5rem;
    margin-left: -1.5rem;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-flow: row wrap;
    display: flex;
    list-style: none;
}
.index .programs .programs-list li {
    margin-bottom: 6rem;
    width: 33.3333333333%;
    margin-bottom: 6rem;
    padding-right: 1.5rem;
    padding-left: 1.5rem;
}
.index .programs .programs-list li img {
    height: 200px;
    display: block;
    width: 100%;
    margin-bottom: 1.5rem;
    position: relative;
    object-fit: cover;
    cursor: pointer;
}
.index .programs .programs-list li img:hover {
    opacity: 0.7;
}
.index .programs .programs-list li a {
    font-size: 2.7rem;
    line-height: 3.3rem;
    font-weight: bold;
    display: block;
    color: #000;
    margin-bottom: 1rem;
    max-height: 78px;
    overflow: hidden;
    text-decoration: none;
    transition: all 0.2s;
    cursor: pointer;
}
.index .programs .programs-list li a:hover {
    color: #e4002b;
}
.index .programs .programs-list li ul {
    list-style: none;
}
.index .programs .programs-list li ul li {
    width: 100%;
    margin: 0;
    padding: 0;
}
.index .programs .programs-list li ul li:nth-child(2) span {
    font-weight: bold;
}
.index .programs .programs-list li ul li:nth-child(2) span:last-child {
    color: #e4002b;
}
/* estate */
.index .estate {
    background: #f2f2f2;
}
.index .estate-inline {
    padding-top: 8rem;
    padding-bottom: 5rem;
    padding-right: 5.5rem;
    padding-left: 5.5rem;
    max-width: 1280px;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    position: relative;
}
.index .estate h2 {
    font-size: 3.6rem;
    line-height: 4.4rem;
    width: 50%;
    margin-bottom: 3rem;
}
.index .estate .as-btn {
    width: auto;
    position: absolute;
    right: 5.5rem;
    top: 8rem;
    color: #000;
    border: 1px solid #d9d9d9;
    background-color: transparent;
    transition: all 0.2s;
}
.index .estate .as-btn:hover {
    color: #e4002b;
    border: 1px solid #b2b2b2;
    background-color: transparent;
}
.index .estate .desc {
    margin-right: -1.5rem;
    margin-left: -1.5rem;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-flow: row wrap;
}
.index .estate .desc div {
    padding-right: 1.5rem;
    padding-left: 1.5rem;
    width: 50%;
}
.index .estate .desc div p {
    font-size: 1.8rem;
    line-height: 2.7rem;
    margin-bottom: 2rem;
}
.index .estate .card-list {
    margin-right: -1.5rem;
    margin-left: -1.5rem;
    display: flex;
    justify-content: flex-start;
    align-items: normal;
    flex-flow: row wrap;
    margin-top: 3rem;
}
.index .estate .card-list-item {
    padding-right: 1.5rem;
    padding-left: 1.5rem;
    width: 33.3333333333%;
    margin-bottom: 3rem;
}
.index .estate .card-list-item-warp {
    cursor: pointer;
    transition: all 0.2s;
}
.index .estate .card-list-item-warp:hover {
    box-shadow: 0px 1.5rem 3rem rgba(0, 0, 0, 0.2);
    text-decoration: none;
    color: #333;
}
.index .estate .card-list-item-warp .bg {
    height: 23rem;
}
.index .estate .card-list-item-warp img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.index .estate .card-list-item-warp div:last-child {
    padding: 2rem;
    display: block;
    background-color: #fff;
    color: #333;
    max-height: 49rem;
}
.index .estate .card-list-item-warp div:last-child div:first-child {
    font-weight: bold;
}
.index .estate .card-list-item-warp div:last-child div img {
    width: 2rem;
    margin-right: 1rem;
    display: inline-block;
}
.index .estate .card-list-item-warp div:last-child div:nth-child(4) {
    display: flex;
    margin: 1.5rem 0;
}
.index .estate .card-list-item-warp div:last-child div:nth-child(2) {
    max-height: 5.5rem;
    margin: 1rem 0 2rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #e5e5e5;
    text-overflow: ellipsis;
    overflow: hidden;
}
.index .estate .card-list-item-warp div:last-child h3 {
    font-size: 2.7rem;
    line-height: 3.3rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #333;
}
/* introduce */
.index .introduce {
    padding-top: 8rem;
    padding-bottom: 8rem;
}
.index .introduce .introduce-wrap {
    position: relative;
}
.index .introduce .introduce-inline {
    padding-right: 5.5rem;
    padding-left: 5.5rem;
    max-width: 1280px;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    display: flex;
    flex-direction: row;
    z-index: 2;
}
.index .introduce .introduce-wrap .info {
    width: 48%;
    min-height: 540px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    align-items: flex-start;
}
.index .introduce .introduce-wrap .info .text {
    margin-bottom: 3.5rem;
}
.index .introduce .introduce-wrap .info span {
    font-size: 1.2rem;
    line-height: 1.4rem;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.15rem;
    display: block;
    margin: 2rem 0;
    color: #333;
    margin-top: 0;
}
.index .introduce .introduce-wrap .info h2 {
    font-size: 3.6rem;
    line-height: 4.4rem;
    margin: 0 0 1.5rem 0;
}
.index .introduce .introduce-wrap .info p {
    margin-bottom: 2rem;
    font-size: 1.8rem;
    line-height: 2.7rem;
}
.index .introduce .introduce-wrap .as-btn {
    width: auto;
    margin: 0;
    padding: 0 5rem;
}
.index .introduce .introduce-wrap .img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    display: flex;
    flex-shrink: 0;
}
.index .introduce .introduce-wrap .img img {
    left: 51%;
    position: absolute;
    top: 0;
    width: 50%;
    max-width: 100%;
    object-fit: cover;
    height: 100%;
}
/* reason */
.index .reason {
    background: #f2f2f2;
}
.index .reason .reason-warp {
    padding-top: 8rem;
    padding-bottom: 4rem;
    padding-right: 5.5rem;
    padding-left: 5.5rem;
    max-width: 1280px;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
}
.index .reason .reason-warp h2 {
    margin-bottom: 2.5rem;
    font-size: 3.6rem;
    line-height: 4.4rem;
}
.index .reason .reason-warp ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    list-style: none;
}
.index .reason .reason-warp ul li {
    display: flex;
    width: 33%;
    padding-right: 130px;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 3rem;
    margin-top: 2rem;
}
.index .reason .reason-warp ul li img {
    margin-right: 2rem;
    max-height: 8rem;
    max-width: 8rem;
    margin-bottom: 2rem;
}
/* contact */
.index .contact {
    background: #f2f2f2;
}
.index .contact .contact-warp {
    padding-top: 8rem;
    padding-bottom: 4rem;
    padding-right: 5.5rem;
    padding-left: 5.5rem;
    max-width: 1280px;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
}
.index .contact .contact-header {
    display: flex;
    justify-content: space-between;
}
.index .contact .contact-header h2 {
    margin-bottom: 3.5rem;
    font-size: 3.6rem;
    line-height: 4.4rem;
}
.index .contact .contact-header .as-btn {
    color: #000;
    border: 1px solid #d9d9d9;
    background-color: transparent;
}
.index .contact .contact-header .as-btn:hover {
    color: #e4002b;
    border: 1px solid #b2b2b2;
    background-color: transparent;
}
.index .contact .tabs {
    order: 2;
    display: flex;
    flex-direction: column;
    padding-right: 1.5rem;
    padding-left: 1.5rem;
    width: 100%;
}
.index .contact .tabs .selection {
    display: flex;
    background-color: #fff;
    list-style: none;
}
.index .contact .tabs .selection li {
    flex: 1;
    margin-bottom: -1px;
    font-size: 1.2rem;
    line-height: 1.4rem;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.15rem;
    padding: 1.5rem 1rem;
    text-align: center;
    display: block;
    color: #b2b2b2;
    text-decoration: none;
    border-top: 2px solid transparent;
    transition: all .2s;
}
.index .contact .tabs .selection li.active{
    color: #000;
    border-top: 2px solid #E4002B;
}
.index .contact .tabs .selection li:hover{
    color: #E4002B;
}
.index .contact .content {
    display: flex;
    flex: 1;
    list-style: none;
}
.index .contact .content li {
    display: flex;
    flex-direction: column;
    flex: 1;
    background: #fff;
    max-width: 100%;
}
.index .contact .content li .detail {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 4.5rem 0 3rem 0;
    margin: 0 3rem;
    order: 1;
    border-bottom: none;
}
.index .contact .content li .detail div:first-child {
    display: flex;
    margin-bottom: 5rem;
}
.index .contact .content li .detail div:first-child img {
    width: 80px;
    height: 80px;
    border-radius: 50% 50%;
    margin-right: 2rem;
}
.index .contact .content li .detail div:first-child div {
    margin-top: 0.5rem;
    display: flex;
    flex-direction: column;
}
.index .contact .content li .detail .detail-info {
    width: 440px;
}
.index .contact .content li .detail .detail-info div {
    display: flex;
    color: #333;
    margin-bottom: 1rem;
}
.index .contact .content li .detail .detail-info p:first-child {
    font-weight: bold;
    min-width: 100px;
}
.index .contact .content li .detail .as-btn {
    width: 32rem;
    margin-top: 0;
}
.index .contact .content li .map {
    flex: 1;
    order: 2;
    width: 100%;
    height: 300px;
    border: 1px solid #fff;
}
</style>