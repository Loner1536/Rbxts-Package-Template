// Types
import type Types from "@shared/types";

declare global {
	type AppGroups = "Template";
	type AppNames = "Template" | "Child";
	type AppProps = {
		player: Player;

		core: Types.Core.API;
	};
}

export {};
