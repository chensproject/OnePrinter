# OnePrinter

## 关于

`OnePrinter`是北京网为科技有限公司（简称:`网为®`）开发的`Web批量打印控件`，专注于解决`Web`调用`打印机`（本机或局域网中）进行`批量打印`的问题。

* 支持`Web`通过`POST`传参唤起系统打印机进行批量打印。

* 支持`Windows`、`MacOS`、`Linux`等操作系统。
  
* 支持`文档`、`图片`、`PDF`、`Base64`等格式。

## 应用场景

* 批量打印票据、订单、发票；

* 批量打印胸卡、标签；

* 批量打印图片；

* 批量打印二维码、条形码；

* 其他……

## 免费下载

#### Windows版下载

<https://docs.wangwei.ltd/guide/oneprinter/>

<https://github.com/chensproject/OnePrinter>

<https://gitee.com/chenrongbin/oneprinter>

## 请求示例

```js
// onePrint.js
import {Post} from "@/util/http";
// 传入待打印文件的url或base64
export async function toPrint(url,base64) {
    // url和base64，二选一。
    let obj = {
        key: "", // 如本地打印，请留空。如需网络域名打印，请注册授权获取。
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

## 注册授权

| 本地授权     | 子域名授权       | 顶级域名授权       |
| ----------- | ----------- | ----------- |
| localhost:8080、127.0.0.1:8080   | abc.wangwei.ltd、abc.docs.wangwei.ltd      | *.wangwei.ltd      |
| 免费   | 699元/个      |899元/个      |

<i>注：域名指访问方式，支持端口访问。一次购买，永久授权。</i>

咨询、加群、购买授权，可加微信二维码，备注：OnePrinter 。

<img src="https://static.wangwei.ltd/image/chens.png"  width="200px" />

## 版本更新

#### 1.0.5（2026年03月19日）

<b>新增：</b>

* 默认打印机设置能力

#### 1.0.4（2025年12月22日）

<b>优化：</b>

* 优化顶级域名授权、子域名授权功能。

#### 1.0.3（2025年12月21日）

<b>优化：</b>

* 临时文件存储和删除。

#### 1.0.2（2025年12月19日）

<b>新增：</b>

* 图形化界面，可缩小至系统托盘长驻内存。

* 域名绑定和注册授权功能。

* 支持Base64功能。
