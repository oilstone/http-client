class Response {
    #payload;

    constructor(payload) {
        this.#payload = payload;
    }

    extract() {
        switch (this.#payload.status) {
            case 200:
            case 201:
                return this.#payload.data;
        }

        return false;
    }
}

export default Response;