module.exports = {
    baseUrl: 'api',
    defaultTitle: 'title',
    defaultShareData: {
        title: '你有一份2018成长报告，去开启吧～', // 分享标题
        desc: '硕学霸年度报告', // 分享描述
        link: window.location.href.split('#')[0], // 空:指向首页 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: '', // 分享图标
        type: 'link', // 分享类型,music、video或link，不填默认为link
        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
    },
}
