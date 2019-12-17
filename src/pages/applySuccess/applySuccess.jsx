import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import './applySuccess.scss'

export default class ApplySuccess extends Component {

  config = {
    navigationBarTitleText: '申请成功',

  }
  componentDidMount() {
    setTimeout(() => {
      Taro.navigateTo({ url: "/pages/index/index" })
   },5000) 
 }
  render() {
    return (
      <View className='applySuccess'>
        <View className='at-row at-row__align--center' style='margin-top:170px'>
          <AtIcon value='check-circle' size='130' color='#3BBA00' className='at-col at-col__offset-4'></AtIcon>  
        </View>
        <View className='at-article__h2 at-row at-row__align--center'>
          <View className='at-col at-col__offset-2'>申请成功 管家会尽快联系您</View>
        </View>
      </View>
    )
  }
}
