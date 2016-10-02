# PlayInstalls

## Overview

This is a CasperJS script that scrapes data from your Google Play Developer Console to get the total number of installs you have for all of your apps.

## Usage

Make sure [CasperJS](http://casperjs.org) is installed. Then you can downloads this script

You must give the script exactly two arguments: your email to log into your Google Play Developer Console, and then your password for it.

Execute the following command on your command line:

```
casperjs /path/to/script/play-installs.js <your_email> <your_password>
```

## Examples

Execute this on your command line:

```
casperjs ~/Desktop/CasperJS_Projects/play-installs.js test@mikeyaworski.com testPassword123
```

```
casperjs play-installs.js test@mikeyaworski.com testPassword123
```