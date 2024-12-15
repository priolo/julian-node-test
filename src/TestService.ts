import { ServiceBase } from "typexpress"
import { Actions } from "./utils.js"



export type TestServiceConf = Partial<TestService['stateDefault']> //& { class: "test" }

/**
 * E' solo un NODE di test per vedere se funziona l'import npm
 */
export class TestService extends ServiceBase {


	get stateDefault(): any {
		return {
			...super.stateDefault,
			value1: "pippo",
			value2: 34,
		}
	}

	get executablesMap(): any {
		return {
			...super.executablesMap,
			[Actions.TEST_SET]: async (value1: string) => this.setState({ value1 }),
			[Actions.TEST_INCREMENT]: (delta: number) => this.setState({ value2: this.state.value2 + delta }),
		}
	}
}
