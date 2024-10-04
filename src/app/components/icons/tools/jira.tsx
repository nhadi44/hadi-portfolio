interface JiraIconProperty {
  width: string;
  height: string;
}

type JiraIconProps = {
  property: JiraIconProperty;
};

export const JiraIcon = ({ property }: JiraIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={property.width ? property.width : '1em'}
      height={property.height ? property.height : '1em'}
      viewBox="0 0 256 256">
      <defs>
        <linearGradient
          id="logosJira0"
          x1="98.031%"
          x2="58.888%"
          y1=".161%"
          y2="40.766%">
          <stop offset="18%" stopColor="#0052cc"></stop>
          <stop offset="100%" stopColor="#2684ff"></stop>
        </linearGradient>
        <linearGradient
          id="logosJira1"
          x1="100.665%"
          x2="55.402%"
          y1=".455%"
          y2="44.727%">
          <stop offset="18%" stopColor="#0052cc"></stop>
          <stop offset="100%" stopColor="#2684ff"></stop>
        </linearGradient>
      </defs>
      <path
        fill="#2684ff"
        d="M244.658 0H121.707a55.5 55.5 0 0 0 55.502 55.502h22.649V77.37c.02 30.625 24.841 55.447 55.466 55.467V10.666C255.324 4.777 250.55 0 244.658 0"></path>
      <path
        fill="url(#logosJira0)"
        d="M183.822 61.262H60.872c.019 30.625 24.84 55.447 55.466 55.467h22.649v21.938c.039 30.625 24.877 55.43 55.502 55.43V71.93c0-5.891-4.776-10.667-10.667-10.667"></path>
      <path
        fill="url(#logosJira1)"
        d="M122.951 122.489H0c0 30.653 24.85 55.502 55.502 55.502h22.72v21.867c.02 30.597 24.798 55.408 55.396 55.466V133.156c0-5.891-4.776-10.667-10.667-10.667"></path>
    </svg>
  );
};
