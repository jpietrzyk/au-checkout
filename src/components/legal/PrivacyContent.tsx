import ReactMarkdown from "react-markdown";
import privacyMd from "../../assets/legal/privacy.md?raw";

export function PrivacyContent() {
  return <ReactMarkdown>{privacyMd}</ReactMarkdown>;
}
