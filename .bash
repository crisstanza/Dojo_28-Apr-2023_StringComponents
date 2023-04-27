#!/bin/bash
clear ; cd "$(dirname "${0}")"

install() {
	npm install -g browser-sync
}

start() {
	browser-sync start --server --files *
}

status() {
	git status
}

pushItAll() {
	git add . && \
	git commit -m "Recent changes..." && \
	git push
}

if [ ${#} -eq 0 ] ; then
	echo -e "Usage: ${0} [COMMANDS]\nAvailable commands:"
	cat `basename ${0}` | grep '()\s{' | while read COMMAND ; do echo " - ${COMMAND::-4}" ; done
else
	for COMMAND in "${@}" ; do "${COMMAND}" ; done
fi
