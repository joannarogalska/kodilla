process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    process.stdout.write(`Welcome! You are using node version: ${process.version}\n`);
    process.stdout.write(`Your language system is: ${process.platform}\n`);
    process.stdout.write('If you want exit write "/exit"\n');
    var input = process.stdin.read();
    if(input !== null) {
        // teraz jest sens cokolwiek wyświetlać :)
        var instruction = input.toString().trim();
        switch (instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
        }

    }
});
