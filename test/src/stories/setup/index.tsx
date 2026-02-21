// Packages
import { CreateForge, type RenderProps } from "@rbxts/forge";
import { Flamework } from "@flamework/core";
import Vide from "@rbxts/vide";

// Types
import type { InferProps } from "@rbxts/ui-labs";

// Controllers
import AppController from "@client/controllers/app";

// Components
import playerDataTemplate from "./playerData";

// Shared
import Core from "@shared/core";

const mockedPlayer = {
	Name: "UI-Labs",
	UserId: 123456,
} as const satisfies Partial<Player> as Player;

// IMPORTANT: Ensures all decorators under @shared/apps are registered
Flamework.addPaths("src/client/interface/apps");

export default function Setup<T extends InferProps<{}>>({
	storyProps,
	callback,
	render,
}: {
	storyProps: T;
	callback?: (props: AppProps, Forge: CreateForge) => void;
	render?: RenderProps;
}) {
	const appController = new AppController();

	const props = appController.createProps(mockedPlayer);

	const { S } = Core;

	S.playerData.set(mockedPlayer, playerDataTemplate);

	const forge = new CreateForge();

	if (callback) callback(props, forge);

	return <forge.story props={props} target={storyProps.target} renders={render} />;
}
