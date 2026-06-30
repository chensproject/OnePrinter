# OnePrinter 打印软件

`OnePrinter`是北京网为科技有限公司（简称:`网为®`）开发的`免费`共享打印软件，专注于解决打印机共享、管理和调用问题。

`OnePrinter`可以轻松实现打印机共享、管理和调用，如：隔空共享打印、静默打印、电脑客户端预览打印等多种功能，也可以实现打印全流程化管理，满足一般企业的打印机共享需求。

* 支持打印机不限。
* 支持断网、内网独立运行。
* 支持外网（互联网或云端）打印。
* 支持电脑端客户端发起预览打印。
* 支持Web、软件通过POST请求（本地、内网、外网），传参唤起系统打印机进行批量打印。
* 支持端口号自定义。
* 支持Word、Excel、PowerPoint、PDF、图片、Base64等文件类型。
* 支持隔空打印，可限定分享的打印机、文件类型、限次、限时、份数、横版、双面、页码、彩色、纸张、验证口令、审核等，其他手机/电脑可扫码、打开链接或小程序上传打印。
* 支持本机打印。
* 支持局域网设备管理，包括扫描、详情、备注、禁用/激活指定设备。
* 支持分享日志管理，包括详情、暂停、删除、清空、审核、拒绝等操作。
* 支持打印审核，开启后打印请求需要审核后才发起打印。
* 支持Windows、MacOS、Linux等操作系统。

## 应用场景

* 多网络环境下的打印机共享（不在一个网络下的打印机共享，适用于办公、家庭、打印店等）。
* 密保单位的内网打印。
* 打印店、单位等对打印机的集中管理。
* 自助打印机器（接口打印有本地/内网/外网接口，可快速对接全网打印请求）。
* 批量打印票据、订单、发票、胸卡、标签、图片、二维码、条形码、文档等。
* 其他

## 官网地址

<https://www.oneprinter.cn> (还在建设中)

<https://docs.wangwei.ltd/guide/oneprinter/>

## 免费下载

### 服务端

| Windows | 下载地址 |
|-----|-----|
| 1.1.29 | <https://gitee.com/chenrongbin/oneprinter/releases/download/1.1.29/onePrinter.exe> |
| 1.1.28 | <https://gitee.com/chenrongbin/oneprinter/releases/download/1.1.28/onePrinter.exe> |
| 1.1.27 | <https://gitee.com/chenrongbin/oneprinter/releases/download/1.1.27/onePrinter.exe> |
| 1.1.26 | <https://gitee.com/chenrongbin/oneprinter/releases/download/1.1.26/onePrinter.exe> |
| 1.1.25 | <https://gitee.com/chenrongbin/oneprinter/releases/download/1.1.25/onePrinter.exe> |
| 1.1.24 | <https://gitee.com/chenrongbin/oneprinter/releases/download/1.1.24/onePrinter.exe> |
| 1.1.23 | <https://gitee.com/chenrongbin/oneprinter/releases/download/1.1.23/onePrinter.exe> |
| 1.1.22 | <https://gitee.com/chenrongbin/oneprinter/releases/download/1.1.22/onePrinter.exe> |
| 1.1.21 | <https://gitee.com/chenrongbin/oneprinter/releases/download/1.1.21/OnePrinter.exe> |
| 1.1.20 | <https://gitee.com/chenrongbin/oneprinter/releases/download/1.1.20/onePrinter.exe> |
| 1.1.19 | <https://gitee.com/chenrongbin/oneprinter/releases/download/1.1.19/onePrinter.exe> |
| 1.1.18 | <https://gitee.com/chenrongbin/oneprinter/releases/download/1.1.18/onePrinter.exe> |

### 客户端

请与OnePrinter 1.1.26及以上版本配合使用。

| Windows | 下载地址 |
|-----|-----|
| 1.1.4 | <https://gitee.com/chenrongbin/one-printer-client/releases/download/1.1.4/OnePrinterClient.exe> |

## 使用说明

