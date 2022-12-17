import * as React from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import Demo from './demo';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/material-components-web/material-components-web.scss";

const rootElement: any = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
<React.StrictMode>
    <StyledEngineProvider injectFirst>
      <Demo />
    </StyledEngineProvider>
  </React.StrictMode>
);