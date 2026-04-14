import testData from '../../data/testData.json';

export class UserDataBuilder {
    private data = { ...testData.defaultUser };

    withEmail(email: string) {
        this.data.email = email;
        return this;
    }

    withInvalidMessage() {
        this.data.message = ""; // To test validation
        return this;
    }

    build() {
        return this.data;
    }
}