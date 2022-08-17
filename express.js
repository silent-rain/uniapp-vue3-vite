const path = require('path');
const express = require('express');
const history = require('connect-history-api-fallback');

const app = express();
app.use(history({ htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'] }));
app.use(express.static(path.join(__dirname, './dist')));
app.use('/logo.svg', (req, res) => res.end(''));

// 启动服务
app.set('host', process.env.IP || 'localhost');
app.set('port', process.env.PORT || 8000);
const server = app.listen(app.get('port'), app.get('host'), () => {
  const address = server.address();
  if (address) {
    if (typeof address === 'string') {
      console.log('Express server listening on:', address);
    } else {
      console.log('Express server listening on port:', address.port);
    }
  }
});
