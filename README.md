# bankcard-parser (挖坑，待填)

银行号码解析器，根据号码判断所属银行。

```javascript
var parser = require('bankcard-parser');

console.log(parser.get('6228480402564890018'));
// { success: true, data: { org: '银联', bank: '所属银行', type: '银行卡类型', locale: '开户地' } }

console.log(parser.get('622848040256489001'));
// { success: false, message: '卡号长度不是19位' }
```

## 银行卡基本知识

通常，银行卡卡号的前六位是用来表示发卡银行或机构的，称为发卡行识别码（ Bank Identification Number ，缩写为 BIN ）

目前，由中国银联各成员机构发行的银联标准卡 BIN 是“ 62 ”字头的。

## 参考资料

支付宝有银行卡号自动识别银行卡类型的功能。
