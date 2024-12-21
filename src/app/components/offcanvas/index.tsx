'use client';

import { Drawer, Sidebar } from 'flowbite-react';
import { HiBriefcase, HiGlobeAlt, HiHome, HiPhone, HiPhotograph, HiUser } from 'react-icons/hi';
import { useAppDispatch, useAppSelector } from '@/libs/hook';
import { closeOffcanvas } from '@/libs/features/offcanvasSlice';

export const Offcanvas = () => {
  const offcanvas = useAppSelector((state) => state.offcanvas.open);
  const dispatch = useAppDispatch();

  return (
    <>
      <Drawer open={offcanvas} onClose={() => dispatch(closeOffcanvas())}>
        <Drawer.Header title="MENU" titleIcon={() => <></>} />
        <Drawer.Items>
          <Sidebar
            aria-label="Sidebar with multi-level dropdown example"
            className="[&>div]:bg-transparent [&>div]:p-0"
          >
            <div className="flex h-full flex-col justify-between py-2">
              <div>
                <Sidebar.Items>
                  <Sidebar.ItemGroup className={'space-y-5'}>
                    <Sidebar.Item href="/" icon={HiHome}>
                      Home
                    </Sidebar.Item>
                    <Sidebar.Item href="/" icon={HiUser}>
                      About Me
                    </Sidebar.Item>
                    <Sidebar.Item href="/" icon={HiPhotograph}>
                      Portfolio
                    </Sidebar.Item>
                    <Sidebar.Item href="/" icon={HiBriefcase}>
                      My Experience
                    </Sidebar.Item>
                    <Sidebar.Item href="/" icon={HiPhone}>
                      Contact
                    </Sidebar.Item>
                    <Sidebar.Item href="/" icon={HiGlobeAlt}>
                      My Blog
                    </Sidebar.Item>
                  </Sidebar.ItemGroup>
                </Sidebar.Items>
              </div>
            </div>
          </Sidebar>
        </Drawer.Items>
      </Drawer>
    </>
  );
};
