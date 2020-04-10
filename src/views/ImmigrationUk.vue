<template>
    <div class="main immuk">
        <div class="banner">
            <div class="banner-inline">
                <img :src="ukBg" alt="">
                <h2>英国签证与移民</h2>
                <p>
                    英国移民法的所有方面。
                    <br>
                    英国入境许可申请，签证延期，定居和归化入籍。
                    <br>
                    个人和企业的迁移机会。
                </p>
                <Button name="请联系我"></Button>
            </div>
        </div>
        <Breadctumbs current="UK Immigration"></Breadctumbs>
        <div class="content">
            <div class="content-inline">
                <div class="content-left">
                    <h2>英国签证与移民</h2>
                    <br>
                    <p>我们可以在创新、创业和投资签证、工作许可、ILR、担保许可申请、英国公民身份、配偶签证、上诉和拒签等领域提供高水平的专业意见。我们帮助个人和企业迁移至英国，为最复杂的移民案件提供可靠的帮助。</p>
                    <br>
                    <p>欧盟公民在英国的自由出入预计将于2021年1月31日结束。漫长的脱欧谈判仍在继续，如果所有欧盟公民希望合法留在英国，他们必须保护自己在英国的居住权。无论您需要申请预居留、定居身份还是永久定居，我们都为您提供英国脱欧后的移民流程全程协助。</p>
                    <br>
                    <h2>英国签证和移民服务：</h2>
                    <br>
                    <div>
                        <div class="collapse" @click="handerCollapse(i)" v-for="(item,i) in collapse" :key="item.title">
                            <h4>{{item.title}}</h4>
                            <div class="collapse-content" :style="current === i ? {maxHeight: '352px'} :{maxHeight: 0} " >
                                <div>
                                    <p v-for="(i,k) in item.des" :key="k">{{ i }}</p>
                                </div>
                                <div>
                                    <p>我们期待为您服务，请联系我们得到即时咨询</p>
                                    <Button name="请联系我"></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="content-input">
                        <div class="content-input-head">
                            <div>要求回电</div>
                            <div>如果您需要专家的顾问指导请联系我们</div>
                        </div>
                        <div class="content-input-content">
                            <div>
                                <input placeholder="姓名" />
                                <input placeholder="+7 912 345-67-89" />
                                <input placeholder="电子邮件" />
                            </div>
                            <div>
                                <textarea placeholder="留言"></textarea>
                                <Button name="请联系我"></Button>
                            </div>
                            <div>
                                在阿斯顿，我们始终提供全面的服务，根据您的实际情况来指导每一个环节。我们确保您的申请会得到专业的代理, Immigration UK，以避免任何延误，并确保它符合所有的规定。 <span>Immigration UK</span> (阿斯顿英国移民服务)是由律师监管局(SRA)授权注册的英国移民律师事务所提供，在英国移民事务的各个方面为投资者、企业家和企业客户提供帮助。
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content-mid"></div>
                <div ref='cRight'  class="content-right">
                    <div class="content-right-inline" :style="cStyle">
                        <Button name="请联系我"></Button>
                        <h3>英国移民服务</h3>
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
                            <li>英国国籍</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ukBg from '@/assets/img/uk_bg.jpg'


