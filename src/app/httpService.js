

export const http= {
    request: function(url, params, outFormat='json') {
        let ok= true;
        return new Promise((resolve, reject) => {
            fetch(url, params).then((resStream) => {
                ok= resStream.ok;
                if (ok) {
                    return resStream[outFormat]();
                }
                else {
                    reject(error);
                }
            }, (error) => {
                reject(error);
            })
            .then((data) => {
                resolve(data);
            })
        });
    },
    getMapPoints: function() {
        return http.request('/api/test_buildings.json', {mode: 'no-cors'});
    }
}