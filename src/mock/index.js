import Mock from 'mockjs';

const { Random } = Mock;

Mock.setup({
  timeout: 3000
})
const baseUrl = 'http://asus.supersonicwx.com';

const userData = Mock.mock({
  createAt: Random.datetime(),
  avatar: Random.image('200x100', '#00405d', '#FFF'),
  nickname: Random.cname(),
  desc: Random.sentence(),
  email: Random.email(),
  address: Random.region() + Random.county(true),
  iCard: Random.id(),
  id: /\d{10,}/
})

console.log(userData)

Mock.mock(this.baseUrl + '/user/getInfo', 'get', function(){
  return userData
})
