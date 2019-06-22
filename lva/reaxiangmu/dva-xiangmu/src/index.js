import dva from 'dva';
import './index.css';
import 'weui';
// import 'weui'

// 1. Initialize
const app = dva();

// 2. Plugins  //插件
// app.use({});

// 3. Model   //仓库
app.model(require('./models/example').default);
app.model(require('./models/students').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
