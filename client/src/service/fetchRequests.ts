import axios from "axios";

export const URL_API = "http://localhost:8080";

export const getToken = (): string => {
    const token = localStorage.getItem("token");
    return token ? token : "";
};

class FetchRequests {
    async post(path: string, saveData: Object) {
        const url = URL_API + path;

        return await axios({
            method: "POST",
            url: url,
            data: JSON.stringify(saveData),
            headers: {
                token: getToken(),
                "Content-Type": "application/json; charset=utf-8",
            },
        })
            .then((res) => res.data)
            .catch((res) => {
                throw res;
            });
    }

    async get(path: string) {
        const url = URL_API + path;

        return await axios({
            method: "GET",
            url: url,
            headers: {
                token: getToken(),
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        }).then((res) => res.data);
    }

    async put(path: string, data: any) {
        const url = URL_API + path;

        return await axios({
            method: "PUT",
            url: url,
            data: data,
            headers: {
                token: getToken(),
                "Content-Type": "application/json",
            },
        }).then((res) => res.data);
    }

    async delete(path: string, params: any) {
        const url = URL_API + path;

        return await axios({
            method: "DELETE",
            url: url,
            params: params,
            headers: {
                token: getToken(),
                "Content-Type": "application/json",
            },
        }).then((res) => res.data);
    }

    async uploadImage(options: any) {
        const { onSuccess, onError, file } = options;

        try {
            const formData = new FormData();
            formData.append("image", file);

            const response = await axios.post(URL_API + "/rentFlat/uploadImage", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    token: getToken(),
                },
            });

            onSuccess(response.data, file);
        } catch (error) {
            console.error(error);
            onError(error);
        }
    }

    async getPdf(url: string, param: object): Promise<Blob> {
        try {
            const response = await axios.get(URL_API + url, {
                responseType: "blob",
                headers: { token: getToken() },
                params: param,
            });
            return response.data;
        } catch (error) {
            throw new Error("Ошибка при получении PDF файла");
        }
    }
}

export const request = new FetchRequests();
