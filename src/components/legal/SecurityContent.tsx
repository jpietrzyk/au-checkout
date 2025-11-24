import ReactMarkdown from "react-markdown";
import securityMd from "../../assets/legal/security.md?raw";

export function SecurityContent() {
  return <ReactMarkdown>{securityMd}</ReactMarkdown>;
}
