import { React,} from "react";
import { ThemeProvider } from "../context/ThemeContext";
import Container from './Container'

export default function Training() {
  
  return (
    <ThemeProvider>
      <Container/>
    </ThemeProvider>
  );
}
