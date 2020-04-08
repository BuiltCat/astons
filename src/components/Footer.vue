<template>
    <div class="footer"> 
        <div class="fisrt-footer">
            <div class="fisrt-footer-nav">
                <ul class="list">
                    <li class="title">永居移民项目</li>
                    <li>爱尔兰</li>
                    <li>葡萄牙</li>
                    <li>希腊</li>
                    <li>塞浦路斯</li>
                    <li>马耳他</li>
                    <li>摩纳哥</li>
                    <li>西班牙</li>
                    <li>泽西</li>
                    <li>英国</li>
                </ul>
                <ul class="list">
                    <li class="title">护照投资移民项目</li>
                    <li style="font-weight: 700;color:#000">欧盟投资移民</li>
                    <li>英国</li>
                    <li>塞浦路斯</li>
                    <li>马耳他</li>
                    <li>黑山共和国</li>
                    <li>保加利亚</li>

                    <li class="subtitle">加勒比海投资移民</li>
                    <li>多米尼克</li>
                    <li>圣卢西亚</li>
                    <li>安提瓜和巴布达</li>
                    <li>圣克里斯多福及尼维斯</li>
                    <li>格林纳达</li>

                    <li class="subtitle">Other countries</li>
                    <li>土耳其</li>
                    <li>瓦努阿图</li>
                </ul>
                <ul class="list">
                    <li class="title">地产信息</li>
                    <li>英国</li>
                    <li>塞浦路斯</li>
                    <li>多米尼克</li>
                    <li>土耳其</li>
                    <li>希腊</li>
                    <li>圣克里斯多福及尼维斯</li>
                </ul>
                <ul class="list">
                    <li class="title">新闻</li>
                </ul>
                <ul class="list">
                    <li class="title">有关阿斯顿</li>
                    <li>全球地区办公室</li>
                    <li>招才</li>
                    <li>与我们合作</li>
                </ul>
                <ul class="list">
                    <li class="title">联系我们</li>
                    <li>与我们合作</li>
                </ul>
            </div>
            <div></div>
            <div></div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.footer{
    background-color: #F2F2F2;
}
/* .fisrt-footer */
.footer .fisrt-footer{
    flex-flow: row wrap;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    max-width: 1280px;
    padding-top: 4rem;
    padding-top: 6rem;
    padding-bottom: 3rem;
    padding-right: 5.5rem;
    padding-left: 5.5rem;
    
}
.footer .fisrt-footer .fisrt-footer-nav{
    display: flex;
    justify-content: flex-start;
    align-items: normal;
    padding-bottom: 20px;
    border-bottom: 1px solid #d9d9d9;

}
.footer .fisrt-footer .list{
    display: flex;
    flex-direction: column;
    list-style: none;
    border-right: 1px solid #d9d9d9;
    width: 16.6666666667%;
    padding-right: 1.5rem;
    padding-left: 1.5rem;
    font-size: 15px;
    line-height: 20px;
}
.footer .fisrt-footer .list:last-child{
    border-right: none;
}
.footer .fisrt-footer .list li{
    margin-bottom: 10px;
    color: #4d4d4d;
}
.footer .fisrt-footer .list .title{
    font-size: 14px;
    margin-bottom: 20px;
    font-weight: 700;
    color: #000;
}
.footer .fisrt-footer .list .subtitle{
    margin: 10px 0;
    padding-top: 30px;
    font-weight: 700;
    color: #000;
}

</style>