var arDrone    = require('ar-drone'),
    fs         = require('fs'),
    dateFormat = require('dateformat');

var client    = arDrone.createClient();
var pngStream = client.getPngStream();

function takePhoto() {
    pngStream.once('data', function (data) {
        var now = new Date();
        var nowFormat = dateFormat(now, 'isoDateTime');

        fs.writeFile('image-' + nowFormat + '.png', data, function (err) {
            if (err)
                console.error(err);
            else
                console.log('Photo saved');
        })
    });
}

client.takeoff();

client.after(3000, function () {
    this.clockwise(0.5);

    setInterval(function () {
        takePhoto();
    }, 1000);
});
