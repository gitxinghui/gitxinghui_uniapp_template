const checkData = function (o) {
    var s = Object.prototype.toString.call(o);
    return s.match(/\[object (.*?)\]/)[1].toLowerCase();
};

['Null',
    'Undefined',
    'Object',
    'Array',
    'String',
    'Number',
    'Boolean',
    'Function',
    'RegExp'
].forEach(function (t) {
    checkData['is' + t] = function (o) {
        return checkData(o) === t.toLowerCase();
    };
}); //给type函数对象封装各个判断的方法

export default checkData;