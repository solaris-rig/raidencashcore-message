# RaidenCash Message Verification and Signing for RaidenCashCore


[![NPM Package](https://img.shields.io/npm/v/raidencashcore-message.svg?style=flat-square)](https://www.npmjs.org/package/raidencashcore-message)
[![Build Status](https://img.shields.io/travis/solaris-rig/raidencashcore-message.svg?branch=master&style=flat-square)](https://travis-ci.org/solaris-rig/raidencashcore-message)
[![Coverage Status](https://img.shields.io/coveralls/bitpay/raidencashcore-message.svg?style=flat-square)](https://coveralls.io/r/solaris-rig/raidencashcore-message?branch=master)

raidencashcore-message adds support for verifying and signing Raidencash messages in [Node.js](http://nodejs.org/) and web browsers.

See [the main raidencashcore repo](https://github.com/solaris-rig/raidencashcore) for more information.

## Getting Started

```sh
npm install raidencashcore-message
```

```sh
bower install raidencashcore-message
```

To sign a message:

```javascript
var bitcore = require('raidencashcore-lib');
var Message = require('raidencashcore-message');

var privateKey = bitcore.PrivateKey.fromWIF('cPBn5A4ikZvBTQ8D7NnvHZYCAxzDZ5Z2TSGW2LkyPiLxqYaJPBW4');
var signature = Message('hello, world').sign(privateKey);
```

To verify a message:

```javascript
var address = 'n1ZCYg9YXtB5XCZazLxSmPDa8iwJRZHhGx';
var signature = 'H/DIn8uA1scAuKLlCx+/9LnAcJtwQQ0PmcPrJUq90aboLv3fH5fFvY+vmbfOSFEtGarznYli6ShPr9RXwY9UrIY=';
var verified = Message('hello, world').verify(address, signature);
```

## Contributing

See [CONTRIBUTING.md](https://github.com/solaris-rig/raidencashcore/blob/master/CONTRIBUTING.md) on the main raidencashcore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/bitpay/bitcore/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.

