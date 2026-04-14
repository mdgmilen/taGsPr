export class TestConfig {
    private static instance: TestConfig;
    public readonly baseUrl: string = 'https://demoqa.com/automation-practice-form';
    public readonly timeout: number = 30000;

    private constructor() {}

    public static getInstance(): TestConfig {
        if (!TestConfig.instance) {
            TestConfig.instance = new TestConfig();
        }
        return TestConfig.instance;
    }
}