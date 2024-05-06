export default function Header({
  children,
}: Readonly<{ children?: React.ReactNode }>) {
  return (
    <header className="mx-auto flex w-full items-center justify-between px-4 py-8">
      <a href="/" className="text-xl font-bold text-rose-400">
        <img
          alt="logo"
          loading="lazy"
          width="200"
          height="60"
          decoding="async"
          data-nimg="1"
          className="h-auto w-full"
          src="assets/images/logo.png"
        />
      </a>
      <nav className="flex flex-wrap justify-center gap-2">{children}</nav>
    </header>
  )
}
