'use client';

interface Badges {
  text?: string;
  color?: string;
  darkColor?: string;
  backgroundColor?: string;
  darkBackgroundColor?: string;
  fontSize?: string;
  fontWeight?: string;
}

type BadgesProps = {
  data: Badges;
};

export const Badges = ({ data }: BadgesProps) => {
  return (
    <span
      className={`${data.backgroundColor ?? 'bg-blue-100'} ${data.color ?? 'text-blue-800'} ${data.fontSize ?? 'text-xs'} ${data.fontWeight ?? 'font-medium'} me-2 px-2.5 py-0.5 rounded ${data.darkBackgroundColor ?? 'dark:bg-blue-900'} ${data.darkColor ?? 'dark:text-blue-300'} mb-2`}>
      {data.text ?? 'Badge'}
    </span>
  );
};
