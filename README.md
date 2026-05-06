

## 关于

`OnePrinter`是北京网为科技有限公司（简称:`网为®`）开发的打印控件，专注于解决打印机调用问题。

`OnePrinter`可以轻松实现打印机集中管理，并进行隔空共享打印、网页静默打印等功能，也可以实现共享打印全流程化管理，满足一般企业的打印机共享需求。

* 支持Web通过POST请求，传参唤起系统打印机进行批量打印。

* 支持Word、PDF、图片、Base64等格式打印。

* 支持端口号自定义。

* 支持局域网/互联网调用，可在其他设备传参打印或隔空打印。

* 支持隔空打印，可指定打印机、局域网/互联网、限次、限时等，其他手机/电脑可扫码、打开链接上传打印。
  
* 支持本机打印。

* 支持局域网设备管理，包括详情、扫描、禁用/激活指定设备。

* 支持分享日志管理，包括详情、暂停、删除、清空等操作

* 支持打印日志管理，包括详情、删除、清空等操作。

* 支持Windows、MacOS、Linux等操作系统。

## 应用场景

* 批量打印票据、订单、发票；

* 批量打印胸卡、标签；

* 批量打印图片；

* 批量打印二维码、条形码；

* 手机上传打印；

* 局域网隔空打印；

* 打印店、学校、单位等，对打印机的集中管理；

* 其他

## 官网地址

<https://docs.wangwei.ltd/guide/oneprinter/>

## 免费下载

| 操作系统 | 下载地址 |
|-----|-----|
| Windows | <https://static.wangwei.ltd/download/onePrinter.exe> |
| MacOs | 待更新 |
| Linux | 待更新 |

## 使用方法

### 系统首页

主界面包含OnePrinter的ICON、版本号、启动状态、打印机选择、端口号设置、请求URL等。可以一键设置默认打印机、端口号，复制请求相应的请求URL。

注意：修改端口号后需要同步在js或vue中修改请求URL

::: window title="OnePrinter 系统首页"
![OnePrinter](https://static.wangwei.ltd/image/guide/oneprinter/home1.png)
:::

::: window title="OnePrinter 英文版"
![OnePrinter](https://static.wangwei.ltd/image/guide/oneprinter/home2.png)
:::

::: window title="OnePrinter 护眼模式"
![OnePrinter](https://static.wangwei.ltd/image/guide/oneprinter/home3.png)
:::

### 隔空打印

使用微信扫描二维码，在手机界面中点击【选择文件】按钮并选中相应文件后（可多选），会出现待打印文件列表，然后点击【开始打印】即可开始工作。

::: window title="OnePrinter 隔空打印"
![OnePrinter隔空打印](https://static.wangwei.ltd/image/guide/oneprinter/air.png)
:::

::: window title="OnePrinter 手机打印"
![OnePrinter手机打印](https://static.wangwei.ltd/image/guide/oneprinter/phone.png)
:::

### 本机打印

点击【选择文件】按钮并选中相应文件后（可多选），会出现待打印文件列表，然后点击【开始打印】即可开始工作。

::: window title="OnePrinter 本机打印"
![OnePrinter本机打印](https://static.wangwei.ltd/image/guide/oneprinter/local.png)
:::

### 分享日志

可以对隔空打印分享的内容进行管理、查询等。

::: window title="OnePrinter 分享日志"
![OnePrinter分享日志](https://static.wangwei.ltd/image/guide/oneprinter/share.png)
:::

### 设备管理

设备管理可以管理局域网内所有发起打印的终端设备，并可禁止/激活相应设备。

::: window title="OnePrinter 设备管理"
![OnePrinter设备管理](https://static.wangwei.ltd/image/guide/oneprinter/device.png)
:::

### 打印日志

打印日志记录OnePrinter所有打印行为的记录，可以查看打印的具体内容和时间，也可以删除或清空。

注意：磁盘空间可能会不断占用，点击【一键清空】即可清空所有记录。

::: window title="OnePrinter 打印日志"
![OnePrinter打印日志](https://static.wangwei.ltd/image/guide/oneprinter/log.png)
:::

### 通用设置

可以设置临时文件存储地址、语言、护眼模式、字号、配色等。

::: window title="OnePrinter 通用设置"
![OnePrinter通用设置](https://static.wangwei.ltd/image/guide/oneprinter/setting.png)
:::

## 请求示例

``` js
// 官网：https://docs.wangwei.ltd/guide/oneprinter/
// onePrinter.js
import {Post} from "@/util/http";
// 传入待打印文件的url或base64，二选一。
export async function toPrint(url,base64) {
    // url和base64，二选一。
    let obj = {
        key: "", // 如本地打印，请留空或随便填写。如需网络域名打印，请注册授权获取。
        url: url, // 打印文件的地址，如 https://static.wangwei.ltd/image/favicon.png 。
        base64: base64 //打印文件的base64代码
    };
    // 如10081端口被占用，请尝试10082端口。
    const res = await Post("http://127.0.0.1:10081/print", obj); // 也可以使用局域网IP
    if (res.data.code === 1) {
        // 执行成功
    }else{
        // 执行失败
    }
}
```

## 注册授权

::: note 免费授权
在社交媒体上发布1条含本软件截图及50字以上使用心得的分享贴可立减600元。协会、学校等机构可免费授权。
:::

::: note 域名访问
域名访问是指网页上调用打印机。一次购买，永久使用。
:::

| 功能 | 免费版 | 授权版 |
|---------|------|------|
| 费用 | 免费 | 699元 |
| 网页打印 | ✅ 支持 | ✅ 支持 |
| 本机打印 | ✅ 支持 | ✅ 支持 |
| 隔空打印 | ✅ 支持 | ✅ 支持 |
| 设备管理 | ✅ 支持 | ✅ 支持 |
| 打印日志 | ✅ 支持 | ✅ 支持 |
| 域名访问 | ❌ 不支持 | ✅ 支持 |
| 通用设置 | ✅ 支持 | ✅ 支持 |

咨询、加群、购买授权，可加微信二维码，备注：OnePrinter。

<img src="https://static.wangwei.ltd/image/chens.png"  width="120px" />

## 更新日志

#### 1.1.6（2026年05月05日）

<b>新增：</b>

* 互联网打印；
* 隔空打印限定；
* 打印提示音；

<b>优化：</b>

* 隔空打印逻辑

#### 1.1.5（2026年04月28日）

<b>新增：</b>

* 英文版；
* 网页打印、本机打印、隔空打印分别可以自定义打印机。
* 隔空打印功能配置及分享日志。

#### 1.1.4（2026年04月27日）

<b>新增：</b>

* 设备管理功能，可以禁用/开启某设备的打印服务；
* 存储目录切换功能；
* 版本检测功能；

#### 1.1.3（2026年04月23日）

<b>新增：</b>

* 打开磁盘；

<b>优化：</b>

* base64打印功能；
* 时区修正；
* 局域网打印优化；

#### 1.1.2（2026年04月21日）

<b>新增：</b>

* 本机打印、隔空打印、打印日志等功能；
* windows防火墙规则自动设置；

#### 1.1.1（2026年04月20日）

<b>新增：</b>

* 版本重构
* 端口切换能力

#### 1.0.6（2026年03月23日）

<b>新增：</b>

* 局域网打印能力

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
