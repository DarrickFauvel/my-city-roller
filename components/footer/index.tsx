import { currentYear } from "@/lib/getCurrentYear";

export default function Footer() {
    return <footer className="px-4 py-2">
        <div className="text-sm">&copy; {currentYear} <a href="darrickdevelops.com">Darrick Develops</a></div>
    </footer>
}