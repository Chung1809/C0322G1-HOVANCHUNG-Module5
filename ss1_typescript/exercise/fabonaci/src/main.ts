let sum: number = 0;

function fibonacci(n: number): number {
    if (n == 0) {
        return 0
    } else if (n == 1 || n == 2) {
        return 1

    } else {
        return fibonacci(n - 1) + fibonacci(n - 2)

    }
}

for (let i = 0; i < 10; i++) {
    sum += fibonacci(i)
}
console.log(sum)