# electron-vue3-vite
a electron+vue3+vite templete

## install

1. set npm proxy (Options )

```bash
npm config set registry https://registry.npm.taobao.org/
npm config set ELECTRON_MIRROR http://npm.taobao.org/mirrors/electron/
```
2. install npm packages
```bash
npm install
```
3. run
```bash
npm run serve
```
4. build
```
npm run build
```

## custom

### change hot reload port

default port is 5000

package.json
```json
 "scripts": {
    "dev": "vite",
    "electron": "wait-on tcp:0.0.0.0:5000 && cross-env NODE_ENV=development electron .",
    "serve": "concurrently -k \"npm run dev\" \"npm run electron\"",
    "build": "vite build && electron-builder"
  },
```

electron/main.js
```javascript
 mainWindow.loadURL(
    NODE_ENV === 'development'
      ? 'http://localhost:5000'
      : `file://${path.join(__dirname, '../dist/index.html')}`
  );
```

vite.config.ts
```typescript
 server: {
    host: '0.0.0.0',
    port: 5000,
    proxy: {
    },
  },
```

### change publish dir

default publish dir is "publish"

vite.config.ts
```typescript
 build: {
    outDir: '../publish/vue',
    emptyOutDir: true,
  },
```

electron/main.js
```javascript
mainWindow.loadURL(
    NODE_ENV === 'development'
      ? 'http://localhost:5000'
      : `file://${path.join(__dirname, '../publish/vue/index.html')}`
  );
```

package.json
```json
    "files": [
      "publish/vue/**/*",
      "electron/**/*"
    ],
    "directories": {
      "buildResources": "assets",
      "output": "publish/electron"
    }
```