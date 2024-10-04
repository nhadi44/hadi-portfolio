interface ProgressProps {
  title: string;
  percentage: string;
  wrapperStyle?: string;
  barStyle?: string;
  barWidth?: string;
}

type ProgressPropsType = {
  props: ProgressProps;
};

export const Progress = ({ props }: ProgressPropsType) => {
  return (
    <div className="text-sm">
      <h1 className="mb-2">{props.title}</h1>
      <div className={props.wrapperStyle}>
        <div className={props.barStyle} style={{ width: props.barWidth }}>
          {props.percentage}
        </div>
      </div>
    </div>
  );
};
