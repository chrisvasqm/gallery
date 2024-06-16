import aws from 'aws-sdk';

const spacesEndpoint = new aws.Endpoint('nyc3.digitaloceanspaces.com');
const s3 = new aws.S3({
  endpoint: spacesEndpoint,
  accessKeyId: process.env.BUCKET_ACCESS_KEY,
  secretAccessKey: process.env.BUCKET_SECRET_KEY
});

export const getSignedUrl = (key) => {
  const params = {
    Bucket: process.env.BUCKET_NAME,
    Key: key
  };

  return s3.getSignedUrl('getObject', params);
};