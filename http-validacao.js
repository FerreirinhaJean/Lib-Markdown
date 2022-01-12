import fetch from "node-fetch";

function exception(error) {
    throw new Error(error.message);
};

async function checkStatus(urls) {
    try {
        const status = await Promise.all(urls.map(async url => {
            const response = await fetch(url);
            return `${response.status} - ${response.statusText}`;
        }));

        return status;
    } catch (error) {
        exception(error);
    }
};

function createArrayLinks(links) {
    return links.map(link => Object.values(link).join());
};

async function validateLinks(links) {
    const arrayLinks = createArrayLinks(links);
    const statusLinks = await checkStatus(arrayLinks);

    const result = links.map((link, index) => ({
        ...link,
        status: statusLinks[index]
    }));

    return result;
};

export { validateLinks };