import { Logo } from "./logo";

export function Header() {
    return (
        <header className="w-full py-5 flex items-center justify-center bg-blue-600 border-b border-blue-650">
            <Logo />
        </header>
    )
}