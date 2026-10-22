import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const contacts = [
    { href: "mailto:saroot.nae@gmail.com", label: "saroot.nae@gmail.com", Icon: EmailOutlinedIcon },
    { href: "https://github.com/stormnoopper", label: "github.com/stormnoopper", Icon: GitHubIcon },
    { href: "https://www.linkedin.com/in/saroot-fed/", label: "linkedin.com/in/saroot-fed", Icon: LinkedInIcon },
];

export default function Contact() {
    return (
        <div>
            <p className="leading-relaxed text-zinc-600">
                Open to QA and software engineering opportunities. The fastest way to reach me is by email.
            </p>
            <ul className="mt-6 space-y-3">
                {contacts.map(({ href, label, Icon }) => (
                    <li key={href}>
                        <a
                            href={href}
                            {...(href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                            className="inline-flex items-center gap-3 text-zinc-800 transition-colors hover:text-teal-700"
                        >
                            <Icon fontSize="small" className="text-zinc-500" />
                            {label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
