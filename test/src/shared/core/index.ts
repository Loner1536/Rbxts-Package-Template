// Packages
import { Plugin } from "@rbxts/planck-runservice";
import { Scheduler } from "@rbxts/planck";
import { world } from "@rbxts/jecs";

// Components
import Components from "./components";

// Shared
import StateManager from "@shared/states";

class Singleton {
	public W = world();
	public S = new StateManager();
	public C = new Components(this);

	public Scheduler: Scheduler<[this]>;

	constructor() {
		this.Scheduler = new Scheduler(this);
		this.Scheduler.addPlugin(new Plugin());
	}
}

const Core = new Singleton();

export default Core;
