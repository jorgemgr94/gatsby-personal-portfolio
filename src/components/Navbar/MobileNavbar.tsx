import { BiMenu, BiX } from "react-icons/bi";
import { Disclosure } from "@headlessui/react";
import React from "react";

import { INavigationItem } from "./type";

import ProfilePhoto from "../../images/me.jpg";

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(` `);
}

export interface IDesktopNavbarProps {
	navigationItems: INavigationItem[];
	setCurrentItem: (currentItem: INavigationItem) => void;
}

function MobileNavbar({
	navigationItems,
	setCurrentItem
}: IDesktopNavbarProps) {
	return (
		<Disclosure
			as="nav"
			className="bg-gray-100 basis-full flex-col md:hidden dark:bg-gray-700"
		>
			{({ open, close }) => (
				<>
					<div className="flex items-center justify-between p-4">
						<div className="flex items-center justify-between">
							<div className="flex items-center">
								{/* Mobile menu button*/}
								<Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset dark:focus:ring-white">
									<span className="sr-only">Open main menu</span>
									{open ? <BiX /> : <BiMenu />}
								</Disclosure.Button>
							</div>
						</div>

						<img
							className="h-8 w-8 rounded-full"
							src={ProfilePhoto}
							alt="Profile photo"
						/>
					</div>
					<Disclosure.Panel className="sm:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1">
							{navigationItems.map((navigationItem) => (
								<a
									key={navigationItem.name}
									onClick={() => {
										close();
										setCurrentItem(navigationItem);
									}}
									className={classNames(
										`block px-3 py-2 rounded-md text-base font-medium text-gray-500`,
										navigationItem.current
											? `bg-white text-gray-800 dark:bg-gray-800 dark:text-white`
											: `dark:text-gray-300 dark:hover:text-white`
									)}
									aria-current={navigationItem.current ? `page` : undefined}
								>
									{navigationItem.name}
								</a>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}

export default MobileNavbar;