import Button from "../components/Botton"
import Breadctumbs from "../components/Breadcrumbs"
export default {
    data(){
        return {
            ukBg: ukBg,
            cStyle: {
                position: 'static',
                transform: 'none'
            },
            current: -1,
            collapse: [{
                title: 'Tier 1 投资移民 — Tier 1 Investor',
                des: [
                    'Tier 1(投资者)签证是为愿意在英国投资200万英镑以上的富人设计的，是获得英国居住权的最有效途径。',
                    '首次的签证有效期为3年4个月，如果符合所有条件，可以申请延长2年。',
                    '在符合申请条件的情况下，2-5年内可以申请无限期居留(ILR)， 5-6年内可以申请公民身份。可根据投资额选择加速结算方案——两年后1000万英镑可获得ILR，三年后500万英镑可获得ILR。'
                ]
            },{
                title: 'Ti创业签证 — Start-up visa',
                des: [
                    '创业签证类别针对的是首次在英国创业的新企业家，对初始资本投资没有要求。',
                    '成功的申请者将获得2年的签证。在此之后，他们会进入创新者的行列，可能延长他们在英国的停留时间，进一步发展他们在英国的业务。在创业路线下没有签证延期。',
                    '要获得创业者签证，申请人必须首先获得被内政部批准的认证机构的认可，确认他们的业务是创新的、可行的和可扩展的。'
                ]
            },{
                title: '创新者签证 — Innovator Visa',
                des: [
                    '“创新者签证计划”针对的是有经验的，希望在英国建立或经营一家企业的创业者。在这种方式下，申请人需要证明一个创新的，可行的和可发展的商业想法，并且是由内政部批准的认可机构背书。除了一些例外，申请人应该至少有5万英镑的资金来投资他们的企业。',
                    '最初的签证有效期为3年。3年后，创新者可以申请延长3年的居留时间，也可以在英国永久定居。',
                ]
            },{
                title: '首席代表签证 — Sole Representative',
                des: [
                    '海外代表签证(也称为首席代表签证),可以授予个人为总部不在英国的公司高管，且该公司正计划在英国建立代表处,该人被任命为唯一的英国公司代表。这种类型的签证不需要投资，但是需要满足一系列的要求。',
                    '海外商务代表的签证初始可获得3年的入境许可，并可再延长2年。在英国居住5年后，申请人可以申请在英国永久定居。',
                ]
            },{
                title: 'Tier 2（普通）签证 — Tier 2 (General) visa',
                des: [
                    '为了申请Tier 2通用签证，申请人的雇主必须持有担保执照，这使得英国公司可以雇佣非欧盟国家公民。',
                    'Tier 2 (普通)签证是技术工种来英国就业的主要签证途径。申请人需要获得有执照的担保人提供的工作机会，担保人将确认他们能够胜任被聘用的工作，以及是否有资格获得签证。',
                    '初始签证的有效期最长为3年。随后可以申请延期，再延长2年。移民将有资格在5年后申请无限期居留，并在首次进入英国后6年后获得公民身份，前提是所有要求都得到满足。'
                ]
            },{
                title: 'Tier 2（公司内部调动) — Tier 2 (Intra-company Transfer)',
                des: [
                    'Tier 2公司内部转移签证(ICT)适用于国外的雇员，想要调动到他们公司的英国分公司工作。申请人必须有至少12个月在公司工作的经验，他们的年薪超过73,900英镑，才能在英国工作。',
                    '还有一个选择是，作为专业职位的毕业培训生，转到该公司的英国分公司。申请人必须是应届毕业生，并在海外雇主有至少三个月的工作经验。',
                ]
            },{
                title: 'Tier 2 雇主担保许可 — Tier 2 Sponsorship licence',
                des: [
                    '希望从欧洲经济区(EEA)以外聘用高技能移民工人的英国雇主，必须获得英国内政部颁发的担保许可证。',
                    '担保许可的有效期为四年，如公司希望继续担保任何非欧共体国民，可获延长。雇主持有担保牌照，便可向合资格的工人发出担保证明书，这是雇员申请Tier 2工作签证时的强制性规定。',
                ]
            },{
                title: '欧盟落户机制 — EU Settlement Scheme',
                des: [
                    '在英国离开欧盟后保护你在英国的居住权。对于居住在英国的欧盟和瑞士公民以及他们的家人来说，有一个特定的欧盟解决方案，在英国退欧之后，让申请人有机会保护他们在英国的居住权。',
                    '如果已经在英国居住了5年或更长时间，申请人将被授予“定居身份”(无限期居留)。如果他们在英国居住不到5年，他们将被授予“预定居身份”。这给了申请人在5年居留期限之前的有限界定，之后他们可以申请无限期留在英国。',
                ]
            },{
                title: '伴侣和家庭签证 — Partner and Family Visas',
                des: [
                    '这类签证适用于那些伴侣或配偶是英国公民或定居英国的申请人，他们打算留在英国与配偶一起居住。',
                    '那些居住在欧洲经济区以外，并拥有真正的婚姻或民事伴侣关系的申请人，有资格获得配偶签证或英国伴侣签证的居留许可。',
                    '欧盟、欧洲经济区或瑞士公民可以与家人一起申请欧盟定居计划，在2021年6月30日后继续居住在英国。在成功申请后，他们将有权获得定居或预定居身份。'
                ]
            },{
                title: '无限期居留 — Indefinite Leave to Remain',
                des: [
                    '被批准无限期留在英国(ILR)的申请人，也被称为移民，可以留在英国，在英国生活、学习和工作，而不受停留时间限制。此外，他们将有资格在ILR获得批准的12个月内申请英国国籍，获批将取决于是否满足获得国籍的要求',
                    '对于那些在英国连续居住一段时间并符合签证类别资格的人，英国政府将给予他们无限期居留的许可。',
                ]
            },{
                title: '英国国籍 — British Citizenship',
                des: [
                    '如果申请人已经移居英国一段时间，根据他们的情况，通过入籍申请公民身份是可能的。最受欢迎的入籍方式是获得无限期居留后，继续连续居留12个月。根据申请是否基于与英国公民的婚姻或民事关系，入籍成为英国公民的要求可能有所不同。以合伙人身份提出申请的人士，可获豁免持有ILR连续十二个月。',
                    '只有当申请人证明他们符合某些法律要求，且内政大臣批准入籍申请时，才能做出授予公民身份的决定。',
                ]
            }]
            
        }
    },
    mounted(){
        window.addEventListener('scroll', this.handerRight, true)
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.handerRight, true)
    },
    methods:{
        handerRight(e){
            this.$nextTick(function(){
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                const offsetTop = this.$refs.cRight.offsetTop
                const StyleStatic = {
                    position: 'static',
                    transform: 'none'
                }
                const StyleFlex = {
                    
                }
                if(scrollTop - offsetTop > 780){
                    this.cStyle = {
                        position: 'static',
                        transform: 'translateY(764px)'
                    }
                }else if(scrollTop - offsetTop > 0){
                    this.cStyle = {
                        position: 'fixed',
                        transform: 'translateY(123px)'
                    }
                }else{
                     this.cStyle = {
                        position: 'static',
                        transform: 'none'
                    }
                }
            })
        },
        handerCollapse(e){
            if(this.current === e){
                this.current = -1
            }else{
                this.current = e
            }
        }
    },
    components:{
        'Button': Button,
        'Breadctumbs': Breadctumbs
    }
}
</script>

