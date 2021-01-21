// 认证
const identity_format = (num=0)=> {
    switch (num) {
        case 0:
            return '普通用户'
            break;
        case 1:
            return '普通会员'
            break;
        case 2:
            return '企业会员'
            break;
        case 3:
            return '代言人'
            break;
        default:
            return '普通用户'
            break;
    }
}

// 馈赠分来源
const pointsType_format = (num=1)=> {
    switch (num) {
        case 1:
            return '充值余额'
            break;
        case 2:
            return '余额提现'
            break;
        case 3:
            return '提现手续费'
            break;
        case 4:
            return '余额转换成馈赠分'
            break;
        case 5:
            return '直接充值馈赠分'
            break;
        case 6:
            return '好友赠送馈赠分'
            break;
        case 7:
            return '赠送馈赠分给好友'
            break;
        case 8:
            return '建设分挂卖'
            break;
        case 9:
            return '馈赠分转换成建设分'
            break;
        case 10:
            return '作为消费者所得的建设分'
            break;
        case 11:
            return '做为商家所得建设分'
            break;
        case 12:
            return '作为商家推荐人所得的建设分'
            break;
        case 13:
            return '作为消费者推荐人所得建设分'
            break;
        case 14:
            return '作为活粉所得建设分'
            break;
        default:
            return '充值余额'
            break;
    }
}

// 车辆类型
const carType_format = (num=1)=> {
    switch (num) {
        case 17:
            return '充值余额'
            break;
        case 18:
            return '余额提现'
            break;
        case 19:
            return '提现手续费'
            break;
        case 20:
            return '余额转换成馈赠分'
            break;
        case 21:
            return '直接充值馈赠分'
            break;
        case 22:
            return '好友赠送馈赠分'
            break;
        case 23:
            return '赠送馈赠分给好友'
            break;
        case 24:
            return '建设分挂卖'
            break;
        case 25:
            return '馈赠分转换成建设分'
            break;
        case 26:
            return '作为消费者所得的建设分'
            break;
        case 27:
            return '做为商家所得建设分'
            break;
        case 28:
            return '作为商家推荐人所得的建设分'
            break;
        case 29:
            return '作为消费者推荐人所得建设分'
            break;
        case 30:
            return '飞翼车'
            break;
        default:
            return '充值余额'
            break;
    }
}

// 订单类型
const order_format = (num=1)=> {
    switch (num) {
        case 1:
            return '待确认'
            break;
        case 2:
            return '待付款'
            break;
        case 3:
            return '审核中'
            break;
        case 4:
            return '运输中'
            break;
        case 5:
            return '已完成'
            break;
        default:
            return '已完成'
            break;
    }
}
//  订单类型提示
const orderTip_format = (num=1)=> {
    switch (num) {
        case 1:
            return '等待车主确认订单'
            break;
        case 2:
            return '请尽快支付运费'
            break;
        case 3:
            return '平台火速为您审核中'
            break;
        case 4:
            return '司机运输中，到达后请自审货物'
            break;
        case 5:
            return '订单已完成啦'
            break;
        default:
            return '订单已完成啦'
            break;
    }
}


// 我的需求车单类型
const demandCarorder_format = (num=1)=> {
    switch (num) {
        case 0:
            return '取消'
            break;
        case 1:
            return '审核中'
            break;
        case 2:
            return '审核完成'
            break;
        case 3:
            return '抢单中'
            break;
        case 4:
            return '待付款'
            break;
        case 5:
            return '已付款，待审核'
            break;
        case 6:
            return '货主付款成功'
            break;
        case 8:
            return '运输中'
            break;
        case 9:
            return '上传收据成功'
            break;
        case 10:
            return '货主确认订单'
            break;
        case 12:
            return '已完成'
            break;
        case 13:
            return '发布订单审核不通过'
            break;
        case 14:
            return '付款交易审核不通过'
            break;
        case 15:
            return '核实损耗费'
            break;
        default:
            return '已完成'
            break;
    }
}

// 我的需求车单类型提示
const demandCarOrderTip_format = (num=1)=> {
    switch (num) {
        case 0:
            return '订单已取消'
            break;
        case 1:
            return '平台火速为您审核中'
            break;
        case 2:
            return '订单已通过审核，可以抢单了'
            break;
        case 3:
            return '有货主抢单了，请尽快确认'
            break;
        case 4:
            return '等待货主付款'
            break;
        case 5:
            return '货主已付款，平台快速审核中'
            break;
        case 6:
            return '平台审核货主支付成功'
            break;
        case 8:
            return '交易运输中'
            break;
        case 9:
            return '已上传到货收据，等待确认'
            break;
        case 10:
            return '货主确认收据中'
            break;
        case 12:
            return '已完成'
            break;
        case 13:
            return '发布订单审核不通过'
            break;
        case 14:
            return '付款交易审核不通过'
            break;
        case 15:
            return '核实损耗费用('
            break;
        default:
            return '订单已完成啦'
            break;
    }
}


