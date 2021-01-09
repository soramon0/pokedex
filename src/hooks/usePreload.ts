import { useEffect, useState } from "react";
import { cacheResourcesAsync } from "../utils/cache";

function usePreload() {
	const [isReady, setIsReady] = useState(false);

	useEffect(() => {
		async function preloadData() {
			// load assets
			await cacheResourcesAsync();
			setIsReady(true);
		}

		preloadData();
	}, []);

	return {isReady}
}

export default usePreload;