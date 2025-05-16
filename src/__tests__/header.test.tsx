import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Header } from "../components/Header";

test("affiche le titre", () => {
  render(<Header title="TaskMaster" />);
  expect(screen.getByText("TaskMaster")).toBeInTheDocument();
});