### 系统首页

相关数据的可视化显示。

::: window title="OnePrinter 系统首页"
![OnePrinter](https://static.wangwei.ltd/image/guide/oneprinter/home1.png)
:::

::: window title="OnePrinter 英文版"
![OnePrinter](https://static.wangwei.ltd/image/guide/oneprinter/home2.png)
:::

### 隔空打印

设置分享名称、指定分享打印机、选择网络范围、选择是否开启并设置口令、可限次、限时、选择是否开启份数、横版、双面、页码、彩色、纸张供用户选择，然后确定即可创建用于分享的二维码和链接。
此二维码和链接永久有效，可张贴或转发给需要打印的用户。
此二维码有2种形式，局域网的为H5页面、互联网的为微信小程序页面，都可在电脑或手机上打开。
用户在此界面上可发起打印任务。

::: window title="OnePrinter 隔空打印"
![OnePrinter隔空打印](https://static.wangwei.ltd/image/guide/oneprinter/air.png)
:::

::: window title="OnePrinter 隔空打印 - 用户端"
![OnePrinter隔空打印 - 用户端](https://static.wangwei.ltd/image/guide/oneprinter/phone.png)
:::

### 本机打印

选择打印机、横版、份数、双面、纸张、彩色，然后将文件拖入其中即可发起打印任务。

::: window title="OnePrinter 本机打印"
![OnePrinter本机打印](https://static.wangwei.ltd/image/guide/oneprinter/local.png)
:::

### 接口打印

web或其他软件将数据通过POST请求发送给本机或局域网URL，即可发起静默批量打印。可指定打印机，不限打印机及任务。

::: window title="OnePrinter 接口打印"
![OnePrinter本机打印](https://static.wangwei.ltd/image/guide/oneprinter/api.png)
:::

### 打印日志

对所有打印行为进行相应管理。

注意：磁盘空间会不断占用，点击【一键清空】即可清空所有记录。也可以在【系统设置】-【高级设置】中对文件存储路径进行修改。

::: window title="OnePrinter 打印日志"
![OnePrinter打印日志](https://static.wangwei.ltd/image/guide/oneprinter/log.png)
:::

### 设备管理

设备管理可以管理局域网内所有发起打印的终端设备，并可禁止/激活相应设备。

::: window title="OnePrinter 设备管理"
![OnePrinter设备管理](https://static.wangwei.ltd/image/guide/oneprinter/device.png)
:::

### 系统设置

可以设置临时文件存储地址、端口号、语言、护眼模式、字号、配色等。

::: window title="OnePrinter 系统设置"
![OnePrinter系统设置](https://static.wangwei.ltd/image/guide/oneprinter/setting.png)
:::

### 请求示例

``` js
// 获取打印机列表
import {Post} from "@/util/http";
export async function toPrint(url,base64) {
    // url或base64，二选一
    let obj = {
        secret_key:"", // 2026年6月15日新增功能：外网接口请传入secret_key，请在【我的账户】获取
    };
     // 可在OnePrinter的【系统设置】-【高级设置】修改端口
     //  可使用本机接口、内网接口、外网接口
    const res = await Post("http://127.0.0.1:10081/getPrinter", obj);
    if (res.data.code === 1) {
        console.log("结果",res.data.data)
        // 执行成功
    }else{
        // 执行失败
    }
}
```

``` js
// 发送打印任务
import {Post} from "@/util/http";
export async function toPrint(url,base64) {
    // url或base64，二选一
    let obj = {
        printer:"", // 指定打印机名称
        url: "", // 打印文件的地址，如 https://static.wangwei.ltd/image/oneprinter_log.png
        base64: "", // 打印文件的base64代码
        secret_key:"", // 2026年6月15日新增功能：外网接口请传入secret_key，请在【我的账户】获取
    };
     // 可在OnePrinter的【系统设置】-【高级设置】修改端口
     //  可使用本机接口、内网接口、外网接口
    const res = await Post("http://127.0.0.1:10081/print", obj);
    if (res.data.code === 1) {
        console.log("结果",res.data.data)
        // 执行成功
    }else{
        // 执行失败
    }
}
```

## 电脑客户端

OnePrinterClient是北京网为科技有限公司（简称:`网为®`）专为电脑发起打印开发的客户端软件。使用虚拟打印机发起打印任务，无论内外网均可发起打印。最终打印体验、效果与传统发起打印一致。

OnePrinterClient负责在客户端电脑发起打印请求，OnePrinter负责打印任务的接收、分发和执行，二者相互协作完成打印。

::: note 前提1
必须安装OnePrinter作为服务端（可以在其他电脑上）作为服务端，并创建1个隔空共享。
:::

### 接口文件

在OnePrinter服务端创建一个隔空共享。下载接口文件.txt，该文件包含客户端配置信息。

::: window title="OnePrinter 下载接口文件"
![OnePrinter下载接口文件](https://static.wangwei.ltd/image/guide/oneprinter/client/0.png)
:::

### 安装客户端

在客户端电脑上安装OnePrinterClient软件（同一台机器也可以），之后再安装OnePrinterClient打印机。

::: window title="OnePrinterClient 打印机安装"
![OnePrinterClient打印机安装](https://static.wangwei.ltd/image/guide/oneprinter/client/1.png)
:::

### 系统配置

根据接口文件.txt，配置以下相关信息。

::: window title="OnePrinterClient 系统配置"
![OnePrinterClient系统配置](https://static.wangwei.ltd/image/guide/oneprinter/client/2.png)
:::

::: window title="OnePrinterClient 系统配置"
![OnePrinterClient系统配置](https://static.wangwei.ltd/image/guide/oneprinter/client/3.png)
:::

### 预览打印

安装完成后，该电脑上即会出现OnePrinterClient虚拟打印机，在Word、PPT、Excel、PDF、图片等文档中执行打印时，选择OnePrinterClient即可发起打印，打印请求发送成功后会显示“发送成功”弹窗，即表示发送成功。

::: window title="OnePrinterClient 预览打印"
![OnePrinterClient预览打印](https://static.wangwei.ltd/image/guide/oneprinter/client/step4.png)
:::

::: window title="OnePrinterClient 预览打印"
![OnePrinterClient预览打印](https://static.wangwei.ltd/image/guide/oneprinter/client/step4_1.png)
:::

::: window title="OnePrinterClient 预览打印"
![OnePrinterClient预览打印](https://static.wangwei.ltd/image/guide/oneprinter/client/step4_2.png)
:::

::: window title="OnePrinterClient 选择云端打印机"
![OnePrinterClient选择云端打印机](https://static.wangwei.ltd/image/guide/oneprinter/client/4.png)
:::

### 卸载软件

如需结束进程，请使用Ctrl+Alt+Del调出任务管理器，找到OnePrinterClient结束进程即可。

如需卸载软件，请在当前文件夹的地址框中输入CMD回车，打开命令窗口输入：

``` cmd
OnePrinterClient.exe -uninstall
```

## 注册授权

| 功能 | 免费版 | 授权版 |专业版 | 定制版 |
|---------|------|------|------|------|
| 费用 | 免费 | 699元 |4999元 | 面议 |
| 隔空打印 | ✅ 支持 | ✅ 支持| ✅ 支持 |✅ 支持 |
| 本机打印 | ✅ 支持 | ✅ 支持| ✅ 支持 |✅ 支持 |
| 接口打印 | ✅ 支持 | ✅ 支持| ✅ 支持 |✅ 支持 |
| 设备管理 | ✅ 支持 | ✅ 支持| ✅ 支持 |✅ 支持 |
| 打印日志 | ✅ 支持 | ✅ 支持| ✅ 支持 |✅ 支持 |
| 模板设计 | ✅ 支持 | ✅ 支持 | ✅ 支持|✅ 支持 |
| 系统设置 | ✅ 支持 | ✅ 支持 | ✅ 支持|✅ 支持 |
| 客户端 | ✅ 支持 | ✅ 支持 | ✅ 支持|✅ 支持 |
| 分享创建 | 3个/天 | ✅ 不限| ✅ 不限 |✅ 不限 |
| 打印次数 | 50次/分享 | ✅ 不限| ✅ 不限 |✅ 不限 |
| 免广告 | ❌ 不支持 | ❌ 不支持| ✅ 支持 |✅ 支持 |
| 自有静态云存储功能和小程序 | ❌ 不支持 | ❌ 不支持| ❌ 不支持 |✅ 支持 |

<!-- | 每个模板可打印次数 | 50次/个 | ✅ 不限| ✅ 不限 |✅ 不限 | -->

咨询、加群、购买授权，可加微信二维码，备注：OnePrinter。

<img src="https://static.wangwei.ltd/image/chens.png"  width="120px" />

## 常见问题

部分Windows10、Windows11电脑可能需要安装WebWiew2组件，请在微软官网下载，并用管理员权限自行安装。下载地址：

<https://developer.microsoft.com/zh-cn/microsoft-edge/webview2/?form=MA13LH>

## 更新日志

#### 1.1.29（2026年06月30日）

<b>修复：</b>

* MicroSoft Office文档引擎多进程转化时导致崩溃的问题；

#### 1.1.28（2026年06月29日）

<b>新增：</b>

* 隔空打印达到限定数量时提醒；
* 我的账户可充值、购买、激活、解绑、获取安全码（外网接口打印）等功能；
* 接口打印（外网）功能，使用接口可自行开发自助打印功能；
* 预览打印客户端的外网打印功能；

#### 1.1.27（2026年06月25日）

<b>新增：</b>

* 支持office和wps原生文档转化，转化效果更佳（重大更新）；

<b>优化：</b>

* 图片打印时的旋转；

<b>优化：</b>

* 小程序聊天窗口中文件发起打印时参数接收的问题；

#### 1.1.26（2026年06月23日）

<b>优化：</b>

* 客户端（预览）打印接口；

#### 1.1.25（2026年06月21日）

<b>新增：</b>

* 隔空打印dwg、cad格式支持；
* 隔空打印的二维码样式；
* 接口打印的外网接口；

<b>优化：</b>

* 界面最大化时不再盖住windows系统任务栏；
* 设备管理和隔空打印列表部分显示细节；
* 左侧菜单护眼模式下文字颜色细节；
* 日志细节；
* 隔空打印详情中的日志；
* 打印日志中的链接；

#### 1.1.24（2026年06月11日）

<b>新增：</b>

* 分享详情的日志功能，可以查看到每一个分享的打印日志；
* 网络设备的备注功能，可以为每一个网络设备添加备注，同时在日志中显示；
* 网络设备的详情功能，可以查看每一个网络设备的打印详情；
  
#### 1.1.23（2026年06月10日）

<b>新增：</b>

* 增加电脑打印客户端功能，支持内/外网接口、支持预览打印、支持虚拟打印机、支持在word、pdf、图片等软件中发起打印，真实还原传统打印模式；
* 增加电脑客户端的接口下载功能；

#### 1.1.22（2026年06月04日）

<b>优化：</b>

* 自动获取打印机时，不再获取虚拟打印机；
* 自动获取打印机对应的纸张；
* 接口测试切换打印机不再设置为默认打印机，改为post传参时传入打印机；
* 内网用户端的“局域网”改成“内网”统一识别；
* 内网路径优化，避免端口修改引发访问失败问题；

#### 1.1.21（2026年06月01日）

<b>新增：</b>

* 隔空共享的打印审核功能。一旦开启，需要在打印日志中进行审核，需审核后才能打印；
* 隔空共享的格式限定，一旦开启，需要适配的格式才能打印；
* 内外网用户端中英文切换；

<b>修复：</b>

* 打印日志中api名称、二维码显示问题；

#### 1.1.20（2026年05月23日）

<b>新增：</b>

* 启用口令直接呼出键盘；
* 增加接口编码（为后续打印客户端准备）；
* 非法打印请求拦截；

<b>优化：</b>

* 去除局域网与互联网的选择，改成自动创建（无外网时只创建内网）；

#### 1.1.19（2026年05月21日）

<b>优化：</b>

* 彩色打印指令（部分彩色打印机可能无效，如无效请扫码联系我们）；
* 隔空打印列表、详情、编辑样式；

<b>修复：</b>

* 本地打印纸张选择问题；

#### 1.1.18（2026年05月19日）

<b>新增：</b>

* 接口打印全面免费（支持网页域名发起打印）；
* 重复启动判断，避免重复启动失误；
* 微信聊天中点击文件打唤起打印；

<b>优化：</b>

* 局域网设备IP扫描逻辑；

<b>修复：</b>

* 隔空打印分享编辑无效/逻辑不严谨的问题；
* 修正首页打印趋势显示问题；

#### 1.1.17（2026年05月18日）

<b>新增：</b>

* 隔空共享与分享日志合并，重新组织了创建/编辑/详情/统计/列表功能；
* 打印通知声音的开关持久化；

<b>优化：</b>

* 隔空共享的名称统一限定为8字以内；
* 隔空共享的纸张状态改为选择；

<b>修复：</b>

* 首页数据图表不正确的问题；

#### 1.1.16（2026年05月16日）

<b>修复：</b>

* 紧急修复横板导致的图片打印失败问题；
* 首页数据统计起止时间问题；

#### 1.1.15（2026年05月16日）

<b>新增：</b>

* 系统首页打印机使用情况、打印类型饼图；
* 开机自动启动设置；

<b>优化：</b>

* 隔空打印创建时的打印机选择，用户端（本地）当只有一台打印机时自动设为默认打印机（无需选择）；

#### 1.1.14（2026年05月15日）

<b>新增：</b>

* 隔空打印的口令功能；
* 隔空打印的颜色功能；
* 隔空打印创建时的Loading状态；
* 接口打印测试功能；

<b>优化：</b>

* 隔空打印布局；
* 接口打印布局；

<b>修复：</b>

* 接口打印日期文件夹创建问题；

#### 1.1.13（2026年05月14日）

<b>优化：</b>

* 打印日志、隔空打印、分享日志的字段保持一致；
* 局域网隔空打印功能；
* 接口打印描述；

#### 1.1.12（2026年05月13日）

<b>新增：</b>

* 统计数据图表；
* 打印分享名称

<b>优化：</b>

* 左侧菜单将更常用的放在前面；
* 更改了小程序二维码的调用方式，避免Base64导致数据库容量过大，重要！
* 调整了界面宽高；
* 修改文件命名规则
* 文件名称按日期存储

<b>修复</b>

* 小程序中指定纸张、指定页码和布局失效的问题；
  
#### 1.1.11（2026年05月12日）

<b>新增：</b>

* 布局设置；
* 打印机多选；
* 纸张多选；
* 互联网打印小程序，用户可以选择微信中的文件、系统文件和相册；

<b>修复：</b>

* 图片太宽时打印不出来的问题；

#### 1.1.10（2026年05月10日）

<b>新增：</b>

* 隔空打印用户端、本地打印增加拖拽文件打印；

<b>修复：</b>

* 打印日志部分参数记录不全问题；

#### 1.1.9（2026年05月09日）

<b>新增：</b>

* 隔空打印的打印份数、双面打印、纸张大小、指定页码等功能；
* 用户端增加【局域网/互联网】标识;

#### 1.1.8（2026年05月08日）

<b>优化：</b>

* 优化分享日志路径、显示、统计；
* 优化打印日志路径、显示、打印机；
* 调整系统设置；

#### 1.1.7（2026年05月07日）

<b>新增：</b>

* 打印日志增加实时显示能力；

<b>优化：</b>

* 文档打印改成LibreOffice；

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

