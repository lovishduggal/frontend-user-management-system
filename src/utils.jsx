export const capitalizeFLetter = (string) => {
    return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
};

export const buildQueryString = (queryParams) => {
    const filteredParams = Object.entries(queryParams).filter(
        (item) => !!item[1]
    );

    const queryString = new URLSearchParams(filteredParams).toString();
    return queryString;
};
