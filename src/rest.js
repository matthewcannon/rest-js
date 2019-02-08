const get = fetch => url =>
    new Promise(resolve => {
        fetch(url).then(resolve);
    });

export { get };
