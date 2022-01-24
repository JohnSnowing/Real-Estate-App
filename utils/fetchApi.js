import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
    const { data } = await axios.get(url, {
        headers: {
            "x-rapidapi-host": "bayut.p.rapidapi.com",
            "x-rapidapi-key":
                "21909e2882msh21fce592375ee4dp1b8d1cjsn6759ece51224",
        },
    });

    return data;
};
