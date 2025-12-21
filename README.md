# OnePrinter

## 关于

`OnePrinter`是北京网为科技有限公司自主研发的打印机桥链软件，专注于解决`Web`调用`打印机`（本机或局域网中）进行`批量打印`的问题。

* 支持跨平台`Windows`、`MacOS`、`Linux`等操作系统。
  
* 支持`文档`、`图片`、`PDF`、`Base64`等格式。

* 以`http`形式接收`Web`参数传输给打印机。

## 应用场景

* 批量打印票据、订单、发票；

* 批量打印胸卡、标签；

* 批量打印图片；

* 批量打印二维码、条形码；

* 其他……

## 免费下载

Windows版下载：

<https://gitee.com/chenrongbin/oneprinter>

## 注册授权

| 本地授权     | 域名授权       |
| ----------- | ----------- |
| 免费   | 799元/个      |

<img src="https://static.wangwei.ltd/image/chens.png"  width="200px" />

加群、咨询、购买授权，备注：OnePrinter

## 请求示例

```js
// onePrint.js
import {Post} from "@/util/http";
// 传入待打印文件的url或base64
export async function toPrint(url,base64) {
    // url和base64，二选一。
    let obj = {
        key: "", // 如需网络打印，请注册授权获取。如本地打印，则填16位字符即可。
        url: url, // 打印文件的地址，如 https://abc.com/1.doc。
        base64: base64 //打印文件的base64代码
    };
    // 如10081端口被占用，请尝试10082端口。
    const res = await Post("http://127.0.0.1:10081/print", obj);
    if (res.data.code === 1) {
        // 执行成功
    }else{
        // 执行失败
    }
}
```

## 版本更新

1.0.3版（2025年12月21日）

<b>优化：</b>

* 临时文件存储和删除。

1.0.2版（2025年12月19日）

<b>新增：</b>

* 图形化界面，可缩小至系统托盘长驻内存。

* 域名绑定和注册授权功能。

* 支持Base64功能。
