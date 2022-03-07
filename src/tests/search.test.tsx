/* eslint-disable testing-library/prefer-screen-queries */
import ReactDOM, { unmountComponentAtNode } from "react-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Results } from "../components/Results";

import { store } from "../store";

let container: any = null;

const ResultsApp = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Results />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("should render search results without crashing", () => {
  ReactDOM.render(<ResultsApp />, container);
});

describe("Input value", () => {
  it("updates text value to coffee", () => {
    const { getByPlaceholderText } = render(<ResultsApp />);
    const searchInput = getByPlaceholderText("Food type, restaurant...");

    fireEvent.change(searchInput, { target: { value: "coffee" } });
    /* @ts-ignore */
    expect(searchInput.value).toEqual("coffee");
  });

  it("performs a search when page is renderned", async () => {
    render(<ResultsApp />);
    const searchButton = screen.getByText("Search");
    fireEvent.click(searchButton);

    const content = await screen.findByText(/入鹿TOKYO/i);
    expect(content).toHaveTextContent("入鹿TOKYO");
  });
});