// 我的订单-抢车单订单类型
const grabCarorder_format = (num=1)=> {
    switch (num) {
        case 0:
            return '取消'
            break;
        case 1:
            return '审核中'
            break;
        case 2:
            return '审核完成'
            break;
        case 3:
            return '抢单中'
            break;
        case 4:
            return '待付款'
            break;
        case 5:
            return '已付款'
            break;
        case 6:
            return '货主付款成功'
            break;
        case 8:
            return '运输中'
            break;
        case 9:
            return '确认交易完成收据'
            break;
        case 10:
            return '已确认收货'
            break;
        case 12:
            return '已完成'
            break;
        case 13:
            return '发布订单审核不通过'
            break;
        case 14:
            return '付款交易审核不通过'
            break;
        case 15:
            return '核实损耗费'
            break;
        default:
            return '已完成'
            break;
    }
}

// 我的订单-抢车单类型提示
const grabCarOrderTip_format = (num=1)=> {
    switch (num) {
        case 0:
            return '订单已取消'
            break;
        case 1:
            return '平台火速为您审核中'
            break;
        case 2:
            return '订单已通过审核，可以抢单了'
            break;
        case 3:
            return '等待车主确认中'
            break;
        case 4:
            return '请尽快付款'
            break;
        case 5:
            return '已付款，平台快速审核中'
            break;
        case 6:
            return '平台审核货主支付成功'
            break;
        case 8:
            return '交易运输中'
            break;
        case 9:
            return '已上传到货收据，等待确认'
            break;
        case 10:
            return '已确认收货，等待运营转账给车主'
        case 12:
            return '已完成'
            break;
        case 13:
            return '发布订单审核不通过'
            break;
        case 14:
            return '付款交易审核不通过'
            break;
        case 15:
            return '核实损耗费用('
            break;
        default:
            return '订单已完成啦'
            break;
    }
}


// 我的需求车单类型
const demandFreightorder_format = (num=1)=> {
    switch (num) {
        case 0:
            return '取消'
            break;
        case 1:
            return '审核中'
            break;
        case 2:
            return '审核完成'
            break;
        case 3:
            return '抢单中'
            break;
        case 4:
            return '待付款'
            break;
        case 5:
            return '已付款，待审核'
            break;
        case 6:
            return '货主付款成功'
            break;
        case 8:
            return '运输中'
            break;
        case 9:
            return '上传收据成功'
            break;
        case 10:
            return '货主确认订单'
            break;
        case 12:
            return '已完成'
            break;
        case 13:
            return '发布订单审核不通过'
            break;
        case 14:
            return '付款交易审核不通过'
            break;
        case 15:
            return '核实损耗费'
            break;
        default:
            return '已完成'
            break;
    }
}

// 我的需求车单类型提示
const demandFreightOrderTip_format = (num=1)=> {
    switch (num) {
        case 0:
            return '订单已取消'
            break;
        case 1:
            return '平台火速为您审核中'
            break;
        case 2:
            return '订单已通过审核，可以抢单了'
            break;
        case 3:
            return '有车主抢单了，请尽快确认'
            break;
        case 4:
            return '等待货主付款'
            break;
        case 5:
            return '货主已付款，平台快速审核中'
            break;
        case 6:
            return '平台审核货主支付成功'
            break;
        case 8:
            return '交易运输中'
            break;
        case 9:
            return '已上传到货收据，等待确认'
            break;
        case 10:
            return '货主确认收据中'
            break;
        case 12:
            return '已完成'
            break;
        case 13:
            return '发布订单审核不通过'
            break;
        case 14:
            return '付款交易审核不通过'
            break;
        case 15:
            return '核实损耗费用('
            break;
        default:
            return '订单已完成啦'
            break;
    }
}


