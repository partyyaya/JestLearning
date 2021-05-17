test('測試數值 是否小於 2000', () => {
    const num1 = 1000;
    const num2 = 900;
    expect(num1 + num2).toBeLessThan(2000);
});

test('測試數值 是否小於或等於 2000', () => {
    const num1 = 1000;
    const num2 = 1000;
    expect(num1 + num2).toBeLessThanOrEqual(2000);
});

test('測試 email 格式是否正確', () => {
    expect('test@gmail.com').toMatch(
        /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/
    );
});

test('陣列是否包含 Casper', () => {
    const newArray = ['Bob', 'Someone', 'Casper'];
    expect(newArray).toContain('Casper');
});

// describe: 提供一個群組的描述
describe('僱員的行為測試', () => {
    test('點餐內容與顧客需求相符', () => { });
    test('結帳金額正確', () => { });
    test('找零的金額正確', () => { });
});