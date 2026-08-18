import {
    Post
} from "@/util/http";
import {
    message
} from "@/util/common.js";

const api = "http://127.0.0.1:10081/";
// const api = "http://192.168.31.104:10081/"
// const api = "https://api.oneprinter.cn/api/"
const secret_key = "" //使用外网接口时，需要安全码，请在OnePrinter界面中【我的账户】里获取


// 获取打印机数据
// 调用时请使用:res = await getPrinter()
export async function getPrinter() {
    let obj = {
        secret_key: secret_key
    };
    const res = await Post(api + "getPrinter", obj);
    if (res.data.code === 1) {
        message(res.data.info, "success");
        return res.data.data
    } else {
        message(res.data.info, "error");
    }
}

// 传入待打印文件的url或base64或template
// 调用时请使用:res = await toPrint("hp","a4",1,"url","base64","template")
// 打印机和纸张大小请使用getPrinter中获取到的
export async function toPrint(printer, paper_size, copies, url, base64, template) {
    let obj = {
        secret_key: secret_key,
        printer: printer,
        paper_size: paper_size,
        copies: copies,
        url: url,
        base64: base64,
        template: template,
    };
    const res = await Post(api + "print", obj);
    if (res.data.code === 1) {
        message(res.data.info, "success");
    } else {
        message(res.data.info, "error");
    }
}
