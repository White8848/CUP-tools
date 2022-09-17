"ui";

const ui = require('ui');
const fs = require('fs');
const { myEngine } = require('engines');
const path = require('path');
const {
    exec,
    createShell
} = require('shell');
const { Deferred } = require('lang');

const getUrl = new Deferred();

// 显示Web的界面
class WebActivity extends ui.Activity {
    get initialStatusBar() { return { color: '#ffffff', light: true } }

    get layoutXml() {
        return `<vertical><webview id="web" w="*" h="*"/></vertical>`
    }

    onContentViewSet(contentView) {
        this.webview = contentView.findView('web');
        // 监听WebView的控制台消息，打印到控制台
        this.webview.on('console_message', (event, msg) => {
            console.log(`${path.basename(msg.sourceId())}:${msg.lineNumber()}: ${msg.message()}`);
        });
        getUrl.promise().then(url => {
            console.log(`loadUrl:`, url);
            this.webview.loadUrl(url);
        });
    }
}

ui.setMainActivity(WebActivity);
runInProductionMode();

ui.activityLifecycle.on('all_activities_destroyed', () => {
    process.exit();
});

async function runInProductionMode() {
    const handler = require('serve-handler');
    const http = require('http');
    const server = http.createServer((request, response) => {
        return handler(request, response, {
            public: path.join(__dirname, 'dist')
        });
    });
    server.listen(0, async () => {
        getUrl.resolve(`http://localhost:${server.address().port}`);
    });
}

