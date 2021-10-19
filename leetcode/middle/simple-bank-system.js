/**
 * https://leetcode.com/problems/simple-bank-system/
 * @param {number[]} balance
 */
 var Bank = function(balance) {
    this.balance = balance;
    this.n = this.balance.length;
};

/** 
 * @param {number} account1 
 * @param {number} account2 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.transfer = function(account1, account2, money) {
    if (account1 > this.n || account2 > this.n) return false;
    account1--;
    account2--;
    if (this.balance[account1] < money) return false;
    this.balance[account1] -= money;
    this.balance[account2] += money;
    return true;
};

/** 
 * @param {number} account 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.deposit = function(account, money) {
    if (account > this.n) return false;
    account--;
    this.balance[account] += money;
    
    return true;
};

/** 
 * @param {number} account 
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.withdraw = function(account, money) {
    if (account > this.n) return false;
    account--;
    if (this.balance[account] < money) return false;
    this.balance[account] -= money;
    return true;
};

/** 
 * Your Bank object will be instantiated and called as such:
 * var obj = new Bank(balance)
 * var param_1 = obj.transfer(account1,account2,money)
 * var param_2 = obj.deposit(account,money)
 * var param_3 = obj.withdraw(account,money)
 */