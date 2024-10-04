interface DockerIconProperty {
  width: string;
  height: string;
}

type DockerIconProps = {
  property: DockerIconProperty;
};

export const DockerIcon = ({ property }: DockerIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={property.width ? property.width : '1.39em'}
      height={property.height ? property.height : '1em'}
      viewBox="0 0 256 185">
      <path
        fill="#2396ed"
        d="M250.716 70.497c-5.765-4-18.976-5.5-29.304-3.5c-1.2-10-6.725-18.749-16.333-26.499l-5.524-4l-3.844 5.75c-4.803 7.5-7.205 18-6.485 28c.24 3.499 1.441 9.749 5.044 15.249c-3.362 2-10.328 4.5-19.455 4.5H1.155l-.48 2c-1.682 9.999-1.682 41.248 18.014 65.247c14.892 18.249 36.99 27.499 66.053 27.499c62.93 0 109.528-30.25 131.386-84.997c8.647.25 27.142 0 36.51-18.75c.24-.5.72-1.5 2.401-5.249l.961-2zM139.986 0h-26.42v24.999h26.42zm0 29.999h-26.42v24.999h26.42zm-31.225 0h-26.42v24.999h26.42zm-31.225 0H51.115v24.999h26.421zM46.311 59.998H19.89v24.999h26.42zm31.225 0H51.115v24.999h26.421zm31.225 0h-26.42v24.999h26.42zm31.226 0h-26.422v24.999h26.422zm31.225 0H144.79v24.999h26.422z"></path>
    </svg>
  );
};