<style>
.immuk .banner{
    height: calc(100vh - 121px);
    padding-top: 6rem;
    padding-bottom: 6rem;
    position: relative;
}
.immuk .banner-inline{
    max-width: 1280px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 5.5rem;
    padding-left: 5.5rem;
    width: 100%;
    min-height: 100%;
    z-index: 1;
    color: #fff;
    justify-content: space-between;
}
.immuk .banner img{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
    z-index: -1;
}
.immuk .banner h2{
    max-width: 77rem;
    margin-bottom: 2rem;
    font-size: 3rem;
    line-height: 3.6rem;
    text-align: left;
    text-transform: uppercase;
    letter-spacing: 1px;
    
}
.immuk .banner p{
    max-width: 770px;
    font-size: 2rem;
    line-height: 2.6rem;
    font-weight: bold;
    letter-spacing: 1px;
}
.immuk .banner .as-btn{
    margin-top: 3rem;
    width: auto;
}
.immuk .content{
    padding-right: 5.5rem;
    padding-left: 5.5rem;
    max-width: 1280px;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
}
.immuk .content .content-inline{
    display: flex;
    justify-content: flex-start;
    align-items: normal;
    flex-flow: row wrap;
    padding-top: 2.5rem;
    padding-bottom: 8rem;
}
.immuk .content .content-left{
    width: 66.6666666667%;
    font-size: 1.8rem;
    line-height: 2.7rem;
}

