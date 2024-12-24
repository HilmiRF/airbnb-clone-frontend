import Header from "@/components/layouts/header";
import Sidebar from "@/components/layouts/sidebar";
import React, { FC } from "react";

interface HelloPageProps {}

const HelloPage: FC<HelloPageProps> = ({}) => {
	return (
		<html lang="en">
			<body>
				<main>
					<div className="border-t">
						<div className="bg-background">
							<div className="flex flex-row">
								<div className="hidden lg:block w-[18%]">
									<Sidebar />
								</div>
								<div className="col-span-3 overflow-auto lg:col-span-5 lg:border-l w-[82%]">
									<div className="px-6 py-6 lg:px-8">
										<Header />
										<div className="">Dashboard</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</main>
			</body>
		</html>
	);
};

export default HelloPage;
