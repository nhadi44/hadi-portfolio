'use client';

interface TimeLineItemData {
  id: number;
  title: string;
  date: string;
  description: string;
}

type TimelineProps = {
  data: TimeLineItemData[];
};

export const TimeLineItems = ({ data }: TimelineProps) => {
  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700">
      {data.map((item) => (
        <li className="mb-10 ms-14" key={item.id}>
          <span className="absolute flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full -start-5 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6">
              <path
                fillRule="evenodd"
                d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                clipRule="evenodd"
              />
              <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
            </svg>
          </span>
          <h3 className="flex items-center mb-2 text-lg font-semibold text-gray-900 dark:text-white">
            {item.title}
          </h3>
          <time className="block mb-4 text-[14px] font-normal leading-none text-gray-400 dark:text-slate-400">
            {item.date}
          </time>
          <div
            className="mb-4 text-base font-normal text-gray-500 dark:text-gray-300"
            dangerouslySetInnerHTML={{ __html: item.description }}></div>
          <div className="flex items-center space-x-2 text-slate-400 text-sm">
            <span>Next.js</span>
            <span className="text-gray-400">•</span>
            <span>Laravel</span>
            <span className="text-gray-400">•</span>
            <span>React</span>
            <span className="text-gray-400">•</span>
            <span>Node.js</span>
            <span className="text-gray-400">•</span>
            <span>Tailwind CSS</span>
          </div>
        </li>
      ))}
    </ol>
  );
};
