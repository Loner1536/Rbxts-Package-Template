// Services
import { Players } from "@rbxts/services";

// Packages
import { Controller, OnInit } from "@flamework/core";
import { CreateForge } from "@rbxts/forge";
import Vide, { mount } from "@rbxts/vide";

// Controller
import Core from "@shared/core";

@Controller({ loadOrder: 1 })
export default class AppController implements OnInit {
	onInit() {
		const props = this.createProps(Players.LocalPlayer!);
		const forge = new CreateForge();

		mount(() => {
			return (
				<screengui Name={"App Tree"} ResetOnSpawn={false} IgnoreGuiInset>
					<forge.render
						props={{
							props,
							renders: {
								name: "Template",
							},
						}}
					/>
				</screengui>
			);
		}, Players.LocalPlayer.WaitForChild("PlayerGui"));
	}

	public createProps(player: Player) {
		const local_player = Players.LocalPlayer ?? player;

		if (!player) error("No LocalPlayer nor MockedPlayer found for AppController props");

		return {
			player: local_player,

			core: Core,
		} as const satisfies AppProps;
	}
}
