'use strict';
const aws = require('aws-sdk');

function handleError(res, statusCode) {
  err = err ? err : new Error();
  err.status = statusCode || 500;
  return res.status(err.status).send(err);
}

/**
 * @api {get} /api/photo/s3-signed-req Request signed s3 url for photo upload
 * @apiName GetS3SignedUrl
 * @apiGroup Photo
 *
 * @apiParam (query params) {String} file-name filename
 * @apiParam (query params) {String} file-type filetype
 *
 *  @apiSuccessExample Success-Response:
 *  {
 *    filename: "skylinelogo.jpg",
 *    signedRequest: "https://ooops.s3.amazonaws.com/skylinelogo.jpg?AWSAccessKeyId=AKIAIFZTKXQ6JEZKFDQA.....",
 *    url: "https://ooops.s3.amazonaws.com/skylinelogo.jpg"
 *   }
 */

module.exports.getSignedRequest = (req, res, next) => {
  const s3 = new aws.S3();
  const fileType = req.query['file-type'];
  // const newFilename = `${Date.now()}_${req.query['file-name']}`;
  const newFilename = req.query['file-name'];
  
  const bucket = 'portfolio-undefined';
  const s3Params = {
    Bucket: bucket,
    Key: newFilename,
    Expires: 60,
    ContentType: fileType,
    ACL: 'public-read'
  };

  s3.getSignedUrl('putObject', s3Params, (err, data) => {
    if(err) return handleError(null, req, res, 500);
    const returnData = {
      signedRequest: data,
      url: `https://${bucket}.s3.amazonaws.com/${newFilename}`,
      filename: newFilename
    };
    res.json(returnData);
  });
};