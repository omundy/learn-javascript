#!/bin/bash

echo 💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩💩

for FN in topics/*/*.md;
do
	BFN=${FN%.md};
	# echo "marp ${FN} -o test/${BFN#*/}.html;"
	marp $FN -o slides/${BFN#*/}.html;
done
