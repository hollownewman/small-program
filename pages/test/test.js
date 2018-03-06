var app = getApp();
var common = require('../../common/common.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'小程序',
    password:null,
    abc:true,
    arr:[1,2,3,4,5],
    list:[{name:'l',age:'20'},{name:'w',age:'30'}]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      password:app.globalData.password
    })
  },
  toIndex: function () {
    wx.switchTab({
      url: '../index/index',
      success:function(){
        console.log("成功了！");
      }
    });
  },
  sHello:function(){
    common.testHello(this.data.name);
    this.setData({
      abc:!this.data.abc
    })
  },
  testTap:function(event){
    console.log(event);
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})