import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between p-4 px-8 xl:px-32 bg-primary">
      {/* App name and tagline */}
      <div>
        <div className="text-4xl font-extrabold leading-7 text-primary-foreground">
          Form Forge{" "}
          <span className="text-xl">
            v0.1.0 <i className="text-sm">(beta)</i>
          </span>
        </div>
        <div className="text-md leading-6 text-primary-foreground">
          Build forms effortlessly.
        </div>
      </div>

      {/* Mode toggler */}
      <ModeToggle />
    </nav>
  );
};

export default Navbar;
