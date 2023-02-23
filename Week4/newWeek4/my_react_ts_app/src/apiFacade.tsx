function apiFacade() {

    async function fetchData(method: string, data: any): Promise<any> {
        var url = "http://localhost:3008/person/";
        if (method == "PUT") {
            url = url + data.id
        }
        const response = await fetch(url, {
            method: method,
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error('Error fetching data');
        }
        return await response.json();
    }

        async function DELETE( id: number): Promise<any> {
            var url = "http://localhost:3008/person/" + id;
            const response = await fetch(url, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Error fetching data');
            }
            return await response.json();
        }


    return {
        fetchData,
        URL,
        DELETE,
    }
}

const facade = apiFacade();
export default facade;
