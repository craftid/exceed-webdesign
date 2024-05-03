import { ModeToggle } from "@/components/mode-toggle"

export default function Header({
  children,
}: Readonly<{ children?: React.ReactNode }>) {
  return (
    <header className="mx-auto flex w-full items-center justify-between px-4 py-8">
      <a href="/" className="text-xl font-bold text-rose-400">
        Mayabytes
      </a>
      <nav className="flex flex-wrap justify-center gap-2">{children}</nav>
      <div>
        <ModeToggle />
      </div>
    </header>
  )
}
