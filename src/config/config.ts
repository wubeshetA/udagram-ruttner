export const config = {
  "dev": {
    "username": "udagram",
    "password": "abebesobela",
    "database": "udagram",
    "host": "udagram3.cyqd2cjlcqmu.us-east-1.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_region": "us-east-2",
    "aws_profile": "default",
    "aws_media_bucket": "udagram-ruttner"
  },
  "jwt": {
    "secret": "randomjwtsecret"
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
