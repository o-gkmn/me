import React, { ReactElement } from "react"; // Import ReactElement
import type { IconType, IconBaseProps } from "react-icons"; // IconBaseProps might be needed for the assertion

interface IconProps {
  icon: IconType;
  label: string;
  href: string;
}

const Icon = ({ icon: IconFromProp, label, href }: IconProps) => {
  // Assert that IconFromProp conforms to a component that returns ReactElement
  // JSX.Element is compatible with ReactElement.
  // IconBaseProps includes common SVG attributes like className.
  const TypedIconComponent = IconFromProp as (
    props: IconBaseProps
  ) => ReactElement;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative"
      aria-label={label}
    >
      <div className="relative p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/20 group-hover:to-pink-500/20 rounded-xl transition-all duration-300"></div>
        <TypedIconComponent className="relative text-2xl text-white/70 group-hover:text-white transition-colors duration-300" />
      </div>
    </a>
  );
};

export default Icon;
