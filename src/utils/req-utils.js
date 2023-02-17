const getReqData = function (req) {
    return new Promise((resolve, reject) => {
        try {
            let body = [];
            // listen to data sent by client
            req.on("data", (chunk) => {
                // append the string version to the body
                body.push(chunk)
            });
            // listen till the end
            req.on('end', () => {
                const users = JSON.parse(Buffer.concat(body).toString());
                resolve(users)
            })

        } catch (error) {
            console.log('err')

        }
    });
}

module.exports = getReqData