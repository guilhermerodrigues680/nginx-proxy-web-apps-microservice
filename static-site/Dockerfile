FROM nginx:1.19.2-alpine

# Sobreescreve o arquivo nginx.conf
COPY nginx.conf /etc/nginx/nginx.conf

# Sobreescreve o arquivo default.conf
COPY default.conf /etc/nginx/conf.d/default.conf

# Copia o conteudo estatico
COPY . /usr/share/nginx/html
