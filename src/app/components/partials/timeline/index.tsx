'use client';
import { TimeLineItems } from './timelineItems';

const TimeLineData = [
  {
    id: 1,
    title: 'Frontend Developer',
    date: 'PT Bringin Inti Teknologi (2022 - Present)',
    description: `
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro commodi, quisquam ad aspernatur ullam quaerat sit necessitatibus nostrum totam illum? Cum exercitationem voluptatibus necessitatibus nobis sequi dicta autem impedit reprehenderit ducimus. Dolores, corporis voluptatum voluptas, nobis vel provident possimus eaque eum quo, laudantium repudiandae libero eos debitis optio beatae cupiditate?
        </p>
      `,
  },
  {
    id: 2,
    title: 'Frontend Developer',
    date: 'PT Bringin Inti Teknologi (2022 - Present)',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro commodi, quisquam ad aspernatur ullam quaerat sit necessitatibus nostrum totam illum? Cum exercitationem voluptatibus necessitatibus nobis sequi dicta autem impedit reprehenderit ducimus. Dolores, corporis voluptatum voluptas, nobis vel provident possimus eaque eum quo, laudantium repudiandae libero eos debitis optio beatae cupiditate?',
  },
];

export const TimelineComponent = () => {
  return <TimeLineItems data={TimeLineData} />;
};
