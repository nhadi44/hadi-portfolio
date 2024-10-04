interface PrismajsIconProperty {
  width: string;
  height: string;
}

type PrismajsIconProps = {
  property: PrismajsIconProperty;
};

export const PrismajsIcon = ({ property }: PrismajsIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={property.width ? property.width : '1em'}
      height={property.height ? property.height : '1em'}
      viewBox="0 0 16 16">
      <path
        fill="none"
        stroke="#8bd5ca"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8 .5l6.5 12.05l-10 2.95l-3-5zm-3.5 15L8 .5"></path>
    </svg>
  );
};
