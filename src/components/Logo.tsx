import logoImage from "../assets/logo.png"; // if logo.png is in src/assets

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <img src={logoImage} alt="Codeforces Logo" className="h-11" />
    </div>
  );
}
