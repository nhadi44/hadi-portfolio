'use client';
import React from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { LaravelIcon } from '../icons/frameworks/laravel';
import { NextjsIcon } from '../icons/frameworks/nextjs';
import { NodejsIcon } from '../icons/frameworks/nodejs';
import { NuxtjsIcon } from '../icons/frameworks/nuxtjs';
import { BootstrapIcon } from '../icons/tools/bootstrap';
import { DockerIcon } from '../icons/tools/docker';
import { JiraIcon } from '../icons/tools/jira';
import { MysqlIcon } from '../icons/tools/mysql';
import { OracleIcon } from '../icons/tools/oracle';
import { PostgresIcon } from '../icons/tools/postgres';
import { PrismajsIcon } from '../icons/tools/prismajs';
import { SassIcon } from '../icons/tools/sass';
import { SequelizeIcon } from '../icons/tools/sequelize';
import { TailwindIcon } from '../icons/tools/tailwind';
import { VscodeIcon } from '../icons/tools/vscode';

export const FrameworksAndTools: React.FC = () => {
  return (
    <>
      <h1 className="text-center mb-20 font-semibold text-blue-500 text-xl">
        Frameworks & Tools
      </h1>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={8}
        autoplay={{
          delay: 2000, // Delay between transitions (in milliseconds)
          disableOnInteraction: false, // Autoplay will not be disabled after user interactions
        }}
        speed={500}
        effect="fade"
        loop={true}>
        <SwiperSlide>
          <NextjsIcon property={{ width: '4em', height: '4em' }} />
        </SwiperSlide>
        <SwiperSlide>
          <NodejsIcon property={{ width: '4em', height: '4em' }} />
        </SwiperSlide>
        <SwiperSlide>
          <LaravelIcon property={{ width: '4em', height: '4em' }} />
        </SwiperSlide>
        <SwiperSlide>
          <NuxtjsIcon property={{ width: '4em', height: '4em' }} />
        </SwiperSlide>
        <SwiperSlide>
          <TailwindIcon property={{ width: '4em', height: '4em' }} />
        </SwiperSlide>
        <SwiperSlide>
          <SassIcon property={{ width: '4em', height: '4em' }} />
        </SwiperSlide>
        <SwiperSlide>
          <BootstrapIcon property={{ width: '4em', height: '4em' }} />
        </SwiperSlide>
        <SwiperSlide>
          <DockerIcon property={{ width: '4em', height: '4em' }} />
        </SwiperSlide>
        <SwiperSlide>
          <JiraIcon property={{ width: '4em', height: '4em' }} />
        </SwiperSlide>
        <SwiperSlide>
          <MysqlIcon property={{ width: '4em', height: '4em' }} />
        </SwiperSlide>
        <SwiperSlide>
          <OracleIcon property={{ width: '4em', height: '4em' }} />
        </SwiperSlide>
        <SwiperSlide>
          <PostgresIcon property={{ width: '4em', height: '4em' }} />
        </SwiperSlide>
        <SwiperSlide>
          <PrismajsIcon property={{ width: '4em', height: '4em' }} />
        </SwiperSlide>
        <SwiperSlide>
          <SequelizeIcon property={{ width: '4em', height: '4em' }} />
        </SwiperSlide>
        <SwiperSlide>
          <VscodeIcon property={{ width: '4em', height: '4em' }} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
