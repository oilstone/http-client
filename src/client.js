import Response from './response';

class Client {
    static #baseClient;

    constructor() {
        return new Proxy(
            this,
            {
                get: (target, property) => {
                    if (Reflect.has(Client.#baseClient, property)) {
                        return (...params) => {
                            return Reflect.get(Client.#baseClient, property)(...params).then(response => {
                                return new Response(response);
                            });
                        }
                    }

                    return Reflect.get(Client, property);
                }
            }
        );
    }

    static setBaseClient(http) {
        Client.#baseClient = http;
    }

    static getBaseClient() {
        return Client.#baseClient;
    }

    static make() {
        return new Client();
    }
}

export default Client;