// 我的需求车单类型
const grabFreightorder_format = (num=1)=> {
    switch (num) {
        case 0:
            return '取消'
            break;
        case 1:
            return '审核中'
            break;
        case 2:
            return '审核完成'
            break;
        case 3:
            return '抢单中'
            break;
        case 4:
            return '待付款'
            break;
        case 5:
            return '已付款，待审核'
            break;
        case 6:
            return '货主付款成功'
            break;
        case 8:
            return '运输中'
            break;
        case 9:
            return '上传收据成功'
            break;
        case 10:
            return '货主已确认订单'
            break;
        case 12:
            return '已完成'
            break;
        case 13:
            return '发布订单审核不通过'
            break;
        case 14:
            return '付款交易审核不通过'
            break;
        case 15:
            return '核实损耗费'
            break;
        default:
            return '已完成'
            break;
    }
}

// 我的需求车单类型提示
const grabFreightOrderTip_format = (num=1)=> {
    switch (num) {
        case 0:
            return '订单已取消'
            break;
        case 1:
            return '平台火速为您审核中'
            break;
        case 2:
            return '订单已通过审核，可以抢单了'
            break;
        case 3:
            return '有车主抢单了，请尽快确认'
            break;
        case 4:
            return '等待货主付款'
            break;
        case 5:
            return '货主已付款，平台快速审核中'
            break;
        case 6:
            return '平台审核货主支付成功'
            break;
        case 8:
            return '交易运输中'
            break;
        case 9:
            return '已上传到货收据，等待确认'
            break;
        case 10:
            return '已确认，等待平台付款给车主'
            break;
        case 12:
            return '已完成'
            break;
        case 13:
            return '发布订单审核不通过'
            break;
        case 14:
            return '付款交易审核不通过'
            break;
        case 15:
            return '核实损耗费用('
            break;
        default:
            return '订单已完成啦'
            break;
    }
}

//取截单元,单位
const moneyFormat = (arg = 0)=>{
    let val = Number(arg);
    if (typeof val != 'number') {
        return 0
    }
    
    let str1 = val.toLocaleString() + '';
    let str = str1.replace(/,/g, "");
    let strLength = str.length;

    if (strLength <= 3) {
        return str;
    } else if (strLength >= 4 && strLength <= 6) {

        return str.substring(0, strLength - 3) + '.' + str.substring(strLength - 3, strLength - 1) + '千';
    } else if (strLength >= 7 && strLength <= 9) {

        return str.substring(0, strLength - 6) + '.' + str.substring(strLength - 6, strLength - 4) + 'M';
    } else if (strLength >= 10 && strLength <= 12) {

        return str.substring(0, strLength - 9) + '.' + str.substring(strLength - 9, strLength - 7) + 'G';
    } else if (strLength >= 13 && strLength <= 15) {

        return str.substring(0, strLength - 12) + '.' + str.substring(strLength - 12, strLength - 10) + 'T';
    } else if (strLength >= 16 && strLength <= 18) {

        return str.substring(0, strLength - 15) + '.' + str.substring(strLength - 15, strLength - 13) + 'P';
    } else if (strLength >= 19 && strLength <= 21) {

        return str.substring(0, strLength - 18) + '.' + str.substring(strLength - 18, strLength - 16) + 'E';
    } else if (strLength >= 22 && strLength <= 24) {

        return str.substring(0, strLength - 21) + '.' + str.substring(strLength - 21, strLength - 19) + 'Z';
    } else if (strLength >= 25 && strLength <= 27) {

        return str.substring(0, strLength - 24) + '.' + str.substring(strLength - 24, strLength - 22) + 'Y';
    } else if (strLength >= 28 && strLength <= 30) {

        return str.substring(0, strLength - 27) + '.' + str.substring(strLength - 27, strLength - 25) + 'S';
    } else if (strLength >= 31 && strLength <= 33) {

        return str.substring(0, strLength - 30) + '.' + str.substring(strLength - 30, strLength - 28) + 'O';
    } else if (strLength >= 34 && strLength <= 36) {

        return str.substring(0, strLength - 33) + '.' + str.substring(strLength - 33, strLength - 31) + 'N';
    } else if (strLength >= 37 && strLength <= 39) {

        return str.substring(0, strLength - 36) + '.' + str.substring(strLength - 36, strLength - 34) + 'H';
    } else if (strLength >= 40 && strLength <= 42) {

        return str.substring(0, strLength - 39) + '.' + str.substring(strLength - 39, strLength - 37) + 'X';
    }
    if (strLength > 42) {
        return 999 + 'max';
    }
}


export {
    identity_format,
    pointsType_format,
    carType_format,
    order_format,
    orderTip_format,
    demandCarorder_format,
    demandCarOrderTip_format,
    grabCarorder_format,
    grabCarOrderTip_format,
    demandFreightorder_format,
    demandFreightOrderTip_format,
    grabFreightorder_format,
    grabFreightOrderTip_format,
    moneyFormat
}