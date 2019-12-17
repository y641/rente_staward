import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './me.scss'

export default class Me extends Component {

  config = {
    navigationBarTitleText: '登陆'
  }

  render() {
    return (
      <View className='index'>
        敬请期待
      </View>
    )
  }
}
