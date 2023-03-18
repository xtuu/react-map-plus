import logo from "../logo.svg";

export const ReactLogo = () => {
  return (
    <img
      src={logo}
      alt='React Logo'
      className="fixed bottom-2 right-2 w-32 h-32 animate-pulse"
    />
  )
}
