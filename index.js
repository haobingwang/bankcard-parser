function get(number) {
  var cardNumber = String(number);
  if(cardNumber.length !== 19){
    return {
      success: false,
      message: '卡号长度不是19位'
    }
  }
  if(isNaN(cardNumber)) {
    return {
      success: false,
      message: '卡号应为数字，请检查卡号是否存在非数字内容'
    }
  }
  // 卡号的前六位是用来表示发卡银行或机构的，称为发卡行识别码
  // （ Bank Identification Number ，缩写为 BIN )
  var bin = cardNumber.substring(0,6);

  switch (bin.substring(0,2)) {
    case '62':
      var org = '银联';
      break;
    default:
      var org = '不明';
  }

  return {
    success: true,
    data:{
      org: org,
      bank: '所属银行',
      type: '银行卡类型',
      locale: '开户地',
  }};
};

exports.get = get;
