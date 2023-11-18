import { wait } from '@testing-library/user-event/dist/utils'
import React, { useState } from 'react'

function NewsItems() {
const [articles,setAritcles]=useState({article:[
    {
        "source": {
        "id": null,
        "name": "Hipertextual"
        },
        "author": "Luis Miranda",
        "title": "Samsung llevaría los juegos AAA a sus próximos Galaxy de la mano de AMD",
        "description": "Samsung podría seguir los pasos de Apple y llevar juegos de consola a sus smartphones. La surcoreana habría cerrado un acuerdo con Qualcomm y AMD para desarrollar una versión de FidelityFX Super Resolution (FSR), la tecnología de escalado que se emplea en tít…",
        "url": "http://hipertextual.com/2023/11/samsung-juegos-galaxy-amd-fsr-qualcomm",
        "urlToImage": "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2023/11/samsung-galaxy-s23-juegos.jpg?fit=1920%2C1080&quality=50&strip=all&ssl=1",
        "publishedAt": "2023-11-04T02:00:00Z",
        "content": "Samsung podría seguir los pasos de Apple y llevar juegos de consola a sus smartphones. La surcoreana habría cerrado un acuerdo con Qualcomm y AMD para desarrollar una versión de FidelityFX Super Reso… [+3627 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "heise online"
        },
        "author": "Nico Ernst, Christine Bruns",
        "title": "Canons Motorisierung und die KI-Persona Mia – die Fotonews der Woche 44/2023",
        "description": "Eine neue Klasse von Hybridobjektiven kommt wie aus dem Nichts, und eine fast volldigitale Persönlichkeit ist mehr als ein Experiment.",
        "url": "https://www.heise.de/news/Canons-Motorisierung-und-die-KI-Persona-Mia-die-Fotonews-der-Woche-44-2023-9353210.html",
        "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/3/2/8/6/1/9/Canon-Hybrid-mit-Motor-12deda298624bd0b.png",
        "publishedAt": "2023-11-04T06:30:00Z",
        "content": "Inhaltsverzeichnis\r\nErster! Nein, hier ist nicht das Layout unserer Seite kaputt, und es wird nicht das Heise-Forum von circa 1998 dargestellt vielmehr kann Canon nun wirklich einmal mit Fug und Rech… [+7490 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Gizmodo.jp"
        },
        "author": "お買いものサポーター",
        "title": "【Amazonタイムセール祭り】のマストバイ15選！3つのメディア読者が｢最も購入したもの｣をカテゴリ別に紹介",
        "description": "Amazon（アマゾン）で開催中の「Amazon Fashion×HOMEタイムセール祭り」は、2023年11月5日23時59分までと、まもなく終了です。買い忘れがないか今一度チェックを。\n\n今回は、メディアジーンの3つのWebメディア（ギズモード、ライフハッカー、ルーミー）の読者がセール期間中に最も購入したセールアイテムを、商品カテゴリ別に紹介します。 ぜひチェックしてみてください！",
        "url": "https://www.gizmodo.jp/2023/11/amazon-timesale-fes-2023-1104-1.html",
        "urlToImage": "https://media.loom-app.com/gizmodo/dist/images/2023/11/04/GIZ1.jpg?w=1280&h=630&f=jpg",
        "publishedAt": "2023-11-04T04:45:00Z",
        "content": "AmazonAmazon Fashion×HOME20231152359\r\n3Web\r\n202311411\r\n10,00010\r\nKindle200Kindle Unlimited299\r\nApple\r\nApple AirPods Pro2- MagSafeUSB-C\r\nAnker\r\nAnker Eufy () Security SmartTrack Card ()\r\nUGREEN\r\nUGREE… [+444 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Gizmodo.jp"
        },
        "author": "ヤマダユウス型",
        "title": "M3 MacBook Proは右側にType-C端子がありません！ ありません！",
        "description": "先日発表されたM3 MacBook Proは右側にUSB-C端子がない。USB-Cがたくさん必要な人は要注意。",
        "url": "https://www.gizmodo.jp/2023/11/m3-macbook-pro-no-usb-c-terminal-right-side.html",
        "urlToImage": "https://media.loom-app.com/gizmodo/dist/images/2023/11/02/231102macbookprom3_01.jpg?w=1280&h=630&f=jpg",
        "publishedAt": "2023-11-04T03:00:00Z",
        "content": "14\r\nM3MacBook ProiMac MacBook Pro1416M3M3 ProM3 Max109\r\nM3MacBook Pro\r\nUSB Type-C\r\nImage: Apple\r\nM3SDHDMI\r\nImage: Apple\r\nM3 ProM3 MaxM34USB Type-C!?\r\nImage: Apple\r\nType-C2M3Type-C\r\n14Type-C\r\nM1ProMax… [+290 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Techdirt"
        },
        "author": "Tim Cushing",
        "title": "Court: You Can’t Add A Lie To An Already-Executed Warrant And Expect Everything To Be Constitutional",
        "description": "This is not a fun case. It’s instructional, but it involves some pretty noxious criminal behavior. And that’s how these things work, usually. People who aren’t facing criminal charges rarely need to challenge warrants. They never need to challenge the evidenc…",
        "url": "https://www.techdirt.com/2023/11/03/court-you-cant-add-a-lie-to-an-already-executed-warrant-and-expect-everything-to-be-constitutional/",
        "urlToImage": "https://www.techdirt.com/wp-content/themes/techdirt/assets/images/td-rect-logo-white.png",
        "publishedAt": "2023-11-04T02:39:00Z",
        "content": "from the can't-beat-the-5th-by-ignoring-the-4th dept\r\nThis is not a fun case. It’s instructional, but it involves some pretty noxious criminal behavior. And that’s how these things work, usually. Peo… [+11592 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Caschys Blog"
        },
        "author": "André Westphal",
        "title": "Google Suche und Lens: Mehr Hilfe bei mathematischen Problemen",
        "description": "Google spendiert sowohl der Suche als auch Google Lens Aktualisierungen, die dabei helfen können, komplexere, mathematische Aufgaben zu lösen. Statt euer Problem umständlich als Text zu beschreiben, könnt ihr z. B. Gleichungen erkennen lassen und direkt das E…",
        "url": "https://stadt-bremerhaven.de/google-suche-und-lens-mehr-hilfe-bei-mathematischen-problemen/",
        "urlToImage": "https://stadt-bremerhaven.de/wp-content/uploads/2023/10/Google-Suche-Science.jpg",
        "publishedAt": "2023-11-04T07:00:44Z",
        "content": "Google spendiert sowohl der Suche als auch Google Lens Aktualisierungen, die dabei helfen können, komplexere, mathematische Aufgaben zu lösen. Statt euer Problem umständlich als Text zu beschreiben, … [+1708 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Srad.jp"
        },
        "author": "headless",
        "title": "Mozilla CEO曰く、Firefoxユーザーが求める検索エンジンはGoogle",
        "description": "Firefox は 2014 年から 2017 年まで既定の検索エンジンをそれまでの Google から Yahoo に変更しているが、Mozilla CEO のミッチェル・ベイカー氏によるとこの「失敗」により Firefox ユーザーが望む検索エンジンは Google であることが判明したという\n(Ars Technica の記事)。\n\nこの発言は米政府と各州が Google を訴えたアンチトラスト訴訟で、証人として出廷したベイカー氏が述べたもの。Google は同社の検索エンジンが他社よりも優れているため大き…",
        "url": "https://it.srad.jp/story/23/11/04/0436246/",
        "urlToImage": "https://srad.jp/static/topics/firefox_64.png",
        "publishedAt": "2023-11-04T04:57:00Z",
        "content": "Firefox 2014 2017 Google Yahoo Mozilla CEO Firefox Google \r\n(Ars Technica ) Google Google Firefox (PDF)\r\n2017 ComputerWorld Yahoo Google 1 3 7,500 Firefox 5 2014 Firefox \r\nYahoo Yahoo Google 5 Yahoo … [+71 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Ifanr.com"
        },
        "author": "张明悦",
        "title": "早报｜苹果取消 Apple Watch 应用兼容 Android 计划 / 蔚来宣布裁员 10% /《流浪地球 3》定档|未来周报",
        "description": "·马斯克：SpaceX 旗下「星链」已实现现金流收支平衡\n·微软或取消员工免费 XGPU 福利\n·亚马逊被指控通过秘密定价算法获利 10 亿美元#欢迎关注爱范儿官方微信公众号：爱范儿（微信号：ifanr），更多精彩内容第一时间为您奉上。\n爱范儿 |\n原文链接 ·\n查看评论 ·\n新浪微博",
        "url": "https://www.ifanr.com/1567088",
        "urlToImage": "https://s3.ifanr.com/images/ep/uploads/231103/f0cf87da-d3b8-4dba-a93e-a0a1f107cc02.jpeg",
        "publishedAt": "2023-11-04T00:30:24Z",
        "content": "Windows 11 23H2 Copilot AI \r\niOS 17.1.1 \r\nMacRumors iOS 17.1.1 \r\n iOS 17.2 Beta 1 Wi-Fi iPhone \r\n iPhone 15 iOS 17.1.1 \r\nMacRumors \r\nSpaceX \r\nSpaceX CEO \r\n 2019 5000 4200 \r\n X \r\nSpaceX 1500 2021 Spac… [+1256 chars]"
        }
],
loading : false,
page:1,
totalPages : ""
}
);

    // const fetchData = async ()=>{
    //     const url="https://newsapi.org/v2/everything?q=tesla&from=2023-10-04&sortBy=publishedAt&apiKey=8d1c7ff32fac4e5d8a20d32842cd9054&pagesize=4";
    //     const rawData= await fetch(url); 
    //     const data=await rawData.json();
    //     setAritcles({article:data.articles,loading:false,page:1,totalPages:data.totalPages
    //         });
    //     console.log(articles)
    // }
    // fetchData();


    const handleprevious=()=>{
        console.log("previous cliicked")

    }

    const handlenext=async()=>{
        console.log("next cliicked")
        // if(Math.ceil(totalPages/4)<page+1){

        // }else{
        //     const url=`https://newsapi.org/v2/everything?q=tesla&from=2023-10-04&sortBy=publishedAt&apiKey=8d1c7ff32fac4e5d8a20d32842cd9054&pagesize=4&page={page+1}`;
        // const rawData= await fetch(url); 
        // const data=await rawData.json();
        // setAritcles({article:data.articles,loading:false,page:1,totalPages:data.totalPages
        //     });
        // }

    }

    return (
        <div className='container my-3' >
            <h2 className='fw-bold'>Top headlines</h2>
            <div className='row'>
            {articles.article.map((element) => {
                return <div class="card col-*-*" key={element.url} style={{ width: "18rem" }} >
                    <img src={element.urlToImage} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{!element.title?"":element.title.slice(0,45)}</h5>
                        <p class="card-text">{!element.description?"":element.description.slice(0,85)}</p>
                        <a href={element.url} target='_blank' class="btn btn-primary">Read more</a>
                    </div>
                </div>
            })
            }
            </div>
            <div className='container d-flex justify-content-between'>
            <button type="button" class="btn btn-dark" onClick={handleprevious}>&larr; previous</button>
            <button type="button" class="btn btn-dark" onClick={handlenext}>next &rarr;</button>
            </div>
        </div>
    )
}

export default NewsItems
