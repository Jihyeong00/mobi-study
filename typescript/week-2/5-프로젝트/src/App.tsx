import { DEV } from '@apis/apis.ts';
import { mswServer } from '@mock/browser.ts';

function App() {
  if (DEV) {
    mswServer();
  }

  return <>:)</>;
}

export default App;
