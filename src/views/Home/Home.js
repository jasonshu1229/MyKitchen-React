import React, { Component } from 'react'
import { Carousel } from 'antd-mobile'
import axios from 'axios'
import homeCss from './Home.module.scss'
import HomeHeader from './HomeHeader/HomeHeader'
import HomeTopNav from './HomeTopNav/HomeTopNav'
import HomeBroadcast from './HomeBroadcast/HomeBroadcast'
import LinkImg from './HomeLinkImg/HomeLinkImg'
import TempList from './HomeTempList/HomeTempList'
import GoodsSwiper from './goodsSwiper/goodsSwiper'
import GroupList from './HomeGroupList/HomeGroupList'
import GoodsList from './HomeGoodsList/HomeGoodsList'

class Home extends Component {
    state = { 
        // 轮播数据
        SCU:true,
        carouselList:[],
        topNavList1:[],
        topNavList2:[],
        titleImg: "",
        link_img1: "",
        link_img2: "",
        link_img3: "",
        link_img4: "",
        link_img5: "",
        link_img6: "",
        link_img7: "",
        link_img8: "",
        link_img9: "",
        link_img10: "",
        link_img11: "",
        link_img12: "",
        link_img13: "",
        temp_list1: {},
        temp_list2: {},
        imgView1: {},
        imgView2: {},
        labelView1: [],
        labelView2: [],
        broadlist: [],
        priceList1: [],
        priceList2: [],
        groupList3: [],
        goodsList1: [],
        goodsList2: [],
        goodsList3: [],
        goodsList4: [],
        goodsList5: [],
        goodsList6: [],
        goodsList7: [],
        goodsList8: [],
        goodsList9: [],
        goodsList10: [],
        goodsSwiper1: [],
        goodsSwiper2: [],
     }
    //  shouldComponentUpdate(prev,next){
    //      console.log(prev)
    //      return true
    //  }

     componentDidMount(){
        axios({
            url:"http://api9.wochu.cn/client/v1/app/layoutamend?parameters=%7B%22version%22:%2210.0.0%22,%22source%22:%22H%22%7D",
        }).then(res=>{
            // console.log(res.data.data.recommendedContent)
           // 轮播数据
           this.setState({
               carouselList:res.data.data.carousel,
               topNavList1:res.data.data.recommendedContent[0].items,
              //  topNavList2:res.data.data.recommendedContent[1].items,
           })
        })
        axios({
            url:"http://api9.wochu.cn/api/app/acts?version=20.0.0&source=H",
        }).then(res=>{
            console.log(res.data.data.acts)
           this.setState({
            broadlist : res.data.data.acts[0].items,
            titleImg : res.data.data.acts[0].templateImgUrl,
            // link_img1 : res.data.data.acts[1].items[0],
            link_img1 : res.data.data.acts[1].items[0],
            imgView1 : res.data.data.acts[2].items[0],
            labelView1 : res.data.data.acts[2].items[0].labels,
            temp_list1 : res.data.data.acts[2],
            priceList1:res.data.data.acts[2].items[0].price.toString().split("."),
            link_img2 : res.data.data.acts[4].items[0],
            link_img3 : res.data.data.acts[5].items[0],
            groupList3 : res.data.data.acts[6].items,
            imgView2 : res.data.data.acts[7].items[0],
            labelView2 : res.data.data.acts[7].items[0].labels,
            temp_list2 : res.data.data.acts[7],
            // spiltPrice2(this.imgView2.price.toString()),
            // priceList2:res.data.data.acts[7].items[0].price.toString().split("."),
            link_img4 : res.data.data.acts[9].items[0],
            goodsList1 : res.data.data.acts[10].items,
            link_img5 : res.data.data.acts[11].items[0],
            goodsList2 : res.data.data.acts[12].items,
            link_img6 : res.data.data.acts[13].items[0],
            goodsList3 : res.data.data.acts[14].items,
            // link_img7 : res.data.data.acts[15].items[0],
            // goodsList4 : res.data.data.acts[16].items,
            // link_img8 : res.data.data.acts[17].items[0],
            // goodsList5 : res.data.data.acts[18].items,
            // link_img9 : res.data.data.acts[19].items[0],
            // goodsList6 : res.data.data.acts[20].items,
            // link_img10 : res.data.data.acts[21].items[0],
            // goodsList7 : res.data.data.acts[22].items,
            // link_img11 : res.data.data.acts[23].items[0],
            // goodsList8 : res.data.data.acts[24].items,
            // link_img12 : res.data.data.acts[25].items[0],
            // goodsList9 : res.data.data.acts[26].items,
            // link_img13 : res.data.data.acts[27].items[0],
            // goodsList10 : res.data.data.acts[28].items,
            // <<<<<<<<<<<<<<<<<<<<GoodsSwiper<<<<<<<<<<<<<<<<<<<<<<<<
            goodsSwiper1 : res.data.data.acts[3].items,
            goodsSwiper2 : res.data.data.acts[8].items,
            // >>>>>>>>>>>>>>>>>>>>GoodsSwiperEND>>>>>>>>>>>>>>>>>>>>>
           })
        //    console.log(this.state.imgView1.price.toString())
        })
   }

