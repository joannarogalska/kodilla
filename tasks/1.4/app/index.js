var formatTime = require('../modules/formatTime');

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    process.stdout.write('Podaj czas w sekundach\n');
    var input = process.stdin.read();

    if(input !== null) {
        process.stdout.write(`To jest Twój czas : ${input}\n`);

        formatTime.print(input);

    }
});

