import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Swiper, SwiperItem } from '@tarojs/components'
import { AtNoticebar, AtGrid, AtToast  } from 'taro-ui'
import './index.scss'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }
  state = {
    hasBorder:false
  }

  render() {
    return (
      <View className='index'>
        {/* 轮播图 */}
        <Swiper
          className="swiper-container"
          circular
          indicatorDots
          indicatorColor='#999'
          indicatorActiveColor='#bf708f'
          autoplay>
          <SwiperItem className='menu'>
            <Image className="swiper-img" mode="widthFix" src={require('../../img/1.jpg')}></Image>
          </SwiperItem>
          <SwiperItem className='menu'>
            <Image className="swiper-img" mode="widthFix" src={require('../../img/2.jpg')}></Image>
          </SwiperItem>
          <SwiperItem className='menu'>
            <Image className="swiper-img" mode="widthFix" src={require('../../img/3.jpg')}></Image>
          </SwiperItem>
        </Swiper>
        <AtNoticebar icon='volume-plus' marquee>
          这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏
        </AtNoticebar>
        <AtGrid onClick={(item, index) => {
          console.log(item, index)
          if (index === 0) {
            Taro.navigateTo({ url:'/pages/applyContract/applyContract'})
          }
          if (index === 1) {
            Taro.showToast({
              title: '功能待开启'
            })
          }
          if (index === 2) {
            Taro.showToast({
              title: '功能待开启'
            })
          }
          if (index === 3) {
            Taro.showToast({
              title: '功能待开启'
            })
          }
          if (index === 4) {
            Taro.showToast({
              title: '功能待开启'
            })
          }
          if (index === 5) {
            Taro.showToast({
              title: '功能待开启'
            })
          }
          if (index === 6) {
            Taro.showToast({
              title: '功能待开启'
            })
          }
          if (index === 7) {
            Taro.showToast({
              title: '功能待开启'
            })
          }
          if (index === 8) {
            Taro.showToast({
              title: '功能待开启'
            })
          }
        }} hasBorder={this.state.hasBorder} columnNum='4' data={
          [
            {
              image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
              value: '申请签约'
            },
            {
              image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
              value: '合同'
            },
            {
              image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
              value: '自助缴费'
            },
            {
              image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
              value: '智能水电'
            },
            {
              image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
              value: '清洁服务'
            },
            {
              image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
              value: '维修服务'
            },
            {
              image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
              value: '物品租借'
            },
            {
              image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
              value: '服务消息'
            }
          ]
        } />
      </View>
    )
  }
}
