
/**
 * A 3D APP Box view Demo
 */
class App {

    private m_initFlag: boolean = true;
    constructor() { }

    initialize(module: any): void {

        if (this.m_initFlag) {
            console.log("oscillator module initilaize....");
        }
    }

    /**
     * running per frame
     */
    run(): void {

    }
}

export { App };