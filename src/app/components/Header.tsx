export default function Header() {
  return (
    <header className="w-full h-16 bg-neutral-1 flex items-center justify-between px-4 gap-20">
      <label className="flex flex-1 items-center px-4 py-2 rounded-lg bg-background">
        <span className="material-symbols-outlined">search</span>
        <input
          type="text"
          placeholder="Buscar espacios o colaboradores..."
          className="flex-1 ml-2 bg-transparent focus:outline-none"
        />
      </label>
      <div className="flex items-center gap-8">
        <span className="material-symbols-outlined ">notifications</span>
        <span className="material-symbols-outlined">account_circle</span>
      </div>
    </header>
  );
}
