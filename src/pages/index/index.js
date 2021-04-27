/*
 * @description:
 * @author: steve.deng
 * @Date: 2021-04-21 17:34:36
 * @LastEditors: steve.deng
 * @LastEditTime: 2021-04-25 17:49:16
 */
import React, { Component } from "react";
import { View } from "@tarojs/components";

import Header from "../../containers/Header/Header";
import MainSection from "../../containers/MainSection/MainSection";

import "./index.scss";

class Index extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    let date = new Date();

    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let min = date.getMinutes();
    return (
      <View className="todaoapp">
        <View>version 1.3.0</View>
        {month}月{day}日{hour}时{min}分
        <Header />
        <MainSection />
      </View>
    );
  }
}

export default Index;
