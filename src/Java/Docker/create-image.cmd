docker build --no-cache -f SQL\Dockerfile.PostgreSql -t modul_ucheta_-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t modul_ucheta_-java/app ../../..
