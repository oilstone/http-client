import Response from './response';

class Client {
    #baseClient;

    constructor(baseClient) {
        this.#baseClient = baseClient;

        return new Proxy(
            this,
            {
                get: (target, property) => {
                    if (Reflect.has(this.#baseClient, property)) {
                        return (...params) => {
                            return Reflect.get(this.#baseClient, property)(...params).then(response => {
                                return new Response(response);
                            });
                        }
                    }

                    return Reflect.get(this, property);
                }
            }
        );
    }
}

export default Client;