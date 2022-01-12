import fetch from "node-fetch";

async function checkStatus(urls) {
    const status = await Promise.all(urls.map(async url => {
        const response = await fetch(url);
        return response.status;
    }));

    return status;
};

function createArrayLinks(links) {
    return links.map(link => Object.values(link).join());
};

async function validateLinks(links) {
    const result = createArrayLinks(links);
    const statusLinks = await checkStatus(result);

    return statusLinks;
};

export { validateLinks };