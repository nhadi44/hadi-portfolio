interface TailwindIconProperty {
  width: string;
  height: string;
}

type TailwindIconProps = {
  property: TailwindIconProperty;
};

export const TailwindIcon = ({ property }: TailwindIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={property.width ? property.width : '1em'}
      height={property.height ? property.height : '1em'}
      viewBox="0 0 32 32">
      <path
        fill="#44a8b3"
        d="M9 13.7q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1q-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1m-7 8.4q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1q-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1"></path>
    </svg>
  );
};