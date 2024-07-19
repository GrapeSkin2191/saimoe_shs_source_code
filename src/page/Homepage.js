import React from "react";
import Article from "../component/Article";
import LoginWindow from "../component/usersystem/LoginWindow";

function Homepage() {
    return (
        <Article>
            <h1>ようこそ！在上萌投下你神圣的一票吧！</h1>
            <p>米娜桑早上好中午好下午好晚上好！这里是上海中学和风社第三届上萌的投票通道。为了方便统计工作并优化大家的体验，我们第一次推出了这个投票网站，你可以在这个网站上进行提名、投票、查看战况等操作。</p>
            <h2>面向新生们 - 上萌是什么？</h2>
            <p>上萌，全称上海市上海中学最受欢迎动漫人物赏，是shsers为心仪二次元角色加油鼓劲的擂台。在这里，应援呐喊的声音铺天盖地，如果想让自己的应援角色也占有一席之地的话，就速速参与上中萌战！
                萌战的形式，不仅限于线上、线下投票，画佬们的应援画等形式，简直是勃勃生机万物竞发的境界，犹在眼前。短短三年，这里竟至于摇身一变而成为狂欢夜呼声最高的人气活动之一了吗！</p>
            <p>今年是第三届上中萌战，在吸取了前两届投票、统票以及赛制方面的各种经验，本次萌战的赛制与规则均有改动。不过，公平性加强，趣味性不变的上中萌战，一定会成为厨力绽放的更佳舞台。</p>
            <p>上中萌战，开创了高中萌战的先河，各路学校先先后后也开始举办类似活动。你校竟成了开山鼻祖。纯正的参赛体验，值得每位shsers踊跃参加。</p>
            <h2>上萌怎么参加呀？</h2>
            <p>上萌的投票有线上票与线下票两种类型。线下票以班级为单位自主组织收集后，送至年级的和风社社员处。线上票则通过年级群以问卷方式统计。另外，本次上萌开放了真爱票的特殊票制，旨在鼓励画佬们用纸笔为角色们打call。一份真爱票的权值也会比普通票高出不少。而最终的萌王及燃王统计结果将在狂欢夜当天宣布，请期待！</p>
            <h2>其它注意事项</h2>
            <p>在上萌中历届萌王暂时没有再次参与萌战的资格。他们有：初音未来、薇尔莉特、黑羽快斗、一方通行。</p>
            <p>为了保证公平性，萌战实行一人一票制，请您先登录，登录后即可参与投票！</p>
            <LoginWindow/>
        </Article>
    )
}

export default Homepage;