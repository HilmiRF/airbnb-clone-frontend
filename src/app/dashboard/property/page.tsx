import { fetchAllProperty } from "@/actions/propertyAction";
import PropertyContainer from "@/components/features/property/PropertyContainer";
import Header from "@/components/layouts/header";
import Sidebar from "@/components/layouts/sidebar";
import { useFetchAllProperty } from "@/mutations/useFetchAllProperty";
import React, { FC } from "react";

interface PropertyPageProps {}

const PropertyPage: FC<PropertyPageProps> = ({}) => {
	// const properties = fetchAllProperty();

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
										<div className="flex flex-row gap-9 py-3">
											<PropertyContainer />
											<PropertyContainer />
											<PropertyContainer />
											<PropertyContainer />
										</div>
										<div className="flex flex-row gap-9 py-3">
											<PropertyContainer />
											<PropertyContainer />
											<PropertyContainer />
											<PropertyContainer />
										</div>
										{/* {properties?.output_schema.data.map(
											(item, index) => (
												<ul>
													<li key={item.id + index}>
														{item.title}
													</li>
												</ul>
											)
										)} */}
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

export default PropertyPage;
