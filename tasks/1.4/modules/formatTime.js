function formatTime(input) {
    if (input > 60) {
        var minutes = parseInt(input / 60);
        if(minutes > 60){
            var hours = parseInt(minutes / 60);
            var minute = minutes % 60;
            var seconds = input - (minutes * 60);
            console.log('Hours:', hours, 'minutes', minute , 'seconds', seconds);
        }
        else {
            var seconds = input % 60;
            console.log('Minutes:', minutes, 'seconds:', seconds);
        }
    }
    else {
        console.log('seconds:', input);
    }
}

exports.print = formatTime;