.immuk .content .content-left .content-input-head{
    margin-right: -1.5rem;
    margin-left: -1.5rem;
    display: flex;
    justify-content: flex-start;
    align-items: normal;
    flex-flow: row wrap;
}
.immuk .content .content-left .content-input-head div{
    padding-right: 1.5rem;
    padding-left: 1.5rem;
    width: 50%;
    display: flex;
    flex-direction: column;
}
.immuk .content .content-left .content-input-head div:first-child{
    font-size: 3.6rem;
    line-height: 4.4rem;
    margin-bottom: 2rem;
    font-weight: bold;
}
.immuk .content .content-left .content-input-head div:last-child{
    margin-bottom: 3rem;
    font-size: 1.5rem;
    line-height: 2rem;
}
.immuk .content .content-left .content-input-content{
    margin-right: -1.5rem;
    margin-left: -1.5rem;
    display: flex;
    justify-content: flex-start;
    align-items: normal;
    flex-flow: row wrap;
}
.immuk .content .content-left .content-input-content div{
    width: 50%;
    line-height: 2.7rem;
    padding-right: 1.5rem;
    padding-left: 1.5rem;
}
.immuk .content .content-left .content-input-content div input{
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    width: 100%;
    margin-bottom: 1rem;
    outline: none;
    padding: 0 1rem;
    height: 4rem;
    font-size: 1.6rem;
    background: #fff;
}
.immuk .content .content-left .content-input-content div textarea{
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    width: 100%;
    outline: none;
    padding: 1rem;
    font-size: 1.6rem;
    line-height: 1.15;
    height: 9rem;
    resize: none;
    background: #fff;
}
.immuk .content .content-left .content-input-content div .as-btn{
    margin-bottom: 2rem;
    font-size: 1.2rem;
    height: 4rem;
    line-height: 4rem;
    width: 100%;
}
.immuk .content .content-left .content-input-content div:last-child{
    font-size: 1.2rem;
    line-height: 1.6rem;
    color: #B2B2B2;
    width: 100%;
}
.immuk .content .content-left .content-input-content div:last-child span{
    font-size: 1.5rem;
    line-height: 2rem;
    text-decoration: none;
    transition: all 0.2s;
    color: #E4002B;
}
.immuk .content .content-mid{
    width: 8.3333333333%;
    position: relative;
    display: block;
}
.immuk .content .content-mid::after{
    content: '';
    display: block;
    width: 1px;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: #E5E5E5;
}
.immuk .content .content-right{
    position: relative;
    overflow: visible;
    box-sizing: border-box;
    min-height: 1px;
    padding-right: 1.5rem;
    padding-left: 1.5rem;
    display: block;
    width: 25%;
}
.immuk .content .content-right .content-right-inline{
    padding-top: 0px;
    padding-bottom: 1px;
    top: 0px;
}
.immuk .content .content-right .content-right-inline h3{
    font-size: 2rem;
    line-height: 2.6rem;
    font-weight: bold;
    display: block;
    margin-top: 6rem;
    margin-bottom: 1rem;
    color: #000;
}
.immuk .content .content-right .content-right-inline ul{
    padding: 1rem 0;
    border-top: 1px solid #E5E5E5;
    list-style: none;
}
.immuk .content .content-right .content-right-inline ul li:first-child{
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: bold;
    color: #000;
    padding-left: 0;
}
.immuk .content .content-right .content-right-inline ul li{
    margin: 1rem 0;
    padding-left: 2rem;
}
.immuk .content .content-left .collapse{
    margin-bottom: 1rem;
    position: relative;
    background-color: #F2F2F2;
    color: #333;
}
.immuk .content .content-left .collapse::after{
    content: '';
    display: block;
    width: 16px;
    height: 8px;
    position: absolute;
    top: 3.5rem;
    right: 2rem;
    background-image: url(~@/assets/img/accordion-arrow.svg);
    background-repeat: no-repeat;
    z-index: 1;
}

.immuk .content .content-left .collapse h4{
    position: relative;
    padding: 2.5rem 2rem;
    z-index: 2;
    font-size: 2rem;
    line-height: 2.6rem;
    font-weight: bold;
}
.immuk .content .content-left .collapse .collapse-content{
    overflow: hidden;
    transition: max-height 250ms ease 0s;
    padding: 0 2rem;
}
.immuk .content .content-left .collapse .collapse-content div:first-child{
    padding: 1.5rem 0;
    border-top: 1px solid rgba(0,0,0,0.1);
}
.immuk .content .content-left .collapse .collapse-content p{
    font-size: 1.8rem;
    line-height: 2.7rem;
    padding: 0.9rem 0;
}
.immuk .content .content-left .collapse .collapse-content div:last-child{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;padding: 2.5rem 0;
    border-top: 1px solid rgba(0,0,0,0.1);
}
.immuk .content .content-left .collapse .collapse-content div:last-child p{
    width: 30rem;
    
    padding: 0;
}
.immuk .content .content-left .collapse .collapse-content div:last-child .as-btn{
    width: 28rem;
    margin-top: 0;
}
</style>