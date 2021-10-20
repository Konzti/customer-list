FROM httpd:2.4-alpine
COPY ./dist/customer-list /usr/local/apache2/htdocs/