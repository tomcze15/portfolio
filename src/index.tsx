import ReactDOM from 'react-dom/client';
import App from './view/App';

import './i18n';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<App />);
