import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./breadcrumb.css";

const Breadcrumbs = () => {
	const location = useLocation();
	const pathnames = location.pathname
		.split("/")
		.filter((x) => x && !x.includes("66")); // Exclude specific ID and empty segments
	// console.log("Filtered Pathnames:", pathnames);

	return (
		<nav>
			<ol className='breadcrumb'>
				<li className='breadcrumb-item'>
					<Link style={{ color: "black" }} to='/'>
						Home
					</Link>
				</li>
				{pathnames.map((value, index) => {
					const to = `/${pathnames.slice(0, index + 1).join("/")}`;
					return (
						<li key={to} className='breadcrumb-item'>
							<Link to={to}>{value.replace(/-/g, " ")}</Link>
						</li>
					);
				})}
			</ol>
		</nav>
	);
};

export default Breadcrumbs;
