const employee = {
  Change(bill, price) {
    return bill - price;
  }
};

const funs = {
  isNull: () => null,
  isUndefined: () => undefined,
  isNaN: () => NaN,
  checkValue: (val) => val,
  createUser: () => {
    return {
      name: 'ming'
    }
  }
}

module.exports = {employee, funs};