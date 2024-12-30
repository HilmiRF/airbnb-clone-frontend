"use client";

import SidebarComponent from "@/components/organisms/SidebarComponent";
import { useRouter } from "next/navigation";
import React, { FC } from "react";
import { AiOutlineHome, AiOutlineMessage } from "react-icons/ai";
import { BsGear } from "react-icons/bs";
import { FiLogOut, FiUsers, FiBookOpen } from "react-icons/fi";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
	const router = useRouter();

	return (
		<div className="pb-12 min-h-screen">
			<div className="space-y-4 py-4">
				<div className="px-3 py-2">
					<h2 className="mb-2 px-4 text-lg font-semibold">
						Dashboard
					</h2>
					<div className="space-y-3">
						<SidebarComponent
							onClick={() =>
								router.push("/dashboard/home/property")
							}
							className="w-full justify-start rounded-none hover:text-primary"
						>
							<AiOutlineHome className="mr-2 text-lg" /> Property
						</SidebarComponent>
						<SidebarComponent
							className="w-full justify-start rounded-none hover:text-primary"
							onClick={() =>
								router.push("/dashboard/home/review")
							}
						>
							<AiOutlineMessage className="mr-2 text-lg" /> Review
						</SidebarComponent>
						<SidebarComponent
							className="w-full justify-start rounded-none hover:text-primary"
							onClick={() =>
								router.push("/dashboard/home/booking")
							}
						>
							<FiBookOpen className="mr-2 text-lg" /> Booking
						</SidebarComponent>
						<SidebarComponent
							className="w-full justify-start rounded-none hover:text-primary"
							onClick={() => router.push("/dashboard/home/user")}
						>
							<FiUsers className="mr-2 text-lg" /> User
						</SidebarComponent>
					</div>
				</div>
				<div className="space-y-4 py-4">
					<div className="px-3 py-2">
						<h2 className="mb-2 px-4 text-lg font-semibold">
							Settings
						</h2>
						<div className="space-y-3">
							<SidebarComponent
								className="w-full justify-start rounded-none hover:text-red-500 hover:bg-red-200"
								onClick={() => router.push("/dashboard/signin")}
							>
								<FiLogOut className="mr-2 text-lg" /> Log out
							</SidebarComponent>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
