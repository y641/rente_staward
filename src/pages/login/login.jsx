import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import './login.scss'

export default class Login extends Component {

  config = {
    navigationBarTitleText: '登陆'
  }

  render () {
    return (
      <View className='index'>
        <View className='meume'>
          <Image className="swiper-img" mode="widthFix" src={require('../../img/1.jpg')}></Image>
        </View>
        <AtButton type='primary'>微信登陆</AtButton>
        <AtButton onClick={() => {
          Taro.navigateTo({url:'/pages/PhoneLogin/PhoneLogin'})
        }}>手机号码登陆/注册</AtButton>
      </View>
    )
  }
}
