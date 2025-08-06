import { Link } from "react-router-dom";
import RippleGrid from "./RippleGrid";

export default function Hero() {
  return (
    <div className="h-screen relative px-6 md:px-8 -mt-16 flex items-center justify-center">
      <div className="mx-auto max-w-2xl text-center z-10">
        <h1 className="text-4xl font-bold tracking-tight text-darkPrimary sm:text-6xl">
          Welcome to Strapi Community
        </h1>
        <p className="mt-6 text-lg leading-8 text-neutral-600">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
          commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-8">
          <Link
            to="/showcase"
            className="rounded-lg bg-primary-600 px-5 py-3 text-base font-semibold leading-7 text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
          >
            Get started
          </Link>
          <Link
            to="/about"
            className="rounded-lg px-5 py-3 text-base font-semibold leading-7 text-darkPrimary border bg-white border-primary-200 hover:bg-primary-100"
          >
            About Us
          </Link>
        </div>
      </div>

      <div className="absolute overflow-hidden h-[700px] top-10 opacity-20" >
        <RippleGrid
          enableRainbow={false}
          gridColor="#c4c2ff"
          rippleIntensity={0.05}
          gridSize={30}
          gridThickness={40}
          mouseInteraction={false}
          mouseInteractionRadius={1.2}
          opacity={0.7}
        />
      </div>
    </div>
  );
}
