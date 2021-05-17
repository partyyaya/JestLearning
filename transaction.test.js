const { employee, funs } = require('./transaction');

test('找零測試', () => {
    const bill = 200;
    const price = 127;

    // 期望找零結果是符合預期的
    expect(employee.Change(bill, price)).toBe(73);
});

// toBeNull：測試回傳值是否為 null
test('測試 funs 是否為 Null', () => {
    expect(funs.isNull()).toBeNull();
});

// toBeUndefined：測試回傳值是否為 undefined
test('測試 funs 是否為 Undefined', () => {
    expect(funs.isUndefined()).toBeUndefined();
});

// toBeNaN：測試回傳值是否為 NaN
test('測試 funs 是否為 是否為 NaN', () => {
    expect(funs.isNaN()).toBeNaN();
});

// 以下是判斷真值與
test('測試 funs 是否為 是否為假值', () => {
    expect(funs.checkValue(0)).toBeFalsy();
});
test('測試 funs 是否為 是否為真值', () => {
    expect(funs.checkValue(1)).toBeTruthy();
});

// toEqual:使用 Object.is 比對物件或陣列內的純值；也由於是深度比對，就如同在物件內將值一一取出重新比對
test('測試 funs 為 ming', () => {
    expect(funs.createUser()).toEqual({
        name: 'ming'
    });
});