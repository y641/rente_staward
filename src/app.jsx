import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index/index'
import 'taro-ui/dist/style/index.scss'

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/applySuccess/applySuccess',
      'pages/phoneLogin/phoneLogin',
      'pages/login/login',
      'pages/applyFail/applyFail',
      'pages/serve/serve',
      'pages/applyContract/applyContract',
      'pages/me/me'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: "#333",
      selectedColor: "#f03d37",
      backgroundColor: "#fff",
      borderStyle: "black",
      list: [
        {
          pagePath: "pages/index/index",
          text: "首页",
          iconPath: "./img/home.png",
          selectedIconPath: "./img/active.png"
        },
        {
          pagePath: "pages/serve/serve",
          text: "服务订单",
          iconPath: "./img/order.png",
          selectedIconPath: "./img/order_active.png"
        },
        {
          pagePath: "pages/me/me",
          text: "我的",
          iconPath: "./img/me.png",
          selectedIconPath: "./img/me_active.png"
        }
      ]
    }
  }
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
