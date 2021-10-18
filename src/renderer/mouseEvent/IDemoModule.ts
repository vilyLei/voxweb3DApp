
interface IDemoModule {

    initialize(module: any): void;

    /**
     * running per frame
     */
    run(): void;
}

export { IDemoModule };