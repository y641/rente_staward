import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtTabs, AtTabsPane, AtInput, AtForm, AtIcon, AtButton } from 'taro-ui'
import './applyContract.scss'

export default class applyContract extends Component {

  config = {
    navigationBarTitleText: '签约申请'
  }
  state = {
    current: 0,
    name: '鹿晗',
    number: '341221199702125632',
    phone: '15255698632',
    time: '2018-04-22',
    editable: false,
    status: false,
    disabled: 'disabled',
    compay:'杭州绿云科技有限公司'
  }
  handleClick(value) {
    this.setState({
      current: value
    })
  }
  onChange = e => {
    this.setState({
      selectorChecked: this.state.selector[e.detail.value]
    })
  }
  render() {
    const tabList = [{ title: '个人租房' }, { title: '企业租房' }]
    return (
      <View className='applyContract'>
        {/* 个人租房 */}
        <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
          <AtTabsPane current={this.state.current} index={0} >
            <View>
              <View className='at-article__h3 '>租客信息</View>
              <AtForm>
                <AtInput
                  name='name'
                  title='姓名*'
                  type='text'
                  placeholder='请输入姓名'
                  value={this.state.name}
                  onChange={()=>{}}
                />
                <AtInput
                  name='number'
                  title='证件号码*'
                  type='idcard'
                  placeholder='身份证号码'
                  value={this.state.number}
                  onChange={()=>{}}
                />
                <AtInput
                  name='value6'
                  title='手机号码*'
                  type='phone'
                  placeholder='手机号码'
                  value={this.state.phone}
                  onChange={()=>{}}
                />
                <AtInput
                  name='value6'
                  title='手机号码*'
                  type='phone'
                  placeholder='手机号码'
                  value={this.state.phone}
                  onChange={() => { }}
                />
              </AtForm>
            </View>
            <View>
              <View className='at-article__h3'>租约信息</View>
              <AtForm>
                <AtInput
                  name='time'
                  title='租赁时间*'
                  type='text'
                  placeholder='请选择'
                  value={this.state.time}
                  onChange={() => { }}
                />

                <AtInput
                  name='number'
                  title='证件号码*'
                  type='idcard'
                  placeholder='身份证号码'
                  value={this.state.number}
                  onChange={() => { }}
                />
                <AtInput
                  name='value6'
                  title='手机号码*'
                  type='phone'
                  placeholder='手机号码'
                  value={this.state.phone}
                  onChange={() => { }}
                />
                <AtInput
                  name='value6'
                  title='手机号码*'
                  type='phone'
                  placeholder='手机号码'
                  value={this.state.phone}
                  onChange={() => { }}
                />
                <AtInput
                  name='value6'
                  title='手机号码*'
                  type='phone'
                  placeholder='手机号码'
                  value={this.state.phone}
                  onChange={() => { }}
                />
              </AtForm>
              <View className='at-article__p'>尊敬的客户，注册电子签账号后才可以使用电子合同。</View>
              <View style='position:relative'>
                <Text className='at-article__p' style='color:red' onClick={() => {
                  this.setState({ status: !this.state.status, disabled:!this.state.disabled})
                }}>
                  <Text style='display:inline-block;width:12px;height:12px;border:1px solid #666;margin-right:0.1rem;margin-bottom:-3px'></Text>
                  {this.state.status ? <AtIcon value='check' size='15' color='#666' status={this.state.status}></AtIcon>:null}
                  同意用此租客信息注册电子签账号</Text>
              </View>
              <View className='at-row' style='border:1px solid #000'>
                <AtButton size='normal' onClick={() => {
                  Taro.navigateTo({url:'/pages/index/index'})
                }}>取消</AtButton>
                <View style='border-right:1px solid #000'></View>
                <AtButton size='normal' disabled={this.state.disabled} onClick={() => {
                  Taro.navigateTo({ url:'/pages/applySuccess/applySuccess'})
                }}>提交申请</AtButton>
              </View>
            </View>
          </AtTabsPane>
          {/* 企业租房 */}
          <AtTabsPane current={this.state.current} index={1}>
            <View>
              <View>
                <View className='at-article__h3 '>租客信息</View>
                <AtForm>
                  <AtInput
                    name='name'
                    title='企业名称*'
                    type='text'
                    placeholder='请输入姓名'
                    value={this.state.compay}
                    onChange={() => { }}
                  />
                  <AtInput
                    name='number'
                    title='企业证件号码*'
                    type='idcard'
                    placeholder='企业证件号码'
                    value={this.state.number}
                    onChange={() => { }}
                  />
                  <AtInput
                    name='value6'
                    title='企业手机号*'
                    type='phone'
                    placeholder='企业手机号'
                    value={this.state.phone}
                    onChange={() => { }}
                  />
                  <AtInput
                    name='value6'
                    title='手机号码*'
                    type='phone'
                    placeholder='手机号码'
                    value={this.state.phone}
                    onChange={() => { }}
                  />
                </AtForm>
              </View>
              <View>
                <View className='at-article__h3'>租约信息</View>
                <AtForm>
                  <AtInput
                    name='time'
                    title='租赁时间*'
                    type='text'
                    placeholder='请选择'
                    value={this.state.time}
                    onChange={() => { }}
                  />

                  <AtInput
                    name='number'
                    title='证件号码*'
                    type='idcard'
                    placeholder='身份证号码'
                    value={this.state.number}
                    onChange={() => { }}
                  />
                  <AtInput
                    name='value6'
                    title='手机号码*'
                    type='phone'
                    placeholder='手机号码'
                    value={this.state.phone}
                    onChange={() => { }}
                  />
                  <AtInput
                    name='value6'
                    title='手机号码*'
                    type='phone'
                    placeholder='手机号码'
                    value={this.state.phone}
                    onChange={() => { }}
                  />
                  <AtInput
                    name='value6'
                    title='手机号码*'
                    type='phone'
                    placeholder='手机号码'
                    value={this.state.phone}
                    onChange={() => { }}
                  />
                </AtForm>
                <View className='at-article__p'>尊敬的客户，注册电子签账号后才可以使用电子合同。</View>
                <View style='position:relative'>
                  <Text className='at-article__p' style='color:red' onClick={() => {
                    this.setState({ status: !this.state.status, disabled: !this.state.disabled })
                  }}>
                    <Text style='display:inline-block;width:12px;height:12px;border:1px solid #666;margin-right:0.1rem;margin-bottom:-3px'></Text>
                    {this.state.status ? <AtIcon value='check' size='15' color='#666' status={this.state.status}></AtIcon> : null}
                    同意用此租客信息注册电子签账号</Text>
                </View>
                <View className='at-row' style='border:1px solid #000'>
                  <AtButton size='normal'>取消</AtButton>
                  <View style='border-right:1px solid #000'></View>
                  <AtButton size='normal' disabled={this.state.disabled} onClick={() => {
                    Taro.navigateTo({ url: '/pages/applySuccess/applySuccess' })
                  }}>提交申请</AtButton>
                </View>
              </View>
            </View>
          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}
