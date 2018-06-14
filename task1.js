function palindrom_check(str) {
    lower = str.toLowerCase();
    abc_only = lower.replace(/[^a-z]/g, '');
    for (var i=0; i <= abc_only.length / 2; i++) {
        one = abc_only.charCodeAt(i);
        two = abc_only.charCodeAt(abc_only.length - 1 - i);
        if (one != two) {
            return 'NO'
        }
    }
    return 'YES'
}

function main() {
    process.stdout.write(palindrom_check(process.argv[2]));
}

main();
