const { getSmarts } = require('./call');

exports.loop = async (token, hubId) => {
    let url = `https://v2.api.uberflip.com/hubs/${hubId}/filters?limit=10`;
    let page = 0;
    let totalPages = 0;
    let array = [];

    do{
      let res = await getSmarts(token, url);
    totalPages = res.meta.total_pages;
    page++;
    url = url + `?page=${page}`;
    console.log(`called: page ${page} of ${totalPages}`);
    array = array.concat(res.data);
    console.log(`array length: ${array.length}`);
    } while (page < totalPages);
    
    return array;
}