    render() {
        // console.log(this.state.broadlist)
        return (
            <div className={homeCss.homeTotal}>
                {/* ======================首页Nav开始====================== */}
                <HomeHeader></HomeHeader>
                {/* ======================首页Nav结束====================== */}
                <div className={homeCss.mainContent}>
                    {/* ======================首页轮播开始====================== */}
                    {/* //todo:图片加载慢，有可能页面渲染之后返回  有BUG */}
                    <div className={homeCss.carousel}>
                        <Carousel infinite={true} 
                        autoplay={true} autoplayInterval={2500} key={this.state.carouselList.length}
                        ref="myCarousel">
                            {
                                this.state.carouselList.map(item=>
                                    <div key={item.sortIndex}>
                                <img src={item.picUrl} style={{width:'100%'}} alt={item.title}/>
                                </div>      
                                )
                            }
                        </Carousel>
                    </div>
                    {/* ======================首页轮播结束====================== */}
                    {/* =======================TopNav开始======================= */}
                    <HomeTopNav topNavList1={this.state.topNavList1} 
                    topNavList2={this.state.topNavList2} ></HomeTopNav>
                    {/* =======================TopNav结束======================= */}
                    {/* ======================BroadCast开始====================== */}
                    <HomeBroadcast broadlist={this.state.broadlist} titleImg={this.state.titleImg}></HomeBroadcast>
                    {/* ======================BroadCast结束====================== */}
                    {/* ======================LinkImg开始====================== */}
                    <LinkImg ImgUrl={this.state.link_img1}></LinkImg>
                    {/* ======================LinkImg结束====================== */}
                    {/* ======================tempList开始====================== */}
                    <TempList tempList={this.state.temp_list1} 
                            imgView={this.state.imgView1} 
                            labelView={this.state.labelView1} 
                            priceList = {this.state.priceList1}
                    ></TempList>
                    {/* ======================tempList结束====================== */}
                    {/* =====================GoodsSwiper开始===================== */}
                    <GoodsSwiper goodsSwiper={this.state.goodsSwiper1} key={this.state.goodsSwiper1.length}></GoodsSwiper>
                    {/* =====================GoodsSwiper结束===================== */}
                    {/* ======================LinkImg开始====================== */}
                    <LinkImg ImgUrl={this.state.link_img2}></LinkImg>
                    <LinkImg ImgUrl={this.state.link_img3}></LinkImg>
                    {/* ======================LinkImg结束====================== */}
                    {/* ======================GroupList开始====================== */}
                    <GroupList groupList3={this.state.groupList3}></GroupList>
                    {/* ======================GroupList结束====================== */}
                    {/* ======================tempList开始====================== */}
                    <TempList tempList={this.state.temp_list2} 
                            imgView={this.state.imgView2} 
                            labelView={this.state.labelView2} 
                            priceList = {this.state.priceList2}
                    ></TempList>
                    {/* ======================tempList结束====================== */}
                    {/* =====================GoodsSwiper开始===================== */}
                    <GoodsSwiper goodsSwiper={this.state.goodsSwiper2} key={this.state.goodsSwiper2}></GoodsSwiper>
                    {/* =====================GoodsSwiper结束===================== */}
                    {/* ======================LinkImg开始====================== */}
                    <LinkImg ImgUrl={this.state.link_img4}></LinkImg>
                    {/* ======================LinkImg结束====================== */}
                    {/* =====================GoodsList开始===================== */}
                    <GoodsList goodsList={this.state.goodsList1}></GoodsList>
                    {/* =====================GoodsList结束===================== */}
                    {/* ======================LinkImg开始====================== */}
                    <LinkImg ImgUrl={this.state.link_img5}></LinkImg>
                    {/* ======================LinkImg结束====================== */}
                    {/* =====================GoodsList开始===================== */}
                    <GoodsList goodsList={this.state.goodsList2}></GoodsList>
                    {/* =====================GoodsList结束===================== */}
                    {/* ======================LinkImg开始====================== */}
                    <LinkImg ImgUrl={this.state.link_img6}></LinkImg>
                    {/* ======================LinkImg结束====================== */}
                    {/* =====================GoodsList开始===================== */}
                    <GoodsList goodsList={this.state.goodsList3}></GoodsList>
                    {/* =====================GoodsList结束===================== */}
                    {/* ======================LinkImg开始====================== */}
                    <LinkImg ImgUrl={this.state.link_img7}></LinkImg>
                    {/* ======================LinkImg结束====================== */}
                    {/* =====================GoodsList开始===================== */}
                    <GoodsList goodsList={this.state.goodsList4}></GoodsList>
                    {/* =====================GoodsList结束===================== */}
                    {/* ======================LinkImg开始====================== */}
                    <LinkImg ImgUrl={this.state.link_img8}></LinkImg>
                    {/* ======================LinkImg结束====================== */}
                    {/* =====================GoodsList开始===================== */}
                    <GoodsList goodsList={this.state.goodsList5}></GoodsList>
                    {/* =====================GoodsList结束===================== */}
                    {/* ======================LinkImg开始====================== */}
                    <LinkImg ImgUrl={this.state.link_img9}></LinkImg>
                    {/* ======================LinkImg结束====================== */}
                    {/* =====================GoodsList开始===================== */}
                    <GoodsList goodsList={this.state.goodsList6}></GoodsList>
                    {/* =====================GoodsList结束===================== */}
                    {/* ======================LinkImg开始====================== */}
                    <LinkImg ImgUrl={this.state.link_img10}></LinkImg>
                    {/* ======================LinkImg结束====================== */}
                    {/* =====================GoodsList开始===================== */}
                    <GoodsList goodsList={this.state.goodsList7}></GoodsList>
                    {/* =====================GoodsList结束===================== */}
                    {/* ======================LinkImg开始====================== */}
                    <LinkImg ImgUrl={this.state.link_img11}></LinkImg>
                    {/* ======================LinkImg结束====================== */}
                    {/* =====================GoodsList开始===================== */}
                    <GoodsList goodsList={this.state.goodsList8}></GoodsList>
                    {/* =====================GoodsList结束===================== */}
                    {/* ======================LinkImg开始====================== */}
                    <LinkImg ImgUrl={this.state.link_img12}></LinkImg>
                    {/* ======================LinkImg结束====================== */}
                    {/* =====================GoodsList开始===================== */}
                    <GoodsList goodsList={this.state.goodsList9}></GoodsList>
                    {/* =====================GoodsList结束===================== */}
                    {/* ======================LinkImg开始====================== */}
                    <LinkImg ImgUrl={this.state.link_img13}></LinkImg>
                    {/* ======================LinkImg结束====================== */}
                    {/* =====================GoodsList开始===================== */}
                    <GoodsList goodsList={this.state.goodsList10}></GoodsList>
                    {/* =====================GoodsList结束===================== */}

                    {/* {console.log(this.state.link_img1.source)} */}

                </div>
            </div>
        )
    }
}

export default Home