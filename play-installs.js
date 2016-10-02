var casper = require('casper').create();

this.echo('Starting up...');
casper.start('https://play.google.com/apps/publish/', function() {
 
  casper.then(function() {
    this.echo('Logging in...');
    this.sendKeys('input[type="email"]', casper.cli.args[0]);
    this.click('#next');

    casper.then(function() {
      casper.waitForSelector('#Passwd', function() {
        casper.waitForSelector('#signIn', function() {
          this.sendKeys('input[type="password"]', casper.cli.args[1]);
          this.click('#signIn');
          this.echo('Logged in', 'INFO');
          this.echo('Waiting for page to load...');

          casper.waitForUrl(/https:\/\/play\.google\.com\/apps\/publish.*/, function() {
            casper.wait(5000, function() {
              var aTags = this.evaluate(function() {
                var as = document.querySelectorAll('a');
                var re = [];
                for (var i = 0; i < as.length; i++) {
                  if (as[i] && as[i].hasAttribute('data-column')
                      && as[i].getAttribute('data-column') == 'INSTALLS') {
                    re.push(as[i].innerHTML);
                  }
                }
                return re;
              });

              var total = 0;
              for (var i = 0; i < aTags.length; i++) {
                if (aTags[i]) {
                  var totalInstalls = aTags[i].substring(aTags[i].indexOf("&nbsp;&nbsp;/&nbsp;&nbsp;") + 25);
                  this.echo(totalInstalls);
                  total += parseInt(totalInstalls.replace(',', ''));
                }
              }
              this.echo(total, 'INFO');
            });
          });
        });
      });
    });
  });
});

casper.run();
