#!/bin/bash

kill -9 $(lsof -ti:3003)

npm run build

npm run dev