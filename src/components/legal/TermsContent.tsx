import ReactMarkdown from "react-markdown";
import termsMd from "../../assets/legal/terms.md?raw";

export function TermsContent() {
  return <ReactMarkdown>{termsMd}</ReactMarkdown>;
}
