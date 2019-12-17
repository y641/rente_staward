import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import { AtInput, AtButton, AtForm } from 'taro-ui'
import './PhoneLogin.scss'

export default class phoneLogin extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  render() {
    return (
      <View className='PhoneLogin'>
        <AtForm >
          <AtInput
            name='value6'
            title='手机号码'
            type='phone'
            placeholder='请输入11位手机号码'
            value={this.state.value6}
            onChange={() => { }}
          />
          <AtInput
            type='text'
            maxLength='4'
            placeholder='请输入图形效验码'
            value={this.state.value}
            onChange={() => { }}
          >
            <Image src='../img.jpg' alt='' />
          </AtInput>
          <AtInput
            type='text'
            maxLength='4'
            placeholder='请输入验证码'
            value={this.state.value}
            onChange={() => { }}
          >
            <Text>发送验证码</Text>
          </AtInput>
        </AtForm>
        <AtButton type='primary' onClick={() => {
          Taro.navigateTo({url:'/pages/index/index'})
        }}>登陆</AtButton>
      </View>
    )
  }
}
