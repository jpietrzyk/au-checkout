import ReactMarkdown from "react-markdown";
import consentsMd from "../../assets/legal/consents.md?raw";

export function ConsentsContent() {
  return <ReactMarkdown>{consentsMd}</ReactMarkdown>;
}
