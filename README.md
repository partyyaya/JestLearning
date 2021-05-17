## jest(unit test) 使用

### 安裝
- 安裝 jest: npm install jest --save-dev
- 生成 jest.config.js: npx jest --init (呼叫 node_modules 裡面的 jest命令，進行jest的初始化)
- 安裝 vscode jest 插件 (可自動化測試是否成功)
- 新增測試檔案
  - transaction.js (要測試的程式檔)
  - transaction.test.js (該程式的測試檔)
- 新增 package.json scripts 指令
  - "test": "jest" (執行測試)
  - "watch": "jest --watchAll" (持續用監控的形式，而非單一次報告)  
