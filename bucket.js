buckets = require('buckets');
buckets({
    buildsPath: __dirname + "/builds/",
    // Add your Gmail to use features that send email (Mandrill and others also supported)
    smtp: "foo@gmail.com"
    // Additional configuration…
});