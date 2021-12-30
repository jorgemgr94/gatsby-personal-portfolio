import { Link } from "gatsby";
import React from "react";

const NotFoundPage = () => {
	return (
		<div className="flex items-center justify-center w-full min-h-screen bg-gray-100">
			<div className="flex flex-col items-center text-gray-700 lg:flex-row lg:space-x-16 lg:space-x-reverse">
				<div className="order-1 max-w-md px-2 text-sm md:text-base lg:px-0">
					<header className="mb-6">
						<h2 className="text-4xl font-bold leading-none text-gray-400 select-none lg:text-6xl">
							404.
						</h2>
						<h3 className="text-xl font-light leading-normal lg:text-3xl md:text-3xl">
							{`Sorry, we couldn't find this page.`}
						</h3>
					</header>

					<p className="max-w-sm mb-5 leading-5 md:leading-7">
						{`Don't worry, sometimes even we make mistakes. You can find plenty of
						other things on my homepage.`}
					</p>

					<Link
						className="inline px-4 py-2 text-sm font-medium leading-5 text-white uppercase transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg shadow focus:outline-none focus:shadow-outline-blue active:bg-blue-600 hover:bg-blue-700"
						to="/"
					>
						Back to Homepage
					</Link>
				</div>
				<div className="max-w-lg">
					<img
						className="rounded-full"
						src="https://freefrontend.com/assets/img/html-funny-404-pages/GSAP-SVG-Animation-404-Error-Milk-Carton.gif"
					/>
				</div>
			</div>
		</div>
	);
};

export default NotFoundPage;
