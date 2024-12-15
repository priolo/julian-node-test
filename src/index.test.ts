import { PathFinder, RootService } from "typexpress"
import TestService, { Actions, conf } from "./index.js"




describe("TEST SERVICE", () => {

	beforeAll(async () => {
	})

	test("su creazione", async () => {

		const root:RootService = await RootService.Start(
			<conf>{ class: TestService, name: "test" }
		)
		const testService = PathFinder.Get<TestService>(root, "/test")

		testService.setState({ value2: 10 })
		expect(testService.state.value2).toBe(10)

		testService.execute( { type: Actions.TEST_SET, payload: "topolino" } )
		expect(testService.state.value1).toBe("topolino")

		testService.execute( { type: Actions.TEST_INCREMENT, payload: 10 } )
		expect(testService.state.value2).toBe(20)

		await RootService.Stop(root)
	})

})