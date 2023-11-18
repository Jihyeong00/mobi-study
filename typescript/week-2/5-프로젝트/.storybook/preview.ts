import type { Preview } from "@storybook/react";
import "../src/index.css";
import {mswServer} from "../src/__mock__/browser";

mswServer()

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
