import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import './applyFail.scss'

export default class applyFail extends Component {

  config = {
    navigationBarTitleText: '申请失败'
  }

  render() {
    return (
      <View className='applySuccess'>
        <View className='at-row at-row__align--center' style='margin-top:170px'>
          <AtIcon value='close-circle' size='130' color='#F00' className='at-col at-col__offset-4'></AtIcon>
        </View>
        <View className='at-article__h2 at-row at-row__align--center'>
          <View className='at-col at-col__offset-2'>申请失败 请填写正确的信息</View>
        </View>
      </View>
    )
  }
}
