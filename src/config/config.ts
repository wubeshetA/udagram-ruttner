export const config = {
  "dev": {
    "username": process.env.POSTGRESS_USERNAME, 
    "password": process.env.POSTGRESS_PASSWORD, 
    "database": process.env.POSTGRESS_DATABASE, 
    "host": process.env.POSTGRESS_HOST,
    "dialect": "postgres",
    "aws_region": "us-east-1",
    "aws_profile": "default",
    "aws_media_bucket": "udagram-ruttner-wube-dev"
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
