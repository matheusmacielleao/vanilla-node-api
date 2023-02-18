const getReqData = function (req) {
    return new Promise((resolve, reject) => {
        try {
            let body = [];

            req.on("data", (chunk) => {

                body.push(chunk)
            });

            req.on('end', () => {
                const completeBody = JSON.parse(Buffer.concat(body).toString());
                resolve(completeBody)
            })

        } catch (error) {
            console.log('err')

        }
    });
}

module.exports = getReqData