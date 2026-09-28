/**
 * Charger Network Intelligence — React SPA (hash router)
 * Minimal, hackathon-friendly single-bundle app.
 */

import React from 'https://esm.sh/react@18?dev';
import ReactDOM from 'https://esm.sh/react-dom@18/client?dev';
import { HashRouter, Routes, Route, NavLink } from 'https://esm.sh/react-router-dom@6?dev&deps=react@18';

const GENIE_URL = 'https://adb-984752964297111.11.azuredatabricks.net/embed/genie/rooms/01f10feddc301b60832ca0f79942d00f?o=984752964297111';
const DASHBOARD_URL = 'https://adb-984752964297111.11.azuredatabricks.net/embed/dashboardsv3/01f13e5bb14d165b8e3054511a6c9271?o=984752964297111';

function Header() {
  return React.createElement('header', { className: 'header' },
    React.createElement('div', { className: 'header-brand' },
      React.createElement('img', { className: 'wordmark', src: '/assets/bp-logo.png', alt: 'bp' }),
      React.createElement('span', { className: 'divider' }),
      React.createElement('span', { className: 'title' }, 'Charger Network Intelligence')
    ),
    React.createElement('nav', { className: 'header-nav' },
      React.createElement(NavLink, { to: '/', className: ({ isActive }) => isActive ? 'active' : '' }, 'Ask Genie'),
      React.createElement(NavLink, { to: '/dashboard', className: ({ isActive }) => isActive ? 'active' : '' }, 'Dashboard')
    )
  );
}

function IframePage({ src }) {
  return React.createElement('div', { className: 'page-frame' },
    React.createElement('iframe', { src, allow: 'fullscreen' })
  );
}

function App() {
  return React.createElement(HashRouter, null,
    React.createElement(Header),
    React.createElement(Routes, null,
      React.createElement(Route, { path: '/', element: React.createElement(IframePage, { src: GENIE_URL }) }),
      React.createElement(Route, { path: '/dashboard', element: React.createElement(IframePage, { src: DASHBOARD_URL }) })
    )
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
