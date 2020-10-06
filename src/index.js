module.exports = (str, bracketsConfig) => {
    let len = bracketsConfig.length;
    let comparator = "";
    let count = 0;
    let brackets = "";
    while (len !== count) {
        count = 0;
        for (let i = 0; i < len; i += 1) {
            const [first, second] = bracketsConfig[i];
            brackets = first + second;
            comparator = str.replace(brackets, "");
            if (comparator === str) {
                let number = count += 1;
            }
            str = comparator;
        }
    }
    let result = str.length === 0;
    return result;
}
