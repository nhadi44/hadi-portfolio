'use client';
import React, { useEffect, useState } from 'react';
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
  const [currentWidth, setCurrentWidth] = useState<number>(0);
  const [config, setConfig] = useState({
    spaceBetween: 50,
    slidesPerView: 8,
    imageWidth: '4em',
    imageHeight: '4em',
  });

  useEffect(() => {
    setCurrentWidth(window.innerWidth);
    if (currentWidth <= 425) {
      console.log('Mobile');
      setConfig({
        spaceBetween: 2,
        slidesPerView: 4,
        imageWidth: '2em',
        imageHeight: '2em',
      });
    } else if (currentWidth <= 768) {
      console.log('Tablet');
      setConfig({
        spaceBetween: 8,
        slidesPerView: 5,
        imageWidth: '2.5em',
        imageHeight: '2.5em',
      });
    } else {
      console.log('Desktop');
      setConfig({
        spaceBetween: 50,
        slidesPerView: 8,
        imageWidth: '4em',
        imageHeight: '4em',
      });
    }

    window.addEventListener('resize', () => {
      setCurrentWidth(window.innerWidth);
    });
  }, [currentWidth]);

  console.log(currentWidth);

  return (
    <>
      <h1 className="text-center mb-7  lg:mb-20 font-semibold text-blue-500 text-xl uppercase">
        Frameworks & Tools
      </h1>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={config.spaceBetween}
        slidesPerView={config.slidesPerView}
        autoplay={{
          delay: 2000, // Delay between transitions (in milliseconds)
          disableOnInteraction: false, // Autoplay will not be disabled after user interactions
        }}
        speed={500}
        effect="fade"
        loop={true}>
        <SwiperSlide>
          <NextjsIcon
            property={{
              width: config.imageWidth,
              height: config.imageHeight,
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <NodejsIcon
            property={{
              width: config.imageWidth,
              height: config.imageHeight,
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <LaravelIcon
            property={{
              width: config.imageWidth,
              height: config.imageHeight,
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <NuxtjsIcon
            property={{
              width: config.imageWidth,
              height: config.imageHeight,
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TailwindIcon
            property={{
              width: config.imageWidth,
              height: config.imageHeight,
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SassIcon
            property={{
              width: config.imageWidth,
              height: config.imageHeight,
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <BootstrapIcon
            property={{
              width: config.imageWidth,
              height: config.imageHeight,
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <DockerIcon
            property={{
              width: config.imageWidth,
              height: config.imageHeight,
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <JiraIcon
            property={{
              width: config.imageWidth,
              height: config.imageHeight,
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <MysqlIcon
            property={{
              width: config.imageWidth,
              height: config.imageHeight,
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <OracleIcon
            property={{
              width: config.imageWidth,
              height: config.imageHeight,
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <PostgresIcon
            property={{
              width: config.imageWidth,
              height: config.imageHeight,
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <PrismajsIcon
            property={{
              width: config.imageWidth,
              height: config.imageHeight,
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SequelizeIcon
            property={{
              width: config.imageWidth,
              height: config.imageHeight,
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <VscodeIcon
            property={{
              width: config.imageWidth,
              height: config.imageHeight,
            }}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
