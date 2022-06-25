import { Logo } from "./logo";

export function Header() {
    return (
        <header className="w-full py-3  flex items-center justify-center bg-gray-900 border-b border-blue-650">
            <Logo />
        </header>
    )
}