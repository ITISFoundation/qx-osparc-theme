FROM node:8.9.2

LABEL maintainer="oetiker" \
      description="OSparc Theme Dev"

# reuses user defined in base image
USER node

# qooxdoo versioning

# npm variables
ENV NPM_CONFIG_LOGLEVEL=warn
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

# access to bin
ENV PATH=$NPM_CONFIG_PREFIX/bin:$PATH

RUN npm install --quiet --no-progress -g \
        npm \
        qxcompiler \
 && npm ls -g qooxdoo


WORKDIR /home/node/src
VOLUME  /home/node/src
EXPOSE 8080

ENTRYPOINT [ "qx" ]
