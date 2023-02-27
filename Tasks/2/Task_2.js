let bigIntCalculator = {
    read() {
        this.x = BigInt(+prompt("Введите первое число"))
        this.y = BigInt(+prompt("Введите второе число"))
    },
    sum (x, y) {
        return this.x + this.y
    },
    sub(x, y) {
        return this.x - this.y
    },
    div (x, y) {
        return this.x / this.y
    },
    mul (x ,y) {
        return this.x * this.y
    }

}
bigIntCalculator.read()
alert(bigIntCalculator.sum())
alert(bigIntCalculator.sub())
alert(bigIntCalculator.div())
alert(bigIntCalculator.mul())